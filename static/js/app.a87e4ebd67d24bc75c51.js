webpackJsonp([6],{0:function(t,n,e){e("briU"),t.exports=e("NHnr")},"4ml/":function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var a=e("VU/8")({name:"App"},r,!1,function(t){e("SlPU")},null,null).exports,u=e("mtWM"),c=e.n(u),i=e("/ocq");o.a.use(i.a);var s=new i.a({routes:[{path:"/",component:function(){return e.e(1).then(e.bind(null,"Pt1D"))},redirect:"home",children:[{path:"home",component:function(){return e.e(0).then(e.bind(null,"YO3n"))}},{path:"cart",component:function(){return e.e(3).then(e.bind(null,"jzGn"))}},{path:"mine",component:function(){return e.e(2).then(e.bind(null,"oykN"))}}]},{path:"/product",component:function(){return e.e(4).then(e.bind(null,"FoiF"))}}]}),p=(e("briU"),{path_style:"@/assets/style/",path_js:"@/assets/js/"}),l=e("Fd2+"),m=(e("4ml/"),e("RYit")),d=e.n(m);e("s0L2");l.b.use("en-US",d.a),o.a.use(l.c),o.a.use(l.a),o.a.prototype.global=p,o.a.prototype.axios=c.a,o.a.config.productionTip=!1,e("qs/E"),new o.a({el:"#app",router:s,components:{App:a},template:"<App/>"})},SlPU:function(t,n){},"qs/E":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("zNUS").Random,r=function(t,n){for(var e=[],r={},a=0;a<o.natural(t.min,t.max);a++)r=n(),e.push(r);return e},a=e("zNUS");a.mock("pro/info/getList/","get",function(){return{msg:"success",code:200,data:r({min:3,max:5},function(){return{title:o.csentence(5,7),img:o.image("400x300",o.color())}})}}),a.mock("pro/category/getList","get",function(){return{msg:"success",code:200,data:r({min:3,max:25},function(){return{categoryName:o.word(5),categoryId:o.natural(0,5),categoryCode:o.natural(0,5)+"",parentId:3,categoryThumb:o.image("100x100",o.color()),categoryLevel:1,categoryStatus:1}})}}),a.mock("pro/product/getList","get",function(){return{msg:"success",code:200,data:r({min:1,max:8},function(){return{productName:"【设计师合作款】女装  双面针织大衣  416550",productDescription:"2019Uniqlo U 色彩新美学 摩登新经典",productPics:["https://www.uniqlo.cn/hmall/test/u0000000005573/main/first/1000/1.jpg","https://www.uniqlo.cn/hmall/test/u0000000005573/main/other1/1000/2.jpg","https://www.uniqlo.cn/hmall/test/u0000000005573/main/other2/1000/3.jpg","https://www.uniqlo.cn/hmall/test/u0000000005573/main/other3/1000/4.jpg"],price:"5.00",num:2e3}})}})},s0L2:function(t,n){}},[0]);
//# sourceMappingURL=app.a87e4ebd67d24bc75c51.js.map