(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{299:function(e,t,s){},337:function(e,t,s){"use strict";var a=s(299);s.n(a).a},345:function(e,t,s){"use strict";s.r(t);s(83);var a=s(51),i={name:"BrgUpload",props:{imgUrl:{type:String,default:""},holdImg:{type:String,default:""},required:{type:Boolean,default:!1}},data:function(){return{url:this.imgUrl}},watch:{imgUrl:function(e){console.log(e),this.url=e}},methods:{select:function(){var e=this;uni.showActionSheet({itemList:["拍摄","从手机相册选择"],success:function(t){var s;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:[0===t.tapIndex?"camera":"album"],success:(s=Object(a.a)(regeneratorRuntime.mark((function t(s){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.url=s.tempFilePaths[0],e.$emit("selectChange",s.tempFiles[0]);case 2:case"end":return t.stop()}}),t)}))),function(e){return s.apply(this,arguments)})})}})},deleteSelect:function(){this.url="",this.$emit("delete")}}},r=(s(337),s(19)),l=Object(r.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"upload",on:{click:e.select}},[e.required?s("img",{staticClass:"upload-require",attrs:{src:"https://img.goshare2.com/app-images/mp_require_2x.png"}}):e._e(),e._v(" "),s("div",{staticClass:"upload-mark",class:{hold:e.holdImg},style:{"--hold-img":"url("+e.holdImg+")"}},[s("span",{staticClass:"add"},[e._v("+")])]),e._v(" "),s("div",{staticClass:"upload-select"},[e.url?s("img",{attrs:{src:e.url,mode:"aspectFill"}}):e._e()]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.url,expression:"url"}],staticClass:"upload-delete",on:{click:function(t){return t.stopPropagation(),e.deleteSelect(t)}}},[s("img",{staticClass:"close",attrs:{src:"https://img.goshare2.com/app-images/delete_img_2x.png"}})])])}),[],!1,null,"c385401a",null);t.default=l.exports}}]);