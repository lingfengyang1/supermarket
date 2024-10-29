<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <!-- 只用动态绑定href属性 才能够使得值中的item变量生效 否则就会被识别为字符串 -->
      <a :href="item.link">
        <!-- src属性也需要动态绑定 -->
        <img :src="item.image" alt="" @load="imgLoad">
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
    },
    data() {
      return {
        isLoad: false// 一开始肯定是false 初始阶段 没有任何轮播图图片被成功加载
      }
    },
    methods: {
      imgLoad() {
        // 由于轮播图中存在四张图片 所以以下语句会执行四次打印操作
        // console.log('轮播图图片加载完毕');
        // 为了降低图片加载时间的监听频率 并且我们只需要监听其中一张图片就可以计算处正确的偏移距离 因此的话 我们只需要设置一个变量 用于判断轮播图中的其中某一个张图片是否加载完毕来决定其他图片的加载行为是否需要得到监听 不要通过debounce防抖函数去处理 因为防抖函数不一定就会将这几次图片加载合并为一次 可能会并为若干次
        if(!this.isLoad) {
          // 发送自定义事件 通过子传父完成父子之间的通信
          this.$emit('swiperImgLoad')
          // 并且重置监听行为为true
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
