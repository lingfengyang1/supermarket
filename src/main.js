import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
// 设置$bus为所有组件共享
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
