<script setup>
/* ----- Import assets ----- */
import Title from '../UI/Title.vue'
import Button from '../UI/Button.vue'
//Prop handling
const { singleCoach } = defineProps(['singleCoach'])
</script>

<template>
  <main
    class="flex flex-col pt-[6rem] px-[1rem] md:pt-[8rem] sm:px-[1.5rem] md:px-[2rem] lg:flex-row lg:justify-between lg:px-[4rem] xxl:pt-[8rem] xxxxl:pt-[10rem]"
  >
    <section class="w-[100%] lg:w-[48%]">hello</section>
    <section class="w-[100%] mb-[2rem] sm:mb-[3.5rem] lg:w-[48%]">
      <div
        class="w-[100%] h-[300px] bg-cover bg-no-repeat bg-center-top-mid brightness-[90%] rounded-[15px] drop-shadow-2xl xs:h-[350px] sm:h-[400px] md:h-[600px] md:rounded-l-[20px] md:rounded-br-[20px] lg:rounded-tl-0 lg:h-[750px]"
        :style="`background-image: url('${singleCoach.img}')`"
      >
        <div
          class="absolute top-0 right-[50%] translate-x-[50%] text-center leading-tight py-[.5rem] px-[1.25rem] bg-bgDark font-[600] text-textGray drop-shadow-lg rounded-b-[15px] brightness-[110%] sm:py-[.75rem] sm:px-[1.5rem] sm:text-[1.5rem] md:text-[2rem] md:rounded-b-[17px] lg:text-left lg:rounded-br-[0px] lg:right-0 lg:translate-x-0"
        >
          {{ singleCoach.name }}
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
