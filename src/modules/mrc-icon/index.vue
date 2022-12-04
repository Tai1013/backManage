<template lang="pug">
el-icon(v-if="icon")
  v-icon(:icon="icon")
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { IconType } from '@/plugin/element-icon'
import { ElIcon } from 'element-plus'

const props = defineProps({
  icon: {
    type: String as PropType<IconType>,
    default: undefined
  }
})
</script>