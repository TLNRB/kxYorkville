<script setup>
//Prop handling
const { singleClass } = defineProps(['singleClass'])
</script>

<template>
  <section class="w-[225px] flex flex-col mx-auto">
    <div
      class="flex flex-col items-center gap-[.75rem] text-center py-[.5rem] px-[1.25rem] rounded-t-[10px] bg-bgHoverDark"
    >
      <p class="hidden sm:block">{{ singleClass.from }}</p>
      <div>
        <p class="text-[1.5rem] font-[500]">{{ singleClass.name }}</p>
        <p class="text-[.875rem]">with {{ singleClass.coach }}</p>
      </div>
      <div class="font-oswald text-[.875rem]">
        <p class="text-bgColorLightest">{{ singleClass.from }}-{{ singleClass.to }}</p>
        <p class="text-primaryColor font-[500]">{{ singleClass.size }} left</p>
      </div>
    </div>
    <div
      id="class-image"
      class="h-[100px] relative flex justify-center items-center bg-cover bg-no-repeat bg-center-bottom-mid rounded-b-[10px]"
      :style="`background-image: url('${singleClass.img}')`"
    >
      <div
        class="absolute left-0 top-0 right-0 bottom-0 brightness-[80%] backdrop-blur-[2px] z-[0] rounded-b-[10px] drop-shadow-xl"
      ></div>
      <button class="font-oswald flex flex-col w-fit text-[1rem] relative group drop-shadow-lg">
        <span
          class="py-[.25rem] px-[1rem] bg-bgColorDark z-[1] md:py-[.375rem] md:px-[1.125rem] md:text-[1.125rem]"
          >Reserve</span
        >
        <span
          class="absolute top-0 left-0 right-0 bottom-0 text-transparent bg-transparent border-[1px] border-primaryColor scale-[100%] group-hover:scale-y-[125%] group-hover:scale-x-[110%] ease-in duration-[.15s]"
          >Reserve</span
        >
      </button>
      <!-- <button
        class="font-oswald flex flex-col text-[1rem] font-[500] py-[.25rem] px-[1rem] bg-bgColorDark ease-in duration-[.15s] hover:scale-[105%] z-[1] md:py-[.375rem] md:px-[1.125rem] md:text-[1.125rem]"
      >
        <span class="">Cancel</span>
      </button> -->
    </div>
  </section>
</template>

<style scoped></style>
