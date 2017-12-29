<template lang="pug">
  .desk
    router-link(:to="`/${item.path}`" tag="div" v-for="(item, index) in apps" :key="`app-${index}`").app-item 
      | {{item.name}}
</template>
<script>
export default {
  name: 'desk',
  data() {
    return {
      apps: [
        {
          name: '2-1 通信测试',
          path: 'demo2'
        }, {
          name: '2-2 本地储存测试',
          path: 'demo3'
        }, {
          name: '2-3 简单项目：任务管理',
          path: 'taskAdmin'
        }, {
          name: '未解锁项目',
          path: 'demo3'
        }, {
          name: '未解锁项目',
          path: 'demo3'
        }, {
          name: '未解锁项目',
          path: 'demo3'
        }, {
          name: '未解锁项目',
          path: 'demo3'
        }, {
          name: '未解锁项目',
          path: 'demo3'
        }, {
          name: '未解锁项目',
          path: 'demo3'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .desk {
    height: 100%;
    padding: 10px;
    background-color: #f2f2f2;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
  }
  .app-item {
    font-family: '华文琥珀', Arial, '宋体';
    background-color: #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: solid 1px transparent;
    transition: all .3s linear;
    cursor: pointer;
    &:hover {
      outline: solid 5px rgb(116, 107, 252);
    }
  }
</style>
