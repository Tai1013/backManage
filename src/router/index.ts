import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { useUserStore } from '@/store'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const hasLogin = !!userStore.apiToken
  const noRoutesMatched = to.matched.length === 0
  const tokenState = userStore.getTokenState()

  if (to.name?.toString().match('login')) return next()
  if (hasLogin === false) return next({ name: 'login' })
  if (tokenState.state === false) return next({ name: 'login' })
  userStore.updateToken()
  if (noRoutesMatched) return next({ name: 'home' })
  if (to.name?.toString().match('home')) return next()

  next()
})

export default router