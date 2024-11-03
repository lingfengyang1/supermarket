import {ADD_COUNT, ADD_TO_CART} from './mutation-types'
export default {
  // mutations适合修改state的好处在于他便于跟踪调试 并且他仅仅针对的是单一的逻辑
  // 针对不同的逻辑编写不同的mutations方法
  [ADD_COUNT](state, payload) {
    payload.count += 1;
  },
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload)

  }
}
