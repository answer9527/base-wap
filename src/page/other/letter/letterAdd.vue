<template>
<div class="write_page">
    <div class="block_one">
        <div class="block_title_row">
            <div class="block_title">填写内容</div>
        </div>
        <div class="block_content">
            <div class="form_row">
                <label for="" class="">标题:</label>
                <input type="text" placeholder="请填写标题" v-model="post_title"/>
            </div>
            <div class="content_in">
                <label class="content_label">
                    请填写您的书信内容:
                </label>
                <textarea class="content_txt"  maxlength="5000"  placeholder="请填写您的书信内容" v-model="post_content"></textarea>
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
                请务必确认邮箱填写正确，届时系统将会自动投递信件至您的邮箱。(温馨提示:手抄信件在邮寄信件时将会由管理员手抄一份信件发送至您的邮箱，语音信件同理。不想让管理员看到信件内容请务必选择普通信件。)
            </div>
            <div style="padding:20rpx 0">
                <div class="form_row">
                    <img class="" src="../../../assets/images/mail_icon.png"/>
                    <div class="form_title">电子邮箱</div>
                    <input type="text" placeholder="请填写接收邮箱" v-model="post_email"/>
                </div>
                <div class="form_row">
                    <img class="" src="../../../assets/images/time_icon.png"/>
                    <div class="form_title">邮寄时间</div>
                    <div class="placeholder date">
                       <v-piker-time :rows="5" :rowHeight="50" :year="dateTimeArray[0]" :month="dateTimeArray[1]" :day="dateTimeArray[2]" @changeTime="changeTime"/>
                    </div>                     
                </div>
                <div class="form_row">
                    <img class="" src="../../../assets/images/type_icon.png"/>
                    <div class="form_title">信件类型</div>    
                    <div  class="placeholder date" @click="openSheet">
                        {{post_type.label}}
                    </div>               
                </div>
            </div>
        </div>
    </div>
    <div class="block_three">
        <div class="send_btn" @click="send_letter">寄给未来的你</div>
    </div>
    <v-action-sheet :propData="actionProps" @confirm_sheet="confirm_sheet" ref="actionSheet"/>

</div>
</template>

<script>
import {LetterModel} from "@/model/letter"
export default {
    name:"LetterAdd",
    data(){
        return{
            dateTimeArray:[new Date().getFullYear(),new Date().getMonth()+1,new Date().getDate()],
            post_title:"",
            post_content:"",
            post_email:"",
            post_type:{
                "label":"普通信件",
                "value":1
            },
            actionProps:{
                "title":"请选择信件类型",
                "type":"sex",
                "list":[
                    {
                        "label":"普通信件",
                        "value":1
                    },
                    {
                        "label":"手抄信件",
                        "value":2
                    },
                    {
                        "label":"语音信件",
                        "value":3
                    }
                ]
            }

        }
    },
    methods:{
        // 提交信件
        send_letter(){
            let param = {
                title:this.post_title,
                content:this.post_content,
                email:this.post_email,
                type:this.post_type.value,
                planTime:new Date(...this.dateTimeArray)
            }   
            // 如果有空值
            if(Object.values(param).includes("")){
                this.$alert().error("请填写完整")
                return false
            }
              //  如果时间在今天之前
            if(param.planTime<=new Date()){
                this.$alert().error("日期不符合")
                return false
            }
            LetterModel.insertLetter(param).then(res=>{
                this.$alert().success(res.message)
                this.post_title=""
                this.post_content=""
            })

           
        },
        // 监听时间改变
        changeTime(e){
            this.dateTimeArray = e
        },
        // 打开选择类型的选择
        openSheet(){
           this.$refs.actionSheet.show()
        },
        // 确认选择
        confirm_sheet(e){
            this.post_type =e
        }
    }
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
    font-size: 0.24rem;
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
    width: 0.4rem;
    height: 0.4rem;
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