import {ipcRenderer} from 'electron'

export default {
  created() {
    ipcRenderer.on('msg', (e, v) => {
      console.log(e, v)
    })
  },
  destroyed() {
    ipcRenderer.removeAllListeners('msg')
  }
}