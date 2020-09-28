<template>
  <div class="nav_bar">
    <ul class="flex-x flex-x-around">
        <li>
            <router-link to="/main/classic" tag="div"  :class="[{'active':active_router=='/main/classic'},'flex-y','flex-y-center']">
                <i></i>
                <span>推荐</span>
            </router-link>
        </li>
        <li>
            <router-link to="/main/home" tag="div" :class="[{'active':is_home},'flex-y','flex-y-center']">
                <i></i>
                <span>发现</span>
            </router-link>
        </li>
        <li>
            <router-link to="/main/my" tag="div" :class="[{'active':active_router=='/main/my'},'flex-y','flex-y-center']">
                <i></i>
                <span>我的</span>
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "appNav",
  data() {
    return {};
  },
  created(){
  },
  computed:{
      active_router(){
          return this.$route.path
      },
      is_home(){
          let path = this.$route.path
          let re = /^\/main\/home/
          return re.test(path)
      }
  }
};
</script>

<style scoped="scoped">
.nav_bar{
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top:1px solid #D5D5D5 ;
    padding: 0.08rem 0;
    background: #FFFFFF;
}
.nav_bar>ul>li>div>i{
    display: inline-block;
    width: 0.52rem;
    height: 0.52rem;
}
.nav_bar>ul>li>div>span{
    font-size: 0.22rem;
    color: #dbdbdb;
}
.nav_bar>ul>li>.active>span{
    color: #2c2c2c;
}
.nav_bar>ul>li:nth-child(1)>div>i{
    background-image: url(../../assets/images/tab/classic@no.png);
    background-position: center;
    background-size: contain;
}
.nav_bar>ul>li:nth-child(1)>.active>i{
    background-image: url(../../assets/images/tab/classic@yes.png);
    background-position: center;
    background-size: contain;
}
.nav_bar>ul>li:nth-child(2)>div>i{
    background-image: url(../../assets/images/tab/home@no.png);
    background-position: center;
    background-size: contain;
}
.nav_bar>ul>li:nth-child(2)>.active>i{
    background-image: url(../../assets/images/tab/home@yes.png);
    background-position: center;
    background-size: contain;
}
.nav_bar>ul>li:nth-child(3)>div>i{
    background-image: url(../../assets/images/tab/my@no.png);
    background-position: center;
    background-size: contain;
}
.nav_bar>ul>li:nth-child(3)>.active>i{
    background-image: url(../../assets/images/tab/my@yes.png);
    background-position: center;
    background-size: contain;
}
</style>