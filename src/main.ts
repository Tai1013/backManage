import 'normalize.css'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Pinia from './plugin/pinia'
import I18n from './i18n/install'
import Modules from './modules/install'

const app = createApp(App)
app.use(Router)
app.use(Pinia)
app.use(I18n)
app.use(Modules)
app.mount('#app')
