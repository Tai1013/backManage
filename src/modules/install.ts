import { Plugin, Component, defineAsyncComponent } from 'vue'

const install: Plugin = app => {
  Object.entries(import.meta.glob<Component>('./*/index.vue')).forEach(([key, file]) => {
    const moduleName = key.slice(2, -10)
    app.component(moduleName, defineAsyncComponent(file))
  })
}

export default install