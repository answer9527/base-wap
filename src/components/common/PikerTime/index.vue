<template>
  <div class="piker_time_box">
      <div class="mask" @click="close_piker" v-if="show"></div>
      <div @click="open_piker">{{time[0]|addZero}}-{{time[1]|addZero}}-{{time[2]|addZero}}</div>
      <div class="sheet_block"  :style="{'height':show?pikerHeight+'px':'0'}">
        <div class="flex-x flex-x-between flex-y-center piker_btn_row" v-show="show" :style="{'height':$attrs.rowHeight+'px'}">
          <div @click="cancel">取消</div>
          <div @click="confirm">确定</div>
        </div>
        <div class="time_box flex-x">
          <PikerCol :colList ="years" unit="年" class="piker_col" :value="time[0]" v-bind="$attrs" @changeValue="changeValue($event,0)"/>
          <PikerCol :colList ="months" unit="月" class="piker_col" :value="time[1]" v-bind="$attrs" @changeValue="changeValue($event,1)"/>
          <PikerCol :colList ="days" unit="日" class="piker_col" :value="time[2]" v-bind="$attrs" @changeValue="changeValue($event,2)" ref="daysCol"/>
        </div>
        <div class="line" :style="{'top':lineTop+'px'}"></div>
        <div class="line" :style="{'top':lineBottom+'px'}"></div>
      </div>
  </div>
</template>

<script>
import PikerCol from "./PikerCol/index"
export default {
  name:"pikerTime",
  data(){
    return{
      show:false,
      pikerHeight:0,
      lineTop:0,
      lineBottom:0,
      years:[this.year-10,this.year-9,this.year-8,this.year-7,this.year-6,this.year-5,this.year-4,this.year-3,this.year-2,this.year-1,this.year,this.year+1,this.year+2,this.year+3,this.year+4,this.year+4,this.year+5,this.year+6,this.year+7,this.year+8,this.year+9],
      months:[1,2,3,4,5,6,7,8,9,10,11,12],
      days:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      time:[this.year,this.month,this.day]
    }
  },
  props:{
    year:{
      type:Number,
      default:new Date().getFullYear()
    },
    month:{
      type:Number,
      default:new Date().getMonth()+1
    },
    day:{
      type:Number,
      default:new Date().getDate()
    }
  },
  components:{
    PikerCol
  },

  mounted(){
    this.initPiker()
    this.calendarInit()
    
  },
  methods:{
    initPiker(){
      let height = this.$attrs.rowHeight
      let rows =this.$attrs.rows
      this.pikerHeight = height*(rows+1)
      this.lineTop = parseInt(rows/2)*height+height
      this.lineBottom = parseInt(rows/2)*height+height*2
    },
    open_piker(){
      this.show = true
      this.$common.stopScroll()
    },
    close_piker(){
      this.show = false
      this.$common.openScroll()
    },
    cancel(){
      this.close_piker()
    },
    confirm(){
      this.close_piker()
    },
    changeValue(e,index){
      this.time[index] =e
      if(index!=2){
        this.calendarInit()
      }
      this.$emit("changeTime",this.time)
      
    },
    calendarInit(){
      // 当前月有多少天
        let MonDaysTotal  = new Date(this.time[0],this.time[1],0).getDate()
        // 处理日停留在31号（或30,29等）  但是月份没有31天的情况，
        if(MonDaysTotal<this.time[2]){
          this.$refs["daysCol"].toRightCol(MonDaysTotal)
        }
        let temp = []
        for (let i = 1; i < MonDaysTotal+1; i++) {
          temp.push(i) 
        }
        
        this.days = temp
    }


  },
  filters:{
    addZero(val){
      if(val>=10){
          return val
      }else{
          return "0"+val
      }
    }
  }

}
</script>

<style scoped="scoped">
.piker_time_box{
  /* width: 100%; */
}
.sheet_block{
  position: fixed;
  width: 100%;
  background: #FFFFFF;
  z-index:1000;
  bottom: 0;
  left: 0;
  height: 0;
  transition: height 0.4s ease-in;
}
.show_sheet{
  height: 300px;
}
.sheet_block>.piker_btn_row{
  padding:0 15px;
  border-bottom: 1px solid #F6F6F6;
}
.sheet_block>.piker_btn_row>div{
  font-size: 14px;
 
} 
.sheet_block>.piker_btn_row>div:nth-child(2){
   color: #07C160;
}
.time_box{
  width: 100%;
  overflow: hidden;
}
.time_box>.piker_col{
  width: 33.333%;
  transition: 0.3s all;
}


.sheet_block>.line{
  height: 1px;
  width: 100%;
  background: #F6F6F6;
  position: absolute;
  /* top:150px; */
}

</style>