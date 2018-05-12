webpackJsonp([12],{PSPV:function(e,t){},Quw4:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("3cXf"),o=s.n(r),a=s("uAC3"),n=s.n(a),i=s("VKKs"),l=(s("YaEn"),{data:function(){return{error:!1,errorMsg:"",tabName:"username",saveLogin:!0,loading:!1,sended:!1,count:60,countButton:"60 s",maxLength:4,errorCode:"",form:{username:"",password:"",mobile:"",verifyCode:""},rules:{username:[{required:!0,message:"账号不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],mobile:[{required:!0,message:"手机号不能为空",trigger:"blur"},{validator:function(e,t,s){/^[1][3,4,5,7,8][0-9]{9}$/.test(t)?s():s(new Error("手机号格式错误"))},trigger:"blur"}]}}},methods:{showErrorMsg:function(e){this.error=!0,this.errorMsg=e},sendVerify:function(){var e=this;this.$refs.mobileLoginForm.validate(function(t){t&&(e.sended=!0,e.countDown())})},countDown:function(){var e=this;if(0===this.count)return this.sended=!1,void(this.count=60);this.countButton=this.count+" s",this.count--,setTimeout(function(){e.countDown()},1e3)},submitLogin:function(){var e=this;"username"===this.tabName?this.$refs.usernameLoginForm.validate(function(t){t&&(e.loading=!0,e.postRequest("/login",{username:e.form.username,password:e.form.password,saveLogin:e.saveLogin}).then(function(t){!0===t.success?(Object(i.b)("accessToken",t.result),e.saveLogin&&(localStorage.saveLogin="true"),e.getRequest("/user/info").then(function(t){if(!0===t.success){n.a.set("userInfo",t.result),e.$store.commit("setAvatarPath",t.result.avatar);var s=[];null!==t.result.roles&&t.result.roles.forEach(function(e){null!==e.access&&s.push(e.access)}),n.a.set("access",o()(s)),e.$router.push({name:"home_index"})}e.loading=!1})):e.loading=!1}))}):"mobile"===this.tabName&&this.$refs.mobileLoginForm.validate(function(t){if(t){if(""===e.form.verifyCode)return void(e.errorCode="验证码不能为空");e.errorCode="",e.showErrorMsg("页面演示，暂不支持短信登录")}})},getIpInfo:function(){this.getRequest("/common/ip/info").then(function(e){if(!0===e.success){var t=JSON.parse(e.result);if("200"===t.retCode){var s=t.result[0],r=s.weather+" "+s.temperature+" 污染指数: "+s.pollutionIndex;n.a.set("city",s.city),n.a.set("weather",r)}else n.a.set("city","未知"),n.a.set("weather","未知")}})}},mounted:function(){this.$Notice.info({title:"体验账号密码",desc:"账号：test 密码：123456 已开放注册！"}),this.getIpInfo()}}),c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Row",{staticClass:"login",attrs:{type:"flex",justify:"center",align:"middle"},on:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.submitLogin(t):null}}},[r("Col",{staticStyle:{width:"368px"},attrs:{xs:{span:22}}},[r("Row",{staticClass:"header"},[r("img",{attrs:{src:s("Cq5Z"),width:"220px"}}),e._v(" "),r("div",{staticClass:"description"},[e._v("X-Boot 是很不错的Web前后端分离架构脚手架")])]),e._v(" "),e.error?r("Alert",{attrs:{type:"error","show-icon":""}},[e._v(e._s(e.errorMsg))]):e._e(),e._v(" "),r("Row",{staticClass:"login-form"},[r("Tabs",{model:{value:e.tabName,callback:function(t){e.tabName=t},expression:"tabName"}},[r("TabPane",{attrs:{label:"账户密码登录",name:"username",icon:"person"}},[r("Form",{ref:"usernameLoginForm",staticClass:"form",attrs:{model:e.form,rules:e.rules}},[r("FormItem",{attrs:{prop:"username"}},[r("Input",{attrs:{size:"large",clearable:"",placeholder:"请输入用户名"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}},[r("span",{attrs:{slot:"prepend"},slot:"prepend"},[r("Icon",{attrs:{size:16,type:"person"}})],1)])],1),e._v(" "),r("FormItem",{attrs:{prop:"password"}},[r("Input",{attrs:{type:"password",size:"large",clearable:"",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}},[r("span",{attrs:{slot:"prepend"},slot:"prepend"},[r("Icon",{attrs:{size:14,type:"locked"}})],1)])],1)],1)],1),e._v(" "),r("TabPane",{attrs:{label:"手机号登录",name:"mobile",icon:"iphone"}},[r("Form",{ref:"mobileLoginForm",staticClass:"form",attrs:{model:e.form,rules:e.rules}},[r("FormItem",{attrs:{prop:"mobile"}},[r("Input",{attrs:{size:"large",clearable:"",placeholder:"请输入手机号"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}},[r("span",{attrs:{slot:"prepend"},slot:"prepend"},[r("Icon",{attrs:{size:18,type:"iphone"}})],1)])],1),e._v(" "),r("FormItem",{attrs:{prop:"verifyCode",error:e.errorCode}},[r("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"space-between"}},[r("Input",{staticClass:"input-verify",attrs:{size:"large",clearable:"",placeholder:"请输入短信验证码",maxlength:e.maxLength},model:{value:e.form.verifyCode,callback:function(t){e.$set(e.form,"verifyCode",t)},expression:"form.verifyCode"}},[r("span",{attrs:{slot:"prepend"},slot:"prepend"},[r("Icon",{attrs:{size:14,type:"ios-email-outline"}})],1)]),e._v(" "),e.sended?e._e():r("Button",{staticClass:"send-verify",attrs:{size:"large"},on:{click:e.sendVerify}},[e._v("获取验证码")]),e._v(" "),e.sended?r("Button",{staticClass:"count-verify",attrs:{size:"large",disabled:""}},[e._v(e._s(e.countButton))]):e._e()],1)],1)],1)],1)],1),e._v(" "),r("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"space-between"}},[r("Checkbox",{attrs:{size:"large"},model:{value:e.saveLogin,callback:function(t){e.saveLogin=t},expression:"saveLogin"}},[e._v("自动登录")]),e._v(" "),r("a",{staticClass:"forget-pass"},[e._v("忘记密码")])],1),e._v(" "),r("Row",[r("Button",{staticClass:"login-btn",attrs:{type:"primary",size:"large",loading:e.loading,long:""},on:{click:e.submitLogin}},[e.loading?r("span",[e._v("登录中...")]):r("span",[e._v("登录")])])],1),e._v(" "),r("Row",{staticClass:"code-row-bg other-login",attrs:{type:"flex",justify:"space-between"}},[r("span",{staticClass:"other-way"},[e._v("\n                    其它方式登录\n                    "),r("icon",{staticClass:"other-icon",attrs:{name:"brands/qq"}}),e._v(" "),r("icon",{staticClass:"other-icon lower",attrs:{scale:"1.2",name:"brands/weixin"}}),e._v(" "),r("icon",{staticClass:"other-icon lower",attrs:{scale:"1.2",name:"brands/weibo"}})],1),e._v(" "),r("router-link",{attrs:{to:"/regist"}},[r("a",{staticClass:"forget-pass"},[e._v("注册账户")])])],1)],1),e._v(" "),r("Row",{staticClass:"foot"},[r("Row",{staticClass:"code-row-bg help",attrs:{type:"flex",justify:"space-around"}},[r("a",{staticClass:"item"},[e._v("帮助")]),e._v(" "),r("a",{staticClass:"item"},[e._v("隐私")]),e._v(" "),r("a",{staticClass:"item"},[e._v("条款")])]),e._v(" "),r("Row",{staticClass:"code-row-bg copyright",attrs:{type:"flex",justify:"center"}},[e._v("\n                Copyright © 2018 "),r("a",{staticStyle:{margin:"0 5px"},attrs:{href:"http://exrick.cn",target:"_blank"}},[e._v("Exrick")]),e._v(" Presents\n            ")])],1)],1)],1)},staticRenderFns:[]};var u=s("Z0/y")(l,c,!1,function(e){s("PSPV")},null,null);t.default=u.exports}});
//# sourceMappingURL=12.792e5d28608614fdf1a6.js.map