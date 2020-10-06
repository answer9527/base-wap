<template>
  <div>
      <div class="version_list">
          <v-versionOne 
            v-for="(item,index) in version_list" 
            :createTime="item.createTime" 
            :release="item.release"
            :intro="item.intro"
            :key="index"/>
      </div>
  </div>
</template>

<script>
import VersionOne from "@/components/version/listOne"
import {VersionModel} from "@/model/version"
export default {
    name:"version",
    data(){
        return{
            version_list:[]
        }
    },
    components:{
        "v-versionOne":VersionOne
    },
    created(){
        this.get_version_list()
    },
    methods:{
        get_version_list(){
            VersionModel.getVersionList().then(res=>{
                this.version_list = res.data
            })
        }
    }
}
</script>

<style scoped="scoped">
.version_list{
    padding: 0.4rem 0.4rem 0.4rem 0.5rem;
}

</style>