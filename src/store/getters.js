export default {
  // 获取购物车数组的长度
  cartLength(state) {
    // 将cartList长度的获取由mustache语法中转移到了computed中 只不过是将矛盾转移了 并没有消除获取语句十分冗长的问题 因此我们可以将该语句抽取到store的getters中 然后通过映射手段直接将getters插入到computed中即可
    return state.cartList.length
  },
  // 获取购物车数组
  cartList(state) {
    return state.cartList
  }
}
