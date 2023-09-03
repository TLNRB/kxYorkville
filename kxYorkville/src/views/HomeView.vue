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
    class="relative bgDark px-[1.5rem] pt-[12rem] py-[6rem] flex flex-wrap justify-center items-center gap-[4rem] sm:gap-[6rem] sm:pt-[13rem] lg:pt-[14rem] md:px-[2rem] md:gap-[8rem] xxxxl:gap-[10rem]"
  >
    <h2
      class="absolute top-[2rem] left-[50%] translate-x-[-50%] leading-none tracking-tighter text-[4.5rem] font-semibold text-textDark xs:text-[5rem] sm:text-[8rem] sm:top-[-.5rem] sm:left-0 sm:translate-x-0 lg:top-[-1rem] lg:left-0 lg:text-[12rem] xxxxl:text-[14rem]"
    >
      classes
    </h2>
    <div class="flex flex-col items-center gap-[2rem]">
      <div
        class="absolute w-[200px] h-[200px] rounded-full border-[1px] border-transparent hover:scale-[112.5%] hover:border-[1px] hover:border-primaryColor ease-in duration-[.1s] z-[2] cursor-pointer md:w-[250px] md:h-[250px]"
      ></div>
      <div
        class="bg-[url('../assets/images/bodyBuilding.jpg')] bg-cover bg-center relative w-[200px] h-[200px] p-[.5rem] rounded-full md:w-[250px] md:h-[250px]"
      ></div>
      <h3 class="font-oswald uppercase text-[1.25rem] md:text-[1.5rem]">Body Building</h3>
    </div>
    <div class="flex flex-col items-center gap-[2rem]">
      <div
        class="absolute w-[200px] h-[200px] rounded-full border-[1px] border-transparent hover:scale-[112.5%] hover:border-[1px] hover:border-primaryColor ease-in duration-[.1s] z-[2] cursor-pointer md:w-[250px] md:h-[250px]"
      ></div>
      <div
        class="bg-[url('../assets/images/bodyBuilding.jpg')] bg-cover bg-center relative w-[200px] h-[200px] p-[.5rem] rounded-full md:w-[250px] md:h-[250px]"
      ></div>
      <h3 class="font-oswald uppercase text-[1.25rem] md:text-[1.5rem]">Body Building</h3>
    </div>
    <div class="flex flex-col items-center gap-[2rem]">
      <div
        class="absolute w-[200px] h-[200px] rounded-full border-[1px] border-transparent hover:scale-[112.5%] hover:border-[1px] hover:border-primaryColor ease-in duration-[.1s] z-[2] cursor-pointer md:w-[250px] md:h-[250px]"
      ></div>
      <div
        class="bg-[url('../assets/images/bodyBuilding.jpg')] bg-cover bg-center relative w-[200px] h-[200px] p-[.5rem] rounded-full md:w-[250px] md:h-[250px]"
      ></div>
      <h3 class="font-oswald uppercase text-[1.25rem] md:text-[1.5rem]">Body Building</h3>
    </div>
    <div class="flex flex-col items-center gap-[2rem]">
      <div
        class="absolute w-[200px] h-[200px] rounded-full border-[1px] border-transparent hover:scale-[112.5%] hover:border-[1px] hover:border-primaryColor ease-in duration-[.1s] z-[2] cursor-pointer md:w-[250px] md:h-[250px]"
      ></div>
      <div
        class="bg-[url('../assets/images/bodyBuilding.jpg')] bg-cover bg-center relative w-[200px] h-[200px] p-[.5rem] rounded-full md:w-[250px] md:h-[250px]"
      ></div>
      <h3 class="font-oswald uppercase text-[1.25rem] md:text-[1.5rem]">Body Building</h3>
    </div>
  </section>
</template>

<style scoped></style>
