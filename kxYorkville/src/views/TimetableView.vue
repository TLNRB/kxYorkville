<script setup>
import { ref, onMounted } from 'vue'
/* ----- Import components ----- */
import Timetable from '../components/TimetablePage/Timetable.vue'
import Title from '../components/UI/Title.vue'
/* ----- Import Database ----- */
import timetableDB from '../data/timetableDB.js'

/*----- Date displayer data handling -----*/
// Define an array of month names
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

// Define an array of weekdays
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Get today's date
const today = new Date()
const todayDay = today.getDate()
const todayMonth = monthNames[today.getMonth()]
const weekDay = weekdays[today.getDay()]
const clcikedDay = ref(todayDay)
const clcikedMonth = ref(todayMonth)

const nextDays = [{ date: todayDay, month: todayMonth, weekDay: weekDay }]
for (let i = 1; i <= 6; i++) {
  const nextDay = new Date()
  nextDay.setDate(todayDay + i)

  const nextDayOfMonth = nextDay.getDate()
  const nextMonth = monthNames[nextDay.getMonth()]
  const weekDay = weekdays[nextDay.getDay()]

  nextDays.push({ date: nextDayOfMonth, month: nextMonth, weekDay: weekDay })
}

//Timetable data handling
const filteredTimetable = ref(timetableDB[0])
const handleTimetableFilter = (day, date, month) => {
  clcikedDay.value = date
  clcikedMonth.value = month
  filteredTimetable.value = timetableDB.find((timetable) => timetable.day === day)
}
</script>

<template>
  <main
    class="pt-[6rem] px-[1rem] mb-[2rem] sm:mb-[3.5rem] md:pt-[8rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[4rem] xxl:pt-[8rem] xxl:mb-[4rem] xxxxl:pt-[10rem]"
  >
    <Title class="mx-auto md:ml-0" content="Timetable" />
    <section class="mt-[3rem]">
      <!-- Date displayer -->
      <div
        class="flex flex-wrap justify-center items-center gap-[.5rem] md:gap-[.75rem] lg:gap-[1rem] xxxxl:gap-[1.25rem]"
      >
        <div
          v-for="day in nextDays"
          :key="day.id"
          class="w-[80px] py-[.375rem] flex flex-col justify-center items-center border-[2px] rounded-[8px] cursor-pointer bg-bgHoverDark hover:bg-primaryColor group duration-[.2s] ease-in-out md:w-[85px] lg:w-[100px] xxl:w-[120px] xxxxl:w-[135px]"
          :class="day.date === todayDay ? 'border-primaryColor' : 'border-transparent'"
          @click="handleTimetableFilter(day.weekDay, day.date, day.month)"
        >
          <p
            class="font-oswald text-[.75rem] text-bgColorLightest group-hover:text-textLight duration-[.15s] ease-in-out md:text-[1rem] xxl:text-[1.125rem] xxxxl:text-[1.25rem]"
          >
            {{ day.weekDay }}
          </p>
          <p
            class="text-[3.5rem] leading-none text-textGray group-hover:text-textLight duration-[.15s] ease-in-out md:text-[4rem] xxl:text-[5rem] xxxxl:text-[6rem]"
          >
            {{ day.date }}
          </p>
        </div>
      </div>
      <h2
        class="my-[2rem] flex justify-center items-center text-[1.5rem] font-[500] text-primaryColor sm:text-[2rem] xxxxl:text-[2.5rem]"
      >
        {{ clcikedMonth }} {{ clcikedDay }}
      </h2>
      <!-- Timetable -->
      <div>
        <Timetable
          v-for="singleClass in filteredTimetable.classes"
          :key="singleClass.id"
          :singleClass="singleClass"
        />
      </div>
    </section>
  </main>
</template>

<style scoped></style>
