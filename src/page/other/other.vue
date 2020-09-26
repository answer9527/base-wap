<template>
  <div>
      <div>other</div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:"OtherPage",
    data(){
        return{

        }
    },
    created(){
         const alert = this.$alert({
          title: "测试",
          message: "请求登录!",
          duration: 3000
        });
        // alert.show();

    },
    methods:{

    }
    
}
</script>

<style>

</style>