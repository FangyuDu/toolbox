import {
  ipcMain
} from 'electron'
import fs from 'fs-extra'
import path from 'path'
import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import shortId from 'shortid'

/* ------------------- 直接文件读取结束 ------------------- */
ipcMain.on('checkConfig', (e, v) => {
  let filePath = path.join(__dirname, v)
  let res
  try {
    res = fs.existsSync(filePath)
  } catch (err) {
    throw err
  }
  e.returnValue = res
})

ipcMain.on('createConfig', (e, v) => {
  let filePath = path.join(__dirname, 'config.json')
  let fileContent = JSON.stringify(v, null, 2)
  fs.writeFile(filePath, fileContent, 'utf-8', err => {
    if (err) throw err;
    e.sender.send('createConfig', {
      success: true,
      message: '配置文件已经创建'
    })
  })
})

ipcMain.on('loadConfig', (e, v) => {
  let filePath = path.join(__dirname, 'config.json')
  fs.readFile(filePath, 'utf-8', (err, data) => {
    e.returnValue = JSON.parse(data)
  })
})

/* ------------------- 直接文件读取结束 ------------------- */

/* ------------------- 数据库读取操作开始 ------------------- */
let dbPath = path.join(__dirname, 'db.json') 
let isExistDb = fs.existsSync(dbPath)
// if (!isExistDb) fs.writeJsonSync(dbPath, {posts: [], user: {}})
const adapter = new FileSync(dbPath)
const db = low(adapter)
if (!isExistDb) {
  db.defaults({
    tasks: []
  }).write()
}

ipcMain.on('addTask', (e, v) => {
  db.get('tasks')
  .push({
    id: shortId.generate(), 
    title: '新的任务',
    createDate: new Date().getTime(),
    state: '未开始'
  }).write()
  e.sender.send('addTask', {
    success: true,
    message: '数据已添加'
  })
})

ipcMain.on('getTask', (e, v) => {
  e.returnValue = db.get('tasks').value()
})

ipcMain.on('clearTask', (e) => {
  try {
    db.get('tasks')
      .remove()
      .write()
  } catch (err) {
    throw err
  }
  e.sender.send('clearTask', {
    success: true,
    message: '清除成功！'
  })
})
/* ------------------- 数据库读取操作结束 ------------------- */