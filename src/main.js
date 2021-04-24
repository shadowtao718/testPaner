import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import Clipboard from 'clipboard';

Vue.use(Antd)


Vue.config.productionTip = false
Vue.prototype.Clipboard = Clipboard;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
