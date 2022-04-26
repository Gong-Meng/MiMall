import Vue from 'vue'
import axios from 'axios'
import router from './router'
import env from './env'
import App from './App.vue'

// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api' // 此处采用接口代理
axios.defaults.timeout = 8000

// 根据环境变量获取不同的请求地址
axios.defaults.baseURL = env.baseURL
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
