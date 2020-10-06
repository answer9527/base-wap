<template>
  <div class="add_page">
      <div class="page_top">
          New-build
      </div>
      <div class="form_content_out flex-x flex-x-center">
        <div class="form_content">
            <div class="form_item">
                <input type="text" v-model="title" placeholder="给树洞起个标题吧">
            </div>
            <div class="form_item">
                <textarea placeholder="请填写您的树洞内容(30字以上)" v-model="content"></textarea>
            </div>
            <div class="form_item select_box flex-x flex-x-between" @click="open_type_sheet">
                <div>树洞性质</div>
                <div>{{typeInfo.label}}</div>
            </div>
            <div class="form_item select_box flex-x flex-x-between" @click="open_comment_sheet">
                <div>评论内容</div>
                <div>{{commentInfo.label}}</div>
            </div>
            <div class="form_item select_box flex-x flex-x-between" @click="open_can_sheet">
                <div>能否评论</div>
                <div>{{canCommentInfo.label}}</div>
            </div>
            <div class="add_row">
                <div :class="['add_btn',{'active':can_add}]" @click="confirm_add">立即创建</div>
            </div>
        </div>
      </div>

      <v-action-sheet :propData="actionProps" @confirm_sheet="confirm_sheet" ref="actionSheet"/>
  </div>
</template>

<script>
import {HoleModel} from "@/model/hole.js"
export default {
    name:"createHole",
    data(){
        return{
            title:"",
            content:"",
            actionProps:{},
            typeInfo:{
                label:"公开",
                value:1
            },
            commentInfo:{
                label:"可见",
                value:1
            },
            canCommentInfo:{
                label:"能",
                value:1
            },
            type_sheet:{
                "title":"请选择树洞的性质",
                "type":"typeInfo",
                "list":[
                    {
                        "label":"公开",
                        "value":1
                    },
                    {
                        "label":"匿名",
                        "value":2
                    },
                    {
                        "label":"私密",
                        "value":3
                    }
                ]
            },
            comment_sheet:{
                "title":"树洞评论是否他人可见？",
                "type":"commentInfo",
                "list":[
                    {
                        "label":"可见",
                        "value":1
                    },
                    {
                        "label":"不可见",
                        "value":0
                    }
                ]
            },
            can_sheet:{
                "title":"树洞能否被评论？",
                "type":"canCommentInfo",
                "list":[
                    {
                        "label":"能",
                        "value":1
                    },
                    {
                        "label":"不能",
                        "value":0
                    }
                ]
            }

        }
    },
    computed:{
        // 添加按钮
        can_add(){
            if(this.title!=""&&this.content.length>30){
                return true
            }else{
                return false
            }
        }
    },
    created(){
       
    },
    methods:{
        open_type_sheet(){
            this.actionProps = this.type_sheet
            this.$refs.actionSheet.show()
        },
        open_comment_sheet(){
            this.actionProps = this.comment_sheet
            this.$refs.actionSheet.show()
        },
        open_can_sheet(){
            this.actionProps = this.can_sheet
            this.$refs.actionSheet.show()
        },
        // 确认点击sheet选项
        confirm_sheet(item){
            let type = item.type
            switch (type) {
                case "typeInfo":
                    this.typeInfo = item
                    break;
                case "commentInfo":
                    this.commentInfo = item
                    break;
                default:
                    this.canCommentInfo = item
                    break;
            }
        },
        // 确认点击
        confirm_add(){
            if(this.can_add){
                let params = {
                    'title':this.title,
                    'content':this.content,
                    'type':this.typeInfo.value,
                    'commentVisible':this.commentInfo.value,
                    'canComment':this.canCommentInfo.value
                }
                HoleModel.insert_hole(params).then(res=>{
                    this.$alert().success(res.message)
                    this.title=""
                    this.content=""
                })
            }
        }
    }
}
</script>

<style scoped="scoped">
.add_page{
    width: 100%;
}
.page_top{
    width: 100%;
    box-sizing: border-box;
    background: #2B4ADC;
    padding: 0.6rem 0 0.8rem 0.4rem;
    color: #FFFFFF;
    font-size: 0.6rem;

}
.form_content{
    width: 92%;
    background: #FFFFFF;
    position: relative;
    height: 10rem;
    top: -0.4rem;
    box-shadow: 0.03rem 0.03rem 0.15rem 0.03rem rgba(0, 0, 0, 0.1);
    border-radius: 0.2rem;
    padding: 0.3rem;
    box-sizing: border-box;
    position: relative;
}
.form_content>.form_item{
    border-bottom: 0.02rem solid #cccccc;
    padding: 0.16rem 0.1rem;
}
.form_content>.select_box{
     padding: 0.2rem 0.2rem;
}
.form_content>.add_row{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.2rem;
    box-sizing: border-box;
    
}
.add_row>.add_btn{
    background: #E5E8EB;
    width: 100%;
    text-align: center;
    height: 0.72rem;
    line-height: 0.72rem;
    color: #FFFFFF;
}
.add_row>.active{
    background: #3963BC;
}
.form_content>.select_box>div:nth-child(1){
    color: #808080;
}
.form_content>.select_box>div:nth-child(2){
    color:#cccccc
}
.form_content>.form_item>input{
    width: 100%;
    border: 0;
    outline: none;
    font-size: 0.32rem;
}
.form_content>.form_item>textarea{
    width: 100%;
    border: 0;
    outline: none;
    font-size: 0.32rem;
    height: 5rem;
}
</style>