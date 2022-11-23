<template lang="pug">
.field-comp
  template(v-if="field.component === 'select'")
    el-select(
      v-bind="field.attrs"
      :type="field.type"
      v-model="form[field.prop]"
      :clearable="field.clearable"
      :disabled="field.disabled"
      :placeholder="$t('請選擇')"
      @change="value => onChange(value, field)"
    )
      el-option(
        v-for="option in field.options"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      )
  template(v-else)
    el-input(
      v-bind="field.attrs"
      :type="field.type"
      v-model="form[field.prop]"
      :clearable="field.clearable"
      :disabled="field.disabled"
      :placeholder="$t('請輸入')"
      @change="value => onChange(value, field)"
    )

</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { FormField } from './define'
import { ElInput, ElSelect, ElOption } from 'element-plus'

const props = defineProps({
  field: {
    type: Object as PropType<FormField>,
    required: true
  },
  form: {
    type: Object,
    required: true
  }
})

const onChange = <T>(value: T, field: FormField) => {
  if (field.onChange) return field.onChange({ value, field })
}
</script>