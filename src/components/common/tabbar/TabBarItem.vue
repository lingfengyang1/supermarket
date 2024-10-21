<template>
  <!-- 我们要监听导航栏中小组件的点击行为 肯定不能够将监听函数置于app.vue中 因为其里面的小组件太多 需要设置很多次监听函数 所以说我们统一在此设置 才不会编写十分麻烦 -->
  <div class="tab-bar-item" @click="itemClick" :style="activeStyle">
    <!-- 导航栏中小组件在导航栏中共享复用 他的内部组成的话是动态的 因此的话 我们不能够写死他的内容 而且他的内容主要有两部分组成 图片和文本 两部分都是动态变化的 因此得相应设置两个剧名插槽才行 -->
    <!-- 但是的话 小组件在活跃前后里面的图片和文本肯定也有对应不同的样式 即图片和文本在活跃之前和活跃之后肯定都有相对应的样式 而且这些活跃前后的不同图片/文本的话 都是先一次性加载到组件中 然后在根据活跃前后的状态来决定加载哪一个样式的图片/文本 -->
    <!-- 我们的思路是设置一个状态变量 用于记录小组件的活跃状态 根据该变量来决定展示活跃前/活跃后的图片/文本 但是我们不知道插槽属性的作用和插槽的替换操作的先后顺序 所以说 我们可以使用一个外部元素包裹图片/文本 将状态变量作用于外部元素 这样 就是插槽先执行替换操作的话 也不会对我们的状态变量有什么干扰 -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- 通过isActive决定active属性是否需要设置 从而决定是否处于活跃状态而变红 -->
    <div :class="{active: isActive}">
      <!-- 文本如若处于活跃状态的话 那么就将其颜色变红即可 -->
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      link: String, // 我们通过父组件往子组件中传递对应小组件的url 而且该传递不是动态传递 而是静态传递 因为源头值不是变量 是固定值
      // 我们仍然可以采用父传子的方式获取用户想要设置的颜色 并且当用户没有设置时 可以提供默认颜色
      activeColor: {
        default: 'red',
        type: String
      }
    },
    // data() {
    //   return {
    //     isActive: true// 该值用于映射图片/文本的活跃状态 并且作用于图片/文本的外部元素上 如果直接作用于图片/文本的话 那么如果先执行插槽的替换操作的话 那么这个状态就会被搞消失了
    //   }
    // },
    computed: {
      isActive() {
        // this.$route中内置了默认的变量path 但是没有link这个变量
        return this.$route.path.indexOf(this.link) !== -1
      },
      // 同样的 我们也可以为颜色样式设置计算属性
      activeStyle() {
        // 如果当前组件处于活跃状态的话 那么就可以为其设置动态颜色样式 否则的话 就不设置任何样式
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        // 一旦点击的话 我们就要执行路由跳转 跳转到指定url 展示指定的页面 但是目的地url如果获取 这是一个问题
        this.$router.replace(this.link)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    /* 设置flex为1 表示均分所在行 */
    flex: 1;
    /* 设置水平居中效果 */
    text-align: center;
    /* 设置字体大小 缩小字体的大小 */
    font-size: 14px
  }
  /* 通过后代选择器为小组件中的图片设置宽高属性 */
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    /* 图片太靠上面了 因此的话 我们可以设置上外边距 */
    margin-top: 3px;
    /* 图片默认底部会有留白 因此的话 我们可以通过设置垂直居中来避免底部留白的效果 */
    vertical-align: center;
    /* 图片底部的外边距太小了 和文本距离太近 因此的话 我们可以设置外边距 */
    margin-bottom: 1px;
  }
  /* 但是呢 虽然功能已经大部分完成 用户如果有改变按钮活跃样式的需求 他还得到我们的源码中理解并找到相应位置进行修改 这不是特别友好 最友好的是 让用户只需要了解如何使用 不需要了解底层实现 封装的更彻底一些 让颜色也动态变化 而非写死 */
  /* 但是呢 用户传递的颜色被内置于js代码中 无法共享给样式表 因此的话 我们不能通过样式表为组件设置样式 而是需要动态绑定内联样式属性 */
  /*.active {*/
  /*  color: red;*/
  /*}*/
</style>
