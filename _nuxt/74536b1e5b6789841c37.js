(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{612:function(t,e,r){var content=r(707);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("5001018c",content,!0,{sourceMap:!1})},700:function(t,e,r){t.exports=r.p+"img/808f1cd.gif"},701:function(t,e,r){t.exports=r.p+"img/f060d0b.gif"},702:function(t,e,r){t.exports=r.p+"img/03b31eb.gif"},703:function(t,e,r){t.exports=r.p+"img/59cacf2.gif"},704:function(t,e,r){t.exports=r.p+"img/c4c234f.gif"},705:function(t,e,r){t.exports=r.p+"img/2b1cd0c.png"},706:function(t,e,r){"use strict";var o=r(612);r.n(o).a},707:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,'.ribbon[data-v-eb265828]{width:150px;height:150px;overflow:hidden;position:absolute}.ribbon[data-v-eb265828]:after,.ribbon[data-v-eb265828]:before{position:absolute;z-index:-1;content:"";display:block;border:5px solid #f44242}.ribbon span[data-v-eb265828]{position:absolute;display:block;width:225px;padding:15px 0;background-color:#f44242;box-shadow:0 5px 10px rgba(0,0,0,.1);color:#fff;font:700 18px/1 Lato,sans-serif;text-shadow:0 1px 1px rgba(0,0,0,.2);text-align:center}.ribbon-top-left[data-v-eb265828]{top:60px;left:-10px}.ribbon-top-left[data-v-eb265828]:after,.ribbon-top-left[data-v-eb265828]:before{border-top-color:transparent;border-left-color:transparent}.ribbon-top-left[data-v-eb265828]:before{top:0;right:0}.ribbon-top-left[data-v-eb265828]:after{bottom:0;left:0}.ribbon-top-left span[data-v-eb265828]{right:-25px;top:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.top-right[data-v-eb265828]{position:absolute;right:10px;top:18px}div.welcome[data-v-eb265828]{background:linear-gradient(180deg,#fff 0,#fff 34%,hsla(0,0%,96.9%,.8) 0,hsla(0,0%,96.9%,.8) 50%,hsla(0,0%,96.9%,.8));background-size:100% 120%;background-repeat:no-repeat;min-height:100%}.landingpage[data-v-eb265828]{max-width:1600px;width:calc(100vw - 4em);margin:0 auto}.landingpage-first[data-v-eb265828]{display:flex!important;justify-content:center!important;align-items:center!important;min-height:80vh;margin-bottom:2rem}img.landingpage-image[data-v-eb265828]{width:90%;height:auto;margin-top:3.2rem}div.landingpage-gif-container[data-v-eb265828]{min-height:88vh;display:flex;flex-direction:column;justify-content:center}img.landingpage-gif[data-v-eb265828]{width:90%;height:100%;display:table;margin:0 auto}.landingpage-gif-text[data-v-eb265828],div.title-column[data-v-eb265828]{text-align:center}div.title-column[data-v-eb265828]{margin-left:1rem;margin-right:1rem}.title[data-v-eb265828]{font-size:4vw}.subtitle[data-v-eb265828]{font-size:3vw}div.sign-up-box[data-v-eb265828]{border:1px solid #c5c5c5;background:hsla(0,0%,96.9%,.8);padding:0 1rem 1rem}.landingpage-bottom-register-background[data-v-eb265828]{width:100vw;height:220px;position:relative;left:50%;right:50%;margin-left:-50vw;margin-right:-50vw;background-color:#fff}.landingpage-bottom-register[data-v-eb265828]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.register-button-bottom[data-v-eb265828]{position:absolute;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}@media (max-width:990px){div.welcome[data-v-eb265828]{background:hsla(0,0%,96.9%,.8);background-size:100% 88vh;background-repeat:no-repeat;min-height:100%}.landingpage-bottom-register-background[data-v-eb265828]{width:100vw;height:400px;position:relative;left:50%;right:50%;margin-left:-50vw;margin-right:-50vw;background-color:#fff}.landingpage-demo-warning[data-v-eb265828]{text-align:center;margin:0 auto}}',""])},893:function(t,e,r){"use strict";r.r(e);r(14);var o=r(4),n=r(13),l=r(700),m=r.n(l),c=r(701),d=r.n(c),f=r(702),v=r.n(f),_=r(703),h=r.n(_),w=r(704),x=r.n(w),k=r(705),$=r.n(k),C=r(56),y=r.n(C),B={layout:"simple",head:function(){return{title:this.$t("home")}},data:function(){var t=this,e=function(e,r,o){""===r?o(new Error("Please input the password")):(""!==t.form.password_confirmation&&t.$refs.form.validateField("password_confirmation"),o())};return{text:m.a,image:d.a,ch:v.a,col:h.a,del:x.a,mac:$.a,apiStorage:"http://localhost:8000//storage/",title:"Laravel-Nuxt",form:new y.a({first_name:"",last_name:"",email:"",password:"",password_confirmation:""}),formBottom:new y.a({first_name:"",last_name:"",email:"",password:"",password_confirmation:""}),rules:{password:[{validator:e,trigger:"blur"},{min:8,max:80,message:"At least 8 Characters",trigger:"blur"}],password_confirmation:[{validator:function(e,r,o){""===r?o(new Error("Please input the password again")):r!==t.form.password?o(new Error("Two inputs don't match!")):o()},trigger:"blur"}],first_name:[{required:!0,message:"First Name required"},{max:80,trigger:"blur"}],last_name:[{required:!0,message:"Last Name required"},{max:80,trigger:"blur"}],email:[{required:!0,message:"Please input email address",trigger:"blur"},{type:"email",message:"Please input correct email address",trigger:["blur","change"]}]},rulesBottom:{password_bottom:[{validator:e,trigger:"blur"},{min:8,max:80,message:"At least 8 Characters",trigger:"blur"}],first_name_bottom:[{required:!0,message:"First Name required"},{max:80,trigger:"blur"}],last_name_bottom:[{required:!0,message:"Last Name required"},{max:80,trigger:"blur"}],email_bottom:[{required:!0,message:"Please input email address",trigger:"blur"},{type:"email",message:"Please input correct email address",trigger:["blur","change"]}]}}},computed:Object(n.b)({authenticated:"auth/check"}),mounted:function(){},methods:{scrollToEnd:function(){this.$refs.section1.scrollIntoView()},submitForm:function(form){var t=this;this.$refs[form].validate(function(e){if(!e)return!1;t.register()})},submitFormBottom:function(form){var t=this;console.log(this.formBottom,"hi"),this.$refs.formBottom.validate(function(e){if(!e)return!1;t.formBottom.password_confirmation=t.formBottom.password,t.register()})},register:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var e,data,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.user){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.form.post("/register");case 4:return e=t.sent,data=e.data,t.next=8,this.form.post("/login");case 8:return r=t.sent,o=r.data.token,this.$store.dispatch("auth/saveToken",{token:o}),t.next=13,this.$store.dispatch("auth/updateUser",{user:data});case 13:this.$router.push({name:"home"});case 14:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},F=(r(706),r(5)),component=Object(F.a)(B,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"welcome"},[t._m(0),t._v(" "),r("div",{staticClass:"landingpage"},[r("div",{staticClass:"landingpage-demo-warning",style:{marginLeft:"7.5rem"}},[r("h1",{staticClass:"landingpage-demo-warning",style:{color:"#ed4d45"}},[t._v(t._s(t.$t("landingpage_warning")))])]),t._v(" "),r("div",{staticClass:"landingpage-first"},[r("el-row",[r("el-col",{staticClass:"title-column hidden-sm-only hidden-xs-only",attrs:{xs:24,sm:24,md:11,lg:11,xl:11}},[r("img",{staticClass:"landingpage-image",attrs:{src:t.mac,alt:""}})]),t._v(" "),r("el-col",{staticClass:"sign-up-box",attrs:{sm:24,md:11,lg:11,xl:11}},[r("el-form",{ref:"form",attrs:{"label-position":"top",rules:t.rules,model:t.form}},[r("el-row",{attrs:{gutter:12}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"first_name"}},[r("span",[t._v(t._s(t.$t("first_name")))]),t._v(" "),r("el-input",{class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",placeholder:"...",name:"first_name",autocomplete:"on"},model:{value:t.form.first_name,callback:function(e){t.$set(t.form,"first_name",e)},expression:"form.first_name"}})],1)],1),t._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"last_name"}},[r("span",[t._v(t._s(t.$t("last_name")))]),t._v(" "),r("el-input",{class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",placeholder:"...",name:"last_name",autocomplete:"on"},model:{value:t.form.last_name,callback:function(e){t.$set(t.form,"last_name",e)},expression:"form.last_name"}})],1)],1)],1),t._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{prop:"email"}},[r("span",[t._v(t._s(t.$t("email")))]),t._v(" "),r("el-input",{attrs:{type:"email",autocomplete:"on"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1)],1)],1),t._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{prop:"password"}},[r("span",[t._v(t._s(t.$t("password")))]),t._v(" "),r("el-input",{attrs:{type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1)],1),t._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{prop:"password_confirmation"}},[r("span",[t._v(t._s(t.$t("confirm_password")))]),t._v(" "),r("el-input",{attrs:{type:"password"},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}})],1)],1)],1),t._v(" "),r("el-button",{attrs:{type:"success"},on:{click:function(e){return t.submitForm("form")}}},[t._v(t._s(t.$t("register")))])],1)],1)],1)],1),t._v(" "),r("div",{staticClass:"landingpage-gif-container"},[r("el-row",{staticClass:"landingpage-row"},[r("el-col",{staticClass:"landingpage-column",attrs:{sm:24,md:8,lg:8,xl:8}},[r("img",{staticClass:"landingpage-gif",attrs:{src:t.text,alt:""}}),t._v(" "),r("h3",{staticClass:"landingpage-gif-text"},[t._v(t._s(t.$t("welcome_showcase_1")))])]),t._v(" "),r("el-col",{staticClass:"landingpage-column",attrs:{sm:24,md:8,lg:8,xl:8}},[r("img",{staticClass:"landingpage-gif",attrs:{src:t.image,alt:""}}),t._v(" "),r("h3",{staticClass:"landingpage-gif-text"},[t._v(t._s(t.$t("welcome_showcase_2")))])]),t._v(" "),r("el-col",{staticClass:"landingpage-column",attrs:{sm:24,md:8,lg:8,xl:8}},[r("img",{staticClass:"landingpage-gif",attrs:{src:t.ch,alt:""}}),t._v(" "),r("h3",{staticClass:"landingpage-gif-text"},[t._v(t._s(t.$t("welcome_showcase_3")))])])],1),t._v(" "),r("el-row",[r("el-col",{staticClass:"hidden-sm-only hidden-xs-only",attrs:{sm:24,md:24,lg:24,xl:24}},[r("br")])],1),t._v(" "),r("el-row",[r("el-col",{staticClass:"hidden-sm-only hidden-xs-only",attrs:{sm:4,md:4,lg:4,xl:4}},[r("p")]),t._v(" "),r("el-col",{staticClass:"landingpage-column",attrs:{sm:24,md:8,lg:8,xl:8}},[r("img",{staticClass:"landingpage-gif",attrs:{src:t.col,alt:""}}),t._v(" "),r("h3",{staticClass:"landingpage-gif-text"},[t._v(t._s(t.$t("welcome_showcase_4")))])]),t._v(" "),r("el-col",{staticClass:"landingpage-column",attrs:{sm:24,md:8,lg:8,xl:8}},[r("img",{staticClass:"landingpage-gif",attrs:{src:t.del,alt:""}}),t._v(" "),r("h3",{staticClass:"landingpage-gif-text"},[t._v(t._s(t.$t("welcome_showcase_5")))])])],1)],1),t._v(" "),r("div",{staticClass:"landingpage-bottom-register-background"},[r("el-form",{ref:"formBottom",staticClass:"landingpage-bottom-register",attrs:{rules:t.rulesBottom}},[r("el-row",{attrs:{gutter:12}},[r("el-col",{attrs:{sm:24,md:6,lg:6,xl:6}},[r("el-form-item",{attrs:{prop:"first_name_bottom"}},[r("span",[t._v(t._s(t.$t("first_name")))]),t._v(" "),r("el-input",{attrs:{placeholder:"..."},model:{value:t.formBottom.first_name,callback:function(e){t.$set(t.formBottom,"first_name",e)},expression:"formBottom.first_name"}})],1)],1),t._v(" "),r("el-col",{attrs:{sm:24,md:6,lg:6,xl:6}},[r("el-form-item",{attrs:{prop:"last_name_bottom"}},[r("span",[t._v(t._s(t.$t("last_name")))]),t._v(" "),r("el-input",{attrs:{placeholder:"..."},model:{value:t.formBottom.last_name,callback:function(e){t.$set(t.formBottom,"last_name",e)},expression:"formBottom.last_name"}})],1)],1),t._v(" "),r("el-col",{attrs:{sm:24,md:6,lg:6,xl:6}},[r("el-form-item",{attrs:{prop:"email_bottom"}},[r("span",[t._v(t._s(t.$t("email")))]),t._v(" "),r("el-input",{attrs:{type:"email",placeholder:""},model:{value:t.formBottom.email,callback:function(e){t.$set(t.formBottom,"email",e)},expression:"formBottom.email"}})],1)],1),t._v(" "),r("el-col",{attrs:{sm:24,md:6,lg:6,xl:6}},[r("el-form-item",{attrs:{prop:"password_bottom"}},[r("span",[t._v(t._s(t.$t("password")))]),t._v(" "),r("el-input",{attrs:{type:"password",placeholder:""},model:{value:t.formBottom.password,callback:function(e){t.$set(t.formBottom,"password",e)},expression:"formBottom.password"}})],1)],1)],1),t._v(" "),r("el-button",{staticClass:"register-button-bottom",attrs:{type:"success"},on:{click:function(e){return t.submitFormBottom("formBottom")}}},[t._v(t._s(t.$t("register")))])],1)],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ribbon ribbon-top-left"},[e("span",[this._v(" ALPHA ")])])}],!1,null,"eb265828",null);e.default=component.exports}}]);