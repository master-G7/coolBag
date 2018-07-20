import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
import bookinginfo from './bookinginfo'
export default new vuex.Store({
    modules: {
        bookinginfo: bookinginfo
    }
})