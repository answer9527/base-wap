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
const set_token = ({commit},token)=>{
    commit('SET_TOKEN',token)
}


export{
    set_latest,
    add_classic_flag,
    reduce_classic_flag,
    push_classic,
    set_token
}