import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CoreuiVue from '@coreui/vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.use(BootstrapVue)
Vue.use(CoreuiVue);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
