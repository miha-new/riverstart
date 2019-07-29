import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes/'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const DEFAULT_TITLE = 'Riverstart'
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} | ${DEFAULT_TITLE}`
  } else {
    document.title = DEFAULT_TITLE
  }
  next()
})

export default router
