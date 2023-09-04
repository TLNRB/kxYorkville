<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
/* ----- Import components ----- */
import Hero from '../components/HomePage/Hero.vue'
import Classes from '../components/HomePage/Classes.vue'
import Button from '../components/UI/ButtonLight.vue'
/* ----- Import assets ----- */
import videoDesktop from '../assets/images/weights.mp4'
import videoMobile from '../assets/images/weightsVertical.mp4'

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
  <section class="flex flex-col-reverse w-[100%] sm:flex-row">
    <div
      class="flex flex-col gap-[2rem] py-[4rem] px-[1.5rem] bg-bgColorDark sm:w-[50%] md:py-[6rem] md:px-[2rem] lg:px-[4rem] xxl:py-[8rem] xxxl:px-[6rem] xxxxl:py-[12rem] xxxxl:px-[8rem]"
    >
      <p
        class="font-light md:text-[1.125rem] xl:text-[1.25rem] xxxl:text-[1.375rem] xxxl:text-center xxxxl:text-[1.5rem]"
      >
        KX Yorkville was founded by two brothers from Toronto CA in 2010. It started in a small
        building however with time it expanded and became one of the biggest gym in Toronto.
      </p>
      <p
        class="text-bgDark font-bold uppercase xxxl:w-[85%] xxxl:mx-auto xxxl:text-[1.125rem] xxxl:text-center xxxxl:text-[1.25rem]"
      >
        We are growing for over a decade now, and we are not even close to stop it. Start today and
        join the community.
      </p>
      <Button class="sm:mt-[1rem] xxxl:mt-[2rem] xxxl:mx-auto" content="Timetable" />
    </div>
    <div
      class="h-[350px] bg-[url('../assets/images/studio.jpg')] bg-cover bg-center sm:w-[50%] sm:h-auto"
    ></div>
  </section>
</template>

<style scoped></style>
