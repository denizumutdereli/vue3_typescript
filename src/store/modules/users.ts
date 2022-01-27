import { Module } from 'vuex'
import { State } from '../state'

interface UserState {
  count: number
}

const mod: Module<UserState, State> = { //a better interface management for further with including abstraction. This is for demo purpose
  namespaced: true,
  state: {
    count: 0
  },
  getters: {},
  mutations: {},
  actions: {}
}

export default mod
