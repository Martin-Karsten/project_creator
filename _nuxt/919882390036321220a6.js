(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{615:function(e,r,t){var content=t(713);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(18).default)("628d381a",content,!0,{sourceMap:!1})},712:function(e,r,t){"use strict";var o=t(615);t.n(o).a},713:function(e,r,t){(e.exports=t(17)(!1)).push([e.i,".login-form-col{width:75%;height:100%;margin-top:2rem}",""])},885:function(e,r,t){"use strict";t.r(r);t(14);var o=t(4),l=t(56),n=t.n(l),m={head:function(){return{title:this.$t("login")}},data:function(){return{form:new n.a({email:"",password:""}),remember:!1,rules:{email:[],password:[]}}},methods:{submitForm:function(){var e=this;this.$refs.form.validate(function(r){if(!r)return!1;e.login()})},login:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.$store.commit("Project/CREATE_SAMPLE_PROJECT",{project_id:"5945c961-e74d-478f-8afe-da53cf4189e3",project_name:"sample_project",user_id:1,private:!0}),this.$store.dispatch("auth/saveToken",{token:123,remember:!1}),e.next=4,this.$store.dispatch("auth/fetchUser");case 4:this.$router.push({name:"home"});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},c=(t(712),t(5)),component=Object(c.a)(m,function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-main",{staticClass:"general-container"},[t("el-col",{staticClass:"login-form-col",attrs:{offset:5}},[t("div",{staticClass:"login-warning"},[t("h3",[e._v(e._s(e.$t("login_warning")))])]),e._v(" "),t("el-form",{ref:"form",staticClass:"login-form",attrs:{"label-position":"top",model:e.form,"label-width":"120px"}},[t("el-form-item",{attrs:{prop:"email",label:"Email Address",rules:[{required:!0,message:"Please input your email address",trigger:"blur"},{type:"email",message:"Please input a correct email address",trigger:["blur","change"]}]}},[t("el-col",{attrs:{span:20}},[t("el-input",{staticClass:"input is-medium",attrs:{type:"email",placeholder:"Email",name:"email",autocomplete:"on"},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"email"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"Password",prop:"password",rules:[{required:!0,message:"Please input your password",trigger:"blur"}]}},[t("el-col",{attrs:{span:20}},[t("el-input",{staticClass:"input is-medium",class:{"is-invalid":e.form.errors.has("password")},attrs:{type:"password",placeholder:"Password",name:"password"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}}),e._v(" "),t("has-error",{attrs:{form:e.form,field:"password"}})],1)],1),e._v(" "),t("el-form-item",[t("el-checkbox",{model:{value:e.remember,callback:function(r){e.remember=r},expression:"remember"}},[e._v("\n        "+e._s(e.$t("remember_me"))+"\n      ")])],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v(e._s(e.$t("login")))]),e._v(" "),t("router-link",{attrs:{to:"/register"}},[t("el-button",{attrs:{type:"primary"}},[e._v(e._s(e.$t("register")))])],1)],1)],1)],1)],1)},[],!1,null,null,null);r.default=component.exports}}]);