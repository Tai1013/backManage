<template lang="pug">
el-form(
  ref="formRef"
  v-bind="$attrs"
  :model="form"
  :label-position="labelPosition"
  :disabled="disabled"
)
  template(v-for="field in fields" :key="field.prop")
    el-form-item(
      :prop="field.prop"
      :label="field.label"
      :rules="field.rules"
    )
      slot(:name="field.prop")
        field-comp(
          :form="form"
          :field="field"
        )
  el-form-item
    mrc-button(@click="clearForm(formRef)")
      slot(name="clear") 清除
    mrc-button(type="primary" :loading="loading" @click="submitForm(formRef)")
      slot(name="submit") 送出

</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { FormInstance } from 'element-plus'
import type { FormField } from './define'
import { ref } from 'vue'
import { ElForm, ElFormItem } from 'element-plus'
import { useMessage } from '@/common/useMessage'
import { useI18n } from 'vue-i18n'
import FieldComp from './field.vue'

type LabelPosition = 'left' | 'right' | 'top'

const props = defineProps({
  fields: {
    type: Object as PropType<FormField[]>,
    required: true
  },
  form: {
    type: Object,
    required: true
  },
  labelPosition: {
    type: String as PropType<LabelPosition>,
    default: 'top'
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['clear', 'submit'])

const formRef = ref<FormInstance>()
const { $message } = useMessage()
const { t } = useI18n()

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid, fields) => {
    if (valid) {
      emit('submit')
    } else {
      if (!fields) return $message.error(t('錯誤'))
      Object.entries(fields).map(([prop, rules]) => {
        const label = props.fields.find(field => field.prop === prop)?.label ?? ''
        const message = rules[0].message ?? ''
        $message.error(label + message)
      })
      return
    }
  })
}

const clearForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  emit('clear')
}
</script>