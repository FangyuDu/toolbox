<template lang="pug">
  .page-taskwall
    .page-header
      h1 今天的任务
    taskList(ref="list")
</template>
<script>
import taskList from '../components/taskList'
export default {
  name: 'taksWall',
  components: {
    taskList
  }
}
</script>
