<template lang="pug">
el-container.layout
  el-aside(width="240px")
  el-container
    el-header
    el-main
      router-view.layout-main
</template>

<script setup lang="ts">
import { ElContainer, ElAside, ElHeader, ElMain } from 'element-plus'
</script>

<style scoped lang="scss">
.layout {
  height: 100vh;
  background-color: #e4e7ed;
  &-main {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
  }
}
</style>