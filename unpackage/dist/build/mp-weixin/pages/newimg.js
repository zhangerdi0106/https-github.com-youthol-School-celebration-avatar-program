(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/newimg"],{"10b0":function(e,t,n){},3274:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var s=function(){var e=this,t=e.$createElement;e._self._c},a=[]},"35b8":function(e,t,n){"use strict";n.r(t);var o=n("3274"),s=n("e718");for(var a in s)"default"!==a&&function(e){n.d(t,e,(function(){return s[e]}))}(a);n("f915");var c,i=n("f0c5"),u=Object(i["a"])(s["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);t["default"]=u.exports},"66e7":function(e,t,n){"use strict";(function(e){n("287f");o(n("66fd"));var t=o(n("35b8"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},7244:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o="",s="";e.$on("sendid",(function(e){this.id=e.msg,o="../static/"+this.id+".png",console.log(o)}));var a={data:function(){return{id:"",src:o,showCanvas:!1,screenWidth:""}},onLoad:function(){var t=this;e.getSystemInfo({success:function(e){t.screenWidth=e.screenWidth,console.log(t.screenWidth),console.log(e.screenHeight),s=t.screenWidth/750}})},methods:{getimg:function(){var t=this,n="";e.getUserProfile({desc:"仅获取头像信息",success:function(a){console.log(a.userInfo),n=a.userInfo.avatarUrl,e.downloadFile({url:n,success:function(n){if(200===n.statusCode){console.log(n.tempFilePath);var a=e.createCanvasContext("myCanvas");a.drawImage(n.tempFilePath,0,0,400*s,400*s),a.drawImage(o,0,0,400*s,400*s),a.draw(),t.showCanvas=!0}}})}})},save:function(){e.canvasToTempFilePath({x:0,y:0,width:400,height:400,destWidth:400,destHeight:400,fileType:"jpg",quality:1,canvasId:"myCanvas",success:function(t){console.log(t.tempFilePath),e.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(t){console.log(t),e.showToast({title:"65周年生日快乐",duration:2e3})},fail:function(e){}})}})}},watch:{src:function(e,t){this.src=n("6a0e")(o)}}};t.default=a}).call(this,n("543d")["default"])},e718:function(e,t,n){"use strict";n.r(t);var o=n("7244"),s=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=s.a},f915:function(e,t,n){"use strict";var o=n("10b0"),s=n.n(o);s.a}},[["66e7","common/runtime","common/vendor"]]]);