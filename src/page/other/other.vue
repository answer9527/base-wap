<template>
  <div class="other_page">
      <div class="other_header flex-x flex-x-center" :style="{'background':bg}">
          <span class="back_icon" @click="go_back" :style="{'color':color}"><</span>
          <div :style="{'color':color}">{{nav_name}}</div>
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


    },
    computed:{
        nav_name(){
            return this.$route.meta.name||'陈湖旧事'
        },
        bg(){
            return this.$route.meta.bg||'#FFFFFF'
        },
        color(){
            return this.$route.meta.color||'#000000'
        }
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
.other_page{
    height: 100%;
    display: flex;
    flex-direction: column;
}
.other_header{
    position: fixed;
    top: 0;
    z-index: 9999;
    background: #FFFFFF;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    box-sizing: border-box;
    /* overflow: hidden; */
   

}
.other_header>div{
    font-family: 黑体;
    font-size: 0.32rem;
    letter-spacing: 6px;
}
.back_icon{
    display: inline-block;
    position: absolute;
    left: 0;
    margin-left: 0.4rem;
    transform: scale(1.25,2);
}
.other_content{
    flex: 1;
    padding-top: 1rem;
}
</style>