import 'normalize.css'
import 'element-plus/dist/index.css'
import './assets/scss/style.scss'
import './global/prototype'

import { createApp } from 'vue'
import App from './App.vue'
import ElementIcon from './plugin/element-icon'
import Pinia from './store/install'
import I18n from './i18n/install'
import Router from './router'
import Modules from './modules/install'

const app = createApp(App)
app.use(ElementIcon)
app.use(Pinia)
app.use(I18n)
app.use(Router)
app.use(Modules)
app.mount('#app')
