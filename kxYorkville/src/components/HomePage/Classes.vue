<script setup>
import { RouterLink } from 'vue-router'
/* ----- Import Database ----- */
import classesDB from '../../data/classesDB.js'
</script>

<template>
  <section
    class="relative bgDark px-[1rem] pt-[12rem] py-[6rem] flex flex-wrap justify-center items-center gap-[4rem] sm:gap-[6rem] sm:pt-[13rem] sm:px-[1.5rem] md:px-[2rem] md:gap-[8rem] lg:pt-[14rem] xxxl:pb-[8rem] xxxxl:gap-[10rem] xxxxl:pb-[10rem] xxxxl:px-[4rem]"
  >
    <h2
      class="absolute top-[2rem] left-[50%] translate-x-[-50%] leading-none tracking-tighter text-[4.5rem] font-semibold text-textDark xs:text-[5rem] sm:text-[9rem] sm:top-[-.5rem] sm:left-0 sm:translate-x-0 md:text-[13rem] md:top-[-1rem] lg:top-[-1.5rem] lg:text-[16rem] xxxl:top-[-2rem] xxxl:text-[20rem]"
    >
      classes
    </h2>
    <div
      class="flex flex-col items-center gap-[2rem]"
      v-for="classes in classesDB"
      :key="classes.id"
    >
      <RouterLink
        :to="`/class-${classes.route}`"
        class="absolute w-[200px] h-[200px] rounded-full border-[1px] border-transparent hover:scale-[112.5%] hover:border-[2px] hover:border-primaryColor ease-in duration-[.1s] z-[2] cursor-pointer md:w-[250px] md:h-[250px]"
      ></RouterLink>
      <div
        class="bg-cover bg-center-top-mid bg-no-repeat relative w-[200px] h-[200px] p-[.5rem] rounded-full md:w-[250px] md:h-[250px]"
        :style="`background-image: url('${classes.img}')`"
      ></div>
      <p class="font-oswald uppercase text-[1.25rem] md:text-[1.5rem]">{{ classes.name }}</p>
    </div>
  </section>
</template>

<style scoped></style>
