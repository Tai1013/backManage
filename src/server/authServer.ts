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
        userStore.saveUserProfile(result)
        return true
      }

      return Promise.reject($t('message.帳號或密碼錯誤'))
    })
    .catch(err => {
      $message.error(err.message ?? err)
      return false
    })
}