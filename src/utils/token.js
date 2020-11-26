import {UserModel} from "../model/user"
import store  from "../vuex/store"
class Token{
    static async getToken(){
        let params = {
            "loginType":1,
            "account":"516994147@qq.com",
            "password":"q123456"
        }
        let res = await UserModel.login(params) 

        store.commit('SET_TOKEN',res.data.token)
        return res
    }
}
export{
    Token
}