<template lang="pug">
.header-comp
  .between.header-top
    .between-left
      .state-list(v-for="state in stateList" :key="state.icon")
        mrc-icon(:class="state.icon" :icon="state.icon" :color="state.color")
        span {{ state.label }}
    .between-right
      date-drop
  .header-content
    .between-left
    .between-right
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import DateDrop from './date-drop/index.vue'
import { ElAvatar } from 'element-plus'

const { t } = useI18n()
const stateList = reactive([
  {
    icon: 'dot',
    color: 'var(--el-color-success)',
    label: t('上線人數:{num}人', { num: 1 })
  }
])
</script>

<style scoped lang="scss">
@import './style.scss';
</style>