<template>
  <div>
      <v-verseListOne v-for="(item,index) in classic_list" :key="index" :classic_id="item.id" :image="item.image" :author="item.author" :title="item.title" :intro="item.intro"/>
  </div>
</template>

<script>
import VerseListOne from "@/components/classic/listOne/verse.vue"
import {home_mixins} from "./home_mixins"
export default {
    name:"verseList",
    mixins:[home_mixins],
    data(){
        return{
            key:"300"
        }
    },
    components:{
        "v-verseListOne":VerseListOne
    }
}
</script>

<style>

</style>