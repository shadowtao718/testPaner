export default {
    addSyc({ commit }, acount) {
        setTimeout(() => {
            commit('ROUT_LIST_DEV', acount)
        }, 1000)

    }
}