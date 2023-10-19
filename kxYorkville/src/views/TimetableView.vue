<script setup>
import { ref, reactive, computed, watch } from 'vue'
/* ----- Import components ----- */
import Timetable from '../components/TimetablePage/Timetable.vue'
import Title from '../components/UI/Title.vue'
/* ----- Import store ----- */
import { useStoreTimetable } from '../stores/storeTimetable.js'
import { useStoreUserService } from '../stores/storeUserService.js'
import { useStoreBookings } from '../stores/storeBookings.js'
const storeUserService = useStoreUserService()
const storeTimetable = useStoreTimetable()
const storeBookings = useStoreBookings()

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
// Get today's day and month and week day
const todayDay = today.getDate()
const todayMonth = monthNames[today.getMonth()]
const weekDay = weekdays[today.getDay()]
// Make today's day and month active as default
const clickedDay = ref(todayDay)
const clickedMonth = ref(todayMonth)

// Define an array of days that will be displayed
const days = [{ date: todayDay, month: todayMonth, weekDay: weekDay, active: true }]
// Loop through the next 6 days after todays date
for (let i = 1; i <= 6; i++) {
  const nextDay = new Date()
  // Get the next day's date
  nextDay.setDate(todayDay + i)
  // Get the next day's day and month and week day
  const nextDayOfMonth = nextDay.getDate()
  const nextMonth = monthNames[nextDay.getMonth()]
  const weekDay = weekdays[nextDay.getDay()]
  // Push the next day's data to the days array
  days.push({ date: nextDayOfMonth, month: nextMonth, weekDay: weekDay, active: false })
}
/*----- Timetable data handling -----*/
const filteredTimetable = ref(null)
// Wait for the timetable data to be fetched
const timetableDataFetch = computed(() => {
  // Return todays classes based on the weekday from the timetable
  return (filteredTimetable.value = storeTimetable.days[today.getDay()]) // returning this value helps with loading the page first time
})

// Watch for changes in data fetching
watch(timetableDataFetch, (newValue) => {
  // Set the data when the data is fetched
  filteredTimetable.value = newValue
})

const handleTimetableFilter = (weekday, date, month) => {
  // Make the clicked day active for styling
  days.forEach((day) => (day.date === date ? (day.active = true) : (day.active = false)))
  // Display the clicked day's data
  clickedDay.value = date
  clickedMonth.value = month
  // Filter the timetable days based on the clicked day
  filteredTimetable.value = storeTimetable.days.find((day) => day.day === weekday)
}

/*===== Booking handling =====*/
const addBooking = (className, from) => {
  const newBooking = reactive({
    class: className,
    day: clickedDay.value,
    from: from
  })
  storeBookings.addBooking(newBooking, storeUserService.userAuth.id)
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
          v-for="day in days"
          :key="day.date"
          class="w-[80px] py-[.375rem] flex flex-col justify-center items-center rounded-[8px] cursor-pointer bg-bgHoverDark group duration-[.2s] ease-in-out md:w-[85px] lg:w-[100px] xxl:w-[120px] xxxxl:w-[135px]"
          :class="[day.active ? 'bg-primaryColor ' : '']"
          @click="handleTimetableFilter(day.weekDay, day.date, day.month)"
        >
          <p
            class="font-oswald text-[.75rem] text-bgColorLightest group-hover:text-textLight duration-[.2s] ease-in-out md:text-[1rem] xxl:text-[1.125rem] xxxxl:text-[1.25rem]"
            :class="[day.active ? 'text-textLight ' : '']"
          >
            {{ day.weekDay }}
          </p>
          <p
            class="text-[3.5rem] leading-none text-textGray group-hover:text-textLight duration-[.2s] ease-in-out md:text-[4rem] xxl:text-[5rem] xxxxl:text-[6rem]"
            :class="[day.active ? 'text-textLight ' : '']"
          >
            {{ day.date }}
          </p>
        </div>
      </div>
      <h2
        class="mt-[4rem] mb-[1rem] flex justify-center items-center text-[2rem] font-[500] text-primaryColor sm:text-[2rem] sm:mb-[2rem] lg:text-[2.5rem] xxxxl:text-[3rem]"
      >
        {{ clickedMonth }} {{ clickedDay }}
      </h2>
      <p
        v-if="!storeUserService.userAuth.id"
        class="mb-[2rem] text-center text-textNofile italic font-[500] sm:text-[1.125rem] lg:text-[1.25rem]"
      >
        Login to sign up for classes
      </p>
      <!-- Timetable -->
      <div class="mb-[4rem] flex flex-col gap-[1rem] md:mb-[6rem] lg:gap-[1.5rem]">
        <Timetable
          v-for="singleClass in filteredTimetable?.classes"
          :key="singleClass.id"
          :singleClass="singleClass"
          :storeUserService="storeUserService"
          @addBooking="addBooking"
        />
      </div>
    </section>
  </main>
</template>

<style scoped></style>
