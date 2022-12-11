<template lang="pug">
el-icon(v-if="icon" :color="color")
  v-icon(v-if="elementIcon.includes(icon)" :icon="icon")
  custom-icon(v-else :icon="icon")
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { IconType } from '@/plugin/icons'
import { ElIcon } from 'element-plus'
import { elementIcon } from '@/plugin/icons/element-icon'
import CustomIcon from './custom.vue'

const props = defineProps({
  icon: {
    type: String as PropType<IconType>,
    default: undefined
  },
  color: {
    type: String,
    default: undefined
  }
})
</script>