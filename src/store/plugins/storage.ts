import { Plugin } from 'vuex'
import { State } from '../state'
import { storage } from '../../utils'
import { PAGE } from '../mutation-types'

const storagePlugin: Plugin<State> = store => {
  // store ready

  // initial state from storage
  store.replaceState({
    session: storage.get('session') ?? {},
    page: storage.get('page') ?? {},
  })

  // subscribe to store changes
  store.subscribe((mutation, state) => {
    // any mutation.
    //{ type, payload }
    switch (mutation.type) {
      case PAGE:
        //set page settings as an object with shorthand
        storage.set('demo_count', state.page)
        break
    }
  })
}

export default storagePlugin
