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
import { ref, onMounted, onUnmounted } from 'vue'
import { ElContainer, ElAside, ElHeader, ElMain } from 'element-plus'
import { useUserStore } from '@/store'
import { useRouter } from 'vue-router'
import AsideMenu from './aside-menu/index.vue'
import HeaderComp from './header/index.vue'

const router = useRouter()
const userStore = useUserStore()
const getAuthInterval = ref()

onMounted(() => {
  getAuthInterval.value = setInterval(() => {
    const tokenState = userStore.getTokenState()
    if (tokenState.state === false) router.push({ name: 'login' })
  }, 5000)
})

onUnmounted(() => {
  clearInterval(getAuthInterval.value)
})
</script>

<style scoped lang="scss">
@import './style.scss';
</style>