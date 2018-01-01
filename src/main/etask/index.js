import {
  ipcMain
} from 'electron'
import fs from 'fs-extra'
import path from 'path'
import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import shortId from 'shortid'

