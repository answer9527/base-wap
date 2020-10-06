<template>
  <div class="suggest_page">
    <div class="search_out">
      <v-search-bar @changeInput="changeInput"/>
    </div>
    <div class="suggest_list">
      <v-suggest-one v-for="(item,index) in suggest_list" :key="index" 
        :suggestInfo="item.suggestInfo" 
        :replyInfo="item.replyInfo" 
        :createTime="item.createTime"
        />
    </div>
    <v-comment-write placeholder="请填写您的意见！" textarea_pla="填写您的宝贵意见！" @root_comment="insert_Suggest"/>
  </div>
</template>

<script>
import {SuggestModel} from "@/model/suggest"
import SuggestListOne from "@/components/suggest/listOne.vue"
import SearchBar from "@/components/search/searchBar.vue"
export default {
  name:"suggest",
  data(){
    return{
      suggest_list:[],
      hasNextPage:false,
      keyword:"",
      size:10,
      page:1
    }
  },
  components:{
    "v-suggest-one":SuggestListOne,
    "v-search-bar":SearchBar
  },
  created(){
    this.get_suggest_list()
  },
  methods:{
    // 发表意见
    insert_Suggest(e){
      let params = {
        "suggestInfo":e.content
      }
      SuggestModel.insert(params).then(res=>{
        this.$alert().success(res.message)
        this.reset_suggest_list()
      })
    },
    // 获取意见列表
    get_suggest_list(){
      let params = {
        "size":this.size,
        "page":this.page,
        "keyword":this.keyword
      }
      SuggestModel.getList(params).then(res=>{
        this.hasNextPage = res.data.hasNextPage
        this.suggest_list = this.suggest_list.concat(res.data.list)
      })
    },
    // 重置意见列表
    reset_suggest_list(){
        this.page = 1
        this.suggest_list = []
        this.get_suggest_list()
    },
    changeInput(e){
      this.keyword = e.key
      this.suggest_list=[]
      this.page=1
      this.get_suggest_list()
    }
  }
}
</script>

<style scoped="scoped">
.suggest_page{
  background: #EEEEEE;
  min-height: 11.5rem;
}
.suggest_list{
  padding: 1.5rem 0.2rem;
}
.search_out{
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    top: 1rem;
    background: linear-gradient(to bottom,#0AB6FE,#258FFD);
    padding: 0.4rem 0.4rem;
    
}
</style>