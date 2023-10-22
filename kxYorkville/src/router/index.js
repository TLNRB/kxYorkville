import { createRouter, createWebHistory } from 'vue-router'
/* ----- Import Pages ----- */
import HomeView from '../views/HomeView.vue'
import AccountView from '../views/AccountView.vue'
import ClassView from '../views/ClassView.vue'
import CoachView from '../views/CoachView.vue'
import TimetableView from '../views/TimetableView.vue'
import AdminView from '../views/AdminView.vue'
/* ---------- Import Stores ---------- */
import { useStoreClasses } from '../stores/storeClasses.js'
import { useStoreCoaches } from '../stores/storeCoaches.js'
import { useStoreUserService } from '../stores/storeUserService.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView
    },
    {
      path: '/timetable',
      name: 'timetable',
      component: TimetableView
    },
    {
      path: '/class-:route',
      name: 'class',
      component: ClassView,
      beforeEnter(to) {
        /* ---------- Stores ---------- */
        const storeClasses = useStoreClasses()
        const route = to.params.route
        const localClasses = storeClasses.classes
        const exists = localClasses.some((classObj) => classObj.routing === route)

        /* if (!exists) {
          return {
            name: 'home',
            params: { pathMatch: to.path.substring(1).split('/') },
            query: to.query,
            hash: to.hash
          }
        } */
      }
    },
    {
      path: '/coach-:route',
      name: 'coach',
      component: CoachView,
      beforeEnter(to) {
        /* ---------- Stores ---------- */
        const storeCoaches = useStoreCoaches()
        const route = to.params.route
        const localCoaches = storeCoaches.coaches
        const exists = localCoaches.some((coachObj) => coachObj.routing === route)

        /* if (!exists) {
          return {
            name: 'home',
            params: { pathMatch: to.path.substring(1).split('/') },
            query: to.query,
            hash: to.hash
          }
        } */
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:catchall(.*)*',
      name: 'notfound',
      component: HomeView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

router.beforeEach(async (to, from) => {
  const storeUserService = useStoreUserService()
  // If user is not logged in and tries to access admin page, redirect to home page
  if (!storeUserService.userAuth.id && to.name === 'admin') {
    return { name: 'home' }
  }
  // If user tries to access admin page, but doesn't logged in with a specific email redirect to home page
  if (to.name === 'admin' && storeUserService.userAuth.email !== 'admin@admin.com') {
    return { name: 'home' }
  }
})

export default router
