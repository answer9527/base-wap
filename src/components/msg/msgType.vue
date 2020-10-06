<template>
  <router-link :to="url" tag="div" class="type_con">
      <div class="type_left">
          <div :class="['left_in','type'+type]">
              <div class="msg_icon"></div>
              <div class="msg_count" v-if="count>0">{{count>99?99:count}}</div>
          </div>
      </div>
      <div class="type_right">
          <div class="right_top">
              <div class="type_title">{{type==0?"系统消息":type==1?"视听消息":"树洞消息"}}</div>
          </div>
          <div class="right_bottom" v-if="count>0">你有{{count>99?99:count}}条未读的消息，请注意查收</div>
          <div class="right_bottom" v-else>暂无未读信息</div>
      </div>
  </router-link>
</template>

<script>
export default {
    name:"MsgType",
    data(){
        return{

        }
    },
    props:{
        type:{
            type:Number
        },
        count:{
            type:Number
        },
        url:{
            type:String
        }
    },
    methods:{

    }
}
</script>

<style scoped="scoped">
.type_con{
    padding: 0.2rem;
    display: flex;
    flex-direction: row;
}
.type_left{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.left_in{
    position: relative;
    width: 1rem;
    height: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.type0{
    background: #705FF9;
    border-radius: 50%;

}
.type1{
    background: #FA7B62;
    border-radius: 50%;
}
.type2{
    background: #E4B774;
    border-radius: 50%;
}
.type0>.msg_icon{
    width: 0.6rem;
    height: 0.6rem;
    background-image: url(../../assets/images/sys_msg.png);
    background-position: center;
    background-size: contain;
}
.type1>.msg_icon{
    width: 0.6rem;
    height: 0.6rem;
    background-image: url(../../assets/images/classic_msg.png);
    background-position: center;
    background-size: contain;
}
.type2>.msg_icon{
    width: 0.6rem;
    height: 0.6rem;
    background-image: url(../../assets/images/hole_msg.png);
    background-position: center;
    background-size: contain;
}


.msg_count{
    position: absolute;
    right: -0.1rem;
    top: -0.1rem;
    background: #F8872A;
    color: #FFFFFF;
    border: 0.02rem solid #FFFFFF;
    font-size: 0.2rem;
    /* padding: 6rpx; */
    width: 0.3rem;
    height: 0.3rem;
    text-align: center;
    line-height: 0.3rem;
    border-radius: 50%;
}

.type_right{
    flex: 1;
    padding: 0 0 0 0.3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.right_top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.right_top>.type_title{
    font-weight: bold;
}
.right_top>.last_time{
    color: #ACACAC;
    font-size: 0.24rem;
}
.right_bottom{
    color: #ACACAC;
    font-size: 0.24rem;
}
</style>