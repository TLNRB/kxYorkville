import { defineStore } from 'pinia'

export const useStoreClasses = defineStore('storeClasses', {
  state: () => ({}),

  actions: {
    getClasses() {
      console.log('getClasses')
    }
  }
})
