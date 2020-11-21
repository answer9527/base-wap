<template>
  <div>
      信件详情
  </div>
</template>

<script>
import {LetterModel} from "@/model/letter"
export default {
  name:"LetterInfo",
  data(){
    return{
      letter_id:null
    }
  },
  created(){
    this.letter_id = this.$route.params.id
    this.get_letter_info()
  },
  methods:{
    get_letter_info(){
      LetterModel.getMyLetterDetail({id:this.letter_id}).then(res=>{
        console.log(res)
      })
    }

  }
}
</script>

<style>

</style>