<template lang="pug">
i.custom-icon(v-if="icon" v-html="customIconData[icon]")
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { CustomIconType } from '@/plugin/icons/custom'
import { customIconData } from '@/plugin/icons/custom'

const props = defineProps({
  icon: {
    type: String as PropType<CustomIconType>,
    default: undefined
  }
})
</script>

<style scoped lang="scss">
.custom-icon {
  display: inline-flex;
}
</style>