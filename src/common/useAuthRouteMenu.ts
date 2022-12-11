import type { ElementIconType } from '@/plugin/element-icon'
import type { RouteRecordRaw } from 'vue-router'
import { computed } from 'vue'
import { routes } from '@/router/routes'

declare module 'vue-router' {
  export interface RouteMeta {
    pageName?: string
    pageIcon?: ElementIconType
  }
}

export const useAuthRouteMenu = () => {
  const requiresAuthRoutes = routes.filter(routeList => routeList.meta?.requiresAuth === true)
  const pagesRoutes = requiresAuthRoutes.filter(routeList => routeList.name === 'pages')[0].children ?? []

  const asideMenu = computed(() => {
    const routeData = (route: RouteRecordRaw) => {
      return ({
        path: route.name ? '/' + route.name.toString() : '',
        name: route.meta?.pageName ?? '',
        icon: route.meta?.pageIcon ?? ''
      })
    }
    const menu = pagesRoutes
      .filter(routeList => routeList.name !== 'home')
      .map(routeList => ({
        ...routeData(routeList),
        children: routeList.children?.map(routeChild => routeData(routeChild)) ?? []
      }))
    return menu
  })

  return {
    asideMenu
  }
}