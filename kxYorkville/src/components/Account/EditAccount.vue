<script setup>
import { ref } from 'vue'
/* ----- Import stores ----- */
import { useStoreUserService } from '../../stores/storeUserServices.js'
const storeUserServices = useStoreUserService()

//Prop handling
const { user } = defineProps(['user'])

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
    !user.username ||
    !user.favouritClass ||
    (!storeUserServices.imgName && storeUserServices.img) ||
    (storeUserServices.imgName && !storeUserServices.img)
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
  if (
    (!storeUserServices.imgName && !storeUserServices.img) ||
    (storeUserServices.imgName && storeUserServices.img)
  ) {
    emit('canceledChanges')
    error.value = ''
    image.value = ''
  } else {
    error.value = 'Wait for image upload'
  }
}
</script>

<template>
  <form @submit.prevent="saveChanges" class="flex flex-col gap-[3rem]">
    <!-- Profile Picture -->
    <div class="max-w-[750px]">
      <h2 class="mb-[1rem] text-[1.25rem] text-textGray font-[600]">Profile Picture</h2>
      <div
        class="flex flex-col gap-[1.25rem] items-center p-[1.25rem] bg-bgNormal border-[1px] border-textNofile xs:flex-row lg:gap-[1.5rem]"
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
              @change="handleChange"
            />
          </div>
          <p
            class="mt-[3rem] font-oswald text-[.875rem] text-textNofile italic sm:text-[1rem] md:text-[.875rem] lg:text-[1rem]"
          >
            {{ image ? image.name : user.imgName }}
          </p>
        </div>
      </div>
    </div>
    <!-- Profile Settings -->
    <div class="max-w-[750px]">
      <h2 class="mb-[1rem] text-[1.25rem] text-textGray font-[600]">Profile Settings</h2>
      <div
        class="flex flex-col gap-[1.5rem] p-[1.25rem] bg-bgNormal border-[1px] border-textNofile sm:gap-[2rem]"
      >
        <!-- Username -->
        <div
          class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
        >
          <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Username</h3>
          <input
            type="text"
            v-model="user.username"
            placeholder="Username..."
            class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
          />
        </div>
        <!-- Favourit Class -->
        <div
          class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
        >
          <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Favourit class</h3>
          <div class="w-[100%] relative">
            <select
              v-model="user.favouritClass"
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
    <!-- Error -->
    <p
      v-show="error"
      class="text-[.75rem] text-red-500 sm:text-[.875rem] sm:text-center xl:text-[1rem]"
    >
      {{ error }}
    </p>
    <div class="flex justify-start gap-[1rem] mt-[-1rem] sm:mt-0 md:mt-[-1rem] md:gap-[1.5rem]">
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
</style>
