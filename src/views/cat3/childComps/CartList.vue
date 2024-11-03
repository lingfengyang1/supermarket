<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item, index) in cartList" :key="index" :item-info="item"/>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import CartListItem from "./CartListItem";
  // 如果想要使用getters->computed的映射操作的话 那么前提是导入vuex中的mapGetters
  import {mapGetters} from 'vuex'

  export default {
    name: "CartList",
    components: {
      Scroll,
      CartListItem
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    // 购物车界面可能会出现这样的bug 即刚刚进入购物车界面且购物车中不存在任何的商品时 随后添加商品并达到可滚动的效果 但是实际上却不可滚动 这是因为一开始时 better-scroll框架计算的滚动内容高度为0 也就是在我们还未追加商品到购物车之前就已经确定了滚动内容的高度
    // 这样就导致了我们无法进行正常滚动操作 因此的话 我们需要在商品追加到购物车以后 即cart-list组件激活(由于cart-list-item组件的添加)刷新我们的better-scroll框架 这样就可以保证我们不会出现上述bug了
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart-list {
    /* 排除掉导航栏、选项卡栏以及底部栏的高度以后 剩余的高度就分配给滚动区域 */
    height: calc(100% - 44px - 49px - 40px)
  }
  .content {
    height: 100%;
    /* 如果.cart-list和.content仅仅设置了以下属性的话 那么.cart-list的高度就会默认由.content撑开 这时候的滚动属于全局滚动 可以通过滚动条滚动 这是我们不希望看到的结果 */
    /*height: calc(100% - 44px - 49px)*/
    /* 对于超出指定区域的部分我们应该截断 */
    /* 如果我们不设置以下属性的话 那么就会出现虽然我们对.cart-list和.content元素进行高度设限 但是由于内容超出了限制高度导致溢出部分默认展示(超出之后内容决定了元素的高度 而非我们设限的高度) 从而形成全局滚动 而我们的需求是局部滚动 我们在对高度进行设限的同时 还需要将超出高度的部分裁剪才行 这样就不会让内容去撑破高度了 */
    overflow: hidden
  }
</style>
