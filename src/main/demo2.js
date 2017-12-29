import {
  ipcMain
} from 'electron'
import fs from 'fs-extra'
import path from 'path'
ipcMain.on('msg', (e, v) => {
  console.log('收到的消息：', e, v)
  e.sender.send('msg', '你好，你的消息已收到。')
})

ipcMain.on('createFile', (e, v) => {
  let filePath = path.join(__dirname, v)
  console.log('测试', v)
  fs.writeFile(filePath, '成功创建文件！', 'utf-8', err => {
    if (err) throw err;
    e.sender.send('msg', filePath+'文件已创建')
  })
})