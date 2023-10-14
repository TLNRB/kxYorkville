<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
/* ----- Import assets ----- */
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'

/* ----- Store handling ----- */
import { useStoreAuth } from './stores/storeAuth.js'
import { useStoreClasses } from './stores/storeClasses.js'
import { useStoreCoaches } from './stores/storeCoaches.js'
const storeAuth = useStoreAuth()
const storeClasses = useStoreClasses()
const storeCoaches = useStoreCoaches()

onMounted(() => {
  storeAuth.init()
  storeClasses.getClasses()
  storeCoaches.getCoaches()
})
</script>

<template>
  <Navbar />
  <RouterView />
  <FooterSection />
</template>

<style scoped></style>
