<template>
    <div class="time-com">
        <div class="time_view">{{view_time(time)}}</div>
    </div>
  
</template>

<script>
export default {
    name:"Time",
    props:{
        time:{
            type:String
        }
    },
    methods:{
        view_time(time){
            let time_num1 = new Date(time).getTime()
            let now_num = new Date().getTime()
            let temp_time;
            let during_time = now_num-time_num1
            if(during_time>24*60*60*1000){
                temp_time=this.$common.formatTime(time,"-",4)
            }else{
                temp_time = Math.ceil((during_time/1000/60/60))+"小时前"
            }
            return temp_time
        }
    }
}
</script>

<style scoped="scoped">
.time_view{
    background: #DDDDDD;
    color: #FFFFFF;
    width: 1.8rem;
    text-align: center;
    border-radius: 0.3rem;
    padding: 0.1rem;
    font-size: 0.24rem;
    margin: 0 auto;
}
</style>