<template>
  <router-link class="essay_box" :to="'/other/classic/detail/'+classic_id" tag="div">
    <div class="title">{{title}}</div>
    <div class="author">文/{{author}}</div>
    <div class="classic_img" :style="{'backgroundImage':'url('+image+')'}"></div>
    <div class="create_time_row flex-x flex-x-between flex-y-center">
      <span class="create_time">{{$common.formatTime(createTime)}}</span>
      <slot name="like">
        <span></span>
      </slot>
    </div>
  </router-link>
</template>

<script>
import {classic_mixins} from "./classic_mixins"
export default {
  name:"essayListOne",
  mixins:[classic_mixins],
  data(){
    return{

    }
  },
  created(){

  },

}
</script>

<style scoped="scoped">
.essay_box{
  padding:0.5rem 0.3rem 0.1rem 0.3rem ;
  border-bottom: 0.16rem solid #E8E8E8;

}
.essay_box>.classic_img{
  width: 100%;
  height: 3.2rem;
  background-position: center;
  background-size: cover;
  border-radius: 0.2rem;

}
.essay_box>.title{
  font-weight: bolder;
  font-family: 黑体;
  font-size: 0.32rem;
}
.essay_box>.author{
  font-size: 0.2rem;
  color: #c3c3c3;
  padding: 0.12rem 0 0.2rem 0;

}
.essay_box .create_time{
  font-size: 0.24rem;
  color: #c3c3c3;
}
.essay_box>.create_time_row{
  padding: 0.1rem 0;
}
</style>