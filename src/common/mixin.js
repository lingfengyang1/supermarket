// 而且由于以下代码中引用了utils中的debounce函数 所以说这边需要提前引用才行
import {debounce} from 'common/utils'
// 导入BackTop组件
import BackTop from 'components/content/backTop/BackTop'
// 由于主页组件和详情组件中均存在重复的代码 并且重复代码都位于对象之中 无法通过继承的方式抽取公共代码(继承方式只能够抽取类的公共代码) 所以说 利用vue的高级知识混入来解决对象的公共代码抽取是再合适不过的方案了
export const itemListenerMixin = {
  // 利用混入的方式抽取公共代码的本质是将公共代码合并到子对象中
  data() {
    return {
      itemImageListener: null,
      newRefresh: null
    }
  },
  mounted() {
    // 但是你会发现 主页组件和详情组件中都有goods-list-item组件 而这两个组件中都包含有对各自图片加载完毕的监听动作 因此就会产生这么一个问题 即其中一个组件监听到图片加载完毕以后 就会立马发送自定义事件 这时候 主页组件和详情组件都会同时接收到该自定义事件 并做出相应的反应
    // 但其实我们的预期是各自组件监听到并发出自定义事件以后 应该由各自组件去接收 而非多个组件同时接收 这样的话 导致性能下降
    // 方法一：我们可以根据当前组件是否处于活跃状态来决定发送不同的自定义事件 这样的话 就可以让各自组件发出的自定义事件由各自组件去接收
    // 方法二：我们也可以不用区分不同组件的不同自定义事件 让他们同名 然后当某个组件不在处于活跃状态时 让其撤销对自定义事件的接收即可 注意 由于详情组件不在包含于keep-alive元素中 所以说 他不依赖于缓存机制来避免频繁创建和销毁 也就没有activated方法以及deactivated方法了
    // 所以说 如果详情组件的离开活跃状态的时机对应的生命周期方法为destroyed方法
    this.newRefresh = debounce(this.$refs.scroll.refresh, 1)
    // 为防抖函数的函数参数赋值
    this.itemImageListener = () => {
      // this.$refs.scroll.refresh()
      // 但是以上操作由于图片加载监听的行为发生多次 导致刷新频率过高 我们应该利用防抖函数降低刷新频率 提高性能
      this.newRefresh()
    }
    // 由于详情页中的推荐模块也有图片 所以说 也可能引起betters-scroll在图片加载之前已经成功计算滚动内容的高度 为了防止这种现象的发生 我们需要在图片加载完毕以后重新刷新better-scroll 并且由于detail组件和goods-list-item组件的距离相差较远 所以采用事件总线的方式完成两者之间的通信工作
    // 我们可以将防抖函数中的函数参数抽取为变量进行调用
    this.$bus.$on('imageLoad', this.itemImageListener)
  }

}
// 主页和详情页中均包含了回到顶部相关的逻辑 所以我们可以将其抽取到混入文件中
export const backTopMixin = {
  // 组件注册合并
  components: {
    BackTop
  },
  // 变量合并
  data() {
    return {
      isShowBacktop: false
    }
  },
  // 点击事件覆盖(methods中的函数的行为是覆盖 和生命周期函数的合并行为有所不同) 所以 detailScroll函数中的动态赋值isShowBacktop的行为不能内置于此
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    }
  }
}
