<template>
  <tab-bar>
    <!-- 设置插槽位置处的内容 -->
    <tab-bar-item link="/cat1" active-color="purple">
      <img slot='item-icon' src="~assets/img/tabbar/beforeActive/cat1.svg" alt="">
      <img slot='item-icon-active' src="~assets/img/tabbar/afterActive/cat1_active.svg" alt="">
      <div slot="item-text">
        小猫1
      </div>
    </tab-bar-item>
    <tab-bar-item link="/cat2" active-color="orange">
      <img slot='item-icon' src="~assets/img/tabbar/beforeActive/cat2.svg" alt="">
      <img slot='item-icon-active' src="~assets/img/tabbar/afterActive/cat2_active.svg" alt="">
      <div slot="item-text">
        小猫2
      </div>
    </tab-bar-item>
    <tab-bar-item link="/cat3" active-color="green">
      <img slot='item-icon' src="~assets/img/tabbar/beforeActive/cat3.svg" alt="">
      <img slot='item-icon-active' src="~assets/img/tabbar/afterActive/cat3_active.svg" alt="">
      <div slot="item-text">
        小猫3
      </div>
    </tab-bar-item>
    <tab-bar-item link="/cat4" active-color="blue">
      <img slot='item-icon' src="~assets/img/tabbar/beforeActive/cat4.svg" alt="">
      <img slot='item-icon-active' src="~assets/img/tabbar/afterActive/cat4_active.svg" alt="">
      <div slot="item-text">
        小猫4
      </div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      // 注册导航栏局部组件
      TabBar,
      // 局部注册导航栏中小组件
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
