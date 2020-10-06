<template>
  <router-link :to="tabUrl" tag="div" class="tab_box flex-y flex-y-center">
      <div class="tabImage" :style="{'backgroundImage':'url('+tabImage+')'}"></div>
      <span class="count" v-if="count>0">{{count>99?"99":count}}</span>
      <span class="tabName">{{tabName}}</span>
  </router-link>
</template>

<script>
export default {
    name:"Tab",
    data(){
        return{

        }
    },
    props:{
        tabUrl:{
            type:String
        },
        tabName:{
            type:String
        },
        count:{
            type:Number
        },
        tabImage:{
            type:String
        }
    }
}
</script>

<style scoped="scoped">
.tab_box{
    position: relative;
}
.tab_box>.tabImage{
    width: 0.6rem;
    height: 0.6rem;
    background-position: center;
    background-size: contain;
}
.tab_box>.count{
  position: absolute;
  top: -0.1rem;
  right: -1px;
  font-size: 0.2rem;
  background: #F8872A;
  color: #FFFFFF;
  border-radius:50% ;
  /* padding: 2rpx 6rpx; */
  width: 0.3rem;
  height: 0.3rem;
  text-align: center;
  line-height: 0.3rem;

}
.tab_box>.tabName{
    font-size: 0.24rem;
    padding: 0.1rem 0;
}
</style>