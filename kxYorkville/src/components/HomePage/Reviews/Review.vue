<script setup>
//Prop handling
const { text, username } = defineProps(['text', 'username'])
</script>

<template>
  <div
    class="w-[230px] flex flex-col gap-[2rem] items-center p-[1.5rem] bg-bgNormal border-[1px] border-textDarker rounded-[15px] drop-shadow-xl xs:w-[250px] sm:w-[350px] sm:p-[2rem] md:rounded-[20px] md:w-[400px] xxxxl:w-[500px]"
  >
    <p class="text-[.875rem] sm:text-[1rem]">
      {{ text }}
    </p>
    <div class="flex items-center gap-[.75rem] mr-auto">
      <div
        class="w-[30px] h-[30px] rounded-full bg-primaryColor flex justify-center items-center sm:w-[40px] sm:h-[40px]"
      >
        <font-awesome-icon class="text-[1rem] sm:text-[1.25rem]" :icon="['fas', 'user']" />
      </div>
      <p class="font-oswald xs:text-[1.125rem]">{{ username }}</p>
    </div>
  </div>
</template>

<style scoped></style>
