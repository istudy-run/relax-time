(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd3f9"],{"2ad8":function(e,l,a){"use strict";a.r(l);var s=function(){var e=this,l=e._self._c;return l("div",[l("Card",{attrs:{shadow:""}},[e._v(" 树状表格组件tree-table-vue，基于"),l("a",{attrs:{href:"https://github.com/MisterTaki/vue-table-with-tree-grid"}},[e._v("vue-table-with-tree-grid")]),e._v("进行开发，修复了一些bug，添加了一些新属性 "),l("p",[l("b",[e._v("支持使用slot-scope进行自定义列渲染内容")])]),l("p",[e._v("文档请看"),l("a",{attrs:{href:"https://github.com/lison16/tree-table-vue"}},[e._v("https://github.com/lison16/tree-table-vue")])]),l("tree-table",{attrs:{"expand-key":"sex","expand-type":!1,selectable:!1,columns:e.columns,data:e.data},scopedSlots:e._u([{key:"likes",fn:function(a){return[l("Button",{on:{click:function(l){return e.handle(a)}}},[e._v("123")])]}}])})],1)],1)},t=[],o={name:"tree_table",data:function(){return{columns:[{title:"name",key:"name",width:"400px"},{title:"sex",key:"sex",minWidth:"50px"},{title:"score",key:"score"},{title:"likes",key:"likes",minWidth:"200px",type:"template",template:"likes"}],data:[{name:"Jack",sex:"male",likes:["football","basketball"],score:10,children:[{name:"Ashley",sex:"female",likes:["football","basketball"],score:20,children:[{name:"Ashley",sex:"female",likes:["football","basketball"],score:20},{name:"Taki",sex:"male",likes:["football","basketball"],score:10,children:[{name:"Ashley",sex:"female",likes:["football","basketball"],score:20},{name:"Taki",sex:"male",likes:["football","basketball"],score:10,children:[{name:"Ashley",sex:"female",likes:["football","basketball"],score:20},{name:"Taki",sex:"male",likes:["football","basketball"],score:10}]}]}]},{name:"Taki",sex:"male",likes:["football","basketball"],score:10}]},{name:"Tom",sex:"male",likes:["football","basketball"],score:20,children:[{name:"Ashley",sex:"female",likes:["football","basketball"],score:20,children:[{name:"Ashley",sex:"female",likes:["football","basketball"],score:20},{name:"Taki",sex:"male",likes:["football","basketball"],score:10}]},{name:"Taki",sex:"male",likes:["football","basketball"],score:10,children:[{name:"Ashley",sex:"female",likes:["football","basketball"],score:20},{name:"Taki",sex:"male",likes:["football","basketball"],score:10}]}]},{name:"Tom",sex:"male",likes:["football","basketball"],score:20},{name:"Tom",sex:"male",likes:["football","basketball"],score:20,children:[{name:"Ashley",sex:"female",likes:["football","basketball"],score:20},{name:"Taki",sex:"male",likes:["football","basketball"],score:10}]}]}},methods:{handle:function(e){console.log(e)}}},b=o,i=a("2877"),n=Object(i["a"])(b,s,t,!1,null,null,null);l["default"]=n.exports}}]);