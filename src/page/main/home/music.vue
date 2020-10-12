<template>
  <div>
      <v-load-more @moreEvent="get_more_list">
        <v-musicListOne v-for="(item,index) in classic_list" :key="index" :classic_id="item.id" :image="item.image" :author="item.author" :title="item.title" :intro="item.intro"/>
      </v-load-more>
  </div>
</template>

<script>
import MusicListOne from "@/components/classic/listOne/music.vue"
import {home_mixins} from "./home_mixins"
export default {
    name:"musicList",
    mixins:[home_mixins],
    components:{
        "v-musicListOne":MusicListOne
    },
    data(){
        return{
             key:"200",
        }
    }

}
</script>

<style>

</style>