<template lang="pug">
.login
  h1.login-title {{ title }}
  .login-form
    mrc-form(
      :form="form"
      :fields="fields"
      :formButton="formButton"
      size="large"
    )
      el-form-item
        el-checkbox(v-model="isRemember" :label="$t('記住我的帳號')")
</template>

<script setup lang="ts">
import type { FormButton } from '@/modules/mrc-form/define'
import { ref, reactive, computed } from 'vue'
import { ElFormItem, ElCheckbox } from 'element-plus'
import { useI18n } from 'vue-i18n'
import { defineFields } from '@/modules/mrc-form/define'
import { required } from '@/common/useValidate'

interface LoginForm {
  account: string
  password: string
}

const { t } = useI18n()

const title = import.meta.env.VITE_APP_TITLE
const formButton = ref<FormButton[]>(['submit'])
const isRemember = ref(false)
const form = reactive<LoginForm>({
  account: '',
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
</script>

<style scoped lang="scss">
@import './style.scss'
</style>