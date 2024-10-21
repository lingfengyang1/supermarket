<template>
  <div class="feature">
    <!-- 封装不同特性商品的界面 该界面本质是可点击的图片 -->
    <a href="https://act.mogujie.com/zzlx67">
      <img src="~assets/img/home/recommend_bg.jpg" alt="">
    </a>
  </div>
</template>

<script>
  export default {
    name: "FeatureView"
  }
</script>

<style scoped>
  .feature img {
    /* 设置图片的宽度适应设备界面 */
    width: 100%
  }

</style>
