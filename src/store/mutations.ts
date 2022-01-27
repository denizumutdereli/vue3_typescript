import { MutationTree } from 'vuex'
import { State } from './state'
import { PAGE } from './mutation-types'

const mutations: MutationTree<State> = {
  PAGE: state => {
    state.page = {
      //let all changes here
    }
  },
   
}

export default mutations
