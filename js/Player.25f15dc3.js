(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Player"],{"217d":function(t,r){function i(t,r){var i,e=0,o=t.length;for(e;e<o;e++)if(i=r(t[e],e),!1===i)break}function e(t){return"[object Array]"===Object.prototype.toString.apply(t)}function o(t){return"function"===typeof t}t.exports={isFunction:o,isArray:e,each:i}},"8e95":function(t,r,i){var e=i("c195");t.exports=new e},9020:function(t,r){function i(t){this.options=t,!t.deferSetup&&this.setup()}i.prototype={constructor:i,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},t.exports=i},bcf7:function(t,r,i){var e=i("9020"),o=i("217d").each;function s(t,r){this.query=t,this.isUnconditional=r,this.handlers=[],this.mql=window.matchMedia(t);var i=this;this.listener=function(t){i.mql=t.currentTarget||t,i.assess()},this.mql.addListener(this.listener)}s.prototype={constuctor:s,addHandler:function(t){var r=new e(t);this.handlers.push(r),this.matches()&&r.on()},removeHandler:function(t){var r=this.handlers;o(r,(function(i,e){if(i.equals(t))return i.destroy(),!r.splice(e,1)}))},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){o(this.handlers,(function(t){t.destroy()})),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var t=this.matches()?"on":"off";o(this.handlers,(function(r){r[t]()}))}},t.exports=s},bf5c:function(t,r,i){"use strict";i.r(r);var e=function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",{staticClass:"player"},[i("aplayer",{ref:"player1",class:[t.playerOptions.listFolded?"hidden-50":"hidden-100"],attrs:{audio:t.finalAudio,volume:t.playerOptions.volume,lrcType:t.playerOptions.lrcType,fixed:t.playerOptions.fixed,autoplay:t.playerOptions.autoplay,listMaxHeight:t.playerOptions.listMaxHeight,listFolded:t.playerOptions.listFolded},on:{"update:listFolded":function(r){t.$set(t.playerOptions,"listFolded",r)},playing:function(r){t.handlePlaying("player1")}}}),t._v(" "),t.isMobile?t._e():i("aplayer",{ref:"player2",attrs:{audio:t.finalAudio,volume:t.playerOptions.volume,lrcType:t.playerOptions.lrcType,fixed:!0,autoplay:t.playerOptions.autoplay,listMaxHeight:t.playerOptions.listMaxHeight},on:{playing:function(r){t.handlePlaying("player2")}}})],1)},o=[],s=[{name:"猴哥",artist:"张伟进",url:"cartoon/张伟进 - 猴哥.mp3",lrc:"cartoon/张伟进 - 猴哥.lrc",cover:"http://p2.music.126.net/yxCLZDSqZ9i9t6m23sLJFA==/94558000006020.jpg"},{name:"白龙马",artist:"吸引力合唱组",url:"cartoon/白龙马 - 西游记动画片尾曲.mp3",lrc:"cartoon/白龙马 - 西游记动画片尾曲.lrc",cover:"http://p2.music.126.net/yxCLZDSqZ9i9t6m23sLJFA==/94558000006020.jpg"},{name:"光能使者",artist:"解小东",url:"cartoon/解小东 - 光能使者.mp3",lrc:"cartoon/解小东 - 光能使者.lrc",cover:"http://p2.music.126.net/DEj4dO3rui4b9cZbKyM0mQ==/109951163801855286.jpg"},{name:"多啦A梦",artist:"陈慧琳",url:"cartoon/陈慧琳 - 多啦A梦.mp3",lrc:"cartoon/陈慧琳 - 多啦A梦.lrc",cover:"http://p2.music.126.net/VizXq5Bjhr7RQcL9uvmGMQ==/6017627139011604.jpg"},{name:"霞光",artist:"曲锦楠",url:"cartoon/曲锦楠 - 霞光.mp3",lrc:"cartoon/曲锦楠 - 霞光.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000004OdxJk0Hr08f_3.jpg"},{name:"蓝皮鼠和大脸猫",artist:"章中锦",url:"cartoon/章中锦 - 蓝皮鼠和大脸猫.mp3",lrc:"cartoon/章中锦 - 蓝皮鼠和大脸猫.lrc",cover:"http://p2.music.126.net/MrX0biLRxf3HlWxhcOQPDw==/109951167920186287.jpg"},{name:"黑猫警长",artist:"儿歌",url:"cartoon/儿歌 - 黑猫警长.mp3",lrc:"cartoon/儿歌 - 黑猫警长.lrc",cover:"http://p1.music.126.net/CXDLF-VNLgBbVbIZ7PveQA==/109951165030823761.jpg"},{name:"诺言",artist:"陈洁丽",url:"cartoon/陈洁丽 - 诺言.mp3",lrc:"cartoon/陈洁丽 - 诺言.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000000vOKeK2dW5NG_1.jpg"},{name:"舒克和贝塔",artist:"金复载",url:"cartoon/金复载 - 舒克和贝塔.mp3",lrc:"cartoon/金复载 - 舒克和贝塔.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000003El6SP2cJP4w_1.jpg"},{name:"brave heart",artist:"宮崎歩 (みやざき あゆみ)",url:"cartoon/宮崎歩 (みやざき あゆみ) - brave heart (勇敢的心).mp3",lrc:"cartoon/宮崎歩 (みやざき あゆみ) - brave heart (勇敢的心).lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000003hS7PE1Sk8yu_1.jpg"}],c=[{name:"I Took A Pill In Lbiza",artist:"EK-U",url:"music/EK-U - I Took A Pill In Lbiza (Remix).mp3",lrc:"music/EK-U - I Took A Pill In Lbiza (Remix).lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000003ayjkc1xNuP5_1.jpg"},{name:"Conquest of Paradise",artist:"Vangelis",url:"music/Vangelis - Conquest of Paradise.mp3",lrc:"music/Vangelis - Conquest of Paradise.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000003z1iDu0b1MED_3.jpg"},{name:"在你的身边 (0_8x)",artist:"慢热的气球",url:"music/慢热的气球 - 在你的身边 (0_8x).mp3",lrc:"music/慢热的气球 - 在你的身边 (0_8x).lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000004c8sQo0xptvT_1.jpg"},{name:"Wild",artist:"红月7iv",url:"music/红月7iv - Wild.mp3",lrc:"music/红月7iv - Wild.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000002aMN350y9VAd_4.jpg"},{name:"Shots",artist:"Imagine Dragons _ Broiler",url:"music/Imagine Dragons _ Broiler - Shots (Broiler Remix).mp3",lrc:"music/Imagine Dragons _ Broiler - Shots (Broiler Remix).lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000003NRVBZ3GUsMp_1.jpg"},{name:"起风了",artist:"陈敏佳",url:"music/陈敏佳 - 起风了 (间奏).mp3",lrc:"music/陈敏佳 - 起风了 (间奏).lrc",cover:"https://y.qq.com/music/photo_new/T062R300x300M000003ONli91ozv87.jpg"},{name:"起风了",artist:"林俊杰",url:"music/林俊杰-起风了.mp3",lrc:"music/林俊杰-起风了.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000001GRD0x3s1xvv_1.jpg"},{name:"起风了",artist:"买辣椒也用券",url:"music/买辣椒也用券 - 起风了.mp3",lrc:"music/起风了-买辣椒也用券.lrc",cover:"https://y.gtimg.cn/music/photo_new/T002R300x300M000003j3NMw1ZBpsv.jpg"},{name:"少年",artist:"梦然",url:"music/梦然 - 少年.mp3",lrc:"music/少年 - 梦然.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000000EI9tu27e5iy_1.jpg"},{name:"是你",artist:"梦然",url:"music/梦然 - 是你.mp3",lrc:"music/梦然 - 是你.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000004WRcZU2SoiXN_1.jpg"},{name:"出山",artist:"花粥 王胜娚",url:"music/出山-花粥,王胜娚.mp3",lrc:"music/出山-花粥,王胜娚.lrc",cover:"https://y.gtimg.cn/music/photo_new/T002R300x300M000001Rjg911VJxSN.jpg"},{name:"野子",artist:"贾跃亭",url:"music/贾跃亭 - 野子.mp3",lrc:"music/野子-贾跃亭.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000002yB9Bb1naOLj_1.jpg"},{name:"你的答案",artist:"阿冗",url:"music/阿冗 - 你的答案.mp3",lrc:"music/阿冗 - 你的答案.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000001ag9vZ3zT8OM_1.jpg"},{name:"曾经的你",artist:"许巍",url:"music/许巍 - 曾经的你.mp3",lrc:"music/曾经的你-许巍.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000000lrk6m1fk7tl_2.jpg"},{name:"一路生花",artist:"温奕心",url:"music/一路生花 - 温奕心.mp3",lrc:"music/一路生花 - 温奕心.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000001MyK3Y47zLur_2.jpg"},{name:"遥远的歌",artist:"刘惜君",url:"music/刘惜君 - 遥远的歌.mp3",lrc:"music/遥远的歌-刘惜君.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000001wmoL43SVFjj_1.jpg"},{name:"电台情歌",artist:"莫文蔚",url:"music/莫文蔚 - 电台情歌.mp3",lrc:"music/莫文蔚 - 电台情歌.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000004eNxMk2QyCn4_1.jpg"},{name:"Wake (Live)",artist:"Hillsong Young & Free",url:"music/Hillsong Young & Free - Wake (Live).mp3",lrc:"music/Wake (Live)-Hillsong Young & Free.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000003t1iTv2osUdT_1.jpg"},{name:"大田後生仔",artist:"丫蛋蛋",url:"https://music.163.com/song/media/outer/url?id=1396973729.mp3",lrc:"music/大田後生仔-丫蛋蛋.lrc",cover:"https://p3.music.126.net/zBSqcj15lxJ0vdoSAkh63Q==/109951164427560286.jpg"},{name:"骄傲的少年",artist:"南征北战NZBZ",url:"music/南征北战NZBZ - 骄傲的少年.mp3",lrc:"music/南征北战NZBZ - 骄傲的少年.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000002TY2251wLIpu_1.jpg"},{name:"美丽的神话",artist:"胡歌 _ 白冰",url:"music/胡歌 _ 白冰 - 美丽的神话.mp3",lrc:"music/胡歌 _ 白冰 - 美丽的神话.lrc",cover:"https://y.qq.com/music/photo_new/T002R300x300M000002XgTiO4TM9Fj_1.jpg"},{name:"我是真的爱上你",artist:"曲肖冰",url:"music/我是真的爱上你 - 曲肖冰.mp3",lrc:"music/我是真的爱上你 - 曲肖冰.lrc",cover:"https://p1.music.126.net/WaaQt6dYDkYizq97_iTH3w==/109951163436657260.jpg?param=130y130"}],n=i("f121"),a=i("8e95"),l=i.n(a);const p={desktop:"desktop",tablet:"tablet",mobile:"mobile"},m=function(t){const r={match:()=>{t&&t(p.desktop)}},i={match:()=>{t&&t(p.tablet)}},e={match:()=>{t&&t(p.mobile)}};l.a.register("screen and (max-width: 576px)",e).register("screen and (min-width: 576px) and (max-width: 1199px)",i).register("screen and (min-width: 1200px)",r)};var u={name:"Player",components:{},data(){return{isMobile:!1,playerOptions:{volume:1,lrcType:3,fixed:!1,autoplay:!1,listFolded:!0,listMaxHeight:330,audio:[]}}},computed:{finalAudio(){const t="/"!==this.$route.path?s:c;return t.map(t=>({...t,url:t.url.includes("http")?t.url:n["a"]+t.url,lrc:t.lrc?n["a"]+t.lrc:void 0}))},randomColor(){return"#"+(16777215*Math.random()<<0).toString(16)}},created(){m(t=>this.isMobile=t===p.mobile)},methods:{handlePlaying(t){const r=this.$refs[t].currentMusic,{artist:i,name:e}=r;document.title=`${e} - ${i}`}}},h=u,d=i("2877"),y=Object(d["a"])(h,e,o,!1,null,null,null);r["default"]=y.exports},c195:function(t,r,i){var e=i("bcf7"),o=i("217d"),s=o.each,c=o.isFunction,n=o.isArray;function a(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}a.prototype={constructor:a,register:function(t,r,i){var o=this.queries,a=i&&this.browserIsIncapable;return o[t]||(o[t]=new e(t,a)),c(r)&&(r={match:r}),n(r)||(r=[r]),s(r,(function(r){c(r)&&(r={match:r}),o[t].addHandler(r)})),this},unregister:function(t,r){var i=this.queries[t];return i&&(r?i.removeHandler(r):(i.clear(),delete this.queries[t])),this}},t.exports=a}}]);