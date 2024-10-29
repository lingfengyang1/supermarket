// 由于防抖函数应该作用于多个组件 所以说 不应该定义于组件内部 而是应该抽取到js中以供调用
export function debounce(func, delay) {
  // 定义计时器
  let timer = null;
  // 返回函数
  return function(...args) {
    // 如果计时器为空的话 说明属于第一次的执行函数 否则的话 我们就要重置计时器
    if (timer) clearTimeout(timer);
    // 执行到此 说明需要执行当前函数
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
// 由于js中本身并没有封装时间戳格式化操作的函数 所以说 我们不能直接使用js原生的函数去进行时间戳格式化的操作 而是利用别人已经封装好的函数进行时间戳格式化操作
export function formatDate(date, fmt) {
  // 年份和其他参数分开处理的原因在于两者的处理方式有所不同
  // 其中正则表达式中的xx+表示匹配1个或者多个xx
  if (typeof date == 'string') {
    return date;
  }

  if (!fmt) fmt = "yyyy-MM-dd hh:mm:ss";

  if (!date || date == null) return null;
  // 将传入的date准换为时间对象，*1000是为了将秒转成毫秒；
  date = new Date(date *1000);
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  // 对于年份来讲的话 由于data.getFullYear获取的年份固定都是四位数 所以说 他可以按照以下方式统一通过正则表达式匹配的fmt年份动态获取开始截取的索引
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  // 而对于年份以外的其他参数来讲的话 他们通过date获取的字符串长度并非都是一成不变的 有可能是一位数 也有可能是两位数 因此的话 不能像年份那样进行格式化操作 而是需要按照以下方式那样如果fmt中的参数匹配到的是一位数的话 那么就直接返回原生字符串 否则的话 就动态补0的方式来筛选字符串并返回即可
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt;
}
