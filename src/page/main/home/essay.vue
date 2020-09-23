<template>
  <div>
      <v-essayListOne/>
  </div>
</template>

<script>
import EssayListOne from "@/components/classic/listOne/essay.vue"
export default {
    name:"essayList",
    data(){
        return{

        }
    },
    components:{
        "v-essayListOne":EssayListOne
    }
}
</script>

<style>

</style>