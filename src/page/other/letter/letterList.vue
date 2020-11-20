<template>
  <div class="letter_list_page">
      <div class="page_bg"></div>
      <div class="wave_icon"></div>
      <div class="pageContent">

      </div>
  </div>
</template>

<script>
import {LetterModel} from "@/model/letter"
export default {
    name:"letterList",
    data(){
        return{
            
        }
    },
    created(){
        this.get_letter_list()
    },
    methods:{
        get_letter_list(){
            LetterModel.getMyLetterList().then(res=>{
                console.log(res)
            })
        }
    }
}
</script>

<style scoped="scoped">
.letter_list_page{
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.page_bg{
    background: url(../../../assets/images/message_bg.jpg);
    background-position: center;
    background-size: contain;
    margin-top: 1rem;
    width: 100%;
    height: 100%;
    display: block;
    position: fixed;
    top:0;
    z-index: 2;
}
.wave_icon{
    width: 1rem;
    height: 1rem;
    position: fixed;
    bottom: 2rem;
    background: url(../../../assets/images/wave_icon.png);
    background-position: center;
    background-size: contain;
    display: block;
    z-index: 999;
}
</style>