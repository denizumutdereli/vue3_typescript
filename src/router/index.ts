import { createRouter, createWebHistory } from 'vue-router'
import { storage } from '../utils'
import routes from './routes'

const history = createWebHistory()

const router = createRouter({ history, routes })

// First hoook
router.beforeEach(to => {
  const { expires = 0 } = storage.get('token') ?? {}
  // already authorized
  if (to.name === 'login' && expires > Date.now()) {
    return to.query.redirect?.toString() ?? '/'
  }
  // root authorize middleware - token control
  if (to.meta.requiresAuth === true && expires <= Date.now()) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
})

router.afterEach(to => {
  const items = []
  to.meta.title != null && items.unshift(to.meta.title)
  document.title = items.join(' · ')
})

export default router
