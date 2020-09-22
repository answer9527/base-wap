import Vue from 'vue'
import Router from 'vue-router'
import Main from "../page/main/main.vue"
import Classic from "../page/main/classic/classic.vue"
import Home from "../page/main/home/home.vue"
import My from "../page/main/my/my.vue"
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component:Main,
      children:[
        {
          path:"/main/classic",
          name:"Classic",
          component:Classic
        },
        {
          path:"/main/home",
          name:"Home",
          component:Home
        },
        {
          path:"/main/my",
          name:"My",
          component:My
        }
      ],
      redirect:"/main/classic"
    }
  ]
})
