import {ClassicModel} from "@/model/classic"
export const home_mixins = {
    data(){
        return{
           
            size:10,
            page:1,
            classic_list:[],
            hasNextPage:false
        }
    },
    created(){
        this.get_classic_by_type()
    },
    methods:{
        get_classic_by_type(){
            let params  = {
                "key":this.key,
                "page":this.page,
                "size":this.size
            }
            ClassicModel.getByListType(params).then(res=>{
                let temp = res.data.list
                this.hasNextPage = res.data.hasNextPage
                this.classic_list = this.classic_list.concat(temp)
            })
        },
        get_more_list(){
            if(this.hasNextPage){
                this.page++
                this.get_classic_by_type()
            }else{
                this.$alert().warning("暂无更多！")
            }
        }
    }
}