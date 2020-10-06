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
import LikeList from "../page/other/classic/likeList.vue"
import AboutUs from "../page/other/about/aboutUs"
import Version from "../page/other/about/version"
import Suggest from "../page/other/about/suggest"

// 树洞相关

import HoleList from "../page/other/hole/holeList.vue"
import AddHole from "../page/other/hole/addHole.vue"
import HoleDetail from "../page/other/hole/holeDetail.vue"

// 消息相关
import MsgCenter from "../page/other/msg/msgCenter"
import ClassicMsg from "../page/other/msg/classicMsg"
import HoleMsg from "../page/other/msg/holeMsg"

import Login from "../page/user/login.vue"
import Register from "../page/user/register.vue"
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'*',
      redirect:"/main/classic"
    },
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
          component:ClassicDetail,
          meta:{
            name:"陈湖旧事"
          }
        },
        {
          path:"/other/classic/likeList",
          name:"LikeList",
          component:LikeList,
          meta:{
            name:"我喜欢的"
          }
        },
        {
          path:"/other/about/aboutUs",
          name:"AboutUs",
          component:AboutUs,
          meta:{
            name:"关于我们",
            bg:"#2B4ADC",
            color:"#FFFFFF"
          }
        },
        {
          path:"/other/about/version",
          name:"Version",
          component:Version,
          meta:{
            name:"版本说明"
          }
        },
        {
          path:"/other/about/suggest",
          name:"Suggest",
          component:Suggest,
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
          component:HoleList,
          meta:{
            name:"树洞",
            bg:"#ECF7E7"
          }
        },
        // 新增树洞
        {
          path:"/other/hole/add",
          name:"AddHole",
          component:AddHole,
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
          component:HoleDetail,
          meta:{
            name:"树洞详情"
          }
        },
        // 消息系统
        // 消息中心
        {
          path:"/other/msg/center",
          name:"MsgCenter",
          component:MsgCenter,
          meta:{
            name:"消息中心"
          }
        },
        // classic相关消息
        {
          path:"/other/msg/classic",
          name:"ClassicMsg",
          component:ClassicMsg,
          meta:{
            name:"视听消息"
          }
        },
        // 树洞相关的消息
        {
          path:"/other/msg/hole",
          name:"HoleMsg",
          component:HoleMsg,
          meta:{
            name:"树洞消息"
          }
        }

      ]
    },
    {
      path:"/login",
      name:'Login',
      component:Login
    },
    {
      path:"/register",
      name:"Register",
      component:Register
    }
  ]
})
