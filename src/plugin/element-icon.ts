import { Plugin, createVNode } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const icon = Object.keys(ElementPlusIconsVue)
export type IconType = typeof icon[number]

const Icon = (props: { icon: string }) => {
  const { icon } = props
  return createVNode(ElementPlusIconsVue[icon as keyof typeof ElementPlusIconsVue])
}

const install: Plugin = app => {
  app.component('VIcon', Icon)
}

export default install