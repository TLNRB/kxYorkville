<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
/* ----- Import components ----- */
import Hero from '../components/HomePage/Hero.vue'
import Classes from '../components/HomePage/Classes.vue'
import About from '../components/HomePage/About.vue'
import Coaches from '../components/HomePage/Coaches.vue'
import Info from '../components/HomePage/Info.vue'
import Reviews from '../components/HomePage/Reviews/Reviews.vue'
/* ----- Import assets ----- */
import videoDesktop from '../assets/images/home/weights.mp4'
import videoMobile from '../assets/images/home/weightsVertical.mp4'
import studio from '../assets/images/home/studio.jpg'
import smallDumbbell from '../assets/images/home/smallDumbbell.jpg'
import ring from '../assets/images/home/ring.jpg'

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

//Handle navbar navigation on clicking
const handleSelectSection = (id) => {
  const section = document.getElementById(id)
  section.scrollIntoView({ behavior: 'smooth' })
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
  <Hero
    id="home"
    :videoDesktop="videoDesktop"
    :videoMobile="videoMobile"
    :isMobile="isMobile"
    @section-selected="handleSelectSection"
  />
  <Classes id="classes" />
  <About id="about" :img="studio" />
  <Coaches id="coaches" />
  <Info id="info" @section-selected="handleSelectSection" />
  <Reviews
    id="reviews"
    :img="smallDumbbell"
    :imgMobile="ring"
    :isMobile="isMobile"
    :isDesktopMedium="isDesktopMedium"
    :isDesktopLarge="isDesktopLarge"
  />
</template>

<style scoped></style>
