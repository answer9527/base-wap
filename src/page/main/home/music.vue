<template>
  <div>
      <v-musicListOne/>
  </div>
</template>

<script>
import MusicListOne from "@/components/classic/listOne/music.vue"
export default {
    name:"musicList",
    data(){
        return{

        }
    },
    components:{
        "v-musicListOne":MusicListOne
    }
}
</script>

<style>

</style>