(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{295:function(t,e,s){var i=s(401);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(27).default)("383d987e",i,!0,{})},400:function(t,e,s){"use strict";var i=s(295);s.n(i).a},401:function(t,e,s){(t.exports=s(26)(!1)).push([t.i,"h1.home-title{margin-bottom:.5rem}.is-vertical-center{display:flex;justify-content:center;align-items:center}div.project-container{position:relative;min-width:22rem}div.project-item{border-style:solid;border-radius:4px;min-height:20rem}div.project-empty{background:#c7d9e8}div.project-empy:hover{border-color:pink}.project-dropdown{position:absolute;top:24px;right:32px;font-size:18px;cursor:pointer}.plus-icon{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:65px}.plus-icon:hover{background:#000;border-radius:40px;opacity:.6;cursor:pointer}.fade-enter,.fade-leave-to{transition:opacity 5.5s ease-out}.fade-enter-to,.fade-leave{transition:opacity 5.5s ease-in}.fade-enter-active,.fade-leave-active{transition:opacity .3s}",""])},585:function(t,e,s){"use strict";s.r(e);s(22);var i=s(6),o=s.n(i),r=s(24),a=s.n(r),n=s(21),c=s(39),l=s.n(c),p={layout:"default",middleware:"auth",head:function(){return{title:this.$t("home")}},data:function(){return{projectsExist:!1,iconAcitvated:!0,inputActivated:!1,inputName:"column is-2 input-big has-text-centered is-3 project-container",form:new l.a({project_name:"",user_id:"",private:!0})}},computed:a()({},Object(n.b)({user:"auth/user",projects:"project/getProjects"})),mounted:function(){var t=o()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("project/fetchProjects");case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{showProjectNameInput:function(){this.inputName="column has-text-centered is-6 project-container",this.projects[0]=null,this.iconAcitvated=!1,this.inputActivated=!0},createProject:function(){var t=o()(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.form.user_id=this.user.id,console.log(this.form),t.next=4,this.form.post("user/project/create");case 4:e=t.sent,s=e.data,console.log(s),this.$store.dispatch("project/createProject",{project_name:s.project_name,user_id:s.user_id,private:s.private}),this.$router.push({name:"project.create"});case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),changeProjectName:function(){},cancelProject:function(){this.form.project_name="",this.inputActivated=!1,this.iconAcitvated=!0,this.inputName="column has-text-centered is-3 project-container"}}},u=(s(400),s(5)),m=Object(u.a)(p,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"home-card"},[t.projects.length<1?s("h1",{staticClass:"title is-1 home-title"},[t._v("Looks like you haven't created any Projects yet")]):s("h1",{staticClass:"title is-1 home-title"},[t._v(t._s(t.$t("your_projects")))])]),t._v(" "),s("div",{staticClass:"columns  is-multiline project-list"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.projects.length>=1,expression:"projects.length >= 1"}],staticClass:"column is-3"},[s("div",{staticClass:"project-item  project-empty has-text-centered is-vertical-center"},[s("div",{staticClass:"column is-11 project-name "},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.project_name,expression:"form.project_name"}],staticClass:"input title is-3",attrs:{type:"text",placeholder:"Project Name..."},domProps:{value:t.form.project_name},on:{input:function(e){e.target.composing||t.$set(t.form,"project_name",e.target.value)}}}),t._v(" "),s("button",{staticClass:"button is-success",on:{click:t.createProject}},[t._v(t._s(t.$t("create_project")))]),t._v(" "),s("button",{staticClass:"button is-danger",on:{click:t.cancelProject}},[t._v(t._s(t.$t("cancel")))])])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.projects.length<1,expression:"projects.length < 1"}],staticClass:"column is-3"},[s("div",{staticClass:"project-item  project-empty has-text-centered is-vertical-center"},[s("div",{staticClass:"column is-11 project-name "},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.project_name,expression:"form.project_name"}],staticClass:"input title is-3",attrs:{type:"text",placeholder:"Project Name..."},domProps:{value:t.form.project_name},on:{input:function(e){e.target.composing||t.$set(t.form,"project_name",e.target.value)}}}),t._v(" "),s("button",{staticClass:"button is-success",on:{click:t.createProject}},[t._v(" Create ")]),t._v(" "),s("button",{staticClass:"button is-danger",on:{click:t.cancelProject}},[t._v("Cancel")])])])]),t._v(" "),t._l(t.projects,function(e){return null==e?s("div",{key:e,class:t.inputName},[s("div",{staticClass:"project-item  project-empty has-text-centered is-vertical-center"},[t.iconAcitvated?s("fa",{staticClass:"plus-icon",attrs:{icon:"plus"},on:{click:t.showProjectNameInput}}):t._e(),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("div",{staticClass:"column is-11 project-name "},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.inputActivated,expression:"inputActivated"}],staticClass:"field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.project_name,expression:"form.project_name"}],staticClass:"input title is-3",attrs:{type:"text",placeholder:"Project Name..."},domProps:{value:t.form.project_name},on:{input:function(e){e.target.composing||t.$set(t.form,"project_name",e.target.value)}}})]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.inputActivated,expression:"inputActivated"}],staticClass:"field"},[s("a",{attrs:{href:"project/create"}},[s("button",{staticClass:"button is-success",on:{click:t.createProject}},[t._v(" Create ")])]),t._v(" "),s("button",{staticClass:"button is-danger",on:{click:t.cancelProject}},[t._v("Cancel")])])])])],1)]):s("div",{staticClass:"column is-3 project-container"},[s("div",{staticClass:"dropdown is-right project-dropdown",class:{"is-active":e.isActive}},[s("div",{staticClass:"dropdown-trigger"},[s("button",{staticClass:"button",attrs:{"aria-haspopup":"true","aria-controls":"dropdown-menu"},on:{click:function(t){e.isActive=!e.isActive}}},[s("span",{staticClass:"icon is-small"},[s("fa",{attrs:{icon:"ellipsis-h"}})],1)])]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"project-item project-empty has-text-centered is-vertical-center"},[t._v("\n          "+t._s(e.name)+"\n        ")])])})],2)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dropdown-menu",attrs:{role:"menu"}},[e("ul",{staticClass:"box dropdown-items"},[e("li",{staticClass:"dropdown-item"},[this._v("Rename")]),this._v(" "),e("li",{staticClass:"dropdown-item"},[this._v("Download")]),this._v(" "),e("li",{staticClass:"dropdown-item"},[this._v("Delete")])])])}],!1,null,null,null);m.options.__file="home.vue";e.default=m.exports}}]);