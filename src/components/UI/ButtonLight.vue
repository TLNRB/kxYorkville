<script setup>
//Prop handling
const { content } = defineProps(['content'])
</script>
<template>
  <button class="font-oswald flex flex-col w-fit text-[1.25rem] relative group">
    <span
      class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] border-textLight group-hover:text-bgColorDark z-[1] ease-in duration-[.15s] delay-[.05s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
      >{{ content }}</span
    >
    <span
      class="font-[600] w-[0px] py-[.375rem] text-transparent bg-textLight border-y-[1px] border-transparent absolute group-hover:w-[100%] group-hover:px-[1.125rem] ease-in duration-[.2s] md:py-[.5rem] md:group-hover:px-[1.25rem] md:text-[1.5rem]"
      >{{ content }}</span
    >
  </button>
</template>
