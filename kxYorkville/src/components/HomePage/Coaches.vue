<script setup>
import { RouterLink } from 'vue-router'
/* ----- Import components ----- */
import Title from '../../components/UI/Title.vue'

//Prop handling
const { coachesDB } = defineProps(['coachesDB'])
</script>

<template>
  <section class="py-[4rem] px-[1rem] sm:px-[1.5rem] md:px-[2rem] xxl:py-[6rem] xxxxl:px-[4rem]">
    <Title content="coaches" />
    <div class="flex flex-wrap justify-center items-center gap-[2rem] my-[4rem] xxxxl:gap-[2rem]">
      <RouterLink
        :to="`/coach-${coaches.route}`"
        class="relative w-[225px] h-[125px] flex flex-col justify-between py-[.75rem] px-[1rem] bg-cover bg-center-top-mid bg-no-repeat brightness-[85%] border-[1px] border-bgColorDark cursor-pointer drop-shadow-xl group xs:w-[275px] xs:h-[160px] lg:w-[300px] lg:h-[175px] xxl:w-[350px] xxl:h-[200px] xxl:py-[1rem] xxl:px-[1.25rem] xxxxl:w-[375px] xxxxl:h-[225px]"
        :style="`background-image: url('${coaches.img}')`"
        v-for="coaches in coachesDB"
        :key="coaches.id"
      >
        <p
          class="font-oswald text-[.875rem] text-primaryColor drop-shadow-lg xs:text-[1rem] xxl:text-[1.125rem]"
        >
          {{ coaches.profession }}
        </p>
        <h4 class="text-[1.125rem] font-[500] drop-shadow-lg xxl:text-[1.25rem]">
          {{ coaches.name }}
        </h4>
        <div
          class="absolute left-0 top-0 w-[0px] h-[124px] py-[.75rem] flex justify-center items-center text-transparent bg-bgColorDark text-[1.25rem] group-hover:w-[100%] group-hover:text-textLight group-hover:px-[1.125rem] ease-in duration-[.2s] xs:h-[159px] lg:h-[174px] xxl:h-[199px] xxxxl:h-[224px]"
        >
          <font-awesome-icon
            class="text-[2rem] xxl:text-[2.5rem]"
            :icon="['fas', 'arrow-right-long']"
          />
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped></style>
