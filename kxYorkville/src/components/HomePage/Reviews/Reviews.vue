<script setup>
//Prop handling
const { img, imgMobile, isMobile } = defineProps(['img', 'imgMobile', 'isMobile'])
const bgImg = `background-image: url('${img}')`
const bgImgMobile = `background-image: url('${imgMobile}')`
</script>

<template>
  <section
    class="my-[4rem] p-[20rem] bg-cover bg-center-bottom-mid bg-no-repeat brightness-[85%] xxxxl:my-[6rem]"
    :style="!isMobile ? bgImg : bgImgMobile"
  >
    <div class="absolute left-0 top-0 right-0 bottom-0 backdrop-blur-[10px] z-[-1]"></div>
    <h1>hello</h1>
  </section>
</template>

<style scoped></style>
