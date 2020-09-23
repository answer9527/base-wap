// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import store from "./vuex/store"
import "./assets/css/common.css"


Vue.config.productionTip = false

axios.interceptors.request.use(
  config => {

    let token=''
    if (token) {
      config.headers.common["Authorization"] = "Bearer "+token;
    }else{
      config.headers.common["Authorization"] =token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
