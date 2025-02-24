<script setup>
//Prop handling
const { content } = defineProps(['content'])
</script>

<template>
  <div class="flex flex-col-reverse items-center gap-[0rem] md:flex-row md:gap-[1rem]">
    <hr
      class="w-[2rem] border-[2px] translate-y-[4px] border-primaryColor xs:w-[2.5rem] xxxxl:w-[3rem] xxxxl:translate-y-[6px]"
    />
    <h2
      class="text-[2rem] font-semibold drop-shadow-lg xs:text-[2.5rem] sm:text-[4rem] xxxxl:text-[6rem]"
    >
      {{ content }}
    </h2>
  </div>
</template>
