<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px'
export default {
  name: 'App'
}
</script>

<style>
*{
  font-size: 0.28rem;
  padding: 0;
  margin: 0;
}
#app{
  height: 100%;
}
</style>
