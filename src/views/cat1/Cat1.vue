<template>
  <div id="home">
    <!-- 导航栏在整个项目中不止一个 因此使用类选择器而非id选择器去套用样式 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 由于当前界面只需要关心他的构成 而不需要关心具体构成他的子组件是如何构成的 所以将子组件的构成抽取为一个文件用以调用 并且由于该组件的构成代码较为复杂 所以也需要进行抽取 -->
    <!-- 还要注意通过父传子的方式将数据传递给home-swiper -->
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <!-- 此处无法省略: 因为这样就不能识别为数组 而是一个普通的字符串了 -->
    <!-- 而且在Car1模块中的该组件存在个性化需求 即当未达到指定位置时 position为static 而达到指定位置以后 position则为fixed 即固定不动 -->
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"/>
    <!-- 此外 我们的部分特性商品无法展示出来 我们可以在其下方设置一些占位数据 用于帮助我们显式所有的特性商品 -->
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
      <li>列表31</li>
      <li>列表32</li>
      <li>列表33</li>
      <li>列表34</li>
      <li>列表35</li>
      <li>列表36</li>
      <li>列表37</li>
      <li>列表38</li>
      <li>列表39</li>
      <li>列表40</li>
      <li>列表41</li>
      <li>列表42</li>
      <li>列表43</li>
      <li>列表44</li>
      <li>列表45</li>
      <li>列表46</li>
      <li>列表47</li>
      <li>列表48</li>
      <li>列表49</li>
      <li>列表50</li>
      <li>列表51</li>
      <li>列表52</li>
      <li>列表53</li>
      <li>列表54</li>
      <li>列表55</li>
      <li>列表56</li>
      <li>列表57</li>
      <li>列表58</li>
      <li>列表59</li>
      <li>列表60</li>
      <li>列表61</li>
      <li>列表62</li>
      <li>列表63</li>
      <li>列表64</li>
      <li>列表65</li>
      <li>列表66</li>
      <li>列表67</li>
      <li>列表68</li>
      <li>列表69</li>
      <li>列表70</li>
      <li>列表71</li>
      <li>列表72</li>
      <li>列表73</li>
      <li>列表74</li>
      <li>列表75</li>
      <li>列表76</li>
      <li>列表77</li>
      <li>列表78</li>
      <li>列表79</li>
      <li>列表80</li>
      <li>列表81</li>
      <li>列表82</li>
      <li>列表83</li>
      <li>列表84</li>
      <li>列表85</li>
      <li>列表86</li>
      <li>列表87</li>
      <li>列表88</li>
      <li>列表89</li>
      <li>列表90</li>
      <li>列表91</li>
      <li>列表92</li>
      <li>列表93</li>
      <li>列表94</li>
      <li>列表95</li>
      <li>列表96</li>
      <li>列表97</li>
      <li>列表98</li>
      <li>列表99</li>
      <li>列表100</li>
    </ul>
  </div>

</template>
<!-- 一般的话 我们会将项目中复用的组件存放到components目录中 然后将单独的组件存放到views目录中 其中 由于每一个组件可能存在子组件 所以说 每一个组件都需要存放于单独的目录下 -->
<script>
  // 一般的话 我们会按照公共组件/子组件/函数的分类方式分别导入这些组件 并且在注册组件时 也会按照导入的顺序进行 并且不同的类别之间会以空格隔开
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'

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
  export default {
    name: "Cat1",
    components: {
      NavBar,
      TabControl,

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
        }
      }
    },
    // 获取数据的时机发生在组件创建完毕之后
    created() {
      // 我们的生命周期方法只需要关注网络请求的发送即可 至于说网络请求具体如何发送的 这不在关注的范围之内 因此的话 我们应该将具体逻辑抽取到函数中以供调用
      // 定义一个生命周期方法 当组件创建完毕时调用 以便获取当前页面所需的多个数据 由于函数返回的是promise对象 所以我们拼接then函数用于获取指定url的数据
      this.getMultidata()
      // 定义一个生命周期方法 当组件创建完毕之时 去获取指定模块指定页码下的商品 并且更新指定模块的相关参数(页码/商品) 如果组件一旦创建完毕以后 我们就可以为多个模块展示他们第一页的数据
      this.getHomeGoods("pop")
      this.getHomeGoods("new")
      this.getHomeGoods("sell")
    },
    methods: {
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
        })
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
    /* 保证导航栏在滚动过程中固定 */
    position: fixed;
    /* 设置固定位置 */
    left: 0;
    right: 0;
    top: 0;
    /* 光设置固定还不够 我们发现 导航栏被其他页面给覆盖了 因此的话 我们需要设置堆叠值 用于堆叠在其他页面之上 */
    z-index: 10;
  }
  /* 由于导航栏已经不在遵循默认的文档流 所以说 他会覆盖默认文档流的页面 因此的话 文档流应当和他之间设置距离 */
  #home {
    /* 通过设置文档流的上内边距来防止被导航栏覆盖 导航栏的高度为44 所以我们的padding-top也设置为44 */
    padding-top: 44px
  }
  /* 设置控制选项卡的position属性为sticky 即当未达到指定位置时 值为static 而当达到指定位置以后 值为fixed 即固定不动了 */
  .tab-control {
    position: sticky;
    /* 还需要设置固定不动的位置 即距离上边距44px 相当于一个导航栏的高度 */
    top: 44px
  }
</style>
