<template>
  <div>
      <div class="mask"></div>
      <transition name="fade">
        <div class="confirm_box" v-if="show">
          <div class="confirm_title">警告</div>
          <div class="confirm_content">{{title}}</div>
          <div class="confirm_btn_group flex-x flex-x-between">
              <div class="cancel_btn" @click="no" >no~</div>
              <div class="confirm_btn" @click="yes">yes</div>
          </div>
        </div>
      </transition>
  </div>

</template>

<script>
export default {
    name:"ConfirmAlert",
    data(){
      return{
          // promise 对象
          promi:null,
          show:false
      }
    },
    props:{
      title:{
        type:String,
        default:"您确定此操作？"
      }
    },
    methods:{
      confirm(){
        this.$common.stopScroll()
        this.show = true
        return new Promise((resolve,reject)=>{
          this.promi = {resolve,reject}
        })
      },
      yes(){
        this.$common.openScroll()
        this.promi.resolve()
        this.remove()
      },
      no(){
          this.$common.openScroll()
          this.promi.reject()
          this.remove()
      }
    }
}
</script>

<style scoped="scoped">

.fade-enter-active{
  /* transition: opacity .5s ease; */
  animation: bounce-in .5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  75%{
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.confirm_box{
  width: 5.2rem;
  height: 2.6rem;
  background: #FFFFFF;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 99999;
  border-radius: 0.12rem;
}
.confirm_title{
  font-size: 0.32rem;
  color: #45526b;
  line-height: 0.44rem;
  margin-top: 0.3rem;
  padding: 0 0.25rem;
  text-align: center;

}
.confirm_content{
  font-size: 0.28rem;
  line-height: 0.4rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  text-align: center;
  padding: 0 0.25rem;
  color: rgba(89,108,142,1);

}
.confirm_btn_group{
  width: 100%;
  height: 0.80rem;
  border-top: 0.02rem solid #f3f3f3;

}
.cancel_btn{
  font-size: 0.28rem;
  height: 0.8rem;
  width: 2.59rem;
  border-right: 0.02rem solid #f3f3f3;
  text-align: center;
  line-height: 0.8rem;
  color: #999999;
}
.confirm_btn{
  font-size: 0.28rem;
  flex: 1;
  color: #3963bc;
  height: 0.8rem;
    text-align: center;
  line-height: 0.8rem;


}
</style>