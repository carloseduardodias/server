webpackJsonp([1],[,,,,,,,,,,function(e,t,a){"use strict";var n=a(2),o=a(39),i=a(36),s=a.n(i);n.a.use(o.a),t.a=new o.a({routes:[{path:"/",name:"Hello",component:s.a}]})},function(e,t,a){function n(e){a(33)}var o=a(8)(a(30),a(38),n,null,null);e.exports=o.exports},,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),o=a(11),i=a.n(o),s=a(10);window.axios=a(9),window.axios.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",window.axios.defaults.headers.put["Content-Type"]="application/x-www-form-urlencoded",n.a.config.productionTip=!1,new n.a({el:"#app",router:s.a,template:"<App/>",components:{App:i.a}})},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",data:function(){return{users:{data:[]},toSave:{},updateStatus:!1}},methods:{save:function(){this.updateStatus?this.update():this.create()},getList:function(){var e=this;window.axios.get("/api/users").then(function(t){e.users=t.data})},remove:function(e){var t=this;window.axios.delete("/api/users/"+e).then(function(){t.getList()})},create:function(){var e=this;window.axios.post("/api/users",this.toSave).then(function(){e.toSave={},e.getList()})},update:function(){var e=this;window.axios.put("/api/users/"+this.toSave._id,this.toSave).then(function(){e.toSave={},e.updateStatus=!1,e.getList()})},toUpdate:function(e){this.updateStatus=e._id,this.toSave=e}},mounted:function(){this.getList()}}},function(e,t){},function(e,t){},,,function(e,t,a){function n(e){a(32)}var o=a(8)(a(31),a(37),n,"data-v-22085f10",null);e.exports=o.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h2",[e._v("Gerenciamento de usuários")]),e._v(" "),a("table",[e._m(0),e._v(" "),a("tbody",e._l(e.users.data,function(t){return a("tr",[a("td",[e._v(e._s(t.name))]),e._v(" "),a("td",[e._v(e._s(t.email))]),e._v(" "),a("td",[e._v(e._s(t.password))]),e._v(" "),a("td",[a("a",{attrs:{href:""},on:{click:function(a){a.preventDefault(),e.remove(t._id)}}},[e._v("x")]),e._v("\n          -\n          "),a("a",{attrs:{href:""},on:{click:function(a){a.preventDefault(),e.toUpdate(t)}}},[e._v("update")])])])}))]),e._v(" "),a("form",{on:{submit:function(t){t.preventDefault(),e.save()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.toSave.name,expression:"toSave.name"}],attrs:{type:"text",placeholder:"Nome"},domProps:{value:e.toSave.name},on:{input:function(t){t.target.composing||(e.toSave.name=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.toSave.email,expression:"toSave.email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:e.toSave.email},on:{input:function(t){t.target.composing||(e.toSave.email=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.toSave.password,expression:"toSave.password"}],attrs:{type:"text",placeholder:"Senha"},domProps:{value:e.toSave.password},on:{input:function(t){t.target.composing||(e.toSave.password=t.target.value)}}}),e._v(" "),a("input",{attrs:{type:"submit",value:"+"}})])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("nome")]),e._v(" "),a("th",[e._v("email")]),e._v(" "),a("th",[e._v("senha")]),e._v(" "),a("th")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("h1",[e._v("MongoDB + Express + Vue + Node")]),e._v(" "),a("router-view")],1)},staticRenderFns:[]}}],[29]);
//# sourceMappingURL=app.64eb4f12e953fdd87448.js.map