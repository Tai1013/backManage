import type { IconType } from '@/plugin/element-icon'
import { RouteRecordRaw, RouterView } from 'vue-router'
import { $t } from '@/i18n'

declare module 'vue-router' {
  export interface RouteMeta {
    pageName?: string
    pageIcon?: IconType
  }
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/pages',
    component: () => import('@/views/layout/index.vue'),
    children: [
      { path: '', name: '/', component: () => import('@/views/home/index.vue'), meta: { pageName: '首頁' } },
      {
        path: 'accounts', name: '/accounts', component: RouterView, redirect: '/',
        meta: { pageName: $t('帳號管理'), pageIcon: 'UserFilled'},
        children: [
          {
            path: 'admin', name: '/accounts/admin', component: () => import('@/views/accounts/admin/index.vue'), meta: { pageName: $t('管理員') },
            children: [
              { path: 'creat', name: '/accounts/admin/creat', component: () => import('@/views/accounts/admin/creat.vue'), meta: { pageName: $t('新增') } },
              { path: 'detail', name: '/accounts/admin/detail', component: () => import('@/views/accounts/admin/detail.vue'), meta: { pageName: $t('詳情') } }
            ]
          },
          {
            path: 'general-agent', name: '/accounts/general-agent', component: () => import('@/views/accounts/general-agent/index.vue'), meta: { pageName: $t('總代理') },
            children: [
              { path: 'creat', name: '/accounts/general-agent/creat', component: () => import('@/views/accounts/general-agent/creat.vue'), meta: { pageName: $t('新增') } },
              { path: 'detail', name: '/accounts/general-agent/detail', component: () => import('@/views/accounts/general-agent/detail.vue'), meta: { pageName: $t('詳情') } }
            ]
          },
          {
            path: 'agent', name: '/accounts/agent', component: () => import('@/views/accounts/agent/index.vue'), meta: { pageName: $t('代理') }
          },
          {
            path: 'product-department', name: '/accounts/product-department', component: () => import('@/views/accounts/product-department/index.vue'), meta: { pageName: $t('商品部門') }
          },
          {
            path: 'financial-department', name: '/accounts/financial-department', component: () => import('@/views/accounts/financial-department/index.vue'), meta: { pageName: $t('財務部門') }
          },
          {
            path: 'customer-service', name: '/accounts/customer-service', component: () => import('@/views/accounts/customer-service/index.vue'), meta: { pageName: $t('客服部門') }
          },
          {
            path: 'member', name: '/accounts/member', component: () => import('@/views/accounts/member/index.vue'), meta: { pageName: $t('會員') }
          }
        ]
      },
      {
        path: 'commodities', name: 'commodities', component: RouterView, redirect: '/',
        meta: { pageName: $t('商品管理'), pageIcon: 'Shop' },
        children: []
      },
      {
        path: 'promotions', name: 'promotions', component: RouterView, redirect: '/',
        meta: { pageName: $t('推廣管理'), pageIcon: 'Promotion' },
        children: []
      },
      {
        path: 'reports', name: 'reports', component: RouterView, redirect: '/',
        meta: { pageName: $t('報表管理'), pageIcon: 'Histogram' },
        children: []
      }
    ]
  },
  { path: '/login', name: '/login', component: () => import('@/views/login/index.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]