import {ClassicModel} from "@/model/classic"
export const home_mixins = {
    data(){
        return{
           
            size:10,
            page:1,
            classic_list:[]
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
                this.classic_list = this.classic_list.concat(temp)
            })
        }
    }
}