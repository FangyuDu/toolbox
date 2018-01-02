<template lang="pug">
  .project-item
    i.project-logo {{icon}}
    .project-name(v-text="name")
</template>
<script>
export default {
  props: {
    name: {}
  },
  computed: {
    icon() {
      return this.name.substr(0, 1)
    }
  }
}
</script>
<style lang="scss" scoped>
  $borderRadius: 6px;
  .project-item {
    background-color: #fff;
    width: 174px;
    height: 200px;
    padding: 7px;
    border: solid 1px #e0e0e0;
    font-size: 12px;
    color: #c9cbcf;
    line-height: 24px;
    cursor: pointer;
    border-radius: $borderRadius;
    &:hover {
      border:solid 1px #ddd;
      box-shadow: 0 2px 6px rgba(0, 0, 0, .08);
    }
    i {
      font-style: normal;
      color: #3967b2;
      opacity: .4;
      width: 160px;
      height: 160px;
      line-height: 24px;
      font-size: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: $borderRadius;
      text-align: center;
      background-color: #ccc;
      margin-right: 4px;
      font-family: '微软雅黑', Arial, '宋体';
    }
    .project-name {
      text-align: center;
      color: #444;
    }
  }
</style>
