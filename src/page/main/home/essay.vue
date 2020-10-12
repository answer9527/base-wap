<template>
  <div>
      <v-load-more @moreEvent="get_more_list">
        <v-essayListOne v-for="(item,index) in classic_list" :key="index" 
        :classic_id="item.id" 
        :image="item.image" 
        :author="item.author" 
        :title="item.title" 
        :intro="item.intro"
        :createTime="item.createTime"
        >
            <div slot="like">
                <v-like :like_count="item.like_count" :like_status="item.like_status"/>
            </div>
        </v-essayListOne>
      </v-load-more>
  </div>
</template>

<script>
import EssayListOne from "@/components/classic/listOne/essay.vue"
import Like from "@/components/classic/like.vue"
import {home_mixins} from "./home_mixins"
export default {
    name:"essayList",
    mixins:[home_mixins],
    data(){
        return{
            key:"400"
        }
    },
    components:{
        "v-essayListOne":EssayListOne,
        "v-like":Like
    }
}
</script>

<style>

</style>