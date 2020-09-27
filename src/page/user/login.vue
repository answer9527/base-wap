<template>
  <div class="login_page">
      <div class="w1">欢迎来到陈湖旧事</div>
      <div class="w2">立即登录开启新生活</div>
      <div class="login_bg"></div>
      <div>
          <label for="">账号</label>
          <input type="text" placeholder="请输入您的账号" v-model="account">
      </div>
      <div>
          <label for="">密码</label>
          <input type="password" placeholder="请填写您的密码" v-model="password">
      </div>
      <div @click="login">
          登录
      </div>
  </div>
</template>

<script>
import {UserModel} from "@/model/user.js"
import {mapActions,mapState} from "vuex"
export default {
    name:"Login",
    data(){
        return{
            account:"516994147@qq.com",
            password:"q123456",
            
        }
    },
    computed:{
        ...mapState(['token'])
    },
    created(){
        console.log(this.token)
    },
    methods:{
        ...mapActions(['set_token','set_uid']),
        login(){
           
            let params = {
                account:this.account,
                password:this.password
            }
            UserModel.login(params).then(res=>{
                let token  =res.data.token
                let uid = res.data.uid
                this.set_token(token)
                this.set_uid(uid)
            })
        }
    }
}
</script>

<style scoped="scoped"> 
.login_page{
    width: 100%;
   
    /* background: url(../../assets/images/login_bg.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */
}
.w1{
    text-align: center;
    font-size: 0.3rem;
    padding: 0.2rem 0;
}
.w2{
    text-align: center;
    color: #EF6423;
    font-size: 0.36rem;
    font-weight: bold;

}
.login_bg{
    height: 3.75rem;
    width: 2.5rem;
    background: url(../../assets/images/login_bg.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
}
</style>