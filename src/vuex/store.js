import Vue from "vue"
import Vuex from "vuex"
import * as actions from "./actions"
import * as getters from "./getters"
import {mutations} from "./mutations"

Vue.use(Vuex)

const state = {
    token:"",
    userInfo:{},
    uid:0,
    latest:0,
    classic_flag:-1,
    classic_list:[],
    // 播放器
    player:new Audio(),
    // 播放器的播放状态
    playerStatus:false,
    // 播放的歌曲链接
    playingAudio:""
}
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})