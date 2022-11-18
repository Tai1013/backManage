<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import { useLanguage } from '@/i18n'

const { elementLocale } = useLanguage()

</script>

<template lang="pug">
el-config-provider(:locale="elementLocale")
  router-view
</template>

<style scoped>
</style>