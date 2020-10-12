<template>
  <div>
      <v-load-more @moreEvent="get_more_list">
        <v-moodListOne v-for="(item,index) in classic_list" :key="index" :intro="item.intro" :createTime="item.createTime" :author="item.author"/>
      </v-load-more>
  </div>
</template>

<script>
import MoodListOne from "@/components/classic/listOne/mood.vue"
import {home_mixins} from "./home_mixins"
export default {
    name:"moodList",
    mixins:[home_mixins],
    data(){
        return{
            key:"600"
        }
    },
    components:{
        "v-moodListOne":MoodListOne
    }
}
</script>

<style>

</style>