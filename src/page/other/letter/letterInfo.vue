<template>
  <div class="letter_info_page">
      <div class="top_box">
          <img src="../../../assets/images/future.png" class="top_img" />
      </div>
      <div class="detail_box"  >
          <div class="sub_box"  >
            <div class="sub_box_in"  >
                <div class="sub_title"  >
                    给自己的信
                </div>
                <div class="line"></div>
            </div>
          </div>
          <div class="title">{{letter.title}}</div>
          <div class="userInfo_row"  >
              <div class="user_name">{{letter.userName}}</div>
              <div class="create_time"  >
                {{$common.formatTime(letter.createTime,"-",1)}}
              </div>
              <div class="type_block">
                <span class="type_tag">{{$common.formatLetterType(letter.type)}}</span>
              </div>
          </div>

          <div class="letter_content">
            {{letter.content}}
          </div>
          <div class="end_row">
            <div class="end_line"></div>
            <div>END</div>
            <div class="end_line"></div>
          </div>
          <div v-if="letter.image" class="image_box">
            <div class="sub_box"  >
              <div class="sub_box_in"  >
                  <div class="sub_title"  >
                      手抄版
                  </div>
                  <div class="line"></div>
              </div>
            </div>
            <img :src="letter.image" style="width:100%"/>
          </div>
        
          <div class="post_time"  >
              送达日期：{{$common.formatTime(letter.planTime,"-",2)}}
          </div>

      </div>
  </div>
</template>

<script>
import {LetterModel} from "@/model/letter"
export default {
  name:"LetterInfo",
  data(){
    return{
      letter_id:null,
      letter:{

      }
    }
  },
  created(){
    this.letter_id = this.$route.params.id
    this.get_letter_info()
  },
  methods:{
    get_letter_info(){
      LetterModel.getMyLetterDetail({id:this.letter_id}).then(res=>{
        this.letter = res.data
      })
    },

    del_letter(){
      this.$confirmAlert("确认删除该信件？").then(()=>{
         LetterModel.deleteMyLetter({id:this.letter_id}).then(res=>{
            this.$alert().success(res.message)
            this.$router.replace("/other/letter/list")
         })
      }).catch(()=>{
        this.$alert("取消删除")
      })
    }


  }
}
</script>

<style scoped="scoped">
.letter_info_page{
  width: 100%;
}
.top_box{
    width: 100%;
}
.top_img{
    width: 100%;
    height: 2rem;
}
.detail_box{
    padding: 0.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.title{
   font-size: 0.4rem;
    font-weight: bold;
    padding: 0.2rem 0;
    border-bottom: 0.02rem dashed #383838;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
}
.detail_box>.image_box{
    padding: 0.4rem 0;
}
.userInfo_row{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.24rem;
    color: #383838;
    padding: 0.2rem 0;
    width: 100%;
    box-sizing: border-box;

}
.userInfo_row>div{
  font-size: 0.24rem;
}
.userInfo_row>.type_block{
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
}
.userInfo_row>.type_block>.type_tag{
    border: 1px solid #ff4d4f;
    background: #ffeded;
    color: #ff4d4f;
    padding: 0.02rem 0.08rem;
    font-size: 0.24rem;
}
.user_name{
  
    padding-right: 0.4rem;
}
.sub_box{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0.4rem;
}
.sub_box_in{
    position: relative;
}
.sub_title{
    display: inline;
    font-size: 0.4rem;
    font-weight: bold;
    padding: 0 0.3rem;
}
.line{
    height: 0.2rem;
    width: auto;
    background: #FFC107;
    border-radius: 0.1rem;
    position: relative;
    top: -0.16rem;
    z-index: -1;
}


.letter_content{
    padding: 0.3rem 0;
    text-indent: 0.56rem;
}

.end_row{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.8rem 0;
}
.end_row>.end_line{
    width: 2rem;
    height: 0.02rem;
    background: #c2c2c2;
}
.end_row>div:nth-child(2){
    color:#c2c2c2 ;
    padding: 0 0.4rem;
}
/* .userInfo_row>.user_avatar{
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
} */
.post_time{
    background: #10DFAB;
    padding: 0.15rem 0.6rem;
    border-radius: 0.1rem;
    font-weight: bold;
    color: #FFFFFF;
}
</style>