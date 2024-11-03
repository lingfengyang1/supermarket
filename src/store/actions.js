import {ADD_COUNT, ADD_TO_CART} from './mutation-types'
export default {
  // 通常都是通过mutations属性来修改state
  addToCart(context, payload) {
    // // 遍历数组 查看是否存在和payload一致的元素 如果存在的话 就更新该元素的数量 如果不存在的话 就先定义count属性为1 然后在追加到数组中去
    // // 定义一个变量 用于记录payload在数组中存在的元素
    // let oldProduct = null;
    // for(let cart of context.state.cartList) {
    //   if(cart.iid === payload.iid) {
    //     oldProduct = cart;
    //   }
    // }
    // // // 如果oldProduct非空的话 说明只需要更新元素数量即可 为空的话 则需要定义数量变量 然后追加到数组中去
    // // if(oldProduct) {
    // //   oldProduct.count += 1;
    // // }else {
    // //   payload.count = 1;
    // //   state.cartList.push(payload)
    // // }
    // // 或者说你也可以不通过循环去完成上述需求 而通过数组的find方法判断payload是否在数组中存在 如果存在的话 直接返回指定元素 显然下述方法更加高效
    // // 其实在该mutations中 可能的逻辑有两处 但是mutations的目的在于修改state 而且他建议只针对单一的逻辑 所以说 以下多元逻辑我们可以抽取到action中 有action去调用mutations完成state的修改任务
    // if (oldProduct) {
    //   context.commit(ADD_COUNT, oldProduct)
    // } else {
    //   payload.count = 1;
    //   // 如果追加的商品是新商品的话 除了定义count属性并且追加到数组以外 还需要定义checked属性用于表示当前对象元素是否选中 默认设置为选中 选中/不选中都是通过对象元素内部属性决定 而非checkButton中定义的isChecked属性决定(该属性的取值也是由对象元素内部的checked属性决定)
    //   payload.checked = true;
    //   context.commit(ADD_TO_CART, payload)
    // }
    return new Promise((resolve, reject) => {
      let oldProduct = null;
      for(let cart of context.state.cartList) {
        if(cart.iid === payload.iid) {
          oldProduct = cart;
        }
      }
      if (oldProduct) {
        context.commit(ADD_COUNT, oldProduct)
        // 如果添加新商品的行为完成以后 那么就调用resolve函数 说明商品数量已更新
        resolve('商品数量已更新')
      } else {
        payload.count = 1;
        // 如果追加的商品是新商品的话 除了定义count属性并且追加到数组以外 还需要定义checked属性用于表示当前对象元素是否选中 默认设置为选中 选中/不选中都是通过对象元素内部属性决定 而非checkButton中定义的isChecked属性决定(该属性的取值也是由对象元素内部的checked属性决定)
        payload.checked = true;
        context.commit(ADD_TO_CART, payload)
        // 如果商品数量已经更新 那么就调用resolve函数 说明商品已添加
        resolve('商品已添加')
      }
    })
  }
}
