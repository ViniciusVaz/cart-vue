import { TOGGLE } from '../mutation-types.js'

export default {
    state: {
        toogle: false
    },
    mutations: {
        [TOGGLE] (state, type) {
            state.toogle = !state.toogle
        }
    },
    actions: {
        toogle ({commit}) {
            commit(TOGGLE)
        }
    },
    getters: {
        toogle: state => state.toogle
    }
}