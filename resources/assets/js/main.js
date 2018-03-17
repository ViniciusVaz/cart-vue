import Vue from 'vue'

import App from './components/app.vue'
import store from './vuex/store'

import growl from 'growl-alert'
import 'growl-alert/dist/growl-alert.css'

growl.defaults.fadeAway = true
growl.defaults.fadeAwayTimeout = 3000
growl.defaults.closeOnClick = true

new Vue({
    store,
    ...App
}).$mount('#app')
