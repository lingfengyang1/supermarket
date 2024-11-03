<template>
    <div class="goods-info"  v-if="Object.keys(goodsInfo).length !== 0">
        <div class="info-desc">
            <div class="desc">{{goodsInfo.desc}}</div>
        </div>
        <div class="info-key">{{goodsInfo.detailImage[0].key}}</div>
        <!-- key的目的在于防止多次迭代复用同一个dom 并且需要提供唯一性的key 像item这种重复性标识符不应该赋值给key -->
        <!-- 监听图片加载的目的主要在于防止better-scroll在计算滚动内容高度的时机发生于图片加载之前 导致计算出来的高度错误 而在图片加载以后 仍然沿用之前计算的高度 导致滚动行为出错 正确的做法是在图片加载完毕以后 通过刷新让better-scroll重新计算滚动内容的高度 -->
        <div class="info-list">
            <img
               v-for="(item, index) in goodsInfo.detailImage[0].list"
               :key="index"
               :src="item"
               alt="goods-img"
               @load="goodsInfoImgLoad">
        </div>
        <div></div>
    </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  data() {
    return {
      // 用于记录当前的图片个数
      counter: 0,
      // 用于记录所有的图片个数
      imgLength: 0
    }
  },
  props: {
    goodsInfo:{
      type: Object,
      default(){
        return {};
      }
    }
  },
  methods: {
    goodsInfoImgLoad(){
      // 当图片个数加载到指定数量时 才会发送自定义事件 如果不加判断的话 那么就会频繁的发送自定义事件 这样对于性能的消耗无疑是巨大的
      // if(++this.counter === this.imgLength){
      //   // 这样只会进行一次自定义事件的发送
      //   this.$emit("goodsInfoImgLoad");
      // }
      // 如果你执意要发送多个自定义事件的话 那么你可以在接收端设置防抖函数节约性能
      this.$emit("goodsInfoImgLoad");
    }
  },
  watch: {
    // 当goodsInfo这个属性发生改变时 才会更新imgLength为真实的图片个数
    goodsInfo() {
      this.imgLength = this.goodsInfo.detailImage[0].list.length;
    }
  }
}
</script>
<style scoped>
.goods-info {
    padding: 30px 8px 0;
    border-bottom: solid 4px rgba(100, 100, 100, .1);
}
.info-desc {
    padding: 0 8px 0;
    font-size: 14px;
}
.info-desc .desc {
    text-indent: 2em;
}
.info-key {
    padding: 8px;
}
.info-list img{
    width: 100%;
}

</style>
