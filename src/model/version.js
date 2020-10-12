import {Http} from "../utils/http"
class VersionModel{
    static async getVersionList(){
        return await Http.request({
            url:"/version/list"
        })
    }
    static async getLatestVersion(){
        return await Http.request({
            url:"/version/latest",
            method:"POST"
        })
    }
}
export {
    VersionModel
}