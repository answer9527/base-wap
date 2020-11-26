<template>
  <router-link :to="'/other/classic/detail/'+classic_id" tag="div" class="classic_list_one flex-x">
      <div class="classic_image" :style="{'backgroundImage':'url('+image+')','backgroundSize':'cover','backgroundPosition':'center'}"></div>
      <div class="one_right flex-y flex-x-around">
          <div class="intro">{{intro}}</div>
          <div class="title">{{title}} | {{author||'未知'}}</div>
      </div>
  </router-link>
</template>

<script>
import {classic_mixins} from "./classic_mixins"
export default {
    name:"musicListOne",
    mixins:[classic_mixins],
    data(){
        return{

        }
    },
    created(){
        
    }
}
</script>

<style scoped="scoped">
.classic_list_one{
    padding: 0.3rem 0.4rem;
}
.classic_image{
    width: 1rem;
    height: 1rem;
    background-repeat: no-repeat;
    border-radius: 0.1rem;
    flex-shrink: 0;
}
.one_right{
    padding: 0 0.3rem;
}
.intro{
    font-size: 0.24rem;
    display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:1;
    overflow: hidden;
}
.title{
    font-size: 0.2rem;
    color: #cccccc;
}
</style>