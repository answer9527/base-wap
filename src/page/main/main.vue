<template>
  <div>
      <!-- <div class="app-header">陈湖旧事</div> -->
      <div class="app-header">
          <div class="app-logo"></div>
      </div>
      <div class="app-content">
          <router-view></router-view>
      </div>
      <Nav/>
  </div>
</template>

<script>
import Nav from "../../components/main/nav"
export default {
    name:"mainPage",
    data(){
        return{

        }
    },
    components:{
        Nav
    },
    methods:{

    }
}
</script>

<style scoped="scoped">
.app-header{
    text-align: center;
    border-bottom: 1px solid #F5F5F5;
    position: fixed;
    top: 0;
    width: 100%;
    height:1rem;
    line-height: 1rem;
    box-sizing: border-box;
    background: #FFFFFF;
    /* background: #2B4ADC;
    color: #FFFFFF; */
    font-family: 黑体;
    font-size: 0.32rem;
    letter-spacing: 6px;
    z-index: 2;
    
}
.app-logo{
    background: url(../../assets/images/logo-header.png) no-repeat;
    width: 6rem;
    height: 0.6rem;
    background-position: center;
    background-size: contain;
    margin: 0.2rem auto;
}
.app-content{
    padding: 1rem 0 1rem 0;
}
</style>