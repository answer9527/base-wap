import Vue from 'vue'
import Router from 'vue-router'
import Main from "../page/main/main.vue"
import Classic from "../page/main/classic/classic.vue"
import Home from "../page/main/home/home.vue"
import HomeMovie from "../page/main/home/movie.vue"
import HomeMusic from "../page/main/home/music.vue"
import HomeEssay from "../page/main/home/essay.vue"
import HomeVerse from "../page/main/home/verse.vue"
import HomeStory from "../page/main/home/story.vue"
import HomeMood from "../page/main/home/mood.vue"
import My from "../page/main/my/my.vue"
import Other from "../page/other/other.vue"
import ClassicDetail from "../page/other/classic/detail.vue"
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
          component:Home,
          children:[
            {
              path:"/main/home/movie",
              name:"HomeMovie",
              component:HomeMovie
            },
            {
              path:"/main/home/music",
              name:"HomeMusic",
              component:HomeMusic
            },
            {
              path:"/main/home/essay",
              name:"HomeEssay",
              component:HomeEssay
            },
            {
              path:"/main/home/verse",
              name:"HomeVerse",
              component:HomeVerse
            },
            {
              path:"/main/home/story",
              name:"HomeStory",
              component:HomeStory
            },
            {
              path:"/main/home/mood",
              name:"HomeMood",
              component:HomeMood
            }
           
          ],
          redirect:"/main/home/movie"
        },
        {
          path:"/main/my",
          name:"My",
          component:My
        }
      ],
      redirect:"/main/classic"
    },
    {
      path:"/other",
      name:'Other',
      component:Other,
      children:[
        {
          // 传入参数
          path:"/other/classic/detail/:id",
          name:"ClassicDetail",
          component:ClassicDetail
        }
      ]
    }
  ]
})
