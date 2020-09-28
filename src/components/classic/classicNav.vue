<template>
  <div>
        <ul class="classic_nav flex-x flex-x-around">
            <router-link to="/main/home/movie" tag="li" :class="{'active':active_route=='/main/home/movie'}">电影</router-link>
            <router-link to="/main/home/music" tag="li" :class="{'active':active_route=='/main/home/music'}">音乐</router-link>
            <router-link to="/main/home/verse" tag="li" :class="{'active':active_route=='/main/home/verse'}">诗句</router-link>
            <router-link to="/main/home/essay" tag="li" :class="{'active':active_route=='/main/home/essay'}">文章</router-link>
            <router-link to="/main/home/story" tag="li" :class="{'active':active_route=='/main/home/story'}">故事</router-link>
            <router-link to="/main/home/mood" tag="li"  :class="{'active':active_route=='/main/home/mood'}">随记</router-link>
        </ul>
  </div>
</template>

<script>
export default {
    name:"ClassicNav",
    data(){
        return{

        }
    },
    computed:{
        active_route(){
            return this.$route.path
        }
    },
}
</script>

<style scoped="scoped">
.classic_nav{
    padding: 0 0.2rem;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #F3F3F3;
    background: #FFFFFF;
    z-index: 99999999;
}
.classic_nav>li{
    flex: 1;
    text-align: center;
    padding: 0.2rem 0;
    border-bottom: 2px solid transparent;
}
.classic_nav>.active{
    border-bottom: 2px solid #333333;
}
</style>