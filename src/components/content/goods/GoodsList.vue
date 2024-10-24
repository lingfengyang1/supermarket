<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goodsItem="item"/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    /* 设置商品界面为流式布局 */
    display: flex;
    /* 默认流式布局的话 会将当前大组件中的所有商品都挤在一行显示 为了让每一行都根据图片宽度进行显示 我们就可以设置wrap属性 这样 一行中 最多只能够展示两个小组件 */
    flex-wrap: wrap;
    /* 现在的话 由于一行中显示的两个商品并没有均分这一行 看起来十分别扭 因此可以通过justify-content: space-around来保持元素-边缘以及元素-元素的间距相同 但是两者本身是不一致的 */
    justify-content: space-around;
    /* 如果你想要元素-边缘的间距扩大的话 你可以通过设置内边距实现 */
    padding: 2px
  }
</style>
