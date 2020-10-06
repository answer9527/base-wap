import config from "../config/config"
import axios from "axios"
axios.defaults.baseURL=config.base_url
class Http{
    static async request({url,data={},method="GET"}){
        if(method=="POST"){
            let res = await axios.post(url,data)
            return res.data
        }else{
            let res = await axios.get(url,{params:data})
            return res.data
        }
    }
}
export{
    Http
}