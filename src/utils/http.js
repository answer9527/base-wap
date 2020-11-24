import config from "../config/config"
import axios from "axios"
axios.defaults.baseURL=config.base_url
axios.defaults.timeout = 3000
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

    static async upload(url,file){
        const data = new FormData();
        data.append('file', file);
        let res = await axios.post(url,data,{
            headers: {
            'Content-Type': 'multipart/form-data',
            }
        })
        return res.data
    }
}
export{
    Http
}