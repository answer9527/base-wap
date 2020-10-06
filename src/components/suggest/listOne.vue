<template>
  <div>
      <div class="suggest_item">
            <div class="sug_row">
                <!-- <div class="sug_tag">意见</div> -->
                <div class="sug_detail">{{suggestInfo}}</div>
            </div>
            <div class="reply_row">
                <div class="reply_detail">{{replyInfo}}</div>
            </div>
            <div class="replyer_row" v-if="replyInfo">
                <div class="replyer_avatar"></div>
                <div class="replyer">渣叔</div>
                <div class="reply_time">答复于{{$common.formatTime(createTime,"-",2)}}</div>
           </div>
        </div>
  </div>
</template>

<script>
export default {
    name:"suggestListOne",
    data(){
        return{

        }
    },
    props:{
        suggestInfo:{
            type:String
        },
        replyInfo:{
            type:String
        },
        createTime:{
            type:String
        }
    }
}
</script>

<style scoped="scoped">
.suggest_item{
    width: 100%;
    background: #FFFFFF;
    padding: 0.3rem;
    box-sizing: border-box;
    border-radius: 0.1rem;
    margin-bottom: 0.2rem;
}
.sug_row{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.sug_row>.sug_detail::before{
    content: "意见";
    background: #4C6AFE;
    color: #FFFFFF;
    font-size: 0.24rem;
    padding: 0.08rem 0.25rem;
    border-radius: 0.1rem;
    margin-right: 0.1rem;
    font-weight: 500;
}
.sug_row>.sug_detail{
    font-weight: bold;
    font-size: 0.3rem;
    line-height:0.4rem;
}
.reply_row{
    padding: 0.12rem 0;
}
.reply_row>.reply_detail{
    font-size: 0.28rem;
    color: #858585;
}
.replyer_row{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size:0.28rem;
    color: #7F7F7F;
}
.replyer_row>.replyer_avatar{
    width: 0.6rem;
    height: 0.6rem;
    background-image: url(https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEKneMyKiaqv5D7zBkr0VEF1ibqKNy4CV3ZcqZBIrSfH4EqqYHibVAxaiciaYp1vKNuYBCHBjyR3agJ0ia3w/132);
    background-position: center;
    background-size: contain;
    border-radius: 50%;
}
.replyer_row>.replyer{
    padding: 0 0.3rem 0 0.1rem;
}
</style>