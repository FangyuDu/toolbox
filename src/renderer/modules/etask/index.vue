<!--/*
  任务管理 - 首页
  @author: dufy
  @date: 2017/12/10
*/-->
<template lang="pug">
  .app-wrapper
    header.app-header
      .d-col-8
      .d-col-8.page-title 任务管理器
      .d-col-8.top-btn-group
        span.top-btn -
        span.top-btn +
        span.top-btn x
    .app-view
      .page-list
        .pl-left
          .pro-item 
            router-link(to="/desk" tag="p").pro-name 首页
          .pro-item 
            p.pro-name.is-active 工作台
          .pro-item
            p.pro-name 我的项目
            .pro-list
              projectName(v-for="(x, index) in projects" :key="`p-${index}`" :title="x.name")
          .pro-item
            p.pro-name.border-line 创建项目
        .pl-main
          taskList(ref="list")
    addTask(@saved="update")
</template>
<script>
import addTask from './components/addTask'
import taskList from './components/taskList'
import projectName from './components/projectName'
export default {
  data() {
    return {
      projects: [{
        name: '音乐数据集成'
      }, {
        name: '工作日志'
      }, {
        name: 'CmsUI'
      }]
    }
  },
  methods: {
    update() {
      this.$refs.list.update()
    }
  },
  components: {
    addTask,
    taskList,
    projectName
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
  .app-wrapper {
    display: flex;
    height: 100%;
    flex-direction: column;
    background-size: cover;
    background-color: #f2f2f2;
    .app-view {
      flex: 1;
      overflow-y: auto;

    }
  }
  .app-header {
    background-color: #3967b2;
    color: #fff;
    height: 40px;
    display: flex;
    line-height: 40px;
    -webkit-app-region: drag;
    &>*{
      width: 33.33%;
      float: left;
    }
    .page-title {
      text-align: center;
    }
    .top-btn-group {
      text-align: right;
      padding-right: 15px;
      box-sizing: border-box;
      .top-btn {
        display: inline-block;
        text-align: center;
        width: 30px;
      }
    }
      
  }
  .page-list {
    display: flex;
    height: 100%;
    .pl-left {
      width: 15%;
      max-width: 200px;
      min-width: 150px;
      box-shadow: 0 0 18px #888;
      background-color:rgb(61, 63, 67);
      color: #fff;
      .pro-item {
        line-height: 42px;

      }
      .pro-name {
        padding: 5px 5px 5px 20px;
        font-size: 14px;
        cursor: pointer;
        color: #94989e;
        &.is-active {
          background-color: #303236;
        }
        &.border-line {
          border-bottom: solid 1px #303236;
          border-top: solid 1px #303236;
        }
      }
    }
    .pl-main {
      flex: 1;
      overflow-y: auto;
    }
  }
</style>
