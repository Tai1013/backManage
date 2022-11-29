import 'normalize.css'
import 'element-plus/dist/index.css'
import './global/prototype'

import { createApp } from 'vue'
import App from './App.vue'
import Pinia from './store/install'
import I18n from './i18n/install'
import Router from './router'
import Modules from './modules/install'

const app = createApp(App)
app.use(Pinia)
app.use(I18n)
app.use(Router)
app.use(Modules)
app.mount('#app')
