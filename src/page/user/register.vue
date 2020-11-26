<template>
  <div class="register_page">
        <div class="other_header flex-x flex-x-center">
          <span class="back_icon" @click="()=>this.$router.replace('/login')"><</span>
          <div>用户注册</div>
      </div>
      <div class="form_box">
          <div class="form_row">
              <div>用户昵称</div>
              <input type="text" v-model="userName">
          </div>
            <div class="form_row">
              <div>登录账号</div>
              <input type="text" v-model="account">
          </div>
          <div class="form_row">
              <div>登录密码</div>
              <input type="password" v-model="password">
          </div>
          <div class="form_row">
              <div>确认密码</div>
              <input type="password" v-model="password2">
          </div>
      </div>
      <div class="comfirm" @click="register">立即注册</div>
      <div class="go_login_btn">
          我已注册，<span @click="()=>this.$router.replace('/login')">前往登录吧！</span>
      </div>
      <!-- <div @click="()=>this.$router.replace('/login')">去登录</div> -->
  </div>
</template>

<script>
import {UserModel} from "@/model/user.js"
export default {
    name:"Register",
    data(){
        return{
            userName:"",
            account:"",
            password:"",
            password2:""
        }
    },
    methods:{
        // 确认注册
        register(){
            if(this.userName==""||this.account==""||this.password==""||this.password2==""){
                alert("请填写完整！")
                return false
            }
            if(this.password!=this.password2){
                alert("两次密码不一致!")
                return false
            }
            if(this.account.length<6){
                alert("账号长度必须为6~18位")
                return false
            }
            let params ={
                'userName':this.userName,
                'account':this.account,
                'password':this.password
            }
            UserModel.register(params).then(res=>{
                this.$alert().success(res.message)
                this.$router.replace("/login")
            })
        },
    }
}
</script>

<style scoped="scoped">

.register_page{
    height: 100%;
    background: #F3F3F3;
}
.other_header{
    position: fixed;
    top: 0;
    z-index: 9999;
    background: #60B8C3;
    color: #FFFFFF;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    box-sizing: border-box;
   

}
.other_header>div{
    /* font-family: 黑体; */
    font-size: 0.32rem;
    letter-spacing: 6px;
}
.back_icon{
    position: absolute;
    left: 0;
    margin-left: 0.4rem;
    transform: scale(1.25,2);
}

.form_box{
    display: flex;
    flex-direction: column;
    font-size: 0.28rem;
    padding:1rem 0.2rem 0.6rem 0.2rem;
}
.form_box>.form_row{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #FFFFFF;
    margin-top: 0.2rem;
    padding: 0.24rem;
    border-radius: 0.4rem;
}
.form_row>div{
    width: 1.6rem;
    padding: 0 0.4rem;
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    justify-content: space-between;

}
.form_row>span{
    color: #65B4BE;
}
.form_row>div::after{
    content: "";
    width: 1px;
    height: auto;
    background: #C0C0C0;
}
.form_row>input{
    border: 0;
    height: 0.4rem;
    outline: none;
    flex: 1;
    width: 1rem;
}
.comfirm{
    width: 90%;
    margin: 0 auto;
    color: #FFFFFF;
    text-align: center;
    background: linear-gradient(to right,#6BC0CB,#49A6B1);
    padding: 0.2rem 0;
    border-radius: 0.3rem;
    font-size: 0.3rem;
}
.go_login_btn{
    width: 90%;
    margin: 0 auto;
    text-align: right;
    padding: 0.3rem 0;
    color: #C0C0C0;
}
.go_login_btn>span{
    color: #65B4BE;
}
</style>