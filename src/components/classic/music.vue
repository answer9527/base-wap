<template>
  <div>
      <div class="classic_image_out">
          <div :style="{'backgroundImage':'url('+image+')','backgroundPosition':'center','backgroundSize':'contain'}" :class="[{'roll':playing},'classic_image','flex-x','flex-x-center','flex-y-center']">
              
          </div>
          <div :class="[playing?'playing':'pause','music_btn']" @click="playOrPause"></div>
      </div>
      <div class="classic_icon"></div>
      <div class="classic_intro">{{intro}}</div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
    name:"music",
    data(){
        return{
            watchFlag:false
        }
    },
    computed:{
        ...mapState(["playingAudio","player","playerStatus"]),
        playing:{
            get(){
                if(this.playerStatus){
                    return this.playingAudio == this.url
                }else{
                    return false 
                }
            },
            set(){

            }

        }
    },
    props:{
        image:{
            type:String
        },
        url:{
            type:String
        },
        intro:{
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
               if(this.player.src != this.url){
                   this.player.src = this.url
                   this.set_playing_audio(this.url)
               }
               this.set_player_status(true)
               this.player.play()   
            }
        }
    }
}
</script>

<style scoped="scoped">
.classic_image_out{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.6rem 0;
}
.classic_image{
    width: 4.2rem;
    height: 4.2rem;
    border-radius: 50%;
    margin: 0 auto;
}
.music_btn{
    position: absolute;
}
.classic_icon{
    width: 0.46rem;
    height: 1.28rem;
    background: url(../../assets/images/music@tag.png);
    background-position: center;
    background-size: contain;
    position: relative;
    left: 0.5rem;

}
.playing{
    width: 1.2rem;
    height: 1.2rem;
    background: url(../../assets/images/playingSrc.png);
    background-position: center;
    background-size: contain;
}
.pause{
    width: 1.2rem;
    height: 1.2rem;
    background: url(../../assets/images/pauseSrc.png);
    background-position: center;
    background-size: contain;
}

  .roll{
    animation: myAnimation 6s;	
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

  .classic_intro{
      text-align: center;
      font-size: 0.36rem;
      max-width: 5.5rem;
      margin: 0 auto;
      padding: 0.6rem 0;
  }
</style>