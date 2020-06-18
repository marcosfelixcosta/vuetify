// Vue
import Vue from 'vue'
import Vuex from 'vuex'
import pathify from '@/plugins/vuex-pathify'
import pwa from '@/plugins/pwa'

// Modules
import * as modules from './modules'

Vue.use(Vuex)

export function createStore () {
  const store = new Vuex.Store({
    modules,
    plugins: [
      pathify.plugin,
      pwa,
    ],
  })

  store.dispatch('app/init')

  return store
}

export const ROOT_DISPATCH = Object.freeze({ root: true })