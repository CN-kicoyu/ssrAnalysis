import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// import()函数，完成动态加载,返回一个 Promise 对象，可以实现按需加载
// 如果import()函数里面的模块有default输出接口，可以用参数直接获得。
// import('./myModule.js').then(myModule => { console.log(myModule.default);})
// default指的是export default的接口，所以这边实际上是调用'../view/CreateListView'的createListView函数，并把id传过去
const createListView = id => () => import('../view/CreateListView').then(m => m.default(id))
const ItemView = () => import('../views/ItemView.vue')
const UserView = () => import('../views/UserView.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0}),
    routes: [
      {
        // (\\d+)?表示只能是数字并且可以不需要
        path: '/top/:page(\\d+)?', component: createListView('top')
      }
    ]
  })
}
