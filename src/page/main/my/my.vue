<template>
  <div class="flex-y flex-y-center">
    <div class="userInfo flex-x flex-y-center">
        <div class="avatar" :style="{'backgroundImage':'url('+userInfo.avatarUrl+')'}"></div>
        <div>
          <div class="userName flex-x flex-y-center flex-x-center">
            <span>{{userInfo.userName}}</span>
            <span class="boy_icon sex_icon" v-if="userInfo.gender==1"></span>
            <span class="girl_icon sex_icon" v-if="userInfo.gender==0||userInfo.gender==2"></span>
          </div>
          <router-link to="/other/user/edit" tag="div" class="edit_info">点击完善个人资料</router-link>
        </div>
        <div class="status_box">
          <div class="status_icon">未认证</div>
        </div>
    </div>
    <!-- <div class="about_icon">
      与我相关
    </div> -->
    <div class="tab flex-x flex-x-around">
        <v-tab v-for="(item,index) in tabList" :key="index" :tabName="item.tabName" :count="item.count" :tabUrl="item.tabUrl" :tabImage="item.tabImage"/>
    </div>
    <div class="column">
      <v-col v-for="(item,index) in colList" :key="index" :colName="item.colName" :colUrl="item.colUrl" :colImage="item.colImage"/>
    </div>
  </div>
</template>

<script>
import Tab from "@/components/main/my/tab.vue"
import Col from "@/components/main/my/column.vue"
import {mapState} from "vuex"
import {MsgModel} from "@/model/msg"
export default {
  name:"my",
  data(){
    return{
      tabList:[
          {
              "tabName": "网抑一下",
              "tabImage": require("../../../assets/images/my/sentence@tag.png"),
              "tabUrl": "/other/sentence",
              "count":0,
          },
          {
              "tabName": "我的消息",
              "tabImage": require("../../../assets/images/my/msg@tag.png"),
              "tabUrl": "/other/msg/center",
              "count":0,
          },
          
          {
              "tabName": "时光邮局",
              "tabImage": require("../../../assets/images/my/mail@tag.png"),
              "tabUrl": "/pages/beforeLetter/index",
              "count":0,
          },
          {
              "tabName": "树洞",
              "tabImage": require("../../../assets/images/my/talk@tag.png"),
              "tabUrl": "/other/hole/holeList",
              "count":0,
          }
      ],
      colList:[
      {
        "colName":"我的喜欢",
        "colImage":require("../../../assets/images/my/like@col.png"),
        "colUrl":"/other/classic/likeList",
      },
      {
        "colName": "意见反馈",
        "colImage": require("../../../assets/images/my/idea@col.png"),
        "colUrl": "/other/about/suggest",
      },
      {
        "colName": "关于我们",
        "colImage": require("../../../assets/images/my/about@col.png"),
        "colUrl": "/other/about/aboutUs",
      },
      {
        "colName": "版本说明",
        "colImage": require("../../../assets/images/my/version@col.png"),
        "colUrl": "/other/about/version",
      },
      // {
      //   "colName": "联系我们",
      //   "colImage": require("../../../assets/images/my/contact@col.png"),
      //   "colUrl": "/pages/contact/index",
      // },
      {
        "colName": "退出登录",
        "colImage": require("../../../assets/images/my/exit@col.png"),
        "colUrl": "/login",
      },
    ],
    }
  },
  components:{
    "v-tab":Tab,
    "v-col":Col
  },
  computed:{
    ...mapState(['userInfo'])
  },
  created(){
    this.get_msg_count()
  },
  methods:{
    // 获取用户未读消息通知数
    get_msg_count(){
      MsgModel.getMyMsgCountTotal().then(res=>{
        let count =res.data.unread
        this.tabList[1].count = count
      })
    }
  }
}
</script>

<style scoped="scoped">
.userInfo{
 
  padding: 0.6rem 0.4rem 0.4rem 0.4rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

}
.userInfo>.avatar{
  width: 1.2rem;
  height: 1.2rem;
  /* background: red; */
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  /* margin: 0 auto; */
}
.userName{
  text-align: center;
  font-size: 0.32rem;
  font-weight: bold;
  font-family: 黑体;
  padding-top: 0.2rem;


}
.userName>span:nth-child(1){
  display: inline-block;
  padding:0 0.1rem 0 0.2rem;
}
.userName>.sex_icon{
  display: inline-block;
  width: 0.32rem;
  height: 0.32rem;
  background-position: center;
  background-size: contain;
}
.userName>.boy_icon{
  background-image: url(../../../assets/images/my/boy_icon.png);
}
.userName>.girl_icon{
  background-image: url(../../../assets/images/my/girl_icon.png);
}
/* .userInfo>.userName>span:last-child{
  font-size: 0.2rem;
  color: #FFFFFF;
  margin-left: 0.1rem;
  width: 0.8rem;
  text-align: center;
  background: #F48041;
  color: #FFFFFF;
  border-radius: 0.05rem;
  margin-right: 0.2rem;
  display: inline-block;
} */
.edit_info{
  color: #c2c2c2;
  font-size: 0.24rem;
  padding:0.1rem 0.2rem;
}
.status_box{
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.status_box>.status_icon{
  background: #464A55;
  color: #F3DAA0;
  padding: 0.1rem 0.3rem;
  font-size: 0.24rem;
  border-radius: 0.08rem;
}
.about_icon{
  padding: 0.08rem 0;
  margin-top: 0.4rem;
  border-bottom: 0.04rem solid #10DFAB;
  font-size: 0.32rem;
}
.tab{
  width: 90%;
  box-sizing: border-box;
  border-bottom: 2px solid #F3F3F3;
  border-top: 2px solid #F3F3F3;
  padding: 0.4rem 0;
  margin: 0.3rem 0;
}
.column{
  width: 90%;

}
</style>