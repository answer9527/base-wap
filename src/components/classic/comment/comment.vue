<template>
  <div class="root_comment">
      <div class="flex-x flex-x-between">
          <div class="root_left">
              <div class="avatar" :style="{'backgroundImage':'url('+userAvatar+')','backgroundSize':'contain','backgroundPosition':'center'}"></div>
              <div class="root_center">
                  <div class="nickname">{{userName}}</div>
                  <div class="createTime">{{createTime}}</div>
              </div>
          </div>
          <div class="root_right">删除</div>
      </div>
      <div class="comment_content">
          {{content}}
      </div>
      <div class="child_comment_list">
          <div class="child_comment_row  flex-x" v-for="(item,index) in childComment" :key="index">
              <div class="child_left avatar" :style="{'backgroundImage':'url('+item.userAvatar+')','backgroundSize':'contain','backgroundPosition':'center'}"></div>
              <div class="child_right flex-y">
                  <div class="right_top flex-x">  
                    <div class="nickName replay_color">{{item.userName}}</div>
                    <div style="padding:0 0.12rem">回复</div>
                    <div class="nickName replay_color">{{item.userName_r}} : </div>
                    <div class="childContent">{{item.content}}</div>
                  </div>
                  <div class="right_bottom flex-x flex-x-between">
                      <div>{{$common.formatTime(item.createTime)}}</div>
                      <div>删除</div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"ClassicComment",
    data(){
        return{

        }
    },
    props:{
        userAvatar:{
            type:String
        },
        userName:{
            type:String
        },
        content:{
            type:String
        },
        createTime:{
            type:String
        },
        childComment:{
            type:Array
        }
    },
    created(){
        
    }
}
</script>

<style scoped="scoped">
.root_comment{
    padding: 0.2rem 0;
    border-bottom: 1px solid #cccccc;
}
.row_one{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.avatar{
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 0.1rem;
}
.root_left{
    display: flex;
    flex-direction: row;
}
.root_center{
    padding: 0 0.1rem;
}
.root_right{
    padding: 0 0.12rem;
    font-size:0.28rem;
}
.nickName{
    font-size: 0.28rem;
}
.createTime{
    font-size: 0.24rem;
}

.comment_content{
  padding: 0.1rem;
  font-size:0.28rem;
  border-bottom: 1px dashed #cccccc;
}

.child_comment_list{
    padding-left: 0.4rem;
}
.child_comment_row:nth-child(1){
    padding-top:0.3rem ;

}
.child_comment_row>.child_right{

    padding: 0 0.12rem;
    flex: 1;
}
.child_right>.right_bottom{
    padding: 0.1rem 0;
   
}
.right_bottom>div{
 font-size: 0.24rem;
}
.replay_color{
    color: #295C9D; 
}
</style>