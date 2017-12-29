<template lang="pug">
  .demo2
    h1 通信测试
    .control-pane
      el-button(@click="testPing") 测试信号
      el-button(@click="createFile") 创建文件
    hr
    router-link(to="/") 返回
</template>
<script>
import {ipcRenderer} from 'electron'
import listener from '@/mixins/listener'

export default {
  name: 'demo2',
  mixins: [listener],
  methods: {
    testPing() {
      console.log('开始测试通讯信号')
      ipcRenderer.send('msg', '你好')
    },
    createFile() {
      console.log('开始创建文件')
      let fileName = `file-${new Date().getTime()}.txt`
      ipcRenderer.send('createFile', fileName)
    }
  }
}
</script>

<style lang="scss" scoped>
  .control-pane {
    padding: 10px 20px;
  }
</style>
