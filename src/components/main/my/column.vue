<template>
    <router-link :to="colUrl" tag="div" class="col_box flex-x flex-x-between">
        <div class="colLeft flex-x">
            <div class="colImage" :style="{'backgroundImage':'url('+colImage+')'}"></div>
            <span>{{colName}}</span>
        </div>
        <div class="colRight"></div>
    </router-link>
</template>

<script>
export default {
    name:"Column",
    props:{
        "colName":{
            type:String
        },
        "colImage":{
            type:String
        },
        "colUrl":{
            type:String
        }
    }
}
</script>

<style scoped="scoped">
.col_box{
  width: 100%;
  border-bottom: 1px solid #F3F3F3;
  padding:0.3rem 0;
}
.colLeft>.colImage{
  width: 0.4rem;
  height:0.4rem;
  background-position: center;
  background-size: contain;
}
.colLeft span{
  font-size:0.28rem;
  padding-left:0.2rem; 
}
.colRight{
  width: 0.4rem;
  height:0.4rem;
  background: url(../../../assets/images/my/right.png);
  background-position: center;
  background-size: contain;
}
</style>