(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{605:function(t,e,r){t.exports=r.p+"img/b2fcd3e.jpg"},606:function(t,e,r){var content=r(692);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("0b88f55a",content,!0,{sourceMap:!1})},691:function(t,e,r){"use strict";var o=r(606);r.n(o).a},692:function(t,e,r){e=t.exports=r(19)(!1);var o=r(324)(r(693));e.push([t.i,'.ribbon[data-v-27ec3597]{width:150px;height:150px;overflow:hidden;position:absolute}.ribbon[data-v-27ec3597]:after,.ribbon[data-v-27ec3597]:before{position:absolute;z-index:-1;content:"";display:block;border:5px solid #f44242}.ribbon span[data-v-27ec3597]{position:absolute;display:block;width:225px;padding:15px 0;background-color:#f44242;box-shadow:0 5px 10px rgba(0,0,0,.1);color:#fff;font:700 18px/1 Lato,sans-serif;text-shadow:0 1px 1px rgba(0,0,0,.2);text-align:center}.ribbon-top-left[data-v-27ec3597]{top:60px;left:-10px}.ribbon-top-left[data-v-27ec3597]:after,.ribbon-top-left[data-v-27ec3597]:before{border-top-color:transparent;border-left-color:transparent}.ribbon-top-left[data-v-27ec3597]:before{top:0;right:0}.ribbon-top-left[data-v-27ec3597]:after{bottom:0;left:0}.ribbon-top-left span[data-v-27ec3597]{right:-25px;top:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.top-right[data-v-27ec3597]{position:absolute;right:10px;top:18px}div.welcome[data-v-27ec3597]{background:url('+o+"),hsla(0,0%,96.9%,.8);background-size:100% 86vh;background-repeat:no-repeat;min-height:100%}.landingpage[data-v-27ec3597]{max-width:1600px;width:calc(100vw - 2em);margin:0 auto}.landingpage-first[data-v-27ec3597]{display:flex!important;justify-content:center!important;align-items:center!important;min-height:90vh;margin-bottom:2rem}div.landingpage-gif-container[data-v-27ec3597]{min-height:88vh;display:flex;flex-direction:column;justify-content:center}img.landingpage-gif[data-v-27ec3597]{width:90%;height:100%;display:table;margin:0 auto}.landingpage-gif-text[data-v-27ec3597],div.title-column[data-v-27ec3597]{text-align:center}.title[data-v-27ec3597]{font-size:4vw}.subtitle[data-v-27ec3597]{font-size:3vw}div.sign-up-box[data-v-27ec3597]{border:1px solid #c5c5c5;background:hsla(0,0%,96.9%,.8);padding:0 1rem 1rem}.landingpage-bottom-register-background[data-v-27ec3597]{width:100vw;height:220px;position:relative;left:50%;right:50%;margin-left:-50vw;margin-right:-50vw;background-color:#fff}.landingpage-bottom-register[data-v-27ec3597]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.register-button-bottom[data-v-27ec3597]{position:absolute;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}@media (max-width:990px){div.welcome[data-v-27ec3597]{background:url("+o+"),hsla(0,0%,96.9%,.8);background-size:100% 88vh;background-repeat:no-repeat;min-height:100%}.landingpage-bottom-register-background[data-v-27ec3597]{width:100vw;height:400px;position:relative;left:50%;right:50%;margin-left:-50vw;margin-right:-50vw;background-color:#fff}}",""])},693:function(t,e,r){t.exports=r.p+"img/db0fde5.png"},875:function(t,e,r){"use strict";r.r(e);r(14);var o=r(4),n=r(13),l=r(605),m=r.n(l),c=r(56),d=r.n(c),f={layout:"simple",head:function(){return{title:this.$t("home")}},data:function(){var t=this,e=function(e,r,o){""===r?o(new Error("Please input the password")):(""!==t.form.password_confirmation&&t.$refs.form.validateField("password_confirmation"),o())};return{apiStorage:"http://localhost:8000/storage/",title:"Laravel-Nuxt",image:m.a,form:new d.a({first_name:"",last_name:"",email:"",password:"",password_confirmation:""}),formBottom:new d.a({first_name:"",last_name:"",email:"",password:"",password_confirmation:""}),rules:{password:[{validator:e,trigger:"blur"},{min:8,max:80,message:"At least 8 Characters",trigger:"blur"}],password_confirmation:[{validator:function(e,r,o){""===r?o(new Error("Please input the password again")):r!==t.form.password?o(new Error("Two inputs don't match!")):o()},trigger:"blur"}],first_name:[{required:!0,message:"First Name required"},{max:80,trigger:"blur"}],last_name:[{required:!0,message:"Last Name required"},{max:80,trigger:"blur"}],email:[{required:!0,message:"Please input email address",trigger:"blur"},{type:"email",message:"Please input correct email address",trigger:["blur","change"]}]},rulesBottom:{password_bottom:[{validator:e,trigger:"blur"},{min:8,max:80,message:"At least 8 Characters",trigger:"blur"}],first_name_bottom:[{required:!0,message:"First Name required"},{max:80,trigger:"blur"}],last_name_bottom:[{required:!0,message:"Last Name required"},{max:80,trigger:"blur"}],email_bottom:[{required:!0,message:"Please input email address",trigger:"blur"},{type:"email",message:"Please input correct email address",trigger:["blur","change"]}]}}},computed:Object(n.b)({authenticated:"auth/check"}),methods:{scrollToEnd:function(){this.$refs.section1.scrollIntoView()},submitForm:function(form){var t=this;this.$refs[form].validate(function(e){if(!e)return!1;t.register()})},submitFormBottom:function(form){var t=this;console.log(this.formBottom,"hi"),this.$refs.formBottom.validate(function(e){if(!e)return!1;t.formBottom.password_confirmation=t.formBottom.password,t.register()})},register:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var e,data,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.user){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.form.post("/register");case 4:return e=t.sent,data=e.data,t.next=8,this.form.post("/login");case 8:return r=t.sent,o=r.data.token,this.$store.dispatch("auth/saveToken",{token:o}),t.next=13,this.$store.dispatch("auth/updateUser",{user:data});case 13:this.$router.push({name:"home"});case 14:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},v=(r(691),r(5)),component=Object(v.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"welcome"},[t._m(0),t._v(" "),r("div",{staticClass:"landingpage"},[r("div",{staticClass:"landingpage-first"},[r("el-row",[r("el-col",{staticClass:"title-column hidden-sm-only hidden-xs-only",attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[r("h1",{staticClass:"title"},[t._v("\n          Create Beautiful Presentations\n        ")]),t._v(" "),r("h2",{staticClass:"subtitle"},[r("a",{on:{click:t.scrollToEnd}},[t._v("Learn More")])])]),t._v(" "),r("el-col",{staticClass:"sign-up-box",attrs:{sm:24,md:12,lg:12,xl:12}},[r("el-form",{ref:"form",attrs:{"label-position":"top",rules:t.rules,model:t.form}},[r("el-row",{attrs:{gutter:12}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"first_name"}},[r("span",[t._v("First Name")]),t._v(" "),r("el-input",{class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",placeholder:"First Name",name:"first_name",autocomplete:"on"},model:{value:t.form.first_name,callback:function(e){t.$set(t.form,"first_name",e)},expression:"form.first_name"}})],1)],1),t._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"last_name"}},[r("span",[t._v("Last Name")]),t._v(" "),r("el-input",{class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",placeholder:"Last Name",name:"last_name",autocomplete:"on"},model:{value:t.form.last_name,callback:function(e){t.$set(t.form,"last_name",e)},expression:"form.last_name"}})],1)],1)],1),t._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{prop:"email"}},[r("span",[t._v("Email")]),t._v(" "),r("el-input",{attrs:{type:"email",autocomplete:"on"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1)],1)],1),t._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{prop:"password"}},[r("span",[t._v("Password")]),t._v(" "),r("el-input",{attrs:{type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1)],1),t._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{prop:"password_confirmation"}},[r("span",[t._v("Confirm Password")]),t._v(" "),r("el-input",{attrs:{type:"password"},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}})],1)],1)],1),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("form")}}},[t._v("Register")])],1)],1)],1)],1),t._v(" "),r("div",{staticClass:"landingpage-gif-container"},[r("el-row",{staticClass:"landingpage-row"},[r("el-col",{staticClass:"landingpage-column",attrs:{sm:24,md:8,lg:8,xl:8}},[r("img",{staticClass:"landingpage-gif",attrs:{src:t.apiStorage+"gifs/text.gif",alt:""}}),t._v(" "),r("h3",{staticClass:"landingpage-gif-text"},[t._v("Create draggable and resizable objects")])]),t._v(" "),r("el-col",{staticClass:"landingpage-column",attrs:{sm:24,md:8,lg:8,xl:8}},[r("img",{staticClass:"landingpage-gif",attrs:{src:t.apiStorage+"gifs/image.gif",alt:""}}),t._v(" "),r("h3",{staticClass:"landingpage-gif-text"},[t._v("Search for images")])]),t._v(" "),r("el-col",{staticClass:"landingpage-column",attrs:{sm:24,md:8,lg:8,xl:8}},[r("img",{staticClass:"landingpage-gif",attrs:{src:t.apiStorage+"gifs/chart.gif",alt:""}}),t._v(" "),r("h3",{staticClass:"landingpage-gif-text"},[t._v("Create complex data objects")])])],1),t._v(" "),r("el-row",[r("el-col",{staticClass:"hidden-sm-only hidden-xs-only",attrs:{sm:24,md:24,lg:24,xl:24}},[r("br")])],1),t._v(" "),r("el-row",[r("el-col",{staticClass:"hidden-sm-only hidden-xs-only",attrs:{sm:4,md:4,lg:4,xl:4}},[r("p")]),t._v(" "),r("el-col",{staticClass:"landingpage-column",attrs:{sm:24,md:8,lg:8,xl:8}},[r("img",{staticClass:"landingpage-gif",attrs:{src:t.apiStorage+"gifs/color.gif",alt:""}}),t._v(" "),r("h3",{staticClass:"landingpage-gif-text"},[t._v("Modify objects")])]),t._v(" "),r("el-col",{staticClass:"landingpage-column",attrs:{sm:24,md:8,lg:8,xl:8}},[r("img",{staticClass:"landingpage-gif",attrs:{src:t.apiStorage+"gifs/delete.gif",alt:""}}),t._v(" "),r("h3",{staticClass:"landingpage-gif-text"},[t._v("Easily delete created objects")])])],1)],1),t._v(" "),r("div",{staticClass:"landingpage-bottom-register-background"},[r("el-form",{ref:"formBottom",staticClass:"landingpage-bottom-register",attrs:{rules:t.rulesBottom}},[r("el-row",{attrs:{gutter:12}},[r("el-col",{attrs:{sm:24,md:6,lg:6,xl:6}},[r("el-form-item",{attrs:{prop:"first_name_bottom"}},[r("span",[t._v("First Name")]),t._v(" "),r("el-input",{attrs:{placeholder:"First Name"},model:{value:t.formBottom.first_name,callback:function(e){t.$set(t.formBottom,"first_name",e)},expression:"formBottom.first_name"}})],1)],1),t._v(" "),r("el-col",{attrs:{sm:24,md:6,lg:6,xl:6}},[r("el-form-item",{attrs:{prop:"last_name_bottom"}},[r("span",[t._v("Last Name")]),t._v(" "),r("el-input",{attrs:{placeholder:"Last Name"},model:{value:t.formBottom.last_name,callback:function(e){t.$set(t.formBottom,"last_name",e)},expression:"formBottom.last_name"}})],1)],1),t._v(" "),r("el-col",{attrs:{sm:24,md:6,lg:6,xl:6}},[r("el-form-item",{attrs:{prop:"email_bottom"}},[r("span",[t._v("Email")]),t._v(" "),r("el-input",{attrs:{type:"email",placeholder:"Email"},model:{value:t.formBottom.email,callback:function(e){t.$set(t.formBottom,"email",e)},expression:"formBottom.email"}})],1)],1),t._v(" "),r("el-col",{attrs:{sm:24,md:6,lg:6,xl:6}},[r("el-form-item",{attrs:{prop:"password_bottom"}},[r("span",[t._v("Password")]),t._v(" "),r("el-input",{attrs:{type:"password",placeholder:"Password"},model:{value:t.formBottom.password,callback:function(e){t.$set(t.formBottom,"password",e)},expression:"formBottom.password"}})],1)],1)],1),t._v(" "),r("el-button",{staticClass:"register-button-bottom",attrs:{type:"success"},on:{click:function(e){return t.submitFormBottom("formBottom")}}},[t._v("Sign up now")])],1)],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ribbon ribbon-top-left"},[e("span",[this._v(" ALPHA ")])])}],!1,null,"27ec3597",null);e.default=component.exports}}]);