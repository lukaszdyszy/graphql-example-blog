(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],p=0,f=[];p<o.length;p++)i=o[p],a[i]&&f.push(a[i][0]),a[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={app:0},r=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"12b6":function(t,e,n){},"141e":function(t,e,n){"use strict";var s=n("9ffb"),a=n.n(s);a.a},2469:function(t,e,n){},"2ad8":function(t,e,n){"use strict";var s=n("ce97"),a=n.n(s);a.a},"3e92":function(t,e,n){"use strict";var s=n("501c"),a=n.n(s);a.a},"501c":function(t,e,n){},"53d7":function(t,e,n){"use strict";var s=n("730d"),a=n.n(s);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"content"},[n("transition",{attrs:{name:"page",mode:"out-in"}},[n("router-view",{key:t.$route.params.category})],1)],1),n("footer",[n("Footer")],1)])},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footer"}},[t._v("\n  © 2019. Łukasz Dyszy.\n")])},o=[],c={name:"Footer"},l=c,u=(n("53d7"),n("2877")),p=Object(u["a"])(l,i,o,!1,null,null,null),f=p.exports,d={components:{Footer:f}},m=d,g=(n("5c0b"),Object(u["a"])(m,a,r,!1,null,null,null)),v=g.exports,h=n("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.posts.length>0&&t.categories.length>0?n("div",{staticClass:"home"},[n("header",[n("TopBar",{attrs:{mode:"flexible"}}),n("Header",{attrs:{image:t.categories[0].image.url,title:t.title,description:t.description}})],1),n("main",[n("div",{staticClass:"container"},[n("h2",[t._v("newest")]),n("Wall",{attrs:{posts:t.posts}}),n("div",{staticClass:"show-more"},[n("router-link",{attrs:{to:"/archives"}},[t._v("show more")])],1)],1)])]):t._e()},b=[],C=n("aede"),w=n("9530"),k=n.n(w),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header",style:{"background-image":"url("+t.image+")","border-color":t.color}},[n("div",{staticClass:"claim"},[n("h1",[t._v(t._s(t.title))]),n("p",[t._v("\n      "+t._s(t.description)+"\n    ")])]),n("i",{staticClass:"fas fa-arrow-down fa-3x",on:{click:function(e){return t.scrollDown()}}})])},$=[],P={props:{image:String,color:String,title:String,description:String},methods:{scrollDown:function(){var t=window.innerHeight;window.scrollTo({top:t,behavior:"smooth"})}}},j=P,O=(n("2ad8"),Object(u["a"])(j,x,$,!1,null,"5e06e4b2",null)),A=O.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wall"},t._l(t.posts,function(t){return n("Post",{attrs:{id:t.id,title:t.title,thumbnail:t.thumbnail.url,excerpt:t.excerpt,date:t.createdAt,category:t.category}})}),1)},T=[],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post"},[n("h3",[t._v(t._s(t.title))]),n("span",{staticClass:"date"},[t._v(t._s(t.date.split("T")[0]+" "+t.date.split("T")[1].split(".")[0]))]),n("div",{staticClass:"categories"},[n("div",{style:{color:t.category.color.css}},[n("router-link",{attrs:{to:"/category/"+t.category.name}},[t._v(t._s(t.category.name))])],1)]),n("img",{staticClass:"thumbnail",attrs:{src:t.thumbnail,alt:""}}),n("p",{staticClass:"excerpt"},[t._v("\n    "+t._s(t.excerpt)+"\n  ")]),n("div",{staticClass:"read-more"},[n("router-link",{attrs:{to:"/single/"+t.id}},[t._v("read more")])],1)])},q=[],E={name:"Post",props:{title:String,date:String,thumbnail:String,excerpt:String,id:String,category:Object}},z=E,H=(n("d8c4"),Object(u["a"])(z,B,q,!1,null,"019418c6",null)),W=H.exports,D={name:"Wall",components:{Post:W},props:{posts:Array}},M=D,F=(n("3e92"),Object(u["a"])(M,S,T,!1,null,"1fd63746",null)),L=F.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-bar",class:{sticky:t.sticky}},[t._m(0),n("div",{staticClass:"main-menu"},[n("i",{staticClass:"fas fa-bars fa-2x mobile",on:{click:function(e){t.open=!t.open}}}),n("nav",{class:{open:t.open}},[n("i",{staticClass:"fas fa-times fa-2x mobile",on:{click:function(e){t.open=!t.open}}}),n("h4",{staticClass:"mobile"},[t._v("menu")]),n("ul",{staticClass:"menu",on:{click:function(e){t.open=!t.open}}},[n("li",[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"fas fa-home"}),t._v(" home")])],1),n("li",[n("router-link",{attrs:{to:"/category/games"}},[n("i",{staticClass:"fas fa-gamepad"}),t._v(" games")])],1),n("li",[n("router-link",{attrs:{to:"/category/films"}},[n("i",{staticClass:"fas fa-video"}),t._v(" movies")])],1)])])])])},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social"},[n("i",{staticClass:"fab fa-facebook-f"}),n("i",{staticClass:"fab fa-twitter"}),n("i",{staticClass:"fab fa-youtube"})])}],J=(n("2ef0"),{name:"TopBar",props:{mode:String},data:function(){return{open:!1,sticky:!1}},created:function(){var t=this;"flexible"==this.mode?window.addEventListener("scroll",_.debounce(function(){window.scrollY>=window.innerHeight?t.sticky=!0:t.sticky=!1}),1e3):this.sticky=!0}}),N=J,V=(n("d4bd"),Object(u["a"])(N,Q,I,!1,null,null,null)),Y=V.exports;function G(){var t=Object(C["a"])(['{\n        categories(where: {\n          name: "others"\n        }){\n          image{\n            url\n          }\n        }\n      }']);return G=function(){return t},t}function K(){var t=Object(C["a"])(["\n        {\n          posts(orderBy: createdAt_DESC, first: 6) {\n            title\n            thumbnail {\n              url\n            }\n            excerpt\n            id\n            category {\n              name,\n              color{\n                css\n              }\n            }\n            createdAt\n          }\n        }\n      "]);return K=function(){return t},t}var R={name:"Home",components:{TopBar:Y,Header:A,Wall:L},data:function(){return{posts:Array(),categories:Array(),title:"Blog",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nesciunt nam hic nihil, officiis autem?"}},apollo:{posts:{query:k()(K())},categories:{query:k()(G())}}},U=R,X=(n("8f51"),Object(u["a"])(U,y,b,!1,null,"a4a7647a",null)),Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.posts.length>0?n("div",{staticClass:"single"},[n("vue-scroll-progress-bar",{attrs:{height:"3px",backgroundColor:t.progressBarColor}}),n("header",[n("TopBar",{attrs:{mode:"static"}})],1),n("div",{staticClass:"container"},[n("main",[n("div",{staticClass:"title-bar"},[n("div",{staticClass:"title"},[n("h2",[t._v(t._s(t.posts[0].title))])]),n("div",{staticClass:"date"},[t._v("\n                    "+t._s(t.dateTime)+"\n                ")])]),n("div",{staticClass:"categories"},[n("div",{style:{color:t.posts[0].category.color.css}},[n("router-link",{attrs:{to:"/category/"+t.posts[0].category.name}},[t._v("\n                        "+t._s(t.posts[0].category.name)+"\n                    ")])],1)]),n("img",{staticClass:"thumb",attrs:{src:t.posts[0].thumbnail.url,alt:""}}),n("div",{staticClass:"single-content",domProps:{innerHTML:t._s(t.posts[0].content.html)}})])])],1):t._e()},et=[],nt=(n("28a5"),n("7f7f"),n("d599"));function st(){var t=Object(C["a"])(["query($id: ID!){\n                posts(where: {id: $id}){\n                    title,\n                    createdAt,\n                    thumbnail{\n                        url\n                    },\n                    content{\n                        html\n                    },\n                    category{\n                        name,\n                        color{\n                            css\n                        }\n                    }\n                }\n            }"]);return st=function(){return t},t}s["a"].component("vue-scroll-progress-bar",nt["a"]);var at={name:"Single",components:{TopBar:Y,VueScrollProgressBar:nt["a"]},data:function(){return{posts:Array(),progressBarColor:""}},apollo:{posts:{query:k()(st()),variables:{id:""},skip:function(){return this.skipQuery}}},methods:{initialize:function(){var t=this;this.posts=Array(),this.$apollo.queries.posts.options.variables={id:this.$route.params.id},this.$apollo.queries.posts.options.result=_.debounce(function(){t.normalizeAssets(),"others"!=t.posts[0].category.name?t.progressBarColor=t.posts[0].category.color.css:t.progressBarColor="rgb(28, 158, 61)"},100),this.$apollo.queries.posts.skip=!1},normalizeAssets:function(){var t=document.getElementsByClassName("css-1pmpp80");if(t.length>0)for(var e=0;e<t.length;e++)t[e].removeAttribute("width"),t[e].style.maxWidth="100%",t[e].removeAttribute("height"),t[e].style.height="auto"}},created:function(){this.initialize()},computed:{dateTime:function(){if(this.posts.length>0){var t=this.posts[0].createdAt.split("T")[0],e=this.posts[0].createdAt.split("T")[1].split(".")[0];return t+" "+e}return""}}},rt=at,it=(n("73ad"),Object(u["a"])(rt,tt,et,!1,null,"9e8ce9a2",null)),ot=it.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.posts.length>0?n("div",{staticClass:"category"},[n("header",[n("TopBar",{attrs:{mode:"flexible"}}),n("Header",{attrs:{image:t.posts[0].category.image.url,color:t.posts[0].category.color.css,title:this.$route.params.category,description:t.posts[0].category.description}})],1),n("main",[n("div",{staticClass:"container"},[n("h2",[t._v("newest")]),n("Wall",{attrs:{posts:t.posts}}),n("router-link",{attrs:{to:"/archive"}})],1)])]):t._e()},lt=[];function ut(){var t=Object(C["a"])(["query($category: String!){\n          posts(where: {\n              category: {\n                  name: $category\n              }\n          }, orderBy: createdAt_DESC) {\n            title\n            thumbnail {\n              url\n            }\n            excerpt\n            id,\n            category{\n                name,\n                image{\n                    url\n                }\n                color{\n                  css\n                },\n                description\n            }\n            createdAt\n          }\n        }"]);return ut=function(){return t},t}var pt={name:"Category",components:{TopBar:Y,Header:A,Wall:L},data:function(){return{posts:Array()}},apollo:{posts:{query:k()(ut()),variables:{category:""},skip:function(){return this.skipQuery}}},methods:{initialize:function(){this.$apollo.queries.posts.options.variables={category:this.$route.params.category},this.$apollo.queries.posts.skip=!1}},mounted:function(){this.initialize()},watch:{"$route.params.category":function(){this.initialize(),this.$apollo.queries.posts.refetch()}}},ft=pt,dt=(n("141e"),Object(u["a"])(ft,ct,lt,!1,null,null,null)),mt=dt.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"archives"},[n("TopBar",{attrs:{mode:"static"}}),n("main",[n("div",{staticClass:"container"},[0!=t.$apollo.loading?n("div",{staticClass:"loading"},[t._m(0)]):t._e(),n("Wall",{attrs:{posts:t.posts}})],1),n("div",{staticClass:"pagination"},[n("div",{staticClass:"pag-arrow",on:{click:function(e){return t.prevPage()}}},[n("i",{staticClass:"fas fa-angle-left"})]),n("div",{on:{click:function(e){t.page=0,t.getPosts()}}},[t._v(" 1 ")]),n("div",{staticClass:"number"},[t._v(" ... "+t._s(t.page+1)+" ... ")]),n("div",{on:{click:function(e){t.page=t.lastPage-1,t.getPosts()}}},[t._v(" "+t._s(t.lastPage)+" ")]),n("div",{staticClass:"pag-arrow",on:{click:function(e){return t.nextPage()}}},[n("i",{staticClass:"fas fa-angle-right"})])])])],1)},vt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-ellipsis"},[n("div"),n("div"),n("div"),n("div")])}];n("c5f6"),n("3022");function ht(){var t=Object(C["a"])(["{\n                posts{\n                    id\n                }\n            }"]);return ht=function(){return t},t}function yt(){var t=Object(C["a"])(["query($start: Int!){\n                posts(orderBy: createdAt_DESC, first: 6, skip: $start){\n                    title,\n                    thumbnail{\n                        url\n                    },\n                    excerpt,\n                    id,\n                    category {\n                    name,\n                    color{\n                        css\n                    }\n                    }\n                    createdAt\n                }\n            }"]);return yt=function(){return t},t}var bt={name:"Archives",components:{TopBar:Y,Wall:L},data:function(){return{posts:Array(),page:0,lastPage:Array()}},apollo:{posts:{query:k()(yt()),variables:{start:Number},skip:function(){return this.skipQuery}},lastPage:{query:k()(ht()),update:function(t){var e=Math.ceil(t.posts.length/6);return e}}},methods:{getPosts:function(){var t=6*this.page;this.$apollo.queries.posts.options.variables={start:t},this.$apollo.queries.posts.skip=!1,this.$apollo.queries.posts.refetch()},prevPage:function(){this.page>0&&(this.page--,this.getPosts())},nextPage:function(){this.page<this.lastPage-1&&(this.page++,this.getPosts())}},created:function(){this.getPosts()}},_t=bt,Ct=(n("8e86"),Object(u["a"])(_t,gt,vt,!1,null,"a63f6292",null)),wt=Ct.exports;s["a"].use(h["a"]);var kt=new h["a"]({routes:[{path:"/",name:"Home",component:Z},{path:"/single/:id",name:"Single",component:ot},{path:"/category/:category",name:"Category",component:mt},{path:"/archives",name:"Archives",component:wt}]}),xt=n("2c82"),$t=n("522d"),Pt=new xt["a"]({uri:"https://api-euwest.graphcms.com/v1/cju9uhlan02iu01ffwwpyksrp/master"}),jt=new $t["a"]({defaultClient:Pt});s["a"].use($t["a"]),s["a"].config.productionTip=!1,new s["a"]({apolloProvider:jt,router:kt,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var s=n("5e27"),a=n.n(s);a.a},"5e27":function(t,e,n){},"730d":function(t,e,n){},"73ad":function(t,e,n){"use strict";var s=n("9f24"),a=n.n(s);a.a},"8e86":function(t,e,n){"use strict";var s=n("12b6"),a=n.n(s);a.a},"8f51":function(t,e,n){"use strict";var s=n("db40"),a=n.n(s);a.a},"9f24":function(t,e,n){},"9ffb":function(t,e,n){},a4ff:function(t,e,n){},ce97:function(t,e,n){},d4bd:function(t,e,n){"use strict";var s=n("2469"),a=n.n(s);a.a},d8c4:function(t,e,n){"use strict";var s=n("a4ff"),a=n.n(s);a.a},db40:function(t,e,n){}});
//# sourceMappingURL=app.55ae108a.js.map