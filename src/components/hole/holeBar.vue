<template>
  <div class="hole_bar flex-x">
      <div :class="{'active':len>0}" @click="go_detail(0)"></div>
      <div :class="{'active':len>1}" @click="go_detail(1)"></div>
      <div :class="{'active':len>2}" @click="go_detail(2)"></div>
      <div :class="{'active':len>3}" @click="go_detail(3)"></div>
      <div :class="{'active':len>4}" @click="go_detail(4)"></div>
  </div>
</template>

<script>
export default {
    name:"holeBar",
    data(){
        return{

        }
    },
    computed:{
        len(){
            return this.hole_list?this.hole_list.length:0
        }
    },
    props:{
        hole_list:{
            type:Array
        }
    },
    methods:{
        go_detail(index){
            if(this.len>index){
                let hole_id = this.hole_list[index].id
                this.$router.push("/other/hole/detail/"+hole_id)
            }
        }
    }
}
</script>

<style scoped="scoped">
.hole_bar{
    justify-content: space-evenly;
    position: fixed;
    bottom: 0.2rem;
    width: 100%;

}
.hole_bar>div{
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background: #ffffff;
    background-image: url(../../assets/images/hole@no.png);
    background-position: center;
    background-size: contain;
}
.hole_bar>.active{
    background-image: url(../../assets/images/hole@yes.png);
}
</style>