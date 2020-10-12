<template>
  <div class="hole_list_page">
      <div class="hole_list">
        <v-slider-card :list="hole_list" @getMore="get_hole_list" width="5.5rem" height="8rem">
            <v-slider-item slot-scope="scope" :slider="scope.data"></v-slider-item>
        </v-slider-card>
      </div>
      <div class="page_intro">
          — 让渣叔为你寄存心事、秘密。—
      </div>
      <router-link to="/other/hole/add" class="go_create">创建树洞</router-link>
      <v-hole-bar :hole_list ="my_hole"/>
  </div>
</template>

<script>
import HoleBar from "@/components/hole/holeBar.vue"
import SliderCard from "@/components/common/SliderCard/index"
import SliderItem from "@/components/common/SliderItem/index"
import {HoleModel} from "@/model/hole.js"
export default {
    name:"holeList",
    data(){
        return{
            page:1,
            size:6,
            hole_list:[],
            my_hole:[]
        }
    },
    components:{
        "v-hole-bar":HoleBar,
        "v-slider-card":SliderCard,
        "v-slider-item":SliderItem
    },
    created(){
        this.get_hole_list()
        this.get_my_hole()
    },
    methods:{
        // 获取随机的树洞
        get_hole_list(){
            let params = {
                "page":this.page,
                "size":this.size
            }
            HoleModel.get_rand_hole(params).then(res=>{
                this.hole_list = this.hole_list.concat(res.data)
            })
        },
        // 获取我创建的树洞
        get_my_hole(){
            HoleModel.get_my_hole({
                size:5,
                page:1
            }).then(res=>{
                this.my_hole = res.data.holes
            })
        }
    }
}
</script>

<style scoped="scoped">
.hole_list_page{
    height: 100%;
    background: #ECF7E7;
}
.hole_list{
    padding: 0.6rem 0;
}
.page_intro{
    text-align:center;
    color:#342158;
    font-weight:bold;
    font-size: 0.32rem;
}
.go_create{
    display: block;
    width: 3.2rem;
    margin: 0.3rem auto;
    background: #C9B7AD;
    color: #FFFFFF;
    padding: 0.12rem 0;
    font-size: 0.32rem;
    text-align: center;

}
</style>