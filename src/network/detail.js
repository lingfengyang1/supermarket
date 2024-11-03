// 首先依赖axios对象
import {request, mockRequest} from './request'
// 接着发送网络请求 根据指定的idd获取对应的详情页面
// export function getDetail(iid) {
//   return request({
//     url: '/detail',
//     params: {
//       iid
//     }
//   })
// }
// 但是由于上述接口已经失效 所以说 我们就直接将数据在此处定义好以后暴露给外界即可
export function getDetail(iid) {
  if (iid === "1m70y5k") {
    return mockRequest({
      url: "/post",
      method: "post",
      data: {
        _id: "5bacc8d451aef27fecf48b7b",
        status: {
          code: 1001,
          msg: ""
        },
        result: {
          skuInfo: {
            title:
              "2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装",
            skus: [
              {
                stockId: "116dw0rk",
                xdSkuId: "116dw0rk",
                price: 12715,
                nowprice: 8900,
                img:
                  "//s3.mogucdn.com/mlcdn/c45406/180808_49a346e41ka1ge449c21kif9bdbdf_640x960.jpg",
                currency: "￥",
                stock: 1984,
                style: "开衫",
                size: "S",
                styleId: 1,
                sizeId: 100
              },
              {
                stockId: "116dw0ri",
                xdSkuId: "116dw0ri",
                price: 12715,
                nowprice: 8900,
                img:
                  "//s3.mogucdn.com/mlcdn/c45406/180808_49a346e41ka1ge449c21kif9bdbdf_640x960.jpg",
                currency: "￥",
                stock: 1985,
                style: "开衫",
                size: "M",
                styleId: 1,
                sizeId: 101
              },
              {
                stockId: "116dw0rg",
                xdSkuId: "116dw0rg",
                price: 12715,
                nowprice: 8900,
                img:
                  "//s3.mogucdn.com/mlcdn/c45406/180808_49a346e41ka1ge449c21kif9bdbdf_640x960.jpg",
                currency: "￥",
                stock: 1993,
                style: "开衫",
                size: "L",
                styleId: 1,
                sizeId: 102
              },
              {
                stockId: "116dw0rm",
                xdSkuId: "116dw0rm",
                price: 8429,
                nowprice: 5900,
                img:
                  "//s3.mogucdn.com/mlcdn/c45406/180808_150ikg46k29if5ad2h696a30lk955_640x960.jpg",
                currency: "￥",
                stock: 1963,
                style: "衬衣",
                size: "S",
                styleId: 2,
                sizeId: 100
              },
              {
                stockId: "116dw0ro",
                xdSkuId: "116dw0ro",
                price: 8429,
                nowprice: 5900,
                img:
                  "//s3.mogucdn.com/mlcdn/c45406/180808_150ikg46k29if5ad2h696a30lk955_640x960.jpg",
                currency: "￥",
                stock: 1927,
                style: "衬衣",
                size: "M",
                styleId: 2,
                sizeId: 101
              },
              {
                stockId: "116dw0rq",
                xdSkuId: "116dw0rq",
                price: 8429,
                nowprice: 5900,
                img:
                  "//s3.mogucdn.com/mlcdn/c45406/180808_150ikg46k29if5ad2h696a30lk955_640x960.jpg",
                currency: "￥",
                stock: 1935,
                style: "衬衣",
                size: "L",
                styleId: 2,
                sizeId: 102
              },
              {
                stockId: "116dw0rs",
                xdSkuId: "116dw0rs",
                price: 11286,
                nowprice: 7900,
                img:
                  "//s11.mogucdn.com/mlcdn/c45406/180808_49a67157e1f7j8b01d6b6ihk100h6_750x1024.jpg",
                currency: "￥",
                stock: 1993,
                style: "裤子",
                size: "S",
                styleId: 3,
                sizeId: 100
              },
              {
                stockId: "116dw0ru",
                xdSkuId: "116dw0ru",
                price: 11286,
                nowprice: 7900,
                img:
                  "//s11.mogucdn.com/mlcdn/c45406/180808_49a67157e1f7j8b01d6b6ihk100h6_750x1024.jpg",
                currency: "￥",
                stock: 1987,
                style: "裤子",
                size: "M",
                styleId: 3,
                sizeId: 101
              },
              {
                stockId: "116dw0rw",
                xdSkuId: "116dw0rw",
                price: 11286,
                nowprice: 7900,
                img:
                  "//s11.mogucdn.com/mlcdn/c45406/180808_49a67157e1f7j8b01d6b6ihk100h6_750x1024.jpg",
                currency: "￥",
                stock: 1998,
                style: "裤子",
                size: "L",
                styleId: 3,
                sizeId: 102
              },
              {
                stockId: "116dw0ry",
                xdSkuId: "116dw0ry",
                price: 18429,
                nowprice: 12900,
                img:
                  "//s5.mogucdn.com/mlcdn/c45406/180808_30ahe7k12adg7d1kbf34k2cfi2dge_750x1000.jpg",
                currency: "￥",
                stock: 1981,
                style: "衬衣+开衫",
                size: "S",
                styleId: 4,
                sizeId: 100
              },
              {
                stockId: "116dw0s0",
                xdSkuId: "116dw0s0",
                price: 18429,
                nowprice: 12900,
                img:
                  "//s5.mogucdn.com/mlcdn/c45406/180808_30ahe7k12adg7d1kbf34k2cfi2dge_750x1000.jpg",
                currency: "￥",
                stock: 1980,
                style: "衬衣+开衫",
                size: "M",
                styleId: 4,
                sizeId: 101
              },
              {
                stockId: "116dw0s2",
                xdSkuId: "116dw0s2",
                price: 18429,
                nowprice: 12900,
                img:
                  "//s5.mogucdn.com/mlcdn/c45406/180808_30ahe7k12adg7d1kbf34k2cfi2dge_750x1000.jpg",
                currency: "￥",
                stock: 1987,
                style: "衬衣+开衫",
                size: "L",
                styleId: 4,
                sizeId: 102
              },
              {
                stockId: "116dw0s4",
                xdSkuId: "116dw0s4",
                price: 25429,
                nowprice: 17800,
                img:
                  "//s11.mogucdn.com/mlcdn/c45406/180808_5j97j450bhhh6f82c83be92fb8jjd_640x960.jpg",
                currency: "￥",
                stock: 1897,
                style: "三件套",
                size: "S",
                styleId: 5,
                sizeId: 100
              },
              {
                stockId: "116dw0s6",
                xdSkuId: "116dw0s6",
                price: 25429,
                nowprice: 17800,
                img:
                  "//s11.mogucdn.com/mlcdn/c45406/180808_5j97j450bhhh6f82c83be92fb8jjd_640x960.jpg",
                currency: "￥",
                stock: 1901,
                style: "三件套",
                size: "M",
                styleId: 5,
                sizeId: 101
              },
              {
                stockId: "116dw0s8",
                xdSkuId: "116dw0s8",
                price: 25429,
                nowprice: 17800,
                img:
                  "//s11.mogucdn.com/mlcdn/c45406/180808_5j97j450bhhh6f82c83be92fb8jjd_640x960.jpg",
                currency: "￥",
                stock: 1950,
                style: "三件套",
                size: "L",
                styleId: 5,
                sizeId: 102
              }
            ],
            props: [
              {
                label: "颜色:",
                list: [
                  {
                    type: "style",
                    name: "开衫",
                    isDefault: false,
                    styleId: 1,
                    index: 1
                  },
                  {
                    type: "style",
                    name: "衬衣",
                    isDefault: false,
                    styleId: 2,
                    index: 2
                  },
                  {
                    type: "style",
                    name: "裤子",
                    isDefault: false,
                    styleId: 3,
                    index: 3
                  },
                  {
                    type: "style",
                    name: "衬衣+开衫",
                    isDefault: false,
                    styleId: 4,
                    index: 4
                  },
                  {
                    type: "style",
                    name: "三件套",
                    isDefault: false,
                    styleId: 5,
                    index: 5
                  }
                ],
                isDefault: false
              },
              {
                label: "尺码:",
                list: [
                  {
                    type: "size",
                    name: "S",
                    isDefault: false,
                    sizeId: 100,
                    index: 100
                  },
                  {
                    type: "size",
                    name: "M",
                    isDefault: false,
                    sizeId: 101,
                    index: 101
                  },
                  {
                    type: "size",
                    name: "L",
                    isDefault: false,
                    sizeId: 102,
                    index: 102
                  }
                ],
                isDefault: false
              }
            ],
            styleKey: "颜色",
            sizeKey: "尺码",
            priceRange: "¥59.00~¥178.00",
            defaultPrice: "¥59.00~¥178.00",
            isAbroad: false,
            totalStock: 29461
          },
          itemInfo: {
            desc:
              "2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装",
            userId: "1335w1m",
            shopId: "1cp5kk",
            title:
              "2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装",
            discountDesc: "7折",
            discountBgColor: "#f13e3a",
            lowPrice: "84.29",
            highPrice: "254.29",
            lowNowPrice: "59.00",
            highNowPrice: "178.00",
            iid: "1m70y5k",
            isSelf: false,
            isFaved: false,
            imUrl:
              "mls://imTalk?&source=1&goodsId=1m70y5k&userId=1335w1m&shopId=1cp5kk",
            state: 0,
            topImages: [
              "//s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg",
              "//s11.mogucdn.com/mlcdn/c45406/180808_41gdji7a4d3cigcf71li711kg3d5c_750x1000.jpg",
              "//s11.mogucdn.com/mlcdn/c45406/180808_6jc08lbjjg61gecif7c04292b57ah_750x1000.jpg",
              "//s3.mogucdn.com/mlcdn/c45406/180808_7i520f07dcc5j5lf0068l3l505d27_750x1024.jpg",
              "//s11.mogucdn.com/mlcdn/c45406/180808_7abl65i38i34lgk746061b4bg183b_640x960.jpg"
            ],
            oldPrice: "¥84.29",
            price: "¥59.00~¥178.00",
            saleType: 0,
            tags: "",
            inActivity: false,
            redPacketsSwitch: false,
            cFav: 0,
            admin: false,
            cids: "#682# #683# #2525# #703#",
            cartNum: 0,
            extra: {
              deliveryTime: 72,
              sendAddress: "广东省广州市"
            },
            addCartTips: false,
            isGrayUser: false,
            isNewComer: false
          },
          topBar: {
            img:
              "//s11.mogucdn.com/p1/150811/upload_ieytsmbrmm4wkm3ggizdambqmeyde_226x43.png",
            link: "http://www.xiaodian.com/h5/download"
          },
          detailInfo: {
            desc:
              "2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装",
            detailImage: [
              {
                desc: "",
                key: "穿着效果",
                anchor: "model_img",
                list: [
                  "//s3.mogucdn.com/mlcdn/c45406/180808_0ef92c2hkg8e57lkj8098ek8ikj32_750x1024.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180808_0eh1f9gfgkalgjg488b7efda457bh_750x1024.jpg",
                  "//s5.mogucdn.com/mlcdn/c45406/180808_3li3e7j0b329i3279ce06h4af322f_750x1024.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180808_6c7j0be2b52bd99559fiag0aj1i9c_750x1000.jpg",
                  "//s3.mogucdn.com/mlcdn/c45406/180808_347b2ab91e3i2if5klkdd3b632k3j_750x1000.jpg",
                  "//s5.mogucdn.com/mlcdn/c45406/180808_3f215a69j42ajhjjeiabid2fjd6g3_750x1024.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180808_00kei2ib30lk8d0i083j7ad50f2ak_750x1000.jpg",
                  "//s5.mogucdn.com/mlcdn/c45406/180808_856jdjkabikfdfdh6f90i2bd7hfd0_750x1024.jpg",
                  "//s5.mogucdn.com/mlcdn/c45406/180808_2lefjd8fe46dj06451i8dk585e06e_640x960.jpg",
                  "//s3.mogucdn.com/mlcdn/c45406/180808_2fji3fbf5j7eg4hhjbhc9j4kgj48e_640x960.jpg",
                  "//s11.mogucdn.com/p2/170317/77101615_86e9f0elcl86499l16jf26aallg14_1125x380.jpg"
                ]
              }
            ]
          },
          columns: ["销量 5013", "收藏49人", "默认快递"],
          promotions: {
            link: "mls://shoppro?shopId=1cp5kk",
            alertData: {},
            list: ["满2件减3元", "满3件减5元", "满4件减8元", "满5件减10元"]
          },
          itemParams: {
            info: {
              set: [
                {
                  value: "普通",
                  key: "厚薄"
                },
                {
                  value: "广州风彩贸易有限公司",
                  key: "厂名"
                },
                {
                  value: "三件套,衬衣+开衫,衬衣,开衫,裤子",
                  key: "颜色"
                },
                {
                  value: "秋季",
                  key: "季节"
                },
                {
                  value: "广州市天河区沙太南路银利茶叶城E栋1042",
                  key: "厂址"
                },
                {
                  value: "其他",
                  key: "材质"
                },
                {
                  value: "其他领型",
                  key: "领型"
                },
                {
                  value: "长袖",
                  key: "袖长"
                },
                {
                  value: "衣裤套装",
                  key: "款式"
                },
                {
                  value: "简约",
                  key: "风格"
                },
                {
                  value: "S,L,M",
                  key: "尺码"
                },
                {
                  value: "常规款（51-65cm）",
                  key: "衣长"
                }
              ],
              key: "产品参数",
              anchor: "product_info"
            },
            rule: {
              tables: [
                [
                  ["尺码", "S", "M", "L"],
                  ["胸围", "100", "104", "108"],
                  ["腰围", "64", "68", "72"],
                  ["裤长", "87", "88", "89"],
                  ["肩宽", "39", "40", "41"],
                  ["衣长", "55", "56", "57"]
                ]
              ],
              key: "尺码说明",
              anchor: "size_info",
              disclaimer:
                "※ 以上尺寸为实物人工测量，因测量当时不同会有1-2cm误差，相关数据仅作参考，以收到实物为准。"
            }
          },
          shopInfo: {
            score: [
              {
                name: "描述相符",
                score: 4.66,
                isBetter: false
              },
              {
                name: "价格合理",
                score: 5,
                isBetter: true
              },
              {
                name: "质量满意",
                score: 4.65,
                isBetter: false
              }
            ],
            services: [
              {
                name: "延误必赔"
              },
              {
                icon:
                  "//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                name: "退货补运费"
              },
              {
                icon:
                  "//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                name: "全国包邮"
              },
              {
                icon:
                  "//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                name: "7天无理由退货"
              },
              {
                icon:
                  "//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                name: "72小时发货"
              }
            ],
            categories: [
              {
                name: "T恤/衬衫",
                link:
                  "http://s.meilishuo.com/1cp5kk/list/index?categoryId=85062"
              },
              {
                name: "半身裙/短裙",
                link:
                  "http://s.meilishuo.com/1cp5kk/list/index?categoryId=85065"
              },
              {
                name: "休闲裤/打底裤",
                link:
                  "http://s.meilishuo.com/1cp5kk/list/index?categoryId=85066"
              },
              {
                name: "雪纺衫/蕾丝衫",
                link:
                  "http://s.meilishuo.com/1cp5kk/list/index?categoryId=87811"
              },
              {
                name: "连衣裙",
                link:
                  "http://s.meilishuo.com/1cp5kk/list/index?categoryId=87820"
              },
              {
                name: "套装",
                link:
                  "http://s.meilishuo.com/1cp5kk/list/index?categoryId=87878"
              },
              {
                name: "吊带/背心",
                link:
                  "http://s.meilishuo.com/1cp5kk/list/index?categoryId=91034"
              },
              {
                name: "牛仔裤",
                link:
                  "http://s.meilishuo.com/1cp5kk/list/index?categoryId=114122"
              },
              {
                name: "短裤",
                link:
                  "http://s.meilishuo.com/1cp5kk/list/index?categoryId=114123"
              },
              {
                name: "外套/风衣",
                link:
                  "http://s.meilishuo.com/1cp5kk/list/index?categoryId=134459"
              },
              {
                name: "防嗮衫",
                link:
                  "http://s.meilishuo.com/1cp5kk/list/index?categoryId=134465"
              },
              {
                name: "针织衫/毛衣",
                link:
                  "http://s.meilishuo.com/1cp5kk/list/index?categoryId=152761"
              },
              {
                name: "卫衣",
                link:
                  "http://s.meilishuo.com/1cp5kk/list/index?categoryId=165931"
              },
              {
                name: "棒球衫",
                link:
                  "http://s.meilishuo.com/1cp5kk/list/index?categoryId=174689"
              },
              {
                name: "棉衣/棉服",
                link:
                  "http://s.meilishuo.com/1cp5kk/list/index?categoryId=1295038"
              },
              {
                name: "满119任选2件",
                link:
                  "http://s.meilishuo.com/1cp5kk/list/index?categoryId=1324066"
              },
              {
                name: "毛呢外套",
                link:
                  "http://s.meilishuo.com/1cp5kk/list/index?categoryId=1367954"
              },
              {
                name: "羽绒服",
                link:
                  "http://s.meilishuo.com/1cp5kk/list/index?categoryId=20117850"
              }
            ],
            cFans: 98573,
            cSells: 384791,
            allGoodsUrl: "http://m.meilishuo.com/shop/index/1cp5kk",
            shopUrl: "http://m.meilishuo.com/shop/index/1cp5kk",
            isMarked: false,
            cGoods: 339,
            userId: "1335w1m",
            shopLogo:
              "//s3.mogucdn.com/mlcdn/c45406/180616_08024j2g76l4552k5550fi73k5f3f_200x200.jpg",
            name: "艾芳女装屋",
            shopId: "1cp5kk",
            type: 1,
            level: 5,
            nonsupportReasonRefound: false
          },
          rate: {
            list: [
              {
                user: {
                  uid: "",
                  uname: "静萱Gill",
                  avatar:
                    "//s3.mogucdn.com/p2/161214/103488673_65bf62g5e98f4g9b8dk1j5le13e34_140x140.png",
                  profileUrl: "",
                  tagIndex: ""
                },
                rateId: "11625csq",
                content:
                  "衣服收到了，质量很好没有色差做工精细，款式时尚大方穿在身上大小合适价格实惠",
                created: 1535697272,
                isAnonymous: 1,
                style: "颜色:衬衣 尺码:M ",
                isEmpty: 0,
                level: "",
                canExplain: false
              }
            ],
            cRate: 99
          },
          isLogin: false,
          esi:
            "<esi:try><esi:attempt><esi:include src='http://m.meilishuo.com/detail/mls/v1/h5_dyn?$(QUERY_STRING)'/></esi:attempt><esi:except></esi:except></esi:try>"
        },
        iid: "1m70y5k"
      }
    });
  }
  if (iid === "1m745k0") {
    return mockRequest({
      url: "/post",
      method: "post",
      data: {
        _id: "5bacc8d551aef27fecf48b7c",
        status: {
          code: 1001,
          msg: ""
        },
        result: {
          skuInfo: {
            title:
              "2018秋季新款韩版女装字母印花宽松连帽休闲卫衣搭配松紧腰九分牛仔裤两件套女时尚运动套装潮",
            skus: [
              {
                stockId: "116kkstw",
                xdSkuId: "116kkstw",
                price: 9715,
                nowprice: 6800,
                img:
                  "//s11.mogucdn.com/mlcdn/c45406/180822_3j9j174g9laj1h7a1ii4786jgghb1_640x960.jpg",
                currency: "￥",
                stock: 449,
                style: "单白色卫衣",
                size: "S",
                styleId: 1,
                sizeId: 100
              },
              {
                stockId: "116kksty",
                xdSkuId: "116kksty",
                price: 9715,
                nowprice: 6800,
                img:
                  "//s11.mogucdn.com/mlcdn/c45406/180822_3j9j174g9laj1h7a1ii4786jgghb1_640x960.jpg",
                currency: "￥",
                stock: 445,
                style: "单白色卫衣",
                size: "M",
                styleId: 1,
                sizeId: 101
              },
              {
                stockId: "116kksu0",
                xdSkuId: "116kksu0",
                price: 9715,
                nowprice: 6800,
                img:
                  "//s11.mogucdn.com/mlcdn/c45406/180822_3j9j174g9laj1h7a1ii4786jgghb1_640x960.jpg",
                currency: "￥",
                stock: 443,
                style: "单白色卫衣",
                size: "L",
                styleId: 1,
                sizeId: 102
              },
              {
                stockId: "116kksu2",
                xdSkuId: "116kksu2",
                price: 9715,
                nowprice: 6800,
                img:
                  "//s11.mogucdn.com/mlcdn/c45406/180822_3j9j174g9laj1h7a1ii4786jgghb1_640x960.jpg",
                currency: "￥",
                stock: 490,
                style: "单白色卫衣",
                size: "XL",
                styleId: 1,
                sizeId: 103
              },
              {
                stockId: "116kksu4",
                xdSkuId: "116kksu4",
                price: 9715,
                nowprice: 6800,
                img:
                  "//s5.mogucdn.com/mlcdn/c45406/180822_6fj224cck2aj4j7e52ebfj09hd01l_640x960.jpg",
                currency: "￥",
                stock: 496,
                style: "单红色卫衣",
                size: "S",
                styleId: 2,
                sizeId: 100
              },
              {
                stockId: "116kksu6",
                xdSkuId: "116kksu6",
                price: 9715,
                nowprice: 6800,
                img:
                  "//s5.mogucdn.com/mlcdn/c45406/180822_6fj224cck2aj4j7e52ebfj09hd01l_640x960.jpg",
                currency: "￥",
                stock: 495,
                style: "单红色卫衣",
                size: "M",
                styleId: 2,
                sizeId: 101
              },
              {
                stockId: "116kksu8",
                xdSkuId: "116kksu8",
                price: 9715,
                nowprice: 6800,
                img:
                  "//s5.mogucdn.com/mlcdn/c45406/180822_6fj224cck2aj4j7e52ebfj09hd01l_640x960.jpg",
                currency: "￥",
                stock: 495,
                style: "单红色卫衣",
                size: "L",
                styleId: 2,
                sizeId: 102
              },
              {
                stockId: "116kksua",
                xdSkuId: "116kksua",
                price: 9715,
                nowprice: 6800,
                img:
                  "//s5.mogucdn.com/mlcdn/c45406/180822_6fj224cck2aj4j7e52ebfj09hd01l_640x960.jpg",
                currency: "￥",
                stock: 494,
                style: "单红色卫衣",
                size: "XL",
                styleId: 2,
                sizeId: 103
              },
              {
                stockId: "116kksuc",
                xdSkuId: "116kksuc",
                price: 9715,
                nowprice: 6800,
                img:
                  "//s5.mogucdn.com/mlcdn/c45406/180822_07e5a9308a741ccg48e181jbdji2g_640x960.jpg",
                currency: "￥",
                stock: 497,
                style: "单白牛仔裤",
                size: "S",
                styleId: 3,
                sizeId: 100
              },
              {
                stockId: "116kksue",
                xdSkuId: "116kksue",
                price: 9715,
                nowprice: 6800,
                img:
                  "//s5.mogucdn.com/mlcdn/c45406/180822_07e5a9308a741ccg48e181jbdji2g_640x960.jpg",
                currency: "￥",
                stock: 496,
                style: "单白牛仔裤",
                size: "M",
                styleId: 3,
                sizeId: 101
              },
              {
                stockId: "116kksug",
                xdSkuId: "116kksug",
                price: 9715,
                nowprice: 6800,
                img:
                  "//s5.mogucdn.com/mlcdn/c45406/180822_07e5a9308a741ccg48e181jbdji2g_640x960.jpg",
                currency: "￥",
                stock: 498,
                style: "单白牛仔裤",
                size: "L",
                styleId: 3,
                sizeId: 102
              },
              {
                stockId: "116kksui",
                xdSkuId: "116kksui",
                price: 9715,
                nowprice: 6800,
                img:
                  "//s5.mogucdn.com/mlcdn/c45406/180822_07e5a9308a741ccg48e181jbdji2g_640x960.jpg",
                currency: "￥",
                stock: 496,
                style: "单白牛仔裤",
                size: "XL",
                styleId: 3,
                sizeId: 103
              },
              {
                stockId: "116kksuk",
                xdSkuId: "116kksuk",
                price: 9715,
                nowprice: 6800,
                img:
                  "//s11.mogucdn.com/mlcdn/c45406/180822_22e843hdd0l88f7e6bk3jhk3bb422_640x960.jpg",
                currency: "￥",
                stock: 498,
                style: "单红牛仔裤",
                size: "S",
                styleId: 4,
                sizeId: 100
              },
              {
                stockId: "116kksum",
                xdSkuId: "116kksum",
                price: 9715,
                nowprice: 6800,
                img:
                  "//s11.mogucdn.com/mlcdn/c45406/180822_22e843hdd0l88f7e6bk3jhk3bb422_640x960.jpg",
                currency: "￥",
                stock: 498,
                style: "单红牛仔裤",
                size: "M",
                styleId: 4,
                sizeId: 101
              },
              {
                stockId: "116kksuo",
                xdSkuId: "116kksuo",
                price: 9715,
                nowprice: 6800,
                img:
                  "//s11.mogucdn.com/mlcdn/c45406/180822_22e843hdd0l88f7e6bk3jhk3bb422_640x960.jpg",
                currency: "￥",
                stock: 498,
                style: "单红牛仔裤",
                size: "L",
                styleId: 4,
                sizeId: 102
              },
              {
                stockId: "116kksuq",
                xdSkuId: "116kksuq",
                price: 9715,
                nowprice: 6800,
                img:
                  "//s11.mogucdn.com/mlcdn/c45406/180822_22e843hdd0l88f7e6bk3jhk3bb422_640x960.jpg",
                currency: "￥",
                stock: 496,
                style: "单红牛仔裤",
                size: "XL",
                styleId: 4,
                sizeId: 103
              },
              {
                stockId: "116kksus",
                xdSkuId: "116kksus",
                price: 14000,
                nowprice: 9800,
                img:
                  "//s5.mogucdn.com/mlcdn/c45406/180822_317177jj9bbhkcl20ic1gei6g9bef_640x960.jpg",
                currency: "￥",
                stock: 395,
                style: "白卫衣+白牛仔裤套装",
                size: "S",
                styleId: 5,
                sizeId: 100
              },
              {
                stockId: "116kksuu",
                xdSkuId: "116kksuu",
                price: 14000,
                nowprice: 9800,
                img:
                  "//s5.mogucdn.com/mlcdn/c45406/180822_317177jj9bbhkcl20ic1gei6g9bef_640x960.jpg",
                currency: "￥",
                stock: 340,
                style: "白卫衣+白牛仔裤套装",
                size: "M",
                styleId: 5,
                sizeId: 101
              },
              {
                stockId: "116kksuw",
                xdSkuId: "116kksuw",
                price: 14000,
                nowprice: 9800,
                img:
                  "//s5.mogucdn.com/mlcdn/c45406/180822_317177jj9bbhkcl20ic1gei6g9bef_640x960.jpg",
                currency: "￥",
                stock: 382,
                style: "白卫衣+白牛仔裤套装",
                size: "L",
                styleId: 5,
                sizeId: 102
              },
              {
                stockId: "116kksuy",
                xdSkuId: "116kksuy",
                price: 14000,
                nowprice: 9800,
                img:
                  "//s5.mogucdn.com/mlcdn/c45406/180822_317177jj9bbhkcl20ic1gei6g9bef_640x960.jpg",
                currency: "￥",
                stock: 379,
                style: "白卫衣+白牛仔裤套装",
                size: "XL",
                styleId: 5,
                sizeId: 103
              },
              {
                stockId: "116kksv0",
                xdSkuId: "116kksv0",
                price: 14000,
                nowprice: 9800,
                img:
                  "//s11.mogucdn.com/mlcdn/c45406/180822_4bebgk39he9b0cgdkg51k99a7f21h_640x960.jpg",
                currency: "￥",
                stock: 473,
                style: "红卫衣+红牛仔裤套装",
                size: "S",
                styleId: 6,
                sizeId: 100
              },
              {
                stockId: "116kksv2",
                xdSkuId: "116kksv2",
                price: 14000,
                nowprice: 9800,
                img:
                  "//s11.mogucdn.com/mlcdn/c45406/180822_4bebgk39he9b0cgdkg51k99a7f21h_640x960.jpg",
                currency: "￥",
                stock: 459,
                style: "红卫衣+红牛仔裤套装",
                size: "M",
                styleId: 6,
                sizeId: 101
              },
              {
                stockId: "116kksv4",
                xdSkuId: "116kksv4",
                price: 14000,
                nowprice: 9800,
                img:
                  "//s11.mogucdn.com/mlcdn/c45406/180822_4bebgk39he9b0cgdkg51k99a7f21h_640x960.jpg",
                currency: "￥",
                stock: 462,
                style: "红卫衣+红牛仔裤套装",
                size: "L",
                styleId: 6,
                sizeId: 102
              },
              {
                stockId: "116kksv6",
                xdSkuId: "116kksv6",
                price: 14000,
                nowprice: 9800,
                img:
                  "//s11.mogucdn.com/mlcdn/c45406/180822_4bebgk39he9b0cgdkg51k99a7f21h_640x960.jpg",
                currency: "￥",
                stock: 443,
                style: "红卫衣+红牛仔裤套装",
                size: "XL",
                styleId: 6,
                sizeId: 103
              }
            ],
            props: [
              {
                label: "颜色:",
                list: [
                  {
                    type: "style",
                    name: "单白色卫衣",
                    isDefault: false,
                    styleId: 1,
                    index: 1
                  },
                  {
                    type: "style",
                    name: "单红色卫衣",
                    isDefault: false,
                    styleId: 2,
                    index: 2
                  },
                  {
                    type: "style",
                    name: "单白牛仔裤",
                    isDefault: false,
                    styleId: 3,
                    index: 3
                  },
                  {
                    type: "style",
                    name: "单红牛仔裤",
                    isDefault: false,
                    styleId: 4,
                    index: 4
                  },
                  {
                    type: "style",
                    name: "白卫衣+白牛仔裤套装",
                    isDefault: false,
                    styleId: 5,
                    index: 5
                  },
                  {
                    type: "style",
                    name: "红卫衣+红牛仔裤套装",
                    isDefault: false,
                    styleId: 6,
                    index: 6
                  }
                ],
                isDefault: false
              },
              {
                label: "尺码:",
                list: [
                  {
                    type: "size",
                    name: "S",
                    isDefault: false,
                    sizeId: 100,
                    index: 100
                  },
                  {
                    type: "size",
                    name: "M",
                    isDefault: false,
                    sizeId: 101,
                    index: 101
                  },
                  {
                    type: "size",
                    name: "L",
                    isDefault: false,
                    sizeId: 102,
                    index: 102
                  },
                  {
                    type: "size",
                    name: "XL",
                    isDefault: false,
                    sizeId: 103,
                    index: 103
                  }
                ],
                isDefault: false
              }
            ],
            styleKey: "颜色",
            sizeKey: "尺码",
            priceRange: "¥68.00~¥98.00",
            defaultPrice: "¥68.00~¥98.00",
            isAbroad: false,
            totalStock: 11117
          },
          itemInfo: {
            desc:
              "你的运动套装，也可以一起承包了~棉混纺的连帽卫衣，版型虽宽松，但因为有罗纹收口，穿起来立体挺括，能遮住多余的腰腹和双臂肉肉，展现青春活力.下半身搭配浅色直筒牛仔裤，向来是竹竿腿的助攻，翻边上的亮粉字母数字，和上衣一个调调，闪闪地时尚别致.清清爽爽的运动风其实也很拉好感der~",
            userId: "19r4dxi",
            shopId: "1172uw4c",
            title:
              "2018秋季新款韩版女装字母印花宽松连帽休闲卫衣搭配松紧腰九分牛仔裤两件套女时尚运动套装潮",
            discountDesc: "促销价",
            discountBgColor: "#f13e3a",
            lowPrice: "97.15",
            highPrice: "140.00",
            lowNowPrice: "68.00",
            highNowPrice: "98.00",
            iid: "1m745k0",
            isSelf: false,
            isFaved: false,
            imUrl:
              "mls://imTalk?&source=1&goodsId=1m745k0&userId=19r4dxi&shopId=1172uw4c",
            state: 0,
            topImages: [
              "//s11.mogucdn.com/mlcdn/c45406/180811_1k5hfa6d803575df3lkb6j67l5j3c_640x960.jpg",
              "//s5.mogucdn.com/mlcdn/c45406/180811_6ei1i6l4597d78k2gbeglgd1eb53f_640x960.jpg",
              "//s5.mogucdn.com/mlcdn/c45406/180811_18k64e8cf97f969h42did77jj0b83_640x960.jpg",
              "//s11.mogucdn.com/mlcdn/c45406/180811_6919ke30l4jf6i886c6d2i04197ea_640x960.jpg"
            ],
            oldPrice: "¥97.15",
            price: "¥68.00~¥98.00",
            saleType: 0,
            tags: "",
            inActivity: false,
            redPacketsSwitch: false,
            cFav: 0,
            admin: false,
            video: {
              cover:
                "//s5.mogucdn.com/mlcdn/c45406/180820_539j535a4h3fef998h4f60g4b7bg3_640x960.jpg",
              videoId: 786343
            },
            cids: "#682# #683# #2525# #703#",
            cartNum: 0,
            extra: {
              deliveryTime: 72,
              sendAddress: ""
            },
            addCartTips: false,
            isGrayUser: false,
            isNewComer: false
          },
          topBar: {
            img:
              "//s11.mogucdn.com/p1/150811/upload_ieytsmbrmm4wkm3ggizdambqmeyde_226x43.png",
            link: "http://www.xiaodian.com/h5/download"
          },
          detailInfo: {
            desc:
              "你的运动套装，也可以一起承包了~棉混纺的连帽卫衣，版型虽宽松，但因为有罗纹收口，穿起来立体挺括，能遮住多余的腰腹和双臂肉肉，展现青春活力.下半身搭配浅色直筒牛仔裤，向来是竹竿腿的助攻，翻边上的亮粉字母数字，和上衣一个调调，闪闪地时尚别致.清清爽爽的运动风其实也很拉好感der~",
            detailImage: [
              {
                desc: "",
                key: "穿着效果",
                anchor: "model_img",
                list: [
                  "//s5.mogucdn.com/mlcdn/c45406/180811_259afdl5eb0aj4jl39h7gekgdi0lj_751x1011.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_38j2dh89548c1j2cj03khja9b8hjf_751x864.jpg",
                  "//s3.mogucdn.com/mlcdn/c45406/180811_6ehkkbgfe4c2gh8913jiajefik2ck_751x618.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_06akebbbccf79ddk641kkih583i46_751x472.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_4i11a27bai85f99jl6icii3h7cfji_751x486.jpg",
                  "//s3.mogucdn.com/mlcdn/c45406/180811_47jbl66876b75385bb6f47ffdbe96_751x819.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_100ila25d098f0gb564a33929gb42_751x810.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_344ii6c555hidbg7h6ech8fji82bb_751x771.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_5f04003hjf36320bg45b5di4b47f8_751x729.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_4c6ke1jb94k8i3514745gi1bg36l6_751x834.jpg",
                  "//s5.mogucdn.com/mlcdn/c45406/180811_44fjcd09gd3ik7l5b317l06gjbj4e_751x764.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_3g2hg11i3563jg0a0e9jjc66482hc_751x738.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_0licggk7c2ba6h398ff2ei94d9ih2_751x805.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_8fk12h9k46d1h29c7bddaedej136j_751x744.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_0hf87ekk21hcll22kafhili0h43gf_751x719.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_05hhl0fcddk11e9907g89e4idh907_751x717.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_8852i90lil823eag9f0d7c5dd0kab_751x715.jpg",
                  "//s3.mogucdn.com/mlcdn/c45406/180811_0dh67di16gc3bgjhb1b347f09effl_751x728.jpg",
                  "//s3.mogucdn.com/mlcdn/c45406/180811_8h7ca8i0k7be7fa7b8dli9i2e6ekd_751x716.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_5571j9khj10ee15bi2h7hi6g6c1b3_751x711.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_196a09847i1769id1cifghd5d26c6_751x715.jpg",
                  "//s5.mogucdn.com/mlcdn/c45406/180811_2kjcgb9ja8b72h9del5ajj9e19448_800x800.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_0f2gffa0f0fhgdg9f2agbbbf2ac5d_749x795.jpg",
                  "//s5.mogucdn.com/mlcdn/c45406/180811_0e47hiifdeal220fh9a0g6475bfe6_749x718.jpg",
                  "//s5.mogucdn.com/mlcdn/c45406/180811_19afch69gk0i29l26efi46h03kfge_749x762.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_7h3ja1e2gea3f0bbeifb9kfj2d650_749x705.jpg",
                  "//s3.mogucdn.com/mlcdn/c45406/180811_265fbbkblh91h1hddl4k290l36jig_749x667.jpg",
                  "//s3.mogucdn.com/mlcdn/c45406/180811_111e6i9gj9jegkdd2l219h4ahl6e8_749x841.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_24lhd561jd67ifecd38b5b441e0he_749x770.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_29fd9365gkc6759j6abalh0i8d2j8_749x714.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_780k003724lh4886aj1h7kkf8h01g_749x775.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_3j1bgja1g97icclg42dd4glajhb35_749x729.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_0lb1bih0lcg1lh8b4aej6j93k5eh2_749x717.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_8bc5974f8achk69k8h9e56h9ech79_749x716.jpg",
                  "//s5.mogucdn.com/mlcdn/c45406/180811_1hif158250lg1kaaag6fe595l5c3a_749x719.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_7h0lk8eli8262705h86c3169egfhb_749x717.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_40857j58bjjj0b17bg19e5id48i1i_749x663.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_83e95id3912fl6aa8f7f7d72a85a7_800x800.jpg",
                  "//s11.mogucdn.com/mlcdn/c45406/180811_64h2b2b1ef5g1llh9hk945a459h6h_749x669.jpg",
                  "//s5.mogucdn.com/mlcdn/c45406/180811_2i87d0048k9df28la47l30ahjjcbd_800x800.jpg",
                  "//s11.mogucdn.com/p2/170317/77101615_86e9f0elcl86499l16jf26aallg14_1125x380.jpg"
                ]
              }
            ]
          },
          columns: ["销量 3887", "收藏76人", "默认快递"],
          promotions: {
            link: "mls://shoppro?shopId=1172uw4c",
            alertData: {},
            list: ["满2件减5元", "满3件减10元", "满4件减15元", "满5件减20元"]
          },
          itemParams: {
            info: {
              set: [
                {
                  value: "字母/文字/数字",
                  key: "图案"
                },
                {
                  value: "普通",
                  key: "厚薄"
                },
                {
                  value: "广州市宏锐服饰有限公司",
                  key: "厂名"
                },
                {
                  value:
                    "白卫衣+白牛仔裤套装,单白牛仔裤,红卫衣+红牛仔裤套装,单红牛仔裤,单红色卫衣,单白色卫衣",
                  key: "颜色"
                },
                {
                  value: "常规袖",
                  key: "袖型"
                },
                {
                  value: "S,XL,L,M",
                  key: "尺码"
                },
                {
                  value: "常规款（51-65cm）",
                  key: "衣长"
                },
                {
                  value: "秋季",
                  key: "季节"
                },
                {
                  value: "广东省广州市天河区景业创意园3号楼",
                  key: "厂址"
                },
                {
                  value: "其他",
                  key: "材质"
                },
                {
                  value: "高领",
                  key: "领型"
                },
                {
                  value: "系带",
                  key: "元素"
                },
                {
                  value: "长袖",
                  key: "袖长"
                },
                {
                  value: "衣裤套装",
                  key: "款式"
                },
                {
                  value: "简约",
                  key: "风格"
                },
                {
                  value: "韩系",
                  key: "潮流"
                }
              ],
              key: "产品参数",
              anchor: "product_info"
            },
            rule: {
              desc:
                "※ 以上尺寸为实物人工测量，因测量当时不同会有1-2cm误差，相关数据仅作参考，以收到实物为准.",
              tables: [
                [
                  ["尺码", "S", "M", "L", "XL"],
                  ["档长", "-", "-", "-", "-"],
                  ["大腿围", "-", "-", "-", "-"],
                  ["胸围", "114", "118", "122", "126"],
                  ["腰围", "60-74", "64-78", "68-82", "72-86"],
                  ["臀围", "-", "-", "-", "-"],
                  ["裙长", "-", "-", "-", "-"],
                  ["袖长", "46", "47", "48", "49"],
                  ["裤长", "82", "83", "84", "85"],
                  ["肩宽", "58", "59", "60", "61"],
                  ["领围", "-", "-", "-", "-"],
                  ["衣长", "60", "61", "62", "63"],
                  ["裤口", "-", "-", "-", "-"]
                ]
              ],
              key: "尺码说明",
              anchor: "size_info",
              disclaimer:
                "※ 以上尺寸为实物人工测量，因测量当时不同会有1-2cm误差，相关数据仅作参考，以收到实物为准。"
            }
          },
          shopInfo: {
            score: [
              {
                name: "描述相符",
                score: 4.58,
                isBetter: false
              },
              {
                name: "价格合理",
                score: 5,
                isBetter: true
              },
              {
                name: "质量满意",
                score: 4.58,
                isBetter: false
              }
            ],
            services: [
              {
                icon:
                  "//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                name: "退货补运费"
              },
              {
                icon:
                  "//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                name: "全国包邮"
              },
              {
                icon:
                  "//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                name: "7天无理由退货"
              },
              {
                icon:
                  "//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                name: "72小时发货"
              }
            ],
            categories: [
              {
                name: "春秋外套",
                link:
                  "http://s.meilishuo.com/1172uw4c/list/index?categoryId=20293875"
              },
              {
                name: "时尚套装",
                link:
                  "http://s.meilishuo.com/1172uw4c/list/index?categoryId=20293876"
              },
              {
                name: "毛呢外套",
                link:
                  "http://s.meilishuo.com/1172uw4c/list/index?categoryId=20337021"
              },
              {
                name: "棉衣/棉服",
                link:
                  "http://s.meilishuo.com/1172uw4c/list/index?categoryId=20337022"
              },
              {
                name: "连衣裙",
                link:
                  "http://s.meilishuo.com/1172uw4c/list/index?categoryId=20338182"
              },
              {
                name: "卫衣",
                link:
                  "http://s.meilishuo.com/1172uw4c/list/index?categoryId=20339100"
              },
              {
                name: "毛衣",
                link:
                  "http://s.meilishuo.com/1172uw4c/list/index?categoryId=20339102"
              }
            ],
            cFans: 12224,
            cSells: 63236,
            allGoodsUrl: "http://m.meilishuo.com/shop/index/1172uw4c",
            shopUrl: "http://m.meilishuo.com/shop/index/1172uw4c",
            isMarked: false,
            cGoods: 300,
            userId: "19r4dxi",
            shopLogo:
              "//s11.mogucdn.com/mlcdn/c45406/171215_05e78a8bba7dli9329gai9kk5b6bj_200x200.jpg",
            name: "倩雪香宜定制女装",
            shopId: "1172uw4c",
            type: 1,
            level: 3,
            nonsupportReasonRefound: false
          },
          rate: {
            list: [
              {
                user: {
                  uid: "",
                  uname: "西瓜女皇i2009",
                  avatar:
                    "//s11.mogucdn.com/p2/161214/103488673_0l1ff9kf2hbc32fe4a2g05l77d89d_140x140.png",
                  profileUrl: "",
                  tagIndex: ""
                },
                rateId: "115y6h8m",
                content:
                  "质量非常不错。款式新颖，好喜欢，物流也很快。卖家服务非常好，值得购买",
                created: 1534850645,
                isAnonymous: 1,
                style: "颜色:白色 尺码:XL ",
                isEmpty: 0,
                explain:
                  "[商家回复]:  高品质 白菜的价格。工厂直销 好质量请认准【倩雪香宜】 只做好质量，做性价比高的产品，么么哒\n\n。非常感谢您对【倩雪香宜】的支持和认可。你们的肯定就是对我们最大的支持和鼓励。我们一直致\n\n力于提供更多优质性价比高的宝贝呈现给菇凉们，感谢大家的支持.欢迎下次再来，我们会给亲更优惠\n\n的价格哦~;祝您每天都有阳光般的好心情高品质 白菜的价格。工厂直销 好质量请认准【倩雪香宜】 \n\n只做好质量，做性价比高的产品，么么哒。非常感谢您对【倩雪香宜】的支持和认可。你们的肯定就\n\n是对我们最大的支持和鼓励。我们一直致力于提供更多优质性价比高的宝贝呈现给菇凉们，感谢大家\n\n的支持.欢迎下次再来，我们会给亲更优惠的价格哦~;祝您每天都有阳光般的好心情",
                level: "",
                canExplain: false,
                extraInfo: ["是否合身:合身"]
              }
            ],
            cRate: 115
          },
          isLogin: false,
          esi:
            "<esi:try><esi:attempt><esi:include src='http://m.meilishuo.com/detail/mls/v1/h5_dyn?$(QUERY_STRING)'/></esi:attempt><esi:except></esi:except></esi:try>"
        },
        iid: "1m745k0"
      }
    });
  }
}
export function getRecommend() {
  return mockRequest({
    url: "/post",
    method: "post",
    data: {
      context: {
        currentTime: 1540114164
      },
      isEnd: false,
      list: [
        {
          tradeItemId: 621808703,
          image:
            "http://s3.mogucdn.com/mlcdn/c45406/170915_0a93207ci28kelh617k4hh62l65lb_640x960.jpg",
          item_id: "1kkf1di",
          itemLikes: 10880,
          discountPrice: "59.00",
          discount: 700,
          acm:
            "3.mce.2_4_1kkf1di.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_0-lc_201",
          title:
            "2018春秋季新款字母短款套头长袖t恤卫衣女显瘦破洞乞丐毛边直筒牛仔裤女长裤时尚套装两件套",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 661,
          price: "84.29",
          cfav: 10880,
          item_url:
            "http://item.meilishuo.com/detail/1kkf1di?acm=3.mce.2_4_1kkf1di.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_0-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1kkf1di?acm=3.mce.2_4_1kkf1di.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_0-lc_201"
        },
        {
          tradeItemId: 623831082,
          image:
            "http://s11.mogucdn.com/mlcdn/c45406/171008_28ba9aade1cc95bjh1cfbb11c0ehi_640x960.jpg",
          item_id: "1kmtqbw",
          itemLikes: 9067,
          discountPrice: "49.00",
          discount: 700,
          acm:
            "3.mce.2_4_1kmtqbw.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_1-lc_201",
          title:
            "秋季新品韩版宽松拼色字母刺绣印花白毛衣百搭黑色皮裙a字裙子半身裙女秋装女时尚套装两件套新款",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 2069,
          price: "70.00",
          cfav: 9067,
          item_url:
            "http://item.meilishuo.com/detail/1kmtqbw?acm=3.mce.2_4_1kmtqbw.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_1-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1kmtqbw?acm=3.mce.2_4_1kmtqbw.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_1-lc_201"
        },
        {
          tradeItemId: 610193147,
          image:
            "http://s3.mogucdn.com/p2/161229/127390137_6586hlk5j6bbig04211hd228bigg1_640x960.jpg",
          item_id: "1k6l44u",
          itemLikes: 12957,
          discountPrice: "49.00",
          discount: 700,
          acm:
            "3.mce.2_4_1k6l44u.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_2-lc_201",
          title:
            "2018秋装时尚套装新款韩版学生宽松显瘦百搭加棉加厚背心棉马甲女夹克外套宽松长袖纯色卫衣女",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 1480,
          price: "70.00",
          cfav: 12957,
          item_url:
            "http://item.meilishuo.com/detail/1k6l44u?acm=3.mce.2_4_1k6l44u.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_2-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1k6l44u?acm=3.mce.2_4_1k6l44u.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_2-lc_201"
        },
        {
          tradeItemId: 652893815,
          image:
            "http://s11.mogucdn.com/mlcdn/c45406/171122_3iif31e4c52alljkdi5db60jk6ji9_640x960.jpg",
          item_id: "1llfk86",
          itemLikes: 2363,
          discountPrice: "55.30",
          discount: 700,
          acm:
            "3.mce.2_4_1llfk86.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_3-lc_201",
          title:
            "秋装女新款韩版宽松显瘦中长款毛呢外套大衣针织上衣高领毛衣网纱半身裙冬季时尚套装两件套三件套",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 359,
          price: "79.00",
          cfav: 2363,
          item_url:
            "http://item.meilishuo.com/detail/1llfk86?acm=3.mce.2_4_1llfk86.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_3-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1llfk86?acm=3.mce.2_4_1llfk86.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_3-lc_201"
        },
        {
          tradeItemId: 654771930,
          image:
            "http://s3.mogucdn.com/mlcdn/c45406/171218_24hcl5a63je9dgjl0096c36ejfai5_640x960.jpg",
          item_id: "1lno2jw",
          itemLikes: 22130,
          discountPrice: "47.60",
          discount: 700,
          acm:
            "3.mce.2_4_1lno2jw.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_4-lc_201",
          title:
            "早春秋季女装时尚套装新款宽松韩版原宿字母棒球服外套侧边条纹休闲校裤高腰束脚运动裤子两件套女",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 3119,
          price: "68.00",
          cfav: 22130,
          item_url:
            "http://item.meilishuo.com/detail/1lno2jw?acm=3.mce.2_4_1lno2jw.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_4-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1lno2jw?acm=3.mce.2_4_1lno2jw.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_4-lc_201"
        },
        {
          tradeItemId: 673362217,
          image:
            "http://s3.mogucdn.com/mlcdn/c45406/181013_2h6g9elgch8g9fbb17l2ghahdbf19_640x854.jpg",
          item_id: "1m9sz9m",
          itemLikes: 1,
          discountPrice: "69.00",
          discount: 700,
          acm:
            "3.mce.2_4_1m9sz9m.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_5-lc_201",
          title:
            "秋冬时尚套装三件套新款韩版小清新宽松百搭撞色格子针织衫毛衣外套长袖衬衫女高腰显瘦半身裙短裙",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 1,
          price: "98.58",
          cfav: 1,
          item_url:
            "http://item.meilishuo.com/detail/1m9sz9m?acm=3.mce.2_4_1m9sz9m.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_5-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1m9sz9m?acm=3.mce.2_4_1m9sz9m.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_5-lc_201"
        },
        {
          tradeItemId: 671360411,
          image:
            "http://s11.mogucdn.com/mlcdn/c45406/180819_8050af3cfhi1lai0f6ihbl10c72c1_640x854.jpg",
          item_id: "1m7f626",
          itemLikes: 43,
          discountPrice: "59.00",
          discount: 700,
          acm:
            "3.mce.2_4_1m7f626.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_6-lc_201",
          title:
            "秋冬套装女新款原宿bf风学生高腰休闲九分裤子毛呢阔腿裤女韩版百搭宽松显瘦高领毛衣女时尚套装",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 4,
          price: "84.29",
          cfav: 43,
          item_url:
            "http://item.meilishuo.com/detail/1m7f626?acm=3.mce.2_4_1m7f626.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_6-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1m7f626?acm=3.mce.2_4_1m7f626.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_6-lc_201"
        },
        {
          tradeItemId: 673608430,
          image:
            "http://s11.mogucdn.com/mlcdn/c45406/181019_0l7cjl6kac692179441hgee14c004_640x853.jpg",
          item_id: "1ma3j84",
          itemLikes: 10,
          discountPrice: "108.00",
          discount: 700,
          acm:
            "3.mce.2_4_1ma3j84.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_7-lc_201",
          title:
            "秋冬季两件套装2018新款韩版宽松百搭连帽卫衣加厚立领无袖坎肩短款面包服马甲外套女时尚套装",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 6,
          price: "154.29",
          cfav: 10,
          item_url:
            "http://item.meilishuo.com/detail/1ma3j84?acm=3.mce.2_4_1ma3j84.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_7-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1ma3j84?acm=3.mce.2_4_1ma3j84.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_7-lc_201"
        },
        {
          tradeItemId: 673139654,
          image:
            "http://s11.mogucdn.com/mlcdn/c45406/181007_8678dj3i2ab7fi9l5ghgk30ij0180_640x854.jpg",
          item_id: "1m9jft0",
          itemLikes: 10,
          discountPrice: "69.00",
          discount: 700,
          acm:
            "3.mce.2_4_1m9jft0.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_8-lc_201",
          title:
            "冬季套装女新款韩版慵懒风宽松百搭字母印花保暖加绒长袖卫衣女上衣高腰修身毛衣半身裙时尚两件套",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 3,
          price: "98.58",
          cfav: 10,
          item_url:
            "http://item.meilishuo.com/detail/1m9jft0?acm=3.mce.2_4_1m9jft0.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_8-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1m9jft0?acm=3.mce.2_4_1m9jft0.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_8-lc_201"
        },
        {
          tradeItemId: 673342127,
          image:
            "http://s11.mogucdn.com/mlcdn/c45406/181012_62jd904ghjc0hihh334c3f9fe6jhd_640x854.jpg",
          item_id: "1m9s49i",
          itemLikes: 11,
          discountPrice: "58.00",
          discount: 700,
          acm:
            "3.mce.2_4_1m9s49i.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_9-lc_201",
          title:
            "冬季套装女新款韩版复古宽松中长款长袖加厚毛呢外套百搭打底针织衫毛衣显瘦黑色打底裤时尚三件套",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 1,
          price: "82.86",
          cfav: 11,
          item_url:
            "http://item.meilishuo.com/detail/1m9s49i?acm=3.mce.2_4_1m9s49i.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_9-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1m9s49i?acm=3.mce.2_4_1m9s49i.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_9-lc_201"
        },
        {
          tradeItemId: 672703761,
          image:
            "http://s3.mogucdn.com/mlcdn/c45406/180925_46b5if0kh042fh774k296aijkhll2_640x854.jpg",
          item_id: "1m90r4q",
          itemLikes: 5,
          discountPrice: "128.00",
          discount: 700,
          acm:
            "3.mce.2_4_1m90r4q.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_10-lc_201",
          title:
            "秋装女套装新款韩版港味bf风宽松百搭休闲拼色蝙蝠袖开衫外套高腰显瘦半身裙短裙时尚两件套",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 2,
          price: "182.86",
          cfav: 5,
          item_url:
            "http://item.meilishuo.com/detail/1m90r4q?acm=3.mce.2_4_1m90r4q.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_10-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1m90r4q?acm=3.mce.2_4_1m90r4q.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_10-lc_201"
        },
        {
          tradeItemId: 671689817,
          image:
            "http://s11.mogucdn.com/mlcdn/c45406/180828_1453j02208age06c38i43gk7bkfgd_640x854.jpg",
          item_id: "1m7taei",
          itemLikes: 3402,
          discountPrice: "59.00",
          discount: 700,
          acm:
            "3.mce.2_4_1m7taei.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_11-lc_201",
          title:
            "2018秋季新款三件套两件套韩版针织衫开衫毛衣外套宽松小清新格子衬衫显瘦牛仔裤子女时尚套装",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 1142,
          price: "84.29",
          cfav: 3402,
          item_url:
            "http://item.meilishuo.com/detail/1m7taei?acm=3.mce.2_4_1m7taei.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_11-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1m7taei?acm=3.mce.2_4_1m7taei.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_11-lc_201"
        },
        {
          tradeItemId: 673382993,
          image:
            "http://s11.mogucdn.com/mlcdn/c45406/181014_00f508gf16c3dbl0af78kd4dj2371_640x854.jpg",
          item_id: "1m9tvbu",
          itemLikes: 0,
          discountPrice: "138.00",
          discount: 700,
          acm:
            "3.mce.2_4_1m9tvbu.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_12-lc_201",
          title:
            "秋季新款套装韩版慵懒风宽松百搭拼色条纹中长款长袖薄卫衣女高腰显瘦灯笼阔腿呢料裤时尚两件套",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 0,
          price: "197.15",
          cfav: 0,
          item_url:
            "http://item.meilishuo.com/detail/1m9tvbu?acm=3.mce.2_4_1m9tvbu.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_12-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1m9tvbu?acm=3.mce.2_4_1m9tvbu.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_12-lc_201"
        },
        {
          tradeItemId: 673558602,
          image:
            "http://s3.mogucdn.com/mlcdn/c45406/181018_465hba8ecif9lbfeid845eb3b344f_640x854.jpg",
          item_id: "1ma1ebw",
          itemLikes: 1,
          discountPrice: "59.00",
          discount: 700,
          acm:
            "3.mce.2_4_1ma1ebw.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_13-lc_201",
          title:
            "秋季女新款韩版小清新条纹长袖卫衣女百搭高腰宽松九分直筒破洞牛仔裤哈伦裤子时尚套装两件套",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 2,
          price: "84.29",
          cfav: 1,
          item_url:
            "http://item.meilishuo.com/detail/1ma1ebw?acm=3.mce.2_4_1ma1ebw.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_13-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1ma1ebw?acm=3.mce.2_4_1ma1ebw.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_13-lc_201"
        },
        {
          tradeItemId: 660126836,
          image:
            "http://s11.mogucdn.com/mlcdn/c45406/180320_14hl7hd348057i55731khhl2bi29k_640x960.jpg",
          item_id: "1lu1mao",
          itemLikes: 5826,
          discountPrice: "68.99",
          discount: 700,
          acm:
            "3.mce.2_4_1lu1mao.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_14-lc_201",
          title:
            "秋季新款两件套宽松百搭学生显瘦娃娃领系带荷叶边长袖衬衫女高腰九分直筒阔腿裤休闲裤女时尚套装",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 59,
          price: "98.57",
          cfav: 5826,
          item_url:
            "http://item.meilishuo.com/detail/1lu1mao?acm=3.mce.2_4_1lu1mao.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_14-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1lu1mao?acm=3.mce.2_4_1lu1mao.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_14-lc_201"
        },
        {
          tradeItemId: 671346119,
          image:
            "http://s3.mogucdn.com/mlcdn/c45406/180818_7c1563g3khflfjf6k3jc06g87k2j8_640x854.jpg",
          item_id: "1m7ek06",
          itemLikes: 555,
          discountPrice: "118.00",
          discount: 700,
          acm:
            "3.mce.2_4_1m7ek06.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_15-lc_201",
          title:
            "网红同款套装时尚两件套秋季女新款韩版可爱俏皮小个子长袖卫衣女抽绳外套女装纯色显瘦半身裙子女",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 131,
          price: "168.58",
          cfav: 555,
          item_url:
            "http://item.meilishuo.com/detail/1m7ek06?acm=3.mce.2_4_1m7ek06.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_15-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1m7ek06?acm=3.mce.2_4_1m7ek06.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_15-lc_201"
        },
        {
          tradeItemId: 673179303,
          image:
            "http://s3.mogucdn.com/mlcdn/c45406/181008_4dc1fj3a5gie3cj60001h35icj2jl_640x854.jpg",
          item_id: "1m9l4zq",
          itemLikes: 4,
          discountPrice: "69.00",
          discount: 700,
          acm:
            "3.mce.2_4_1m9l4zq.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_16-lc_201",
          title:
            "秋季女套装新款宽松显瘦百搭气质短款长袖牛仔外套女韩版休闲背心裙子针织连衣裙女时尚套装两件套",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 2,
          price: "98.58",
          cfav: 4,
          item_url:
            "http://item.meilishuo.com/detail/1m9l4zq?acm=3.mce.2_4_1m9l4zq.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_16-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1m9l4zq?acm=3.mce.2_4_1m9l4zq.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_16-lc_201"
        },
        {
          tradeItemId: 673540672,
          image:
            "http://s11.mogucdn.com/mlcdn/c45406/181017_467ec5j08ckgcajdc32jjalac8dl5_640x854.jpg",
          item_id: "1ma0mns",
          itemLikes: 4,
          discountPrice: "69.00",
          discount: 700,
          acm:
            "3.mce.2_4_1ma0mns.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_17-lc_201",
          title:
            "秋冬时尚套装两件套新款韩版慵懒风宽松百搭气质休闲撞色针织衫毛衣高腰修身显瘦开叉针织半身裙女",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 4,
          price: "98.58",
          cfav: 4,
          item_url:
            "http://item.meilishuo.com/detail/1ma0mns?acm=3.mce.2_4_1ma0mns.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_17-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1ma0mns?acm=3.mce.2_4_1ma0mns.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_17-lc_201"
        },
        {
          tradeItemId: 671048814,
          image:
            "http://s3.mogucdn.com/mlcdn/c45406/180809_7ljbed5d78kflc7a07kfl8kfl8k91_640x854.jpg",
          item_id: "1m71t78",
          itemLikes: 1362,
          discountPrice: "59.00",
          discount: 700,
          acm:
            "3.mce.2_4_1m71t78.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_18-lc_201",
          title:
            "秋季女装新款韩版慵懒风宽松薄款长袖迷彩套头卫衣女显瘦修身弹力黑色毛边牛仔裤子时尚套装两件套",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 281,
          price: "84.29",
          cfav: 1362,
          item_url:
            "http://item.meilishuo.com/detail/1m71t78?acm=3.mce.2_4_1m71t78.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_18-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1m71t78?acm=3.mce.2_4_1m71t78.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_18-lc_201"
        },
        {
          tradeItemId: 673167848,
          image:
            "http://s3.mogucdn.com/mlcdn/c45406/181008_57hde227fc1cg48c99d7kg39fh3c6_640x854.jpg",
          item_id: "1m9knbc",
          itemLikes: 3,
          discountPrice: "59.00",
          discount: 700,
          acm:
            "3.mce.2_4_1m9knbc.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_19-lc_201",
          title:
            "春秋季女装新款学生韩版甜美粉色针织毛衣女宽松显瘦百搭高腰九分休闲裤哈伦裤子两件套时尚套装",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 2,
          price: "84.29",
          cfav: 3,
          item_url:
            "http://item.meilishuo.com/detail/1m9knbc?acm=3.mce.2_4_1m9knbc.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_19-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1m9knbc?acm=3.mce.2_4_1m9knbc.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_19-lc_201"
        },
        {
          tradeItemId: 671878663,
          image:
            "http://s11.mogucdn.com/mlcdn/c45406/180902_3c92fkjgeaf156b15f7d0212kfb0d_640x854.jpg",
          item_id: "1m81dty",
          itemLikes: 27,
          discountPrice: "69.00",
          discount: 700,
          acm:
            "3.mce.2_4_1m81dty.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_20-lc_201",
          title:
            "秋冬装新款韩版小清新气质宽松显瘦长袖v领毛衣女百搭高腰中长款网纱裙半身裙子时尚套装两件套",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 5,
          price: "98.58",
          cfav: 27,
          item_url:
            "http://item.meilishuo.com/detail/1m81dty?acm=3.mce.2_4_1m81dty.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_20-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1m81dty?acm=3.mce.2_4_1m81dty.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_20-lc_201"
        },
        {
          tradeItemId: 671369143,
          image:
            "http://s11.mogucdn.com/mlcdn/c45406/180819_19i9l0il453dg3cc4494ddj6c1lab_640x854.jpg",
          item_id: "1m7fjja",
          itemLikes: 290,
          discountPrice: "59.00",
          discount: 700,
          acm:
            "3.mce.2_4_1m7fjja.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_21-lc_201",
          title:
            "秋季新款韩版宽松文艺范长袖高领针织衫女系带开叉毛衣女装百搭九分休闲裤子阔腿裤两件套时尚套装",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 22,
          price: "84.29",
          cfav: 290,
          item_url:
            "http://item.meilishuo.com/detail/1m7fjja?acm=3.mce.2_4_1m7fjja.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_21-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1m7fjja?acm=3.mce.2_4_1m7fjja.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_21-lc_201"
        },
        {
          tradeItemId: 673016639,
          image:
            "http://s11.mogucdn.com/mlcdn/c45406/181004_6fk109k2hi79i00jab93add8h1gge_640x854.jpg",
          item_id: "1m9e5yu",
          itemLikes: 3,
          discountPrice: "69.00",
          discount: 700,
          acm:
            "3.mce.2_4_1m9e5yu.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_22-lc_201",
          title:
            "秋装女套装新款韩版慵懒风宽松百搭侧边开叉前短后长纯色卫衣高腰显瘦气质无袖连衣裙时尚两件套",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 2,
          price: "98.58",
          cfav: 3,
          item_url:
            "http://item.meilishuo.com/detail/1m9e5yu?acm=3.mce.2_4_1m9e5yu.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_22-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1m9e5yu?acm=3.mce.2_4_1m9e5yu.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_22-lc_201"
        },
        {
          tradeItemId: 671080645,
          image:
            "http://s3.mogucdn.com/mlcdn/c45406/180810_792fe0ifil00fhebk1c345b2ch9ab_640x854.jpg",
          item_id: "1m736bm",
          itemLikes: 145,
          discountPrice: "59.00",
          discount: 700,
          acm:
            "3.mce.2_4_1m736bm.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_23-lc_201",
          title:
            "秋季女装新款韩版宽松学院风前短后长中长款杏色衬衣衬衫女外套格子休闲裤子学生时尚套装两件套",
          isShelf: 0,
          shop_id: "1pzayc",
          itemSale: 34,
          price: "84.29",
          cfav: 145,
          item_url:
            "http://item.meilishuo.com/detail/1m736bm?acm=3.mce.2_4_1m736bm.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_23-lc_201",
          item_h5_url:
            "http://m.meilishuo.com/wap/detail/1m736bm?acm=3.mce.2_4_1m736bm.6011.0-41756.xSEtnr76nBiNW.sd_119_115-mid_6011-pos_23-lc_201"
        }
      ],
      nextPage: 1
    }
  });
}
// 在详情页面中的基本信息模块中 我们要展示的信息存在多个 并且他们是分散在网络请求的返回数据中 说明网络请求返回数据当中并没有都是有用的数据 所以我们应该封装一个方法用于筛选有用数据并整合到一个对象中
// 对于res而言 其中真正有作用的属性包括：itemInfo、columns、services
export class Goods {
  // 在js中 需要通过可以通过构造函数初始化变量
  constructor(itemInfo, columns, services) {
    // 获取标题
    this.title = itemInfo.title;
    // 获取打折后价格
    this.price = itemInfo.price;
    // 获取打折前价格
    this.oldPrice = itemInfo.oldPrice;
    // 获取打折信息描述
    this.discountDesc = itemInfo.discountDesc;
    // 获取columns
    this.columns = columns;
    // 获取services
    this.services = services;
    // 设置一个真实的价格 用于在购物车中进行展示 这里我们选取lowNowPrice作为我们真实价格的值
    this.realPrice = itemInfo.lowNowPrice;
  }
}
// 如果我们要展示店铺信息的话 所需要的真正有用的属性并非整个res 而是需要筛选以后封装到一个类中 现在我们就定义一个店铺类 内置一些店铺有关的属性
export class Shop {
  constructor(shopInfo) {
    // 获取店铺图片url
    this.shopLogo = shopInfo.shopLogo;
    // 获取店铺名称
    this.name = shopInfo.name;
    // 获取店铺销量
    this.cSells = shopInfo.cSells;
    // 获取店铺宝贝数量
    this.cGoods = shopInfo.cGoods;
    // 获取店铺评分有关的一些参数
    this.score = shopInfo.score;
  }
}
