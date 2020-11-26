// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import store from "./vuex/store"
// 公共的css
import "./assets/css/common.css"

import {Token} from "./utils/token"

// 公用的方法、过滤器等
import common from "./assets/js/common"
Vue.use(common)

// 全局公共的弹窗
import createAlert from "./components/common/Alert/index"
Vue.use(createAlert)

// 全局的公共确认框
import confirmAlert from "./components/common/ConfirmAlert/index"
Vue.use(confirmAlert)

// 全局的选择器组件(作废 需要用标签形式注册)
// import createActionSheet from "./components/common/ActionSheet/index"
// Vue.use(createActionSheet)
import actionSheet from "./components/common/ActionSheet/index"
Vue.use(actionSheet)

// 全局的时间选择器
import pikerTime from "./components/common/PikerTime/index"
Vue.use(pikerTime)

// import ActionSheet from "./components/common/ActionSheet/index.vue"
// Vue.component("v-action-sheet",ActionSheet)

// import openActionSheet from "./components/common/ActionSheet/index.js"
// Vue.use(openActionSheet)

// 全局引入注册评论组件
import CommentBox from "./components/common/Comment/index"
Vue.component("v-comment-write",CommentBox)

// 全局引入加载更多
import LoadMore from "./components/common/LoadMore/index"
Vue.component('v-load-more',LoadMore)

Vue.config.productionTip = false



// 刷新后缓存token
if (sessionStorage.getItem('token')) {
  store.commit('SET_TOKEN', sessionStorage.getItem('token'))
}

// 刷新后缓存的uid
if (sessionStorage.getItem('uid')) {
  store.commit('SET_UID', sessionStorage.getItem('uid'))
}

// 刷新后缓存UserInfo
if(sessionStorage.getItem("userInfo")){
  store.commit("SET_USERINFO",JSON.parse(sessionStorage.getItem("userInfo")))
}

// 监听音频播放器播放结束
if(store.state.player){
  store.state.player.addEventListener('ended',()=>{
    store.commit('SET_PLAYER_STATUS',false)
  })
}

// 请求拦截器
axios.interceptors.request.use(
  config => {
    let token=store.state.token
    if (token) {
      config.headers.common["Authorization"] = "Bearer "+token;
    }else{
      config.headers.common["Authorization"] = "";
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// // 响应拦截器
axios.interceptors.response.use(function (response) {
  return response;
},async function (error) {
  if(error.message.includes('timeout')){
    Vue.prototype.$alert().error("响应超时！")
  }else{
    let code = error.response.data.code
    // axios返回的 报错请求参数情况
    let config = error.config
    // 4000开头的为token异常
    let re =/^4000/
    if(re.test(code)){
      // 
      if(code==40006){
        //  40006 token过期
        await Token.getToken()
        let _again_res = await Token._againRequest(config.url,config.data,config.method)
        return {
          data:_again_res
        }
  
      }else if(code==400010){
        // 400010  暂无权限
        Vue.prototype.$alert().error(error.response.data.message)
      
      }else{
        // 其他权限  出错跳转登录
        Vue.prototype.$alert().error(error.response.data.message)
        router.push({path:"/login",replace:true})
       
      }
  
      // 
    }else if(code!=0){
      Vue.prototype.$alert().error(error.response.data.message)
    }
  }

  return Promise.reject(error);
});

// 路由导航守卫
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
