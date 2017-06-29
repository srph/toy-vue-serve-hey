// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.debug = true;
Vue.config.devtools = true;
Vue.config.productionTip = false

import 'normalize.css';
import 'hint.css';

import Autosize from 'vue-autosize';
Vue.use(Autosize);

import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
Vue.component('icon', Icon);

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
