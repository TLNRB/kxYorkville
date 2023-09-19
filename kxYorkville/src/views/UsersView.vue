<script setup>
import { ref } from 'vue'

/* ----- Form display ----- */
const loginActive = ref(true)
const signupActive = ref(false)
const active = 'text-primaryColor border-primaryColor'
const inActive = 'text-textGray border-textGray'

const toggleLogin = () => {
  loginActive.value = true
  signupActive.value = false
}

const toggleSignup = () => {
  loginActive.value = false
  signupActive.value = true
}

/* ----- Import assets ----- */
</script>

<template>
  <main
    class="flex flex-col-reverse justify-between gap-[4rem] mt-[4rem] py-[4rem] px-[1rem] xs:rounded-[20px] md:flex-row md:gap-0 md:rounded-[25px] md:px-[2rem] xxxxl:px-[4rem] xxxxl:mt-[6rem]"
  >
    <div
      class="w-[100%] h-[700px] relative bg-cover bg-center-bottom-mid bg-no-repeat bg-[url('../assets/images/users/cardio.jpg')] brightness-[90%] drop-shadow-xl rounded-[15px] md:w-[45%] md:rounded-[20px]"
    ></div>
    <div class="w-[100%] md:w-[45%]">
      <h1
        class="absolute top-[3rem] leading-none tracking-tighter text-[6rem] translate-x-[-1.25rem] font-semibold text-textDark xs:text-[8rem] xs:top-[2.5rem] sm:text-[10rem] sm:translate-x-[-1.5rem] sm:top-[2rem] md:top-[2rem] md:right-0 md:sm:translate-x-0 lg:top-[1rem] lg:text-[12rem] xxxl:top-[-1.5rem] xxxl:text-[20rem]"
      >
        users
      </h1>
      <div
        class="flex items-center gap-[1.5rem] my-[2rem] font-oswald text-textGray xs:my-[4rem] sm:mt-[6rem] lg:text-[1.25rem] xxxl:mt-[11rem]"
      >
        <button
          class="pb-[.125rem] border-b-[1px] duration-[.15s] ease-in-out z-[5] cursor-pointer"
          :class="loginActive ? active : inActive"
          @click="toggleLogin"
        >
          Login
        </button>
        <button
          class="pb-[.125rem] border-b-[1px] duration-[.15s] ease-in-out z-[5] cursor-pointer"
          :class="signupActive ? active : inActive"
          @click="toggleSignup"
        >
          Sign Up
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
