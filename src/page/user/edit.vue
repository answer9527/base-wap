<template>
  <div>
        <div class="form_box">
          <div class="form_row">
              <div>账号</div>
              <div class="user_count">{{userInfo.account}}</div>
          </div>
          <div class="form_row">
              <div>昵称</div>
              <div>
                  <input type="text" placeholder="请填写您的昵称" v-model="userName"/>
              </div>
          </div>
            <div class="form_row" @click="open_sex_sheet">
              <div>性别</div>
              <div>
                  <span>{{this.gender==1?'男':"女"}}</span>
              </div>
          </div>
          <div class="form_row">
              <div>头像</div>
              <div :style="{'backgroundImage':'url('+avatarUrl+')','backgroundSize':'contain','backgroundPosition':'center'}">
                  <input type="file" ref="fileInt" @change="changeHandle"  v-if="avatarUrl" class="person_avatar" style="opacity:0"/>
                  <div v-else class="add_avatar_btn">
                      <input class="ten_icon" ref="fileInt" type="file" @change="changeHandle"/>
                  </div>
              </div>
          </div>
      </div>
      <div class="comfirm_edit" @click="comfirm_edit">
          确认修改
      </div>
      <v-action-sheet :propData="actionProps" @confirm_sheet="confirm_sheet" ref="actionSheet"/>
  </div>
</template>


<script>
import {UserModel} from "@/model/user.js"
import axios from "axios"
import {mapActions,mapState} from "vuex"
import {Http} from "@/utils/http.js"
export default {
    name:"personal_page",
    data(){
        return{
            avatarUrl:this.$store.state.userInfo.avatarUrl,
            userName:this.$store.state.userInfo.userName,
            gender:this.$store.state.userInfo.gender,
            actionProps:{
                "title":"请选择您的性别",
                "type":"sex",
                "list":[
                    {
                        "label":"男",
                        "value":1
                    },
                    {
                        "label":"女",
                        "value":2
                    }
                ]
            }
        }
    },
    computed:{
        ...mapState(['userInfo']),
    },
    created(){
       
    },
    methods:{
        ...mapActions(['set_userinfo']),
        changeHandle(){
            const file = this.$refs.fileInt.files[0];
            Http.upload("/upload/file",file).then(res=>{
                this.$alert().success(res.message)
                this.avatarUrl = res.data
            })
        },
        open_sex_sheet(){
            this.$refs.actionSheet.show()
        },
        confirm_sheet(e){
            this.gender = e.value
        },
        comfirm_edit(){
            let params = {
                "userName":this.userName,
                "avatarUrl":this.avatarUrl,
                "gender":this.gender
            }
            UserModel.updateMyInfo(params).then(res=>{
                let temp = this.$store.state.userInfo
                temp.avatarUrl = this.avatarUrl
                temp.userName = this.userName
                temp.gender = this.gender
                this.set_userinfo(temp)
                this.$alert().success(res.message)
            })
        }
    }

}
</script>

<style scoped="scoped">
    .personal_page{
        height: 100%;
        background: #F3F3F3;
        font-size: 0.28rem;
    }
    .form_box{
        display: flex;
        flex-direction: column;
        background: #FFFFFF; 
    }
    .form_box>.form_row{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0.4rem;
        border-bottom: 1px solid #F3F3F3;
    }
    .form_row .user_count{
        color: #C2C2C2;
    }
    .form_row input{
        text-align: right;
        border: 0;
        outline: none;
    }
    .person_avatar{
        width: 1.1rem;
        height: 1.1rem;
    }
    .add_avatar_btn{
        padding: 0.2rem;
        border: 1px solid #DDDDDD;
        box-sizing: border-box;
        
    }
    .ten_icon{
        width: 0.7rem;
        height: 0.7rem;
        /* background-image:url(../../assets/ten.png) ; */
        background-position: center;
        background-size: contain;
    }
    .comfirm_edit{
        width: 86%;
        margin: 0 auto;
        color: #FFFFFF;
        text-align: center;
        background: linear-gradient(to right,#6BC0CB,#49A6B1);
        padding: 0.2rem 0;
        margin-top: 0.6rem;
        border-radius: 0.3rem;
    }
</style>