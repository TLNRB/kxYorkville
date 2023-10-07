<script setup>
import { ref } from 'vue'

// Prop handling
const { inputs, title } = defineProps(['inputs', 'title'])
</script>

<template>
  <section class="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] my-[2rem]">
    <div class="w-[225px] xs:w-[300px] sm:w-[450px] md:w-[600px] lg:w-[750px]">
      <!-- Form -->
      <form>
        <h2 class="mb-[1rem] text-[1.25rem] text-textGray font-[600] text-center sm:text-[1.5rem]">
          {{ title }}
        </h2>
        <div
          class="flex flex-col mb-[1.5rem] gap-[1.5rem] p-[1.25rem] bg-bgNormal border-[1px] border-primaryColor sm:gap-[2rem]"
        >
          <!-- Inputs -->
          <div
            v-for="input in inputs"
            :key="input"
            class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
          >
            <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">
              {{ input.title }}
            </h3>
            <input
              type="text"
              :value="input.value"
              class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
            />
          </div>
        </div>
      </form>
      <div class="flex justify-center gap-[1rem] md:gap-[1.5rem]">
        <button class="font-oswald flex flex-col w-fit text-[1rem] relative group">
          <span
            class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-bgColorDark z-[1] ease-in duration-[.15s] delay-[.05s] md:py-[.375rem] md:px-[1.125rem] md:text-[1.125rem]"
            >Save</span
          >
          <span
            class="font-[500] w-[0px] py-[.25rem] text-transparent bg-bgColorDark border-y-[1px] border-transparent absolute group-hover:w-[100%] group-hover:px-[1.125rem] ease-in duration-[.2s] md:py-[.375rem] md:group-hover:px-[1.125rem] md:text-[1.125rem]"
            >Save</span
          >
        </button>
        <button type="submit" class="font-oswald flex flex-col w-fit text-[1rem] relative group">
          <span
            class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-bgColorDark z-[1] ease-in duration-[.15s] delay-[.05s] md:py-[.375rem] md:px-[1.125rem] md:text-[1.125rem]"
            >Cancel</span
          >
          <span
            class="font-[500] w-[0px] py-[.25rem] text-transparent bg-bgColorDark border-y-[1px] border-transparent absolute group-hover:w-[100%] group-hover:px-[1.125rem] ease-in duration-[.2s] md:py-[.375rem] md:group-hover:px-[1.125rem] md:text-[1.125rem]"
            >Cancel</span
          >
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
