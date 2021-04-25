import Vue from 'vue'
import Vuex from 'vuex'
import date from './date'
import rout from './rout'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        date,
        rout
    }
})

export default store