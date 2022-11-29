import type { UsersData } from './config'
import { xhr } from './xhr'
import { $t } from '@/i18n'
import { useMessage } from '../common/useMessage'
import { useUserStore } from '@/store'

interface LoginBody {
  account: string
  password: string
}

const { $message } = useMessage()
const userStore = useUserStore()

export const getLogin = async (body: LoginBody) => {
  const url = 'login'
  const data = {
    account: body.account,
    password: body.password.encrypt()
  }

  return await xhr({
    method: 'GET',
    url
  })
    .then((res: UsersData[]) => {
      const result = res.find(user => user.account === data.account && user.password === data.password)
      if (result) {
        userStore.apiToken = (new Date()).getTime()
        return true
      }

      return Promise.reject($t('error.帳號或密碼錯誤'))
    })
    .catch(err => {
      $message.error(err.message ?? err)
      return false
    })
}

export const getToken = () => {
  const nowDate = new Date()
  const resultData = (state: boolean, message: string) => {
    if (state === false) $message.error(message)
    return {
      state,
      message
    }
  }

  if (userStore.apiToken === undefined || userStore.expireTime === undefined) return resultData(false, $t('error.尚未登入'))
  if (nowDate.getTime() >= userStore.expireTime) return resultData(false, $t('error.登入逾時'))
  if (userStore.apiToken >= userStore.expireTime) return resultData(false, $t('error.登入逾時'))

  return resultData(true, '')
}