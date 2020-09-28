<template>
  <div class="flex-y classic_list_one">
      <div class="classic_one_in">
        <div class="flex-x flex-y-center">
          <div class="avatar" :style="{'backgroundImage':'url('+avatar+')'}"></div>
          <div class="authorAndTime">
            <div>{{author}}</div>
            <div class="create_time">{{$common.formatTime(createTime)}}</div>
          </div>
          <div class="like_btn"> + 喜欢</div>
        </div>
        <div class="intro">{{intro}}</div>
      </div>
  </div>
</template>

<script>
import {classic_mixins} from "./classic_mixins"
export default {
  name:"moodListOne",
  data(){
    return{
      avatar:"https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEKxunnAaggd0xMsx9W2I3icItzvAo61VgD2Kb8CcnXaibjHscibp71sUeYPRO1CeWgDHjCvZZArsMyzA/132"
    }
  },
  mixins:[classic_mixins]
}
</script>

<style scoped="scoped">
.classic_list_one{
  padding:0.1rem 0.3rem;
}
.classic_one_in{
  border-radius: 0.1rem;
  border: 1px solid #F3F3F3;
  padding:0.5rem 0.3rem;
  box-shadow: 0 0.04rem 0.2rem 0 rgba(212,217,223,.5);
}
.avatar{
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background-position: center;
  background-size: contain;
}
.authorAndTime{
  flex: 1;
  padding-left: 0.2rem;
}
.create_time{
  color: #666666;
  font-size: 0.24rem;
}
.intro{
  padding: 0.1rem 0;
}
.classic_one_in .like_btn{
  background: #F3F3F3;
  color: #3963BC;
  padding: 0.1rem 0.2rem;
  font-size: 0.24rem;
  border-radius: 0.3rem;
}
</style>