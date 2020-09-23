<template>
  <div>
      <v-storyListOne/>
  </div>
</template>

<script>
import StoryListOne from "@/components/classic/listOne/story.vue"
export default {
    name:"storyList",
    data(){
        return{

        }
    },
    components:{
        "v-storyListOne":StoryListOne
    }
}
</script>

<style>

</style>