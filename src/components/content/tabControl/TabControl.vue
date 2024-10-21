<template>
  <!-- 定义一个控制选项卡 用于表示主页中其中一个业务组件 由于该业务组件在当前项目的多个模块中需要共享 并且多个模块中的差异不是很大 仅仅只是文字上的差异 而非数量/图片的差异 因此的话 没有必要使用插槽去解决 而是直接通过模块组件父传子的方式决定控制选项卡组件的文字即可 -->
  <div class="tab-control">
    <div v-for="(item, index) in titles" class="tab-control-item" :class="{isActive: index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    // 设置变量 用于记录当前活跃的选项
    data() {
      return {
        // 通过遍历判断当前的选项索引是否和遍历索引一致 如果一致的话 那么当前遍历到的索引对应的选项就处于活跃状态
        currentIndex: 0
      }
    },
    methods: {
      // 监听一下选项的点击事件 如果触发了该事件的话 那么就需要更新当前处于活跃状态的选项索引
      itemClick(index) {
        this.currentIndex = index;
      }
    }

  }
</script>

<style scoped>
  /* 设置控制选项卡为流式布局 并且每一个选项都是均分选项卡的 */
  .tab-control {
    display: flex;
    /* 设置水平居中方式 */
    text-align: center;
    /* 设置垂直居中方式 并且高度为40 */
    height: 40px;
    line-height: 40px;
    /* 设置字体大小 */
    font-size: 15px;
    /* 设置背景颜色 防止透明可以看到底层的文本 */
    background-color: #fff;
  }
  .tab-control-item {
    flex: 1;
  }

  /* 为选项设置内边距 让选项和内部的span存在一定的距离 */
  .tab-control-item span {
    padding: 4px;
  }
  .isActive {
    color: var(--color-high-text)
  }
  /* 然后如果处于某个选项处于活跃状态下的话 那么就为其选项中的span添加底部边框 */
  .isActive span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>
