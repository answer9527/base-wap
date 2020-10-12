<template>
  <div class="login_page">
      <router-link to="/" class="back_icon" tag="span"><</router-link>
      <div class="top_bg">
        <span class="logo"></span>
        <div class="sys-name">陈湖旧事欢迎您</div>
      </div>
      <div class="ware"></div>
      <div class="bottom_box">
          <div>
              <div class="form_row">
                  <span></span>
                  <input type="text" placeholder="请输入账号" v-model="account">
              </div>
              <div class="form_row">
                  <span></span>
                  <input type="password" placeholder="请输入密码" v-model="password">
              </div>
          </div>
          <div class="login_btn" @click="login">立即登录</div>
          <div class="register_btn">
              还没有账号？ <span @click="()=>this.$router.replace('/register')">立即注册</span>
          </div>
      </div>
  </div>
</template>

<script>
import {UserModel} from "../../model/user"
import {mapActions} from "vuex"
export default {
    name:"login",
    data(){
        return{
            account:"",
            password:"",
            before_route:"",
            
        }
    },
    created(){
        // 清除登录态
        this.del_token_userinfo()
    },
    beforeRouteEnter(to, from, next){
        next(vm=>{
            vm.before_route=from.fullPath
        })
    },
    methods:{
       ...mapActions(["set_token",'set_uid','set_userinfo','del_token_userinfo','reset_classic_about']),
       login(){
            let params = {
                "loginType":1,
                "account":this.account,
                "password":this.password
            }
            UserModel.login(params).then(res=>{
                let result = res.data
                let token = result.token
                let uid = result.uid
                 // 保存token
                this.set_token(token)
                // 保存uid
                this.set_uid(uid)
                // 保存用户信息
                this.set_userinfo(result.userInfo)
                this.reset_classic_about()
                if(this.before_route=="/register"){

                    // 如果是从register跳进来的,则从浏览器的history跳回上一个
                    this.$router.go(-1)
                }else{

                    // 使用replace 可以不向history中加入login的路由记录  所有后退不会退到这里
                    this.$router.replace(this.before_route)
                }
            })
       },

       
    }
}
</script>

<style scoped="scoped">
.login_page{


}
.back_icon{
    display: inline-block;
    position: fixed;
    left: 0;
    top: 0.2rem;
    margin-left: 0.4rem;
    transform: scale(1.25,2);
    color: #FFFFFF;
}
.top_bg{
    height: 3.2rem;
    width: 100%;
    background: linear-gradient(to bottom,#69BFC9,#4CA8B6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
}
.logo{
    display: inline-block;
    width: 1.4rem;
    height: 1.4rem;
    background: url(../../assets/images/logo.png);
    background-size: cover;
    /* border-radius: 50%; */
}
.sys-name{
    color: #FFFFFF;
    font-size:0.4rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 0.1rem;
    padding-top: 0.2rem;
}
.ware{
    height: 1.2rem;
    background: url(../../assets/images/ware.png) no-repeat;
    background-size: contain;
}
.bottom_box{
       padding:80px 40px;
    box-sizing: border-box;

}
.bottom_box>div:nth-child(1){
    display: flex;
    flex-direction: column;

}
.bottom_box .form_row{
    display: flex;
    flex-direction: row;
    padding: 10px 0;
    border-bottom: 2px solid #F7F7F7;
}
.form_row>span{
    display: inline-block;
    width: 0.45rem;
    height: 0.45rem;
    
}
.form_row>input{
    flex: 1;
    border: 0;
    outline: none;
    padding: 5px 0.6rem;
    font-size: 0.28rem;
    letter-spacing: 1px;
    color: #9F9F9F;
}
.form_row:nth-child(1)>span{
    background: url(../../assets/images/user.png) no-repeat;
    background-size: contain;
    background-position: center;
}
.form_row:nth-child(2)>span{
    background: url(../../assets/images/pwd.png) no-repeat;
    background-size: contain;
    background-position: center;
}
.login_btn{
    font-size: 0.32rem;
    text-align: center;
    background: linear-gradient(to right,#6BC0CB,#49A6B1);
    color: #FFFFFF;
    border-radius: 0.6rem;
    padding: 0.2rem 0;
    margin: 0.6rem 0 0.3rem 0;
}
.register_btn{
    font-size: 0.28rem;
    border-radius: 0.6rem;
    padding: 0.2rem 0;
    border: 1px solid #D2D2D2;
    /* display: flex; */
    color: #999999;
    text-align: center;
}
.register_btn>span{
    color: #76BBC3;

}
</style>