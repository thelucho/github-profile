import Vue from 'vue'
import Vuex from 'vuex'
import { API } from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userData: '',
        userRepos: {},
        errorMsg: false
    },
    getters: {
        getUser(state) {
            return state.userData
        },
        getUserRepos(state) {
            return state.userRepos
        },
        getErrorMsg(state) {
            return state.errorMsg
        }
    },
    mutations: {
        setUser(state, response) {
            state.userData = response
            state.errorMsg = false
        },
        setUserRepos(state, response) {
            state.userRepos = response
        },
        clearData(state) {
            state.userRepos = {},
                state.userRepos = {}
        },
        setErrorMsg(state) {
            state.errorMsg = true
        }
    },
    actions: {
        getUser(context, user) {
            API.get(`/${user}`)
                .then((response) => {
                    console.log("USER: ", response.data);
                    context.commit('clearData')
                    context.commit('setUser', response.data)
                })
                .catch((e) => {
                    console.log(e);
                    context.commit('clearData')
                    context.commit('setErrorMsg')
                })
        },

        getUserRepos(context, user) {
            API.get(`/${user}/repos`)
                .then((response) => {
                    console.log("REPOS: ", response.data);
                    context.commit('setUserRepos', response.data)
                })
                .catch((e) => {
                    console.log(e);
                })
        }
    }
})

