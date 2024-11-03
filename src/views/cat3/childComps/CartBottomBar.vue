<template>
  <div class="bottom-bar">
    <div class="check-content">
      <!-- 如果想要组件的监听生效的话 那么就需要在监听某个事件时添加修饰符.native才行 -->
      <check-button class="check-button" :is-checked="isAllSelected" @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="price">
      合计:{{totalPrice}}
    </div>
    <div class="calculate">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  import {mapGetters} from 'vuex'
  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return '￥' + this.cartList
          .filter(item => item.checked)
          .reduce((preValue, item) => {
            return preValue + item.count * item.price
          }, 0)
          .toFixed(2)
      },
      checkLength() {
        return this.cartList.filter(item => {
          return item.checked
        }).length
      },
      isAllSelected() {
        // 判断购物车界面中的商品是否全选 如果有某一个商品为选中的话 那么底部栏的全选按钮就不选中 并且需要注意的是 由于我们的checkButton组件默认的状态是选中 但是底部栏的默认选中情况应该为不选中 因此的话 我们应该多判断一层默认选中状态
        // 在js中 非0值被视为true 相反的 0则被视为false
        // 1.方式一：可以通过filter过滤器的方式进行全选的判断
        // return (this.cartList.length !== 0) ? !(this.cartList.filter(item => !item.checked).length) : false;
        // 2.方式二：可以通过find方法来进行数组中未选中元素的查找 并且find方法由于方式一的地方在于他一旦找到未选中元素 就会停止数组遍历 性能提高
        // return (this.cartList.length !== 0) ? !this.cartList.find(item => !item.checked) : false;
        // 3.方式三：通过数组遍历的方式查找未选中元素 一旦找到的话 停止数组遍历 并且设置底部栏的按钮选中情况
        if(this.cartList.length === 0)return false;
        for(let item of this.cartList){
          if(!item.checked) {
            return false;
          }
        }
        return true;
      }

    },
    methods: {
      checkClick() {
        // 除了说购物车界面的按钮可以影响到底部栏的按钮选中情况以外 底部栏的按钮选中情况也可以反过来影响购物车界面的按钮选中情况
        // 如果购物车界面中的每个item的按钮都选中的话 那么点击底部栏按钮一次就会导致所有item都不被选中 如果购物车界面中的所有按钮部分选中或者全部不选中的话 那么底部栏按钮点击一次就会导致所有item的按钮都被选中
        if(this.isAllSelected){
          // 说明全部item都处于选中状态
          this.cartList.forEach(item => item.checked = false);
        }else{
          this.cartList.forEach(item => item.checked = true);
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    /* 设置高度 */
    height: 40px;
    /* 让其中的内容垂直居中显示 */
    line-height: 40px;
    /* 设置当前组件固定定位方式 */
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    /* 设置流式布局 让其中的子元素都同行分布 */
    display: flex;
    background-color: #eee;
    /* 如果想要设置父子元素之间的间距 尽量使用padding 我们的目的是为了控制左子元素和左边界的边距扩大 */
    padding-left: 10px;
    /* 让内部的内容水平居中 */
    text-align: center;
  }
  .check-content {
    width: 60px;
    /* 设置流式布局 使得其中的子元素也同行分布 */
    display: flex;
    /* 真正让.check-button的div垂直居中的属性 */
    align-items: center;
  }
  .check-content .check-button {
    width: 20px;
    height: 20px;
    /* 由于当前元素会继承.bottom-bar的line-height属性 所以导致height和line-height属性不一致 所以其中内容无法垂直居中 我们应该覆盖原先的line-height才行 */
    /* 以下属性让.check-button中的img元素垂直居中 但并没有让img外围的div元素垂直居中 */
    /* height和line-height一致的作用不能在块级元素 即img外围包裹的div元素生效的原因在于line-height无法作用于块级元素div */
    line-height: 20px;
    /* 同时设置一下.check-content中两个兄弟子元素之间的间距 */
    margin-right: 5px
  }
  .price {
    /* 让当前元素占据当前行中的剩余宽度 */
    flex: 1
  }
  .calculate {
    width: 80px
  }
</style>
