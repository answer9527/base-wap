// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import store from "./vuex/store"
// 公共的css
import "./assets/css/common.css"

// 公用的方法、过滤器等
import common from "./assets/js/common"
Vue.use(common)

// 全局公共的弹窗
import createAlert from "./components/common/Alert/index"
Vue.use(createAlert)

// 全局引入注册评论组件
import CommentBox from "./components/common/Comment/index"
Vue.component("v-comment-write",CommentBox)

Vue.config.productionTip = false

// 刷新后缓存token
if (sessionStorage.getItem('token')) {
  store.commit('SET_TOKEN', sessionStorage.getItem('token'))
}

// 刷新后缓存的uid
if (sessionStorage.getItem('uid')) {
  store.commit('SET_UID', sessionStorage.getItem('uid'))
}

// 请求拦截器
axios.interceptors.request.use(
  config => {
    let token=store.state.token
    if (token) {
      config.headers.common["Authorization"] = "Bearer "+token;
    }else{
      config.headers.common["Authorization"] ="";
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  let code = error.response.data.code

  // 4000开头的为token异常
  let re =/^4000/
  if(re.test(code)){
    alert(error.response.data.message)
    router.push({path:"/login",replace:true})
  }else if(code!=0){
    alert(error.response.data.message)
  }
  return Promise.reject(error);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
