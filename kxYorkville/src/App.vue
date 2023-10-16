<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
/* ----- Import assets ----- */
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'

/* ----- Store handling ----- */
import { useStoreClasses } from './stores/storeClasses.js'
import { useStoreCoaches } from './stores/storeCoaches.js'
import { useStoreGeneral } from './stores/storeGeneral.js'
import { useStoreUserService } from './stores/storeUserService.js'
const storeClasses = useStoreClasses()
const storeCoaches = useStoreCoaches()
const storeGeneral = useStoreGeneral()
const storeUserService = useStoreUserService()

onMounted(() => {
  storeUserService.init()
  storeClasses.getClasses()
  storeCoaches.getCoaches()
  storeGeneral.getGeneral()
})
</script>

<template>
  <Navbar />
  <RouterView />
  <FooterSection />
</template>

<style scoped></style>
