<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
/* ----- Import components ----- */
import Hero from '../components/HomePage/Hero.vue'
/* ----- Import assets ----- */
import videoDesktop from '../assets/images/weights.mp4'
import videoMobile from '../assets/images/weightsVertical.mp4'
import bodyBuildingImg from '../assets/images/bodyBuilding.jpg'

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
  <section
    class="relative bgDark px-[1.5rem] py-[6rem] flex justify-center items-center gap-[10rem]"
  >
    <div class="flex flex-col items-center gap-[2rem] group">
      <div
        class="relative w-[250px] h-[250px] p-[.5rem] rounded-full border-[1px] border-transparent bg-[url('../assets/images/bodyBuilding.jpg')] bg-cover bg-center group-hover:scale-110 group-hover:border-[1px] group-hover:border-primaryColor ease-in duration-[.1s] cursor-pointer overflow-hidden"
      ></div>
      <h2 class="font-oswald uppercase text-[1.5rem]">Body Building</h2>
    </div>
  </section>
</template>

<style scoped></style>
