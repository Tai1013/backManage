<template lang="pug">
el-form(
  ref="formRef"
  v-bind="$attrs"
  :model="form"
  :label-position="labelPosition"
  :disabled="disabled || loading"
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

  slot

  el-form-item
    slot(name="cancel" v-if="formButton.includes('cancel')")
      mrc-button.btn-cancel(@click="cancelForm(formRef)")
        slot(name="cancel:button") {{ $t('button.取消') }}
    slot(name="reset" v-if="formButton.includes('reset')")
      mrc-button.btn-reset(type="danger" @click="resetForm(formRef)")
        slot(name="reset:button") {{ $t('button.重置') }}
    slot(name="submit" v-if="formButton.includes('submit')")
      mrc-button.btn-submit(type="primary" :loading="loading" @click="submitForm(formRef)")
        slot(name="submit:button") {{ $t('button.送出') }}
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { FormInstance } from 'element-plus'
import type { FormField, LabelPosition, FormButton } from './define'
import { ref } from 'vue'
import { ElForm, ElFormItem } from 'element-plus'
import { useMessage } from '@/common/useMessage'
import { useI18n } from 'vue-i18n'
import FieldComp from './field.vue'

const props = defineProps({
  fields: {
    type: Object as PropType<FormField[]>,
    required: true
  },
  form: {
    type: Object,
    required: true
  },
  formButton: {
    type: Array as PropType<FormButton[]>,
    default: () => ['cancel', 'submit']
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

const emit = defineEmits(['submit', 'reset', 'cancel'])

const formRef = ref<FormInstance>()
const { $message } = useMessage()
const { t } = useI18n()

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid, fields) => {
    if (valid) {
      emit('submit')
    } else {
      if (!fields) return $message.error(t('message.錯誤'))
      Object.entries(fields).map(([prop, rules]) => {
        const label = props.fields.find(field => field.prop === prop)?.label ?? ''
        const message = rules[0].message ?? ''
        $message.error(label + message)
      })
      return
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  emit('reset')
}

const cancelForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.clearValidate()
  emit('cancel')
}
</script>