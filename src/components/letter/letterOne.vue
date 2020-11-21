<template>
  <div class="letter-card">
    <div class="letter_title">
        {{letter.title}}
    </div>
    <div class="letter_content">
        {{letter.content}}
    </div>
    <div class="bottom_row">
        <div class="create_time">创建时间:{{$common.formatTime(letter.createTime,"-",2)}}</div>
        <div class="remaining">剩余寄达:<span>{{letter.planTime|formatOver}}</span></div>
    </div>
    <router-link :to="'/other/letter/detail/'+letter.id" tag="div" class="detail_btn">
        查看详情
    </router-link>
             <!-- <navigator url="/pages/letterDetail/index"  class="detail_btn">
                 查看详情
             </navigator> -->        
  </div>
</template>

<script>
export default {
    name:"letterOne",
    data(){
        return{

        }
    },
    props:{
        letter:{
            type:Object
        }
    },
    methods:{

    },
    filters:{
        formatOver(plan_time_str){
            let now = new Date()
            let planTime = new Date(plan_time_str)
            let time_num = planTime.getTime() - now.getTime()
            if(time_num<0){
                return "信件已过期"
            }else{
                var year =Math.floor(time_num/(24*3600*1000*365))
                var days = Math.floor((time_num-year*(24*3600*1000*365))/(24*3600*1000))
                return year>0?(year+"年零"+days+"天"):(days+"天")
            }
        }
    }
}
</script>

<style scoped="scoped">


.letter-card{
    width: 90%;
    background: #ffffff;
    /* height: 460rpx; */
    position: relative;
    top: -1.5rem;
    margin-top:0.6rem ;
    border-radius: 0.1rem;
    border: 0.02rem solid #F5F5F5;
    padding:0.3rem 0.4rem 0.6rem 0.4rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.letter-card>.letter_title{
    font-weight: bold;
    font-size: 0.32rem;
    text-align: center;
    padding: 0.1rem 0;
}
.letter-card>.letter_content{
    font-size: 0.28rem;
    text-indent: 0.56rem;
    display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:8;
    overflow: hidden;
    /* overflow: hidden; */

}
.bottom_row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.2rem 0;
    width: 100%;
    box-sizing: border-box;
}
.bottom_row>.create_time{
    font-size: 0.24rem;
}
.bottom_row>.remaining,.bottom_row>.remaining>span{
    font-size: 0.24rem;
}
.detail_btn{
    position: absolute;
    background: #7BC623;
    bottom: -0.32rem;
    font-size: 0.32rem;
    padding: 0.1rem 0.6rem;
    color: #FFFFFF;
    border-radius: 0.3rem;

}
</style>