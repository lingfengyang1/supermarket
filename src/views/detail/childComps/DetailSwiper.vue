<template>
  <!-- 这边的class类名不要起成swiper 因为Swiper组件内部querySelector('.swiper') 可能会引发类名冲突问题 从而导致轮播图无法正常播放 -->
  <swiper class="detail-swiper">
    <!-- 通过轮播图中的图片数量来遍历轮播图的每一个小组件 -->
    <!-- 在v-for的过程中 建议提供key 这样才能够防止dom复用现象的出现 也就是排除多个组件共享的可能性 -->
    <swiper-item v-for="item in topImages" :key="item">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  /* 图片太大了 我们自定义高度即可  */
  .detail-swiper {
    height: 300px
  }
</style>
