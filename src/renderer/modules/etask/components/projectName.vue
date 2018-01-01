<template lang="pug">
  li
    i.project-logo {{icon}}
    .project-name {{title}}
</template>
<script>
export default {
  name: 'projectItem',
  props: {
    title: {}
  },
  computed: {
    icon() {
      return this.title.substr(0, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
  li {
    display: flex;
    padding: 8px 5px 9px 33px;
    font-size: 12px;
    color: #c9cbcf;
    line-height: 24px;
    cursor: pointer;
    &:hover {
      background-color: #303236;
    }
    i {
      font-style: normal;
      color: #fff;
      opacity: .4;
      width: 24px;
      height: 24px;
      line-height: 24px;
      font-size: 16px;
      text-align: center;
      background-color: #ffb400;
      border-radius: 3px;
      margin-right: 4px;
      font-family: '微软雅黑', Arial, '宋体';
    }
  }
</style>
