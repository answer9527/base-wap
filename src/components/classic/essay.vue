<template>
  <div>
    <div class="classic_image" :style="{'backgroundImage':'url('+image+')','backgroundPosition':'center','backgroundSize':'cover'}"></div>
    <div class="classic_icon"></div>
    <div class="classic_intro">{{intro}}</div>
  </div>
</template>

<script>
export default {
  name:"essay",
  data(){
    return{

    }
  },
  props:{
    image:{
      type:String
    },
    intro:{
      type:String
    }
  },
}
</script>

<style scoped="scoped">
.classic_image{
  width: 100%;
  height: 5rem;
    flex-shrink: 0;
  /* background-repeat: no-repeat; */
}
.classic_icon{
    width: 0.46rem;
    height: 1.28rem;
    background: url(../../assets/images/essay@tag.png) no-repeat;
    background-position: center;
    background-size: contain;
    position: relative;
    left: 0.5rem;
    top: -0.55rem;

}
  .classic_intro{
      text-align: center;
      font-size: 0.36rem;
      max-width: 5.5rem;
      margin: 0 auto;
      padding: 0.6rem 0;
  }
</style>