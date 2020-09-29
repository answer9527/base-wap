<template>
  <div>
      <div class="other_header flex-x flex-x-center">
          <span class="back_icon" @click="go_back"><</span>
          <div>陈湖旧事</div>
      </div>
      <router-view class="other_content"></router-view>
  </div>
</template>

<script>
export default {
    name:"OtherPage",
    data(){
        return{

        }
    },
    created(){
         const alert = this.$alert({
          title: "测试",
          message: "请求登录!",
          duration: 3000
        });
        // alert.show();

    },
    methods:{
        // 返回按钮
        go_back(){
            this.$router.go(-1)
        }
    }
    
}
</script>

<style scoped="scoped">
.other_header{
    position: fixed;
    top: 0;
    z-index: 9999;
    background: #FFFFFF;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    box-sizing: border-box;
   

}
.other_header>div{
    font-family: 黑体;
    font-size: 0.32rem;
    letter-spacing: 6px;
}
.back_icon{
    position: absolute;
    left: 0;
    margin-left: 0.4rem;
    transform: scale(1.25,2);
}
.other_content{
    padding-top: 1rem;
}
</style>