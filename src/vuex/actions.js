const set_latest = ({commit},latest)=>{
    commit("SET_LATEST",latest)
}
const add_classic_flag = ({commit})=>{
    commit("ADD_CLASSIC_FLAG")
}
const reduce_classic_flag = ({commit})=>{
    commit("REDUCE_CLASSIC_FLAG")
}
const push_classic = ({commit},classic)=>{
    commit("PUSH_CLASSIC",classic)
}
// 更新classic  暂未使用到
const update_classic = ({commit},classic)=>{
    commit('UPDATE_CLASSIC',classic)
}
const set_token = ({commit},token)=>{
    commit('SET_TOKEN',token)
}
const set_uid = ({commit},uid)=>{
    commit('SET_UID',uid)
}
const set_userinfo = ({commit},userInfo)=>{
    commit('SET_USERINFO',userInfo)
}
// 删除token和用户信息
const del_token_userinfo=({commit})=>{
    commit('DEL_TOKEN_USERINFO')
}

// 更新正在播放的音乐链接
const set_playing_audio=({commit},playingAudio)=>{
    commit("SET_PLAYING_AUDIO",playingAudio)
}

// 更新播放器的播放状态
const set_player_status = ({commit},status)=>{
    commit("SET_PLAYER_STATUS",status)
}





export{
    set_latest,
    add_classic_flag,
    reduce_classic_flag,
    push_classic,
    update_classic,
    set_token,
    set_uid,
    set_userinfo,
    del_token_userinfo,
    set_playing_audio,
    set_player_status
}