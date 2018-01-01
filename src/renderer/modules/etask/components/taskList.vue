<template lang="pug">
  .task-list
    .task-item(v-for="(item, index) in taskList", :key="'task-'+index")
      p {{item.name}}
</template>
<script>
import {ipcRenderer} from 'electron'
export default {
  name: 'taskList',
  data() {
    return {
      taskList: ''
    }
  },
  methods: {
    update() {
      this.taskList = ipcRenderer.sendSync('getTasklist', '')
    }
  },
  created() {
    // this.update()
  }
}
</script>
<style lang="scss" scoped>
  .task-list {
    padding: 10px;
  }
  .task-item {
    height: 40px;
    line-height: 40px;
    margin-bottom: 10px;
    padding: 0 15px;
    box-shadow: 0 0 8px #888;
    cursor: pointer;
    background-color: rbga(255, 255, 255, .1);
    &:hover {
      box-shadow: 0 0 16px #888;
    }
  }
</style>
