<script setup>
import { ref } from 'vue'

// Prop handling
const { newGeneral, title } = defineProps(['newGeneral', 'title'])

//Emit handling
const emit = defineEmits(['savedChanges', 'canceledChanges'])

//--Temporary data
const error = ref('')

//--Handle form submission
const saveChanges = () => {
  if (
    !newGeneral.phone ||
    !newGeneral.email ||
    !newGeneral.address ||
    !newGeneral.version ||
    !newGeneral.mondayFriday ||
    !newGeneral.saturday ||
    !newGeneral.sunday
  ) {
    console.log('test in')
    error.value = 'Fill in every information'
  } else {
    emit('savedChanges')
    error.value = ''
  }
}

//--Handle form cancelation
const cancelChanges = () => {
  emit('canceledChanges')
  error.value = ''
}
</script>

<template>
  <div class="w-[100%] sm:w-[500px] md:w-[650px] lg:w-[800px] xxxl:w-auto">
    <h2 class="mb-[1rem] text-center text-[1.25rem] text-textNofile font-[600]">
      General Information
    </h2>
    <form
      @submit.prevent="saveChanges"
      class="flex flex-col mb-[1.5rem] gap-[1.5rem] p-[1.25rem] bg-bgNormal border-[1px] border-textNofile sm:gap-[2rem]"
    >
      <div
        class="flex flex-wrap justify-center gap-[3rem] pt-[1.5rem] sm:gap-[4rem] lg:gap-[5rem] xxxl:pb-[1.5rem]"
      >
        <!-- Contact & Version -->
        <div
          class="w-[100%] flex flex-col gap-[1.5rem] sm:w-[450px] md:w-[600px] lg:gap-[2rem] lg:w-[750px]"
        >
          <!-- Phone -->
          <div
            class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
          >
            <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Phone</h3>
            <input
              type="text"
              v-model="newGeneral.phone"
              placeholder="Phone Number..."
              class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
            />
          </div>
          <!-- Email -->
          <div
            class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
          >
            <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Email</h3>
            <input
              type="email"
              v-model="newGeneral.email"
              placeholder="Email..."
              class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
            />
          </div>
          <!-- Address -->
          <div
            class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
          >
            <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Address</h3>
            <input
              type="text"
              v-model="newGeneral.address"
              placeholder="Address..."
              class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
            />
          </div>
          <!-- Version -->
          <div
            class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
          >
            <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Version</h3>
            <input
              type="text"
              v-model="newGeneral.version"
              placeholder="Website version..."
              class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
            />
          </div>
        </div>
        <!-- Opening -->
        <div
          class="w-[100%] flex flex-col mb-[1.5rem] gap-[1.5rem] sm:gap-[2rem] sm:w-[450px] md:w-[600px] lg:w-[750px]"
        >
          <!-- Monday-Friday -->
          <div
            class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
          >
            <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Monday-Friday</h3>
            <input
              type="text"
              v-model="newGeneral.mondayFriday"
              placeholder="Opening hours..."
              class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
            />
          </div>
          <!-- Saturday -->
          <div
            class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
          >
            <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Saturday</h3>
            <input
              type="text"
              v-model="newGeneral.saturday"
              placeholder="Opening hours..."
              class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
            />
          </div>
          <!-- Sunday -->
          <div
            class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
          >
            <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Sunday</h3>
            <input
              type="text"
              v-model="newGeneral.sunday"
              placeholder="Opening hours..."
              class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
            />
          </div>
        </div>
      </div>
      <!-- Error -->
      <p
        v-show="error"
        class="text-[.75rem] italic text-red-500 sm:text-[.875rem] sm:text-center xl:text-[1rem]"
      >
        {{ error }}
      </p>
      <div class="flex justify-center gap-[1rem] md:gap-[1.5rem]">
        <!-- Save button -->
        <button type="submit" class="font-oswald flex flex-col w-fit text-[1rem] relative group">
          <span
            class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-bgColorDark z-[1] ease-in duration-[.15s] delay-[.05s] md:py-[.375rem] md:px-[1.125rem] md:text-[1.125rem]"
            >Save</span
          >
          <span
            class="font-[500] w-[0px] py-[.25rem] text-transparent bg-bgColorDark border-y-[1px] border-transparent absolute group-hover:w-[100%] group-hover:px-[1.125rem] ease-in duration-[.2s] md:py-[.375rem] md:group-hover:px-[1.125rem] md:text-[1.125rem]"
            >Save</span
          >
        </button>
        <!-- Cancel button -->
        <button
          type="button"
          @click="cancelChanges"
          class="font-oswald flex flex-col w-fit text-[1rem] relative group"
        >
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
    </form>
  </div>
</template>

<style scoped>
::placeholder {
  color: #606060;
}
</style>
