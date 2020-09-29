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

const del_token_userinfo=({commit})=>{
    commit('DEL_TOKEN_USERINFO')
}


export{
    set_latest,
    add_classic_flag,
    reduce_classic_flag,
    push_classic,
    update_classic,
    set_token,
    set_uid,
    del_token_userinfo
}