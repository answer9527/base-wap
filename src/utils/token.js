import {UserModel} from "../model/user"
import store  from "../vuex/store"
import {Http} from "./http"
class Token{
    static async getToken(){

        let params = JSON.parse(sessionStorage.getItem("loginParams"))
        let res = await UserModel.login(params) 

        store.commit('SET_TOKEN',res.data.token)
        store.commit('SET_USERINFO',res.data.userInfo)
        store.commit('SET_UID',res.data.uid)
        return res
    }
    static async _againRequest(url,data,method){
        if(data){
            data = JSON.parse(data)
        }else{
            data = {}
        }
        return await Http.request({
            url,data,method
        })
    }
}
export{
    Token
}