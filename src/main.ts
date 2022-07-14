import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './components/index';
import './plugins/tailwind/index';
import './plugins/buefy';
import './plugins/fontawesome';
import i18n from './plugins/i18n';
import './plugins/vee-validate';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
