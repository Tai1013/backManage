<template lang="pug">
el-dropdown(
  v-bind="$attrs"
  @command="commandHandler"
  :size="size"
)
  .label(:class="size")
    span
      slot(name="label") {{ label ?? $t('下拉菜單') }}
    mrc-icon(icon="ArrowDown")
  template(#dropdown)
    el-dropdown-menu
      el-dropdown-item(
        v-for="option in options"
        :key="option.value"
        :command="option.value"
        :disabled="option.disabled"
        :divided="option.divided"
      )
        mrc-icon(v-if="option.icon" :icon="option.icon")
        span {{ option.label }}
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { DropOption } from '@/modules/mrc-dropdown/define'
import type { ComponentSize } from 'element-plus'
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'

const props = defineProps({
  label: {
    type: String,
    default: undefined
  },
  options: {
    type: Object as PropType<DropOption[]>,
    required: true
  },
  size: {
    type: String as PropType<ComponentSize>,
    default: ''
  }
})

const emit = defineEmits(['command'])

const commandHandler = (command: string | number) => {
  emit('command', command)
}
</script>

<style scoped lang="scss">
.label {
  display: flex;
  align-items: center;
  cursor: pointer;
  :deep(.el-icon) {
    padding-left: 5px;
  }
  &.small {
    font-size: 12px;
  }
}
</style>