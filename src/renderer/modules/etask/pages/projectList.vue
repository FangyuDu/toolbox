<template lang="pug">
  .page_project-list
    .page-header
      span.ph-title 我的项目
    .page-content
      projectItem.pro-item(v-for="x in list" :name="x")
</template>
<script>
import projectItem from '../components/projectItem'
export default {
  name: 'projectList',
  data() {
    return {
      list: [
        '音乐数据集成',
        '工作日志',
        'CmsUI'
      ]
    }
  },
  components: {
    projectItem
  }
}
</script>

<style lang="scss" scoped>
  .page-header {
    padding: 30px;
    border-bottom: solid 1px #e1e1e1;
    .ph-title {
      font-size: 18px;
      color: rgb(102, 102, 102);
      line-height: 1;
    }
  }
  .page-content {
    padding: 30px;
    .pro-item {
      float: left;
      margin-right: 15px;
      margin-bottom: 15px;
    }
  }
</style>
