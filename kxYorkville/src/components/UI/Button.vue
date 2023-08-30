<script setup>
const { content } = defineProps(['content'])
</script>
<template>
  <button class="flex flex-col w-fit text-[1.25rem] relative group">
    <span
      class="font-[600] py-[.375rem] px-[1.125rem] border-[1px] bg-primaryColor text-textLight border-primaryColor z-[1] group-hover:bg-transparent group-hover:border-primaryColor ease-in duration-[.15s] delay-[.05s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
      >{{ content }}</span
    >
    <span
      class="font-[600] py-[.375rem] px-[1.125rem] text-transparent border-[1px] border-textLight absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.5rem] md:px-[1.25rem] md:text-[1.5rem]"
      >{{ content }}</span
    >
  </button>
</template>
