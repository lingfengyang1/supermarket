module.exports = {
  configureWebpack: {
    resolve: {
      // 其中可以配置extensions 用于储存需要省略的后缀名 由于默认的已经足够 所以说不需要额外追加了
      // 我们也可以配置alias 用于为目录所在路径起别名 统一多次引用时的引用路径
      alias: {
        // 默认为src目录起了别名@ 在脚手架2项目中其他别名路径无法使用@ 而在脚手架3项目中 则允许使用了
        // router目录/store目录都属于仅仅导入main一次的目录 因此的话 没有必要其别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
};
