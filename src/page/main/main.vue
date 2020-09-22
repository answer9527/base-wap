<template>
  <div>
      <div class="app-header">陈湖旧事</div>
      <div>
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
    padding: 0.44rem 0;
    border-bottom: 1px solid #F5F5F5;
}
</style>