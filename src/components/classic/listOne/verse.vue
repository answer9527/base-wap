<template>
  <router-link :to="'/other/classic/detail/'+classic_id" tag="div" class="verse_list_box">
      <div class="classic_img flex-y  flex-x-end" :style="{'backgroundImage':'url('+image+')'}">
        <p class="verse_title">{{title}}</p>
      </div>
  </router-link>
</template>

<script>
import {classic_mixins} from "./classic_mixins"
export default {
  name:"verseListOne",
  mixins:[classic_mixins],
  data(){
    return{
      
    }
  },

}
</script>

<style scoped="scoped">
.verse_list_box{
  padding: 0.4rem;
}
.classic_img{
  width: 100%;
  height: 3rem;
  border-radius:0.1rem ;
  /* background-position: center; */
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.verse_title{
  padding: 0.16rem;
  color: #FFFFFF;
  font-size: 0.32rem;
}
</style>