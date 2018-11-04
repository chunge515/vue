import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from '@/locale'
import { HTTP } from './util/axios'
import '@/assets/js/rem.js'
import store from './store'
import '@/assets/style/base.css'
import LyTab from 'ly-tab'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

Vue.config.productionTip = false

Vue.use({
    i18n: (key, value) => i18n.t(key, value)
})
Vue.use(LyTab)

Vue.use(Vant)

Vue.prototype.$Swiper = Swiper;

Vue.prototype.$http = HTTP

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    i18n,
    router,
    render: h => h(App)
})
