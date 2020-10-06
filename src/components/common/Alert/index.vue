<template>
  <transition name="fade">
    <div :class="['alert_box',type]" v-if="isShow">
      {{message}}
    </div>
  </transition>
</template>
 
<script>
export default {
  props: {
    type: {
      type: String,
      default: "primary"
      // success 、error 、warning
    },
    message: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    show() {
      this.isShow = true;
      setTimeout(this.hide, this.duration);
    },
    hide() {
      this.isShow = false;
      this.remove();
    },
    success(msg){
      this.type = "success"
      this.message = msg
      this.show()
    },
    error(msg){
      this.type = "error"
      this.message = msg
      this.show()
    },
    warning(msg){
      this.type = "error"
      this.message = msg
      this.show()
    }
  }
};
</script>
 
<style scoped="scoped">
.fade-enter-active{
  /* transition: opacity .5s ease; */
  animation: bounce-in .3s;
}
.fade-leave-active{
  /* animation: bounce-in .3s reverse; */
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

.alert_box{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 99999;
  width: 1.8rem;
  /* max-width: 3rem; */
  height: 0.8rem;
  color: #fff;
  padding:0 0.1rem;
  border-radius: 0.08rem;
  text-align: center;
  line-height: 0.8rem;
    /* transition: opacity .3s,transform .4s,top .4s; */
}
.primary{
  background-color: #909399;
  border-color: #909399;
}
.success{
  background-color: #67c23a;
  border-color: #67c23a;
}
.warning{
  background-color: #e6a23c;
  border-color: #e6a23c;
}
.error{
  background-color: #f56c6c;
  border-color: #f56c6c;
}
</style>