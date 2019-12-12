const state = {
  shoppingCartList: [{
      id: 1,
      status: false,
      img: "https://img.youpin.mi-img.com/800_pic/f3694056a97e0ebbf881c57ac1d9836e.png@base@tag=imgScale&F=webp",
      info: "Snoops折叠式手机三轴稳定器",
      price: 79,
      count: 1
    },
    {
      id: 2,
      status: false,
      img: "https://img.youpin.mi-img.com/shopmain/abd55ae9525855a26fb2678da5b2ef24.png@base@tag=imgScale&F=webp?w=800&h=800",
      info: "网易有道英语学习机4G版",
      price: 799,
      count: 1
    },
    {
      id: 3,
      status: false,
      img: "https://img.youpin.mi-img.com/shopmain/ed1e2eacf639c78c0e6c984f7256b79e.png@base@tag=imgScale&F=webp?w=800&h=800",
      info: "fizz 横式A4文件板夹",
      price: 12.8,
      count: 1
    },
    {
      id: 4,
      status: false,
      img: "https://img.youpin.mi-img.com/800_pic/b6b3d52bace17573fd11534e3d48137a.png@base@tag=imgScale&F=webp",
      info: "YSL圣罗兰迷魅纯漾方管唇膏",
      price: 232,
      count: 1
    },
    {
      id: 5,
      status: false,
      img: "https://img.youpin.mi-img.com/shopmain/2cb662b67843c5c1fb196bbb057be718.png@base@tag=imgScale&F=webp?w=800&h=800",
      info: "小米立式无线充电器（通用快充20W）",
      price: 99,
      count: 1
    },
    {
      id: 6,
      status: false,
      img: "https://img.youpin.mi-img.com/shopmain/75f92f1e5921578d9fb8ccfff5a92d06.png@base@tag=imgScale&F=webp?w=800&h=800",
      info: "PMA酷轻松石墨烯发热暖手宝移动电源",
      price: 85,
      count: 1
    },
    {
      id: 7,
      status: false,
      img: "https://img.youpin.mi-img.com/800_pic/8ffcc430f88f200f8477c014ec8817aa.png@base@tag=imgScale&F=webp",
      info: "小米小爱音箱 Play 白色",
      price: 79,
      count: 1
    },
    {
      id: 8,
      status: false,
      img: "https://img.youpin.mi-img.com/shopmain/d64f75bd2e93d352b82fba5ec9a9a9fc.png@base@tag=imgScale&F=webp?w=800&h=800",
      info: "洋河梦之蓝M3系列蓝色经典浓香型白酒40.8/45/52度",
      price: 499,
      count: 1
    },
    {
      id: 9,
      status: false,
      img: "https://img.youpin.mi-img.com/800_pic/d45ac00ec411d783ffbe66a9b01b48bd.png@base@tag=imgScale&F=webp",
      info: "HIMO 电动自行车T1",
      price: 3699,
      count: 1
    },
    {
      id: 10,
      status: false,
      img: "https://img.youpin.mi-img.com/shopmain/a00b04657365678d07f00420e028d927.png@base@tag=imgScale&F=webp?w=800&h=800",
      info: "智能音箱伴侣（小爱触屏音箱版）",
      price: 69,
      count: 1
    },
    {
      id: 11,
      status: false,
      img: "https://img.youpin.mi-img.com/800_pic/4d788b64e05e9835f6dc27518c987bb8.png@base@tag=imgScale&F=webp",
      info: "ZMI苹果PD快充套装",
      price: 35,
      count: 1
    },
    {
      id: 12,
      status: false,
      img: "https://img.youpin.mi-img.com/800_pic/fcfbbfeae1d3441596ad9dd1f1df1782.png@base@tag=imgScale&F=webp",
      info: "米家插线板（无USB版）",
      price: 24.9,
      count: 1
    },
    {
      id: 13,
      status: false,
      img: "https://img.youpin.mi-img.com/shopmain/0247f5a4bcfa2f4fa1be8e3c6664e280.png@base@tag=imgScale&F=webp?w=800&h=800",
      info: "茅台赖茅传承蓝 酱香型白酒 53度 500ml",
      price: 388,
      count: 1
    },
    {
      id: 14,
      status: false,
      img: "https://img.youpin.mi-img.com/shopmain/efc3ad37968eedca3f45730685b13867.png@base@tag=imgScale&F=webp?w=800&h=800",
      info: "今世缘 国缘对开/国缘四开 42度 500ml",
      price: 308,
      count: 1
    },
    {
      id: 15,
      status: false,
      img: "https://img.youpin.mi-img.com/shopmain/d7b7263f4b8a1b57d984b837ff7f9b77.png@base@tag=imgScale&F=webp?w=800&h=800",
      info: "户外休闲中长款三合一羽绒服 棉花史密斯",
      price: 499,
      count: 1
    },
  ]
}
const actions = {

}
const getters = {

}
const mutations = {
  'UPDATE_LIST' (state,{id,status}) {
    state.shoppingCartList.forEach((item) => {
      if (item.id === id) {
       item.status=status
     }
     })
   }
}
export default {
  state,
  actions,
  getters,
  mutations
}