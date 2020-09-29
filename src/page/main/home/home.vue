<template>
    <div>
        <v-classic-nav class="top_nav"/>
        <div class="classic_list">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import ClassicNav from "@/components/classic/classicNav.vue"
export default {
    name:"MainHome",
    data(){
        return{
            
        }
    },
    components:{
        'v-classic-nav':ClassicNav
    }
}
</script>

<style scoped="scoped">
.top_nav{
    position: fixed;
    top: 1rem;
    width: 100%;
    z-index: 2;
}
.classic_list{
    padding-top: 0.84rem;
}
</style>