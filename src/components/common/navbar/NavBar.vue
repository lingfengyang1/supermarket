<template>
  <!-- tabbar设置id的原因在于整个项目中只有一个选项卡栏 而导航栏的话 整个项目中不止一个 id标识的是元素的唯一性 -->
  <div class="nav-bar">
    <!-- 由于样式作用和替换操作之间的顺序未知 因此的话 使用div元素去包裹slot元素最为保险 不需要担心替换操作将样式给覆盖而无法生效 -->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    /* 通过height和line-height一致可以保证内容垂直居中 一般都是44px */
    height: 44px;
    line-height: 44px;
    /* 设置布局方式为流式布局 */
    display: flex;
    /* 设置文本的水平对齐方式为居中对齐 */
    text-align: center;
    /* 设置柔和的颜色边界 */
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1)
  }
  .left, .right {
    width: 60px
  }
  .center {
    /* flex属性设置为1表示当前元素占据剩余的所有位置 就是除了left/right占据位置以外的位置 */
    flex: 1;
  }
</style>
