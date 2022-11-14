import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Pinia from './plugin/pinia'

const app = createApp(App)
app.use(Router)
app.use(Pinia)
app.mount('#app')
