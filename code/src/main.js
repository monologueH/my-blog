// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './css/Tangerine.css'
import Sjld from './components/sjld/index.js'
import _ from 'lodash'
import 'marked'
import Axios from 'axios'
import {request} from "./utils/request";
import base from './utils/base'
import App from './App'


Vue.use(ElementUI,{size:'medium'})
Vue.use(Sjld)
Vue.use(base)
Vue.prototype.$axios = Axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
