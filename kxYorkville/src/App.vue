<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
/* ----- Import assets ----- */
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'

/* ----- Store handling ----- */
import { useStoreAuth } from './stores/storeAuth.js'
const storeAuth = useStoreAuth()
import { useStoreClasses } from './stores/storeClasses.js'
const storeClasses = useStoreClasses()

onMounted(() => {
  storeAuth.init()
  storeClasses.getClasses()
})
</script>

<template>
  <Navbar />
  <RouterView />
  <FooterSection />
</template>

<style scoped></style>
