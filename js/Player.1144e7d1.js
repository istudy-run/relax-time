(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Player"],{"2b45":function(t,r,c){"use strict";c("62fb")},"62fb":function(t,r,c){},bf5c:function(t,r,c){"use strict";c.r(r);var l=function(){var t=this,r=t.$createElement,c=t._self._c||r;return c("div",{staticClass:"player"},[c("aplayer",{attrs:{audio:t.finalAudio,lrcType:t.playerOptions.lrcType,fixed:t.playerOptions.fixed,autoplay:t.playerOptions.autoplay,listMaxHeight:t.playerOptions.listMaxHeight},on:{listSwitch:t.listSwitch}}),t._v(" "),c("aplayer",{attrs:{audio:t.finalAudio,lrcType:t.playerOptions.lrcType,fixed:!0,autoplay:t.playerOptions.autoplay,listMaxHeight:t.playerOptions.listMaxHeight},on:{listSwitch:t.listSwitch}})],1)},i=[],e=c("f121"),o={name:"Player",components:{},data(){return{playerOptions:{lrcType:3,fixed:!1,autoplay:!1,listMaxHeight:330,audio:[{name:"骄傲的少年",artist:"南征北战NZBZ",url:"music/南征北战NZBZ - 骄傲的少年.mp3",lrc:"lrc/南征北战NZBZ - 骄傲的少年.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000002TY2251wLIpu_1.jpg"},{name:"你的答案",artist:"阿冗",url:"music/阿冗 - 你的答案.mp3",lrc:"lrc/阿冗 - 你的答案.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000001ag9vZ3zT8OM_1.jpg"},{name:"电台情歌",artist:"莫文蔚",url:"music/莫文蔚 - 电台情歌.mp3",lrc:"lrc/莫文蔚 - 电台情歌.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000004eNxMk2QyCn4_1.jpg"},{name:"一路生花",artist:"温奕心",url:"music/一路生花 - 温奕心.mp3",lrc:"lrc/一路生花 - 温奕心.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000001MyK3Y47zLur_2.jpg"},{name:"曾经的你",artist:"许巍",url:"music/许巍 - 曾经的你.mp3",lrc:"lrc/曾经的你-许巍.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000000lrk6m1fk7tl_2.jpg"},{name:"遥远的歌",artist:"刘惜君",url:"music/刘惜君 - 遥远的歌.mp3",lrc:"lrc/遥远的歌-刘惜君.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000001wmoL43SVFjj_1.jpg"},{name:"大田後生仔",artist:"丫蛋蛋",url:"https://music.163.com/song/media/outer/url?id=1396973729.mp3",lrc:"lrc/大田後生仔-丫蛋蛋.lrc",cover:"https://p3.music.126.net/zBSqcj15lxJ0vdoSAkh63Q==/109951164427560286.jpg"},{name:"少年",artist:"梦然",url:"music/梦然 - 少年.mp3",lrc:"lrc/少年 - 梦然.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000000EI9tu27e5iy_1.jpg"},{name:"野子",artist:"贾跃亭",url:"music/贾跃亭 - 野子.mp3",lrc:"lrc/野子-贾跃亭.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000002yB9Bb1naOLj_1.jpg"},{name:"Wake (Live)",artist:"Hillsong Young & Free",url:"music/Hillsong Young & Free - Wake (Live).mp3",lrc:"lrc/Wake (Live)-Hillsong Young & Free.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000003t1iTv2osUdT_1.jpg"},{name:"出山",artist:"花粥,王胜娚",url:"music/出山-花粥,王胜娚.mp3",lrc:"lrc/出山-花粥,王胜娚.lrc",cover:"https://y.gtimg.cn/music/photo_new/T002R300x300M000001Rjg911VJxSN.jpg"},{name:"起风了",artist:"买辣椒也用券",url:"music/买辣椒也用券 - 起风了.mp3",lrc:"lrc/起风了-买辣椒也用券.lrc",cover:"https://y.gtimg.cn/music/photo_new/T002R300x300M000003j3NMw1ZBpsv.jpg"},{name:"我是真的爱上你",artist:"曲肖冰",url:"music/我是真的爱上你 - 曲肖冰.mp3",lrc:"lrc/我是真的爱上你 - 曲肖冰.lrc",cover:"https://p1.music.126.net/WaaQt6dYDkYizq97_iTH3w==/109951163436657260.jpg?param=130y130"}]}}},computed:{finalAudio(){return this.playerOptions.audio.map(t=>({...t,url:t.url.includes("http")?t.url:e["a"]+t.url,lrc:t.lrc?e["a"]+t.lrc:void 0}))},randomColor(){return"#"+(16777215*Math.random()<<0).toString(16)}},methods:{listSwitch(t){const{artist:r,name:c}=t;document.title=`${c} - ${r}`}}},s=o,p=(c("2b45"),c("2877")),a=Object(p["a"])(s,l,i,!1,null,null,null);r["default"]=a.exports}}]);