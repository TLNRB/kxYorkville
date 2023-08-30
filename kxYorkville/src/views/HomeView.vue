<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
/* ----- Import components ----- */
import Hero from '../components/HomePage/Hero.vue'
/* ----- Import assets ----- */
import videoDesktop from '../assets/images/weights.mp4'
import videoMobile from '../assets/images/weightsVertical.mp4'

/* ----- Checking if the screen size is mobile ----- */
const isMobile = ref(false)

//Resize handling
function handleResize() {
  isMobile.value = window.innerWidth < 560
}

// Add resize event listener when component is mounted
onMounted(() => {
  window.addEventListener('resize', handleResize)
})
// Remove resize event listener when component is mounted
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <Hero :videoDesktop="videoDesktop" :videoMobile="videoMobile" :isMobile="isMobile" />
</template>

<style scoped></style>
