<script setup>
import { computed } from 'vue'
import { useDateFormat } from '@vueuse/core'
/*----- Importing store -----*/
import { useStoreUserService } from '../../../stores/storeUserService.js'
const storeUserService = useStoreUserService()

//Prop handling
const { review } = defineProps(['review'])

//-- Date formatting
const dateFormatted = computed(() => {
  // Converting date from string to number
  let date = new Date(parseInt(review.date))
  let formattedDate = useDateFormat(date, 'MM-DD-YYYY')
  return formattedDate.value
})
</script>

<template>
  <div
    class="w-[230px] flex flex-col gap-[2rem] p-[1.5rem] bg-bgNormal border-[1px] border-textDarker rounded-[15px] drop-shadow-xl xs:w-[250px] sm:w-[350px] sm:p-[2rem] md:rounded-[20px] md:w-[400px] xxxxl:w-[500px]"
  >
    <p class="text-[.875rem] sm:text-[1rem]">
      {{ review.review }}
    </p>
    <div class="flex items-center gap-[.75rem]">
      <div>
        <button
          v-if="!review.userImg"
          class="w-[30px] h-[30px] rounded-full bg-primaryColor flex justify-center items-center sm:w-[40px] sm:h-[40px]"
        >
          <font-awesome-icon class="text-[1rem]" :icon="['fas', 'user']" />
        </button>
        <button
          v-else
          class="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-cover bg-center-top-mid bg-no-repeat sm:w-[40px] sm:h-[40px]"
          :style="`background-image: url('${review.userImg}')`"
        ></button>
      </div>
      <p class="font-oswald xs:text-[1.125rem]">{{ review.username }}</p>
      <p
        class="ml-auto font-oswald text-textNofile text-[.875rem] translate-y-[1px] xs:text-[1rem] xs:translate-y-0"
      >
        {{ dateFormatted }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.modal {
  background-color: #181818bb;
  backdrop-filter: blur(5px);
}
</style>
