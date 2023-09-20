<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

/* ----- Import assets ----- */
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'

/* Checking Login status */
const isLoggedIn = ref(true)
</script>

<template>
  <Navbar />
  <RouterView />
  <FooterSection :isLoggedIn="isLoggedIn" />
</template>

<style scoped></style>
