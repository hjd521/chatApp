<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Header,Toast,Cell,Picker,Actionsheet,Popup ,Loadmore } from 'mint-ui'
  Vue.component(Cell.name, Cell)
  Vue.component(Picker.name, Picker)
  Vue.component(Actionsheet.name, Actionsheet);
  Vue.component(Popup.name, Popup);
  Vue.component(Loadmore.name, Loadmore);
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
