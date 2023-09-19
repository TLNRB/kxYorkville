<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
/* ----- Import components ----- */
import Hero from '../components/HomePage/Hero.vue'
import Classes from '../components/HomePage/Classes.vue'
import About from '../components/HomePage/About.vue'
import Coaches from '../components/HomePage/Coaches.vue'
import Info from '../components/HomePage/Info.vue'
import Reviews from '../components/HomePage/Reviews/Reviews.vue'
import FooterSection from '../components/FooterSection.vue'
/* ----- Import assets ----- */
import videoDesktop from '../assets/images/weights.mp4'
import videoMobile from '../assets/images/weightsVertical.mp4'
import studio from '../assets/images/studio.jpg'
import smallDumbbell from '../assets/images/smallDumbbell.jpg'
import ring from '../assets/images/ring.jpg'

import coachesDB from '../data/coachesDB.js'

//Checking if the screen size is mobile
const isMobile = ref(window.innerWidth < 560 ? true : false)
const isDesktopMedium = ref(window.innerWidth >= 1060 && window.innerWidth < 1440 ? true : false)
const isDesktopLarge = ref(window.innerWidth >= 1440 ? true : false)

//Resize handling
function handleResize() {
  isMobile.value = window.innerWidth < 560 ? true : false
  isDesktopMedium.value = window.innerWidth >= 1060 && window.innerWidth < 1440 ? true : false
  isDesktopLarge.value = window.innerWidth > 1440 ? true : false
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
  <Classes />
  <About :img="studio" />
  <Coaches :coachesDB="coachesDB" />
  <Info />
  <Reviews
    :img="smallDumbbell"
    :imgMobile="ring"
    :isMobile="isMobile"
    :isDesktopMedium="isDesktopMedium"
    :isDesktopLarge="isDesktopLarge"
  />
  <FooterSection />
</template>

<style scoped></style>
