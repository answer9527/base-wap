<template>
  <div>
      <v-moodListOne/>
  </div>
</template>

<script>
import MoodListOne from "@/components/classic/listOne/mood.vue"
export default {
    name:"moodList",
    data(){
        return{

        }
    },
    components:{
        "v-moodListOne":MoodListOne
    }
}
</script>

<style>

</style>