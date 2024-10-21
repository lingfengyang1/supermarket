// 导入vue
import Vue from 'vue'
// 导入vue-router
import VueRouter from 'vue-router'
// 安装router插件
Vue.use(VueRouter)
// 通过懒加载导入组件
const Cat1 = () => import('views/cat1/Cat1')
const Cat2 = () => import('views/cat2/Cat2')
const Cat3 = () => import('views/cat3/Cat3')
const Cat4 = () => import('views/cat4/Cat4')
// 定义routes
const routes = [
  // 定义多套路由映射规则 即url-组件映射规则
  {
    path: '',
    redirect: '/cat1'
  },
  {
    path: '/cat1',
    component: Cat1
  },
  {
    path: '/cat2',
    component: Cat2
  },
  {
    path: '/cat3',
    component: Cat3
  },
  {
    path: '/cat4',
    component: Cat4
  }
]
// 实例化
const router = new VueRouter({
  routes,
  // 模式建议采用history模式
  mode: 'history'
})
// 导出路由
export default router
