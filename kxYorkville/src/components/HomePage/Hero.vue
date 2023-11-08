<script setup>
import { RouterLink } from 'vue-router'
/* ----- Import components ----- */
import Button from '../../components/UI/Button.vue'

//Prop handling
const { videoDesktop, videoMobile, isMobile } = defineProps([
  'videoDesktop',
  'videoMobile',
  'isMobile'
])

//Emit handling
const emit = defineEmits(['section-selected'])

const sectionSelected = (id) => {
  emit('section-selected', id)
}
</script>

<template>
  <section class="min-h-[100vh] flex items-center justify-center">
    <video
      class="absolute top-0 left-0 right-0 object-cover w-[100%] h-[100vh] z-[-1]"
      :src="!isMobile ? videoDesktop : videoMobile"
      autoplay
      loop
      muted
      playsinline
      webkit-playsinline
    ></video>
    <div class="pt-[62px] px-[1.5rem]">
      <h1
        class="text-[3rem] text-center uppercase font-bold leading-[3rem] drop-shadow-lg xs:text-[4rem] xs:leading-[3.5rem] lg:text-[6rem] lg:leading-[5.5rem] xxxxl:text-[8rem] xxxxl:leading-[7rem]"
      >
        Start <span class="font-bold text-primaryColor drop-shadow-lg">your</span><br />
        journey today
      </h1>
      <div
        class="flex flex-wrap justify-center gap-[1.5rem] mt-[2.5rem] xs:gap-[2rem] lg:mt-[3rem]"
      >
        <Button @click="sectionSelected('classes')" :content="'Classes'" />
        <RouterLink to="/timetable">
          <Button :content="'Timetable'" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
