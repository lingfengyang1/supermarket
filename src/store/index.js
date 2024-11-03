// 首先导入vue 用于安装vuex插件
import Vue from 'vue'
// 其次导入vuex
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 安装vuex插件
Vue.use(Vuex)
// 我们需要抽取Store实例中的属性
const state = {
  // 这边需要定义一个数组 用于存放购物车的多个商品
  cartList: []
}
// 接着创建store实例
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
// 然后将vuex挂载到Vue实例上 即导出vuex
export default store
