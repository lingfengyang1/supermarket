<template>
  <!-- 现在就是利用该组件封装better-scroll 让所有的组件都依赖于该封装层 可维护性较强 并且提供插槽 用于随时替换滚动的内容 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script>
  // 导入better-scroll
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0// 默认是不会监听滚动过程
      },
      pullUpLoad: {
        type: Boolean,
        default: false// 默认不开启上拉加载更多行为的监听
      }
    },
    // 设置mounted生命周期方法 当组件生成dom以后就可以获取其中的dom来实例化BScroll 当然 实例化对象的生命周期要和vue的生命周期挂钩 因此需要保存到data中
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        // 整个属性是用于辅助滚动行为的设置的 但是在整个项目中 并不是所有的页面都是需要实时监听滚动过程的 有的页面只需要监听手指触动时的滚动过程 有的页面甚至不需要监听滚动过程 因此这个取值需要由每一个页面具体决定
        probeType: this.probeType,
        // 整个项目中的该组件中应该都是允许监听点击事件的 因此的话 再次为该属性写死即可 这样才能够允许tab-control组件中的按钮点击行为进行监听 否则无法进行点击操作
        click: true,
        pullUpLoad: this.pullUpLoad
      })
      // 实时监听他的滚动行为 并且打印每一时刻的滚动位置 在监听滚动行为之前 我们先要判断一下是否允许监听滚动行为 允许的取值为2或者3
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (position) => {
          // console.log(position);
          // 我们拿到位置肯定不是直接打印 而是需要交给外界去应用 具体应用就是判断是否超出某个临界值决定是否隐藏回到顶部的按钮 通过子传父的$emit方式完成
          this.$emit('scroll', position)
        })
      }
      // 监听局部区域的上拉加载更多行为 需要在允许监听上拉加载更多的行为基础上进行对该行为的监听才对
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          // 发送自定义事件给父组件
          this.$emit('pullingUp')
        })
      }
    },
    methods: {
      // 以下方法中 如果方法调用者本身为空的话 那么这些方法也会出现未定义的bug 所以在调用之前 我们需要判断他们非空才行
      scrollTo(x, y, time=300) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      refresh() {
        // console.log('refresh'); 打印操作 由于总共有30张图片 所以就需要打印30次 未免也太频繁了 因此的话 我们需要限制短时间内的打印次数不要那么频繁 在相同时间内减少刷新频率 从而减轻服务器的压力 我们就可以使用防抖函数进行处理
        // 防抖函数的本质就是在指定时间内只执行一次指定函数 同时不断的覆盖计时器 如果过程中计时器未能够将下一次的函数执行包含在内的话 那么前面几次函数执行就被当成一次函数执行看待 然后在重新开启一次全新的函数执行
        this.scroll && this.scroll.refresh()
      },
      // 封装完成上拉加载操作的函数
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp();
      },
      // 获取当前滚动位置的函数
      getScrollY() {
        // 当scroll为空时 说明当前滚动位置返回的为0 否则的话 我们就返回当前的滚动位置
        return this.scroll ? this.scroll.y : 0
      }
    }

  }
</script>

<style scoped>

</style>
