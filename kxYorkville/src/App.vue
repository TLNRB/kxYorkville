<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'

//Store handling
import { useStoreAuth } from './stores/storeAuth.js'
const storeAuth = useStoreAuth()

/* ----- Import assets ----- */
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'

/* Checking Login status */
const isLoggedIn = ref(false)

onMounted(() => {
  storeAuth.init()
})
</script>

<template>
  <Navbar />
  <RouterView />
  <FooterSection />
</template>

<style scoped></style>
