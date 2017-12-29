<template lang="pug">
  .demo3
    h1 本地储存
    .control-pane
      el-button(@click="checkFile") 检测文件
      el-button(@click="createConfig" :disabled="exists") 创建配置文件
      el-button(@click="readFile" :disabled=" !(isChecked && exists)") 读取配置文件信息
    .control-pane
      el-button(@click="getTasks") 查询数据
      el-button(@click="addTask") 添加数据
    el-table(:data="tasks" style="width: 800px")
      el-table-column(prop="id" label="id")
      el-table-column(prop="title" label="标题")
      el-table-column(prop="createDate" label="创建时间")
      el-table-column(prop="state" label="状态")
    hr
    router-link(to="/") 返回
</template>
<script>
import {ipcRenderer} from 'electron'
import listener from '@/mixins/listener'
export default {
  name: 'demo3',
  mixins: [listener],
  data() {
    return {
      exists: true,
      fileName: 'config.json',
      isChecked: false,
      tasks: []
    }
  },
  methods: {
    checkFile() {
      const {fileName} = this
      this.exists = ipcRenderer.sendSync('checkConfig', fileName)
      this.isChecked = true
      let res = this.exists ? '已存在': '未创建'
      this.$message({
        message: `配置文件${res}`,
        duration: 1000
      })
    },
    createConfig() {
      let data = {
        fullscreen: false,
        frame: false,
        width: 800,
        height: 600
      }
      ipcRenderer.send('createConfig', data)
    },
    readFile() {
      const {fileName} = this
      let config = ipcRenderer.sendSync('loadConfig')
      console.log(config)
    },
    addTask() {
      ipcRenderer.send('addTask')
    },
    getTasks() {
      let value = ipcRenderer.sendSync('getTask')
      this.tasks = value
    }
  },
  created() {
    ipcRenderer.on('createConfig', (e, v) => {
      if (v.success) {
        this.$message({
          type: 'success',
          message: `配置文件创建成功`,
          duration: 1000
        })
        this.exists = true
      }
    })
  },
  destroyed() {
    ipcRenderer.removeAllListeners('createConfig')
  }
}
</script>

<style lang="scss" scoped>
  .control-pane {
    padding: 10px 20px;
  }
</style>