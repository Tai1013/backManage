import type { ElementIconType } from '@/plugin/icons/element-icon'
import { RouteRecordRaw, RouterView } from 'vue-router'
import { $t } from '@/i18n'

declare module 'vue-router' {
  export interface RouteMeta {
    pageName?: string
    pageIcon?: ElementIconType
  }
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/', name: 'pages', component: () => import('@/views/layout/index.vue'), meta: { requiresAuth: true },
    children: [
      { path: '/', name: 'home', component: () => import('@/views/home/index.vue'), meta: { pageName: '首頁' } },
      {
        path: 'accounts', name: 'accounts', component: RouterView,
        meta: { pageName: $t('帳號管理'), pageIcon: 'UserFilled'},
        children: [
          {
            path: 'admin', name: 'accounts/admin', component: () => import('@/views/accounts/admin/index.vue'), meta: { pageName: $t('管理員') },
            children: [
              { path: 'create', name: 'accounts/admin/create', component: () => import('@/views/accounts/admin/create.vue'), meta: { pageName: $t('新增') } },
              { path: 'detail', name: 'accounts/admin/detail', component: () => import('@/views/accounts/admin/detail.vue'), meta: { pageName: $t('詳情') } }
            ]
          },
          {
            path: 'general-agent', name: 'accounts/general-agent', component: () => import('@/views/accounts/general-agent/index.vue'), meta: { pageName: $t('總代理') },
            children: [
              { path: 'create', name: 'accounts/general-agent/create', component: () => import('@/views/accounts/general-agent/create.vue'), meta: { pageName: $t('新增') } },
              { path: 'detail', name: 'accounts/general-agent/detail', component: () => import('@/views/accounts/general-agent/detail.vue'), meta: { pageName: $t('詳情') } }
            ]
          },
          {
            path: 'agent', name: 'accounts/agent', component: () => import('@/views/accounts/agent/index.vue'), meta: { pageName: $t('代理') },
            children: [
              { path: 'create', name: 'accounts/agent/create', component: () => import('@/views/accounts/agent/create.vue'), meta: { pageName: $t('新增') } },
              { path: 'detail', name: 'accounts/agent/detail', component: () => import('@/views/accounts/agent/detail.vue'), meta: { pageName: $t('詳情') } }
            ]
          },
          {
            path: 'product-department', name: 'accounts/product-department', component: () => import('@/views/accounts/product-department/index.vue'), meta: { pageName: $t('商品部門') },
            children: [
              { path: 'create', name: 'accounts/product-department/create', component: () => import('@/views/accounts/product-department/create.vue'), meta: { pageName: $t('新增') } },
              { path: 'detail', name: 'accounts/product-department/detail', component: () => import('@/views/accounts/product-department/detail.vue'), meta: { pageName: $t('詳情') } }
            ]
          },
          {
            path: 'financial-department', name: 'accounts/financial-department', component: () => import('@/views/accounts/financial-department/index.vue'), meta: { pageName: $t('財務部門') },
            children: [
              { path: 'create', name: 'accounts/financial-department/create', component: () => import('@/views/accounts/financial-department/create.vue'), meta: { pageName: $t('新增') } },
              { path: 'detail', name: 'accounts/financial-department/detail', component: () => import('@/views/accounts/financial-department/detail.vue'), meta: { pageName: $t('詳情') } }
            ]
          },
          {
            path: 'customer-service', name: 'accounts/customer-service', component: () => import('@/views/accounts/customer-service/index.vue'), meta: { pageName: $t('客服部門') },
            children: [
              { path: 'create', name: 'accounts/customer-service/create', component: () => import('@/views/accounts/customer-service/create.vue'), meta: { pageName: $t('新增') } },
              { path: 'detail', name: 'accounts/customer-service/detail', component: () => import('@/views/accounts/customer-service/detail.vue'), meta: { pageName: $t('詳情') } }
            ]
          },
          {
            path: 'member', name: 'accounts/member', component: () => import('@/views/accounts/member/index.vue'), meta: { pageName: $t('會員') },
            children: [
              { path: 'create', name: 'accounts/member/create', component: () => import('@/views/accounts/member/create.vue'), meta: { pageName: $t('新增') } },
              { path: 'detail', name: 'accounts/member/detail', component: () => import('@/views/accounts/member/detail.vue'), meta: { pageName: $t('詳情') } }
            ]
          }
        ]
      },
      {
        path: 'commodities', name: 'commodities', component: RouterView,
        meta: { pageName: $t('商品管理'), pageIcon: 'Shop' },
        children: []
      },
      {
        path: 'promotions', name: 'promotions', component: RouterView,
        meta: { pageName: $t('推廣管理'), pageIcon: 'Promotion' },
        children: []
      },
      {
        path: 'reports', name: 'reports', component: RouterView,
        meta: { pageName: $t('報表管理'), pageIcon: 'Histogram' },
        children: []
      }
    ]
  },
  { path: '/login', name: 'login', component: () => import('@/views/login/index.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]