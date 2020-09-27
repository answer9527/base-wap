<template>
    <div>
        <v-classic-nav/>
        <div>
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
.classic_nav{
    padding: 0.2rem 0;
}
</style>