<template>
  <div>
      <v-movieListOne v-for="(item,index) in classic_list" :key="index" :image="item.image" :author="item.author" :title="item.title" :intro="item.intro"/>
  </div>
</template>

<script>
import {ClassicModel} from "@/model/classic"
import MovieListOne from "@/components/classic/listOne/movie.vue"
export default {
    name:"MovieList",
    data(){
        return{
            key:"100",
            size:10,
            page:1,
            classic_list:[]
        }
    },
    components:{
        'v-movieListOne':MovieListOne
    },
    created(){
        this.get_classic_by_type()
    },
    methods:{
        get_classic_by_type(){
            let params  = {
                "key":this.key,
                "page":this.page,
                "size":this.size
            }
            ClassicModel.getByListType(params).then(res=>{
                let temp = res.data.list
                this.classic_list = this.classic_list.concat(temp)
            })
        }
    }
}
</script>

<style>

</style>