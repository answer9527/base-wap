const mutations ={
    SET_LATEST(state,latest){
        state.latest = latest
        sessionStorage.setItem("latest",latest)
    },
    ADD_CLASSIC_FLAG(state){
        state.classic_flag = state.classic_flag +1
        // sessionStorage.setItem("latest",latest)
    },
    REDUCE_CLASSIC_FLAG(state){
        state.classic_flag = state.classic_flag -1
    },
    PUSH_CLASSIC(state,classic){
        let [...temp] = state.classic_list
        temp.push(classic)
        state.classic_list = temp
    }
}
export{
    mutations 
}