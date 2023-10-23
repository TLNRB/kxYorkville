import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import solid icons */
import {
  faHouse,
  faCalendar,
  faPeopleGroup,
  faDumbbell,
  faArrowRightToBracket,
  faBookmark,
  faUser,
  faGear,
  faArrowRightLong,
  faCaretDown,
  faScrewdriverWrench,
  faTrash
} from '@fortawesome/free-solid-svg-icons'
/* import brand icons */
import {} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(
  faHouse,
  faCalendar,
  faPeopleGroup,
  faDumbbell,
  faArrowRightToBracket,
  faBookmark,
  faUser,
  faGear,
  faArrowRightLong,
  faCaretDown,
  faScrewdriverWrench,
  faTrash
)

// Enable router in stores (for us in auth, after logout we need to redirect to home page)
const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.use(router)

app.mount('#app')
