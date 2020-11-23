import Vue from "vue"

const formatTime=function(time_str,str="-",type=1){
    var time = new Date(time_str);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
  
    var result = ""
    switch (type) {
        case 2:
            result = y+str+add0(m)+str+add0(d);
            break;
        case 3:
            result = y+str+add0(m)+str+add0(d) +" "+add0(h)+":"+add0(mm);
            break;
        case 4:
          result = add0(m)+str+add0(d) +" "+add0(h)+":"+add0(mm);
          break;
        default:
            result = y+str+add0(m)+str+add0(d) +" "+add0(h)+":"+add0(mm)+":"+add0(s);
            break;
    }
    return result;
  
  }
  const add0=function(m){
    return m<10?'0'+m:m 
  }
//   禁止body滚动  针对遮罩层弹出 禁止body可以滚动问题解决方案
  const stopScroll=function(){
    document.documentElement.style.overflow="hidden";
    // document.body.style.position="fixed";
    // document.body.style.top="0px";
    // document.body.style.width="100%";
  }
//   开启body滚动
  const openScroll= function(){
    document.documentElement.style.overflow="scroll";
    document.body.style.position="static";
  }



export default{
    install(){
        Vue.prototype.$common ={
            formatTime,stopScroll,openScroll
        }
    }
}