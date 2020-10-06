<template>
  <div class="" >
        <div class="sheet"  :style="{'height':isShow?height:'0'}">
          <div>{{propData.title}}</div>
          <div v-for="(item,index) in propData.list" :key="index" @click="confirm_sheet(item)">{{item.label}}</div>
      </div>
      <div class="mask" @click="hide" v-if="isShow"></div>  
  </div>
</template>

<script>
export default {
    name:"actionSheet",
    data(){
        return{
            isShow:false
        }
    },
    computed:{
        height(){
            let len = this.propData.list.length||-1
            return (len+1)*0.9+'rem'
            // return "5rem"
        }
    },
    props:{
        propData:{
            type:Object
        }
    },
    methods:{
       show(){
           this.isShow = true
       },
       hide(){
           this.isShow = false
        //    this.remove()
       },
       confirm_sheet(item){
           let params = {
               ...item,"type":this.propData.type
           }
           this.$emit("confirm_sheet",params)
           this.isShow = false
       }
    }
}
</script>

<style scoped="scoped">

.sheet{
    position: fixed;
    bottom: 0;
    z-index: 1000;
    width: 100%;
    height: 0;
    background: #FFFFFF;
    transition: 0.5s all;
    z-index: 99999;
    /* padding:0.2rem 0rem; */
    box-sizing: border-box;
}
.sheet>div{
    height: 0.88rem;
    line-height:0.88rem;
    text-align: center;
    background: #FFFFFF;
    border-bottom: 0.02rem solid #f3f3f3;
    font-size: 0.28rem;
    color: #45526b;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;

}
.sheet>div:nth-child(1){
    color: #cccccc;
}
.sheet>div:last-child{
   border-bottom: 0.02rem solid transparent;
}
</style>