<template lang="pug">
.aside-menu
  mrc-link.aside-title(:to="{ name: 'home' }") {{ title }}
  el-menu(
    router
    :default-active="$route.path"
    text-color="#ffffff"
    background-color="#545c64"
  )
    template(
      v-for="parent in asideMenu"
      :key="parent.path"
    )
      el-sub-menu(v-if="parent.children.length > 0" :index="parent.path")
        template(#title)
          mrc-icon(:icon="parent.icon")
          span {{ parent.name }}
        el-menu-item(
          v-for="child in parent.children"
          :key="child.path"
          :index="child.path"
        )
          template(#title)
            mrc-icon(:icon="child.icon")
            span {{ child.name }}

      el-menu-item(v-else :index="parent.path")
        template(#title)
          mrc-icon(:icon="parent.icon")
          span {{ parent.name }}
</template>

<script setup lang="ts">
import { ElMenu, ElSubMenu, ElMenuItem, ElLink} from 'element-plus'
import { useAuthRouteMenu } from '@/common'

const { asideMenu } = useAuthRouteMenu()

const title = import.meta.env.VITE_APP_TITLE
</script>

<style scoped lang="scss">
@import './style.scss';
</style>