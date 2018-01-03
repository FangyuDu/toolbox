import {
  ipcMain
} from 'electron'
import fs from 'fs-extra'
import path from 'path'
import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import shortId from 'shortid'

let dbPath = path.join(__dirname, 'db.json') 
let isExistDb = fs.existsSync(dbPath)

const adapter = new FileSync(dbPath)
const db = low(adapter)
if (!isExistDb) {
  db.defaults({
    projects: [],
    tasks: []
  }).write()
}

// 获取任务内容
ipcMain.on('etaskGetTasks', (e, v) => {
  let x = db.get('tasks').value()
  console.log(x)
  e.returnValue = x
})

// 添加任务
ipcMain.on('etaskAddTask', (e, v) => {
  let _init = {
    id: shortId.generate(),
    title: '未命名任务',
    creatTime: new Date().getTime(),
    state: '未开始'
  }
  v instanceof Object && Object.assign(_init, {})
  console.log(_init)
  db.get('tasks')
    .push(_init)
    .write()
  e.sender.send('etaskAddTask', {
    success: true,
    message: '已保存'
  })
})
// 删除任务