<template>
  <div>
      <v-movieListOne v-for="(item,index) in classic_list" :key="index" :classic_id="item.id" :image="item.image" :author="item.author" :title="item.title" :intro="item.intro"/>
  </div>
</template>

<script>

import MovieListOne from "@/components/classic/listOne/movie.vue"
import {home_mixins} from "./home_mixins"
export default {
    name:"movieList",
    mixins:[home_mixins],
    data(){
        return{
            key:"100"
        }
    },
    components:{
        'v-movieListOne':MovieListOne
    }
}
</script>

<style>

</style>