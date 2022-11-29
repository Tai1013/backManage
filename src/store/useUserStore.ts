import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

const EXPIRE_TIME_OUT = 3 * 60 * 60 * 1000

export const useUserStore = defineStore('userStore',
  () => {
    const apiToken = ref<number | undefined>(undefined)
    const expireTime = ref<number | undefined>(undefined)

    watch(() => apiToken.value, () => {
      expireTime.value = apiToken.value ? apiToken.value + EXPIRE_TIME_OUT : undefined
    })

    return {
      apiToken,
      expireTime
    }
  },
  {
    persistedState: {
      // excludePaths: ['isDemo']
    }
  }
)