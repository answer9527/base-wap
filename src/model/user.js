import {Http} from "../utils/http"
class UserModel{

  // 小程序的一键注册登录
  static async reigsterAndLogin(data){
    return await Http.request({
      url:"/user/registerToken",
      data:data,
      method:"post"
    })
  }

  // 微信小程序的登录
  // static async login(data){
  //   return await Http.request({
  //     url:"/user/codeLogin?code="+data.code
  //   })
  // }

  // 普通的密码登录
  static async login(data){
    return await Http.request({
      url:"/user/pwdToken",
      data,
      method:"post"
    })
  }

  // 普通的账号密码注册
  static async register(data){
    return await Http.request({
      url:"/user/register",
      data,
      method:"post"
    })
  }

  // 更新个人资料
  static async updateMyInfo(data){
    return await Http.request({
      url:"/user/update/self",
      data,
      method:"post"
    })
  }
}
export{
  UserModel
}