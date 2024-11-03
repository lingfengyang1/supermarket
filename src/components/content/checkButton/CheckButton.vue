<template>
  <div  class="check-button" :class="{check: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    // isChecked属性的取值取决于cartList数组元素内部的属性 需要通过父传子的方式为isChecked赋值
    props: {
      isChecked: true
    }
  }
</script>

<style scoped>
  .check-button {
    /* 针对选中/未选中的样式 即设置圆角半径 将矩形变成圆形 并且设置边框默认属性 */
    border-radius: 50%;
    border: 2px solid #aaa;
  }
  .check {
    /* 当选中某个item中的复选按钮时 我们设置背景色为红色并且设置边框颜色为红色 */
    background-color: #f00;
    border: #f00;
  }
</style>
