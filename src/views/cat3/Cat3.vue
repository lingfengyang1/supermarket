<template>
  <div class="cart">
    <nav-bar class="nav"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <cart-list/>
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'
  // 如果想要让getters映射为computed的话 我们事先需要导入vuex中的mapGetters
  import {mapGetters} from 'vuex'
  export default {
    name: "Cat3",
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      // mapGetters有两种用法 一种是数组 不能重命名 一种是对象 可以重命名
      ...mapGetters(['cartLength'])
    }
  }
</script>

<style scoped>
  .nav {
    background: var(--color-tint);
    color: #fff
  }
  .cart {
    /* 手动设置高度 防止高度默认由内容决定 */
    height: 100vh
  }
</style>
