<template>
  <div class="navi_box_out">
      <div class="navi_box flex-x flex-y-center flex-x-between">
      <i :class="latest?'left_icon':'active_left'" @click="previous"></i>
      <span>{{title}}</span>
      <i :class="first?'right_icon':'active_right'" @click="next"></i>
    </div>
  </div>
</template>

<script>
export default {
  name:'navi',
  data(){
    return{

    }
  },
  props:{
    title:{
      type:String
    },
    first:{
      type:Boolean
    },
    latest:{
      type:Boolean 
    }
  },
  methods:{
      previous(){
          if(this.latest){
              return false
          }else{
              this.$emit("previous")
          }
      },
      next(){
          if(this.first){
              return false
          }else{
              this.$emit("next")
          }
      }
  }
}
</script>

<style scoped="scoped">
.navi_box_out{
  width: 100%;
  position: fixed;
  bottom: 1.4rem;
}
.navi_box{
  width: 6rem;
  text-align: center;
  margin: 0 auto;
  background: #F7F7F7;
  padding: 0.16rem 0;
  
}
.navi_box>i{
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
}
.navi_box>.left_icon{
  background: url(../../assets/images/left-white.png);
  background-position: center;
  background-size: contain;
}
.navi_box>.active_left{
  background: url(../../assets/images/left-black.png);
  background-position: center;
  background-size: contain;
}
.navi_box>.right_icon{
  background: url(../../assets/images/right-white.png);
  background-position: center;
  background-size: contain;
}
.navi_box>.active_right{
  background: url(../../assets/images/right-black.png);
  background-position: center;
  background-size: contain;
}
</style>