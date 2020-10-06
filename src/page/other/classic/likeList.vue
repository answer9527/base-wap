<template>
  <div>
      <v-movieListOne v-for="(item,index) in classic_list" :key="index" :classic_id="item.id" :image="item.image" :author="item.author" :title="item.title" :intro="item.intro"/>
  </div>
</template>

<script>
import {ClassicModel} from "@/model/classic"
import MovieListOne from "@/components/classic/listOne/movie"
export default {
    name:'LikeList',
    data(){
        return{
            page:1,
            size:10,
            classic_list:[],
            hasNextPage:false
        }
    },
    components:{
        "v-movieListOne":MovieListOne
    },
    created(){
        this.get_like_list()
    },
    methods:{
        get_like_list(){
            let params = {
                page:this.page,
                size:this.size
            }
            ClassicModel.getMyLikeList(params).then(res=>{
                let list = res.data.list
                this.classic_list = this.classic_list.concat(list)
                this.hasNextPage = res.data.hasNextPage
            })
        }
    }
}
</script>

<style>

</style>