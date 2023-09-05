<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
/* ----- Import components ----- */
import Hero from '../components/HomePage/Hero.vue'
import Classes from '../components/HomePage/Classes.vue'
import About from '../components/HomePage/About.vue'
import Title from '../components/UI/Title.vue'
/* ----- Import assets ----- */
import videoDesktop from '../assets/images/weights.mp4'
import videoMobile from '../assets/images/weightsVertical.mp4'
import studio from '../assets/images/studio.jpg'

//Checking if the screen size is mobile
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
  <Classes />
  <About :studio="studio" />
  <section class="py-[4rem] px-[1rem] md:py-[6rem] md:px-[2rem]">
    <Title content="coaches" />
    <div></div>
  </section>
</template>

<style scoped></style>
