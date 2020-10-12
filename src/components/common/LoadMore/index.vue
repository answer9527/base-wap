<template>
  <div>
      <!-- <div :class="['loading',{'hidden':more_flag}]">加载中...</div> -->
      <div     
        @touchstart="touchstart" 
        @touchend="touchend" 
        @touchmove="touchmove"
        >
        <slot></slot>
        <div class="loading flex-x flex-x-center flex-y-center" v-if="flag">
          <img src="../../../assets/images/loading.gif" alt="" class="loading-img">
        </div>
      </div>
     
  </div>
</template>

<script>
export default {
  name: "LoadMore",
  data() {
    return {
        start:0,
        end:0,
        flag:false
    };
  },
  methods: {
    // 文档高度
    getScrollTop() {
      var scrollTop = 0,
        bodyScrollTop = 0,
        documentScrollTop = 0;
      if (document.body) {
        bodyScrollTop = document.body.scrollTop;
      }
      if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
      }
      scrollTop =
        bodyScrollTop - documentScrollTop > 0
          ? bodyScrollTop
          : documentScrollTop;
      return scrollTop;
    }, 
    //可视窗口高度

    getWindowHeight() {
      var windowHeight = 0;
      if (document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
      } else {
        windowHeight = document.body.clientHeight;
      }
      return windowHeight;
    },

    //滚动条高度
    getScrollHeight() {
      var scrollHeight = 0,
        bodyScrollHeight = 0,
        documentScrollHeight = 0;
      if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
      }
      if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
      }
      scrollHeight =
        bodyScrollHeight - documentScrollHeight > 0
          ? bodyScrollHeight
          : documentScrollHeight;
      return scrollHeight;
    },
    touchstart(e){
        this.start = e.targetTouches[0].clientY
    },
    touchend(e){
        this.end = e.changedTouches[0].clientY
        if(this.start -this.end >0){
            if(Math.abs(this.getScrollTop() + this.getWindowHeight() - this.getScrollHeight())<100){
                this.flag= true
                setTimeout(() => {
                  this.flag = false
                  this.$emit("moreEvent")
                }, 1500);
                
            }
        }
    },
    touchmove(e){
      // e.preventDefault()

    }

  },
};
</script>

<style scoped="scoped">
.loading{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    /* width: 100px;
    height: 50px; */
    z-index: 9999;
    margin: auto;
    background-color: #F3F3F3;
    opacity: 0.8;

}
.loading-img{
    width: 2rem;
    height:2rem;
}
.hidden{
    opacity: 0;
}
</style>