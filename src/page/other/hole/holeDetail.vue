<template>
  <div>
      <div class="page_in">
          <div class="hole_box">
              <div class="user">
                  <div class="user_left">
                      <div class="user_avatar" :style="{'backgroundImage':'url('+holeInfo.avatarUrl+')'}"></div>
                      <div :class="['user_name',{'man':holeInfo.gender==1}]">
                          {{holeInfo.userName}}
                      </div>
                  </div>
                  <div class="type_tag public_tag" v-if="holeInfo.type==1">公开</div>
                  <div class="type_tag no_name_tag" v-if="holeInfo.type==2">匿名</div>
                  <div class="type_tag secret_tag" v-if="holeInfo.type==3">秘密</div>
              </div>
            <div class="hole_detail">
                <div class="hole_title">{{holeInfo.title}}</div>
                <div class="hole_content">{{holeInfo.content}}</div>
                <div class="hole_time flex-x flex-y-center">
                    <div>{{$common.formatTime(holeInfo.createTime,"-",2)}}</div>
                    <div class="del_btn" v-if="uid==holeInfo.uid" @click="del_hole">删除</div>
                </div>
            </div>
          </div>
          <div class="comment_box">
              <div class="comment_nav">相关评论</div>

              <div class="root_comment_out" v-if="holeInfo.commentVisible==1">
                  <div class="root_comment" v-if="comment_list.length>0">
                        <v-hole-comment v-for="(item,index) in comment_list" :key="index"
                        :commentId="item.id"
                        :commentUid="item.uid"
                        :userAvatar="item.userAvatar" 
                        :userName="item.userName" 
                        :content="item.content"
                        :createTime="item.createTime"
                        :childComment="item.child"
                        @open_input="open_reply_input"
                        @del_comment="del_comment"
                    />
                  </div>
                    <div class="no_more_box flex-y flex-y-center" v-else>
                        <div class="no_more"></div>
                        <div>暂无评论</div>
                    </div>
              </div>
              <div class="no_limits_box flex-y flex-y-center" v-if="holeInfo.commentVisible==0">
                    <div class="no_limits"></div>
                    <div>该树洞设置了评论不可见</div>
              </div> 
          </div>
      </div>
      <v-comment-write :placeholder="placeholder" :disabled="disabled" :textarea_pla="textarea_pla" ref="commentWrite" 
        @resetTextPla="resetTextPla" 
        @root_comment="root_comment" 
        @reply_comment="reply_comment"/>
  </div>
</template>

<script>
import {HoleModel} from "@/model/hole.js"
import {mapState} from "vuex"
import HoleComment from "@/components/classic/comment/comment.vue"
export default {
    name:"HoleDetail",
    data(){
        return{
           hole_id:null,
           holeInfo:{},
           size:10,
           page:1,
           comment_list:[],
           hasNextPage:false,
           textarea_pla:"文明发言，理性讨论！",
           placeholder:"请填写您的评论，文明发言！",
           reply_temp:{}
        }
    },
   async created(){
        this.hole_id = this.$route.params.id
        let hole_result = await this.get_hole_detail()
        this.holeInfo = hole_result.data
        if(this.holeInfo.commentVisible){
            this.get_hole_comment()
        }
        
    },
    components:{
        "v-hole-comment":HoleComment
    },
    computed:{
        ...mapState(['uid']),
        disabled(){
            if(this.holeInfo.canComment==1){
                this.placeholder = "请填写您的评论，文明发言！"
            }else{
               this.placeholder = "该树洞设置不可评论！"
            }
            return this.holeInfo.canComment==1
        }
    },
    methods:{
        // 获取树洞详情
        async get_hole_detail(){
            return await HoleModel.get_by_id(this.hole_id)

        },
        // 获取树洞的点评列表
        get_hole_comment(){
            let params = {
                page:this.page,
                size:this.size,
                key:this.holeInfo.id
            }
            HoleModel.get_Comment(params).then(res=>{
                this.hasNextPage = res.data.hasNextPage
                this.comment_list = this.comment_list.concat(res.data.list)
            })
        },
        // 主动发表评论
        root_comment(e){
            let params ={
                "hid":this.hole_id,
                "content":e.content
            }
            HoleModel.insert_comment(params).then(res=>{
                this.$alert().success(res.message)
                this.resetComment()
            })
        },
        // 回复评论
        reply_comment(e){
            let params = {
                "hid":this.hole_id,
                "content":e.content,
                'pid':this.reply_temp.pid,
                'uid_r':this.reply_temp.uid_r
            }
            HoleModel.insert_comment(params).then(res=>{
                this.$alert().success(res.message)
                this.resetComment()
            })
        },
        // 重置弹窗的文本
        resetTextPla(){
            this.textarea_pla = '文明发言，理性讨论！'
        },
        // 打开回复的弹窗
        open_reply_input(e){
            this.reply_temp = e
            this.textarea_pla = "回复@"+e.userName+":"
            this.$refs.commentWrite.open_reply_comment_input()
        },  
        // 删除评论
        del_comment(e){
            this.$confirmAlert("是否删除该条评论？").then(()=>{
                HoleModel.del_hole_comment(e).then(res=>{
                   this.$alert().success(res.message)
                    this.resetComment()
                })
            }).catch(()=>{
                this.$alert("取消删除")
            })

        },
        // 重新刷新评论
        resetComment(){
            this.page= 1
            let params = {
                page:this.page,
                size:this.size,
                key:this.holeInfo.id
            }
            HoleModel.get_Comment(params).then(res=>{
                this.hasNextPage = res.data.hasNextPage
                this.comment_list = res.data.list
            })
        },
        // 删除我的树洞
        del_hole(){
            this.$confirmAlert("是否删除该条树洞？").then(()=>{
                HoleModel.del_hole({
                    id:this.hole_id
                }).then(res=>{
                    this.$alert().success(res.message)
                    this.$router.replace("/other/hole/holeList")
                })
            }).catch(()=>{
                this.$alert("取消删除")
            })

        }
    }
}
</script>

<style scoped="scoped">
.page_in{
    padding-bottom: 1rem;
}
.hole_box{
    width: 100%;
    padding: 0.3rem;
    box-sizing: border-box;
    border-bottom: 0.2rem solid #F5F5F5;
}
.user{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #F5F5F5;
    padding: 0.3rem;
    border-radius: 0.2rem;

}
.user_left{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.user_left>.user_name{
    color: #E8961F;
    padding: 0 0.2rem;
    font-size: 0.32rem;
}
.user_left>.man{
    color: #0098E6;
}
.user_left>.user_avatar{
    width: 0.8rem;
    height: 0.8rem;
    background-position: center;
    background-size: contain;
    border-radius: 50%;
}
.type_tag{
    padding: 0.1rem 0.3rem;
    color: #FFFFFF;
    font-size: 0.26rem;
    border-radius: 0.1rem;
}
.public_tag{
    background: #34BFA3;
    

}
.no_name_tag{
    background: #3683D6;
    
}
.secret_tag{
    background:#F4516C
}
.hole_detail{
    padding: 0.3rem 0 0 0;
    font-size: 0.3rem;
}
.hole_title{
    padding: 0.1rem 0;
    font-weight: bold;
    font-size: 0.32rem;
    
}
.hole_content{
    padding: 0.2rem 0;
    text-indent: 0.6rem;
    word-break: break-all;
}
.hole_time{
    text-align: right;
    color: #9E9E9E;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
.del_btn{
    padding-left: 0.3rem;
    color: #3683D6;
}

.comment_box{
    padding: 0 0.3rem;
}
.comment_nav{
  font-size: 0.32rem;
  font-weight: bold;
  padding: 0.4rem 0;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 0.3rem;

}
.comment_nav::before{
    content: " ";
    padding:0 0.08rem;
    margin-right: 0.2rem;
    border-radius: 0.1rem;
    background: #FF8375;
    
}

.no_more_box{
    width: 100%;
    padding-bottom: 0.6rem;
}
.no_more_box>div{
  font-size: 0.32rem;
  font-weight: bold;
}
.no_more_box>.no_more{
    width: 4rem;
    height: 4rem;
    background: url(../../../assets/images/no_more.png);
    background-position: center;
    background-size: contain; 
}

.no_limits_box{
    width: 100%;
    padding-bottom: 0.6rem;
}
.no_limits_box>div{
    font-size: 0.32rem;
    font-weight: bold;
}
.no_limits_box>.no_limits{
    width: 4rem;
    height: 4rem;
    background: url(../../../assets/images/no_limits.png);
    background-position: center;
    background-size: contain; 
}



</style>