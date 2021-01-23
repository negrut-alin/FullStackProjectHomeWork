import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap

import BootstrapValue from 'bootstrap-vue/dist/bootstrap-vue-icons.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false

Vue.use(BootstrapValue);

new Vue({
  router, // Enable Routers
  render: h => h(App),
}).$mount('#app')
