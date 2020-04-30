import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
import router from './router/index'
import VueSocketIO from 'vue-socket.io';

Vue.use(ElementUI);
Vue.use(new VueSocketIO({ 
  debug: true,
  connection: 'http://127.0.0.1:5000/'  // 这里连接还不知道填啥
 }));

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
