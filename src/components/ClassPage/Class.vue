<script setup>
import { RouterLink } from 'vue-router'
/* ----- Import assets ----- */
import Title from '../UI/Title.vue'
import Button from '../UI/Button.vue'

//Prop handling
const { singleClass } = defineProps(['singleClass'])
</script>

<template>
  <main
    class="flex flex-col pt-[6rem] px-[1rem] md:pt-[8rem] sm:px-[1.5rem] md:px-[2rem] lg:flex-row lg:px-[4rem] xxl:pt-[8rem] xxxxl:pt-[10rem]"
  >
    <section class="lg:w-[55%] xl:w-[50%] text-textGray">
      <Title class="text-center" :content="singleClass?.name" />
      <p class="py-[4rem] lg:text-[1.125rem] xl:text-[1.25rem] xl:py-[5rem]">
        {{ singleClass?.description }}
      </p>
      <div
        class="flex flex-col gap-[2rem] sm:gap-[3rem] md:flex-row lg:flex-col lg:justify-start xxl:flex-row"
      >
        <div class="flex gap-[2rem] sm:gap-[3rem]">
          <div class="w-[130px] sm:w-[150px] xl:w-[160px]">
            <h4
              class="mb-[.375rem] font-oswald font-[500] text-bgColorLightest sm:text-[1.25rem] xl:mb-[.5rem] xl:text-[1.375rem]"
            >
              Intensity
            </h4>
            <p class="sm:text-[1.125rem] xl:text-[1.25rem]">
              {{ singleClass?.intensity }}
            </p>
          </div>
          <div class="w-[130px] sm:w-[150px] xl:w-[160px]">
            <h4
              class="mb-[.375rem] font-oswald font-[500] text-bgColorLightest sm:text-[1.25rem] xl:mb-[.5rem] xl:text-[1.375rem]"
            >
              Duration
            </h4>
            <p class="sm:text-[1.125rem] xl:text-[1.25rem]">{{ singleClass?.duration }} min</p>
          </div>
        </div>
        <div class="flex gap-[2rem] sm:gap-[3rem]">
          <div class="w-[130px] sm:w-[150px] xl:w-[160px]">
            <h4
              class="mb-[.375rem] font-oswald font-[500] text-bgColorLightest sm:text-[1.25rem] xl:mb-[.5rem] xl:text-[1.375rem]"
            >
              Class
            </h4>
            <p class="sm:text-[1.125rem] xl:text-[1.25rem]">{{ singleClass?.classType }}</p>
          </div>
          <div class="w-[130px] sm:w-[150px] xl:w-[160px]">
            <h4
              class="mb-[.375rem] font-oswald font-[500] text-bgColorLightest sm:text-[1.25rem] xl:mb-[.5rem] xl:text-[1.375rem]"
            >
              Instructors
            </h4>
            <p
              v-for="coach in singleClass?.coaches"
              :key="coach"
              class="leading-snug cursor-pointer hover:text-primaryColor duration-[.15s] ease-in-out sm:text-[1.125rem] xl:text-[1.25rem] xl:leading-tight"
            >
              <RouterLink :to="`coach-${coach.replace(/ /g, '-').toLowerCase()}`">{{
                coach
              }}</RouterLink>
            </p>
          </div>
        </div>
      </div>
      <RouterLink to="/timetable">
        <Button class="my-[4rem] sm:mt-[6rem] md:mt-[4rem] xl:my-[5rem]" content="Timetable" />
      </RouterLink>
    </section>
    <div
      class="relative flex justify-center items-center mt-[2rem] mb-[4rem] sm:mb-[6rem] lg:w-[45%] lg:my-[6rem] xl:w-[50%] xxxxl:my-[7rem]"
    >
      <div
        class="absolute w-[200px] h-[200px] rounded-full border-[2px] scale-[112.5%] border-primaryColor z-[2] xs:w-[250px] xs:h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] xl:w-[400px] xl:h-[400px] xl:scale-[110%] xxl:w-[450px] xxl:h-[450px] xxxl:w-[500px] xxxl:h-[500px] xxxxl:w-[600px] xxxxl:h-[600px]"
      ></div>
      <div
        class="bg-cover bg-center-top-mid bg-no-repeat relative w-[200px] h-[200px] p-[.5rem] rounded-full xs:w-[250px] xs:h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] xl:w-[400px] xl:h-[400px] xxl:w-[450px] xxl:h-[450px] xxxl:w-[500px] xxxl:h-[500px] xxxxl:w-[600px] xxxxl:h-[600px]"
        :style="`background-image: url('${singleClass?.img}')`"
      ></div>
    </div>
  </main>
</template>

<style scoped></style>
