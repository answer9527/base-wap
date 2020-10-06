<template>
  <div class="msg_card" v-if="show_card">
      <div class="card_con">
          <div class="card_left">
            <div class="avatar" :style="{'backgroundImage':'url('+avatarUrl+')'}"></div>
          </div>
          <div  class="card_right" bind:longtap="delete_it">
              <div class="" >
                  <div class="comment">
                      <span class="user">{{userName}}</span> {{isRoot?"点评道":"回复道"}}:  
                  </div>
                  <div class="">
                      <div class="content"> 
                          <div class="con_left"></div>
                          <div>{{content}}</div>
                          <div class="con_right"></div>
                      </div>  
                  </div>
                  <div class="card_in">
                      <div class="title_row">
                          <div>来自:</div>
                          <div class="title" @click="go_host">《{{title}}》</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div class="reply_row">
          <input type="text" placeholder="请填写回复的内容" v-model="reply_txt"/>
          <div class="reply_btn" @click="reply_it">快速回复</div>
      </div>
      <div class="status" v-if="isRead"></div>
  </div>
</template>

<script>
import {CommentModel} from "@/model/comment.js"
import {HoleModel} from "@/model/hole.js"
import {MsgModel} from "@/model/msg.js"
export default {
  name: "MsgCard",
  data() {
    return {
      reply_txt:"",
      dialog_show:false,
      show_card:true
    };
  },
  props: {
    ids: {
      type: Number,
    },
    commentId: {
      type: Number,
    },
    commentPid: {
      type: Number,
    },
    commentUid: {
      type: Number,
    },
    title: {
      type: String,
    },
    holeOrClassicId: {
      type: Number,
    },
    userName: {
      type: String,
    },
    content: {
      type: String,
    },
    isRoot: {
      type: Boolean,
    },
    isRead: {
      type: Boolean,
    },
    avatarUrl: {
      type: String,
    },
    type: {
      type: Number,
    },
  },
  methods:{
    delete_it(){

    },
    confirm_del(){

    },
    go_host(){
     
      let url;
      if(this.type==1){
        url='/other/classic/detail/'+this.holeOrClassicId
      }else if(this.type==2){
        url='/other/hole/detail/'+this.holeOrClassicId
      }
      this.$router.push(url)
    },
    // 快速回复
    reply_it(){
      if(this.reply_txt==""){
        this.$alert().error("请完整填写！")
        return false
      }
      // 当commentPid等于0时候使用commentId
      let params ={
        content:this.reply_txt,
        pid:this.commentPid||this.commentId,
        uid_r:this.commentUid
      }
      let type = this.type
      if(type==1){
        params.classicId=this.holeOrClassicId
        CommentModel.insertComment(params).then(res=>{
          this.sendSuccess()
        })
      }else if(type==2){
        params.hid = this.holeOrClassicId
        HoleModel.insert_comment(params).then(res=>{
          this.sendSuccess()
        })
      }
      
    },
    // 回复成功后的操作
    sendSuccess(){
      this.$alert().success("回复成功！")
      this.setRead()
      this.reply_txt=""
    },
        // 设置已读
    setRead(){
      if(!this.isRead){
        MsgModel.setMyMsgRead({
          id:this.ids
        }).then(res=>{
          this.isRead = true
        })
      }
    },
  }
};
</script>

<style scoped="scoped">
.msg_card{
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    padding:0.4rem 0.2rem;
    border-radius: 0.2rem;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    border-top-right-radius: 0;
}
.card_con{
    width: 100%;
    display: flex;
    flex-direction: row;
}
.msg_card>.status{
    width: 0.8rem;
    height: 0.8rem;
    background: url(../../assets/images/isRead.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;

}
.card_left{
    position: relative;
}
.card_left>.avatar{
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-position: center;
    background-size: contain;
}

.card_right{
    padding-left:0.4rem;
    flex: 1;
}
.title_row{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 0.28rem;
}
.title{
    color: #295C9D;
}
.card_in{
    display: flex;
    flex-direction: column;
}
.comment{
    display: flex;
    flex-direction: row;
    font-size: 0.28rem;
}
.user{
    color: #295C9D; 
    padding-right: 0.1rem;
}
.content{
    color: #949494;
    position: relative;
    padding: 0.1rem 0.3rem;
    margin: 0.2rem 0;
    /* text-align: center; */
    font-size: 0.28rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.con_left{
    width: 0.14rem;
    height: 0.14rem;
    position: absolute;
    top: 0;
    left: 0;
    background-image:url(../../assets/images/intro_left.png) ;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
.con_right{
    width: 0.14rem;
    height: 0.14rem;
    position: absolute;
    bottom: 0;
    right: 0;
    background-image:url(../../assets/images/intro_right.png) ;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}


.reply_row{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.24rem;
    flex: 1;
    padding-top: 0.3rem;
  
}
.reply_row>input{
    outline: none;
    height: 0.6rem;
    flex: 1;
    border: 0.01rem solid #CCCCCC;
    border-right: 0;
    padding-left: 0.4rem;
    border-top-left-radius:0.6rem;
    border-bottom-left-radius: 0.6rem;
}
.reply_row>.reply_btn{
    background: #E7930C;
    height: 0.6rem;
    line-height: 0.6rem;
    color: #FFFFFF;
    padding: 0 0.16rem;
    border: 0.01rem solid #CCCCCC;
    border-left: 0;
    border-top-right-radius:0.6rem;
    border-bottom-right-radius: 0.6rem;
}

</style>