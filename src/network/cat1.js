// 这里用于定义一些请求url相关的api 方便统一管理所有请求相关的url 同时也降低了组件对url的耦合性 比如Cat1页面需要对同一个url进行多次请求时 这时候 解耦的效果就显著了(在维护时 需要频繁修改多个地方 而统一在此管理则只需要修改一个地方) 并且如果有多个不同的url时 更加体现了解耦的目的
// 导入request
import {request, mockRequest} from 'network/request'
export function getMultidata() {
  // 发送网络请求 将promise继续返回给外界 让外界通过promise的then函数去获取数据
  return request({
    url: '/home/multidata'
  })
}
// 定义获取商品的方法 商品按照不同的模块进行分类 我们需要根据模块名以及模块的页码来获取指定模块中指定页码的数据
export function getHomeGoods(type, page) {
  // 将promise返还给外界 让外界最终发送网络请求 以获取最终响应数据
  // return request({
  //   url: '/home/data',
  //   params: {
  //     // 以下是对象字面量的增强写法
  //     type,
  //     page
  //   }
  // })
  // 由于上述接口已经失效 所以说 我们就在此提供数据来模拟请求接口的过程 并且利用的是新的axios实例
  if (type === "pop") {
    return mockRequest({
      url: "/post",
      method: "post",
      data: {
        filter: {
          title: "美丽说wap首页",
          list: [
            {
              fcid: "10057922",
              style: null,
              sort: "pop",
              title: "流行",
              type: "sort"
            },
            {
              fcid: "10057922",
              style: null,
              sort: "sell",
              title: "热销",
              type: "sort"
            },
            {
              fcid: "10057922",
              style: null,
              sort: "new",
              title: "上新",
              type: "sort"
            }
          ]
        },
        total: 40935,
        param: {
          eventId: 70003,
          cKey: "wap-index",
          fcid: "10057922",
          cpcEventId: 70005,
          section: "0",
          _mgjuuid: "977bbfe1-f9ab-4f86-a905-914889777c3e",
          sort: "pop",
          page: "1",
          ptpWallDoc: "_wall_docs",
          ptpPartC: "_mb_mls_10057922_wap-index_noab-noab",
          cpc_offset: 0,
          ptpWallCpc: "_wall_cpc"
        },
        page: 1,
        sort: "pop",
        list: [
          {
            itemType: 10,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m70y5k?acm=3.ms.0_4_1m70y5k.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            iid: "1m70y5k",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m70y5k?acm=3.ms.0_4_1m70y5k.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 353 181",
            acm: "3.ms.0_4_1m70y5k.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            type: 2,
            title:
              "2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装",
            orgPrice: "￥84.29",
            cparam: null,
            props: [
              "2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装"
            ],
            lefttop_taglist: [],
            sale: 4886,
            price: "59.00",
            cfav: 49,
            leftbottom_taglist: [],
            shopId: 10664478,
            popularStar: 0
          },
          {
            itemType: 10,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m745k0?acm=3.ms.0_4_1m745k0.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            iid: "1m745k0",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180811_1k5hfa6d803575df3lkb6j67l5j3c_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m745k0?acm=3.ms.0_4_1m745k0.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180811_1k5hfa6d803575df3lkb6j67l5j3c_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525",
            acm: "3.ms.0_4_1m745k0.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            type: 2,
            title:
              "2018秋季新款韩版女装字母印花宽松连帽休闲卫衣搭配松紧腰九分牛仔裤两件套女时尚运动套装潮",
            orgPrice: "￥97.15",
            cparam: null,
            props: [
              "2018秋季新款韩版女装字母印花宽松连帽休闲卫衣搭配松紧腰九分牛仔裤两件套女时尚运动套装潮"
            ],
            lefttop_taglist: [],
            sale: 3680,
            price: "68.00",
            cfav: 73,
            leftbottom_taglist: [],
            shopId: 1302423026,
            popularStar: 0
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1lrzvr8?acm=3.ms.2_1_1lrzvr8.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_355439208_1085278668_1_0-t_-c1_10057922_nil_nil_2_1085278668_30_0-lc_32&cparam=MTUzODA1MDI0NF8xYnI4bGM4XzE0NThhM2YxNGNiMTNkNTU0MjNhOTEzOWM4MmJlZmY1XzMyXzBfMzU1NDM5MjA4XzBfMF8xXzBfMTAzXzBfMA==",
            iid: "1lrzvr8",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180301_509b6ca365e3i1fiji2fk4kkaihd3_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1lrzvr8?acm=3.ms.2_1_1lrzvr8.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_355439208_1085278668_1_0-t_-c1_10057922_nil_nil_2_1085278668_30_0-lc_32&cparam=MTUzODA1MDI0NF8xYnI4bGM4XzE0NThhM2YxNGNiMTNkNTU0MjNhOTEzOWM4MmJlZmY1XzMyXzBfMzU1NDM5MjA4XzBfMF8xXzBfMTAzXzBfMA==",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180301_509b6ca365e3i1fiji2fk4kkaihd3_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525",
            acm:
              "3.ms.2_1_1lrzvr8.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_355439208_1085278668_1_0-t_-c1_10057922_nil_nil_2_1085278668_30_0-lc_32",
            type: 2,
            title:
              "【2件69元】【新品特惠】短袖t恤女2018夏装新款韩版学生宽松黑色体恤圆领纯棉半袖上衣服",
            orgPrice: "￥70.00",
            cparam:
              "MTUzODA1MDI0NF8xYnI4bGM4XzE0NThhM2YxNGNiMTNkNTU0MjNhOTEzOWM4MmJlZmY1XzMyXzBfMzU1NDM5MjA4XzBfMF8xXzBfMTAzXzBfMA==",
            props: [
              "【2件69元】【新品特惠】短袖t恤女2018夏装新款韩版学生宽松黑色体恤圆领纯棉半袖上衣服"
            ],
            lefttop_taglist: [],
            sale: "39",
            price: "49.00",
            cfav: "1079",
            leftbottom_taglist: [
              "http://s2.mogucdn.com/p2/170307/1_53je1gbj88bjheidae4al1le4h94i_60x28.png"
            ],
            shopId: "1302412599",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1jw0sr2?acm=3.ms.2_1_1jw0sr2.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_346732365_228525953_2_0-t_-c1_10057922_nil_nil_1_228525953_85_0-lc_32&cparam=MTUzODA1MDI0NF8xYmd2Y3VxX2YzMWIzMmE5ZDhlM2E1NTk0NjRkN2M2YzQ2MzIyNTM5XzMyXzFfMzQ2NzMyMzY1XzBfMF8yXzBfMzI1XzBfMA==",
            iid: "1jw0sr2",
            showLarge: {
              img:
                "http://s11.mogucdn.com/p2/170301/106341701_4kfgdd3001475k8h1l365al2k5ed6_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1jw0sr2?acm=3.ms.2_1_1jw0sr2.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_346732365_228525953_2_0-t_-c1_10057922_nil_nil_1_228525953_85_0-lc_32&cparam=MTUzODA1MDI0NF8xYmd2Y3VxX2YzMWIzMmE5ZDhlM2E1NTk0NjRkN2M2YzQ2MzIyNTM5XzMyXzFfMzQ2NzMyMzY1XzBfMF8yXzBfMzI1XzBfMA==",
            show: {
              img:
                "http://s11.mogucdn.com/p2/170301/106341701_4kfgdd3001475k8h1l365al2k5ed6_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 352 72 351",
            acm:
              "3.ms.2_1_1jw0sr2.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_346732365_228525953_2_0-t_-c1_10057922_nil_nil_1_228525953_85_0-lc_32",
            type: 2,
            title: "2018 新款女装上衣文艺棉麻短袖t恤 V领衫T恤女短袖女T桖",
            orgPrice: "￥59.00",
            cparam:
              "MTUzODA1MDI0NF8xYmd2Y3VxX2YzMWIzMmE5ZDhlM2E1NTk0NjRkN2M2YzQ2MzIyNTM5XzMyXzFfMzQ2NzMyMzY1XzBfMF8yXzBfMzI1XzBfMA==",
            props: ["2018 新款女装上衣文艺棉麻短袖t恤 V领衫T恤女短袖女T桖"],
            lefttop_taglist: [],
            sale: "51",
            price: "56.64",
            cfav: "1260",
            leftbottom_taglist: [
              "http://s2.mogucdn.com/p2/170307/1_5k6k8eiffl43633479294a49f8gci_60x28.png"
            ],
            shopId: "20483465",
            popularStar: null
          },
          {
            itemType: 10,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m7s9c4?acm=3.ms.0_4_1m7s9c4.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            iid: "1m7s9c4",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180828_550k23i82cbibh32602fl43jc9aid_800x1200.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m7s9c4?acm=3.ms.0_4_1m7s9c4.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180828_550k23i82cbibh32602fl43jc9aid_800x1200.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m7s9c4.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            type: 2,
            title: "秋装女2018新款早秋女装裙子韩版针织连衣裙+衬衫上衣时尚套装",
            orgPrice: "￥127.00",
            cparam: null,
            props: [
              "秋装女2018新款早秋女装裙子韩版针织连衣裙+衬衫上衣时尚套装"
            ],
            lefttop_taglist: [],
            sale: 32070,
            price: "88.90",
            cfav: 179,
            leftbottom_taglist: [],
            shopId: 1302421618,
            popularStar: 0
          },
          {
            itemType: 10,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m7rp9w?acm=3.ms.0_4_1m7rp9w.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            iid: "1m7rp9w",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180827_1590j44g2bk619i6655ji20ihikfb_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m7rp9w?acm=3.ms.0_4_1m7rp9w.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180827_1590j44g2bk619i6655ji20ihikfb_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525",
            acm: "3.ms.0_4_1m7rp9w.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            type: 2,
            title:
              "秋装女2018新款套装时尚晚晚风气质chic港味女神网红两件套装俏皮",
            orgPrice: "￥155.72",
            cparam: null,
            props: [
              "秋装女2018新款套装时尚晚晚风气质chic港味女神网红两件套装俏皮"
            ],
            lefttop_taglist: [],
            sale: 4173,
            price: "109.00",
            cfav: 167,
            leftbottom_taglist: [],
            shopId: 20288336,
            popularStar: 0
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1lyp2vg?acm=3.ms.2_1_1lyp2vg.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_440018617_1986848_3_0-t_-c1_10057922_nil_nil_0_1986848_30_0-lc_32&cparam=MTUzODA1MDI0NF8xZWp5OTRhXzY3MTk5MGYyZjgyNDNlYTBjNzI0YTJmNDc4YjdkYzdjXzMyXzJfNDQwMDE4NjE3XzBfMTk4Njg0OF8zXzBfNV8wXzA=",
            iid: "1lyp2vg",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/17f85e/180426_7k4fd5fj9kfe5a7g089b1e10ec8b9_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1lyp2vg?acm=3.ms.2_1_1lyp2vg.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_440018617_1986848_3_0-t_-c1_10057922_nil_nil_0_1986848_30_0-lc_32&cparam=MTUzODA1MDI0NF8xZWp5OTRhXzY3MTk5MGYyZjgyNDNlYTBjNzI0YTJmNDc4YjdkYzdjXzMyXzJfNDQwMDE4NjE3XzBfMTk4Njg0OF8zXzBfNV8wXzA=",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/17f85e/180426_7k4fd5fj9kfe5a7g089b1e10ec8b9_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 352 1497 1232 351",
            acm:
              "3.ms.2_1_1lyp2vg.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_440018617_1986848_3_0-t_-c1_10057922_nil_nil_0_1986848_30_0-lc_32",
            type: 2,
            title:
              "2018春夏季新款八色纯色浅色系时尚简约韩范纯棉学生休闲百搭基础款纯色圆领短袖上衣女T恤",
            orgPrice: "￥108.00",
            cparam:
              "MTUzODA1MDI0NF8xZWp5OTRhXzY3MTk5MGYyZjgyNDNlYTBjNzI0YTJmNDc4YjdkYzdjXzMyXzJfNDQwMDE4NjE3XzBfMTk4Njg0OF8zXzBfNV8wXzA=",
            props: [
              "2018春夏季新款八色纯色浅色系时尚简约韩范纯棉学生休闲百搭基础款纯色圆领短袖上衣女T恤"
            ],
            lefttop_taglist: [],
            sale: "10419",
            price: "39.00",
            cfav: "16705",
            leftbottom_taglist: [],
            shopId: "1302425481",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m4tdhy?acm=3.ms.2_1_1m4tdhy.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_415780334_1257105158_4_0-t_-c1_10057922_nil_nil_2_1257105158_42_0-lc_32&cparam=MTUzODA1MDI0NF8xZHIzOGQwX2IxZWIyZmQzN2NmMDNiZmI1Y2I3YWJjN2E0MDRjNTM4XzMyXzNfNDE1NzgwMzM0XzBfMF80XzBfNzQ0XzBfMA==",
            iid: "1m4tdhy",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180624_4afhg8gg9743k8h5lab2jifficd3e_640x960.png_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m4tdhy?acm=3.ms.2_1_1m4tdhy.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_415780334_1257105158_4_0-t_-c1_10057922_nil_nil_2_1257105158_42_0-lc_32&cparam=MTUzODA1MDI0NF8xZHIzOGQwX2IxZWIyZmQzN2NmMDNiZmI1Y2I3YWJjN2E0MDRjNTM4XzMyXzNfNDE1NzgwMzM0XzBfMF80XzBfNzQ0XzBfMA==",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180624_4afhg8gg9743k8h5lab2jifficd3e_640x960.png_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525",
            acm:
              "3.ms.2_1_1m4tdhy.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_415780334_1257105158_4_0-t_-c1_10057922_nil_nil_2_1257105158_42_0-lc_32",
            type: 2,
            title:
              "杨幂明星同款2018新款白色ins超火短袖t恤女字母宽松纯棉百搭上衣",
            orgPrice: "￥54.00",
            cparam:
              "MTUzODA1MDI0NF8xZHIzOGQwX2IxZWIyZmQzN2NmMDNiZmI1Y2I3YWJjN2E0MDRjNTM4XzMyXzNfNDE1NzgwMzM0XzBfMF80XzBfNzQ0XzBfMA==",
            props: [
              "杨幂明星同款2018新款白色ins超火短袖t恤女字母宽松纯棉百搭上衣"
            ],
            lefttop_taglist: [],
            sale: "1557",
            price: "37.00",
            cfav: "1561",
            leftbottom_taglist: [],
            shopId: "1302442895",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m8a710?acm=3.ms.2_1_1m8a710.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_444211099_2042685_5_0-t_-c1_10057922_nil_nil_0_2042685_40_0-lc_32&cparam=MTUzODA1MDI0NF8xZW94eXp5X2I1YWY0MmNlODc4ZTg0ODI1MWNkZTQxZDEzYTI1N2JmXzMyXzRfNDQ0MjExMDk5XzBfMjA0MjY4NV81XzBfNDA4XzBfMA==",
            iid: "1m8a710",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/17f85e/180927_5i77e04lhaalbg3dai0j4588lbahh_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m8a710?acm=3.ms.2_1_1m8a710.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_444211099_2042685_5_0-t_-c1_10057922_nil_nil_0_2042685_40_0-lc_32&cparam=MTUzODA1MDI0NF8xZW94eXp5X2I1YWY0MmNlODc4ZTg0ODI1MWNkZTQxZDEzYTI1N2JmXzMyXzRfNDQ0MjExMDk5XzBfMjA0MjY4NV81XzBfNDA4XzBfMA==",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/17f85e/180927_5i77e04lhaalbg3dai0j4588lbahh_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525",
            acm:
              "3.ms.2_1_1m8a710.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_444211099_2042685_5_0-t_-c1_10057922_nil_nil_0_2042685_40_0-lc_32",
            type: 2,
            title:
              "吊带背心女夏2018秋季新款内搭吊带衫短款性感修身针织打底衫上衣显瘦",
            orgPrice: "￥42.60",
            cparam:
              "MTUzODA1MDI0NF8xZW94eXp5X2I1YWY0MmNlODc4ZTg0ODI1MWNkZTQxZDEzYTI1N2JmXzMyXzRfNDQ0MjExMDk5XzBfMjA0MjY4NV81XzBfNDA4XzBfMA==",
            props: [
              "吊带背心女夏2018秋季新款内搭吊带衫短款性感修身针织打底衫上衣显瘦"
            ],
            lefttop_taglist: [],
            sale: "2",
            price: "29.80",
            cfav: "3",
            leftbottom_taglist: [],
            shopId: "20679411",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1lqxuvu?acm=3.ms.2_1_1lqxuvu.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_437825990_393064633_6_0-t_-c1_10057922_nil_nil_1_393064633_36_0-lc_32&cparam=MTUzODA1MDI0NF8xZWhjOWZvX2JhOTJjM2FjNDljZTk0Yzk2ZTM1ODM0ZmRiOWM4YTJhXzMyXzVfNDM3ODI1OTkwXzBfMF82XzBfMTY0XzBfMA==",
            iid: "1lqxuvu",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180126_37ifg8gib16j03llfbj0i75c7dgb6_640x961.jpg_560x999.jpg",
              w: 560,
              h: 841
            },
            link:
              "http://item.meilishuo.com/h5/detail/1lqxuvu?acm=3.ms.2_1_1lqxuvu.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_437825990_393064633_6_0-t_-c1_10057922_nil_nil_1_393064633_36_0-lc_32&cparam=MTUzODA1MDI0NF8xZWhjOWZvX2JhOTJjM2FjNDljZTk0Yzk2ZTM1ODM0ZmRiOWM4YTJhXzMyXzVfNDM3ODI1OTkwXzBfMF82XzBfMTY0XzBfMA==",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180126_37ifg8gib16j03llfbj0i75c7dgb6_640x961.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 352 351",
            acm:
              "3.ms.2_1_1lqxuvu.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_437825990_393064633_6_0-t_-c1_10057922_nil_nil_1_393064633_36_0-lc_32",
            type: 2,
            title:
              "高领黑白条纹长袖t恤女2018春秋新款韩版宽松百搭学生内搭打底衫",
            orgPrice: "￥42.84",
            cparam:
              "MTUzODA1MDI0NF8xZWhjOWZvX2JhOTJjM2FjNDljZTk0Yzk2ZTM1ODM0ZmRiOWM4YTJhXzMyXzVfNDM3ODI1OTkwXzBfMF82XzBfMTY0XzBfMA==",
            props: [
              "高领黑白条纹长袖t恤女2018春秋新款韩版宽松百搭学生内搭打底衫"
            ],
            lefttop_taglist: [],
            sale: "657",
            price: "29.98",
            cfav: "4585",
            leftbottom_taglist: [],
            shopId: "20234338",
            popularStar: null
          },
          {
            itemType: 10,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m7jj7a?acm=3.ms.0_4_1m7jj7a.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            iid: "1m7jj7a",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180825_4figj590flej05g556d6ll8ka09a7_640x902.jpg_560x999.jpg",
              w: 560,
              h: 790
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m7jj7a?acm=3.ms.0_4_1m7jj7a.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180825_4figj590flej05g556d6ll8ka09a7_640x902.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m7jj7a.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            type: 2,
            title: "套装女春秋2018新款时尚复古气质个性连帽卫衣两件套",
            orgPrice: "￥211.43",
            cparam: null,
            props: ["套装女春秋2018新款时尚复古气质个性连帽卫衣两件套"],
            lefttop_taglist: [],
            sale: 28990,
            price: "148.00",
            cfav: 93,
            leftbottom_taglist: [],
            shopId: 1302421618,
            popularStar: 0
          },
          {
            itemType: 10,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1kihxey?acm=3.ms.0_4_1kihxey.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            iid: "1kihxey",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/170823_0d997dch3jkl8ed225ejbba76j2lf_640x832.jpg_560x999.jpg",
              w: 560,
              h: 728
            },
            link:
              "http://item.meilishuo.com/h5/detail/1kihxey?acm=3.ms.0_4_1kihxey.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/170823_0d997dch3jkl8ed225ejbba76j2lf_640x832.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1711",
            acm: "3.ms.0_4_1kihxey.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            type: 2,
            title:
              "2018春秋季新款韩版百搭连帽卫衣+松紧腰长裤时尚运动套装两件套女学生",
            orgPrice: "￥57.00",
            cparam: null,
            props: [
              "2018春秋季新款韩版百搭连帽卫衣+松紧腰长裤时尚运动套装两件套女学生"
            ],
            lefttop_taglist: [],
            sale: 3901,
            price: "57.00",
            cfav: 115,
            leftbottom_taglist: [],
            shopId: 1302408860,
            popularStar: 0
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m1camo?acm=3.ms.2_1_1m1camo.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_376755071_1212066415_7_0-t_-c1_10057922_nil_nil_2_1212066415_20_0-lc_32&cparam=MTUzODA1MDI0NF8xY2dtYzZ1XzhjNDU1ZWEwOTBhYTE4MzUzNDljNjc4NDRmN2QyZmVmXzMyXzZfMzc2NzU1MDcxXzBfMF83XzBfNTY1XzBfMA==",
            iid: "1m1camo",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180514_104a5k2f09808h371j8b3h299e870_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m1camo?acm=3.ms.2_1_1m1camo.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_376755071_1212066415_7_0-t_-c1_10057922_nil_nil_2_1212066415_20_0-lc_32&cparam=MTUzODA1MDI0NF8xY2dtYzZ1XzhjNDU1ZWEwOTBhYTE4MzUzNDljNjc4NDRmN2QyZmVmXzMyXzZfMzc2NzU1MDcxXzBfMF83XzBfNTY1XzBfMA==",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180514_104a5k2f09808h371j8b3h299e870_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 352 351",
            acm:
              "3.ms.2_1_1m1camo.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_376755071_1212066415_7_0-t_-c1_10057922_nil_nil_2_1212066415_20_0-lc_32",
            type: 2,
            title:
              "2018春秋季新款韩版原宿风闺蜜装圆领套头短袖t恤女中长款纯色百搭上衣宽松大码学生半袖体恤",
            orgPrice: "￥70.00",
            cparam:
              "MTUzODA1MDI0NF8xY2dtYzZ1XzhjNDU1ZWEwOTBhYTE4MzUzNDljNjc4NDRmN2QyZmVmXzMyXzZfMzc2NzU1MDcxXzBfMF83XzBfNTY1XzBfMA==",
            props: [
              "2018春秋季新款韩版原宿风闺蜜装圆领套头短袖t恤女中长款纯色百搭上衣宽松大码学生半袖体恤"
            ],
            lefttop_taglist: [],
            sale: "1532",
            price: "49.00",
            cfav: "3961",
            leftbottom_taglist: [],
            shopId: "108443",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m7kote?acm=3.ms.2_1_1m7kote.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_443917446_460484121_8_0-t_-c1_10057922_nil_nil_1_460484121_30_0-lc_32&cparam=MTUzODA1MDI0NF8xZW9sZHR3XzAxMjQxYzcyMmE0NTI1NmJlZmRhYjMzMWQ1MmNjOGIxXzMyXzdfNDQzOTE3NDQ2XzBfMF84XzBfMTdfMF8w",
            iid: "1m7kote",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/55cf19/180823_33g37bc72gj20h08ee57c18262iad_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m7kote?acm=3.ms.2_1_1m7kote.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_443917446_460484121_8_0-t_-c1_10057922_nil_nil_1_460484121_30_0-lc_32&cparam=MTUzODA1MDI0NF8xZW9sZHR3XzAxMjQxYzcyMmE0NTI1NmJlZmRhYjMzMWQ1MmNjOGIxXzMyXzdfNDQzOTE3NDQ2XzBfMF84XzBfMTdfMF8w",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/55cf19/180823_33g37bc72gj20h08ee57c18262iad_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm:
              "3.ms.2_1_1m7kote.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_443917446_460484121_8_0-t_-c1_10057922_nil_nil_1_460484121_30_0-lc_32",
            type: 2,
            title:
              "春秋2018ins超火的新款韩版简约百搭宽松字母印花长袖T恤学生休闲体恤显瘦上衣潮",
            orgPrice: "￥40.00",
            cparam:
              "MTUzODA1MDI0NF8xZW9sZHR3XzAxMjQxYzcyMmE0NTI1NmJlZmRhYjMzMWQ1MmNjOGIxXzMyXzdfNDQzOTE3NDQ2XzBfMF84XzBfMTdfMF8w",
            props: [
              "春秋2018ins超火的新款韩版简约百搭宽松字母印花长袖T恤学生休闲体恤显瘦上衣潮"
            ],
            lefttop_taglist: [],
            sale: "120",
            price: "40.00",
            cfav: "320",
            leftbottom_taglist: [],
            shopId: "1302404510",
            popularStar: null
          },
          {
            itemType: 10,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m8k4ps?acm=3.ms.0_4_1m8k4ps.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            iid: "1m8k4ps",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180914_3aabiea9jgkj2a7hlgfie4011bljj_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m8k4ps?acm=3.ms.0_4_1m8k4ps.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180914_3aabiea9jgkj2a7hlgfie4011bljj_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m8k4ps.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            type: 2,
            title:
              "时尚套装两件套2018韩版网红社会宽松连帽卫衣+高腰显瘦开叉半身裙学院风休闲秋装女套装新款",
            orgPrice: "￥199.00",
            cparam: null,
            props: [
              "时尚套装两件套2018韩版网红社会宽松连帽卫衣+高腰显瘦开叉半身裙学院风休闲秋装女套装新款"
            ],
            lefttop_taglist: [],
            sale: 23765,
            price: "98.00",
            cfav: 276,
            leftbottom_taglist: [],
            shopId: 22533618,
            popularStar: 0
          },
          {
            itemType: 10,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m8ogsc?acm=3.ms.0_4_1m8ogsc.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            iid: "1m8ogsc",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180917_24666f4kgi486191382ikh2lhc8cg_640x862.jpg_560x999.jpg",
              w: 560,
              h: 755
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m8ogsc?acm=3.ms.0_4_1m8ogsc.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180917_24666f4kgi486191382ikh2lhc8cg_640x862.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m8ogsc.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            type: 2,
            title:
              "网红同款实拍秋季女装2018新款女初恋复古中长款针织连衣裙半身裙时尚套装两件套",
            orgPrice: "￥369.00",
            cparam: null,
            props: [
              "网红同款实拍秋季女装2018新款女初恋复古中长款针织连衣裙半身裙时尚套装两件套"
            ],
            lefttop_taglist: [],
            sale: 21355,
            price: "119.00",
            cfav: 162,
            leftbottom_taglist: [],
            shopId: 20024660,
            popularStar: 0
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m8zmoa?acm=3.ms.2_1_1m8zmoa.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_444290750_2042878_9_0-t_-c1_10057922_nil_nil_0_2042878_35_0-lc_32&cparam=MTUzODA1MDI0NF8xZXAxZHgwX2I2NTVkODJjOGI1N2Q3ODc1NzBjZmE5MThmMDRjOWNhXzMyXzhfNDQ0MjkwNzUwXzBfMjA0Mjg3OF85XzBfMTk3XzBfMA==",
            iid: "1m8zmoa",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/17f85e/180927_8b269ca4dgibkck8fj1278a6a2hjf_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m8zmoa?acm=3.ms.2_1_1m8zmoa.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_444290750_2042878_9_0-t_-c1_10057922_nil_nil_0_2042878_35_0-lc_32&cparam=MTUzODA1MDI0NF8xZXAxZHgwX2I2NTVkODJjOGI1N2Q3ODc1NzBjZmE5MThmMDRjOWNhXzMyXzhfNDQ0MjkwNzUwXzBfMjA0Mjg3OF85XzBfMTk3XzBfMA==",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/17f85e/180927_8b269ca4dgibkck8fj1278a6a2hjf_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "352 351",
            acm:
              "3.ms.2_1_1m8zmoa.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_444290750_2042878_9_0-t_-c1_10057922_nil_nil_0_2042878_35_0-lc_32",
            type: 2,
            title:
              "【秋冬加厚】灯芯绒2018新品百搭休闲裤女韩版毛呢裤子高腰显瘦宽松九分哈伦裤条纹大码小脚裤",
            orgPrice: "￥99.00",
            cparam:
              "MTUzODA1MDI0NF8xZXAxZHgwX2I2NTVkODJjOGI1N2Q3ODc1NzBjZmE5MThmMDRjOWNhXzMyXzhfNDQ0MjkwNzUwXzBfMjA0Mjg3OF85XzBfMTk3XzBfMA==",
            props: [
              "【秋冬加厚】灯芯绒2018新品百搭休闲裤女韩版毛呢裤子高腰显瘦宽松九分哈伦裤条纹大码小脚裤"
            ],
            lefttop_taglist: [],
            sale: "192",
            price: "55.00",
            cfav: "12",
            leftbottom_taglist: [],
            shopId: "105980",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m7dvsq?acm=3.ms.2_1_1m7dvsq.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_438963142_459649297_10_0-t_-c1_10057922_nil_nil_1_459649297_30_0-lc_32&cparam=MTUzODA1MDI0NF8xZWlwMGFzXzVkZTg3NzlkNWUzMmEwOWMzNjY0ZGU4NDc1YTI1NjE3XzMyXzlfNDM4OTYzMTQyXzBfMF8xMF8wXzI1M18wXzA=",
            iid: "1m7dvsq",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180818_8fid15g78c3i80854aa6j855hbbcj_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m7dvsq?acm=3.ms.2_1_1m7dvsq.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_438963142_459649297_10_0-t_-c1_10057922_nil_nil_1_459649297_30_0-lc_32&cparam=MTUzODA1MDI0NF8xZWlwMGFzXzVkZTg3NzlkNWUzMmEwOWMzNjY0ZGU4NDc1YTI1NjE3XzMyXzlfNDM4OTYzMTQyXzBfMF8xMF8wXzI1M18wXzA=",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180818_8fid15g78c3i80854aa6j855hbbcj_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 352 351",
            acm:
              "3.ms.2_1_1m7dvsq.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_438963142_459649297_10_0-t_-c1_10057922_nil_nil_1_459649297_30_0-lc_32",
            type: 2,
            title:
              "2018春秋冬白色体恤女长袖宽松t恤女打底衫韩版新款圆领纯棉百搭上衣",
            orgPrice: "￥55.72",
            cparam:
              "MTUzODA1MDI0NF8xZWlwMGFzXzVkZTg3NzlkNWUzMmEwOWMzNjY0ZGU4NDc1YTI1NjE3XzMyXzlfNDM4OTYzMTQyXzBfMF8xMF8wXzI1M18wXzA=",
            props: [
              "2018春秋冬白色体恤女长袖宽松t恤女打底衫韩版新款圆领纯棉百搭上衣"
            ],
            lefttop_taglist: [],
            sale: "80",
            price: "39.00",
            cfav: "126",
            leftbottom_taglist: [],
            shopId: "22051955",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m901la?acm=3.ms.2_1_1m901la.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_443337876_0_11_0-t_-c1_10057922_nil_nil_0_0_38_0-lc_32&cparam=MTUzODA1MDI0NF8xZW53amZrXzIzZWY1YWE4ZDI5Y2ZiOTU0N2ViMzhjMDAwODM2YzQ4XzMyXzEwXzQ0MzMzNzg3Nl8wXzBfMTFfMF85ODFfMF8w",
            iid: "1m901la",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/55cf19/180925_6bdiibf87e046d836dcjie5l40fk1_641x641.jpg_560x999.jpg",
              w: 560,
              h: 560
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m901la?acm=3.ms.2_1_1m901la.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_443337876_0_11_0-t_-c1_10057922_nil_nil_0_0_38_0-lc_32&cparam=MTUzODA1MDI0NF8xZW53amZrXzIzZWY1YWE4ZDI5Y2ZiOTU0N2ViMzhjMDAwODM2YzQ4XzMyXzEwXzQ0MzMzNzg3Nl8wXzBfMTFfMF85ODFfMF8w",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/55cf19/180925_6bdiibf87e046d836dcjie5l40fk1_641x641.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525",
            acm:
              "3.ms.2_1_1m901la.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_443337876_0_11_0-t_-c1_10057922_nil_nil_0_0_38_0-lc_32",
            type: 2,
            title:
              "加绒加厚裤子女秋冬2018新款学生韩版宽松显瘦休闲哈伦运动卫裤秋",
            orgPrice: "￥49.00",
            cparam:
              "MTUzODA1MDI0NF8xZW53amZrXzIzZWY1YWE4ZDI5Y2ZiOTU0N2ViMzhjMDAwODM2YzQ4XzMyXzEwXzQ0MzMzNzg3Nl8wXzBfMTFfMF85ODFfMF8w",
            props: [
              "加绒加厚裤子女秋冬2018新款学生韩版宽松显瘦休闲哈伦运动卫裤秋"
            ],
            lefttop_taglist: [],
            sale: "1",
            price: "49.00",
            cfav: "1",
            leftbottom_taglist: [],
            shopId: "1302414647",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1lwwv82?acm=3.ms.2_1_1lwwv82.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_362829383_1168661850_12_0-t_-c1_10057922_nil_nil_2_1168661850_20_0-lc_32&cparam=MTUzODA1MDI0NF8xYzAxZHhpX2Y3M2IzZjFjMzhkZWNmMmQ5Mzg0MGY1ZTM0OWM2OWVjXzMyXzExXzM2MjgyOTM4M18wXzBfMTJfMF81NjVfMF8w",
            iid: "1lwwv82",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180519_3a813hd9abgb808kgb2ck3ci1631e_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1lwwv82?acm=3.ms.2_1_1lwwv82.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_362829383_1168661850_12_0-t_-c1_10057922_nil_nil_2_1168661850_20_0-lc_32&cparam=MTUzODA1MDI0NF8xYzAxZHhpX2Y3M2IzZjFjMzhkZWNmMmQ5Mzg0MGY1ZTM0OWM2OWVjXzMyXzExXzM2MjgyOTM4M18wXzBfMTJfMF81NjVfMF8w",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180519_3a813hd9abgb808kgb2ck3ci1631e_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 352 1232 351",
            acm:
              "3.ms.2_1_1lwwv82.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_362829383_1168661850_12_0-t_-c1_10057922_nil_nil_2_1168661850_20_0-lc_32",
            type: 2,
            title:
              "2018新款女装春装简约衬衫女长袖雪纺上衣修身清新气质时尚大方个性百搭纯色韩范打底衬衣潮",
            orgPrice: "￥80.00",
            cparam:
              "MTUzODA1MDI0NF8xYzAxZHhpX2Y3M2IzZjFjMzhkZWNmMmQ5Mzg0MGY1ZTM0OWM2OWVjXzMyXzExXzM2MjgyOTM4M18wXzBfMTJfMF81NjVfMF8w",
            props: [
              "2018新款女装春装简约衬衫女长袖雪纺上衣修身清新气质时尚大方个性百搭纯色韩范打底衬衣潮"
            ],
            lefttop_taglist: [],
            sale: "2198",
            price: "56.00",
            cfav: "6337",
            leftbottom_taglist: [],
            shopId: "108443",
            popularStar: null
          },
          {
            itemType: 10,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m8jzwo?acm=3.ms.0_4_1m8jzwo.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            iid: "1m8jzwo",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180914_4k0k14g1608gc04k3jh1c6jac47fi_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m8jzwo?acm=3.ms.0_4_1m8jzwo.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180914_4k0k14g1608gc04k3jh1c6jac47fi_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m8jzwo.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            type: 2,
            title:
              "chic港味秋装女套装新款2018韩版格子西装外套+显瘦高腰破洞小脚裤学院风时尚套装两件套",
            orgPrice: "￥78.58",
            cparam: null,
            props: [
              "chic港味秋装女套装新款2018韩版格子西装外套+显瘦高腰破洞小脚裤学院风时尚套装两件套"
            ],
            lefttop_taglist: [],
            sale: 19993,
            price: "55.00",
            cfav: 173,
            leftbottom_taglist: [],
            shopId: 22533618,
            popularStar: 0
          },
          {
            itemType: 10,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m76l50?acm=3.ms.0_4_1m76l50.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            iid: "1m76l50",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180815_81dj3id2i70kfeh4eekd94k9ij0k4_640x913.jpg_560x999.jpg",
              w: 560,
              h: 799
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m76l50?acm=3.ms.0_4_1m76l50.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180815_81dj3id2i70kfeh4eekd94k9ij0k4_640x913.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m76l50.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            type: 2,
            title: "2018秋冬新款ins超火针织时尚两件套小香风套装女",
            orgPrice: "￥154.29",
            cparam: null,
            props: ["2018秋冬新款ins超火针织时尚两件套小香风套装女"],
            lefttop_taglist: [],
            sale: 20288,
            price: "108.00",
            cfav: 9,
            leftbottom_taglist: [],
            shopId: 1302421618,
            popularStar: 0
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m11u6e?acm=3.ms.2_1_1m11u6e.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_375932268_432541799_13_0-t_-c1_10057922_nil_nil_1_432541799_20_0-lc_32&cparam=MTUzODA1MDI0NF8xY2ZuMmZrXzIyZTQxNTk2NmQwMDJjMmVkZWNjNGQ3OTJhNzVhNzQ1XzMyXzEyXzM3NTkzMjI2OF8wXzBfMTNfMF81NjVfMF8w",
            iid: "1m11u6e",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180512_8ei0ck7535c2l4dcj96cllieca561_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m11u6e?acm=3.ms.2_1_1m11u6e.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_375932268_432541799_13_0-t_-c1_10057922_nil_nil_1_432541799_20_0-lc_32&cparam=MTUzODA1MDI0NF8xY2ZuMmZrXzIyZTQxNTk2NmQwMDJjMmVkZWNjNGQ3OTJhNzVhNzQ1XzMyXzEyXzM3NTkzMjI2OF8wXzBfMTNfMF81NjVfMF8w",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180512_8ei0ck7535c2l4dcj96cllieca561_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 352 351",
            acm:
              "3.ms.2_1_1m11u6e.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_375932268_432541799_13_0-t_-c1_10057922_nil_nil_1_432541799_20_0-lc_32",
            type: 2,
            title:
              "2018春秋季新款女装韩版宽松短袖t恤女chic半袖打底条纹体恤上衣",
            orgPrice: "￥50.00",
            cparam:
              "MTUzODA1MDI0NF8xY2ZuMmZrXzIyZTQxNTk2NmQwMDJjMmVkZWNjNGQ3OTJhNzVhNzQ1XzMyXzEyXzM3NTkzMjI2OF8wXzBfMTNfMF81NjVfMF8w",
            props: [
              "2018春秋季新款女装韩版宽松短袖t恤女chic半袖打底条纹体恤上衣"
            ],
            lefttop_taglist: [],
            sale: "1323",
            price: "35.00",
            cfav: "1785",
            leftbottom_taglist: [],
            shopId: "108443",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m4xiic?acm=3.ms.2_1_1m4xiic.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_429458579_2037561_14_0-t_-c1_10057922_nil_nil_0_2037561_30_0-lc_32&cparam=MTUzODA1MDI0NF8xZTdka3JpXzlkOTUxNDZhMjA1ODE5MDFhODBlNTAzZDdiZWY4NWQ3XzMyXzEzXzQyOTQ1ODU3OV8wXzIwMzc1NjFfMTRfMF84MjlfMF8w",
            iid: "1m4xiic",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/17f85e/180914_5k7kk2b8hi6id118lighj6i82730g_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m4xiic?acm=3.ms.2_1_1m4xiic.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_429458579_2037561_14_0-t_-c1_10057922_nil_nil_0_2037561_30_0-lc_32&cparam=MTUzODA1MDI0NF8xZTdka3JpXzlkOTUxNDZhMjA1ODE5MDFhODBlNTAzZDdiZWY4NWQ3XzMyXzEzXzQyOTQ1ODU3OV8wXzIwMzc1NjFfMTRfMF84MjlfMF8w",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/17f85e/180914_5k7kk2b8hi6id118lighj6i82730g_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 352 1990 82 61 351",
            acm:
              "3.ms.2_1_1m4xiic.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_429458579_2037561_14_0-t_-c1_10057922_nil_nil_0_2037561_30_0-lc_32",
            type: 2,
            title:
              "【仲陌美】2018春秋季新款原宿风长袖T恤女bf潮学生韩版拼接白色复古港味宽松百搭上衣打底",
            orgPrice: "￥69.00",
            cparam:
              "MTUzODA1MDI0NF8xZTdka3JpXzlkOTUxNDZhMjA1ODE5MDFhODBlNTAzZDdiZWY4NWQ3XzMyXzEzXzQyOTQ1ODU3OV8wXzIwMzc1NjFfMTRfMF84MjlfMF8w",
            props: [
              "【仲陌美】2018春秋季新款原宿风长袖T恤女bf潮学生韩版拼接白色复古港味宽松百搭上衣打底"
            ],
            lefttop_taglist: [],
            sale: "1577",
            price: "38.50",
            cfav: "2489",
            leftbottom_taglist: [],
            shopId: "20261545",
            popularStar: null
          },
          {
            itemType: 10,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m6zb50?acm=3.ms.0_4_1m6zb50.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            iid: "1m6zb50",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180808_0312e2cd957g59610k88091621gf2_640x954.jpg_560x999.jpg",
              w: 560,
              h: 835
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m6zb50?acm=3.ms.0_4_1m6zb50.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180808_0312e2cd957g59610k88091621gf2_640x954.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m6zb50.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            type: 2,
            title:
              "网红同款2018秋季新款慵懒风空调衫针织开衫+针织半身裙时尚套装",
            orgPrice: "￥127.15",
            cparam: null,
            props: [
              "网红同款2018秋季新款慵懒风空调衫针织开衫+针织半身裙时尚套装"
            ],
            lefttop_taglist: [],
            sale: 20230,
            price: "89.00",
            cfav: 5,
            leftbottom_taglist: [],
            shopId: 1302421618,
            popularStar: 0
          },
          {
            itemType: 10,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m8loki?acm=3.ms.0_4_1m8loki.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            iid: "1m8loki",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180916_4di1ek7k3kha3klk02185678b025d_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m8loki?acm=3.ms.0_4_1m8loki.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180916_4di1ek7k3kha3klk02185678b025d_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m8loki.0.13384-69004.s026ur4QK5gf1.t_-sd_117-lc_16",
            type: 2,
            title:
              "中长款长袖连衣裙秋装新款2018韩版休闲胖mm大码女装裙子女学生宽松松垮垮中长款卫衣裙外套",
            orgPrice: "￥168.00",
            cparam: null,
            props: [
              "中长款长袖连衣裙秋装新款2018韩版休闲胖mm大码女装裙子女学生宽松松垮垮中长款卫衣裙外套"
            ],
            lefttop_taglist: [],
            sale: 19043,
            price: "54.00",
            cfav: 151,
            leftbottom_taglist: [],
            shopId: 22533618,
            popularStar: 0
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1lvf1qw?acm=3.ms.2_1_1lvf1qw.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_352660870_0_15_0-t_-c1_10057922_nil_nil_0_0_30_0-lc_32&cparam=MTUzODA1MDI0NF8xYm54aHM0XzEzMzFiNTg4NjZkYjc1ZWExY2M5ZThmMDM2MzllYzBmXzMyXzE0XzM1MjY2MDg3MF8wXzBfMTVfMF85MDdfMF8w",
            iid: "1lvf1qw",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180423_54e410ebffkj73cah5e513584b5fb_800x800.jpg_560x999.jpg",
              w: 560,
              h: 560
            },
            link:
              "http://item.meilishuo.com/h5/detail/1lvf1qw?acm=3.ms.2_1_1lvf1qw.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_352660870_0_15_0-t_-c1_10057922_nil_nil_0_0_30_0-lc_32&cparam=MTUzODA1MDI0NF8xYm54aHM0XzEzMzFiNTg4NjZkYjc1ZWExY2M5ZThmMDM2MzllYzBmXzMyXzE0XzM1MjY2MDg3MF8wXzBfMTVfMF85MDdfMF8w",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180423_54e410ebffkj73cah5e513584b5fb_800x800.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 1907",
            acm:
              "3.ms.2_1_1lvf1qw.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_352660870_0_15_0-t_-c1_10057922_nil_nil_0_0_30_0-lc_32",
            type: 2,
            title:
              "长袖/短袖T恤女2018新款棉质学生宽松韩版夏季可爱卡通猫咪印花纯色百搭打底衫上衣女潮",
            orgPrice: "￥52.00",
            cparam:
              "MTUzODA1MDI0NF8xYm54aHM0XzEzMzFiNTg4NjZkYjc1ZWExY2M5ZThmMDM2MzllYzBmXzMyXzE0XzM1MjY2MDg3MF8wXzBfMTVfMF85MDdfMF8w",
            props: [
              "长袖/短袖T恤女2018新款棉质学生宽松韩版夏季可爱卡通猫咪印花纯色百搭打底衫上衣女潮"
            ],
            lefttop_taglist: [],
            sale: "1856",
            price: "52.00",
            cfav: "3658",
            leftbottom_taglist: [],
            shopId: "1302406937",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m4mqlm?acm=3.ms.2_1_1m4mqlm.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_404067580_447675166_16_0-t_-c1_10057922_nil_nil_1_447675166_30_0-lc_32&cparam=MTUzODA1MDI0NF8xZGQ1NTRnXzNmZjExYTAyOTMwNjYwYTAyMWY2YzdjZTUxZTNmOWI0XzMyXzE1XzQwNDA2NzU4MF8wXzBfMTZfMF84OTFfMF8w",
            iid: "1m4mqlm",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180621_6276g6e01jcl5jh9jjj2i3gl8ciia_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m4mqlm?acm=3.ms.2_1_1m4mqlm.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_404067580_447675166_16_0-t_-c1_10057922_nil_nil_1_447675166_30_0-lc_32&cparam=MTUzODA1MDI0NF8xZGQ1NTRnXzNmZjExYTAyOTMwNjYwYTAyMWY2YzdjZTUxZTNmOWI0XzMyXzE1XzQwNDA2NzU4MF8wXzBfMTZfMF84OTFfMF8w",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180621_6276g6e01jcl5jh9jjj2i3gl8ciia_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm:
              "3.ms.2_1_1m4mqlm.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_404067580_447675166_16_0-t_-c1_10057922_nil_nil_1_447675166_30_0-lc_32",
            type: 2,
            title:
              "2018夏季新款韩版宽松无袖短款吊带背心女学生外穿清新打底雪纺上衣潮",
            orgPrice: "￥70.00",
            cparam:
              "MTUzODA1MDI0NF8xZGQ1NTRnXzNmZjExYTAyOTMwNjYwYTAyMWY2YzdjZTUxZTNmOWI0XzMyXzE1XzQwNDA2NzU4MF8wXzBfMTZfMF84OTFfMF8w",
            props: [
              "2018夏季新款韩版宽松无袖短款吊带背心女学生外穿清新打底雪纺上衣潮"
            ],
            lefttop_taglist: [],
            sale: "125",
            price: "70.00",
            cfav: "68",
            leftbottom_taglist: [],
            shopId: "1302437061",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1lrxzfw?acm=3.ms.2_1_1lrxzfw.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_355439477_1289053889_17_0-t_-c1_10057922_nil_nil_2_1289053889_30_0-lc_32&cparam=MTUzODA1MDI0NF8xYnI4bHI2XzEwZjU2OTYwYmJmNGNlNGMyZDczYWViYWU2MWY5M2JlXzMyXzE2XzM1NTQzOTQ3N18wXzBfMTdfMF8xMDNfMF8w",
            iid: "1lrxzfw",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180827_2783jag38806j2230eh6g8lb6b8cl_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1lrxzfw?acm=3.ms.2_1_1lrxzfw.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_355439477_1289053889_17_0-t_-c1_10057922_nil_nil_2_1289053889_30_0-lc_32&cparam=MTUzODA1MDI0NF8xYnI4bHI2XzEwZjU2OTYwYmJmNGNlNGMyZDczYWViYWU2MWY5M2JlXzMyXzE2XzM1NTQzOTQ3N18wXzBfMTdfMF8xMDNfMF8w",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180827_2783jag38806j2230eh6g8lb6b8cl_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 82",
            acm:
              "3.ms.2_1_1lrxzfw.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_355439477_1289053889_17_0-t_-c1_10057922_nil_nil_2_1289053889_30_0-lc_32",
            type: 2,
            title:
              "【两件59元】【 降价啦！】短袖t恤女2018夏装新款韩版潮宽松百搭学生休闲上衣",
            orgPrice: "￥56.00",
            cparam:
              "MTUzODA1MDI0NF8xYnI4bHI2XzEwZjU2OTYwYmJmNGNlNGMyZDczYWViYWU2MWY5M2JlXzMyXzE2XzM1NTQzOTQ3N18wXzBfMTdfMF8xMDNfMF8w",
            props: [
              "【两件59元】【 降价啦！】短袖t恤女2018夏装新款韩版潮宽松百搭学生休闲上衣"
            ],
            lefttop_taglist: [],
            sale: "1323",
            price: "39.00",
            cfav: "7511",
            leftbottom_taglist: [],
            shopId: "1302412599",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m4jogi?acm=3.ms.2_1_1m4jogi.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_401464435_447260077_18_0-t_-c1_10057922_nil_nil_1_447260077_32_0-lc_32&cparam=MTUzODA1MDI0NF8xZGExanhhXzJhZmQ4Mzg5ZjM5MWRkMjQxMmVhMmM0MWVkYmM3NjYyXzMyXzE3XzQwMTQ2NDQzNV8wXzBfMThfMF81MzhfMF8w",
            iid: "1m4jogi",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/55cf19/180620_7khjbgkb10kh1g588238i1hhi17gg_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m4jogi?acm=3.ms.2_1_1m4jogi.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_401464435_447260077_18_0-t_-c1_10057922_nil_nil_1_447260077_32_0-lc_32&cparam=MTUzODA1MDI0NF8xZGExanhhXzJhZmQ4Mzg5ZjM5MWRkMjQxMmVhMmM0MWVkYmM3NjYyXzMyXzE3XzQwMTQ2NDQzNV8wXzBfMThfMF81MzhfMF8w",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/55cf19/180620_7khjbgkb10kh1g588238i1hhi17gg_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525",
            acm:
              "3.ms.2_1_1m4jogi.0.70867-69004.s026ur4QK5gf1.sd_117-c_2_32_401464435_447260077_18_0-t_-c1_10057922_nil_nil_1_447260077_32_0-lc_32",
            type: 2,
            title:
              "2018夏装新款韩范t恤女短袖宽松百搭韩版学生半袖ins超火的上衣体侐潮",
            orgPrice: "￥50.00",
            cparam:
              "MTUzODA1MDI0NF8xZGExanhhXzJhZmQ4Mzg5ZjM5MWRkMjQxMmVhMmM0MWVkYmM3NjYyXzMyXzE3XzQwMTQ2NDQzNV8wXzBfMThfMF81MzhfMF8w",
            props: [
              "2018夏装新款韩范t恤女短袖宽松百搭韩版学生半袖ins超火的上衣体侐潮"
            ],
            lefttop_taglist: [],
            sale: "649",
            price: "50.00",
            cfav: "969",
            leftbottom_taglist: [],
            shopId: "1302408692",
            popularStar: null
          }
        ],
        title: "美丽说wap首页",
        isEnd: false,
        ptpPartC: "_mb_mls_10057922_wap-index_noab-noab",
        cpc_offset: 0
      }
    });
  }
  if (type === "new") {
    return mockRequest({
      url: "/post",
      method: "post",
      data: {
        filter: {
          title: "美丽说wap首页",
          list: [
            {
              fcid: "10057922",
              style: null,
              sort: "pop",
              title: "流行",
              type: "sort"
            },
            {
              fcid: "10057922",
              style: null,
              sort: "sell",
              title: "热销",
              type: "sort"
            },
            {
              fcid: "10057922",
              style: null,
              sort: "new",
              title: "上新",
              type: "sort"
            }
          ]
        },
        total: 41766,
        param: {
          eventId: 70003,
          cKey: "wap-index",
          fcid: "10057922",
          cpcEventId: 70005,
          section: "0",
          _mgjuuid: "aef7e10d-0c27-4d56-8d97-db59fadbaafb",
          sort: "new",
          page: "1",
          ptpWallDoc: "_wall_docs",
          ptpPartC: "_mb_mls_10057922_wap-index_noab-noab",
          cpc_offset: 0,
          ptpWallCpc: "_wall_cpc"
        },
        page: 1,
        sort: "new",
        list: [
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m93p4u?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            iid: "1m93p4u",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180927_5l59l9i252b2icj9lic1i4l6g2fae_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m93p4u?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180927_5l59l9i252b2icj9lic1i4l6g2fae_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m93p4u.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            type: 2,
            title:
              "敬酒服新娘2018新款春秋季结婚礼服红色鱼尾包臀连衣裙回门晚礼服",
            orgPrice: "￥140.00",
            cparam: null,
            props: [
              "敬酒服新娘2018新款春秋季结婚礼服红色鱼尾包臀连衣裙回门晚礼服"
            ],
            lefttop_taglist: [],
            sale: 0,
            price: "98.00",
            cfav: 0,
            leftbottom_taglist: [],
            shopId: 107897,
            popularStar: 0
          },
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m93p1c?acm=3.ms.0_4_1m93p1c.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            iid: "1m93p1c",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180927_1ili2a8l27gjijhi22f3dc24d139j_640x900.jpg_560x999.jpg",
              w: 560,
              h: 788
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m93p1c?acm=3.ms.0_4_1m93p1c.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180927_1ili2a8l27gjijhi22f3dc24d139j_640x900.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m93p1c.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            type: 2,
            title: "2018秋季新款韩版女套装双面呢外套高腰半身短裙裤子三件套",
            orgPrice: "￥98.58",
            cparam: null,
            props: ["2018秋季新款韩版女套装双面呢外套高腰半身短裙裤子三件套"],
            lefttop_taglist: [],
            sale: 0,
            price: "69.00",
            cfav: 0,
            leftbottom_taglist: [],
            shopId: 21949984,
            popularStar: 0
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m901la?acm=3.ms.2_1_1m901la.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_443337876_0_1_0-t_-c1_10057922_nil_nil_0_0_38_0-lc_32&cparam=MTUzODA1MTA2Nl8xZW53amZrX2EzZThmMDg4ZTM4YTBlNTc4NTk0M2I1MjFmMGVmNTAzXzMyXzBfNDQzMzM3ODc2XzBfMF8xXzBfOTgxXzBfMA==",
            iid: "1m901la",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/55cf19/180925_6bdiibf87e046d836dcjie5l40fk1_641x641.jpg_560x999.jpg",
              w: 560,
              h: 560
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m901la?acm=3.ms.2_1_1m901la.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_443337876_0_1_0-t_-c1_10057922_nil_nil_0_0_38_0-lc_32&cparam=MTUzODA1MTA2Nl8xZW53amZrX2EzZThmMDg4ZTM4YTBlNTc4NTk0M2I1MjFmMGVmNTAzXzMyXzBfNDQzMzM3ODc2XzBfMF8xXzBfOTgxXzBfMA==",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/55cf19/180925_6bdiibf87e046d836dcjie5l40fk1_641x641.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525",
            acm:
              "3.ms.2_1_1m901la.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_443337876_0_1_0-t_-c1_10057922_nil_nil_0_0_38_0-lc_32",
            type: 2,
            title:
              "加绒加厚裤子女秋冬2018新款学生韩版宽松显瘦休闲哈伦运动卫裤秋",
            orgPrice: "￥49.00",
            cparam:
              "MTUzODA1MTA2Nl8xZW53amZrX2EzZThmMDg4ZTM4YTBlNTc4NTk0M2I1MjFmMGVmNTAzXzMyXzBfNDQzMzM3ODc2XzBfMF8xXzBfOTgxXzBfMA==",
            props: [
              "加绒加厚裤子女秋冬2018新款学生韩版宽松显瘦休闲哈伦运动卫裤秋"
            ],
            lefttop_taglist: [],
            sale: "1",
            price: "49.00",
            cfav: "1",
            leftbottom_taglist: [
              "http://s2.mogucdn.com/p2/170307/1_53je1gbj88bjheidae4al1le4h94i_60x28.png"
            ],
            shopId: "1302414647",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m8xdiw?acm=3.ms.2_1_1m8xdiw.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_442803489_2041239_2_0-t_-c1_10057922_nil_nil_0_2041239_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZW45bXJlX2MzNmFmYzhkYWMyYTgwY2ExNDVkYjY2NWM3ZDI5NzQ1XzMyXzFfNDQyODAzNDg5XzBfMjA0MTIzOV8yXzBfMjE4XzBfMA==",
            iid: "1m8xdiw",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m8xdiw?acm=3.ms.2_1_1m8xdiw.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_442803489_2041239_2_0-t_-c1_10057922_nil_nil_0_2041239_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZW45bXJlX2MzNmFmYzhkYWMyYTgwY2ExNDVkYjY2NWM3ZDI5NzQ1XzMyXzFfNDQyODAzNDg5XzBfMjA0MTIzOV8yXzBfMjE4XzBfMA==",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm:
              "3.ms.2_1_1m8xdiw.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_442803489_2041239_2_0-t_-c1_10057922_nil_nil_0_2041239_30_0-lc_32",
            type: 2,
            title:
              "2018春秋新款韩版胖mm加肥加大码200斤刺绣字母打底衫宽松显瘦长袖t恤上衣",
            orgPrice: "￥46.86",
            cparam:
              "MTUzODA1MTA2Nl8xZW45bXJlX2MzNmFmYzhkYWMyYTgwY2ExNDVkYjY2NWM3ZDI5NzQ1XzMyXzFfNDQyODAzNDg5XzBfMjA0MTIzOV8yXzBfMjE4XzBfMA==",
            props: [
              "2018春秋新款韩版胖mm加肥加大码200斤刺绣字母打底衫宽松显瘦长袖t恤上衣"
            ],
            lefttop_taglist: [],
            sale: "0",
            price: "46.86",
            cfav: "3",
            leftbottom_taglist: [
              "http://s2.mogucdn.com/p2/170307/1_5k6k8eiffl43633479294a49f8gci_60x28.png"
            ],
            shopId: "1302415013",
            popularStar: null
          },
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m93oze?acm=3.ms.0_4_1m93oze.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            iid: "1m93oze",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180927_1d2hjj34e70ag88hkb7d5ej01ac87_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m93oze?acm=3.ms.0_4_1m93oze.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180927_1d2hjj34e70ag88hkb7d5ej01ac87_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525",
            acm: "3.ms.0_4_1m93oze.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            type: 2,
            title:
              "chic西装领雪纺衬衫女2018秋季新款韩版宽松长袖OL衬衣纯色打底衫上衣",
            orgPrice: "￥85.00",
            cparam: null,
            props: [
              "chic西装领雪纺衬衫女2018秋季新款韩版宽松长袖OL衬衣纯色打底衫上衣"
            ],
            lefttop_taglist: [],
            sale: 0,
            price: "85.00",
            cfav: 0,
            leftbottom_taglist: [],
            shopId: 21078961,
            popularStar: 0
          },
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m93oq0?acm=3.ms.0_4_1m93oq0.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            iid: "1m93oq0",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180927_86i346kf7iglgea1496g13901b81k_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m93oq0?acm=3.ms.0_4_1m93oq0.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180927_86i346kf7iglgea1496g13901b81k_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525",
            acm: "3.ms.0_4_1m93oq0.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            type: 2,
            title:
              "钱夫人CHINSTUDIO雪梨定制网红同款2018新款柔美英伦风格子呢料西装+半裙两件套装",
            orgPrice: "￥112.86",
            cparam: null,
            props: [
              "钱夫人CHINSTUDIO雪梨定制网红同款2018新款柔美英伦风格子呢料西装+半裙两件套装"
            ],
            lefttop_taglist: [],
            sale: 0,
            price: "112.86",
            cfav: 0,
            leftbottom_taglist: [],
            shopId: 1302406095,
            popularStar: 0
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m8x624?acm=3.ms.2_1_1m8x624.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_442704162_466665003_3_0-t_-c1_10057922_nil_nil_1_466665003_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZW41ZGg4XzllM2FiMDcyOWNlM2NhYjZiZjUzYzQ1OWYzMzdiZjQzXzMyXzJfNDQyNzA0MTYyXzBfMF8zXzBfNTM4XzBfMA==",
            iid: "1m8x624",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/55cf19/180923_2412gbkgfhk9dihc1d3aabb64hh1i_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m8x624?acm=3.ms.2_1_1m8x624.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_442704162_466665003_3_0-t_-c1_10057922_nil_nil_1_466665003_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZW41ZGg4XzllM2FiMDcyOWNlM2NhYjZiZjUzYzQ1OWYzMzdiZjQzXzMyXzJfNDQyNzA0MTYyXzBfMF8zXzBfNTM4XzBfMA==",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/55cf19/180923_2412gbkgfhk9dihc1d3aabb64hh1i_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525",
            acm:
              "3.ms.2_1_1m8x624.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_442704162_466665003_3_0-t_-c1_10057922_nil_nil_1_466665003_30_0-lc_32",
            type: 2,
            title:
              "带帽运动服2018秋冬新款韩版时尚加厚刺绣金丝绒女士宽松休闲连帽运动服卫衣两件套潮",
            orgPrice: "￥129.00",
            cparam:
              "MTUzODA1MTA2Nl8xZW41ZGg4XzllM2FiMDcyOWNlM2NhYjZiZjUzYzQ1OWYzMzdiZjQzXzMyXzJfNDQyNzA0MTYyXzBfMF8zXzBfNTM4XzBfMA==",
            props: [
              "带帽运动服2018秋冬新款韩版时尚加厚刺绣金丝绒女士宽松休闲连帽运动服卫衣两件套潮"
            ],
            lefttop_taglist: [],
            sale: "0",
            price: "129.00",
            cfav: "5",
            leftbottom_taglist: [],
            shopId: "1302408692",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m8vlly?acm=3.ms.2_1_1m8vlly.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_442859555_466493621_4_0-t_-c1_10057922_nil_nil_1_466493621_40_0-lc_32&cparam=MTUzODA1MTA2Nl8xZW5jMWE2X2NhZWNlMDMyMDdmMzBhMGQ3MTIyOWEzMmJhZGY4N2ZlXzMyXzNfNDQyODU5NTU1XzBfMF80XzBfODY1XzBfMA==",
            iid: "1m8vlly",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180922_05jafg8g5k7flkj35icg400b0l4k7_800x1200.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m8vlly?acm=3.ms.2_1_1m8vlly.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_442859555_466493621_4_0-t_-c1_10057922_nil_nil_1_466493621_40_0-lc_32&cparam=MTUzODA1MTA2Nl8xZW5jMWE2X2NhZWNlMDMyMDdmMzBhMGQ3MTIyOWEzMmJhZGY4N2ZlXzMyXzNfNDQyODU5NTU1XzBfMF80XzBfODY1XzBfMA==",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180922_05jafg8g5k7flkj35icg400b0l4k7_800x1200.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525",
            acm:
              "3.ms.2_1_1m8vlly.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_442859555_466493621_4_0-t_-c1_10057922_nil_nil_1_466493621_40_0-lc_32",
            type: 2,
            title: "2018秋新款飞鹰烫金印花字母纯棉潮牌情侣小脚裤男女同款",
            orgPrice: "￥225.72",
            cparam:
              "MTUzODA1MTA2Nl8xZW5jMWE2X2NhZWNlMDMyMDdmMzBhMGQ3MTIyOWEzMmJhZGY4N2ZlXzMyXzNfNDQyODU5NTU1XzBfMF80XzBfODY1XzBfMA==",
            props: ["2018秋新款飞鹰烫金印花字母纯棉潮牌情侣小脚裤男女同款"],
            lefttop_taglist: [],
            sale: "12",
            price: "158.00",
            cfav: "13",
            leftbottom_taglist: [],
            shopId: "1302414958",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m8ky96?acm=3.ms.2_1_1m8ky96.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_442327723_0_5_0-t_-c1_10057922_nil_nil_0_0_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZW1wOGp5X2EwMTQ5YmQyMmFjNjk0NmZlMWQ1NzQ4NDFkM2I0MDUzXzMyXzRfNDQyMzI3NzIzXzBfMF81XzBfNjMwXzBfMA==",
            iid: "1m8ky96",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180915_6d523b1i35c6873a212396j3c1652_800x800.jpg_560x999.jpg",
              w: 560,
              h: 560
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m8ky96?acm=3.ms.2_1_1m8ky96.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_442327723_0_5_0-t_-c1_10057922_nil_nil_0_0_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZW1wOGp5X2EwMTQ5YmQyMmFjNjk0NmZlMWQ1NzQ4NDFkM2I0MDUzXzMyXzRfNDQyMzI3NzIzXzBfMF81XzBfNjMwXzBfMA==",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180915_6d523b1i35c6873a212396j3c1652_800x800.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525",
            acm:
              "3.ms.2_1_1m8ky96.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_442327723_0_5_0-t_-c1_10057922_nil_nil_0_0_30_0-lc_32",
            type: 2,
            title:
              "【两件79元】半高领打底衫女2018新款秋冬白色加绒加厚紧身长袖t恤韩版ins超火的上衣",
            orgPrice: "￥49.00",
            cparam:
              "MTUzODA1MTA2Nl8xZW1wOGp5X2EwMTQ5YmQyMmFjNjk0NmZlMWQ1NzQ4NDFkM2I0MDUzXzMyXzRfNDQyMzI3NzIzXzBfMF81XzBfNjMwXzBfMA==",
            props: [
              "【两件79元】半高领打底衫女2018新款秋冬白色加绒加厚紧身长袖t恤韩版ins超火的上衣"
            ],
            lefttop_taglist: [],
            sale: "126",
            price: "49.00",
            cfav: "85",
            leftbottom_taglist: [],
            shopId: "1302423961",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m7oiw6?acm=3.ms.2_1_1m7oiw6.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_439765350_0_6_0-t_-c1_10057922_nil_nil_0_0_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZWpuZTl3XzFmNGI0NjZlMmQ5ZDIwOWRjYTFiOGQyYjE4NTMxMTI5XzMyXzVfNDM5NzY1MzUwXzBfMF82XzBfNTQ4XzBfMA==",
            iid: "1m7oiw6",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180826_5708i53lg6ifcgd7402ieg99ab77b_640x640.jpg_560x999.jpg",
              w: 560,
              h: 560
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m7oiw6?acm=3.ms.2_1_1m7oiw6.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_439765350_0_6_0-t_-c1_10057922_nil_nil_0_0_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZWpuZTl3XzFmNGI0NjZlMmQ5ZDIwOWRjYTFiOGQyYjE4NTMxMTI5XzMyXzVfNDM5NzY1MzUwXzBfMF82XzBfNTQ4XzBfMA==",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180826_5708i53lg6ifcgd7402ieg99ab77b_640x640.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525",
            acm:
              "3.ms.2_1_1m7oiw6.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_439765350_0_6_0-t_-c1_10057922_nil_nil_0_0_30_0-lc_32",
            type: 2,
            title:
              "裤子女阔腿裤春秋2018新款毛呢裤九分裤港味潮女裤甩腿裤女士裤子",
            orgPrice: "￥69.90",
            cparam:
              "MTUzODA1MTA2Nl8xZWpuZTl3XzFmNGI0NjZlMmQ5ZDIwOWRjYTFiOGQyYjE4NTMxMTI5XzMyXzVfNDM5NzY1MzUwXzBfMF82XzBfNTQ4XzBfMA==",
            props: [
              "裤子女阔腿裤春秋2018新款毛呢裤九分裤港味潮女裤甩腿裤女士裤子"
            ],
            lefttop_taglist: [],
            sale: "48",
            price: "69.90",
            cfav: "134",
            leftbottom_taglist: [],
            shopId: "21905564",
            popularStar: null
          },
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m93otu?acm=3.ms.0_4_1m93otu.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            iid: "1m93otu",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180927_8e5b40a26d7clkhii38lg61ba5dae_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m93otu?acm=3.ms.0_4_1m93otu.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180927_8e5b40a26d7clkhii38lg61ba5dae_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m93otu.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            type: 2,
            title:
              "2018秋装女新款韩版时尚套装休闲百搭高腰压褶直筒九分西裤柔软宽松暗扣连帽卫衣外套女两件套",
            orgPrice: "￥98.58",
            cparam: null,
            props: [
              "2018秋装女新款韩版时尚套装休闲百搭高腰压褶直筒九分西裤柔软宽松暗扣连帽卫衣外套女两件套"
            ],
            lefttop_taglist: [],
            sale: 0,
            price: "69.00",
            cfav: 0,
            leftbottom_taglist: [],
            shopId: 109683,
            popularStar: 0
          },
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m93o6q?acm=3.ms.0_4_1m93o6q.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            iid: "1m93o6q",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180927_748b82859e8ldfag218dkg2i4al24_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m93o6q?acm=3.ms.0_4_1m93o6q.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180927_748b82859e8ldfag218dkg2i4al24_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525",
            acm: "3.ms.0_4_1m93o6q.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            type: 2,
            title:
              "2018秋季新款韩版高腰宽松显瘦休闲花苞裤女学生半松紧腰阔腿九分裤百搭直筒裤女",
            orgPrice: "￥128.00",
            cparam: null,
            props: [
              "2018秋季新款韩版高腰宽松显瘦休闲花苞裤女学生半松紧腰阔腿九分裤百搭直筒裤女"
            ],
            lefttop_taglist: [],
            sale: 0,
            price: "89.60",
            cfav: 0,
            leftbottom_taglist: [],
            shopId: 20470810,
            popularStar: 0
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m7kotq?acm=3.ms.2_1_1m7kotq.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_443917449_1287231050_7_0-t_-c1_10057922_nil_nil_2_1287231050_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZW9sZHUyX2NkMzk1NDVjMDRiNjExZTljOTkyMGM5MTg2YTcxYjk0XzMyXzZfNDQzOTE3NDQ5XzBfMF83XzBfMTdfMF8w",
            iid: "1m7kotq",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/55cf19/180823_37d8bljigae1ab954d8idiie1gbb5_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m7kotq?acm=3.ms.2_1_1m7kotq.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_443917449_1287231050_7_0-t_-c1_10057922_nil_nil_2_1287231050_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZW9sZHUyX2NkMzk1NDVjMDRiNjExZTljOTkyMGM5MTg2YTcxYjk0XzMyXzZfNDQzOTE3NDQ5XzBfMF83XzBfMTdfMF8w",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/55cf19/180823_37d8bljigae1ab954d8idiie1gbb5_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm:
              "3.ms.2_1_1m7kotq.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_443917449_1287231050_7_0-t_-c1_10057922_nil_nil_2_1287231050_30_0-lc_32",
            type: 2,
            title:
              "2018春秋季港味初秋新款原宿BF风时尚印花长袖薄款T恤女装韩版宽松学生打底衫休闲上衣潮",
            orgPrice: "￥40.00",
            cparam:
              "MTUzODA1MTA2Nl8xZW9sZHUyX2NkMzk1NDVjMDRiNjExZTljOTkyMGM5MTg2YTcxYjk0XzMyXzZfNDQzOTE3NDQ5XzBfMF83XzBfMTdfMF8w",
            props: [
              "2018春秋季港味初秋新款原宿BF风时尚印花长袖薄款T恤女装韩版宽松学生打底衫休闲上衣潮"
            ],
            lefttop_taglist: [],
            sale: "63",
            price: "40.00",
            cfav: "87",
            leftbottom_taglist: [],
            shopId: "1302404510",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m7kote?acm=3.ms.2_1_1m7kote.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_443917446_460484122_8_0-t_-c1_10057922_nil_nil_1_460484122_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZW9sZHR3XzNmNWVjZGVkZWI3YmYyZjI1NDAwOGEyYTc4N2E3MGI0XzMyXzdfNDQzOTE3NDQ2XzBfMF84XzBfMTdfMF8w",
            iid: "1m7kote",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/55cf19/180823_4a2d46il93iefc3a4lh1lif21k895_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m7kote?acm=3.ms.2_1_1m7kote.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_443917446_460484122_8_0-t_-c1_10057922_nil_nil_1_460484122_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZW9sZHR3XzNmNWVjZGVkZWI3YmYyZjI1NDAwOGEyYTc4N2E3MGI0XzMyXzdfNDQzOTE3NDQ2XzBfMF84XzBfMTdfMF8w",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/55cf19/180823_4a2d46il93iefc3a4lh1lif21k895_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm:
              "3.ms.2_1_1m7kote.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_443917446_460484122_8_0-t_-c1_10057922_nil_nil_1_460484122_30_0-lc_32",
            type: 2,
            title:
              "春秋2018ins超火的新款韩版简约百搭宽松字母印花长袖T恤学生休闲体恤显瘦上衣潮",
            orgPrice: "￥40.00",
            cparam:
              "MTUzODA1MTA2Nl8xZW9sZHR3XzNmNWVjZGVkZWI3YmYyZjI1NDAwOGEyYTc4N2E3MGI0XzMyXzdfNDQzOTE3NDQ2XzBfMF84XzBfMTdfMF8w",
            props: [
              "春秋2018ins超火的新款韩版简约百搭宽松字母印花长袖T恤学生休闲体恤显瘦上衣潮"
            ],
            lefttop_taglist: [],
            sale: "120",
            price: "40.00",
            cfav: "320",
            leftbottom_taglist: [],
            shopId: "1302404510",
            popularStar: null
          },
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m93njg?acm=3.ms.0_4_1m93njg.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            iid: "1m93njg",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180927_29jf2f6e96i0lfk4gl2jgb0kc6746_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m93njg?acm=3.ms.0_4_1m93njg.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180927_29jf2f6e96i0lfk4gl2jgb0kc6746_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m93njg.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            type: 2,
            title:
              "2018春秋女时尚套装新款韩版假两件加绒卫衣外套女修身显瘦打底裤小脚铅笔裤女两件套潮",
            orgPrice: "￥98.58",
            cparam: null,
            props: [
              "2018春秋女时尚套装新款韩版假两件加绒卫衣外套女修身显瘦打底裤小脚铅笔裤女两件套潮"
            ],
            lefttop_taglist: [],
            sale: 0,
            price: "69.00",
            cfav: 0,
            leftbottom_taglist: [],
            shopId: 109683,
            popularStar: 0
          },
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m93n76?acm=3.ms.0_4_1m93n76.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            iid: "1m93n76",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180927_7209005h74iaa4ae70h2b1e16ji3d_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m93n76?acm=3.ms.0_4_1m93n76.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180927_7209005h74iaa4ae70h2b1e16ji3d_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m93n76.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            type: 2,
            title:
              "中长款格子防晒薄宽松港风长袖衬衣2018新款时尚秋季韩版chic开衫",
            orgPrice: "￥98.55",
            cparam: null,
            props: [
              "中长款格子防晒薄宽松港风长袖衬衣2018新款时尚秋季韩版chic开衫"
            ],
            lefttop_taglist: [],
            sale: 0,
            price: "68.98",
            cfav: 0,
            leftbottom_taglist: [],
            shopId: 1302445433,
            popularStar: 0
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m7kolu?acm=3.ms.2_1_1m7kolu.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_443917448_460483686_9_0-t_-c1_10057922_nil_nil_1_460483686_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZW9sZHUwX2NmY2UyMGE1NTgyMzgzZmQ1NWRkZTg4MmVlYmQ2OWVkXzMyXzhfNDQzOTE3NDQ4XzBfMF85XzBfMTdfMF8w",
            iid: "1m7kolu",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/55cf19/180823_3hfk99b1f8gchefe8b64ia2gcji0l_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m7kolu?acm=3.ms.2_1_1m7kolu.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_443917448_460483686_9_0-t_-c1_10057922_nil_nil_1_460483686_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZW9sZHUwX2NmY2UyMGE1NTgyMzgzZmQ1NWRkZTg4MmVlYmQ2OWVkXzMyXzhfNDQzOTE3NDQ4XzBfMF85XzBfMTdfMF8w",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/55cf19/180823_3hfk99b1f8gchefe8b64ia2gcji0l_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm:
              "3.ms.2_1_1m7kolu.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_443917448_460483686_9_0-t_-c1_10057922_nil_nil_1_460483686_30_0-lc_32",
            type: 2,
            title:
              "2018长袖t恤春秋季新款韩版怪味少女学生宽松显瘦嘻哈ins超火女生酷酷的上衣服潮",
            orgPrice: "￥40.00",
            cparam:
              "MTUzODA1MTA2Nl8xZW9sZHUwX2NmY2UyMGE1NTgyMzgzZmQ1NWRkZTg4MmVlYmQ2OWVkXzMyXzhfNDQzOTE3NDQ4XzBfMF85XzBfMTdfMF8w",
            props: [
              "2018长袖t恤春秋季新款韩版怪味少女学生宽松显瘦嘻哈ins超火女生酷酷的上衣服潮"
            ],
            lefttop_taglist: [],
            sale: "18",
            price: "40.00",
            cfav: "70",
            leftbottom_taglist: [],
            shopId: "1302404510",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m7kooo?acm=3.ms.2_1_1m7kooo.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_443917447_1287230656_10_0-t_-c1_10057922_nil_nil_2_1287230656_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZW9sZHR5XzJkZDQxNTgyZWIwZGY2ZTBhM2RjM2FlNzg1YjBiNTUwXzMyXzlfNDQzOTE3NDQ3XzBfMF8xMF8wXzE3XzBfMA==",
            iid: "1m7kooo",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/55cf19/180823_6heb71e8ah758dc7llcf55lk47iac_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m7kooo?acm=3.ms.2_1_1m7kooo.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_443917447_1287230656_10_0-t_-c1_10057922_nil_nil_2_1287230656_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZW9sZHR5XzJkZDQxNTgyZWIwZGY2ZTBhM2RjM2FlNzg1YjBiNTUwXzMyXzlfNDQzOTE3NDQ3XzBfMF8xMF8wXzE3XzBfMA==",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/55cf19/180823_6heb71e8ah758dc7llcf55lk47iac_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm:
              "3.ms.2_1_1m7kooo.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_443917447_1287230656_10_0-t_-c1_10057922_nil_nil_2_1287230656_30_0-lc_32",
            type: 2,
            title:
              "2018新款秋装女装上衣服原宿风百搭时尚胖妹妹姐妹装体恤衫韩版女学生闺蜜装大码简约印花t恤",
            orgPrice: "￥40.00",
            cparam:
              "MTUzODA1MTA2Nl8xZW9sZHR5XzJkZDQxNTgyZWIwZGY2ZTBhM2RjM2FlNzg1YjBiNTUwXzMyXzlfNDQzOTE3NDQ3XzBfMF8xMF8wXzE3XzBfMA==",
            props: [
              "2018新款秋装女装上衣服原宿风百搭时尚胖妹妹姐妹装体恤衫韩版女学生闺蜜装大码简约印花t恤"
            ],
            lefttop_taglist: [],
            sale: "59",
            price: "40.00",
            cfav: "94",
            leftbottom_taglist: [],
            shopId: "1302404510",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m7fees?acm=3.ms.2_1_1m7fees.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_428165472_2027707_11_0-t_-c1_10057922_nil_nil_0_2027707_39_0-lc_32&cparam=MTUzODA1MTA2Nl8xZTV1NTg4X2E3YzQ2OTMzMTcyYTk4YThhNmUxYjU0ZGE4Y2Q0YmJmXzMyXzEwXzQyODE2NTQ3Ml8wXzIwMjc3MDdfMTFfMF8xODBfMF8w",
            iid: "1m7fees",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/17f85e/180819_2e7186b979b54ldcffee9lg20fe90_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m7fees?acm=3.ms.2_1_1m7fees.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_428165472_2027707_11_0-t_-c1_10057922_nil_nil_0_2027707_39_0-lc_32&cparam=MTUzODA1MTA2Nl8xZTV1NTg4X2E3YzQ2OTMzMTcyYTk4YThhNmUxYjU0ZGE4Y2Q0YmJmXzMyXzEwXzQyODE2NTQ3Ml8wXzIwMjc3MDdfMTFfMF8xODBfMF8w",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/17f85e/180819_2e7186b979b54ldcffee9lg20fe90_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm:
              "3.ms.2_1_1m7fees.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_428165472_2027707_11_0-t_-c1_10057922_nil_nil_0_2027707_39_0-lc_32",
            type: 2,
            title:
              "2018新品女三件套休闲运动套装大码长袖时尚潮新款秋季卫衣三件套连帽运动服针织撞色套装",
            orgPrice: "￥189.00",
            cparam:
              "MTUzODA1MTA2Nl8xZTV1NTg4X2E3YzQ2OTMzMTcyYTk4YThhNmUxYjU0ZGE4Y2Q0YmJmXzMyXzEwXzQyODE2NTQ3Ml8wXzIwMjc3MDdfMTFfMF8xODBfMF8w",
            props: [
              "2018新品女三件套休闲运动套装大码长袖时尚潮新款秋季卫衣三件套连帽运动服针织撞色套装"
            ],
            lefttop_taglist: [],
            sale: "218",
            price: "132.00",
            cfav: "318",
            leftbottom_taglist: [],
            shopId: "20542751",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m7dvsq?acm=3.ms.2_1_1m7dvsq.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_438963142_459649297_12_0-t_-c1_10057922_nil_nil_1_459649297_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZWlwMGFzX2QwZTc5ODU3NThmMGQ5NTc3ZTdhYzliOWI2NDYxMzIxXzMyXzExXzQzODk2MzE0Ml8wXzBfMTJfMF8yNTNfMF8w",
            iid: "1m7dvsq",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180818_8fid15g78c3i80854aa6j855hbbcj_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m7dvsq?acm=3.ms.2_1_1m7dvsq.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_438963142_459649297_12_0-t_-c1_10057922_nil_nil_1_459649297_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZWlwMGFzX2QwZTc5ODU3NThmMGQ5NTc3ZTdhYzliOWI2NDYxMzIxXzMyXzExXzQzODk2MzE0Ml8wXzBfMTJfMF8yNTNfMF8w",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180818_8fid15g78c3i80854aa6j855hbbcj_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 352 351",
            acm:
              "3.ms.2_1_1m7dvsq.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_438963142_459649297_12_0-t_-c1_10057922_nil_nil_1_459649297_30_0-lc_32",
            type: 2,
            title:
              "2018春秋冬白色体恤女长袖宽松t恤女打底衫韩版新款圆领纯棉百搭上衣",
            orgPrice: "￥55.72",
            cparam:
              "MTUzODA1MTA2Nl8xZWlwMGFzX2QwZTc5ODU3NThmMGQ5NTc3ZTdhYzliOWI2NDYxMzIxXzMyXzExXzQzODk2MzE0Ml8wXzBfMTJfMF8yNTNfMF8w",
            props: [
              "2018春秋冬白色体恤女长袖宽松t恤女打底衫韩版新款圆领纯棉百搭上衣"
            ],
            lefttop_taglist: [],
            sale: "80",
            price: "39.00",
            cfav: "126",
            leftbottom_taglist: [],
            shopId: "22051955",
            popularStar: null
          },
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m93ndc?acm=3.ms.0_4_1m93ndc.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            iid: "1m93ndc",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180927_07hig25jkkb8if6ai0975gj7dfgla_640x900.jpg_560x999.jpg",
              w: 560,
              h: 788
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m93ndc?acm=3.ms.0_4_1m93ndc.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180927_07hig25jkkb8if6ai0975gj7dfgla_640x900.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m93ndc.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            type: 2,
            title:
              "2018秋季新款韩版复古压褶雪纺长袖初恋连衣裙套装学院风宽松v领毛衣背心马甲女两件套",
            orgPrice: "￥112.86",
            cparam: null,
            props: [
              "2018秋季新款韩版复古压褶雪纺长袖初恋连衣裙套装学院风宽松v领毛衣背心马甲女两件套"
            ],
            lefttop_taglist: [],
            sale: 0,
            price: "79.00",
            cfav: 1,
            leftbottom_taglist: [],
            shopId: 21949984,
            popularStar: 0
          },
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m93n0w?acm=3.ms.0_4_1m93n0w.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            iid: "1m93n0w",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180927_5g61a0balb97921b4j0l0al0c7012_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m93n0w?acm=3.ms.0_4_1m93n0w.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180927_5g61a0balb97921b4j0l0al0c7012_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m93n0w.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            type: 2,
            title:
              "2018秋季新款韩版中长款chic宽松连帽卫衣裙女高腰显瘦气质过膝长袖套头连衣裙",
            orgPrice: "￥128.43",
            cparam: null,
            props: [
              "2018秋季新款韩版中长款chic宽松连帽卫衣裙女高腰显瘦气质过膝长袖套头连衣裙"
            ],
            lefttop_taglist: [],
            sale: 0,
            price: "128.43",
            cfav: 0,
            leftbottom_taglist: [],
            shopId: 102691,
            popularStar: 0
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m7bpya?acm=3.ms.2_1_1m7bpya.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_427089623_1284714262_13_0-t_-c1_10057922_nil_nil_2_1284714262_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZTRrMHl1X2EzZjRhYjlmZmUzZmE3YmU1OTU1ZTc4NmY0MGU3YzUyXzMyXzEyXzQyNzA4OTYyM18wXzBfMTNfMF8xODBfMF8w",
            iid: "1m7bpya",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180816_7ecl9a0fe90j0kh30kff8c5j2jli4_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m7bpya?acm=3.ms.2_1_1m7bpya.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_427089623_1284714262_13_0-t_-c1_10057922_nil_nil_2_1284714262_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZTRrMHl1X2EzZjRhYjlmZmUzZmE3YmU1OTU1ZTc4NmY0MGU3YzUyXzMyXzEyXzQyNzA4OTYyM18wXzBfMTNfMF8xODBfMF8w",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180816_7ecl9a0fe90j0kh30kff8c5j2jli4_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1655 1318",
            acm:
              "3.ms.2_1_1m7bpya.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_427089623_1284714262_13_0-t_-c1_10057922_nil_nil_2_1284714262_30_0-lc_32",
            type: 2,
            title:
              "2018秋装新品女士运动套装立领休闲长袖长裤运动套装新款韩时尚大码女装两件套",
            orgPrice: "￥169.00",
            cparam:
              "MTUzODA1MTA2Nl8xZTRrMHl1X2EzZjRhYjlmZmUzZmE3YmU1OTU1ZTc4NmY0MGU3YzUyXzMyXzEyXzQyNzA4OTYyM18wXzBfMTNfMF8xODBfMF8w",
            props: [
              "2018秋装新品女士运动套装立领休闲长袖长裤运动套装新款韩时尚大码女装两件套"
            ],
            lefttop_taglist: [],
            sale: "86",
            price: "118.00",
            cfav: "183",
            leftbottom_taglist: [],
            shopId: "20542751",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m72u06?acm=3.ms.2_1_1m72u06.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_424663558_2024171_14_0-t_-c1_10057922_nil_nil_0_2024171_31_0-lc_32&cparam=MTUzODA1MTA2Nl8xZTFvMTFnXzY4OTgyOTkwYTdjNWE4ZWMwNjM5NzYyNThhNjhhZWFjXzMyXzEzXzQyNDY2MzU1OF8wXzIwMjQxNzFfMTRfMF8xODBfMF8w",
            iid: "1m72u06",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/17f85e/180809_5j80h89h596d1f2fi40hk9jh8c30e_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m72u06?acm=3.ms.2_1_1m72u06.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_424663558_2024171_14_0-t_-c1_10057922_nil_nil_0_2024171_31_0-lc_32&cparam=MTUzODA1MTA2Nl8xZTFvMTFnXzY4OTgyOTkwYTdjNWE4ZWMwNjM5NzYyNThhNjhhZWFjXzMyXzEzXzQyNDY2MzU1OF8wXzIwMjQxNzFfMTRfMF8xODBfMF8w",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/17f85e/180809_5j80h89h596d1f2fi40hk9jh8c30e_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm:
              "3.ms.2_1_1m72u06.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_424663558_2024171_14_0-t_-c1_10057922_nil_nil_0_2024171_31_0-lc_32",
            type: 2,
            title:
              "2018新品女士三件套休闲运动套装女大码长袖时尚潮新款秋季卫衣三件套大码显瘦运动服针织套装",
            orgPrice: "￥198.00",
            cparam:
              "MTUzODA1MTA2Nl8xZTFvMTFnXzY4OTgyOTkwYTdjNWE4ZWMwNjM5NzYyNThhNjhhZWFjXzMyXzEzXzQyNDY2MzU1OF8wXzIwMjQxNzFfMTRfMF8xODBfMF8w",
            props: [
              "2018新品女士三件套休闲运动套装女大码长袖时尚潮新款秋季卫衣三件套大码显瘦运动服针织套装"
            ],
            lefttop_taglist: [],
            sale: "97",
            price: "138.00",
            cfav: "139",
            leftbottom_taglist: [],
            shopId: "20542751",
            popularStar: null
          },
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m93mo0?acm=3.ms.0_4_1m93mo0.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            iid: "1m93mo0",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180927_155hh1c7d3c7jfd29cf62hl64idke_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m93mo0?acm=3.ms.0_4_1m93mo0.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180927_155hh1c7d3c7jfd29cf62hl64idke_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m93mo0.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            type: 2,
            title:
              "2018秋冬装韩版新款纯色气质减龄系带领学生长袖宽松显瘦百搭中长款开叉连衣裙女",
            orgPrice: "￥155.72",
            cparam: null,
            props: [
              "2018秋冬装韩版新款纯色气质减龄系带领学生长袖宽松显瘦百搭中长款开叉连衣裙女"
            ],
            lefttop_taglist: [],
            sale: 0,
            price: "109.00",
            cfav: 0,
            leftbottom_taglist: [],
            shopId: 1302420841,
            popularStar: 0
          },
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m93mmu?acm=3.ms.0_4_1m93mmu.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            iid: "1m93mmu",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180927_0l4448a5f7l7hcbb7dg8l82kl7af2_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m93mmu?acm=3.ms.0_4_1m93mmu.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180927_0l4448a5f7l7hcbb7dg8l82kl7af2_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525",
            acm: "3.ms.0_4_1m93mmu.0.13386-69004.s026vr4QNwSkg.t_-sd_117-lc_16",
            type: 2,
            title:
              "韩版女装心机V领漏锁骨白衬衫女宽松蝙蝠袖衬衣2018秋装新款上衣",
            orgPrice: "￥71.25",
            cparam: null,
            props: [
              "韩版女装心机V领漏锁骨白衬衫女宽松蝙蝠袖衬衣2018秋装新款上衣"
            ],
            lefttop_taglist: [],
            sale: 0,
            price: "71.25",
            cfav: 0,
            leftbottom_taglist: [],
            shopId: 21393566,
            popularStar: 0
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m72f6m?acm=3.ms.2_1_1m72f6m.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_438772165_458168242_15_0-t_-c1_10057922_nil_nil_1_458168242_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZWlndGt5X2ZhNTQxZmRlMWYzNWQyYzc3NDdmMTU0MjFmMzRjZTBhXzMyXzE0XzQzODc3MjE2NV8wXzBfMTVfMF8xODVfMF8w",
            iid: "1m72f6m",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/55cf19/180809_84ae1lkjf1i4a9003llck204abk41_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m72f6m?acm=3.ms.2_1_1m72f6m.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_438772165_458168242_15_0-t_-c1_10057922_nil_nil_1_458168242_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZWlndGt5X2ZhNTQxZmRlMWYzNWQyYzc3NDdmMTU0MjFmMzRjZTBhXzMyXzE0XzQzODc3MjE2NV8wXzBfMTVfMF8xODVfMF8w",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/55cf19/180809_84ae1lkjf1i4a9003llck204abk41_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525",
            acm:
              "3.ms.2_1_1m72f6m.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_438772165_458168242_15_0-t_-c1_10057922_nil_nil_1_458168242_30_0-lc_32",
            type: 2,
            title: "2018新款秋装白色长袖t恤女宽松韩版学生体恤百搭长袖上衣服",
            orgPrice: "￥57.00",
            cparam:
              "MTUzODA1MTA2Nl8xZWlndGt5X2ZhNTQxZmRlMWYzNWQyYzc3NDdmMTU0MjFmMzRjZTBhXzMyXzE0XzQzODc3MjE2NV8wXzBfMTVfMF8xODVfMF8w",
            props: ["2018新款秋装白色长袖t恤女宽松韩版学生体恤百搭长袖上衣服"],
            lefttop_taglist: [],
            sale: "32",
            price: "39.90",
            cfav: "42",
            leftbottom_taglist: [],
            shopId: "20646861",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m4xiic?acm=3.ms.2_1_1m4xiic.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_429458579_2037563_16_0-t_-c1_10057922_nil_nil_0_2037563_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZTdka3JpXzNjODUzYTRjNzg5ODA2OGVmNGYyNGJiNzU4Y2I4MmFlXzMyXzE1XzQyOTQ1ODU3OV8wXzIwMzc1NjNfMTZfMF84MjlfMF8w",
            iid: "1m4xiic",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/17f85e/180914_6c0c8i05ff9ig0b3h4c1e40jd422d_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m4xiic?acm=3.ms.2_1_1m4xiic.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_429458579_2037563_16_0-t_-c1_10057922_nil_nil_0_2037563_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZTdka3JpXzNjODUzYTRjNzg5ODA2OGVmNGYyNGJiNzU4Y2I4MmFlXzMyXzE1XzQyOTQ1ODU3OV8wXzIwMzc1NjNfMTZfMF84MjlfMF8w",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/17f85e/180914_6c0c8i05ff9ig0b3h4c1e40jd422d_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 352 1990 82 61 351",
            acm:
              "3.ms.2_1_1m4xiic.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_429458579_2037563_16_0-t_-c1_10057922_nil_nil_0_2037563_30_0-lc_32",
            type: 2,
            title:
              "【仲陌美】2018春秋季新款原宿风长袖T恤女bf潮学生韩版拼接白色复古港味宽松百搭上衣打底",
            orgPrice: "￥69.00",
            cparam:
              "MTUzODA1MTA2Nl8xZTdka3JpXzNjODUzYTRjNzg5ODA2OGVmNGYyNGJiNzU4Y2I4MmFlXzMyXzE1XzQyOTQ1ODU3OV8wXzIwMzc1NjNfMTZfMF84MjlfMF8w",
            props: [
              "【仲陌美】2018春秋季新款原宿风长袖T恤女bf潮学生韩版拼接白色复古港味宽松百搭上衣打底"
            ],
            lefttop_taglist: [],
            sale: "1577",
            price: "38.50",
            cfav: "2489",
            leftbottom_taglist: [],
            shopId: "20261545",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m4tdhy?acm=3.ms.2_1_1m4tdhy.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_415780334_1257105158_17_0-t_-c1_10057922_nil_nil_2_1257105158_42_0-lc_32&cparam=MTUzODA1MTA2Nl8xZHIzOGQwX2JhNTUxODYxMjU5ZDU5OGMwYWVlNTU1Zjk0YzAyMzQ4XzMyXzE2XzQxNTc4MDMzNF8wXzBfMTdfMF83NDRfMF8w",
            iid: "1m4tdhy",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180624_4afhg8gg9743k8h5lab2jifficd3e_640x960.png_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m4tdhy?acm=3.ms.2_1_1m4tdhy.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_415780334_1257105158_17_0-t_-c1_10057922_nil_nil_2_1257105158_42_0-lc_32&cparam=MTUzODA1MTA2Nl8xZHIzOGQwX2JhNTUxODYxMjU5ZDU5OGMwYWVlNTU1Zjk0YzAyMzQ4XzMyXzE2XzQxNTc4MDMzNF8wXzBfMTdfMF83NDRfMF8w",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180624_4afhg8gg9743k8h5lab2jifficd3e_640x960.png_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525",
            acm:
              "3.ms.2_1_1m4tdhy.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_415780334_1257105158_17_0-t_-c1_10057922_nil_nil_2_1257105158_42_0-lc_32",
            type: 2,
            title:
              "杨幂明星同款2018新款白色ins超火短袖t恤女字母宽松纯棉百搭上衣",
            orgPrice: "￥54.00",
            cparam:
              "MTUzODA1MTA2Nl8xZHIzOGQwX2JhNTUxODYxMjU5ZDU5OGMwYWVlNTU1Zjk0YzAyMzQ4XzMyXzE2XzQxNTc4MDMzNF8wXzBfMTdfMF83NDRfMF8w",
            props: [
              "杨幂明星同款2018新款白色ins超火短袖t恤女字母宽松纯棉百搭上衣"
            ],
            lefttop_taglist: [],
            sale: "1557",
            price: "37.00",
            cfav: "1561",
            leftbottom_taglist: [],
            shopId: "1302442895",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m4s06m?acm=3.ms.2_1_1m4s06m.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_403400708_448293013_18_0-t_-c1_10057922_nil_nil_1_448293013_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZGNjazAwX2Q2MjI2OTVlNDRlZWRmNzEyMTYxMDkzYzM3YzZiOWFiXzMyXzE3XzQwMzQwMDcwOF8wXzBfMThfMF83ODZfMF8w",
            iid: "1m4s06m",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180623_1l8jlga277egb5cih5ilkdge0kb61_800x1200.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m4s06m?acm=3.ms.2_1_1m4s06m.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_403400708_448293013_18_0-t_-c1_10057922_nil_nil_1_448293013_30_0-lc_32&cparam=MTUzODA1MTA2Nl8xZGNjazAwX2Q2MjI2OTVlNDRlZWRmNzEyMTYxMDkzYzM3YzZiOWFiXzMyXzE3XzQwMzQwMDcwOF8wXzBfMThfMF83ODZfMF8w",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180623_1l8jlga277egb5cih5ilkdge0kb61_800x1200.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 82",
            acm:
              "3.ms.2_1_1m4s06m.0.70871-69004.s026vr4QNwSkg.sd_117-c_2_32_403400708_448293013_18_0-t_-c1_10057922_nil_nil_1_448293013_30_0-lc_32",
            type: 2,
            title:
              "t恤女短袖2018新款夏学生宽松韩版ulzzang百搭条纹ins超火的上衣",
            orgPrice: "￥29.90",
            cparam:
              "MTUzODA1MTA2Nl8xZGNjazAwX2Q2MjI2OTVlNDRlZWRmNzEyMTYxMDkzYzM3YzZiOWFiXzMyXzE3XzQwMzQwMDcwOF8wXzBfMThfMF83ODZfMF8w",
            props: [
              "t恤女短袖2018新款夏学生宽松韩版ulzzang百搭条纹ins超火的上衣"
            ],
            lefttop_taglist: [],
            sale: "1654",
            price: "27.90",
            cfav: "3891",
            leftbottom_taglist: [],
            shopId: "20574163",
            popularStar: null
          }
        ],
        title: "美丽说wap首页",
        isEnd: false,
        ptpPartC: "_mb_mls_10057922_wap-index_noab-noab",
        cpc_offset: 0
      }
    });
  }
  if (type === "sell") {
    return mockRequest({
      url: "/post",
      method: "post",
      data: {
        filter: {
          title: "美丽说wap首页",
          list: [
            {
              fcid: "10057922",
              style: null,
              sort: "pop",
              title: "流行",
              type: "sort"
            },
            {
              fcid: "10057922",
              style: null,
              sort: "sell",
              title: "热销",
              type: "sort"
            },
            {
              fcid: "10057922",
              style: null,
              sort: "new",
              title: "上新",
              type: "sort"
            }
          ]
        },
        total: 41770,
        param: {
          eventId: 70003,
          cKey: "wap-index",
          fcid: "10057922",
          cpcEventId: 70005,
          section: "0",
          _mgjuuid: "0562860a-d8e2-4105-8c24-73894fd233d4",
          sort: "sell",
          page: "1",
          ptpWallDoc: "_wall_docs",
          ptpPartC: "_mb_mls_10057922_wap-index_noab-noab",
          cpc_offset: 0,
          ptpWallCpc: "_wall_cpc"
        },
        page: 1,
        sort: "sell",
        list: [
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m7s9c4?acm=3.ms.0_4_1m7s9c4.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            iid: "1m7s9c4",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180828_550k23i82cbibh32602fl43jc9aid_800x1200.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m7s9c4?acm=3.ms.0_4_1m7s9c4.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180828_550k23i82cbibh32602fl43jc9aid_800x1200.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m7s9c4.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            type: 2,
            title: "秋装女2018新款早秋女装裙子韩版针织连衣裙+衬衫上衣时尚套装",
            orgPrice: "￥127.00",
            cparam: null,
            props: [
              "秋装女2018新款早秋女装裙子韩版针织连衣裙+衬衫上衣时尚套装"
            ],
            lefttop_taglist: [],
            sale: 32070,
            price: "88.90",
            cfav: 179,
            leftbottom_taglist: [],
            shopId: 1302421618,
            popularStar: 0
          },
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m7jj7a?acm=3.ms.0_4_1m7jj7a.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            iid: "1m7jj7a",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180825_4figj590flej05g556d6ll8ka09a7_640x902.jpg_560x999.jpg",
              w: 560,
              h: 790
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m7jj7a?acm=3.ms.0_4_1m7jj7a.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180825_4figj590flej05g556d6ll8ka09a7_640x902.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m7jj7a.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            type: 2,
            title: "套装女春秋2018新款时尚复古气质个性连帽卫衣两件套",
            orgPrice: "￥211.43",
            cparam: null,
            props: ["套装女春秋2018新款时尚复古气质个性连帽卫衣两件套"],
            lefttop_taglist: [],
            sale: 28990,
            price: "148.00",
            cfav: 93,
            leftbottom_taglist: [],
            shopId: 1302421618,
            popularStar: 0
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1lyp2vg?acm=3.ms.2_1_1lyp2vg.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_440018617_1986848_1_0-t_-c1_10057922_nil_nil_0_1986848_30_0-lc_32&cparam=MTUzODA1MzM1M18xZWp5OTRhXzVhYTRiYTJhYjI3N2Y5YmQ3ZjRlM2Q2YWM0YWI2ZmUyXzMyXzBfNDQwMDE4NjE3XzBfMTk4Njg0OF8xXzBfNV8wXzA=",
            iid: "1lyp2vg",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/17f85e/180426_7k4fd5fj9kfe5a7g089b1e10ec8b9_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1lyp2vg?acm=3.ms.2_1_1lyp2vg.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_440018617_1986848_1_0-t_-c1_10057922_nil_nil_0_1986848_30_0-lc_32&cparam=MTUzODA1MzM1M18xZWp5OTRhXzVhYTRiYTJhYjI3N2Y5YmQ3ZjRlM2Q2YWM0YWI2ZmUyXzMyXzBfNDQwMDE4NjE3XzBfMTk4Njg0OF8xXzBfNV8wXzA=",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/17f85e/180426_7k4fd5fj9kfe5a7g089b1e10ec8b9_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 352 1497 1232 351",
            acm:
              "3.ms.2_1_1lyp2vg.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_440018617_1986848_1_0-t_-c1_10057922_nil_nil_0_1986848_30_0-lc_32",
            type: 2,
            title:
              "2018春夏季新款八色纯色浅色系时尚简约韩范纯棉学生休闲百搭基础款纯色圆领短袖上衣女T恤",
            orgPrice: "￥108.00",
            cparam:
              "MTUzODA1MzM1M18xZWp5OTRhXzVhYTRiYTJhYjI3N2Y5YmQ3ZjRlM2Q2YWM0YWI2ZmUyXzMyXzBfNDQwMDE4NjE3XzBfMTk4Njg0OF8xXzBfNV8wXzA=",
            props: [
              "2018春夏季新款八色纯色浅色系时尚简约韩范纯棉学生休闲百搭基础款纯色圆领短袖上衣女T恤"
            ],
            lefttop_taglist: [],
            sale: "10419",
            price: "39.00",
            cfav: "16705",
            leftbottom_taglist: [
              "http://s2.mogucdn.com/p2/170307/1_53je1gbj88bjheidae4al1le4h94i_60x28.png"
            ],
            shopId: "1302425481",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1lwwv82?acm=3.ms.2_1_1lwwv82.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_362829383_1168661847_2_0-t_-c1_10057922_nil_nil_2_1168661847_20_0-lc_32&cparam=MTUzODA1MzM1M18xYzAxZHhpXzc2NDlhYjlhYzcyZTAwOTk2NTI3NGQyYmRjYjg2N2NlXzMyXzFfMzYyODI5MzgzXzBfMF8yXzBfNTY1XzBfMA==",
            iid: "1lwwv82",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180519_48g85lbc1dje047k9h0h5bc38a0di_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1lwwv82?acm=3.ms.2_1_1lwwv82.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_362829383_1168661847_2_0-t_-c1_10057922_nil_nil_2_1168661847_20_0-lc_32&cparam=MTUzODA1MzM1M18xYzAxZHhpXzc2NDlhYjlhYzcyZTAwOTk2NTI3NGQyYmRjYjg2N2NlXzMyXzFfMzYyODI5MzgzXzBfMF8yXzBfNTY1XzBfMA==",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180519_48g85lbc1dje047k9h0h5bc38a0di_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 352 1232 351",
            acm:
              "3.ms.2_1_1lwwv82.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_362829383_1168661847_2_0-t_-c1_10057922_nil_nil_2_1168661847_20_0-lc_32",
            type: 2,
            title:
              "2018新款女装春装简约衬衫女长袖雪纺上衣修身清新气质时尚大方个性百搭纯色韩范打底衬衣潮",
            orgPrice: "￥80.00",
            cparam:
              "MTUzODA1MzM1M18xYzAxZHhpXzc2NDlhYjlhYzcyZTAwOTk2NTI3NGQyYmRjYjg2N2NlXzMyXzFfMzYyODI5MzgzXzBfMF8yXzBfNTY1XzBfMA==",
            props: [
              "2018新款女装春装简约衬衫女长袖雪纺上衣修身清新气质时尚大方个性百搭纯色韩范打底衬衣潮"
            ],
            lefttop_taglist: [],
            sale: "2198",
            price: "56.00",
            cfav: "6337",
            leftbottom_taglist: [
              "http://s2.mogucdn.com/p2/170307/1_5k6k8eiffl43633479294a49f8gci_60x28.png"
            ],
            shopId: "108443",
            popularStar: null
          },
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m8k4ps?acm=3.ms.0_4_1m8k4ps.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            iid: "1m8k4ps",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180914_3aabiea9jgkj2a7hlgfie4011bljj_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m8k4ps?acm=3.ms.0_4_1m8k4ps.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180914_3aabiea9jgkj2a7hlgfie4011bljj_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m8k4ps.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            type: 2,
            title:
              "时尚套装两件套2018韩版网红社会宽松连帽卫衣+高腰显瘦开叉半身裙学院风休闲秋装女套装新款",
            orgPrice: "￥199.00",
            cparam: null,
            props: [
              "时尚套装两件套2018韩版网红社会宽松连帽卫衣+高腰显瘦开叉半身裙学院风休闲秋装女套装新款"
            ],
            lefttop_taglist: [],
            sale: 23765,
            price: "98.00",
            cfav: 276,
            leftbottom_taglist: [],
            shopId: 22533618,
            popularStar: 0
          },
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m8mrva?acm=3.ms.0_4_1m8mrva.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            iid: "1m8mrva",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180916_3ekh0ge37aachk6hkhade7bjgg2ll_693x694.jpg_560x999.jpg",
              w: 560,
              h: 561
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m8mrva?acm=3.ms.0_4_1m8mrva.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180916_3ekh0ge37aachk6hkhade7bjgg2ll_693x694.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m8mrva.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            type: 2,
            title:
              "秋装女2018新款时尚套装两件套早秋韩版秋季小清新女装长袖时尚宽松衣服",
            orgPrice: "￥85.00",
            cparam: null,
            props: [
              "秋装女2018新款时尚套装两件套早秋韩版秋季小清新女装长袖时尚宽松衣服"
            ],
            lefttop_taglist: [],
            sale: 23326,
            price: "59.50",
            cfav: 28,
            leftbottom_taglist: [],
            shopId: 1302423963,
            popularStar: 0
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1ls0ylw?acm=3.ms.2_1_1ls0ylw.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_342629581_2036647_3_0-t_-c1_10057922_nil_nil_0_2036647_30_0-lc_32&cparam=MTUzODA1MzM1M18xYmJ6aGVhXzVhNDlhZGFlNTgzNWFlYzdhNWU3MGJmODgzMGJjMDEyXzMyXzJfMzQyNjI5NTgxXzBfMjAzNjY0N18zXzBfMzkyXzBfMA==",
            iid: "1ls0ylw",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/17f85e/180902_2cefh0g12jk4i71bg270843d39l8j_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1ls0ylw?acm=3.ms.2_1_1ls0ylw.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_342629581_2036647_3_0-t_-c1_10057922_nil_nil_0_2036647_30_0-lc_32&cparam=MTUzODA1MzM1M18xYmJ6aGVhXzVhNDlhZGFlNTgzNWFlYzdhNWU3MGJmODgzMGJjMDEyXzMyXzJfMzQyNjI5NTgxXzBfMjAzNjY0N18zXzBfMzkyXzBfMA==",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/17f85e/180902_2cefh0g12jk4i71bg270843d39l8j_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 61",
            acm:
              "3.ms.2_1_1ls0ylw.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_342629581_2036647_3_0-t_-c1_10057922_nil_nil_0_2036647_30_0-lc_32",
            type: 2,
            title:
              "哈伦裤女秋季2018新款韩版学生显瘦雪纺薄款休闲裤女宽松黑色西装西裤九分裤夏小脚萝卜烟管裤",
            orgPrice: "￥68.58",
            cparam:
              "MTUzODA1MzM1M18xYmJ6aGVhXzVhNDlhZGFlNTgzNWFlYzdhNWU3MGJmODgzMGJjMDEyXzMyXzJfMzQyNjI5NTgxXzBfMjAzNjY0N18zXzBfMzkyXzBfMA==",
            props: [
              "哈伦裤女秋季2018新款韩版学生显瘦雪纺薄款休闲裤女宽松黑色西装西裤九分裤夏小脚萝卜烟管裤"
            ],
            lefttop_taglist: [],
            sale: "2191",
            price: "48.00",
            cfav: "4040",
            leftbottom_taglist: [],
            shopId: "10163552",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1lzlrra?acm=3.ms.2_1_1lzlrra.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_369306035_1187460927_4_0-t_-c1_10057922_nil_nil_2_1187460927_20_0-lc_32&cparam=MTUzODA1MzM1M18xYzdyMHJpXzVhYTQ5OWY0ZWJjM2I2OTYwNDdhMDA4MGI1MjlkYTUwXzMyXzNfMzY5MzA2MDM1XzBfMF80XzBfNTY1XzBfMA==",
            iid: "1lzlrra",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180521_5ijdcl888016gfaag2id2e0g8l19j_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1lzlrra?acm=3.ms.2_1_1lzlrra.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_369306035_1187460927_4_0-t_-c1_10057922_nil_nil_2_1187460927_20_0-lc_32&cparam=MTUzODA1MzM1M18xYzdyMHJpXzVhYTQ5OWY0ZWJjM2I2OTYwNDdhMDA4MGI1MjlkYTUwXzMyXzNfMzY5MzA2MDM1XzBfMF80XzBfNTY1XzBfMA==",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180521_5ijdcl888016gfaag2id2e0g8l19j_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 1232",
            acm:
              "3.ms.2_1_1lzlrra.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_369306035_1187460927_4_0-t_-c1_10057922_nil_nil_2_1187460927_20_0-lc_32",
            type: 2,
            title:
              "2018春秋季韩版新款条纹外穿内搭上衣打底吊带百搭无袖T恤针织背心女",
            orgPrice: "￥41.43",
            cparam:
              "MTUzODA1MzM1M18xYzdyMHJpXzVhYTQ5OWY0ZWJjM2I2OTYwNDdhMDA4MGI1MjlkYTUwXzMyXzNfMzY5MzA2MDM1XzBfMF80XzBfNTY1XzBfMA==",
            props: [
              "2018春秋季韩版新款条纹外穿内搭上衣打底吊带百搭无袖T恤针织背心女"
            ],
            lefttop_taglist: [],
            sale: "2150",
            price: "29.00",
            cfav: "10947",
            leftbottom_taglist: [],
            shopId: "108443",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1ltc18m?acm=3.ms.2_1_1ltc18m.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_346348853_2037782_5_0-t_-c1_10057922_nil_nil_0_2037782_30_0-lc_32&cparam=MTUzODA1MzM1M18xYmdleDBpXzcxMGJjNGI3MTk1NmIxYTU0YzQ0OTNmMTQxNTczOGZiXzMyXzRfMzQ2MzQ4ODUzXzBfMjAzNzc4Ml81XzBfMzkyXzBfMA==",
            iid: "1ltc18m",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/17f85e/180902_1gd2jld5b1g6dfl57da4jdj07alac_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1ltc18m?acm=3.ms.2_1_1ltc18m.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_346348853_2037782_5_0-t_-c1_10057922_nil_nil_0_2037782_30_0-lc_32&cparam=MTUzODA1MzM1M18xYmdleDBpXzcxMGJjNGI3MTk1NmIxYTU0YzQ0OTNmMTQxNTczOGZiXzMyXzRfMzQ2MzQ4ODUzXzBfMjAzNzc4Ml81XzBfMzkyXzBfMA==",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/17f85e/180902_1gd2jld5b1g6dfl57da4jdj07alac_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 1907 61",
            acm:
              "3.ms.2_1_1ltc18m.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_346348853_2037782_5_0-t_-c1_10057922_nil_nil_0_2037782_30_0-lc_32",
            type: 2,
            title:
              "雪纺阔腿裤女夏2018新款裤子黑色韩版休闲裤女七分宽松直筒高腰秋冬秋季九分宽腿裤",
            orgPrice: "￥68.58",
            cparam:
              "MTUzODA1MzM1M18xYmdleDBpXzcxMGJjNGI3MTk1NmIxYTU0YzQ0OTNmMTQxNTczOGZiXzMyXzRfMzQ2MzQ4ODUzXzBfMjAzNzc4Ml81XzBfMzkyXzBfMA==",
            props: [
              "雪纺阔腿裤女夏2018新款裤子黑色韩版休闲裤女七分宽松直筒高腰秋冬秋季九分宽腿裤"
            ],
            lefttop_taglist: [],
            sale: "1984",
            price: "48.00",
            cfav: "5041",
            leftbottom_taglist: [],
            shopId: "10163552",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1lvf1qw?acm=3.ms.2_1_1lvf1qw.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_352660870_0_6_0-t_-c1_10057922_nil_nil_0_0_30_0-lc_32&cparam=MTUzODA1MzM1M18xYm54aHM0X2MyZTEzNDExYTUxMTY3ZWMyZGQ5ZWU5NzkwNzU3ZjgwXzMyXzVfMzUyNjYwODcwXzBfMF82XzBfOTA3XzBfMA==",
            iid: "1lvf1qw",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180423_54e410ebffkj73cah5e513584b5fb_800x800.jpg_560x999.jpg",
              w: 560,
              h: 560
            },
            link:
              "http://item.meilishuo.com/h5/detail/1lvf1qw?acm=3.ms.2_1_1lvf1qw.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_352660870_0_6_0-t_-c1_10057922_nil_nil_0_0_30_0-lc_32&cparam=MTUzODA1MzM1M18xYm54aHM0X2MyZTEzNDExYTUxMTY3ZWMyZGQ5ZWU5NzkwNzU3ZjgwXzMyXzVfMzUyNjYwODcwXzBfMF82XzBfOTA3XzBfMA==",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180423_54e410ebffkj73cah5e513584b5fb_800x800.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 1907",
            acm:
              "3.ms.2_1_1lvf1qw.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_352660870_0_6_0-t_-c1_10057922_nil_nil_0_0_30_0-lc_32",
            type: 2,
            title:
              "长袖/短袖T恤女2018新款棉质学生宽松韩版夏季可爱卡通猫咪印花纯色百搭打底衫上衣女潮",
            orgPrice: "￥52.00",
            cparam:
              "MTUzODA1MzM1M18xYm54aHM0X2MyZTEzNDExYTUxMTY3ZWMyZGQ5ZWU5NzkwNzU3ZjgwXzMyXzVfMzUyNjYwODcwXzBfMF82XzBfOTA3XzBfMA==",
            props: [
              "长袖/短袖T恤女2018新款棉质学生宽松韩版夏季可爱卡通猫咪印花纯色百搭打底衫上衣女潮"
            ],
            lefttop_taglist: [],
            sale: "1856",
            price: "52.00",
            cfav: "3658",
            leftbottom_taglist: [],
            shopId: "1302406937",
            popularStar: null
          },
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m8ogsc?acm=3.ms.0_4_1m8ogsc.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            iid: "1m8ogsc",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180917_24666f4kgi486191382ikh2lhc8cg_640x862.jpg_560x999.jpg",
              w: 560,
              h: 755
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m8ogsc?acm=3.ms.0_4_1m8ogsc.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180917_24666f4kgi486191382ikh2lhc8cg_640x862.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m8ogsc.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            type: 2,
            title:
              "网红同款实拍秋季女装2018新款女初恋复古中长款针织连衣裙半身裙时尚套装两件套",
            orgPrice: "￥369.00",
            cparam: null,
            props: [
              "网红同款实拍秋季女装2018新款女初恋复古中长款针织连衣裙半身裙时尚套装两件套"
            ],
            lefttop_taglist: [],
            sale: 21355,
            price: "119.00",
            cfav: 162,
            leftbottom_taglist: [],
            shopId: 20024660,
            popularStar: 0
          },
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m76l50?acm=3.ms.0_4_1m76l50.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            iid: "1m76l50",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180815_81dj3id2i70kfeh4eekd94k9ij0k4_640x913.jpg_560x999.jpg",
              w: 560,
              h: 799
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m76l50?acm=3.ms.0_4_1m76l50.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180815_81dj3id2i70kfeh4eekd94k9ij0k4_640x913.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m76l50.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            type: 2,
            title: "2018秋冬新款ins超火针织时尚两件套小香风套装女",
            orgPrice: "￥154.29",
            cparam: null,
            props: ["2018秋冬新款ins超火针织时尚两件套小香风套装女"],
            lefttop_taglist: [],
            sale: 20288,
            price: "108.00",
            cfav: 9,
            leftbottom_taglist: [],
            shopId: 1302421618,
            popularStar: 0
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m4s06m?acm=3.ms.2_1_1m4s06m.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_403400708_448293013_7_0-t_-c1_10057922_nil_nil_1_448293013_30_0-lc_32&cparam=MTUzODA1MzM1M18xZGNjazAwXzRmNjYxY2VlMzJlZmEzMzdiN2M3NDZjNmIzYTA5YmViXzMyXzZfNDAzNDAwNzA4XzBfMF83XzBfNzg2XzBfMA==",
            iid: "1m4s06m",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180623_1l8jlga277egb5cih5ilkdge0kb61_800x1200.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m4s06m?acm=3.ms.2_1_1m4s06m.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_403400708_448293013_7_0-t_-c1_10057922_nil_nil_1_448293013_30_0-lc_32&cparam=MTUzODA1MzM1M18xZGNjazAwXzRmNjYxY2VlMzJlZmEzMzdiN2M3NDZjNmIzYTA5YmViXzMyXzZfNDAzNDAwNzA4XzBfMF83XzBfNzg2XzBfMA==",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180623_1l8jlga277egb5cih5ilkdge0kb61_800x1200.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 82",
            acm:
              "3.ms.2_1_1m4s06m.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_403400708_448293013_7_0-t_-c1_10057922_nil_nil_1_448293013_30_0-lc_32",
            type: 2,
            title:
              "t恤女短袖2018新款夏学生宽松韩版ulzzang百搭条纹ins超火的上衣",
            orgPrice: "￥29.90",
            cparam:
              "MTUzODA1MzM1M18xZGNjazAwXzRmNjYxY2VlMzJlZmEzMzdiN2M3NDZjNmIzYTA5YmViXzMyXzZfNDAzNDAwNzA4XzBfMF83XzBfNzg2XzBfMA==",
            props: [
              "t恤女短袖2018新款夏学生宽松韩版ulzzang百搭条纹ins超火的上衣"
            ],
            lefttop_taglist: [],
            sale: "1654",
            price: "27.90",
            cfav: "3891",
            leftbottom_taglist: [],
            shopId: "20574163",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m4xiic?acm=3.ms.2_1_1m4xiic.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_429458579_2037562_8_0-t_-c1_10057922_nil_nil_0_2037562_30_0-lc_32&cparam=MTUzODA1MzM1M18xZTdka3JpX2ZhYjNhZGE1ZWQ3NTY2YzhjNjFjZWM5ODdkYmFjZjJlXzMyXzdfNDI5NDU4NTc5XzBfMjAzNzU2Ml84XzBfODI5XzBfMA==",
            iid: "1m4xiic",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/17f85e/180914_47c4ebdagd709k9lkg82829h8i911_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m4xiic?acm=3.ms.2_1_1m4xiic.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_429458579_2037562_8_0-t_-c1_10057922_nil_nil_0_2037562_30_0-lc_32&cparam=MTUzODA1MzM1M18xZTdka3JpX2ZhYjNhZGE1ZWQ3NTY2YzhjNjFjZWM5ODdkYmFjZjJlXzMyXzdfNDI5NDU4NTc5XzBfMjAzNzU2Ml84XzBfODI5XzBfMA==",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/17f85e/180914_47c4ebdagd709k9lkg82829h8i911_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 352 1990 82 61 351",
            acm:
              "3.ms.2_1_1m4xiic.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_429458579_2037562_8_0-t_-c1_10057922_nil_nil_0_2037562_30_0-lc_32",
            type: 2,
            title:
              "【仲陌美】2018春秋季新款原宿风长袖T恤女bf潮学生韩版拼接白色复古港味宽松百搭上衣打底",
            orgPrice: "￥69.00",
            cparam:
              "MTUzODA1MzM1M18xZTdka3JpX2ZhYjNhZGE1ZWQ3NTY2YzhjNjFjZWM5ODdkYmFjZjJlXzMyXzdfNDI5NDU4NTc5XzBfMjAzNzU2Ml84XzBfODI5XzBfMA==",
            props: [
              "【仲陌美】2018春秋季新款原宿风长袖T恤女bf潮学生韩版拼接白色复古港味宽松百搭上衣打底"
            ],
            lefttop_taglist: [],
            sale: "1577",
            price: "38.50",
            cfav: "2489",
            leftbottom_taglist: [],
            shopId: "20261545",
            popularStar: null
          },
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m6zb50?acm=3.ms.0_4_1m6zb50.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            iid: "1m6zb50",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180808_0312e2cd957g59610k88091621gf2_640x954.jpg_560x999.jpg",
              w: 560,
              h: 835
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m6zb50?acm=3.ms.0_4_1m6zb50.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180808_0312e2cd957g59610k88091621gf2_640x954.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m6zb50.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            type: 2,
            title:
              "网红同款2018秋季新款慵懒风空调衫针织开衫+针织半身裙时尚套装",
            orgPrice: "￥127.15",
            cparam: null,
            props: [
              "网红同款2018秋季新款慵懒风空调衫针织开衫+针织半身裙时尚套装"
            ],
            lefttop_taglist: [],
            sale: 20230,
            price: "89.00",
            cfav: 7,
            leftbottom_taglist: [],
            shopId: 1302421618,
            popularStar: 0
          },
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m8jzwo?acm=3.ms.0_4_1m8jzwo.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            iid: "1m8jzwo",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180914_4k0k14g1608gc04k3jh1c6jac47fi_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m8jzwo?acm=3.ms.0_4_1m8jzwo.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180914_4k0k14g1608gc04k3jh1c6jac47fi_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m8jzwo.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            type: 2,
            title:
              "chic港味秋装女套装新款2018韩版格子西装外套+显瘦高腰破洞小脚裤学院风时尚套装两件套",
            orgPrice: "￥78.58",
            cparam: null,
            props: [
              "chic港味秋装女套装新款2018韩版格子西装外套+显瘦高腰破洞小脚裤学院风时尚套装两件套"
            ],
            lefttop_taglist: [],
            sale: 19993,
            price: "55.00",
            cfav: 173,
            leftbottom_taglist: [],
            shopId: 22533618,
            popularStar: 0
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m4tdhy?acm=3.ms.2_1_1m4tdhy.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_415780334_448451129_9_0-t_-c1_10057922_nil_nil_1_448451129_42_0-lc_32&cparam=MTUzODA1MzM1M18xZHIzOGQwXzUwOGZhOTc5MWNiODhiZmZjYWY4NGNjZDVmODRlODBjXzMyXzhfNDE1NzgwMzM0XzBfMF85XzBfNzQ0XzBfMA==",
            iid: "1m4tdhy",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180624_6jb1g4kg6i1ab4i4g0echaia49i87_640x960.png_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m4tdhy?acm=3.ms.2_1_1m4tdhy.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_415780334_448451129_9_0-t_-c1_10057922_nil_nil_1_448451129_42_0-lc_32&cparam=MTUzODA1MzM1M18xZHIzOGQwXzUwOGZhOTc5MWNiODhiZmZjYWY4NGNjZDVmODRlODBjXzMyXzhfNDE1NzgwMzM0XzBfMF85XzBfNzQ0XzBfMA==",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180624_6jb1g4kg6i1ab4i4g0echaia49i87_640x960.png_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525",
            acm:
              "3.ms.2_1_1m4tdhy.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_415780334_448451129_9_0-t_-c1_10057922_nil_nil_1_448451129_42_0-lc_32",
            type: 2,
            title:
              "杨幂明星同款2018新款白色ins超火短袖t恤女字母宽松纯棉百搭上衣",
            orgPrice: "￥54.00",
            cparam:
              "MTUzODA1MzM1M18xZHIzOGQwXzUwOGZhOTc5MWNiODhiZmZjYWY4NGNjZDVmODRlODBjXzMyXzhfNDE1NzgwMzM0XzBfMF85XzBfNzQ0XzBfMA==",
            props: [
              "杨幂明星同款2018新款白色ins超火短袖t恤女字母宽松纯棉百搭上衣"
            ],
            lefttop_taglist: [],
            sale: "1557",
            price: "37.00",
            cfav: "1561",
            leftbottom_taglist: [],
            shopId: "1302442895",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m1camo?acm=3.ms.2_1_1m1camo.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_376755071_1212066415_10_0-t_-c1_10057922_nil_nil_2_1212066415_20_0-lc_32&cparam=MTUzODA1MzM1M18xY2dtYzZ1XzEzYmE1M2ZlMDk4OWNmNGNiYTIzMDFjZTI2N2FhZjhiXzMyXzlfMzc2NzU1MDcxXzBfMF8xMF8wXzU2NV8wXzA=",
            iid: "1m1camo",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180514_104a5k2f09808h371j8b3h299e870_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m1camo?acm=3.ms.2_1_1m1camo.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_376755071_1212066415_10_0-t_-c1_10057922_nil_nil_2_1212066415_20_0-lc_32&cparam=MTUzODA1MzM1M18xY2dtYzZ1XzEzYmE1M2ZlMDk4OWNmNGNiYTIzMDFjZTI2N2FhZjhiXzMyXzlfMzc2NzU1MDcxXzBfMF8xMF8wXzU2NV8wXzA=",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180514_104a5k2f09808h371j8b3h299e870_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 352 351",
            acm:
              "3.ms.2_1_1m1camo.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_376755071_1212066415_10_0-t_-c1_10057922_nil_nil_2_1212066415_20_0-lc_32",
            type: 2,
            title:
              "2018春秋季新款韩版原宿风闺蜜装圆领套头短袖t恤女中长款纯色百搭上衣宽松大码学生半袖体恤",
            orgPrice: "￥70.00",
            cparam:
              "MTUzODA1MzM1M18xY2dtYzZ1XzEzYmE1M2ZlMDk4OWNmNGNiYTIzMDFjZTI2N2FhZjhiXzMyXzlfMzc2NzU1MDcxXzBfMF8xMF8wXzU2NV8wXzA=",
            props: [
              "2018春秋季新款韩版原宿风闺蜜装圆领套头短袖t恤女中长款纯色百搭上衣宽松大码学生半袖体恤"
            ],
            lefttop_taglist: [],
            sale: "1532",
            price: "49.00",
            cfav: "3961",
            leftbottom_taglist: [],
            shopId: "108443",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1lrxzfw?acm=3.ms.2_1_1lrxzfw.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_355439477_1289053869_11_0-t_-c1_10057922_nil_nil_2_1289053869_30_0-lc_32&cparam=MTUzODA1MzM1M18xYnI4bHI2X2E4N2E5NWQyOGM4MzRkNzFjYzk1ZWYyMTYyNmM2ZDU2XzMyXzEwXzM1NTQzOTQ3N18wXzBfMTFfMF8xMDNfMF8w",
            iid: "1lrxzfw",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180827_0k3h9a83b45507i5aihi0a02ii752_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1lrxzfw?acm=3.ms.2_1_1lrxzfw.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_355439477_1289053869_11_0-t_-c1_10057922_nil_nil_2_1289053869_30_0-lc_32&cparam=MTUzODA1MzM1M18xYnI4bHI2X2E4N2E5NWQyOGM4MzRkNzFjYzk1ZWYyMTYyNmM2ZDU2XzMyXzEwXzM1NTQzOTQ3N18wXzBfMTFfMF8xMDNfMF8w",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180827_0k3h9a83b45507i5aihi0a02ii752_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 82",
            acm:
              "3.ms.2_1_1lrxzfw.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_355439477_1289053869_11_0-t_-c1_10057922_nil_nil_2_1289053869_30_0-lc_32",
            type: 2,
            title:
              "【两件59元】【 降价啦！】短袖t恤女2018夏装新款韩版潮宽松百搭学生休闲上衣",
            orgPrice: "￥56.00",
            cparam:
              "MTUzODA1MzM1M18xYnI4bHI2X2E4N2E5NWQyOGM4MzRkNzFjYzk1ZWYyMTYyNmM2ZDU2XzMyXzEwXzM1NTQzOTQ3N18wXzBfMTFfMF8xMDNfMF8w",
            props: [
              "【两件59元】【 降价啦！】短袖t恤女2018夏装新款韩版潮宽松百搭学生休闲上衣"
            ],
            lefttop_taglist: [],
            sale: "1323",
            price: "39.00",
            cfav: "7511",
            leftbottom_taglist: [],
            shopId: "1302412599",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m11u6e?acm=3.ms.2_1_1m11u6e.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_375932268_1208174026_12_0-t_-c1_10057922_nil_nil_2_1208174026_20_0-lc_32&cparam=MTUzODA1MzM1M18xY2ZuMmZrXzhjMzY5ZGZlOTVkMzZhMWM2MjU0OWQ2Yjg4YWIzY2M1XzMyXzExXzM3NTkzMjI2OF8wXzBfMTJfMF81NjVfMF8w",
            iid: "1m11u6e",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180512_3e1962h3haa801048j1gi21024031_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m11u6e?acm=3.ms.2_1_1m11u6e.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_375932268_1208174026_12_0-t_-c1_10057922_nil_nil_2_1208174026_20_0-lc_32&cparam=MTUzODA1MzM1M18xY2ZuMmZrXzhjMzY5ZGZlOTVkMzZhMWM2MjU0OWQ2Yjg4YWIzY2M1XzMyXzExXzM3NTkzMjI2OF8wXzBfMTJfMF81NjVfMF8w",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180512_3e1962h3haa801048j1gi21024031_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 352 351",
            acm:
              "3.ms.2_1_1m11u6e.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_375932268_1208174026_12_0-t_-c1_10057922_nil_nil_2_1208174026_20_0-lc_32",
            type: 2,
            title:
              "2018春秋季新款女装韩版宽松短袖t恤女chic半袖打底条纹体恤上衣",
            orgPrice: "￥50.00",
            cparam:
              "MTUzODA1MzM1M18xY2ZuMmZrXzhjMzY5ZGZlOTVkMzZhMWM2MjU0OWQ2Yjg4YWIzY2M1XzMyXzExXzM3NTkzMjI2OF8wXzBfMTJfMF81NjVfMF8w",
            props: [
              "2018春秋季新款女装韩版宽松短袖t恤女chic半袖打底条纹体恤上衣"
            ],
            lefttop_taglist: [],
            sale: "1323",
            price: "35.00",
            cfav: "1785",
            leftbottom_taglist: [],
            shopId: "108443",
            popularStar: null
          },
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m8loki?acm=3.ms.0_4_1m8loki.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            iid: "1m8loki",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180916_4di1ek7k3kha3klk02185678b025d_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m8loki?acm=3.ms.0_4_1m8loki.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180916_4di1ek7k3kha3klk02185678b025d_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m8loki.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            type: 2,
            title:
              "中长款长袖连衣裙秋装新款2018韩版休闲胖mm大码女装裙子女学生宽松松垮垮中长款卫衣裙外套",
            orgPrice: "￥168.00",
            cparam: null,
            props: [
              "中长款长袖连衣裙秋装新款2018韩版休闲胖mm大码女装裙子女学生宽松松垮垮中长款卫衣裙外套"
            ],
            lefttop_taglist: [],
            sale: 19045,
            price: "54.00",
            cfav: 156,
            leftbottom_taglist: [],
            shopId: 22533618,
            popularStar: 0
          },
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m76pms?acm=3.ms.0_4_1m76pms.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            iid: "1m76pms",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180815_7ff4fbk769cc2d1c2l494ie7j5jke_640x908.jpg_560x999.jpg",
              w: 560,
              h: 795
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m76pms?acm=3.ms.0_4_1m76pms.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180815_7ff4fbk769cc2d1c2l494ie7j5jke_640x908.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m76pms.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            type: 2,
            title: "2018秋新款韩版时尚简约系带显瘦条纹系带西服套装女",
            orgPrice: "￥154.29",
            cparam: null,
            props: ["2018秋新款韩版时尚简约系带显瘦条纹系带西服套装女"],
            lefttop_taglist: [],
            sale: 17587,
            price: "108.00",
            cfav: 22,
            leftbottom_taglist: [],
            shopId: 1302421618,
            popularStar: 0
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m4lame?acm=3.ms.2_1_1m4lame.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_405422112_447460394_13_0-t_-c1_10057922_nil_nil_1_447460394_20_0-lc_32&cparam=MTUzODA1MzM1M18xZGVyN2c4X2E4MjQ4NmJiYTdmYzhhMmNiOGYxNTNjYWFjZmZiNWQ3XzMyXzEyXzQwNTQyMjExMl8wXzBfMTNfMF83OThfMF8w",
            iid: "1m4lame",
            showLarge: {
              img:
                "http://s11.mogucdn.com/mlcdn/c45406/180621_00e5i2711h0de8lhe4568kkie9d90_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m4lame?acm=3.ms.2_1_1m4lame.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_405422112_447460394_13_0-t_-c1_10057922_nil_nil_1_447460394_20_0-lc_32&cparam=MTUzODA1MzM1M18xZGVyN2c4X2E4MjQ4NmJiYTdmYzhhMmNiOGYxNTNjYWFjZmZiNWQ3XzMyXzEyXzQwNTQyMjExMl8wXzBfMTNfMF83OThfMF8w",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180621_00e5i2711h0de8lhe4568kkie9d90_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525",
            acm:
              "3.ms.2_1_1m4lame.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_405422112_447460394_13_0-t_-c1_10057922_nil_nil_1_447460394_20_0-lc_32",
            type: 2,
            title:
              "送运费险短袖t恤女2018夏季新款女装韩版时尚气质百搭ulzzang学生百搭小心机纯色上衣",
            orgPrice: "￥57.00",
            cparam:
              "MTUzODA1MzM1M18xZGVyN2c4X2E4MjQ4NmJiYTdmYzhhMmNiOGYxNTNjYWFjZmZiNWQ3XzMyXzEyXzQwNTQyMjExMl8wXzBfMTNfMF83OThfMF8w",
            props: [
              "送运费险短袖t恤女2018夏季新款女装韩版时尚气质百搭ulzzang学生百搭小心机纯色上衣"
            ],
            lefttop_taglist: [],
            sale: "1300",
            price: "39.90",
            cfav: "2017",
            leftbottom_taglist: [],
            shopId: "110697",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m07mk2?acm=3.ms.2_1_1m07mk2.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_370792734_0_14_0-t_-c1_10057922_nil_nil_0_0_30_0-lc_32&cparam=MTUzODA1MzM1M18xYzlpcjF3X2M5M2RmYmQxNTU1YzIyMWMyZjA2YTAwY2YzYmIxMGY0XzMyXzEzXzM3MDc5MjczNF8wXzBfMTRfMF85NzFfMF8w",
            iid: "1m07mk2",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180821_044abj5e7h2icfgijb053661lle8f_800x800.jpg_560x999.jpg",
              w: 560,
              h: 560
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m07mk2?acm=3.ms.2_1_1m07mk2.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_370792734_0_14_0-t_-c1_10057922_nil_nil_0_0_30_0-lc_32&cparam=MTUzODA1MzM1M18xYzlpcjF3X2M5M2RmYmQxNTU1YzIyMWMyZjA2YTAwY2YzYmIxMGY0XzMyXzEzXzM3MDc5MjczNF8wXzBfMTRfMF85NzFfMF8w",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180821_044abj5e7h2icfgijb053661lle8f_800x800.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1907 82",
            acm:
              "3.ms.2_1_1m07mk2.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_370792734_0_14_0-t_-c1_10057922_nil_nil_0_0_30_0-lc_32",
            type: 2,
            title:
              "【时尚套装】2018秋款新款牛仔背带裙女夏吊带连衣裙搭配T恤新款小清新两件套女",
            orgPrice: "￥99.00",
            cparam:
              "MTUzODA1MzM1M18xYzlpcjF3X2M5M2RmYmQxNTU1YzIyMWMyZjA2YTAwY2YzYmIxMGY0XzMyXzEzXzM3MDc5MjczNF8wXzBfMTRfMF85NzFfMF8w",
            props: [
              "【时尚套装】2018秋款新款牛仔背带裙女夏吊带连衣裙搭配T恤新款小清新两件套女"
            ],
            lefttop_taglist: [],
            sale: "1136",
            price: "69.00",
            cfav: "2517",
            leftbottom_taglist: [],
            shopId: "1302420627",
            popularStar: null
          },
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m8ekkc?acm=3.ms.0_4_1m8ekkc.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            iid: "1m8ekkc",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180910_72kcibhh4i275l73ik681kbed19aj_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m8ekkc?acm=3.ms.0_4_1m8ekkc.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180910_72kcibhh4i275l73ik681kbed19aj_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "152",
            acm: "3.ms.0_4_1m8ekkc.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            type: 2,
            title:
              "秋季新款套装两件套秋装2018新款韩版chic泡泡袖衬衫上衣+高腰显瘦牛仔裤学院风时尚套装",
            orgPrice: "￥68.58",
            cparam: null,
            props: [
              "秋季新款套装两件套秋装2018新款韩版chic泡泡袖衬衫上衣+高腰显瘦牛仔裤学院风时尚套装"
            ],
            lefttop_taglist: [],
            sale: 17225,
            price: "48.00",
            cfav: 2,
            leftbottom_taglist: [],
            shopId: 1302422548,
            popularStar: 0
          },
          {
            itemType: 5,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m8o442?acm=3.ms.0_4_1m8o442.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            iid: "1m8o442",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/55cf19/180917_7e2fdc2d8131698jkg69c9586lkel_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m8o442?acm=3.ms.0_4_1m8o442.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/55cf19/180917_7e2fdc2d8131698jkg69c9586lkel_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "-1",
            acm: "3.ms.0_4_1m8o442.0.13385-69004.ni0a4r4QX83wE.t_-sd_117-lc_16",
            type: 2,
            title: "2018新款时尚百搭黑色宽松机车皮夹克+网纱半身裙套装两件套",
            orgPrice: "￥225.72",
            cparam: null,
            props: ["2018新款时尚百搭黑色宽松机车皮夹克+网纱半身裙套装两件套"],
            lefttop_taglist: [],
            sale: 16985,
            price: "158.00",
            cfav: 28,
            leftbottom_taglist: [],
            shopId: 1302421618,
            popularStar: 0
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1lwwv1g?acm=3.ms.2_1_1lwwv1g.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_405870610_1146666493_15_0-t_-c1_10057922_nil_nil_2_1146666493_20_0-lc_32&cparam=MTUzODA1MzM1M18xZGZhZmtzXzAzNGI5NGNlODAwMjJkZTM3YTU1ZDM3YmQ5NzQ0NzM2XzMyXzE0XzQwNTg3MDYxMF8wXzBfMTVfMF81NjVfMF8w",
            iid: "1lwwv1g",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180411_7ei8d3aabhkkg5b6312gh1ckak8f1_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1lwwv1g?acm=3.ms.2_1_1lwwv1g.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_405870610_1146666493_15_0-t_-c1_10057922_nil_nil_2_1146666493_20_0-lc_32&cparam=MTUzODA1MzM1M18xZGZhZmtzXzAzNGI5NGNlODAwMjJkZTM3YTU1ZDM3YmQ5NzQ0NzM2XzMyXzE0XzQwNTg3MDYxMF8wXzBfMTVfMF81NjVfMF8w",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180411_7ei8d3aabhkkg5b6312gh1ckak8f1_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 352 351",
            acm:
              "3.ms.2_1_1lwwv1g.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_405870610_1146666493_15_0-t_-c1_10057922_nil_nil_2_1146666493_20_0-lc_32",
            type: 2,
            title:
              "2018新款女装秋装简约衬衫女长袖雪纺上衣百搭纯色韩范打底衬衣女",
            orgPrice: "￥80.00",
            cparam:
              "MTUzODA1MzM1M18xZGZhZmtzXzAzNGI5NGNlODAwMjJkZTM3YTU1ZDM3YmQ5NzQ0NzM2XzMyXzE0XzQwNTg3MDYxMF8wXzBfMTVfMF81NjVfMF8w",
            props: [
              "2018新款女装秋装简约衬衫女长袖雪纺上衣百搭纯色韩范打底衬衣女"
            ],
            lefttop_taglist: [],
            sale: "958",
            price: "56.00",
            cfav: "3203",
            leftbottom_taglist: [],
            shopId: "108443",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m2dguq?acm=3.ms.2_1_1m2dguq.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_389451082_2000768_16_0-t_-c1_10057922_nil_nil_0_2000768_20_0-lc_32&cparam=MTUzODA1MzM1M18xY3Zxa3NzX2Q4MzQyM2JkYmYyYTI4Nzg3NzZiNTk3NmFlNmQyNDBkXzMyXzE1XzM4OTQ1MTA4Ml8wXzIwMDA3NjhfMTZfMF82OV8wXzA=",
            iid: "1m2dguq",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/17f85e/180529_3bfb1bf04i91k9iaaj78ck4k4k814_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m2dguq?acm=3.ms.2_1_1m2dguq.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_389451082_2000768_16_0-t_-c1_10057922_nil_nil_0_2000768_20_0-lc_32&cparam=MTUzODA1MzM1M18xY3Zxa3NzX2Q4MzQyM2JkYmYyYTI4Nzg3NzZiNTk3NmFlNmQyNDBkXzMyXzE1XzM4OTQ1MTA4Ml8wXzIwMDA3NjhfMTZfMF82OV8wXzA=",
            show: {
              img:
                "http://s11.mogucdn.com/mlcdn/17f85e/180529_3bfb1bf04i91k9iaaj78ck4k4k814_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "352 351",
            acm:
              "3.ms.2_1_1m2dguq.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_389451082_2000768_16_0-t_-c1_10057922_nil_nil_0_2000768_20_0-lc_32",
            type: 2,
            title:
              "雪纺阔腿裤女春夏高腰黑色韩版2018新款九分宽松显瘦度假沙滩裤裙",
            orgPrice: "￥70.00",
            cparam:
              "MTUzODA1MzM1M18xY3Zxa3NzX2Q4MzQyM2JkYmYyYTI4Nzg3NzZiNTk3NmFlNmQyNDBkXzMyXzE1XzM4OTQ1MTA4Ml8wXzIwMDA3NjhfMTZfMF82OV8wXzA=",
            props: [
              "雪纺阔腿裤女春夏高腰黑色韩版2018新款九分宽松显瘦度假沙滩裤裙"
            ],
            lefttop_taglist: [],
            sale: "814",
            price: "49.00",
            cfav: "1941",
            leftbottom_taglist: [],
            shopId: "281648",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1m4j83i?acm=3.ms.2_1_1m4j83i.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_405868839_1253530977_17_0-t_-c1_10057922_nil_nil_2_1253530977_20_0-lc_32&cparam=MTUzODA1MzM1M18xZGZhY3VlXzZmMjllMTEzZWU0N2IyMWEzMzVhYzg1NTA4MTljNDdhXzMyXzE2XzQwNTg2ODgzOV8wXzBfMTdfMF81NjVfMF8w",
            iid: "1m4j83i",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180620_19fk93bjc8adfg9h7ak978409kei9_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1m4j83i?acm=3.ms.2_1_1m4j83i.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_405868839_1253530977_17_0-t_-c1_10057922_nil_nil_2_1253530977_20_0-lc_32&cparam=MTUzODA1MzM1M18xZGZhY3VlXzZmMjllMTEzZWU0N2IyMWEzMzVhYzg1NTA4MTljNDdhXzMyXzE2XzQwNTg2ODgzOV8wXzBfMTdfMF81NjVfMF8w",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180620_19fk93bjc8adfg9h7ak978409kei9_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525",
            acm:
              "3.ms.2_1_1m4j83i.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_405868839_1253530977_17_0-t_-c1_10057922_nil_nil_2_1253530977_20_0-lc_32",
            type: 2,
            title: "2018夏装新款韩范v领交叉粉色短袖T恤女装纯色半截袖小心机上衣",
            orgPrice: "￥57.00",
            cparam:
              "MTUzODA1MzM1M18xZGZhY3VlXzZmMjllMTEzZWU0N2IyMWEzMzVhYzg1NTA4MTljNDdhXzMyXzE2XzQwNTg2ODgzOV8wXzBfMTdfMF81NjVfMF8w",
            props: [
              "2018夏装新款韩范v领交叉粉色短袖T恤女装纯色半截袖小心机上衣"
            ],
            lefttop_taglist: [],
            sale: "710",
            price: "39.90",
            cfav: "1255",
            leftbottom_taglist: [],
            shopId: "108443",
            popularStar: null
          },
          {
            itemType: 7,
            ptpC: "_mb_mls_10057922_wap-index_noab-noab",
            titleTags: null,
            clientUrl:
              "http://item.meilishuo.com/h5/detail/1lqxuvu?acm=3.ms.2_1_1lqxuvu.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_437825990_393064631_18_0-t_-c1_10057922_nil_nil_1_393064631_36_0-lc_32&cparam=MTUzODA1MzM1M18xZWhjOWZvXzE0NDk2YjM3ZmVkZTc4NzZlNzUxMGRjOTQyYzQ1ODllXzMyXzE3XzQzNzgyNTk5MF8wXzBfMThfMF8xNjRfMF8w",
            iid: "1lqxuvu",
            showLarge: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180126_39bjhej66kb2l48554kk0ld4d2fdc_640x960.jpg_560x999.jpg",
              w: 560,
              h: 840
            },
            link:
              "http://item.meilishuo.com/h5/detail/1lqxuvu?acm=3.ms.2_1_1lqxuvu.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_437825990_393064631_18_0-t_-c1_10057922_nil_nil_1_393064631_36_0-lc_32&cparam=MTUzODA1MzM1M18xZWhjOWZvXzE0NDk2YjM3ZmVkZTc4NzZlNzUxMGRjOTQyYzQ1ODllXzMyXzE3XzQzNzgyNTk5MF8wXzBfMThfMF8xNjRfMF8w",
            show: {
              img:
                "http://s3.mogucdn.com/mlcdn/c45406/180126_39bjhej66kb2l48554kk0ld4d2fdc_640x960.jpg_320x999.jpg",
              w: 320,
              h: 416
            },
            itemMarks: "1525 352 351",
            acm:
              "3.ms.2_1_1lqxuvu.0.70869-69004.ni0a4r4QX83wE.sd_117-c_2_32_437825990_393064631_18_0-t_-c1_10057922_nil_nil_1_393064631_36_0-lc_32",
            type: 2,
            title:
              "高领黑白条纹长袖t恤女2018春秋新款韩版宽松百搭学生内搭打底衫",
            orgPrice: "￥42.84",
            cparam:
              "MTUzODA1MzM1M18xZWhjOWZvXzE0NDk2YjM3ZmVkZTc4NzZlNzUxMGRjOTQyYzQ1ODllXzMyXzE3XzQzNzgyNTk5MF8wXzBfMThfMF8xNjRfMF8w",
            props: [
              "高领黑白条纹长袖t恤女2018春秋新款韩版宽松百搭学生内搭打底衫"
            ],
            lefttop_taglist: [],
            sale: "657",
            price: "29.98",
            cfav: "4585",
            leftbottom_taglist: [],
            shopId: "20234338",
            popularStar: null
          }
        ],
        title: "美丽说wap首页",
        isEnd: false,
        ptpPartC: "_mb_mls_10057922_wap-index_noab-noab",
        cpc_offset: 0
      }
    });
  }
}
