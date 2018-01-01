<template lang="pug">
  .pane-add-task
    .task-class 工作日志
    input.add-task__inner(@keyup.enter="quickSave", @input="handlerInput", v-model="title", placeholder="请输入任务, 按Enter键快速保存...")  
    el-dropdown.save-btn
      el-button(type="primary", size="mini")
        | 保存
        i.el-icon-arrow-down.el-icon--right
      el-dropdown-menu(slot="dropdown")
        el-dropdown-item 按Enter快速保存
        el-dropdown-item 按Ctrl+Enter完整编辑
</template>
<script>
import { ipcRenderer} from 'electron'
export default {
  name: 'addTask',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    quickSave() {
      this.$message({
        message: this.title,
        type: 'success'
      })
      // this.$alert('已保存成功', '成功')
      ipcRenderer.send('m', this.title)
      let x = ipcRenderer.sendSync('getTasklist', '')
      this.title = ''
      this.$emit('saved')
    },
    handlerInput(e) {
      let value = e.target.value
      value = value.replace(/\r/g, '')
      this.title = value
    }
  }
}
</script>

<style lang="scss" scoped>
  .pane-add-task {
    background-color: #fff;
    width: 100%;
    height: 40px;
    box-shadow: 0 0px 1px #888;
    font-size: 16px;
    text-align: center;
    display: flex;
    .task-class {
      line-height: 40px;
      width: 15%;
      min-width: 150px;
      max-width: 200px;
      background-color: #ccc;
      left: 0;
    }
    .add-task__inner {
      display: block;
      height: 100%;
      padding: 8px;
      border: 0;
      resize: none;
      outline: 0;
    }
    .save-btn {
      position: absolute;
      right: 8px;
      bottom: 5px;
    }
  }
</style>
