<template lang="pug">
el-container.layout
  el-aside(width="240px")
  el-container
    el-header
    el-main
      router-view
</template>

<script setup lang="ts">
import { ElContainer, ElAside, ElHeader, ElMain } from 'element-plus'
</script>

<style scoped lang="scss">
.layout {
  height: 100vh;
}
</style>