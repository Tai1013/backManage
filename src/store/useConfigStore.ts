import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useConfigStore = defineStore('configStore',
  () => {
    const isFormal = ref(false)

    return {
      isFormal
    }
  },
  {
    persistedState: {
      // excludePaths: ['isDemo']
    }
  }
)