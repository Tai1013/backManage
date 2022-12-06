import type { UsersData } from '@/server/config'
import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { $t } from '@/i18n'
import { useMessage } from '@/common'

const EXPIRE_TIME_OUT = 3 * 60 * 60 * 1000
const { $message } = useMessage()

export const useUserStore = defineStore('userStore',
  () => {
    const role = ref<number | undefined>(undefined)
    const auth = ref<number[] | undefined>(undefined)
    const apiToken = ref<number | undefined>(undefined)
    const expireTime = ref<number | undefined>(undefined)

    watch(() => apiToken.value, () => {
      expireTime.value = apiToken.value ? apiToken.value + EXPIRE_TIME_OUT : undefined
    })

    const getTokenState = () => {
      const nowDate = new Date()
      const resultData = (state: boolean, message = '') => {
        if (message !== '') $message.error(message)
        if (state === false) apiToken.value = undefined
        return {
          state,
          message
        }
      }

      if (apiToken.value === undefined || expireTime.value === undefined) return resultData(false)
      if (nowDate.getTime() >= expireTime.value) return resultData(false, $t('message.登入逾時'))
      if (apiToken.value >= expireTime.value) return resultData(false, $t('message.登入逾時'))

      return resultData(true)
    }

    const updateToken = () => {
      const nowDate = new Date()
      apiToken.value = nowDate.getTime()
    }

    const saveUserProfile = (userProfile: UsersData) => {
      role.value = userProfile.role
      auth.value = userProfile.auth
    }

    const clear = () => {
      window.localStorage.removeItem('userStore')
    }

    return {
      role,
      auth,
      apiToken,
      expireTime,
      getTokenState,
      updateToken,
      saveUserProfile,
      clear
    }
  },
  {
    persistedState: {
      // excludePaths: ['isDemo']
    }
  }
)