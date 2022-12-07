<template lang="pug">
el-container.layout
  el-aside(width="240px")
    aside-menu
  el-container
    el-header(height="80px")
      header-comp
    el-main
      router-view.layout-main
</template>

<script setup lang="ts">
import { ElContainer, ElAside, ElHeader, ElMain } from 'element-plus'
import AsideMenu from './aside-menu/index.vue'
import HeaderComp from './header/index.vue'
</script>

<style scoped lang="scss">
@import './style.scss';
</style>