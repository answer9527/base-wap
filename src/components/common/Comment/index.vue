<template>
  <div>
      <input type="text" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
    name:"CommentBox",
    props:{
        placeholder:{
            type:String
        }
    }
}
</script>

<style>

</style>