<template>
  <div>
      <v-storyListOne v-for="(item,index) in classic_list" 
      :key="index" 
      :classic_id="item.id" 
      :image="item.image" 
      :author="item.author" 
      :title="item.title" 
      :intro="item.intro"
      >
        <v-like slot="like" :like_count="item.like_count" :like_status="item.like_status"/>
      </v-storyListOne>
  </div>
</template>

<script>
import StoryListOne from "@/components/classic/listOne/story.vue"
import {home_mixins} from "./home_mixins"
import Like from "@/components/classic/like.vue"
export default {
    name:"storyList",
    mixins:[home_mixins],
    data(){
        return{
            key:"500"
        }
    },
    components:{
        "v-storyListOne":StoryListOne,
        "v-like":Like
    }
}
</script>

<style>

</style>