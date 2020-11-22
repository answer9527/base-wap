<template>
<div class="write_page">
    <div class="block_one">
        <div class="block_title_row">
            <div class="block_title">填写内容</div>
        </div>
        <div class="block_content">
            <div class="form_row">
                <label for="" class="">标题:</label>
                <input type="text" placeholder="请填写标题"  />
            </div>
            <div class="content_in">
                <label class="content_label">
                    请填写您的书信内容:
                </label>
                <textarea class="content_txt"  maxlength="5000" style="height:500rpx" placeholder="请填写您的书信内容"></textarea>
            </div>
        </div>
    </div>
    <div class="block_two">
        <div class="block_title_row">
            <div class="block_title">
                基本信息
            </div>
        </div>
        <div class="block_content">
            <div class="content_intro" >
                请留下您的接受信件的电子邮箱以及接受信件的日期。届时系统将会自动投递信件至您的邮箱。
            </div>
            <div style="padding:20rpx 0">
                <div class="form_row">
                    <img class="" src="../../../assets/images/mail_icon.png" mode="aspectFit|aspectFill|widthFix" lazy-load="false" binderror="" bindload=""/>
                    <div class="form_title">电子邮箱</div>
                    <input type="text" placeholder="请填写接收邮箱"  bindinput="changeEmail"/>
                </div>
                <div class="form_row">
                    <img class="" src="../../../assets/images/time_icon.png" mode="aspectFit|aspectFill|widthFix" lazy-load="false" binderror="" bindload=""/>
                    <div class="form_title">邮寄时间</div>
                    <div class="placeholder date">
                        <!-- <picker mode="multiSelector" value="{{dateTime}}" bindcolumnchange="changeDateTimeColumn" range="{{dateTimeArray}}">
                            <div class="tui-picker-detail">
                                {{dateTimeArray[0][dateTime[0]]}}-{{dateTimeArray[1][dateTime[1]]}}-{{day}}
                            </div>
                        </picker> -->
                       <v-piker-time :rows="5" :rowHeight="50"/>
                    </div>
                     
                </div>
            </div>
        </div>
    </div>
    <div class="block_three">
        <div class="send_btn" bind:tap="send_letter">寄给未来的你</div>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style scoped="scoped">
.write_page{
    width: 100%;
    display: flex;
    flex-direction: column;
    /* padding-top: 0.4rem; */
}
.block_one{
  padding-top: 0.4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.block_title_row{
    display: flex;
}
.block_title{
    background: linear-gradient(to right,#23AEF4,#157EC8);
    color: #FFFFFF;
    padding: 0.1rem 1.2rem 0.1rem 0.4rem;
    border-top-right-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;
}
.block_content{
    padding:0.2rem 0.4rem;
    width: 100%;
    box-sizing: border-box;
}
.content_in{
    padding: 0.2rem 0;
}
.content_intro{
    font-size: 0.28rem;
}
.form_row{
    display: flex;
    flex-direction: row;
    padding: 0.1rem  0;
    align-items: center;
}
.form_row>label{
    padding-right: 0.2rem;
        
}
.content_label{
    color: #999999;
    margin-bottom: 0.4rem;
}
.form_row>input{
    background: #F3F3F3;
    padding: 0.15rem;
    flex: 1;
    border: 0;
    outline: none;
}
.content_txt{
    background: #F3F3F3;
    width: 100%;
    padding: 0.2rem;
    margin-top: 0.1rem;
    box-sizing: border-box;
    height: 5rem;
    outline: none;
    border: 0;
}

.form_row>img{
    width: 0.48rem;
    height: 0.48rem;
}
.form_row>.form_title{
    font-size: 0.28rem;
    padding: 0 0.2rem;
}
.form_row>.date{
    background: #F3F3F3;
    flex: 1;
    padding: 0.15rem;
    color: #808080;
}

.block_three{
    width: 100%;
    padding: 0.2rem 0.4rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.send_btn{
    padding: 0.15rem 0;
    width: 100%;
    background: linear-gradient(to right,#10DFAB,#89B276);
    color: #FFFFFF;
    text-align: center;
    font-size: 0.36rem;
    border-radius: 0.2rem;
}
</style>