<template>
  <router-link :to="'/other/classic/detail/'+classic_id" tag="div" class="classic_list_one flex-x">
      <div class="classic_image" :style="{'backgroundImage':'url('+image+')','backgroundSize':'cover','backgroundPosition':'center'}"></div>
      <div class="one_right flex-y flex-x-around">
          <div class="intro">{{intro}}</div>
          <div class="title">{{title}} | {{author}}</div>
      </div>
  </router-link>
</template>

<script>
export default {
    name:"movieListOne",
    data(){
        return{

        }
    },
    props:{
        image:{
            type:String
        },
        title:{
            type:String
        },
        intro:{
            type:String
        },
        author:{
            type:String
        },
        classic_id:{
            type:Number
        }
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