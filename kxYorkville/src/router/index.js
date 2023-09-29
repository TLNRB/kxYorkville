import { createRouter, createWebHistory } from 'vue-router'
/* ----- Import Pages ----- */
import HomeView from '../views/HomeView.vue'
import AccountView from '../views/AccountView.vue'
import ClassView from '../views/ClassView.vue'
import CoachView from '../views/CoachView.vue'
import TimetableView from '../views/TimetableView.vue'
/* ----- Import Database ----- */
import classes from '../data/classesDB.js'
import coaches from '../data/coachesDB'

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
        const route = to.params.route
        const localClasses = classes
        const exists = localClasses.some((classObj) => classObj.route === route)

        if (!exists) {
          return {
            name: 'home',
            params: { pathMatch: to.path.substring(1).split('/') },
            query: to.query,
            hash: to.hash
          }
        }
      }
    },
    {
      path: '/coach-:route',
      name: 'coach',
      component: CoachView,
      beforeEnter(to) {
        const route = to.params.route
        const localCoaches = coaches
        const exists = localCoaches.some((coachObj) => coachObj.route === route)

        if (!exists) {
          return {
            name: 'home',
            params: { pathMatch: to.path.substring(1).split('/') },
            query: to.query,
            hash: to.hash
          }
        }
      }
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
