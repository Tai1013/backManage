<template lang="pug">
router-link(
  custom
  :to="to"
  v-slot="{ navigate, href }"
)
  el-link(
    :type="type"
    :href="href"
    @click="navigate"
    v-bind="$attrs"
    :underline="underline"
  )
    slot
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import { ElLink } from 'element-plus'

type LinkType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'

const props = defineProps({
  to: {
    type: Object as PropType<RouteLocationRaw>,
    required: true
  },
  type: {
    type: String as PropType<LinkType>,
    default: 'default'
  },
  underline: {
    type: Boolean,
    default: false
  }
})
</script>