<template>
  <div id="detail">

    <!-- 导航栏的展示 由于导航栏的插槽内容较为复杂 所以说 不在此处定义 而是抽取为子组件调用 -->
    <detail-nav-bar class="detail-nav" @detailItemClick="detailItemClick" ref="nav"/>
    <!-- 为以下元素设置为可滚动区域 如果你发现滚动事件没有监听到的话 可能是因为你采用了默认的probeType取值0 -->
    <scroll class="content" ref="scroll" @scroll="detailScroll" :probeType="3">
      <!-- 检验一下购物车商品数量 -->
<!--      <ul>-->
<!--        <li v-for="item in $store.state.cartList">{{item}}</li>-->
<!--      </ul>-->
      <!-- 我们在此要展示轮播图 只需要使用它 而不需要关心他的构造情况 具体细节 -->
      <detail-swiper :top-images="topImages"/>
      <!-- 展示基本信息模块 同时将我们有用的数据传递给该子组件去应用 -->
      <detail-base-info :goods="goods"/>
      <!-- 展示店铺信息模块 同时通过props的方式进行父传子将店铺相关的有用信息传递给子组件进行应用 -->
      <detail-shop-info :shop="shop"/>
      <!-- 展示商品模块 同时通过父传子方式传递商品信息 而且商品信息由于在res中仅仅保存在一个属性中 所以说 不需要特意封装一个对象来储存筛选出来的多个有用属性 -->
      <detail-goods-info ref="goods" :goods-info="goodsInfo" @goodsInfoImgLoad="goodsInfoImgLoad"/>
      <!-- 展示参数模块 同时通过父传子的方式传递参数信息 -->
      <detail-goods-params ref="params" :goods-params="goodsParams" />
      <!-- 展示评论模块 利用props传递数据 -->
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <!-- 通过goods组件展示推荐模块 -->
      <goods-list ref="recommends" :goods="recommends"/>
    </scroll>
    <!-- 底部栏展示 -->
    <detail-bottom-bar @addToCart="addToCart"/>
    <!-- 回到顶部按钮展示 -->
    <back-top v-show="isShowBacktop" @click.native="backClick"/>
    <!-- 弹窗显示 通过父传子的方式为子组件传递值 如果传递的是字符串的话 由于默认会被识别为字符串 所以说就不需要在变量前面加上: 但是如果传递的是变量的话 那么就需要加上:来将传递的值识别为变量 -->
<!--    <toast :message="message" :isShow="isShow" />-->
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
  import DetailBottomBar from './childComps/DetailBottomBar'

  // 导入公共组件
  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'
  // import Toast from 'components/common/toast/Toast'
  // import BackTop from 'components/content/backTop/BackTop'

  // 导入方法和有用信息封装类
  import {getDetail, Goods, Shop, getRecommend} from 'network/detail'
  import {debounce} from 'common/utils'
  import {itemListenerMixin, backTopMixin} from 'common/mixin'

  // 导入第三方框架中的内容
  import {mapActions} from 'vuex'
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
        // 用于储存每一个主题的上限位置
        themes: [],
        // 定义一个防抖函数 用于减少主题赋值的次数/图片加载的次数
        getThemes: null,
        currentIndex: 0,
        // message: '',
        // isShow: false
        // 定义一个变量 用于判断回到顶部按钮是否需要显示 默认不显示
        // isShowBacktop: false
        // itemImageListener: null
      }
    },
    mixins: [itemListenerMixin, backTopMixin],
    components: {
      DetailCommentInfo,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailGoodsParams,
      DetailBottomBar,

      Scroll,
      GoodsList,
      // Toast
      // BackTop
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
        console.log(res);
        // 由于以下代码中多次使用到res.data.result 因此的话 我们可以抽取出来作为一个变量以供调用
        const result = res.data.result;
        // 我们不要一股脑的将所有的数据都封装到一个data中 而是要分类储存
        this.topImages = result.itemInfo.topImages
        this.goods = new Goods(result.itemInfo, result.columns, result.shopInfo.services)
        console.log(this.goods)
        this.shop = new Shop(result.shopInfo)
        this.goodsInfo = result.detailInfo
        // 由于参数信息在res中保存到一个属性中 所以说 不需要特地设计一个对象用于保存一个属性中的东西 他主要适用于分散在多个属性中的有用信息的储存操作的
        this.goodsParams = result.itemParams
        // 评论信息也不需要单独封装一个对象 如果没有评论的话 就不需要赋值了
        if(result.rate.cRate !== 0) {
          // 接收的这个参数中 时间是时间戳形式的 因为前端才可以基于时间戳的基础上进行不同的格式化操作 从而得到不同的结果进行展示
          this.commentInfo = result.rate.list[0]
        }
        this.getThemes = debounce(() => {
          this.themes = []
          this.themes.push(0)
          this.themes.push(this.$refs.params.$el.offsetTop)
          this.themes.push(this.$refs.comment.$el.offsetTop)
          this.themes.push(this.$refs.recommends.$el.offsetTop)
          // 为了统一所有主题元素的判断逻辑 我们需要在末尾提供一个无限大的数字
          this.themes.push(Number.MAX_VALUE)
          console.log(this.themes);
        }, 200)
        // 那么假如我们的子组件上边界偏移量的计算时机发生在数据传递以后 那么会发生什么事情
        // this.themes.push(0);
        // this.themes.push(this.$refs.params.$el.offsetTop);
        // this.themes.push(this.$refs.comment.$el.offsetTop);
        // this.themes.push(this.$refs.recommends.$el.offsetTop);
        // console.log(this.themes);
        // 打印结果显示 仍然是中间两个未定义 这是因为数据的赋值并不意味着组件重新渲染 相反 数据的赋值一段时间过后 待到重新渲染以后 才有成功访问$el的机会 所以这边定义依旧不是最佳时机
        // 当然 除了updated以外 我们也可以在为每个主题子组件传递数据之后 设计一个时机 用于计算每一个主题子组件上边界偏移量的值
        // 他仅仅会在当前组件完全更新以后调用执行 不会像updated更新那样可能触发多次调用
        // this.$nextTick(() => {
        //   this.themes = []
        //   this.themes.push(0)
        //   this.themes.push(this.$refs.params.$el.offsetTop)
        //   this.themes.push(this.$refs.comment.$el.offsetTop)
        //   this.themes.push(this.$refs.recommends.$el.offsetTop)
        //   console.log(this.themes);
        // })
        // 但是呢 this.$nextTick/updated这两种方式得到的上边界偏移量其实很有可能都不正确 因为他们计算的偏移量很有可能不包含图片 图片加载发生在重新渲染之后 导致主题模块跳转出错
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
      // 假如我们获取子组件上边界偏移量的操作发生在mounted时机
      // this.themes.push(0);
      // this.themes.push(this.$refs.params.$el.offsetTop);
      // this.themes.push(this.$refs.comment.$el.offsetTop);
      // this.themes.push(this.$refs.recommends.$el.offsetTop);
      // console.log(this.themes);
      // 通过打印信息查看 你会发现 该时机发生时 中间部分由于数据还未传递就访问$el 所以出现未定义的问题 所以mounted不适合作为计算子组件上边界偏移量的操作时机
      // 其实出现了未定义的情况 主要是由于你获取到的是一个未渲染完毕的dom元素 访问他的$el属性所致
    },
    destroyed() {
      this.$bus.$off('imageLoad')
    },
    // updated() {
    //   // 当前组件更新时调用该生命周期函数
    //   // 将themes赋值为空值的含义在于在下次重新更新之前重新赋值
    //   this.themes = [];
    //   // 我们要将每一个主题的上限位置依次储存到themes中 而每一个主题的上限位置其实就是他们的offsetTop 组件的该属性需要通过$el获取才行
    //   this.themes.push(this.$refs.goods.$el.offsetTop);
    //   this.themes.push(this.$refs.params.$el.offsetTop);
    //   this.themes.push(this.$refs.comment.$el.offsetTop);
    //   this.themes.push(this.$refs.recommends.$el.offsetTop);
    //   console.log(this.themes);
    //   // 从结果来看 可能存在多次更新打印 最后一次(所有主题的子组件都重新渲染完毕 导致当前组件最后一次更新渲染完毕)的更新打印表明了正确的结果 证明了更新时机就是计算每个主题上边界偏移量值的正确时机
    // },
    methods: {
      ...mapActions({
        addCart: 'addToCart'
      }),
      goodsInfoImgLoad() {
        console.log('---');
        // 刷新better-scroll 重新计算滚动内容高度
        // this.$refs.scroll.refresh()
        // console.log('你他妈比');
        // 你在此处监听多张图片的加载行为时 你需要针对多张图片的加载进行多次刷新 虽然这样解决了滚动到某个位置不能继续滚动的问题 但是这样刷新频率未免太高了 因此的话 我们需要通过防抖函数降低频率
        // 如果我们直接将防抖函数内置于该函数内部的话 那么每一次都会创建一个全新的防抖函数 这样就没有达到我们通过一个防抖函数来解决多次图片加载的目的 因此的话 我们的防抖函数需要的是仅仅创建一次 我们就可以在mixin文件中的mounted函数中直接将防抖函数充当为这边应用的防抖函数 因为mounted在整个vue生命周期当中仅仅执行一次 所以说 里面的防抖函数也仅仅只创建了一次
        // 当然上述图片加载行为的监听除了通过父子组件的通信$emit外 也可以通过事件总线的方式$bus.$emit来实现
        this.newRefresh()
        // 只有当图片加载完毕以后所计算的偏移量才是准确的

        // this.themes = []
        // this.themes.push(0)
        // this.themes.push(this.$refs.params.$el.offsetTop)
        // this.themes.push(this.$refs.comment.$el.offsetTop)
        // this.themes.push(this.$refs.recommends.$el.offsetTop)
        // console.log(this.themes);
        this.getThemes()
      },
      detailItemClick(index) {
        // 我们想要动态的点击某个按钮 跳转到详情页中的指定主题部分 注意当y值为负数时 才可以往下滚动
        this.$refs.scroll.scrollTo(0, -this.themes[index], 200)
      },
      detailScroll(position) {
        // 除了导航栏点击可以跳转到指定的主题组件以外 我们在滚动过程中滚动到某一个主题组件时 上面的导航栏也要有所反应 也就是说 导航栏和我们的主题组件之间是一个双向绑定的过程
        // 当我们的滚动位置处于第一个值和第二个值之间 说明当前组件索引为0 如果处于第二个值和第三个值之间的话 说明当前组件索引为1 第三个值和第四个值之间组件索引为2 超过第四个值说明组件索引为3 边界条件要包括
        // 保存一下主题组件数组的长度
        let positionY = -position.y
        let length = this.themes.length;
        for(let i in this.themes) {
          let newI = parseInt(i);
          // console.log(newI);
          // 该遍历方式遍历的是数组元素的索引 但是该索引类型为字符串 为了防止他和数字之间通过+进行字符串拼接 而非所谓的加法操作 我们需要先对i进行类型转换之后才可以进行加法操作
          // 对于前三个索引和最后一个索引的处理方式有所不同 所以通过||分隔
          // 但是上述条件判断随着滚动操作的频率增高而增高 即条件判断很频繁 因此导致打印逻辑执行的十分频繁 因此的话 我们需要定义一个变量 用于针对某一个主题组件仅仅需要打印一次即可 该变量用于记录当前主题组件的索引值 第一个主题组件没有相关打印很正常 因为一开始currentIndex === 0
          // if(this.currentIndex !== newI && ((newI < length - 1 && positionY >= this.themes[newI] && positionY < this.themes[newI + 1]) || (newI === length - 1 && positionY >= this.themes[newI]))) {
          //   this.currentIndex = newI
          //   // 除了更新当前组件中的currentIndex属性以外 我们还需要更新一下导航栏中的该属性 以便看到导航栏样式的实时更新
          //   this.$refs.nav.currentIndex = this.currentIndex
          //   console.log(newI);
          // }
          // 但是上述判断实在过于冗长 导致性能下降 所以说 我们可以通过空间换时间的方式来简化判断 我们可以在themes数组中的末尾提供一个无限大的数字 用于合并主题数组中所有元素的判断方式
          if(this.currentIndex !== newI && (positionY >= this.themes[newI])) {
            this.currentIndex = newI
            this.$refs.nav.currentIndex = this.currentIndex
          }

        }
        // 除了上述这些逻辑以外 我们还需要根据实时滚动的位置来判断一下回到顶部按钮是否需要显示
        this.isShowBacktop = positionY > 1000
      },
      // backClick() {
      //   this.$refs.scroll.scrollTo(0, 0, 300)
      // }
      addToCart() {
        // 在购物车中展示的信息包括topImage、title、desc、iid(在购物车中用于表示商品的唯一性)以及一个价格(由于itemInfo中的price属性可能是一个范围 所以说不好以该形式展示给用户 所以说 我们需要设置一个真实的价格 这边我们以lowNowPrice属性作为我们所要展示的价格)
        const product = {};
        product.topImage = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.iid = this.iid;
        product.price = this.goods.realPrice;
        // 接着的话 我们就需要在detail组件和购物车组件这两个没有关系的组件之间进行购物信息的共享了 这里适合使用vuex来管理我们要共享的数据/信息
        // 通过mutations去修改state中的cart数组
        // this.$store.commit('addToCart', product)
        // 现在就是想要添加一个toast弹窗的效果(我们通常将弹出的窗口称之为toast 即吐司 因为弹窗会停留若干时间 而吐司的热气也是如此 也会持续若干时间) 弹窗的操作肯定是要在addToCart这个actions方法调用完毕/添加到购物车行为完毕以后才进行的 但是直接在dispatch之后进行弹窗不好 因为dispatch之后紧接着的时机并不代表购物车添加行为彻底完成了
        // 为了让购物车商品添加行为彻底完成的话 我们需要将具体的逻辑封装到promise中 而actions方法恰恰支持可以返回一个promise 只有当promise中的逻辑完成以后 才可能继续执行then或者catch函数的逻辑
        // this.$store.dispatch('addToCart', product)
        //   .then(res => console.log(res))
        // 当然上述行为不一定通过dispatch方法去调用actions中的某个方法 也可以直接将actions中的某个方法映射到methods中然后调用也行 前提是需要导入vuex中的mapActions 然后在methods中定义好mapActions相关的内容 可以通过数组/对象进行定义
        // 你从actions中映射到methods中的方法由于和methods中的方法同名 导致在methods原有方法中调用同名方法时 产生递归报错 所以说 我们应该通过对象方式为actions映射方法起别名
        // this.addCart(product)
        //   .then(res => console.log(res))
        // 现在我们想要在商品追加到购物车行为完成以后 弹出toast窗口
        // this.addCart(product)
        //   .then(res => {
        //     this.message = res;
        //     this.isShow = true;
        //     // 并且在展示一段时间以后 就需要使得toast消失
        //     setTimeout(() => {
        //       this.isShow = false;
        //     }, 1500)
        //   })
        // 但是由于我们的Toast组件是需要供多个页面甚至是多个项目使用的 所以说 如果我们每一次都针对每一个组件进行导入、注册、使用啊这些步骤的话 那么就十分的麻烦 正常我们是不会这样做的
        this.addCart(product).then(res => {
          console.log(this.$toast);
          this.$toast.show(res, 2000)
        })
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
    /* 由于又添加了底部栏 所以说 我们可滚动区域的高度又要进一步的压缩 */
    height: calc(100% - 44px - 58px)
  }
  /* 设置detail中的导航栏覆盖在基本页面之上 通过z-index实现 而z-index的实现则需要提前先设置position属性才行 */
  .detail-nav {
    position: relative;
    z-index: 9;
    /* 设置背景颜色 防止看到底部被覆盖的页面 */
    background-color: #fff;
  }
</style>
<!--
 现在仍然存在两个问题有待解决：
 1.进入详情页以后点击浏览器的刷新按钮执行刷新操作之后 回退到主页中 发现主页没有保持原有的状态/位置 这是因为刷新操作导致资源重新请求 而不会复用之前的主页组件对象了 因此我们需要禁止用户去点击刷新按钮
 2.隐藏的tabControl提前显示 我们的隐藏tabControl是在轮播图图片加载完毕以后才显示的 是因为大概率轮播图图片的加载速度比offsetTop中的其他图片都来的慢 但是不一定 如果其他有些图片加载较慢的话 那么隐藏tabControl就有可能提前显示 因此我们需要对于offsetTop中的所有图片都进行刷新betterScrollHeight的操作
 -->
