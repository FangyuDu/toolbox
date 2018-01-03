import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'desk',
      component: require('@/modules/home').default
    }, {
      path: '/demo2',
      name: 'demo2',
      component: require('@/modules/demo2').default
    }, {
      path: '/demo3',
      name: 'demo3',
      component: require('@/modules/demo3').default
    }, {
      path: '/eTask',
      name: 'eTask',
      component: require('@/modules/etask').default,
      children: [{
        path: 'taskwall',
        component: require('@/modules/etask/pages/taskWall').default
      }, {
        path: 'projectList',
        component: require('@/modules/etask/pages/projectList').default
      }]
    }, {      
      path: '*',
      redirect: '/'
    }
  ]
})
