<script setup>
/* ----- Import assets ----- */
import Title from '../UI/Title.vue'
import Button from '../UI/Button.vue'
//Prop handling
const { singleCoach } = defineProps(['singleCoach'])
</script>

<template>
  <main
    class="flex flex-col-reverse pt-[6rem] px-[1.5rem] md:pt-[8rem] md:px-[2rem] lg:flex-row lg:px-[4rem] xxl:pt-[8rem] xxxxl:pt-[10rem]"
  >
    <section></section>
    <section class="relative">
      <img
        :src="singleCoach.img"
        class="w-[100%] h-[500px] brightness-[90%] drop-shadow-xl rounded-l-[15px] rounded-br-[15px] sm:h-[600px] md:h-[750px] md:rounded-l-[20px] md:rounded-br-[20px]"
      />
      <div
        class="absolute top-[-.25rem] right-[-.25rem] py-[.75rem] px-[1.5rem] bg-bgDark font-[600] text-textGray md:text-[2rem] rounded-bl-[15px] md:rounded-bl-[17px]"
      >
        {{ singleCoach.name }}
      </div>
    </section>
  </main>
</template>

<style scoped></style>
