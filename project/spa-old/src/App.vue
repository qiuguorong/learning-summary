<template>
  <div id="app">
    <div id="test">123</div>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
// import { Toast } from 'bxs-ui-vue'
export default {
  name: 'App',
  mounted () {
    // Toast('123')
    // document.getElementById('test').innerText = '000'
    // Promise.resolve().then(() => {
    //   alert('111')
    //   console.log('resolve')
    // })
    // setTimeout(() => {
    //   alert('222')
    //   console.log('setTimeout')
    // }, 0)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
