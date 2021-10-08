import Vuex from 'vuex'
import Vue from 'vue'
import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'

Vue.use(Vuex)

const state = {
    token: localStorage.getItem('token') || null,
    usuario: {}
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})