exports.ids=[15],exports.modules={306:function(o,r,t){"use strict";t.r(r);var e=t(10),n=t.n(e),m={scrollToTop:!1,head(){return{title:this.$t("settings")}},data:()=>({form:new n.a({password:"",password_confirmation:""})}),methods:{async update(){await this.form.patch("/settings/password"),this.form.reset()}}},d=t(3),component=Object(d.a)(m,function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("card",{attrs:{title:o.$t("your_password")}},[t("form",{on:{submit:function(r){return r.preventDefault(),o.update(r)},keydown:function(r){return o.form.onKeydown(r)}}},[t("alert-success",{attrs:{form:o.form,message:o.$t("password_updated")}}),o._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-3 col-form-label text-md-right"},[o._v(o._s(o.$t("new_password")))]),o._v(" "),t("div",{staticClass:"col-md-7"},[t("input",{directives:[{name:"model",rawName:"v-model",value:o.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":o.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:o.form.password},on:{input:function(r){r.target.composing||o.$set(o.form,"password",r.target.value)}}}),o._v(" "),t("has-error",{attrs:{form:o.form,field:"password"}})],1)]),o._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-3 col-form-label text-md-right"},[o._v(o._s(o.$t("confirm_password")))]),o._v(" "),t("div",{staticClass:"col-md-7"},[t("input",{directives:[{name:"model",rawName:"v-model",value:o.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",class:{"is-invalid":o.form.errors.has("password_confirmation")},attrs:{type:"password",name:"password_confirmation"},domProps:{value:o.form.password_confirmation},on:{input:function(r){r.target.composing||o.$set(o.form,"password_confirmation",r.target.value)}}}),o._v(" "),t("has-error",{attrs:{form:o.form,field:"password_confirmation"}})],1)]),o._v(" "),t("div",{staticClass:"form-group row"},[t("div",{staticClass:"col-md-9 ml-md-auto"},[t("v-button",{attrs:{loading:o.form.busy,type:"success"}},[o._v("\n          "+o._s(o.$t("update"))+"\n        ")])],1)])],1)])},[],!1,null,null,"4a30fc1e");r.default=component.exports}};
//# sourceMappingURL=b9098d8bd00f7d0a95e1.js.map