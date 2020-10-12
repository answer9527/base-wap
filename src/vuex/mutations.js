const mutations ={
    // 设置最新的一条classic
    SET_LATEST(state,latest){
        state.latest = latest
        sessionStorage.setItem("latest",latest)
    },
    // 加首页classic的浮标
    ADD_CLASSIC_FLAG(state){
        state.classic_flag = state.classic_flag +1
        // sessionStorage.setItem("latest",latest)
    },
    // 减首页classic的浮标
    REDUCE_CLASSIC_FLAG(state){
        state.classic_flag = state.classic_flag -1
    },
    // 追加classic
    PUSH_CLASSIC(state,classic){
        let [...temp] = state.classic_list
        temp.push(classic)
        state.classic_list = temp
    },
    // 更新classic_list列表中的某一条数据    
    UPDATE_CLASSIC(state,classic){
        state.classic_list[state.classic_flag] = classic
    },
    // 登录后重置classic相关配置
    RESET_CLASSIC_ABOUT(state){
        state.classic_list=[]
        state.latest=0
        sessionStorage.removeItem("latest")
        state.classic_flag=-1
    },
    // 缓存token
    SET_TOKEN(state,token){
        state.token = token
        sessionStorage.setItem("token",token)
    },
    // 缓存uid
    SET_UID(state,uid){
        state.uid = uid
        sessionStorage.setItem("uid",uid)
    },
    SET_USERINFO(state,userInfo){
        state.userInfo = userInfo
        sessionStorage.setItem("userInfo",JSON.stringify(userInfo))
    },
    // 清除uid和清除token
    DEL_TOKEN_USERINFO(state){
        state.token = ""
        state.uid = 0
        state.userInfo={}
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("uid")
        sessionStorage.removeItem("userInfo")
    },

    // 缓存正在播放的音乐链接
    SET_PLAYING_AUDIO(state,playingAudio){
        state.playingAudio = playingAudio
        // sessionStorage.setItem("playingAudio",playingAudio)
    },
    // 更新播放器的播放状态
    SET_PLAYER_STATUS(state,status){
        state.playerStatus = status
    }

}
export{
    mutations 
}