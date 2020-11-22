<template>
  <div class="letter_list_page">
      <div class="before_page" v-if="false">
        <div class="page_bg"></div>
        <div class="wave_icon"></div>
      </div>

      <div class="pageContent">
          <div class="list_top_bg">
              <img src="../../../assets/images/secret_icon.png" alt="" class="secret_icon" @click="go_add">
              <div class="go_add">点一点瓶体，立刻创建给你未来的信！</div>
              <!-- <img src="../../../assets/iamges/notfound.png" alt=""> -->
          </div>
          <LetterOne v-for="(item,index) in list" :key="index" :letter="item"/>
      </div>
  </div>
</template>

<script>
import LetterOne from "@/components/letter/LetterOne"
import {LetterModel} from "@/model/letter"
import { mapState } from 'vuex'
export default {
    name:"letterList",
    data(){
        return{
            page:1,
            size:10,
            list:[],
            hasNextPage:false
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
        }
    }
}
</script>

<style scoped="scoped">
.letter_list_page{
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.letter_list_page>.before_page{
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.before_page>.page_bg{
    background: url(../../../assets/images/message_bg.jpg);
    background-position: center;
    background-size: contain;
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
    bottom: 2rem;
    background: url(../../../assets/images/wave_icon.png);
    background-position: center;
    background-size: contain;
    display: block;
    z-index: 999;
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