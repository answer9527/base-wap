<template>
  <div class="letter_list_page">
    <div class="before_page" :class="{'hide_before':showList}">
        <div class="page_bg"></div>
        <div class="wave_icon" @touchstart="gotouchstart" @touchmove="gotouchmove" @touchend="gotouchend"></div>
        <span class="wave_tip">长按指纹解锁。</span>
      </div>
        <div class="pageContent" v-if="showList">
          <div class="list_top_bg">
              <img src="../../../assets/images/secret_icon.png" alt="" class="secret_icon" @click="go_add">
              <div class="go_add">点一点瓶体，立刻创建给你未来的信！</div>
              <!-- <img src="../../../assets/iamges/notfound.png" alt=""> -->
          </div>
          <v-load-more style="width:100%" @moreEvent="get_more_list">
              <div class="letter_list flex-y  flex-y-center">
                <LetterOne v-for="(item,index) in list" :key="index" :letter="item"/>
              </div>
          </v-load-more>
      </div>



  </div>
</template>

<script>
import LetterOne from "@/components/letter/LetterOne"
import {LetterModel} from "@/model/letter"
import { mapState } from 'vuex'
var timeOutEvent=0;
export default {
    name:"letterList",
    data(){
        return{
            page:1,
            size:10,
            list:[],
            hasNextPage:false,
            showList:false
        }
    },
    created(){
        this.get_letter_list()
    },
    components:{
        LetterOne
    },
    methods:{
        get_letter_list(){
            let params = {
                "page":this.page,
                "size":this.size
            }
            LetterModel.getMyLetterList(params).then(res=>{
                this.list = this.list.concat(res.data.list)
                this.hasNextPage = res.data.hasNextPage
            })
        },
        go_add(){
            this.$router.push("/other/letter/add")
        },
        get_more_list(){
            if(this.hasNextPage){
                this.page++
                this.get_letter_list()
            }else{
                 this.$alert().warning("暂无更多！")
            }
        },
        // 指纹按下事件
        gotouchstart(){
            let that = this;
            clearTimeout(timeOutEvent);//清除定时器
            timeOutEvent = 0;
            timeOutEvent = setTimeout(function(){
                 
                   that.showList = true
                
            },1000);//这里设置定时
        },
          
        //   指纹抬起事件
        gotouchend(){
            clearTimeout(timeOutEvent);
            if(timeOutEvent!=0){
                
                 console.log(222)
            }
        },
        //手指
        gotouchmove(){
            clearTimeout(timeOutEvent);//清除定时器
            timeOutEvent = 0;
        },
    }
}
</script>

<style scoped="scoped">
.letter_list_page{
    width: 100%;
    height: 100%;
    position: relative;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
}
.letter_list_page>.before_page{
    width: 100%;
    height:100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 1;
    transition: all 0.4s ease-in;
}
.letter_list_page>.hide_before{
    height: 0;
    opacity: 0;
}
.before_page>.page_bg{
    background: url(../../../assets/images/message_bg.jpg);
    background-position: center;
    background-size: cover;
    margin-top: 1rem;
    width: 100%;
    height: 100%;
    display: block;
    position: fixed;
    top:0;
    z-index: 2;
}
.before_page>.wave_icon{
    width: 1rem;
    height: 1rem;
    position: fixed;
    bottom: 2.4rem;
    background: url(../../../assets/images/wave_icon.png);
    background-position: center;
    background-size: contain;
    display: block;
    z-index: 999;
}
.before_page>.wave_tip{
    position: fixed;
    bottom: 2rem;
    z-index: 999;
    font-size: 0.24rem;
    /* color:#FC4165; */
    color: #9c9e9e;
}
.pageContent{
    width: 100%;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FEFEFE;
}
.list_top_bg{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ECF7E7;
    padding: 0.6rem 0 1.8rem 0;
    box-sizing: border-box;
}
.letter_list{
    width: 100%;
}
.go_add{
  color: #535353;
  font-size: 0.24rem;
  padding:0.1rem 0.2rem;
}
.secret_icon{
    width: 3rem;
    height: 4rem;
}
.notfound_icon{
    width: 4rem;
    height: 4rem;
}


</style>