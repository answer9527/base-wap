<template>
  <div class="classic_detail">
      <div class="first_row flex-x flex-x-between">
          <div class="first_left">
              <div class="detail_title">{{title}}</div>
              <div class="detail_author"> —— {{author||'未知'}}</div>
          </div>
          <div :class="['first_right',{'roll':playing}]" @click="playOrPause"></div>
      </div>
      <div class="detail_intro">
          <div class="intro_left_box">
              <img src="../../../assets/images/intro_left.png" alt="" class="intro_left">
          </div>
          <div class="intro_txt">{{intro}}</div>
          <div class="intro_right_box">
              <img src="../../../assets/images/intro_right.png" alt="" class="intro_right">
          </div>
      </div>
      <div class="detail_content">
          <div v-html="content"></div>
      </div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
    name:"classicDetail",
    data(){
        return{
            
        }
    },
    computed:{
        ...mapState(["playingAudio","player","playerStatus"]),
        playing:{
            get(){
                if(this.playerStatus){
                    return this.playingAudio == this.src
                }else{
                    return false 
                }
            },
            set(){

            }
        }
    },
    props:{
        title:{
            type:String
        },
        intro:{
            type:String
        },
        author:{
            type:String
        },
        content:{
            type:String
        },
        src:{
           type:String 
        }
    },
    methods:{
        ...mapActions(['set_playing_audio','set_player_status']),
        playOrPause(){
            if(this.playing){
                this.set_player_status(false)
                this.player.pause()
            }else{
               if(this.player.src != this.src){
                   this.player.src = this.src
                   this.set_playing_audio(this.src)
               }
               this.set_player_status(true)
               this.player.play()   
            }
        }
    }
}
</script>

<style scoped="scoped">

.first_left{
    flex: 1;
}
.first_right{
    width: 0.8rem;
    height: 0.8rem;
    background: url(../../../assets/images/music_icon.png) no-repeat;
    background-position: center;
    background-size: contain;
}
.first_left>.detail_title{
    width: 100%;
    font-size: 0.4rem;
    font-weight: bold;
    text-align: center;
}
.first_left>.detail_author{
  text-align: right;
  padding:0.1rem 1.8rem 0.1rem 0;
  box-sizing: border-box;
  font-size: 0.28rem;
}
.detail_intro{
    padding: 0.5rem 0 0.2rem 0;
    border-top: 1px solid #cccccc;
    display: flex;
    flex-direction:row;
    justify-content: center;
}

.intro_left_box{
 position: relative;
}
.intro_left{
  width: 0.4rem;
  height: 0.4rem;
  position: relative;
  top: -0.2rem;
}
.intro_txt{
  padding: 0 0.8rem;
  box-sizing: border-box;
  text-align: center;
}
.intro_right_box{
  position: relative;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
  
}
.intro_right{
  width: 0.4rem;
  height:0.4rem;
  position: relative;
  bottom: -0.1rem;
}
.roll{
  animation: myAnimation 2s;	
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes myAnimation{
  form {
          transform: rotate(0deg);
      }
  to {
                  transform: rotate(360deg);
      }

}
</style>