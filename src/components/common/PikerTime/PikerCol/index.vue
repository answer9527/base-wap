<template>
    <ul 
        class="col_ul"     
        @touchstart="touchstart" 
        @touchend="touchend" 
        @touchmove="touchmove"
        :style="{'transform':'translateY('+(rowHeight*(-currentIndex+rows_mid))+'px)'}"
    >
    <li v-for="(item,index) in colList" :key="index" :class="{'active':index==currentIndex}" :style="{'height':$attrs.rowHeight+'px'}">{{item|addZero}}{{unit}}</li>
    </ul>
</template>

<script>
export default {
    name:"PikerCol",
    data(){
        return{
            // 一个选择器的行高
          rowHeight:0,
        //   行高的一半  超过行高一半的拖动 为有效的拖动
          rowHeight_mid:0,
        //   行数的一半
          rows_mid:0,
        //   
          currentIndex:0
        }
    },
    inheritAttrs: true,
    props:{
        colList:{
            type:Array
        },
        value:{
            type:Number,
            default:0
        },
        unit:{
            type:String
        },
        
    },
    mounted(){
        this.initCol()
    },
    methods:{
        initCol(){
            this.rowHeight = this.$attrs.rowHeight
            this.rowHeight_mid = this.$attrs.rowHeight/2
            this.rows_mid = parseInt(this.$attrs.rows/2)
            this.currentIndex = this.colList.indexOf(this.value)
        },
        touchstart(e){
            this.startY = e.targetTouches[0].clientY
        },
        touchend(e){
            this.endY = e.changedTouches[0].clientY
            let distance = this.endY - this.startY
            if(Math.abs(distance)>this.rowHeight_mid){
                let realIndex = this.currentIndex-parseInt(distance/this.rowHeight)
                if(realIndex>this.colList.length-1){
                    this.currentIndex = this.colList.length-1
                }else if(realIndex>=0){
                    this.currentIndex  -= parseInt(distance/this.rowHeight)
                }
                else{
                    this.currentIndex = 0
                }
                this.$emit("changeValue",this.colList[this.currentIndex])

            }
        },
        touchmove(e){
            e.preventDefault()
        },
        // 强制矫正col的位置
        toRightCol(daysLenth){
            this.currentIndex = daysLenth-1
            this.$emit("changeValue",this.colList[this.currentIndex])
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
.col_ul>li{
    font-size: 12px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #B1B1B1;
}
.col_ul>.active{
    color: #000000;
    
}
</style>