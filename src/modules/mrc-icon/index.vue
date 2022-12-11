<template lang="pug">
el-icon(v-if="icon" :color="color")
  v-icon(v-if="elementIcon.includes(icon)" :icon="icon")
  custom-icon(v-else :icon="icon")
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ElementIconType } from '@/plugin/element-icon'
import type { CustomIconType } from './custom/custom'
import { ElIcon } from 'element-plus'
import { elementIcon } from '@/plugin/element-icon'
import CustomIcon from './custom/index.vue'

const props = defineProps({
  icon: {
    type: String as PropType<ElementIconType | CustomIconType>,
    default: undefined
  },
  color: {
    type: String,
    default: undefined
  }
})
</script>