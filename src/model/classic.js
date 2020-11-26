import {Http} from "../utils/http"

class ClassicModel{
  // 获取上一篇或下一篇推荐
  static async getClassicRecommend(index,nextOrPre){
    let str = nextOrPre=="next"?"/next":"/previous";
    let res = await Http.request({
      url:"/classic/"+index+str
    })


    return res;
  }

  // 获取最新的推荐
  static async getLatest(){
    return await Http.request({
      url:"/classic/latest"
    })
  }

  // 判断是不是最新的一个
  static isLatest(id){
    let latest_id = sessionStorage.getItem('latest')
    return latest_id==id?true:false
  }

  // 点击喜欢或取消喜欢
  static async likeIt(behavior,cid){
    return await Http.request({
        url:"/classic/"+behavior+"/"+cid
    })
  }

  // 根据type获取classic列表
  static async getByListType(data){
    return await Http.request({
      url:"/classic/getByType",
      data,
      method:"post"
    })
  }

  // 根据classic获取详情
  static async getDetailById(id){
    return await Http.request({
      url:"/classic/detail/"+id
    })
  }

  // 获取的我喜欢的classic列表
  static async getMyLikeList(data){
    return await Http.request({
      url:"/classic/getMyLike",
      data,
      method:"post"
    })
  }
}
export{
  ClassicModel
}