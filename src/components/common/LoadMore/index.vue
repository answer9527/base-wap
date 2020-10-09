<template>
  <div>
      <!-- <div :class="['loading',{'hidden':more_flag}]">加载中...</div> -->
  </div>
</template>

<script>
export default {
  name: "LoadMore",
  data() {
    return {
        more_flag:true
    };
  },
  mounted() {
    window.addEventListener("scroll",this.scrollFn)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollFn); // 销毁监听
  },
  methods: {
    scrollFn() {
      if (this.getScrollTop() + this.getWindowHeight() == this.getScrollHeight()) {
        // 　　　　　　滚到底了
        this.$emit("moreEvent")
        this.more_flag = false
      }else{
          this.more_flag = true
      }
    },
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
    }, //可视窗口高度

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
    width: 100px;
    height: 50px;
    z-index: 99999;
    margin: auto;
}
.hidden{
    opacity: 0;
}
</style>