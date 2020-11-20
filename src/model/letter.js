import {Http} from "../utils/http"
class LetterModel{
   static async getMyLetter(){
        return await Http.request({
            url:"/letter/myletter"
        })
    }
    static async insertLetter(data){
        return await Http.request({
            url:"/letter/insert",
            data,
            method:"POST"
        })
    }
    static async getMyLetterList(data){
        return await Http.request({
            url:"/letter/myletter/list",
            data,
            method:"POST"
        })
    }
}
export {
    LetterModel
}