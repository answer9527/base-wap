<template>
  <div>
    <div class="classic_image" :style="{'backgroundImage':'url('+classic_detail.image+')','backgroundSize':'cover','backgroundPosition':'center center'}"></div>
    <div class="detail_box">
      <v-classic-detail 
        :title="classic_detail.title" 
        :intro="classic_detail.intro" 
        :author="classic_detail.author" 
        :content="classic_detail.content" 
        :src="classic_detail.url"
        />
      <div class="comment_box">
        <div class="comment_nav">相关评论</div>
        <div class="root_comment_out" v-if="comment_list.length>0">
          <v-load-more @moreEvent="get_more_comment">
            <div class="root_comment" v-for="(item,index) in comment_list" :key="index">
              <v-classic-comment 
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
          </v-load-more>

        </div>
        <div class="no_more_box flex-y flex-y-center" v-else>
            <div class="no_more"></div>
            <div>暂无评论</div>
        </div>

      </div>

    </div>
    <v-comment-write placeholder="请输入您的点评！" :textarea_pla="textarea_pla" ref="commentWrite" @resetTextPla="resetTextPla" @root_comment="root_comment" @reply_comment="reply_comment">
        <v-like slot="like" :like_count="classic_detail.like_count" :like_status="classic_detail.like_status" @likeOrUnlike="likeOrUnlike"/>
    </v-comment-write>
  </div>
</template>

<script>
import {ClassicModel} from "@/model/classic.js"
import {CommentModel} from "@/model/comment.js"
import ClassicDetail from "@/components/classic/detail/detail.vue"
import ClassicComment from "@/components/classic/comment/comment.vue"
import Like from "@/components/classic/like.vue"
export default {
    name:"classicInfo",
    data(){
        return{
          classic_id:this.$route.params.id,
          classic_detail:{},
          size:10,
          page:1,
          hasNextPage:false,
          comment_list:[],
          // 弹出的，填写输入框的问题样式
          textarea_pla:"文明发言，理性讨论！",
          // 回复的相关配置
          reply_temp:{}
        }
    },
    components:{
      "v-classic-detail":ClassicDetail,
      "v-classic-comment":ClassicComment,
      "v-like":Like
    },
    created(){
      this.get_classic_detail()
      this.get_classic_comment()
    },
    methods:{
      // 获取classic的详情
      get_classic_detail(){
        ClassicModel.getDetailById(this.classic_id).then(res=>{
          let temp = res.data
          temp.content = temp.content.replace(/\<img/gi, "<img style='width:100%;height:auto;display:block;'")
          this.classic_detail = temp
        })
      },
      // 获取classic的评论
      get_classic_comment(){
        let params = {
          "key":this.classic_id,
          "size":this.size,
          "page":this.page
        }
          CommentModel.getCommentByCid(params).then(res=>{
            this.comment_list = this.comment_list.concat(res.data.list)
            this.hasNextPage = res.data.hasNextPage
          })
      },
      // 设置或取消喜欢
      likeOrUnlike(e){
        let behavior = e.behavior
        let cid = this.classic_id
        ClassicModel.likeIt(behavior,cid).then(res=>{
          if(behavior=='setLike'){
            this.classic_detail.like_count ++
          }else{
            this.classic_detail.like_count --
          }
          this.classic_detail.like_status = !this.classic_detail.like_status
        })
      },
      // 打开回复评论弹出框
      open_reply_input(e){
        this.reply_temp = e
        this.textarea_pla = "回复@"+e.userName+":"
        this.$refs.commentWrite.open_reply_comment_input()
      },
      // 提交主动点评的内容(非回复他人)
      root_comment(e){
        
        let params = {
          "content":e.content,
          "classicId":this.classic_id
        }
        CommentModel.insertComment(params).then(res=>{
          this.$alert().success(res.message)
          this.resetComment()
        })
      },
      // 提交回复他人的内容
      reply_comment(e){
        let params = {
          "classicId":this.classic_id,
          'content':e.content,
          'pid':this.reply_temp.pid,
          'uid_r':this.reply_temp.uid_r
        }
        CommentModel.insertComment(params).then(res=>{
          this.$alert().success(res.message)
          this.resetComment()
        })
      },
      // 删除点评
      del_comment(e){
          this.$confirmAlert("是否删除该评论？").then(()=>{
            CommentModel.delComment(e).then(res=>{
              this.$alert().success(res.message)
              this.resetComment()
            })
          }).catch(()=>{
            this.$alert("取消删除")
          })

      },
      // 重置  placeholder
      resetTextPla(){
        this.textarea_pla = '文明发言，理性讨论！'
      },
      // 重置评论列表
      resetComment(){
        let params = {
          "key":this.classic_id,
          "size":this.size*this.page,
          "page":1
        }
        CommentModel.getCommentByCid(params).then(res=>{
          this.comment_list = res.data.list
          this.hasNextPage = res.data.hasNextPage
        })
        
      },
      get_more_comment(){
        if(this.hasNextPage){
          // this.$alert().success("加载中")
          this.page++
          this.get_classic_comment()
        }else{
          this.$alert().warning("暂无更多！")
        }
       
        
      }

 


    }
}
</script>

<style scoped="scoped">
.classic_image{
  height: 4.6rem;
  width: 100%;
  flex-shrink: 0;
}
.detail_box{
  position: relative;
  top: -1rem;
  background: #FFFFFF;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  padding: 0.3rem;
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
.no_more{
    width: 4rem;
    height: 4rem;
    background: url(../../../assets/images/no_more.png);
    background-position: center;
    background-size: contain; 
}
</style>