<script setup>
import { ref, reactive } from 'vue'
/* ----- Import assets ----- */
import Button from '../UI/Button.vue'
//--Prop handling
const { singleCoach } = defineProps(['singleCoach'])

/*----- Form handling -----*/
// Form data
const formData = reactive({
  name: '',
  phone: '',
  email: ''
})

// Temporary data
const error = ref('')
const message = ref('')

// Form validation
const submitForm = () => {
  if (!formData.name && !formData.phone) {
    error.value = 'Please fill out the information'
  } else if (!formData.name && !formData.email) {
    error.value = 'Please fill out the information'
  } else if (!formData.name) {
    error.value = 'Please enter your name'
  } else if (!formData.phone && !formData.email) {
    error.value = 'Please enter your phone number or email'
  } else {
    message.value = 'Thank you for your message!'
    error.value = ''
    formData.name = ''
    formData.phone = ''
    formData.email = ''
    console.log('Form submitted')
  }
}
</script>

<template>
  <main
    class="flex flex-col pt-[6rem] px-[1rem] mb-[2rem] sm:mb-[3.5rem] md:pt-[8rem] sm:px-[1.5rem] md:px-[2rem] lg:flex-row lg:justify-between lg:px-[4rem] xxl:pt-[8rem] xxl:mb-[4rem] xxxxl:pt-[10rem]"
  >
    <section class="w-[100%] mb-[4rem] lg:w-[48%] sm:mb-[6rem] lg:mb-0">
      <h1
        class="mx-auto leading-none tracking-tighter text-center translate-y-[-1rem] text-[4.5rem] font-semibold text-textDark xs:text-[5rem] sm:text-[9rem] md:text-[13rem] md:translate-y-[-3rem] lg:text-[11rem] lg:translate-y-[-1rem] lg:ml-0 lg:text-left lg:translate-x-[-4rem] xl:text-[12rem] xl:translate-y-[-1.5rem] xxl:text-[14rem] xxxl:text-[16rem] xxxxl:text-[20rem] xxxxl:translate-y-[-2rem]"
      >
        coach
      </h1>
      <p
        class="mt-[1rem] font-oswald text-[1.5rem] text-textGray leading-tight sm:text-[2rem] md:mt-0 md:text-[2.5rem] lg:mt-[2rem] xxl:text-[3rem] xxxxl:text-[4rem]"
      >
        "{{ singleCoach?.motto }}"
      </p>
      <div
        class="mt-[2rem] flex flex-col gap-[2rem] sm:mt-[3rem] md:mt-[4rem] xxl:mt-[4rem] xxxxl:mt-[5rem]"
        :class="
          singleCoach?.profession !== 'Body Building'
            ? 'sm:flex-row sm:items-center sm:gap-[3rem] xxl:gap-[4rem] xxxxl:mt-[5rem]'
            : 'sm:gap-[3rem] xxxxl:gap-[4rem]'
        "
      >
        <p
          class="text-primaryColor font-[500] sm:text-[1.125rem] md:text-[1.25rem] xxl:text-[1.5rem] xxxxl:text-[1.75rem]"
        >
          {{ singleCoach?.profession }}
        </p>
        <form
          @submit.prevent="submitForm"
          v-if="singleCoach?.profession === 'Body Building'"
          class="w-[100%] flex flex-col sm:gap-[.25rem] md:gap-[.125rem] xxxxl:gap-[.25rem]"
        >
          <div
            class="flex flex-col sm:flex-row sm:gap-[3rem] md:gap-[4rem] lg:flex-col lg:gap-[.125rem] xl:flex-row xl:gap-[4rem] xxxxl:gap-[5rem]"
          >
            <p
              class="min-w-fit text-[1.125rem] text-textNofile font-[500] xs:text-[1.25rem] md:text-[1.5rem] xxxl:text-[1.75rem] xxxxl:text-[2rem]"
            >
              Hi my name is
            </p>
            <input
              type="text"
              v-model="formData.name"
              placeholder="First and Last..."
              class="bg-transparent text-[1.125rem] font-[500] outline-none xs:text-[1.25rem] sm:w-[100%] md:text-[1.5rem] xxxl:text-[1.75rem] xxxxl:text-[2rem]"
            />
          </div>
          <div
            class="flex flex-col text-[1.125rem] text-textNofile xs:text-[1.25rem] sm:flex-row sm:gap-[.375rem] md:gap-[.5rem] md:text-[1.5rem] xxxl:text-[1.75rem] xxxxl:text-[2rem]"
          >
            <p class="font-[500]">I'm interested in</p>
            <p class="font-[500]">working with you</p>
          </div>
          <div
            class="flex flex-col sm:flex-row sm:gap-[3rem] md:gap-[4rem] lg:gap-[3rem] xl:gap-[4rem] xxxxl:gap-[5rem]"
          >
            <p
              class="min-w-fit text-[1.125rem] text-textNofile font-[500] xs:text-[1.25rem] md:text-[1.5rem] xxxl:text-[1.75rem] xxxxl:text-[2rem]"
            >
              contact me on
            </p>
            <input
              type="phone"
              v-model="formData.phone"
              placeholder="Phone..."
              class="bg-transparent text-[1.125rem] font-[500] outline-none xs:text-[1.25rem] sm:w-[100%] md:text-[1.5rem] xxxl:text-[1.75rem] xxxxl:text-[2rem]"
            />
          </div>
          <div
            class="flex flex-col sm:flex-row sm:gap-[3rem] md:gap-[4rem] lg:flex-col lg:gap-[.125rem] xl:flex-row xl:gap-[4rem] xxxxl:gap-[5rem]"
          >
            <p
              class="min-w-fit text-[1.125rem] text-textNofile font-[500] xs:text-[1.25rem] md:text-[1.5rem] xxxl:text-[1.75rem] xxxxl:text-[2rem]"
            >
              or through
            </p>
            <input
              type="email"
              v-model="formData.email"
              placeholder="Email..."
              class="bg-transparent text-[1.125rem] font-[500] outline-none xs:text-[1.25rem] sm:w-[100%] md:text-[1.5rem] xxxl:text-[1.75rem] xxxxl:text-[2rem]"
            />
          </div>
          <!-- Error -->
          <p
            v-show="error"
            class="mt-[1rem] text-[.75rem] text-red-500 sm:text-[.875rem] md:mt-[1.5rem] xl:text-[1rem]"
          >
            {{ error }}
          </p>
          <div class="flex flex-col gap-[2rem] mt-[2rem]">
            <button
              type="submit"
              class="font-oswald flex flex-col w-fit text-[1rem] relative group overflow-hidden"
            >
              <span
                class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-bgColorDark z-[1] ease-in duration-[.15s] delay-[.05s] md:py-[.375rem] md:px-[1.125rem] md:text-[1.125rem] xxl:text-[1.25rem] xxxxl:text-[1.5rem]"
                >Send</span
              >
              <span
                class="font-[500] w-[0px] py-[.25rem] text-transparent bg-bgColorDark border-y-[1px] border-transparent absolute group-hover:w-[100%] group-hover:px-[1rem] ease-in duration-[.2s] md:py-[.375rem] md:group-hover:px-[1.125rem] md:text-[1.125rem] xxl:text-[1.25rem] xxxxl:text-[1.5rem]"
                >Send</span
              >
            </button>
            <p v-show="message" class="text-[.75rem] italic sm:text-[.875rem] xl:text-[1rem]">
              {{ message }}
            </p>
          </div>
        </form>
        <button
          v-else
          class="font-oswald flex flex-col w-fit text-[1rem] relative group overflow-hidden"
        >
          <span
            class="font-[500] py-[.375rem] px-[1.125rem] border-[1px] border-bgColorDark z-[1] ease-in duration-[.15s] delay-[.05s] xs:text-[1.125rem] md:py-[.5rem] md:px-[1.25rem] md:text-[1.25rem] xxl:text-[1.5rem] xxxxl:text-[1.75rem]"
            >Schedule class</span
          >
          <span
            class="font-[500] w-[0px] py-[.375rem] text-transparent bg-bgColorDark border-y-[1px] border-transparent absolute group-hover:w-[100%] group-hover:px-[1.125rem] ease-in duration-[.2s] xs:text-[1.125rem] md:py-[.5rem] md:group-hover:px-[1.25rem] md:text-[1.25rem] xxl:text-[1.5rem] xxxxl:text-[1.75rem]"
            >Schedule class</span
          >
        </button>
      </div>
    </section>
    <section class="w-[100%] lg:my-auto lg:w-[48%]">
      <div
        class="w-[100%] h-[300px] bg-cover bg-no-repeat bg-center-top-mid brightness-[90%] rounded-[15px] drop-shadow-2xl xs:h-[350px] sm:h-[400px] md:h-[600px] md:rounded-l-[20px] md:rounded-br-[20px] lg:rounded-tl-0 lg:h-[750px] xxl:h-[850px] xxxl:h-[900px] xxxxl:h-[1000px]"
        :style="`background-image: url('${singleCoach?.img}')`"
      >
        <h2
          class="absolute top-0 right-[50%] translate-x-[50%] text-center leading-tight py-[.5rem] px-[1.25rem] bg-bgDark font-[600] text-textGray rounded-b-[15px] brightness-[110%] sm:py-[.75rem] sm:px-[1.5rem] sm:text-[1.5rem] md:text-[2rem] md:rounded-b-[17px] lg:text-left lg:rounded-br-[0px] lg:right-0 lg:translate-x-0 xxxl:text-[2.5rem] xxxxl:text-[3rem]"
        >
          {{ singleCoach?.name }}
        </h2>
      </div>
    </section>
  </main>
</template>

<style scoped>
::placeholder {
  color: #e1e1e1;
}
</style>
