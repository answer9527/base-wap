<template>
  <div>
      <v-verseListOne v-for="(item,index) in classic_list" :key="index" :classic_id="item.id" :image="item.image" :author="item.author" :title="item.title" :intro="item.intro"/>
  </div>
</template>

<script>
import VerseListOne from "@/components/classic/listOne/verse.vue"
import {ClassicModel} from "@/model/classic"
export default {
    name:"verseList",
    data(){
        return{
            key:"300",
            size:10,
            page:1,
            classic_list:[]
        }
    },
    components:{
        "v-verseListOne":VerseListOne
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