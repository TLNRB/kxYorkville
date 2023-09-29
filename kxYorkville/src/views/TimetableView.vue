<script setup>
/* ----- Import components ----- */
import Title from '../components/UI/Title.vue'
/* ----- Import Database ----- */
import classesDB from '../data/classesDB'

const dates = [
  {
    id: 1,
    date: '1',
    postFix: 'st',
    day: 'Monday'
  },
  {
    id: 2,
    date: '2',
    postFix: 'nd',
    day: 'Tuesday'
  },
  {
    id: 3,
    date: '13',
    postFix: 'rd',
    day: 'Wednesday'
  },
  {
    id: 4,
    date: '4',
    postFix: 'th',
    day: 'Thursday'
  },
  {
    id: 5,
    date: '5',
    postFix: 'th',
    day: 'Friday'
  },
  {
    id: 6,
    date: '6',
    postFix: 'th',
    day: 'Saturday'
  },
  {
    id: 7,
    date: '7',
    postFix: 'th',
    day: 'Sunday'
  }
]
</script>

<template>
  <main
    class="pt-[6rem] px-[1rem] mb-[2rem] sm:mb-[3.5rem] md:pt-[8rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[4rem] xxl:pt-[8rem] xxl:mb-[4rem] xxxxl:pt-[10rem]"
  >
    <Title class="mx-auto md:ml-0" content="Timetable" />
    <section class="mt-[3rem]">
      <!-- Date displayer -->
      <div class="flex flex-wrap justify-center items-center gap-[.5rem]">
        <div
          v-for="date in dates"
          :key="date.id"
          class="w-[80px] py-[.375rem] flex flex-col justify-center items-center border-[2px] rounded-[8px] cursor-pointer bg-bgHoverDark hover:bg-primaryColor group duration-[.2s] ease-in-out"
          :class="date.date == '1' ? 'border-primaryColor' : 'border-transparent'"
        >
          <p
            class="font-oswald text-[.75rem] text-bgColorLightest group-hover:text-textLight duration-[.15s] ease-in-out"
          >
            {{ date.day }}
          </p>
          <p
            class="text-[3.5rem] leading-none text-textGray group-hover:text-textLight duration-[.15s] ease-in-out"
          >
            {{ date.date }}
          </p>
        </div>
      </div>
      <h2
        class="my-[2rem] flex justify-center items-center text-[1.5rem] font-[500] text-primaryColor"
      >
        November
      </h2>
      <!-- Timetable -->
    </section>
  </main>
</template>

<style scoped></style>
