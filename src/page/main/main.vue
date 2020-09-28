<template>
  <div>
      <div class="app-header">陈湖旧事</div>
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
    height:0.8rem;
    line-height: 0.8rem;
    background: #FFFFFF;
    box-sizing: border-box;
    
}
.app-content{
    padding: 0.8rem 0 1rem 0;
}
</style>