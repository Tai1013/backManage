import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useConfigStore = defineStore('configStore',
  () => {
    const isFormal = ref(false)
    const timezone = ref<string | undefined>(undefined)

    return {
      isFormal,
      timezone
    }
  },
  {
    persistedState: {
      // excludePaths: ['isDemo']
    }
  }
)