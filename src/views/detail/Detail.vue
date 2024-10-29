<template>
  <div id="detail">
    <!-- 导航栏的展示 由于导航栏的插槽内容较为复杂 所以说 不在此处定义 而是抽取为子组件调用 -->
    <detail-nav-bar class="detail-nav"/>
    <!-- 为以下元素设置为可滚动区域 -->
    <scroll class="content" ref="scroll">
      <!-- 我们在此要展示轮播图 只需要使用它 而不需要关心他的构造情况 具体细节 -->
      <detail-swiper :top-images="topImages"/>
      <!-- 展示基本信息模块 同时将我们有用的数据传递给该子组件去应用 -->
      <detail-base-info :goods="goods"/>
      <!-- 展示店铺信息模块 同时通过props的方式进行父传子将店铺相关的有用信息传递给子组件进行应用 -->
      <detail-shop-info :shop="shop"/>
      <!-- 展示商品模块 同时通过父传子方式传递商品信息 而且商品信息由于在res中仅仅保存在一个属性中 所以说 不需要特意封装一个对象来储存筛选出来的多个有用属性 -->
      <detail-goods-info :goods-info="goodsInfo" @goodsInfoImgLoad="goodsInfoImgLoad"/>
      <!-- 展示参数模块 同时通过父传子的方式传递参数信息 -->
      <detail-goods-params :goods-params="goodsParams" />
      <!-- 展示评论模块 利用props传递数据 -->
      <detail-comment-info :comment-info="commentInfo"/>
      <!-- 通过goods组件展示推荐模块 -->
      <goods-list :goods="recommends"/>
    </scroll>
  </div>
</template>
<!-- 每个商品的详情页肯定是有跳转的需求 所以交由路由管理该组件 -->
<script>
  // 导入子组件
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailGoodsParams from './childComps/DetailGoodsParams'
  import DetailCommentInfo from './childComps/DetailCommentInfo'

  // 导入公共组件
  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'

  // 导入方法和有用信息封装类
  import {getDetail, Goods, Shop, getRecommend} from 'network/detail'
  // import {debounce} from 'common/utils'
  import {itemListenerMixin} from 'common/mixin'
  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: [],
        // 用于保存有用信息 如果开发者工具中一直报错 说明这边用的是默认值(而并没有后期通过赋值覆盖掉这个空值) 将默认值即空值传递给子组件detail 但是detail要求的传递的是Object类型 所以说就会报错 解决方案就是初始值设置为空对象即可
        goods: {},
        shop: {},
        goodsInfo: {},
        goodsParams: {},
        commentInfo: {},
        recommends: [],
        // itemImageListener: null
      }
    },
    mixins: [itemListenerMixin],
    components: {
      DetailCommentInfo,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailGoodsParams,

      Scroll,
      GoodsList
    },
    created() {
      // console.log(this.$route.params);
      // 获取路由跳转时携带的参数
      // this.iid = this.$route.params.
      // console.log(this.$route.query.iid)
      this.iid= this.$route.query.iid
      // 请求网络数据 获取轮播图图片相关资源 我们只需要关心请求如何使用 不需要关心请求实现的细节 所以我们将具体实现封装到外面在内部调用即可
      getDetail(this.iid).then(res => {
        // 获取到的网络数据我们先行打印一下看看
        // console.log(res);
        // 由于以下代码中多次使用到res.data.result 因此的话 我们可以抽取出来作为一个变量以供调用
        const result = res.data.result;
        // 我们不要一股脑的将所有的数据都封装到一个data中 而是要分类储存
        this.topImages = result.itemInfo.topImages
        this.goods = new Goods(result.itemInfo, result.columns, result.shopInfo.services)
        this.shop = new Shop(result.shopInfo)
        this.goodsInfo = result.detailInfo
        // 由于参数信息在res中保存到一个属性中 所以说 不需要特地设计一个对象用于保存一个属性中的东西 他主要适用于分散在多个属性中的有用信息的储存操作的
        this.goodsParams = result.itemParams
        // 评论信息也不需要单独封装一个对象 如果没有评论的话 就不需要赋值了
        if(result.rate.cRate !== 0) {
          // 接收的这个参数中 时间是时间戳形式的 因为前端才可以基于时间戳的基础上进行不同的格式化操作 从而得到不同的结果进行展示
          this.commentInfo = result.rate.list[0]
        }
      })
      // 请求网络数据 获取详情页推荐模块相关的信息 并且储存到对应的变量中
      getRecommend().then(res => {
        console.log(res)
        this.recommends = res.data.list;
      })
    },
    // mounted() {
    //   // 但是你会发现 主页组件和详情组件中都有goods-list-item组件 而这两个组件中都包含有对各自图片加载完毕的监听动作 因此就会产生这么一个问题 即其中一个组件监听到图片加载完毕以后 就会立马发送自定义事件 这时候 主页组件和详情组件都会同时接收到该自定义事件 并做出相应的反应
    //   // 但其实我们的预期是各自组件监听到并发出自定义事件以后 应该由各自组件去接收 而非多个组件同时接收 这样的话 导致性能下降
    //   // 方法一：我们可以根据当前组件是否处于活跃状态来决定发送不同的自定义事件 这样的话 就可以让各自组件发出的自定义事件由各自组件去接收
    //   // 方法二：我们也可以不用区分不同组件的不同自定义事件 让他们同名 然后当某个组件不在处于活跃状态时 让其撤销对自定义事件的接收即可 注意 由于详情组件不在包含于keep-alive元素中 所以说 他不依赖于缓存机制来避免频繁创建和销毁 也就没有activated方法以及deactivated方法了
    //   // 所以说 如果详情组件的离开活跃状态的时机对应的生命周期方法为destroyed方法
    //   const refresh = debounce(this.$refs.scroll.refresh, 1)
    //   // 为防抖函数的函数参数赋值
    //   this.itemImageListener = () => {
    //     // this.$refs.scroll.refresh()
    //     // 但是以上操作由于图片加载监听的行为发生多次 导致刷新频率过高 我们应该利用防抖函数降低刷新频率 提高性能
    //     refresh()
    //   }
    //   // 由于详情页中的推荐模块也有图片 所以说 也可能引起betters-scroll在图片加载之前已经成功计算滚动内容的高度 为了防止这种现象的发生 我们需要在图片加载完毕以后重新刷新better-scroll 并且由于detail组件和goods-list-item组件的距离相差较远 所以采用事件总线的方式完成两者之间的通信工作
    //   // 我们可以将防抖函数中的函数参数抽取为变量进行调用
    //   this.$bus.$on('imageLoad', this.itemImageListener)
    // },
    mounted() {

    },
    destroyed() {
      this.$bus.$off('imageLoad')
    },
    methods: {
      goodsInfoImgLoad() {
        // 刷新better-scroll 重新计算滚动内容高度
        this.$refs.scroll.refresh()
        // console.log('你他妈比');
      }
    }
  }
</script>

<style scoped>
/* 在详情页 是不需要显示底部选项卡栏的 因此的话 我们可以直接设置我们的详情页面的定位方式为relative 并且设置详情页覆盖在选项卡栏之上 并且为了防止看到底部选项卡栏的东西 我们需要为其设置背景色为白色即可 */
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh
  }
  /* 设置指定区域用于better-scroll框架的局部滚动行为 */
  .content {
    /* 以下的100%是相对于父元素计算的 但是父元素由于没有固定的高度 所以采用默认的高度 即由内容决定的高度 这样的话 所设置的区域高度就是错误的 因此我们需要为父元素设置指定高度 即视口高度的100% */
    height: calc(100% - 44px)
  }
  /* 设置detail中的导航栏覆盖在基本页面之上 通过z-index实现 而z-index的实现则需要提前先设置position属性才行 */
  .detail-nav {
    position: relative;
    z-index: 9;
    /* 设置背景颜色 防止看到底部被覆盖的页面 */
    background-color: #fff;
  }
</style>
