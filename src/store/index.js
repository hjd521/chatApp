/**
 * Created by 侯建东 on 2018/6/22.
 */
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import mutations from './mutations'
const state = {
  position: '杭州',
  userName: '',
}
export default new Vuex.Store({
  state,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})