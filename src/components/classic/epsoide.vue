<template>
  <div class="flex-x">
    <div class="index-container">
        <span class="plain">No.</span>
        <span class="index">{{day|add0}}</span>
        <div class="line"></div>
    </div>
    <div class="data-container">
        <span class="month">{{month}}</span>
        <span class="year">{{year}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name:"epsoide",
    data(){
        return{
            year:"",
            month:"",
            day:""
        }
    },
    props:{
        createTime:{
            type:String
        }
    },
    created(){
        
    },
    methods:{

    },
    watch:{
        createTime(newVal,oldVal){           
            let time = new Date(newVal)
            this.year = time.getFullYear()
            const mon = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
            this.month = mon[time.getMonth()]
            this.day = time.getDate()
        }
    },
    filters:{
        add0(val){
            if(val<10){
                return "0"+val
            }else{
                return val
            }
        }
    }
}
</script>

<style scoped="scoped">
  .plain{
    font-size: 0.32rem
  }
  .index{
    font-size: 0.6rem;
    line-height: 0.6rem;
    font-weight: 800;
    margin-right: 0.14rem
  }
  .line{
    height: 0.44rem;
    margin-right: 0.14rem;
    margin-bottom: 0.14rem;
    border-left: 1px solid black
  }
  .index-container{
    display: flex;
    flex-direction: row;
    align-items: baseline
  }
  .data-container{
    height: 0.6rem;
    display: flex;
    flex-direction: column;
    margin-top: 0.05rem
  }
  .month{
    font-size: 0.24rem;
    line-height: 0.24rem;
    margin-right:0.02rem;
  }
  .year{
    font-size: 0.2rem;
  }
</style>