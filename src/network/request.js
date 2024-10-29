// 导入axios框架
import axios from 'axios'
export function request(config) {
  // 接着就是创建axios实例
  const instance = axios.create({
    // 定义公共的配置
    // 定义基路径
    baseURL: 'http://123.207.32.32:8000',
    // 定义超时时间
    timeout: 5000
  })
  // 然后对响应过程进行过滤操作 主要是拆解出最原始的数据
  instance.interceptors.response.use(res => {
    // 这里我们就直接释放拆解以后的数据
    return res.data;
  }, err => {
    console.log(err);
  })
  // 接着追加一些独有的配置 这里的返回值直接就是promise类型 因此的话 可以在外界进行then/catch函数代码的编写
  return instance(config);
}
export function mockRequest(config) {
  const instance = axios.create({
    baseURL: 'https://httpbin.org',
    timeout: 1000000
  })
  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      console.log(err);
    }
  );
  instance.interceptors.response.use(res => {
    res.data.data = JSON.parse(res.data.data);
    return res.data;
  }, err => {
    console.log(err);
  })
  return instance(config)
}
