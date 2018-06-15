// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fetch from './config/fetch.js'
import { Header, Button,Field } from 'mint-ui';
Vue.component(Button.name, Button)
Vue.component(Header.name, Header);
Vue.component(Field.name, Field);
Vue.prototype.$http = fetch
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
