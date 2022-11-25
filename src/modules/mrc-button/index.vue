<template lang="pug">
el-button(
  v-bind="$attrs"
  :type="type"
  :size="size"
)
  template(#loading v-if="$slots.loading")
    slot(name="loading")
  slot {{ $t('按鈕') }}
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { ElButton } from 'element-plus'

type ButtonType = 'primary'| 'success'| 'warning'| 'danger'| 'info'
type ButtonSize = 'large'| 'default'| 'small'

const props = defineProps({
  type: {
    type: String as PropType<ButtonType>,
    default: ''
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: ''
  }
})
</script>