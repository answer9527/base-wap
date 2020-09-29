<template>
  <div class="like_box" @click="likeOrUnlike">
      <i :class="{'active':like_status}"></i>
      <span>{{like_count}}</span>
  </div>
</template>

<script>
export default {
    name:"like",
    data(){
        return{

        }
    },
    props:{
        like_count:{
            type:Number,
            default:0
        },
        like_status:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        likeOrUnlike(){
            let behavior = this.like_status?"cancelLike":"setLike"
            this.$emit("likeOrUnlike",{behavior})
        }
    }
}
</script>

<style scoped="scoped">
.like_box{
    position: relative;
    padding: 0.1rem 0;
    z-index:0;
}
.like_box>i{
    display: inline-block;
    width: 0.32rem;
    height: 0.28rem;
    background: url(../../assets/images/like-dis.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
.like_box>.active{
    display: inline-block;
    width: 0.32rem;
    height: 0.28rem;
    background: url(../../assets/images/like.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
.like_box>span{
    position: relative;
    top: -0.2rem;
    font-size: 0.24rem;
    color: #bbbbbb;
}
</style>