import Vue from 'vue'
import Vuex from 'vuex'
import date from './date'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        date
    }
})

export default store