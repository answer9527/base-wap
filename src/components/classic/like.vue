<template>
  <div class="like_box flex-x" @click="likeOrUnlike">
      <i :class="{'active':like_status}"></i>
      <div>
        <div :class="'active'+count_flag">
            <span >{{like_count}}</span>
            <span >{{like_count}}</span>
            <span >{{like_count}}</span>
        </div>
      </div>
      
      
  </div>
</template>

<script>
export default {
    name:"like",
    data(){
        return{
            count_flag:1
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
            if(this.like_status){
                this.count_flag--
            }else{
                this.count_flag++
            }
            
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
.like_box>div{
    display: inline-block;
    min-width: 0.32rem;
    position: relative;
    top: -0.2rem;
    height: 0.32rem;
    overflow: hidden;
    /* right: -0.1rem; */
   
}
.like_box>div>div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: 1s all;
    
}

.like_box>div>.active0{
    top: 0;
}
.like_box>div>.active1{
    top: -0.32rem;
}
.like_box>div>.active2{
    top: -0.64rem;
}
.like_box>div>div>span{
    font-size: 0.24rem;
    color: #bbbbbb;
}
</style>