webpackJsonp([1],{"1PPw":function(t,e){},"4flH":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s=n("//Fk"),r=n.n(s),o=n("NYxO"),a=n("fZjL"),c=n.n(a),l="https://api.github.com",u="Joldine",d="joldnine.github.io",f="31ac025ebb27c898d056e7b7bc9f4ab52a8d3c50";var p=function(t){var e=encodeURIComponent;return"?"+c()(t).map(function(n){return e(n)+"="+e(t[n])}).join("&")};i.default.use(o.a);var h=new o.a.Store({state:{articles:[]},mutations:{ADD_ARTICLE:function(t,e){t.articles.push(e)},CLEAR_ARTICLE:function(t){t.articles=[]}},actions:{requestArticleList:function(t,e){var n=t.commit,i={page:e,size:66};return new r.a(function(t,e){var s,r,o,a,c;(s=i,r=s.page,o=void 0===r?1:r,a=s.size,c=l+"/repos/"+u+"/"+d+"/issues"+p({filter:"created",page:o,per_page:void 0===a?10:a,access_token:f}),fetch(c).then(function(t){return t.json()})).then(function(e){e.forEach(function(t){t.labels.find(function(t){return"Hide"===t.name})||n("ADD_ARTICLE",t)}),t()})})},requestArticle:function(t,e){var n=t.commit;return new r.a(function(t,i){(function(t){var e=l+"/repos/"+u+"/"+d+"/issues/"+t+p({access_token:f});return fetch(e).then(function(t){return t.json()})})(e).then(function(e){n("ADD_ARTICLE",e),t()})})}},getters:{getArticles:function(t){return t.articles},getArticleById:function(t){return function(e){return t.articles.find(function(t){return t.number===parseInt(e)})}},isArticlesEmpty:function(t){return 0===t.articles.length},isArticleExisted:function(t){return function(e){return void 0!==t.articles.find(function(t){return t.number===parseInt(e)})}}}}),v=function(){window.smoothscroll=function(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>0&&(window.requestAnimationFrame(window.smoothscroll),window.scrollTo(0,Math.floor(t-t/5)))},window.smoothscroll()},m={name:"BackToTop",props:{visibleOffset:{type:[String,Number],default:50},right:{type:String,default:"64px"},bottom:{type:String,default:"80px"}},data:function(){return{visible:!1}},created:function(){var t=this;window.onscroll=function(){t.visible=window.pageYOffset>parseInt(t.visibleOffset)}},methods:{backToTop:function(){v()}}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"back-to-top",style:"bottom:"+this.bottom+";right:"+this.right+";",on:{click:this.backToTop}},[e("el-tag",[e("i",{staticClass:"el-icon-arrow-up"})])],1)])},staticRenderFns:[]};var _={name:"app",components:{BackToTop:n("VU/8")(m,g,!1,function(t){n("4flH")},"data-v-c3dd21e4",null).exports}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("el-row",[e("el-col",[e("span",{staticClass:"header-title"},[this._v("Joldnine's Blog")])])],1),this._v(" "),e("el-row",[e("el-col",[e("span",{staticClass:"header-quote"},[this._v("Only stop learning when die.")])])],1),this._v(" "),e("el-row",[e("el-col",{attrs:{xs:1,sm:3,md:4,lg:5,xl:6}},[e("span",[this._v(" ")])]),this._v(" "),e("el-col",{attrs:{xs:22,sm:18,md:16,lg:14,xl:12}},[e("router-view")],1)],1),this._v(" "),e("back-to-top")],1)},staticRenderFns:[]};var w=n("VU/8")(_,b,!1,function(t){n("v8/F")},null,null).exports,A=n("/ocq"),C=n("EFqf"),T=n.n(C),L={name:"ArticleList",data:function(){return{loading:!1}},computed:{articleList:{get:function(){return this.$store.getters.getArticles}}},created:function(){this.initArticleList()},methods:{initArticleList:function(){var t=this;this.loading=!0,this.$store.commit("CLEAR_ARTICLE"),this.$store.dispatch("requestArticleList",1).then(function(){t.loading=!1}).catch(function(){t.loading=!1})},goToContent:function(t){this.$router.push("/article/"+t)},compiledMarkdown:function(t){return T()(t.substring(0,t.indexOf("\n")))}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"article-list-search"}),t._v(" "),t.loading?n("el-button",{attrs:{loading:t.loading}}):t._e(),t._v(" "),t._l(t.articleList,function(e){return n("div",{key:e.number,staticClass:"article-list-item"},[n("div",{staticClass:"article-list-item-title",on:{click:function(n){t.goToContent(e.number)}}},[n("span",[t._v(t._s(e.title))])]),t._v(" "),n("div",{staticClass:"article-list-item-content"},[n("div",{domProps:{innerHTML:t._s(t.compiledMarkdown(e.body))}})]),t._v(" "),n("div",{staticClass:"article-list-item-date"},[n("div",[t._v(t._s(e.created_at.split("T")[0]))])])])})],2)},staticRenderFns:[]};var E=n("VU/8")(L,k,!1,function(t){n("1PPw")},"data-v-58cb1f06",null).exports,y={name:"ArticleContent",data:function(){return{article:{body:"",created_at:"",labels:[]},number:this.$route.params.number,loading:!0}},created:function(){this.getArticleById(),v()},computed:{compiledMarkdown:function(){return T()(this.article.body,{sanitize:!0,breaks:!0})},getLabelsStr:function(){var t,e=this.article.labels,n=[];return e.forEach(function(t){n.push(t.name)}),t=n.join(", "),t=e.length>0?'<i class="el-icon-info" /> '+t:t}},methods:{getArticleById:function(){var t=this;this.$store.getters.isArticleExisted(this.number)?this.article=this.$store.getters.getArticleById(this.number):this.$store.dispatch("requestArticle",this.number).then(function(){t.article=t.$store.getters.getArticleById(t.number)}),this.loading=!1},goToList:function(){this.$router.push("/")}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"content-header"},[n("span",{staticClass:"content-header-back",on:{click:function(e){t.goToList()}}},[t._v("\n      Back to list\n    ")])]),t._v(" "),t.loading?n("el-button",{attrs:{loading:t.loading}}):t._e(),t._v(" "),n("div",{staticClass:"content-title"},[n("span",[t._v(t._s(t.article.title))])]),t._v(" "),n("hr"),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("div",{staticClass:"content-date"},[t._v("\n        "+t._s(t.article.created_at.split("T")[0])+"\n      ")])]),t._v(" "),n("el-col",{attrs:{span:12}},[n("div",{staticClass:"content-label",domProps:{innerHTML:t._s(t.getLabelsStr)}})])],1),t._v(" "),n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.compiledMarkdown)}})],1)},staticRenderFns:[]};var I=n("VU/8")(y,x,!1,function(t){n("lH+l")},"data-v-dd1ef9fe",null).exports;i.default.use(A.a);var R=new A.a({routes:[{path:"/",name:"ArticleList",component:E},{path:"/article/:number",name:"ArticleContent",component:I}]}),$=n("zL8q"),H=n.n($);n("tvR6");i.default.use(H.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:R,store:h,template:"<App/>",components:{App:w}})},"lH+l":function(t,e){},tvR6:function(t,e){},"v8/F":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f80baeecdee117d18bde.js.map