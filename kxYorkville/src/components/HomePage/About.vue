<script setup>
/* ----- Import components ----- */
import Button from '../../components/UI/ButtonLight.vue'

//Prop handling
const { img } = defineProps(['img'])
const bgImg = `background-image: url('${img}')`
</script>

<template>
  <section class="flex flex-col-reverse w-[100%] drop-shadow-2xl sm:flex-row">
    <div
      class="flex flex-col gap-[2rem] py-[4rem] px-[1rem] bg-bgColorDark drop-shadow-2xl sm:w-[50%] sm:px-[1.5rem] md:py-[6rem] md:px-[2rem] lg:px-[4rem] xxl:py-[8rem] xxxl:px-[6rem] xxxxl:py-[12rem] xxxxl:px-[8rem]"
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
      <RouterLink to="/timetable">
        <Button class="sm:mt-[1rem] xxxl:mt-[2rem] xxxl:mx-auto" content="Timetable" />
      </RouterLink>
    </div>
    <div
      class="h-[350px] bg-cover bg-center-bottom-mid bg-no-repeat sm:w-[50%] sm:h-auto"
      :style="bgImg"
    ></div>
  </section>
</template>

<style scoped></style>
