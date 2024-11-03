// 这里 我们为toast组件封装了一层插件 让插件依赖于toast组件 以后 其他组件想要使用toast组件 并非直接依赖 而是通过该插件去使用toast组件 这样的好处主要在于：①降低其余组件对toast组件的耦合度/依赖程度 ②体现良好的封装性 让其余组件在使用toast组件时 只需要关心如何使用 而不需要关心使用的细节 ③可维护性提高 一旦该组件发生变化 按照之前的做法 多个依赖组件都需要进行更新 现在多了一层插件去直接依赖他的话 那么可维护性就提高了
import Toast from './Toast'
const obj = {}
// 定义导出对象的install方法 因为到时候在main文件中安装该插件/对象时 会调用该对象的install方法 该方法默认接收一个参数 即调用者Vue
obj.install = function(Vue) {
  // document.body.appendChild(toast); 如果按照这种方式直接将指定组件插入到指定位置的话 那么很有可能挂在失败 原因在于插入时指定组件还未创建
  // 首先我们需要创建组件构造器 根据导入的Toast组件创建构造器
  const toastConstructor = Vue.extend(Toast)
  // 接着通过new创建组件对象
  const toast  = new toastConstructor();
  // 接着就是将组件通过$mount方式挂载到指定位置处 该挂载方式才能够使生命周期方法生效
  toast.$mount(document.createElement('div'));
  // 之前的话 我们都是让其余组件直接依赖于toast组件 导致App组件间接依赖于toast组件 而App组件最终会被挂载到index.html中的#app元素中 现在的话 由于其余组件不在直接依赖于toast组件 导致该组件没有任何展示的载体 因此我们需要手动将其插入到index.html中
  // 比如我们直接将toast组件插入到index.html中的body中作为直接子元素 到时候可以通过开发者工具中验证一下是否成功添加
  document.body.appendChild(toast.$el)
  // 然后让该对象在所有组件中共享 即将他作为Vue的原型存在
  Vue.prototype.$toast = toast
}
// 导出插件/对象
export default obj
