<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

/* ----- Import assets ----- */
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'

/* Checking Login status */
const isLoggedIn = ref(false)
</script>

<template>
  <Navbar />
  <RouterView :isLoggedIn="isLoggedIn" />
  <FooterSection :isLoggedIn="isLoggedIn" />
</template>

<style scoped></style>
