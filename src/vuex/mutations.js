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
    // 新增classic
    PUSH_CLASSIC(state,classic){
        let [...temp] = state.classic_list
        temp.push(classic)
        state.classic_list = temp
    },
    // 
    SET_TOKEN(state,token){
        state.token = token
        sessionStorage.setItem("token",token)
    }
}
export{
    mutations 
}