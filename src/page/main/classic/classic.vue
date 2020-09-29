<template>
  <div>
    <div class="classic_header flex-x flex-x-between flex-y-center">
      <v-epsoide :createTime="classicData.createTime"/>
      <v-like :like_count="classicData.like_count" :like_status="classicData.like_status" @likeOrUnlike="likeOrUnlike"/>
    </div>
    <v-movie :image="classicData.image"  :intro="classicData.intro" v-if="classicData.type==100"/>
    <v-music :image="classicData.image" :url="classicData.url" :intro="classicData.intro" v-else-if="classicData.type==200"/>
    <v-essay :image="classicData.image"  :intro="classicData.intro" v-else/>
    <v-navi :title="classicData.title" @previous="previous" @next="next" :latest="latest"/>
  </div>
</template>

<script>
import { ClassicModel } from "@/model/classic.js";
import Epsoide from "@/components/classic/epsoide";
import Like from "@/components/classic/like";
import Music from "@/components/classic/music";
import Movie from "@/components/classic/movie";
import Essay from "@/components/classic/essay";
import Navi from "@/components/classic/navi";
import {mapActions,mapState} from "vuex"
export default {
  name: "Classic",
  data() {
    return {
        classicData:{},
    };
  },
  computed:{
      latest:{
          get(){
              return this.$store.state.latest == this.classicData.id
          }
      },
      ...mapState(['classic_list','classic_flag'])
  },
  components: {
    "v-epsoide": Epsoide,
    "v-like": Like,
    "v-music": Music,
    "v-movie": Movie,
    "v-essay": Essay,
    "v-navi": Navi,
  },
  methods: {
      ...mapActions(['set_latest','add_classic_flag','reduce_classic_flag','push_classic','update_classic']),
    // 获取最新的推荐
    get_latest_classic() {
      ClassicModel.getLatest({}).then((res) => {
          this.classicData = res.data
          this.set_latest(this.classicData.id)
          this.push_classic(this.classicData)
          this.add_classic_flag()
      });
    },
    // 获取上一条推荐
    previous(){
       this.reduce_classic_flag()
       this.classicData = this.classic_list[this.classic_flag]
    },
    // 获取下一条推荐
    next(){
        if(this.classic_list[this.classic_list.length-1].id == this.classicData.id){
            ClassicModel.getClassicRecommend(this.classicData.id,"previous").then(res=>{
                this.add_classic_flag()
                this.classicData= res.data
                this.push_classic(this.classicData) 
            })
        }else{
            this.add_classic_flag()
            this.classicData = this.classic_list[this.classic_flag]
        }
    },
    // 设置喜欢或取消喜欢
    likeOrUnlike(e){
      let behavior = e.behavior
      let cid = this.classicData.id
      ClassicModel.likeIt(behavior,cid).then(res=>{
        if(behavior=='setLike'){
          this.classicData.like_count ++
        }else{
          this.classicData.like_count --
        }
        this.classicData.like_status = !this.classicData.like_status
      })
    }
  },
  created() {
    // 当vuex中不存在推荐页的classic时候就加载  否则读vuex存的内容
    if(this.classic_list.length>0){
      this.classicData = this.classic_list[this.classic_flag]
    }else{
      this.get_latest_classic();
    }
    
  },

};
</script>

<style scoped="scoped">
.classic_header{
    padding: 0.2rem;
    border-bottom: 1px solid #f5f5f5;
}
</style>