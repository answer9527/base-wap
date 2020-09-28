<template>
  <div class="classic_list_one">
      <router-link :to="'/other/classic/detail/'+classic_id" class="classic_one_in"  tag="div">
        <div class="classic_img" :style="{'backgroundImage':'url('+image+')'}"></div>
        <div class="title">{{title}}</div>
        <div class="intro">{{intro}}</div>
        <div class="flex-x flex-x-end">
          <slot name="like" ></slot>
        </div>
    </router-link>
  </div>
</template>

<script>
import {classic_mixins} from "./classic_mixins"
export default {
  name:"storyListOne",
  mixins:[classic_mixins]

}
</script>

<style scoped="scoped">

.classic_list_one{
  padding: 0.3rem;
}
.classic_list_one>.classic_one_in{
  border: 1px solid #F3F3F3;
  border-radius: 0.2rem;
  padding: 0.24rem;
}
.classic_one_in>.classic_img{
  width: 100%;
  height: 2.6rem;
  background-position: center;
  background-size: cover;
}
.classic_one_in>.title{
  font-weight: bold;
  padding: 0.1rem 0;
}
.classic_one_in>.intro{
  font-size: 0.24rem;
}
</style>