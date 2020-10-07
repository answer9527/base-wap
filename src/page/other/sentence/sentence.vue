<template>
  <div>
    <div>
        <div class="logo_box">
            <div class="logo" :style="{'backgroundImage':'url('+sentence_logo+')'}"></div>
        </div>
        <div class="sentence_row">{{sentence_txt}}</div>
        <div class="rand_row">
            <div :class="['rand_btn',{'disabled_btn':disabled}]"  @click="rand">网抑一下</div>
        </div>
    </div>
    <div class="sentence_bg"></div>
  </div>
</template>

<script>
import {SentenceModel} from "@/model/sentence.js"
export default {
    name:"Sentence",
    data(){
        return{
            disabled:false,
            sentence_txt:"开始网抑了，准备好纸巾。",
            sentence_logo:require("../../../assets/images/light.gif"),
            static_logo:require("../../../assets/images/light.png"),
            active_logo:require("../../../assets/images/light.gif")
        }
    },
    created(){
        this.get_rand()
    },
    methods:{
        rand(){
            if(!this.disabled){
                this.sentence_logo = this.active_logo
                this.disabled=true
                this.get_rand()
            }

        },
        get_rand(){
            SentenceModel.getRand().then(res=>{
                
                setTimeout(()=>{
                   this.sentence_txt = res.data.txt
                   this.sentence_logo = this.static_logo
                   this.disabled=false
                },2500)
            })
        }
    }
}
</script>

<style scoped="scoped">
.sentence_bg{
    width: 100%;
    height: 100%;
    background: url(../../../assets/images/sentence_bg.jpg) no-repeat;
    background-position: center;
    background-size: cover;
    position: fixed;
    top: 0;
    z-index: -1;
}
.logo_box{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.3rem 0 0.6rem 0;
}

.logo{
    width:3.2rem;
    height:3.2rem;
    background-position: center;
    background-size: contain;
  
}
.sentence_row{
    color: #253E5C;
    text-align: center;
    font-size: 0.28rem;
    font-weight: bold;
}
.rand_row{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 8rem;
}
.rand_btn{
    height: 0.72rem;
    width: 2rem;
    border-radius: 0.08rem;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    font-size: 0.28rem;
    position: relative;
    color: #fff;
    background-color: #f4516c; 
    padding: 0 0.12rem;
    box-sizing: border-box;
}
.disabled_btn{
    background-color: #D2DAE0;
}

</style>