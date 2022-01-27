/* eslint-disable @typescript-eslint/promise-function-async */
import { RouteRecordRaw } from 'vue-router'

const mainRoutes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: () => import('../views/home.vue'),
    meta: {
      title: 'Home',
      requiresAuth: false
    }
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('../views/about.vue'),
    meta: {
      title: 'About',
      requiresAuth: true
    }
  }
]

const TestRoutes: RouteRecordRaw[] = [
  {
    name: 'tests',
    path: '/test',
    component: () => import('../views/test.vue'),
    meta: {
      title: 'Test Page'
    }
  }
]

const routes: RouteRecordRaw[] = [
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/login.vue'),
    meta: {
      title: 'Login'
    }
  },
  {
    name: 'layout',
    path: '/',
    component: () => import('../layouts/index.vue'),
    children: [...mainRoutes, ...TestRoutes]
  },
  // ## not found page
  {
    name: 'not-found',
    path: '/:path*',
    component: () => import('../views/error.vue'),
    meta: {
      title: 'Not found!'
    }
  }
]

export default routes
