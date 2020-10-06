<template>
  <router-link :to="'/other/hole/detail/'+slider.id" tag="div" class="slider_item" @click="test">
      <div :class="['user_name',{'man':slider.gender==1}]">
          <span>·</span>
          <div>{{slider.userName}}</div>
          <span>·</span>
      </div>
      <div class="content">{{slider.content}}</div>
  </router-link>
</template>

<script>
export default {
    name:"SliderItem",
    data(){
        return{

        }
    },
    props:{
        slider:{
            type:Object
        }
    },
    methods:{
        test(){
            console.log(33)
        }
    }
}
</script>

<style scoped="scoped">
.slider_item{
    border-radius: 0.45rem;
    background-color: #ffffff;
    box-shadow: 0.03rem 0.03rem 0.15rem 0.03rem rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    padding: 0.3rem;
    box-sizing: border-box;

}
  .user_name{
      text-align: center;
      color: #E8961F;
      padding-bottom: 0.2rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      
  }
    .man{
      color: #0098E6;
  }
  .user_name>span{
      font-size: 0.6rem;
      line-height: 0.3rem;
      padding: 0 0.1rem;

  }
  .user_name>div{
      font-size: 0.32rem;
  }
  .content{
    word-break: break-all;
    overflow: scroll;
    text-indent:0.48rem ;
    font-size: 0.32rem;
    color: #999999;
  }
</style>