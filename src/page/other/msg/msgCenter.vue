<template>
  <div>
      <v-msg-type :type="0" :count="count_box.sys" url="/other/msg/center"/>
      <v-msg-type :type="1" :count="count_box.classic" url="/other/msg/classic"/>
      <v-msg-type :type="2" :count="count_box.hole" url="/other/msg/hole"/>
  </div>
</template>

<script>
import MsgType from "@/components/msg/msgType.vue"
import {MsgModel} from "@/model/msg.js"
export default {
    name:"msgCenter",
    components:{
        "v-msg-type":MsgType
    },
    data(){
        return{
            count_box:{
                sys:0,
                classic:0,
                hole:0
            }
        }
    },
    created(){
        MsgModel.getMyMsgCount().then(res=>{
            this.count_box = res.data
        })
    }
}
</script>

<style>

</style>