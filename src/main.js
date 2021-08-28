import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import router from './router'

import VueConfirmDialog from 'vue-confirm-dialog'
import './registerServiceWorker'


Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
