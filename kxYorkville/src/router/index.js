import { createRouter, createWebHistory } from 'vue-router'
/* ----- Import Pages ----- */
import HomeView from '../views/HomeView.vue'
import AccountView from '../views/AccountView.vue'
import ClassView from '../views/ClassView.vue'
import CoachView from '../views/CoachView.vue'
import TimetableView from '../views/TimetableView.vue'
import AdminView from '../views/AdminView.vue'
/* ---------- Import Stores ---------- */
import { useStoreClasses } from '../stores/storeClasses'
import { useStoreCoaches } from '../stores/storeCoaches'

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
      component: AdminView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.path.startsWith('/class-')) {
      // Scroll to top of target page
      return { top: 0 }
    } else {
      // Use default behavior
      return savedPosition
    }
  }
})

export default router
