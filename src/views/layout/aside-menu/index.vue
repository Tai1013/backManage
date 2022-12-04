<template lang="pug">
el-menu.aside-menu(
  router
  :default-active="$route.path"
  text-color="#ffffff"
  background-color="#545c64"
)
  template(
    v-for="group in asideMenu"
    :key="group.parent.routeName"
  )
    el-sub-menu(
      v-if="group.children.length > 0"
      :index="group.parent.routeName"
    )
      template(#title)
        mrc-icon(:icon="group.parent.meta?.pageIcon")
        span {{ group.parent.meta?.pageName }}
      el-menu-item(
        v-for="child in group.children"
        :key="child.routeName"
        :index="child.routeName"
      )
        template(#title)
          mrc-icon(:icon="child.meta?.pageIcon")
          span {{ child.meta?.pageName }}

    el-menu-item(
      v-else
      :index="group.parent.routeName"
    )
      template(#title)
        mrc-icon(:icon="group.parent.meta?.pageIcon")
        span {{ group.parent.meta?.pageName }}
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElMenu, ElSubMenu, ElMenuItem, ElMenuItemGroup} from 'element-plus'
import { routes } from '@/router/routes'

const routeMenu = ref(routes[0].children ?? [])

const asideMenu = computed(() => {
  const routeList = <T, U>(routeName: T, meta: U) => {
    return ({ routeName, meta })
  }
  const menu = routeMenu.value.filter(route => route.name !== '/').map(route => ({
    parent: routeList(route.name, route.meta),
    children: route.children?.map(routeChild => routeList(routeChild.name, routeChild.meta)) ?? []
  }))

  return menu
})
</script>

<style scoped lang="scss">
.aside-menu {
  height: 100%;
}
</style>