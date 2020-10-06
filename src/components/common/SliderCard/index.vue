<template>
  <div class="list-wrapper">
      <div 
        class="card_list flex-x flex-y-center" 
        :style="{'transform':'translateX('+distance+unit+')','paddingLeft':pdd}"
        @touchstart="touchstart" 
        @touchend="touchend" 
        @touchmove="touchmove"
        >
          <div 
            v-for="(item,index) in list" :key="index"
            :class="['card_item',currentIndex==index?'active':currentIndex==index-1?'next':currentIndex==index+1?'prev':'']"
            :style="{'width':width,'height':height}"
            >
              <!-- {{item}} -->
              <slot :data="item"></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"SliderCard",
    data(){
        return{
            currentIndex:0,
            distance:0,
            // 拖动起始 x坐标
            start:0,
            // 拖动结束 x坐标
            end:0
        }
    },
    computed:{
        // 单位
        unit(){
            let _rem = /rem$/
            if(_rem.test(this.width)){
                return "rem"
            }else{
                return "px"
            }
        },
        pdd(){
            let wid = parseFloat(this.width)
            
            // 暂不支持百分比 

            // rem 布局单位
            let _rem = /rem$/
            // 像素单位
            let _px = /px$/

            if(_rem.test(this.width)){
                return (7.5-wid)/2+"rem"
            }else{
                // console.log("calc((100%-" +this.width+")/2)")
                // return `calc(${fullWidth-wid}/2)`
                // return "calc((100%-" +this.width+")/2)"
                let fullWidth = document.body.offsetWidth
                return (fullWidth-wid)/2 + "px"

            }

        }
    },
    props:{
        list:{
            type:Array
        },
        width:{
            type:String
        },
        height:{
            type:String
        }
    },
    methods:{
        touchstart(e){

            this.start = e.targetTouches[0].clientX
        },
        touchmove(e){
            e.preventDefault()
        },
        touchend(e){

            this.end = e.changedTouches[0].clientX
            // 拖动的长度
            let dis = this.end - this.start
            if(dis>50){
                this.slider_left()
            }
            if(dis<-50){
                this.slider_right()
            }
        },
        // 向右滑动
        slider_right(){


            if(this.list.length-1>this.currentIndex){
                this.add_more()
                this.distance = parseFloat(this.distance) - parseFloat(this.width) 
                ++this.currentIndex
            }
        },
        // 向左滑动
        slider_left(){
            if(this.currentIndex>0){
                this.distance = parseFloat(this.distance) + parseFloat(this.width) 
                --this.currentIndex
            }

        },
        // 提前加载更多
        add_more(){
            if(this.list.length-3 == this.currentIndex){
                this.$emit("getMore")
            }
            
        }
    }
}
</script>

<style scoped="scoped">
.list-wrapper{
    width: 100%;
    overflow: hidden;

}
.card_list{
    transition: transform 0.5s ease;

}
.card_list>.card_item{
    flex-shrink: 0;
    transform: scale(0.6);
    box-sizing: border-box;
}
.card_list>.active{
    transform: scale(1) translateY(0);
}
.card_list>.next, .card_list>.prev {
    transform: scale(0.8);
    opacity: 0.6;
}
</style>