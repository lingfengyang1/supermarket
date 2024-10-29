<template>
  <div class="backTop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop"
  }
</script>

<style scoped>
/* 该按钮是在该业务中共享的 并且除了内容共享以外 样式也是共享的 */
  .backTop {
    /* 在整个业务中 该按钮的位置统一都是滚动区域的右下角 并且是固定的 */
    position: fixed;
    right: 5px;
    bottom: 50px;
  }
  .backTop img {
    /* 缩小一下图片的大小 */
    width: 43px;
    height: 43px;
  }
</style>
