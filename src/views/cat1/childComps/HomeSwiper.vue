<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <!-- 只用动态绑定href属性 才能够使得值中的item变量生效 否则就会被识别为字符串 -->
      <a :href="item.link">
        <!-- src属性也需要动态绑定 -->
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>
<!-- 该组件确信是只属于Cat1界面的 因此的话 可以直接内置于views/cat1中 而非components/content中 -->
<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>
