import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'hash',
  routes: [
    {
      path:'*',
      redirect:"/main/classic"
    },
    {
      path: '/',
      name: 'Main',
      component:()=>import("../page/main/main.vue"),
      children:[
        {
          path:"/main/classic",
          name:"Classic",
          component:()=>import("../page/main/classic/classic.vue")
        },
        {
          path:"/main/home",
          name:"Home",
          component:()=>import("../page/main/home/home.vue"),
          children:[
            {
              path:"/main/home/movie",
              name:"HomeMovie",
              component:()=>import("../page/main/home/movie.vue")
            },
            {
              path:"/main/home/music",
              name:"HomeMusic",
              component:()=>import("../page/main/home/music.vue")
            },
            {
              path:"/main/home/essay",
              name:"HomeEssay",
              component:()=>import("../page/main/home/essay.vue")
            },
            {
              path:"/main/home/verse",
              name:"HomeVerse",
              component:()=>import("../page/main/home/verse.vue")
            },
            {
              path:"/main/home/story",
              name:"HomeStory",
              component:()=>import("../page/main/home/story.vue")
            },
            {
              path:"/main/home/mood",
              name:"HomeMood",
              component:()=>import("../page/main/home/mood.vue")
            }
           
          ],
          redirect:"/main/home/movie"
        },
        {
          path:"/main/my",
          name:"My",
          component:()=>import("../page/main/my/my.vue")
        }
      ],
      redirect:"/main/classic"
    },
    {
      path:"/other",
      name:'Other',
      component:()=>import("../page/other/other.vue"),
      children:[
        {
          // 传入参数
          path:"/other/classic/detail/:id",
          name:"ClassicDetail",
          component:()=>import("../page/other/classic/detail.vue"),
          meta:{
            name:"陈湖旧事"
          }
        },
        {
          path:"/other/classic/likeList",
          name:"LikeList",
          component:()=>import("../page/other/classic/likeList.vue"),
          meta:{
            name:"我喜欢的"
          }
        },
        {
          path:"/other/about/aboutUs",
          name:"AboutUs",
          component:()=>import("../page/other/about/aboutUs.vue"),
          meta:{
            name:"关于我们",
            bg:"#2B4ADC",
            color:"#FFFFFF"
          }
        },
        {
          path:"/other/about/version",
          name:"Version",
          component:()=>import("../page/other/about/version.vue"),
          meta:{
            name:"版本说明"
          }
        },
        {
          path:"/other/about/suggest",
          name:"Suggest",
          component:()=>import("../page/other/about/suggest"),
          meta:{
            name:"意见反馈",
            bg:"#0AB6FE",
            color:"#FFFFFF"
          }
        },
        // 树洞列表
        {
          path:"/other/hole/holeList",
          name:"HoleList",
          component:()=>import("../page/other/hole/holeList.vue"),
          meta:{
            name:"树洞",
            bg:"#ECF7E7"
          }
        },
        // 新增树洞
        {
          path:"/other/hole/add",
          name:"AddHole",
          component:()=>import("../page/other/hole/addHole.vue"),
          meta:{
            name:"创建树洞",
            bg:"#2B4ADC",
            color:"#FFFFFF"
          }
        },
        // 树洞详情
        {
          path:"/other/hole/detail/:id",
          name:"HoleDetail",
          component:()=>import("../page/other/hole/holeDetail.vue"),
          meta:{
            name:"树洞详情"
          }
        },
        // 消息系统
        // 消息中心
        {
          path:"/other/msg/center",
          name:"MsgCenter",
          component:()=>import("../page/other/msg/msgCenter.vue"),
          meta:{
            name:"消息中心"
          }
        },
        // classic相关消息
        {
          path:"/other/msg/classic",
          name:"ClassicMsg",
          component:()=>import("../page/other/msg/classicMsg.vue"),
          meta:{
            name:"视听消息"
          }
        },
        // 树洞相关的消息
        {
          path:"/other/msg/hole",
          name:"HoleMsg",
          component:()=>import("../page/other/msg/holeMsg.vue"),
          meta:{
            name:"树洞消息"
          }
        },
        // 网抑一下
        {
          path:"/other/sentence",
          name:"Sentence",
          component:()=>import("../page/other/sentence/sentence.vue"),
          meta:{
            name:"网抑一下",
            bg:"#EFF4F8"
          }
        },
        // 修改个人资料
        {
          path:"/other/user/edit",
          name:"UserEdit",
          component:()=>import("../page/user/edit.vue"),
          meta:{
            name:"修改资料",
            bg:"#2F93A2",
            color:"#FFFFFF"
          }
        },
        // 信件列表
        {
          path:"/other/letter/list",
          name:"LetterList",
          component:()=>import("../page/other/letter/letterList.vue"),
          meta:{
            name:"给自己的信",
            bg:"#ECF7E7",
            color:"#000000"
          }
        },
        // 信件详情
        {
          path:"/other/letter/detail/:id",
          name:"LetterDetail",
          component:()=>import("../page/other/letter/letterInfo.vue"),

        },
        // 创建未来的信
        {
          path:"/other/letter/add",
          name:"LetterAdd",
          component:()=>import("../page/other/letter/LetterAdd.vue")
        }

      ]
    },
    {
      path:"/login",
      name:'Login',
      component:()=>import("../page/user/login.vue")
    },
    {
      path:"/register",
      name:"Register",
      component:()=>import("../page/user/register.vue")
    }
  ]
})
