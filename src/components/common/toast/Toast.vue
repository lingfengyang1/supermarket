<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    // 既然我们其余组件已经不在直接依赖于toast组件 那么也就不需要通过父传子的方式为toast子组件赋值了 改用data去表示toast弹窗的相关信息
    // props: {
    //   message: {
    //     type: String,
    //     default: ''
    //   },
    //   isShow: {
    //     type: Boolean,
    //     default: false
    //   }
    // }
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message, duration=1000) {
        this.isShow = true;
        this.message = message;

        setTimeout(() => {
          this.isShow = false;
        }, duration)
      }
    }
  }
</script>

<style scoped>
  .toast {
    /* toast窗口出现时 位于窗口的中心位置 */
    position: fixed;
    top: 50%;
    left: 50%;
    /* 但是上述固定位置只是让.toast元素距离上边距50% 左边距50% 并没有完全水平/垂直居中 因此的话 我们还需要以下transform属性才能完全做到水平和垂直居中的效果 通过该属性可以完成对当前元素的平移操作 */
    /* 平移时 需要水平方向上和垂直方向上两个方向上的取值 并且以向右和向下为正值 */
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
    /* 设置内边距 */
    padding: 5px 10px;
    /* 由于在详情页中展示toast时 该窗口被覆盖在详情页之下 所以说 我们需要通过设置z-index来覆盖在详情页之上显示 */
    z-index: 10
  }
</style>
