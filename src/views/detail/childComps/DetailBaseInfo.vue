<template>
  <!-- 当goods这个对象中非空时 我才需要作展示 否则的话 则不需要 -->
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.price}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <!-- 由于有的商品存在折扣信息 而有的商品没有 所以说 我们需要先判断商品折扣信息有无来决定是否展示 -->
      <span v-if="goods.discountDesc" class="discount">{{goods.discountDesc}}</span>
    </div>
    <!-- info-other不一定所有商品都有 -->
    <div v-if="goods.columns[0]" class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <!-- 以下要做的就是展示services除了最后一个元素以外的其他元素 -->
      <!-- v-for除了遍历数组 也可以用于遍历数字 并且当遍历数字时 是从1开始遍历的 -->
      <!-- key的出现防止了在循环过程中出现dom复用的情况 -->
      <span v-for="index in goods.services.length - 1" class="info-service-item" :key="index">
        <img v-if="goods.services[index - 1].icon" :src="goods.services[index - 1].icon" alt="">
        <span>{{goods.services[index - 1].name}}</span>
      </span>
    </div>
  </div>
</template>
<!-- 该页面是单独属于详情页面的 所以说 他不需要定义在components这种存放公共组件的目录 而是直接存放到不参与共享的组件目录中即可 -->
<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info {
    width: 100%;
    padding: 10px 10px 20px;
    border-bottom: solid 4px rgba(100, 100, 100, .1);
  }
  .info-title {
    font-size: 16px;
    font-weight: bold;
  }
  .info-price {
    margin-top: 8px;
  }
  .info-price .n-price{
    color: var(--color-high-text);
    font-size: 20px;
    margin-right: 8px;
  }
  .info-price .o-price {
    color: var(--color-text);
    text-decoration: line-through;
    font-size: 12px;
    margin-right: 4px;
  }
  .info-price .discount {
    background: var(--color-tint);
    color: #fff;
    font-weight: bold;
    border-radius: 8px;
    position: relative;
    top: -8px;
  }
  .info-other {
    margin-top: 12px;
    font-size: 14px;
    display: flex;
    color: var(--color-text);
    padding-bottom: 4px;
    justify-content: space-between;
    border-bottom: solid 2px rgba(100, 100, 100, .3);
  }
  .info-service {
    margin-top: 18px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  .info-service img {
    width: 12px;
    height: 12px;
  }
</style>
