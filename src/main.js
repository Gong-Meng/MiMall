import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api' // 此处采用接口代理
axios.defaults.timeout = 8000
/**
 * 接口错误拦截
 */
axios.interceptors.response.use((response) => {
  let res = response.data
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})

Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
