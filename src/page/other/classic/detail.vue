<template>
  <div>
    <div class="classic_image" :style="{'backgroundImage':'url('+classic_detail.image+')','backgroundSize':'cover','backgroundPosition':'center center'}"></div>
    <div class="detail_box">
      <v-classic-detail 
        :title="classic_detail.title" 
        :intro="classic_detail.intro" 
        :author="classic_detail.author" 
        :content="classic_detail.content" 
        :src="classic_detail.url"/>
      <div class="comment_box">
        <div class="comment_nav">相关评论</div>
        <div class="root_comment" v-for="(item,index) in comment_list" :key="index">
            <v-classic-comment :userAvatar="item.userAvatar" :userName="item.userName" :content="item.content" :createTime="item.createTime" :childComment="item.child"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ClassicModel} from "@/model/classic.js"
import {CommentModel} from "@/model/comment.js"
import ClassicDetail from "@/components/classic/detail/detail.vue"
import ClassicComment from "@/components/classic/comment/comment.vue"
export default {
    name:"classicInfo",
    data(){
        return{
          classic_id:this.$route.params.id,
          classic_detail:{},
          size:10,
          page:1,
          comment_list:[]
        }
    },
    components:{
      "v-classic-detail":ClassicDetail,
      "v-classic-comment":ClassicComment
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
          })
      },

    }
}
</script>

<style scoped="scoped">
.classic_image{
  height: 4.6rem;
  width: 100%;
}
.detail_box{
  position: relative;
  top: -1rem;
  background: #FFFFFF;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  padding: 0.3rem;
}
</style>