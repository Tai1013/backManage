<template lang="pug">
.login
  h1.login-title {{ title }}
  .login-form
    mrc-form(
      :form="form"
      :fields="fields"
      :formButton="formButton"
      :loading="isLoading"
      size="large"
      @submit="submitHandler"
    )
      el-form-item
        el-checkbox(v-model="isRemember" :label="$t('記住我的帳號')")
.demo-switch
  el-switch(v-model="configStore.isFormal" :inactiveText="$t('演示')" :activeText="$t('正式')")
</template>

<script setup lang="ts">
import type { FormButton } from '@/modules/mrc-form/define'
import { ref, reactive, computed } from 'vue'
import { ElFormItem, ElCheckbox, ElSwitch } from 'element-plus'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLoading, useMessage } from '@/common'
import { useConfigStore } from '@/store'
import { defineFields } from '@/modules/mrc-form/define'
import { required } from '@/validate'
import { getLogin } from '&/authServer'

interface LoginForm {
  account: string
  password: string
}

const { t } = useI18n()
const { load, unload, isLoading } = useLoading()
const { $message } = useMessage()
const router = useRouter()
const configStore = useConfigStore()

const localRemember = {
  state: window.localStorage.getItem('isRemember') === 'true',
  account: window.localStorage.getItem('account') ?? ''
}
const title = import.meta.env.VITE_APP_TITLE
const formButton = ref<FormButton[]>(['submit'])
const isRemember = ref(localRemember.state)
const form = reactive<LoginForm>({
  account: localRemember.state ? localRemember.account : '',
  password: ''
})

const fields = computed(() => defineFields([
  {
    prop: 'account',
    label: t('帳號'),
    rules: [
      required
    ]
  },
  {
    prop: 'password',
    type: 'password',
    label: t('密碼'),
    rules: [
      required
    ]
  }
]))

const setLocalRemember = () => {
  if (isRemember.value) {
    window.localStorage.setItem('isRemember', isRemember.value.toString())
    window.localStorage.setItem('account', form.account)
  } else {
    window.localStorage.removeItem('isRemember')
    window.localStorage.removeItem('account')
  }
}

const submitHandler = async () => {
  load()
  const result = await getLogin(form)
  unload()
  if (result) {
    setLocalRemember()
    $message.success(t('message.登入成功'))
    router.push('/')
  }
}
</script>

<style scoped lang="scss">
@import './style.scss'
</style>