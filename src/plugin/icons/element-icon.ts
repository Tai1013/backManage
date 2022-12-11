import { Plugin, createVNode } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export const elementIcon = Object.keys(ElementPlusIconsVue)
export type ElementIconType = typeof elementIcon[number]

const Icon = (props: { icon: string }) => {
  const { icon } = props
  return createVNode(ElementPlusIconsVue[icon as keyof typeof ElementPlusIconsVue])
}

const install: Plugin = app => {
  app.component('VIcon', Icon)
}

export default install