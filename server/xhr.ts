import axios, { AxiosRequestConfig, Method } from 'axios'

export interface XhrOption extends AxiosRequestConfig {
  url: string
  methods: Method
}

const XHR_TIME_OUT = 3000

export const xhr = async ({
  headers,
  url,
  data,
  method,
  timeout = XHR_TIME_OUT
}: XhrOption) => {
  const options: AxiosRequestConfig = {
    headers: {},
    url: '/api/' + url,
    method,
    data,
    timeout
  }

  if (headers != undefined) {
    options.headers = { ...options.headers, ...headers }
  }

  const response = axios(options)
    .then(res => {
      return res.data
    })
    .catch(err => {
      return Promise.reject(err)
    })

  return response
}