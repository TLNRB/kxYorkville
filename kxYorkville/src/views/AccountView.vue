<script setup>
import { ref } from 'vue'
/* ----- Import assets ----- */

//Handling props
const { isLoggedIn } = defineProps(['isLoggedIn'])

// Form display
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
</script>

<template>
  <main
    class="flex flex-col-reverse justify-between gap-[4rem] mt-[4rem] py-[4rem] px-[1rem] xs:rounded-[20px] sm:gap-[6rem] md:flex-row md:gap-0 md:rounded-[25px] md:px-[2rem] xxxxl:px-[4rem] xxxxl:mt-[6rem]"
  >
    <div
      class="w-[100%] h-[500px] relative bg-cover bg-center-bottom-mid bg-no-repeat bg-[url('../assets/images/users/cardio.jpg')] brightness-[90%] drop-shadow-xl rounded-[15px] sm:h-[600px] md:h-[750px] md:w-[45%] md:rounded-[20px]"
    ></div>
    <div class="w-[100%] md:w-[45%]">
      <h1
        class="absolute top-[4rem] leading-none tracking-tighter text-[4.5rem] translate-x-[-1.125rem] font-semibold text-textDark xs:text-[5.5rem] xs:top-[4rem] sm:text-[9rem] sm:translate-x-[-1.25rem] sm:top-[3.5rem] md:top-[4rem] md:text-[6.5rem] md:right-0 md:sm:translate-x-0 lg:top-[3rem] lg:text-[9rem] xxl:top-[2rem] xxl:text-[12rem] xxxl:text-[13rem] xxxxl:text-[17rem]"
      >
        account
      </h1>
      <!-- Login/SignUp -->
      <div v-if="!isLoggedIn">
        <div
          class="flex items-center gap-[1.5rem] my-[2rem] font-oswald text-textGray xs:my-[4rem] sm:mt-[6rem] lg:text-[1.25rem] xxl:mt-[8rem] xxxl:mt-[10rem] xxxxl:mt-[11rem]"
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
        <div>
          <!-- Login Form -->
          <form
            v-if="loginActive"
            class="flex flex-col gap-[1.5rem] text-[.875rem] sm:text-[1rem] lg:text-[1.125rem]"
          >
            <input
              type="email"
              placeholder="Email"
              class="py-[.25rem] bg-transparent text-textGray border-b-[1px] border-primaryColor outline-none placeholder:text-textDarker xs:py-[.375rem] md:py-[.5rem]"
            />

            <input
              type="password"
              placeholder="Password"
              class="py-[.25rem] bg-transparent text-textGray border-b-[1px] border-primaryColor outline-none placeholder:text-textDarker xs:py-[.375rem] md:py-[.5rem]"
            />
            <button
              type="submit"
              class="mt-[.5rem] font-oswald flex flex-col w-fit text-[.875rem] relative group xs:text-[1rem] md:text-[1.125rem] lg:mt-[1rem]"
            >
              <span
                class="font-[600] py-[.25rem] px-[1rem] border-[1px] bg-primaryColor text-textLight border-primaryColor z-[1] group-hover:bg-transparent group-hover:border-primaryColor ease-in duration-[.15s] delay-[.05s] md:py-[.375rem] md:px-[1.125rem]"
                >Login</span
              >
              <span
                class="font-[600] py-[.25rem] px-[1rem] text-transparent border-[1px] border-textLight absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.375rem] md:px-[1.125rem]"
                >Login</span
              >
            </button>
          </form>
          <!-- Sign Up Form -->
          <form
            v-else="signupActive"
            class="flex flex-col gap-[1.5rem] text-[.875rem] sm:text-[1rem] lg:text-[1.125rem]"
          >
            <input
              type="text"
              placeholder="First name"
              class="py-[.25rem] bg-transparent text-textGray border-b-[1px] border-primaryColor outline-none placeholder:text-textDarker xs:py-[.375rem] md:py-[.5rem]"
            />
            <input
              type="text"
              placeholder="Last name"
              class="py-[.25rem] bg-transparent text-textGray border-b-[1px] border-primaryColor outline-none placeholder:text-textDarker xs:py-[.375rem] md:py-[.5rem]"
            />
            <input
              type="text"
              placeholder="Username"
              class="py-[.25rem] bg-transparent text-textGray border-b-[1px] border-primaryColor outline-none placeholder:text-textDarker xs:py-[.375rem] md:py-[.5rem]"
            />
            <input
              type="email"
              placeholder="Email"
              class="py-[.25rem] bg-transparent text-textGray border-b-[1px] border-primaryColor outline-none placeholder:text-textDarker xs:py-[.375rem] md:py-[.5rem]"
            />

            <input
              type="password"
              placeholder="Password"
              class="py-[.25rem] bg-transparent text-textGray border-b-[1px] border-primaryColor outline-none placeholder:text-textDarker xs:py-[.375rem] md:py-[.5rem]"
            />
            <button
              type="submit"
              class="mt-[.5rem] font-oswald flex flex-col w-fit text-[.875rem] relative group xs:text-[1rem] md:text-[1.125rem] lg:mt-[1rem]"
            >
              <span
                class="font-[600] py-[.25rem] px-[1rem] border-[1px] bg-primaryColor text-textLight border-primaryColor z-[1] group-hover:bg-transparent group-hover:border-primaryColor ease-in duration-[.15s] delay-[.05s] md:py-[.375rem] md:px-[1.125rem]"
                >Register</span
              >
              <span
                class="font-[600] py-[.25rem] px-[1rem] text-transparent border-[1px] border-textLight absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.375rem] md:px-[1.125rem]"
                >Register</span
              >
            </button>
          </form>
        </div>
      </div>
      <!-- Account -->
      <div v-else="isLoggedIn"></div>
    </div>
  </main>
</template>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-text-fill-color: #e1e1e1;
  transition: background-color 10000s ease-in-out 0s;
}
</style>
