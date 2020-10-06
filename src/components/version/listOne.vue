<template>
  <div>
      <div class="flex-x flex-y-center">
          <span class="v_icon"></span>
          <span>{{$common.formatTime(createTime,"-",2)}}</span>
      </div>
      <div class="v_content flex-x">
          <div class="flex-x flex-x-center">
              <div></div>
          </div>
          <div>
            <span class="v_num">{{release}}</span>
            <span class="v_intro">{{intro}}</span>
          </div>

      </div>
  </div>
</template>

<script>
export default {
    name:"versionListOne",
    props:{
        createTime:{
            type:String
        },
        release:{
            type:String
        },
        intro:{
            type:String
        }
    }
}
</script>

<style scoped="scoped">
.v_icon{
    display: inline-block;
    width: 0.48rem;
    height: 0.48rem;
    background: url(../../assets/images/v_icon.png) no-repeat;
    background-position: center;
    background-size: contain;
    margin:0.1rem 0.16rem;
}
.v_content>div:nth-child(2){
    padding: 0.16rem 0;
}
.v_content>div:nth-child(1){
    width: 0.8rem;
    flex-shrink: 0;

   
}
.v_content>div:nth-child(1)>div{
    width: 1px;
    background: #3963BC;
    height: 100%;
}
.v_content span{
    font-size: 0.22rem;
}
.v_num{
    width: 0.8rem;
    text-align: center;
    background: #F48041;
    color: #FFFFFF;
    border-radius: 0.05rem;
    margin-right: 0.2rem;
    display: inline-block;

}
.v_intro{
    color: #8C98AE;
}
</style>