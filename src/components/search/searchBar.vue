<template>
  <div class="search_bar flex-x flex-y-center">
      <span class="search_icon"></span>
      <input type="text" placeholder="请填写搜索内容"  v-model="key">
      <span class="close_icon" v-if="key" @click="()=>key=''"></span>
      <span class="blank_icon" v-else></span>
  </div>
</template>

<script>
export default {
    name:"search_bar",
    data(){
        return{
            key:""
        }
    },
    methods:{

    },
    watch:{
        key(newVal,oldVal){
            this.$emit("changeInput",{"key":newVal})
        }
    }
}
</script>

<style scoped="scoped">
.search_bar{
    width: 100%;
    background: #FFFFFF;
    padding: 0.1rem 0.32rem;
    box-sizing: border-box;
    border-radius: 0.6rem;
}
.search_bar>input{
    border: 0;
    outline: none;
    flex: 1;
    height: 0.4rem;
    padding: 0 0.2rem;
}
.search_bar>.search_icon{
    display: inline-block;
    width: 0.28rem;
    height: 0.32rem;
    background-image: url(../../assets/images/search/search_icon.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
.search_bar>.close_icon{
    width: 0.32rem;
    height: 0.32rem;
    background-image: url(../../assets/images/search/close_icon.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
</style>