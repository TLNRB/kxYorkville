<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
/* ----- Import assets ----- */
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'

/* ----- Store handling ----- */
import { useStoreUserService } from './stores/storeUserService.js'
import { useStoreClasses } from './stores/storeClasses.js'
import { useStoreCoaches } from './stores/storeCoaches.js'
import { useStoreGeneral } from './stores/storeGeneral.js'
import { useStoreUsernames } from './stores/storeUsernames.js'
import { useStoreTimetable } from './stores/storeTimetable.js'
const storeUserService = useStoreUserService()
const storeClasses = useStoreClasses()
const storeCoaches = useStoreCoaches()
const storeGeneral = useStoreGeneral()
const storeUsernames = useStoreUsernames()
const storeTimetable = useStoreTimetable()

onMounted(() => {
  // Initialize the user service
  storeUserService.init()
  // Get all the classes
  storeClasses.getClasses()
  // Get all the coaches
  storeCoaches.getCoaches()
  // Get all the general data
  storeGeneral.getGeneral()
  // Get all the used useranmes
  storeUsernames.getUsernames()
  // Get all the timetable data
  storeTimetable.getTimetable()
})
</script>

<template>
  <Navbar />
  <RouterView />
  <FooterSection />
</template>

<style scoped></style>
