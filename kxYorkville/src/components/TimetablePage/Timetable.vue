<script setup>
//Prop handling
const { singleClass, storeUserService } = defineProps(['singleClass', 'storeUserService'])

//Emit handling
const emit = defineEmits(['addBooking'])

//--Handle signing up to a class
const signUpClass = () => {
  emit('addBooking', singleClass.name, singleClass.coach, singleClass.from, singleClass.to)
}
</script>

<template>
  <section
    class="w-[225px] flex flex-col mx-auto text-textGray xs:w-[300px] md:w-auto md:flex-row md:justify-center"
  >
    <div
      class="flex flex-col items-center gap-[.75rem] text-center py-[.5rem] px-[1.25rem] rounded-t-[10px] bg-bgHoverDark xs:py-[.625rem] xs:px-[1.375rem] md:rounded-tr-[0px] md:rounded-l-[10px] md:flex-row md:items-start md:py-[1rem] md:px-[1.5rem] md:gap-[2rem] md:text-start lg:py-[1.25rem] lg:px-[2rem] lg:gap-[4rem] xxxxl:py-[1.5rem] xxxxl:px-[2.5rem]"
    >
      <p
        class="hidden font-[500] md:block md:min-w-[75px] md:text-[1.25rem] lg:text-[1.5rem] lg:leading-snug xxxxl:text-[1.75rem] xxxxl:leading-tight xxxxl:min-w-[85px]"
      >
        {{ singleClass.from }}
      </p>
      <div>
        <p
          class="text-[1.5rem] font-[500] xs:text-[1.75rem] md:min-w-[165px] md:leading-none lg:min-w-[175px] lg:text-[2rem] xxxxl:text-[2.25rem] xxxxl:min-w-[190px]"
        >
          {{ singleClass.name }}
        </p>
        <p class="text-[.875rem] xs:text-[1rem] md:mt-[.375rem] xxxxl:text-[1.125rem]">
          with {{ singleClass.coach }}
        </p>
      </div>
      <div
        class="font-oswald text-[.875rem] xs:text-[1rem] md:min-w-[80px] xxxxl:translate-y-[2px] xxxxl:text-[1.125rem] xxxxl:min-w-[95px]"
      >
        <p class="text-bgColorLightest">{{ singleClass.from }} - {{ singleClass.to }}</p>
        <p class="text-primaryColor font-[500] md:mt-[.5rem]">{{ singleClass.size }} left</p>
        <!-- <p class="text-primaryColor line-through font-[500] sm:mt-[.5rem]">full</p> -->
      </div>
    </div>
    <div
      id="class-image"
      class="h-[100px] relative flex justify-center items-center bg-cover bg-no-repeat bg-center-bottom-mid rounded-b-[10px] xs:h-[130px] md:h-auto md:rounded-bl-[0px] md:rounded-r-[10px] md:min-w-[150px] lg:min-w-[200px] xxxxl:min-w-[225px]"
      :style="`background-image: url('${singleClass.img}')`"
    >
      <div
        class="absolute left-0 top-0 right-0 bottom-[-.5px] brightness-[85%] backdrop-blur-[2px] z-[0] rounded-b-[10px] drop-shadow-xl md:bottom-0 md:right-[-.5px] md:rounded-bl-[0px] md:rounded-r-[10px]"
      ></div>
      <button
        v-if="storeUserService.userAuth.id"
        @click="signUpClass"
        class="font-oswald flex flex-col w-fit text-[1rem] relative group drop-shadow-lg xs:text-[1.125rem]"
      >
        <span class="py-[.25rem] px-[1rem] bg-bgColorDark z-[1]">Sign Up</span>
        <span
          class="absolute top-0 left-0 right-0 bottom-0 text-transparent bg-transparent border-[1px] border-primaryColor group-hover:scale-y-[125%] group-hover:scale-x-[110%] ease-in duration-[.15s] xs:group-hover:scale-y-[127%] xs:group-hover:scale-x-[115%]"
          >Sign Up</span
        >
      </button>
    </div>
  </section>
</template>

<style scoped></style>
