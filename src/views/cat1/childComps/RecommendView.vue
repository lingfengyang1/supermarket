<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        defaults() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  /* 设置推荐栏为流式布局 */
  .recommend {
    display: flex;
    /* 设置内容水平居中 */
    text-align: center;
    /* 设置内边距 */
    padding: 10px 0 20px;
    /* 设置字体大小 */
    font-size: 12px;
    /* 设置底部边框 */
    border-bottom: 10px solid #eee
  }
  /* 设置推荐栏的每一项均匀分布在推荐栏中 */
  .recommend-item {
    flex: 1;

  }
  /* 设置推荐栏项中图片的宽高 */
  .recommend-item img {
    width: 70px;
    height: 70px;
    /* 设置图片的底部外边距 */
    margin-bottom: 11px
  }

</style>
