<template>
  <div class="msg_page">
    <div class="msg_list">
        <div v-for="(item,index) in msg_list" :key="index" class="msg_box">
            <v-time :time="item.createTime" class="msg_time"/>
            <v-msg-card 
                :ids="item.id" 
                :title="item.title" 
                :commentId="item.commentId" 
                :commentPid="item.commentPid" 
                :commentUid="item.commentUid" 
                :holeOrClassicId="item.holeOrClassicId" 
                :userName="item.userName" 
                :content="item.content" 
                :isRoot="item.isRoot" 
                :isRead="item.isRead" 
                :type="item.type" 
                :avatarUrl="item.avatarUrl"
            />
        </div>
    </div>
  </div>
</template>

<script>
import {MsgModel} from "@/model/msg.js"
import Time from "@/components/msg/time"
import MsgCard from "@/components/msg/msgCard"
export default {
    name:"ClassicMsg",
    components:{
        "v-time":Time,
        "v-msg-card":MsgCard
    },
    data(){
        return{
            page:1,
            size:10,
            hasNextPage:false,
            msg_list:[]
        }
    },
    created(){
        this.get_msg_list()
    },
    methods:{
        get_msg_list(){
            let params ={
                "size":this.size,
                "page":this.page
            }
            MsgModel.getClassicCommentMsg(params).then(res=>{
                this.hasNextPage = res.data.hasNextPage
                this.msg_list = this.msg_list.concat(res.data.list)
            })
        }
    }
}
</script>

<style scoped="scoped">
.msg_page{
    background: #F8F8F8;
}
.msg_list{
    padding: 0.4rem;
}
.msg_time{
    padding: 0.6rem 0 0.2rem 0;
}
</style>