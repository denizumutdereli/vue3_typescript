import { createStore } from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'
import plugins from './plugins'

const strict =  process.env.DEV

const store = createStore({ state, getters, mutations, actions, modules, plugins, strict })

export type { State } from './state'

export default store
