<template>
  <div>
      <v-verseListOne/>
  </div>
</template>

<script>
import VerseListOne from "@/components/classic/listOne/verse.vue"
export default {
    name:"verseList",
    data(){
        return{

        }
    },
    components:{
        "v-verseListOne":VerseListOne
    }
}
</script>

<style>

</style>