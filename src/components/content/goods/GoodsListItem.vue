<template>
  <!-- 每一个item组件都需要监听点击事件 然后跳转到对应的详情页 所以说 我们在跳转的同时还要携带每一个商品的iid 这样子跳转以后才可以根据每一个商品的iid发送具体的网络请求 获取对应各自商品的详情 并展示到每一个详情页中 -->
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="你好" @load="imgLoad">

    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      // 我们在展示每一个item中的图片时 由于该组件被不同的网络请求复用 所以说图片路径有所不同 我们在此根据不同的判断进行不同图片路径的设置
      showImage() {
        return (this.goodsItem.show && this.goodsItem.show.img) ? this.goodsItem.show.img : this.goodsItem.image
      }

    },
    methods: {
      imgLoad() {
        this.$bus.$emit('imageLoad')
        // if(this.$route.path.indexOf('/home')) {
        //   // 如果当前活跃组件为主页组件的话 那么就将自定义事件发送给主页 并且该自定义事件名称需要命名的有标识度
        //   this.$bus.$emit('homeImageLoad')
        // }else if(this.$route.path.indexOf('/detail')) {
        //   // 如果当前活跃组件为详情组件的话 那么就将自定义事件发送给详情即可
        //   this.$bus.$emit('detailImageLoad')
        // }
      },
      itemClick() {
        // 由于详情页有网页前进后退的需求 所以说 使用push方式进行跳转
        // this.$router.push('/detail')
        // 但是我们有携带iid参数的需求 所以说 有两种方式可以解决携带参数的问题 ①通过动态路由 即/:xxx的方式 ②通过query的方式
        // this.$router.push('/detail/' + this.goodsItem.iid)
        this.$router.push({
          path: '/detail',
          query: {
            iid: this.goodsItem.iid
          }
        })
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    /* 为了在一行中仅仅显式两个item组件的话 并且适配所有的设备 我们通过百分比的形式来为宽度赋值 */
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
