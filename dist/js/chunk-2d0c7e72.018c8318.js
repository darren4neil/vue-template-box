(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0c7e72"],{5331:function(e,r,s){"use strict";s.r(r);var o={data:function(){var e=this;return{form:{password:"",newpassword:"",checkpassword:""},rules:{password:[{required:!0,message:"请输入原密码",trigger:"blur"}],newpassword:[{required:!0,message:"请输入新密码",trigger:"blur"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}],checkpassword:[{required:!0,message:"请输入新密码",trigger:"blur"},{validator:function(r,s,o){s!==e.form.newpassword?o(new Error("请确认新密码")):o()}}]}}},methods:{onSubmit:function(){var e=this;this.$refs.form.validate((function(r){r&&e.$store.dispatch("user/editPassword",e.form).then((function(){e.$message({type:"success",message:"修改成功，请重新登录"}),e.$store.dispatch("user/logout").then((function(){e.$router.push("/login")}))})).catch((function(){}))}))}}},t=s("2877"),a=Object(t.a)(o,(function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",[s("page-header",{attrs:{title:"修改密码",content:"定期修改密码可以提高帐号安全性噢~"}}),s("page-main",[s("el-row",[s("el-col",{attrs:{md:24,lg:12}},[s("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[s("el-form-item",{attrs:{label:"原密码",prop:"password"}},[s("el-input",{attrs:{type:"password",placeholder:"请输入原密码"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),s("el-form-item",{attrs:{label:"新密码",prop:"newpassword"}},[s("el-input",{attrs:{type:"password",placeholder:"请输入原密码"},model:{value:e.form.newpassword,callback:function(r){e.$set(e.form,"newpassword",r)},expression:"form.newpassword"}})],1),s("el-form-item",{attrs:{label:"确认新密码",prop:"checkpassword"}},[s("el-input",{attrs:{type:"password",placeholder:"请输入原密码"},model:{value:e.form.checkpassword,callback:function(r){e.$set(e.form,"checkpassword",r)},expression:"form.checkpassword"}})],1)],1)],1)],1)],1),s("fixed-action-bar",[s("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")])],1)],1)}),[],!1,null,null,null);r.default=a.exports}}]);