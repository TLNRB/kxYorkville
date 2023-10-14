<script setup>
import { ref } from 'vue'
/* ----- Import stores ----- */
import { useStoreCoaches } from '../../stores/storeCoaches.js'
import { useStoreClasses } from '../../stores/storeClasses.js'
const storeClasses = useStoreClasses()
const storeCoaches = useStoreCoaches()

//Prop handling
const { newCoach } = defineProps(['newCoach'])

//Emit handling
const emit = defineEmits(['savedChanges', 'canceledChanges', 'imageSelected'])

//--Temporary data
const error = ref('')
const image = ref('')

//--Handle image selection
const handleChange = (e) => {
  const file = e.target.files[0]
  image.value = file
  emit('imageSelected', image)
}

//--Handle form submission
const saveChanges = () => {
  if (
    !newCoach.name ||
    !newCoach.motto ||
    !newCoach.profession ||
    !storeCoaches.imgName ||
    !storeCoaches.img
  ) {
    error.value = 'Fill in every information or wait for image upload (5s)'
  } else {
    emit('savedChanges')
    error.value = ''
    image.value = ''
  }
}

//--Handle form cancelation
const cancelChanges = () => {
  if ((!storeCoaches.imgName && !storeCoaches.img) || (storeCoaches.imgName && storeCoaches.img)) {
    emit('canceledChanges')
    error.value = ''
    image.value = ''
  } else {
    error.value = 'Wait for image upload'
  }
}
</script>

<template>
  <form
    @submit.prevent="saveChanges"
    class="my-[4rem] mx-auto flex flex-col w-[245px] gap-[1.5rem] p-[1.25rem] bg-bgNormal border-[1px] border-textNofile xs:w-[325px] sm:w-[500px] md:w-[600px] lg:absolute lg:top-[50%] lg:translate-y-[-50%] lg:left-[50%] lg:translate-x-[-50%] lg:my-0 lg:w-[750px]"
  >
    <!-- Name input -->
    <div
      class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
    >
      <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Name</h3>
      <input
        type="text"
        v-model="newCoach.name"
        placeholder="Coach Name..."
        class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
      />
    </div>
    <!-- Image input -->
    <div
      class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
    >
      <div
        class="flex gap-[.375rem] sm:flex-col sm:gap-0 sm:w-[200px] md:flex-row md:gap-[.5rem] lg:flex-col lg:gap-0"
      >
        <h3 class="text-[.875rem] text-textGray sm:text-[1rem]">Image</h3>
        <p class="text-[.75rem] text-textDarker italic lg:text-[.875rem]">(jpg, png)</p>
      </div>
      <label
        class="w-[100%] overflow-hidden bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark cursor-pointer sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
      >
        <span class="text-textDarker">{{ image ? image.name : 'Choose File' }}</span>
        <input type="file" @change="handleChange" />
      </label>
    </div>
    <!-- Motto input -->
    <div
      class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
    >
      <div
        class="flex gap-[.375rem] sm:flex-col sm:gap-0 sm:w-[200px] md:flex-row md:gap-[.5rem] lg:flex-col lg:gap-0"
      >
        <h3 class="text-[.875rem] text-textGray sm:text-[1rem]">Motto</h3>
        <p class="text-[.75rem] text-textDarker italic lg:text-[.875rem]">(short)</p>
      </div>
      <textarea
        v-model="newCoach.motto"
        placeholder="Coach Motto..."
        class="w-[100%] h-[100px] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem] md:h-[75px]"
      />
    </div>
    <!-- Profession -->
    <div
      class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
    >
      <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Profession</h3>
      <select
        v-model="newCoach.profession"
        class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
      >
        <option
          v-for="profession in storeClasses.classes"
          :value="profession.routing"
          :key="profession.name"
        >
          {{ profession.name }}
        </option>
      </select>
    </div>
    <!-- Error -->
    <p
      v-show="error"
      class="text-[.75rem] text-red-500 sm:text-[.875rem] sm:text-center xl:text-[1rem]"
    >
      {{ error }}
    </p>
    <div class="flex justify-center gap-[1rem] mt-auto md:gap-[1.5rem]">
      <!-- Save button -->
      <button type="submit" class="font-oswald flex flex-col w-fit text-[1rem] relative group">
        <span
          class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-bgColorDark z-[1] ease-in duration-[.15s] delay-[.05s] md:py-[.375rem] md:px-[1.125rem] md:text-[1.125rem]"
          >Add</span
        >
        <span
          class="font-[500] w-[0px] py-[.25rem] text-transparent bg-bgColorDark border-y-[1px] border-transparent absolute group-hover:w-[100%] group-hover:px-[1.125rem] ease-in duration-[.2s] md:py-[.375rem] md:group-hover:px-[1.125rem] md:text-[1.125rem]"
          >Add</span
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
</template>

<style scoped>
textarea {
  resize: none;
}

input[type='file'] {
  display: none;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

select {
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
}

::placeholder {
  color: #606060;
}
</style>
