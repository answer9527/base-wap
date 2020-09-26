<template>
  <div class="comment_bar">
    <div class="mask" @click="closeText" v-if="showMask"></div>
    <div class="comment_text_box" :style="{'height':height}">
        <div class="flex-x flex-x-between">
            <span @click="closeText">取消</span>
            <span @click="send_text">发送</span>
        </div>
        <textarea rows="9" :placeholder="textarea_pla" v-model="text_val"></textarea>
    </div>
    <div class="flex-x flex-y-center flex-x-around">
      <div class="input_bar" @click="openText">{{placeholder}}</div>
      <Like />
    </div>
  </div>
</template>

<script>
import Like from "../../../components/classic/like";
export default {
  name: "CommentBox",
  data() {
    return {
      height: 0,
      text_val:""
    };
  },
  computed: {
    showMask: {
      get() {
        if (this.height == 0) {
          return false;
        } else {
          return true;
        }
      },
    },
  },
  props: {
    placeholder: {
      type: String,
    },
    textarea_pla:{
        type: String,
        default:"文明发言，理性讨论！"
    }
  },
  components: {
    Like,
  },
  methods: {
    openText() {
      this.height = "4.6rem";
    },
    closeText() {
      this.height = 0;
    },
    send_text(){
        if(this.text_val.length>5){
            alert("成功")
            this.text_val=""
            this.closeText()
        }else{
            alert("您的评论过短")
        }
    }
  },
};
</script>

<style scoped="scoped">
.comment_bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #ffffff;
  color: #c1c1c1;
  box-sizing: border-box;
  border-top: 1px solid #eaeaea;
  width: 100%;
  padding: 0.14rem 0;
}
.input_bar {
  width: 4rem;
  border: 1px solid #999999;
  border-radius: 0.3rem;
  padding: 0;
  padding: 0.16rem 0.3rem;
  font-size: 0.24rem;
}
.mask {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  transition: 1s all;
  z-index: 9999;
}
.comment_text_box {
  position: fixed;
  background: #ffffff;
  bottom: 0;
  width: 100%;
  transition: 1s all;
  z-index: 99999;
  padding:0 0.4rem;
  box-sizing: border-box;
}
.comment_text_box>div{

    padding: 0.2rem 0;
    
}
.comment_text_box>div>span{
font-size: 0.32rem;
}
.comment_text_box>textarea{
    width: 100%;
    background: #E8E8E8;
    border: 0;
    border-radius: 0.2rem;
    outline: none;
    padding: 0.2rem;
    box-sizing: border-box;
}
</style>