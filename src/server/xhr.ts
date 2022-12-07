import { reactive } from 'vue'
import axios, { AxiosRequestConfig, Method, AxiosResponse } from 'axios'
import { useConfigStore, useUserStore } from '@/store'
import { configMode } from './config'

export interface XhrOption extends AxiosRequestConfig {
  url: string
  method: Method
}

interface DemoCache {
  state: boolean
  data: AxiosResponse | undefined
}

const XHR_TIME_OUT = 3000
const CACHE_DEMO_TIME = 5000
const configStore = useConfigStore()
const userStore = useUserStore()

const demoCache = reactive<DemoCache>({
  state: false,
  data: undefined
})

const getDemoCache = (res: AxiosResponse) => {
  if (demoCache.state === false) {
    setTimeout(() => {
      demoCache.state = false
    }, CACHE_DEMO_TIME)
  }
  demoCache.data = res
  demoCache.state = true
}

export const xhr = async ({
  headers,
  url,
  data,
  method,
  timeout = XHR_TIME_OUT
}: XhrOption) => {
  userStore.updateToken()
  const [formal, demo] = configMode[url]
  const options: AxiosRequestConfig = {
    headers: {},
    url: configStore.isFormal ? '/api/' + formal : demo,
    method: configStore.isFormal ? method : 'GET',
    data,
    timeout
  }

  if (headers != undefined) {
    options.headers = { ...options.headers, ...headers }
  }

  if (!!demoCache.data && demoCache.state) {
    return demoCache.data.data[formal]
  }

  const response = axios(options)
    .then(res => {
      if (configStore.isFormal === false) getDemoCache(res)
      return configStore.isFormal ? res.data : res.data[formal]
    })
    .catch(err => {
      return Promise.reject(err)
    })

  return response
}