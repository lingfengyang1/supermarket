<template>
  <nav-bar>
    <div slot="left" class="back" @click="goBack">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <!-- Key的提供防止dom复用的风险 -->
      <div class="titleItem" v-for="(item, index) in titles" :class="{active: currentIndex === index}" @click="itemClick(index)" :key="index">{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "DetailNavBar",
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        // 定义变量 用于记录当前处于活跃状态的中间部分的小组件
        currentIndex: 0
      }

    },
    components: {
      NavBar
    },
    methods: {
      itemClick(index) {
        // 需要动态更新活跃状态的小组件
        this.currentIndex = index
        // 除了说更新当前处于活跃状态的按钮索引以外 我们还需要发送自定义事件供父组件截取
        this.$emit('detailItemClick', index)
      },
      goBack() {
        // 完成回退页面的操作
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .title {
    /* 设置导航栏的中间部分文本流式布局 */
    display: flex;
    /* 缩小文本大小 */
    font-size: 13px
  }
  .title .titleItem {
    /* 并且保证导航栏中间部分的所有小组件均分该部分 */
    flex: 1
  }
  /* 设置左边部分中的图片稍微垂直 由于是父子组件的缘故 所以说 建议通过padding来设置垂直效果 因为margin针对父子组件可能会引起上下margin传递等问题 */
  .back {
    padding-top: 5px
  }
  /* 设置中间部分活跃组件的样式 */
  .active {
    color: var(--color-high-text)
  }
</style>
