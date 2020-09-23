<template>
    <div>
        <div>
            <ul class="flex-x flex-x-around">
                <router-link to="/main/home/movie" tag="li">电影</router-link>
                <router-link to="/main/home/music" tag="li">音乐</router-link>
                <router-link to="/main/home/essay" tag="li">诗句</router-link>
                <router-link to="/main/home/verse" tag="li">文章</router-link>
                <router-link to="/main/home/story" tag="li">故事</router-link>
                <router-link to="/main/home/mood" tag="li">随记</router-link>
            </ul>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name:"MainHome",
    data(){
        return{
            
        }
    }
}
</script>

<style>

</style>