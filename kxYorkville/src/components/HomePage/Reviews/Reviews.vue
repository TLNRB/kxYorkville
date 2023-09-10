<script setup>
import Title from '../../UI/Title.vue'

//Prop handling
const { img, imgMobile, isMobile } = defineProps(['img', 'imgMobile', 'isMobile'])
const bgImg = `background-image: url('${img}')`
const bgImgMobile = `background-image: url('${imgMobile}')`
</script>

<template>
  <section
    class="my-[4rem] py-[4rem] px-[1rem] bg-cover bg-center-bottom-mid bg-no-repeat brightness-[85%] md:px-[2rem] xxl:py-[6rem] xxxxl:px-[4rem] xxxxl:my-[6rem]"
    :style="!isMobile ? bgImg : bgImgMobile"
  >
    <div
      class="absolute left-0 top-0 right-0 bottom-0 backdrop-blur-[6px] z-[-1] sm:backdrop-blur-[8px] lg:backdrop-blur-[10px]"
    ></div>
    <Title content="testimonials" />
  </section>
</template>

<style scoped></style>
