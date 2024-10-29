<template>
  <div id="home">
    <!-- 在主页中 除了导航栏以外 其他的组件都是参与滚动的 为了更加平滑的滚动 并且实现回弹的效果 我们就需要使用better-scroll框架来包裹除导航栏以外的其他组件 -->
    <!-- 并且在整个项目中 不只是主页使用到了better-scroll框架的滚动条技术 其他路由界面也使用到了该技术 因此的话 我们如果直接导入并使用的话 耦合性/依赖程度就十分之高 因此的话 我们应该对第三方框架better-scroll先封装一层 然后在直接依赖这个封装层 这样的话 即使该框架不在维护 需要更换新框架时 可以让可维护成本降低 仅仅修改封装层中的依赖 而非多个依赖组件中的依赖 -->
    <!-- 导航栏在整个项目中不止一个 因此使用类选择器而非id选择器去套用样式 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 接着我们可以再次定义一个tab-control 动态决定他的存在 当scroll作用范围内的tab-control还未吸顶时 展示的是scroll作用范围内的tab-control 而当该作用范围内的tab-control已经吸顶以后 那么当前这个tab-control就可以显示出来了 -->
    <!-- 当tab-control2吸顶以后 那么tab-control1就可以显示了 -->
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl1" v-show="isFixed"/>
    <!-- props传递参数时 需要通过:来指定所传参数的具体类型为props指定的类型 -->
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll" :pullUpLoad="true" @pullingUp="loadMore">
      <!-- 由于当前界面只需要关心他的构成 而不需要关心具体构成他的子组件是如何构成的 所以将子组件的构成抽取为一个文件用以调用 并且由于该组件的构成代码较为复杂 所以也需要进行抽取 -->
      <!-- 还要注意通过父传子的方式将数据传递给home-swiper -->
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <!-- 此处无法省略: 因为这样就不能识别为数组 而是一个普通的字符串了 -->
      <!-- 而且在Car1模块中的该组件存在个性化需求 即当未达到指定位置时 position为static 而达到指定位置以后 position则为fixed 即固定不动 同时 子传父可以省略参数传递 直接使用载荷传递 -->
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl2"/>
      <!-- 展示商品 但是现在是固定传递某个类型的商品 并没有根据类型的不同而展示不同的商品 因此的话 我们需要根据用户在tabcontrol的点击事件来动态决定所展示的内容 -->
  <!--    <goods-list :goods="goods['pop'].list"/>-->
      <!-- 有currentType动态决定当前所要展示的内容 -->
  <!--    <goods-list :goods="goods[this.currentType].list"></goods-list>-->
      <goods-list :goods="showGoods"></goods-list>
      <!-- 你会觉得上述写法中goods的索引太长了 完全可以抽取为一个变量 并且抽取为计算属性 因为计算属性的好处在于他存在缓存机制 -->
    </scroll>
    <!-- 回到顶部的按钮肯定不属于滚动区域 而是独立于滚动区域 因此的话 在此设置回到顶部按钮 -->
    <!-- 如果我想要触发点击事件 对于组件而言 是不能够直接监听点击的 而是需要追加修饰符.native就可以实现对组件的点击监听了 -->
    <!-- 现在在实现组件监听点击的基础上 要进一步设计监听点击的逻辑 即调用BScroll对象的scrollTo(0, 0, 作用时间)就可以完成回到顶部的操作 但是就需要获取第三方框架封装层中的BScroll对象了 这点通过父访问子的方式即可实现 -->
    <back-top @click.native="backClick" v-show="this.isShowBacktop"/>
  </div>

</template>
<!-- 一般的话 我们会将项目中复用的组件存放到components目录中 然后将单独的组件存放到views目录中 其中 由于每一个组件可能存在子组件 所以说 每一个组件都需要存放于单独的目录下 -->
<script>
  // 一般的话 我们会按照公共组件/子组件/函数的分类方式分别导入这些组件 并且在注册组件时 也会按照导入的顺序进行 并且不同的类别之间会以空格隔开
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  // 将组件的导入写在一起 函数的导入写在一起 这样才方便观察
  import HomeSwiper from './childComps/HomeSwiper'
  // 导入推荐界面
  import RecommendView from './childComps/RecommendView'
  // 导入特性商品界面
  import FeatureView from './childComps/FeatureView'

  // 导入布偶猫页面的多个数据
  // import {getMultidata} from 'network/cat1'
  // // 导入布偶猫页面/主页中商品的指定模块指定页码的数据
  // import {getHomeGoods} from 'network/cat1'
  import {getMultidata, getHomeGoods} from "network/cat1";
  // import {debounce} from 'common/utils'
  import {itemListenerMixin} from 'common/mixin'
  export default {
    name: "Cat1",
    components: {
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,

      HomeSwiper,
      RecommendView,
      FeatureView
    },
    data() {
      return {
        banners: [],
        recommends: [],
        // 现在的话 我们在创建首页中的商品界面之前 需要先获取商品相关的数据 而数据中又会根据不同的模块分成不同的数据 因此的话 我们可以对应设计一个包含多个模块的对象 每一个模块都对应一个值 该值的话 包含当前所在的页数以及当前模块的数据数组 总之就是请求指定模块下指定页码下的指定数据
        // 总之我们用于保存数据的数据结构被设计为了一个包含多个模块的对象 其中每一个模块中都对应包含页码和数据两个属性
        goods: {
          // 初始情况下(组件还未创建之前的情形) 肯定是加载第0页的数据 也就是没有加载任何数据 并且已加载的数据为空
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        // 由于goods是通过字符串获取元素的 因此的话 我们需要通过变量保存当前状态下的类型 并且通过当前点击的类型索引来更新当前状态下的类型
        currentType: 'pop',
        // 是否隐藏回到顶部按钮肯定是动态决定 由是否超出某个临界值动态决定的 默认肯定是不会显示的
        isShowBacktop: false,
        tabOffsetTop: 0,
        isFixed: false,// 通过该变量动态决定tab-control是否要吸顶 默认肯定是不会吸顶
        // 定义一个变量 用于记录每一个组件最后状态的位置
        scrollY: 0,
        // itemImageListener: null
      }
    },
    mixins: [itemListenerMixin],
    // 获取数据的时机发生在组件创建完毕之后
    created() {
      // 我们的生命周期方法只需要关注网络请求的发送即可 至于说网络请求具体如何发送的 这不在关注的范围之内 因此的话 我们应该将具体逻辑抽取到函数中以供调用
      // 定义一个生命周期方法 当组件创建完毕时调用 以便获取当前页面所需的多个数据 由于函数返回的是promise对象 所以我们拼接then函数用于获取指定url的数据
      this.getMultidata()
      // 定义一个生命周期方法 当组件创建完毕之时 去获取指定模块指定页码下的商品 并且更新指定模块的相关参数(页码/商品) 如果组件一旦创建完毕以后 我们就可以为多个模块展示他们第一页的数据
      this.getHomeGoods("pop")
      this.getHomeGoods("new")
      this.getHomeGoods("sell")
      // 监听事件总线中的图片加载事件 一旦监听到 就刷新计算的滚动内容高度 调用refresh方法在该组件中同样不需要关心他的具体实现 因此封装到scroll组件中以供调用
      // 关于refresh未定义/未找到的bug 原因可能在于该监听被定义在了created生命周期方法中 在该方法中 scroll这个元素可能还为生成响应的dom 因此获取为空值 从而找不到指定的refresh方法 因此我们保证该元素生成dom之后在调用他的refresh方法才行
      // this.$bus.$on('imageLoad', () => {
      //   this.$refs.scroll.refresh()
      // })
    },
    // 如果没有通过keep-alive包裹当前组件的话 那么确实会频繁的创建和销毁 而当keep-alive包裹当前组件时 就会将当前组件的生命周期和vue的生命周期挂钩
    // destroyed() {
    //   console.log('Cat1 is destroyed');
    // },
    // 一旦通过keep-alive包裹当前组件以后 就可以使用activated/deactivated两个生命周期方法了
    // 保证当前组件不频繁销毁的目的在于为了共享当前组件中保存的最后记录的位置 我们需要在每一次的deactivated中记录当前组件最后状态的位置 然后在每一次的activated中完成当前组件跳转到最后位置的操作 而且该操作需要在短时间内完成 即0毫秒内
    deactivated() {
      // 获取当前组件的位置 为了体现良好的封装性 不关心内部的具体实现 所以说 我们需要在scroll中封装一个方法用于获取当前的滚动位置
      this.scrollY = this.$refs.scroll.getScrollY()
      // 除了保存最后状态的位置以外 我们还需要取消对自定义事件的接收
      this.$bus.$off('imageLoad')
    },
    activated() {
      // 完成跳转到最后状态位置的行为
      this.$refs.scroll.scrollTo(0, this.scrollY, 0)
      // 为了防止从其他组件跳转到当前组件时出现出乎意料的bug 比如跳转以后 在当前组件会突然上移等等 我们需要在跳转以后进行一次better-scroll的刷新
      this.$refs.scroll.refresh()
    },
    // mounted() {
    //   // 注意这边函数传递的是函数本身 而非函数调用以后的结果 同时不传递延迟时间也是好使的 因为默认就会提供一些延迟时间
    //   const refresh = debounce(this.$refs.scroll.refresh, 1)
    //   this.itemImageListener = () => {
    //     // this.$refs.scroll.refresh()
    //     // 该做法的好处就是在相同的时间内 减少刷新的频率 从而减轻服务器的压力 即在指定时间范围内 合并多次函数执行为一次函数执行
    //     refresh()
    //   }
    //   this.$bus.$on('imageLoad', this.itemImageListener)
    //   // 在此设置tab-control的吸顶的偏移距离 普通元素存在offset-top这个属性 但是组件不存在 所以需要通过组件中的元素来获取才行 但是在此获取的偏移距离是错误的 因为偏移距离中的图片资源还未加载出来
    //   // 由于在此获取的偏移距离是错误的 是在图片还未加载完毕时的偏移距离 因此的话 我们在为吸顶距离赋值时 需要在偏移距离中的所有图片都加载完毕以后才能够计算偏移距离 此时计算出来的偏移距离才是正确的 而且在偏移距离中的图片经过测试 轮播图中的图片加载速度最慢 只要在轮播图的图片加载完毕以后计算的偏移距离就是正确的
    //   // console.log(this.$refs.tabControl.$el.offsetTop);
    // },
    mounted() {

    },
    methods: {
      // 用于处理监听事件的方法
      tabClick(index) {
        // 根据不同的索引来更新不同的类型
        switch(index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        // 现在在主页中 存在着两个tab-control组件 我们必须要保证两者中处于活跃状态的按钮统一 因此我们需要重置两个组件的currentIndex属性
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      backClick() {
        // console.log('I am come back');
        // 但是为了良好的封装性 不具体关心内部如何实现的 我们应该将其封装以供调用
        // this.$refs.scroll.scroll.scrollTo(0, 0);
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      contentScroll(position) {
        // 动态决定回到顶部按钮是否需要显示
        this.isShowBacktop = (-position.y) > 1000
        // 动态决定tab-control是否需要吸顶
        this.isFixed = (-position.y) > this.tabOffsetTop
      },
      // 定义防抖函数 如果未能传递delay延迟事件的话 他依旧会对异步操作进行延迟  他的原理就是第一次执行时 会有延迟时间 在该阶段内 会监听到第二次图片加载 从而执行第二次函数 同时又重置了计时器 等到某一次计时器时间内未等到图片加载完毕 那么多次函数执行就被当成一次函数执行了
      /**
       * 就好像以下代码一样
       * console.log('aaa');
       * setTimeout(()=>{
       *   console.log('bbb');
       * });
       * console.log('ccc');
       * 他的打印结果并没有随着未设置延迟时间而变成aaa/bbb/ccc或者bbb/aaa/ccc 而是仍然会延迟执行bbb的打印 结果为aaa/ccc/bbb
       * @param func
       * @param delay
       */

      loadMore() {
        // 通过getHomeGoods方法获取指定类型中的更多的商品
        getHomeGoods(this.currentType)
        // console.log('上拉加载更多');
        // 并且你可能会发现一个bug 就是某个类型的商品还未拉到当前页码的最底部就提示上拉加载更多 而有的时候又拉到最底部才提醒 这是因为better-scroll这个框架会通过局部区域的高度和内容高度计算出滚动区域的高度 但是计算时机和图片加载时机在谁前谁后的问题上存在随机性 如果图片先加载完毕的话 那么计算出来的高度就是正确的 导致最终的上拉加载操作是正确的 但是如果图片加载在滚动区域高度计算之后发生的话 那么就会影响上拉加载操作的准确性
        // console.log('上拉加载更多');
      },
      swiperImgLoad() {
        // 当监听到轮播图中其中一张图片的加载行为以后 我们就可以获取tab-control的顶部偏移距离了
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        console.log(this.tabOffsetTop);
      },

      // 用于处理网络请求的方法
      getMultidata() {
        getMultidata().then(res => {
          // 由于该数据在函数内部 即位局部变量 他的生命周期和函数的生命周期挂钩 为了让其在组件生命周期内保存 因此我们需要将其保存在和组件生命周期挂钩的data中
          // this.result = res;
          // 但是响应的数据中 含有多个数据 我们应该设置多个data去保存他
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        // 获取当前模块即将展示的页码
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          // 将响应数据追加到指定模块下的数组
          // ...语法可以将数组展开为多个元素 而push方法则支持追加多个数据 而不支持追加一个数组
          this.goods[type].list.push(...res.data.list);
          // 更新当前模块记录的页码
          this.goods[type].page = page;
          // 但是我们会发现 如果不结束上一次的上拉加载操作 那么就无法开启下一次的上拉加载操作 所以说 我们在完成获取更多商品操作以后 还要结束上一次的上拉加载工作 并且为了体现良好的封装性 让用户不具体关心内部的实现 因此我们需要在scroll中封装一个完成上拉加载操作的方法
          this.$refs.scroll.finishPullUp()
        })
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: purple
  }
  /* 颜色的话(背景颜色以及字体颜色) 我们不能够封装到公共导航栏中定死 而是需要针对不同的导航栏进行不同的颜色样式设置 */
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    /* 由于我们已经通过better-control对导航栏和选项卡栏之间的区域进行局部滚动了 所以说 导航栏不会参与滚动 因此设置导航栏固定没有任何意义 只有当导航栏参与滚动时设置固定才有意义 */
    /* 保证导航栏在滚动过程中固定 */
    /*position: fixed;*/
    /*!* 设置固定位置 *!*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*!* 光设置固定还不够 我们发现 导航栏被其他页面给覆盖了 因此的话 我们需要设置堆叠值 用于堆叠在其他页面之上 *!*/
    /*z-index: 9;*/
  }
  /* 由于导航栏已经不在遵循默认的文档流 所以说 他会覆盖默认文档流的页面 因此的话 文档流应当和他之间设置距离 */
  #home {
    /* 通过设置文档流的上内边距来防止被导航栏覆盖 导航栏的高度为44 所以我们的padding-top也设置为44 */
    /* 如果导航栏已经回归了文档流 那么也就不需要设置以下属性 这样会导致导航栏被覆盖 */
    /*padding-top: 44px;*/
    /* 基于设备高度设置当前元素的高度 100vh相当于100% * 设备高度 */
    height: 100vh;
    position: relative
  }
  /* 以下属性的话 原本是用于tab-control这个组件达到某一个位置时可以实现吸顶效果 但是自从引入了better-scroll框架包裹他以后 就无法生效了 所以直接废弃这个样式 */
  /* 之后 我们就是对tab-control进行一个顶部偏离距离的计算 当偏离距离达到一定程度时 就实现吸顶效果 为此 我们需要在data中定义变量保存顶部偏移距离 */
  /* 设置控制选项卡的position属性为sticky 即当未达到指定位置时 值为static 而当达到指定位置以后 值为fixed 即固定不动了 */
  /*.tab-control {*/
  /*  !* 但是如果通过better-scroll设置了局部滚动的话 那么sticky将失效 *!*/
  /*  position: sticky;*/
  /*  !* 还需要设置固定不动的位置 即距离上边距44px 相当于一个导航栏的高度 *!*/
  /*  top: 44px;*/
  /*  !* 设置他的优先级 防止被后面的元素所覆盖 *!*/
  /*  z-index: 9;*/
  /*}*/
  /* 如果未指定高度的滚动属于原生的滚动效果 而非框架的滚动效果 因此的话 我们需要设置高度 指定的高度就是设备高度减去导航栏高度44和选项卡栏高度49 但是界面的高度却并非等价于设备高度 因为界面高度默认由内容高度决定 因此的话 我们可以通过百分比+vh(即view height)来基于设备高度设置界面高度 同时通过calc函数来计算滚动区域的高度 */
  .content {
    /*height: calc(100% - 93px);*/
    /*overflow: hidden;*/
    /*margin-top: 44px*/
    /* 除了说通过动态计算滚动区域高度以外 还可以通过定位的方式动态确定滚动区域的高度 遵循子绝父相的原则 */
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;

  }
  .tab-control {
    position: relative;
    z-index: 10
  }
  /* 设置吸顶样式 */
  /* 以下样式搭配:class={fixed: isfixed}并不能解决问题 反而导致了两个问题(①better-scroll会对指定区域中的已经固定的元素进行滚动操作 也就是说 当tab-control到达顶部时 会突然消失 因为他会继续往上滚动 ②tab-control以下内容的突然向上移动) */
  /* 显然采用这种方式是无法完成tab-control的吸顶效果的 */
  /*.fixed {*/
  /*  position: fixed;*/
  /*  top: 44px;*/
  /*  left: 0;*/
  /*  right: 0*/
  /*}*/
</style>
