import Vue from 'vue';
import '@/plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@/plugins/permission';
import router from '@/router';
import store from '@/store';
import i18n from './locales';
import App from './App.vue';
import { loadLanguage } from './plugins/local-storage';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

i18n.locale = loadLanguage().locale;

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
