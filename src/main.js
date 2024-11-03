import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
// 设置$bus为所有组件共享
Vue.prototype.$bus = new Vue();
// 如果想要让其余组件通过toast插件去使用toast组件的话 即让其余组件使用toast插件 先要安装插件才行 安装插件时 会调用该插件中的install方法
Vue.use(toast)
// 移动端单击延迟300ms的问题由来：有这么一个场景 当我们点击一个链接时 浏览器并不能立判我们的行为到底属于单击打开还是双击缩放 所以说 在第一次点击之后 浏览器会腾出300ms的等待时间来监听我们是否产生第二次的点击事件 如果的确存在的话 那么说明我们执行的确实是双击缩放操作 否则的话 则执行的时单击打开链接的操作
// 但是该问题导致了原本的单击打开链接操作延迟了300ms才正常打开 这对于用户的体验感很差 因此的话 我们可以使用fastclick来消除浏览器对点击行为的歧义 从而使得单击打开链接行为可以快速完成
// fastclick插件的使用过程：1.安装 2.导入 3.使用
FastClick.attach(document.body)
// vue-lazyload的使用过程：1.安装 2.导入 3.安装插件/使用(在使用过程中 支持携带options 在options中可以内置一些参数 比如load可以用于设置图片加载时的占位图片) 4.将图片中涉及到src的地方替换成v-lazy
// 如果没有效果的话 可能是因为你测试的图片规模较小 你可以尝试扩大一下测试的范围
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})
// 以下操作
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
