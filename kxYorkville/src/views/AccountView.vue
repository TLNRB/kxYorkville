<script setup>
import { ref } from 'vue'

//Handling props
const { isLoggedIn } = defineProps(['isLoggedIn'])

// Form display
const loginActive = ref(true)
const settingsActive = ref(true)
const active = 'text-primaryColor border-primaryColor'
const inactive = 'text-textGray border-textGray'

const toggleLogin = () => {
  loginActive.value = !loginActive.value
}

const toggleSettings = () => {
  settingsActive.value = !settingsActive.value
}
</script>

<template>
  <main
    class="flex flex-col-reverse justify-between gap-[4rem] mt-[4rem] py-[4rem] px-[1rem] xs:rounded-[20px] sm:gap-[6rem] md:flex-row md:gap-0 md:rounded-[25px] md:px-[2rem] xxxxl:px-[4rem] xxxxl:mt-[6rem]"
  >
    <section
      class="w-[100%] h-[500px] relative bg-cover bg-center-bottom-mid bg-no-repeat bg-[url('../assets/images/users/cardio.jpg')] brightness-[90%] drop-shadow-xl rounded-[15px] sm:h-[600px] md:h-[750px] md:w-[45%] md:rounded-[20px]"
    ></section>
    <section class="w-[100%] md:w-[45%]">
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
            :class="loginActive ? active : inactive"
            @click="toggleLogin"
          >
            Login
          </button>
          <button
            class="pb-[.125rem] border-b-[1px] duration-[.15s] ease-in-out z-[5] cursor-pointer"
            :class="!loginActive ? active : inactive"
            @click="toggleLogin"
          >
            Register
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
            v-else="!loginActive"
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
      <div v-else="isLoggedIn">
        <div
          class="flex items-center gap-[1.5rem] my-[2rem] font-oswald text-textGray xs:my-[4rem] sm:mt-[6rem] lg:text-[1.25rem] xxl:mt-[8rem] xxxl:mt-[10rem] xxxxl:mt-[11rem]"
        >
          <button
            class="pb-[.125rem] border-b-[1px] duration-[.15s] ease-in-out z-[5] cursor-pointer"
            :class="settingsActive ? active : inactive"
            @click="toggleSettings"
          >
            Settings
          </button>
          <button
            class="pb-[.125rem] border-b-[1px] duration-[.15s] ease-in-out z-[5] cursor-pointer"
            :class="!settingsActive ? active : inactive"
            @click="toggleSettings"
          >
            Reserved Classes
          </button>
        </div>
        <!-- Settings -->
        <form v-if="settingsActive" class="flex flex-col gap-[3rem]">
          <!-- Profile Picture -->
          <div class="max-w-[750px]">
            <h2 class="mb-[1rem] text-[1.25rem] text-textGray font-[600]">Profile Picture</h2>
            <div
              class="flex flex-col gap-[1.25rem] items-center p-[1.25rem] bg-bgNormal border-[1px] border-primaryColor xs:flex-row lg:gap-[1.5rem]"
            >
              <div
                class="min-w-[75px] min-h-[75px] bg-textGray rounded-full xs:min-w-[100px] xs:min-h-[100px] sm:min-w-[125px] sm:min-h-[125px] md:min-w-[100px] md:min-h-[100px] lg:min-w-[125px] lg:min-h-[125px]"
              ></div>
              <div class="flex flex-col my-auto">
                <div class="relative">
                  <label
                    class="absolute top-0 left-[50%] translate-x-[-50%] py-[.375rem] px-[1rem] bg-bgColorDark text-[.875rem] xs:left-0 xs:translate-x-[0] sm:text-[1rem] sm:px-[1.25em] md:text-[.875rem] md:px-[1rem] lg:text-[1rem] lg:px-[1.25em]"
                    >Update</label
                  >
                  <input
                    class="absolute w-[83px] h-[33px] opacity-0 top-0 left-[50%] translate-x-[-50%] xs:left-0 xs:translate-x-[0] sm:w-[99px] sm:h-[36px] md:w-[83px] md:h-[33px] lg:w-[99px] lg:h-[36px]"
                    type="file"
                  />
                </div>
                <p
                  class="mt-[3rem] font-oswald text-[.875rem] text-textNofile italic sm:text-[1rem] md:text-[.875rem] lg:text-[1rem]"
                >
                  No file selected
                </p>
              </div>
            </div>
          </div>
          <!-- Profile Settings -->
          <div class="max-w-[750px]">
            <h2 class="mb-[1rem] text-[1.25rem] text-textGray font-[600]">Profile Settings</h2>
            <div
              class="flex flex-col gap-[1.5rem] p-[1.25rem] bg-bgNormal border-[1px] border-primaryColor sm:gap-[2rem]"
            >
              <!-- Username -->
              <div
                class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
              >
                <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Username</h3>
                <input
                  type="text"
                  value="tlnrb"
                  class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
                />
              </div>
              <!-- Favourit Class -->
              <div
                class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
              >
                <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">
                  Favourit class
                </h3>
                <div class="w-[100%] relative">
                  <select
                    class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
                  >
                    <option disabled>Classes</option>
                    <option value="yoga">Yoga</option>
                    <option value="box">Box</option>
                    <option value="crossfit">Crossfit</option>
                  </select>
                  <font-awesome-icon
                    :icon="['fas', 'caret-down']"
                    class="absolute top-[50%] translate-y-[-50%] right-[1rem] text-textGray"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="font-oswald flex flex-col w-fit mt-[-1rem] text-[1rem] relative group sm:mt-0 md:mt-[-1rem]"
          >
            <span
              class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-bgColorDark z-[1] ease-in duration-[.15s] delay-[.05s] md:py-[.375rem] md:px-[1.125rem] md:text-[1.125rem]"
              >Save</span
            >
            <span
              class="font-[500] w-[0px] py-[.25rem] text-transparent bg-bgColorDark border-y-[1px] border-transparent absolute group-hover:w-[100%] group-hover:px-[1.125rem] ease-in duration-[.2s] md:py-[.375rem] md:group-hover:px-[1.125rem] md:text-[1.125rem]"
              >Save</span
            >
          </button>
        </form>
        <!-- Reserved Classes -->
        <div v-else="!settingsActive">
          <div class="bg-bgNormal border-[1px] border-primaryColor xs:flex-row">
            <div
              class="flex flex-col gap-[2rem] p-[1.5rem] border-b-[1px] border-bgColorDark sm:gap-[1.5rem] md:gap-[2rem] lg:gap-[1.5rem] xxxl:flex-row xxxl:items-center xxxl:justify-between xxxxl:p-[2rem]"
            >
              <div class="flex flex-wrap items-center gap-[1.5rem] xxl:gap-[2rem]">
                <div class="min-w-[100px]">
                  <h4 class="pb-[.125rem] font-oswald text-textNofile xxl:text-[1.125rem]">
                    Class
                  </h4>
                  <p class="text-textGray xxl:text-[1.125rem]">Crossfit</p>
                </div>
                <div class="min-w-[100px]">
                  <h4 class="pb-[.125rem] font-oswald text-textNofile xxl:text-[1.125rem]">
                    Coach
                  </h4>
                  <p class="text-textGray xxl:text-[1.125rem]">Ross Fernandez</p>
                </div>
                <div class="min-w-[100px]">
                  <h4 class="pb-[.125rem] font-oswald text-textNofile xxl:text-[1.125rem]">Date</h4>
                  <p class="text-textGray xxl:text-[1.125rem]">12-09-2023</p>
                </div>
                <div class="min-w-[100px]">
                  <h4 class="pb-[.125rem] font-oswald text-textNofile xxl:text-[1.125rem]">
                    From-To
                  </h4>
                  <p class="text-textGray xxl:text-[1.125rem]">15:00-17:00</p>
                </div>
              </div>
              <button
                type="submit"
                class="font-oswald flex flex-col w-fit text-[1rem] relative group sm:mt-0"
              >
                <span
                  class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-bgColorDark z-[1] ease-in duration-[.15s] delay-[.05s] md:py-[.375rem] md:px-[1.125rem] md:text-[1.125rem]"
                  >Cancel</span
                >
                <span
                  class="font-[600] w-[0px] py-[.25rem] text-transparent bg-bgColorDark border-y-[1px] border-transparent absolute group-hover:w-[100%] group-hover:px-[1.125rem] ease-in duration-[.2s] md:py-[.375rem] md:group-hover:px-[1.125rem] md:text-[1.125rem]"
                  >Cancel</span
                >
              </button>
            </div>
            <!-- ---------- -->
            <div
              class="flex flex-col gap-[2rem] p-[1.5rem] border-b-[1px] border-bgColorDark sm:gap-[1.5rem] md:gap-[2rem] lg:gap-[1.5rem] xxxl:flex-row xxxl:items-center xxxl:justify-between xxxxl:p-[2rem]"
            >
              <div class="flex flex-wrap items-center gap-[1.5rem] xxl:gap-[2rem]">
                <div class="min-w-[100px]">
                  <h4 class="pb-[.125rem] font-oswald text-textNofile xxl:text-[1.125rem]">
                    Class
                  </h4>
                  <p class="text-textGray xxl:text-[1.125rem]">Crossfit</p>
                </div>
                <div class="min-w-[100px]">
                  <h4 class="pb-[.125rem] font-oswald text-textNofile xxl:text-[1.125rem]">
                    Coach
                  </h4>
                  <p class="text-textGray xxl:text-[1.125rem]">Ross Fernandez</p>
                </div>
                <div class="min-w-[100px]">
                  <h4 class="pb-[.125rem] font-oswald text-textNofile xxl:text-[1.125rem]">Date</h4>
                  <p class="text-textGray xxl:text-[1.125rem]">12-09-2023</p>
                </div>
                <div class="min-w-[100px]">
                  <h4 class="pb-[.125rem] font-oswald text-textNofile xxl:text-[1.125rem]">
                    From-To
                  </h4>
                  <p class="text-textGray xxl:text-[1.125rem]">15:00-17:00</p>
                </div>
              </div>
              <button
                type="submit"
                class="font-oswald flex flex-col w-fit text-[1rem] relative group sm:mt-0"
              >
                <span
                  class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-bgColorDark z-[1] ease-in duration-[.15s] delay-[.05s] md:py-[.375rem] md:px-[1.125rem] md:text-[1.125rem]"
                  >Cancel</span
                >
                <span
                  class="font-[600] w-[0px] py-[.25rem] text-transparent bg-bgColorDark border-y-[1px] border-transparent absolute group-hover:w-[100%] group-hover:px-[1.125rem] ease-in duration-[.2s] md:py-[.375rem] md:group-hover:px-[1.125rem] md:text-[1.125rem]"
                  >Cancel</span
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-text-fill-color: #e1e1e1;
  transition: background-color 10000s ease-in-out 0s;
}

input[type=file], /* FF, IE7+, chrome (except button) */
input[type=file]::-webkit-file-upload-button {
  /* chromes and blink button */
  cursor: pointer;
}

select {
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
}
</style>
