<template>
  <div id="app">
    <!-- 如果你想要使得路由跳转的组件不频繁创建和销毁的话 而是多次活跃共享同一个组件对象的话 那么你就需要通过keep-alive来包裹这些路由组件 同时 一旦组件被keep-alive包裹以后 那么他就可以执行activated和deactivated这两个生命周期方法了 -->
    <!-- router-view根据不同的url对应着不同的组件 当通过keep-alive包裹时 每一个url对应的组件在整个vue生命周期中是共享的状态 也就是说包括详情组件也是共享的 因此他其中的iid属性在整个vue生命周期中都是一致的 根据他进行网络请求获取的数据也是一致的 因此所有item的详情页面打开以后的结果都是一致的 -->
    <!-- 我们可以通过exclude排除掉详情组件 避免他在整个vue生命周期中共享 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
<!--    <router-view/>-->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'
  export default {

    name: 'app',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  /* 导入基础样式 */
  @import 'assets/css/base.css';
</style>
