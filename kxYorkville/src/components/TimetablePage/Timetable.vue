<script setup>
//Prop handling
const { singleClass } = defineProps(['singleClass'])
</script>

<template>
  <section
    class="w-[225px] flex flex-col mx-auto text-textGray xs:w-[300px] sm:w-auto sm:flex-row sm:justify-center"
  >
    <div
      class="flex flex-col items-center gap-[.75rem] text-center py-[.5rem] px-[1.25rem] rounded-t-[10px] bg-bgHoverDark xs:py-[.625rem] xs:px-[1.375rem] sm:rounded-tr-[0px] sm:rounded-l-[10px] sm:flex-row sm:items-start sm:py-[1rem] sm:px-[1.5rem] sm:gap-[2rem] sm:text-start lg:py-[1.25rem] lg:px-[2rem] lg:gap-[4rem]"
    >
      <p
        class="hidden font-[500] sm:block sm:min-w-[75px] sm:text-[1.25rem] lg:text-[1.5rem] lg:leading-snug"
      >
        {{ singleClass.from }}
      </p>
      <div>
        <p
          class="text-[1.5rem] font-[500] xs:text-[1.75rem] sm:min-w-[120px] sm:leading-none lg:min-w-[150px] lg:text-[2rem]"
        >
          {{ singleClass.name }}
        </p>
        <p class="text-[.875rem] xs:text-[1rem] sm:mt-[.375rem]">with {{ singleClass.coach }}</p>
      </div>
      <div class="font-oswald text-[.875rem] xs:text-[1rem] sm:min-w-[80px]">
        <p class="text-bgColorLightest">{{ singleClass.from }} - {{ singleClass.to }}</p>
        <!-- <p class="text-primaryColor font-[500] sm:mt-[.5rem]">{{ singleClass.size }} left</p> -->
        <p class="text-primaryColor line-through font-[500] sm:mt-[.5rem]">full</p>
      </div>
    </div>
    <div
      id="class-image"
      class="h-[100px] relative flex justify-center items-center bg-cover bg-no-repeat bg-center-bottom-mid rounded-b-[10px] xs:h-[130px] sm:h-auto sm:rounded-bl-[0px] sm:rounded-r-[10px] sm:min-w-[120px] md:min-w-[150px] lg:min-w-[200px]"
      :style="`background-image: url('${singleClass.img}')`"
    >
      <div
        class="absolute left-0 top-0 right-0 bottom-0 brightness-[85%] backdrop-blur-[2px] z-[0] rounded-b-[10px] drop-shadow-xl sm:rounded-bl-[0px] sm:rounded-r-[10px]"
      ></div>
      <button
        class="font-oswald flex flex-col w-fit text-[1rem] relative group drop-shadow-lg xs:text-[1.125rem]"
      >
        <span class="py-[.25rem] px-[1rem] bg-bgColorDark z-[1]">Reserve</span>
        <span
          class="absolute top-0 left-0 right-0 bottom-0 text-transparent bg-transparent border-[1px] border-primaryColor group-hover:scale-y-[125%] group-hover:scale-x-[110%] ease-in duration-[.15s] xs:group-hover:scale-y-[127%] xs:group-hover:scale-x-[115%]"
          >Reserve</span
        >
      </button>
    </div>
  </section>
</template>

<style scoped></style>
