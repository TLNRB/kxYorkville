<script setup>
import { ref, reactive, onMounted } from 'vue'
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
const clickedWeekday = ref(weekDay)

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

/*===== Timetable data handling =====*/
const filteredTimetable = ref('')

const filterTimetableDays = (weekday) => {
  return (filteredTimetable.value = storeTimetable.days.find((day) => day.day === weekday))
}

const handleTimetableFilter = (weekday, date, month) => {
  // Make the clicked day active for styling
  days.forEach((day) => (day.date === date ? (day.active = true) : (day.active = false)))
  // Display and store the clicked day's data
  clickedDay.value = date
  clickedMonth.value = month
  clickedWeekday.value = weekday
  // Filter the timetable days based on the clicked day
  filterTimetableDays(weekday)
}

/*===== Booking handling =====*/
const addBooking = (className, coach, from, to, classID) => {
  let condition = false
  // Check if the user has already booked the class
  storeBookings.userBookings.forEach((booking) => {
    if (booking.day === clickedDay.value && booking.class === className && booking.from === from) {
      condition = true
    }
  })
  // If the user has not booked the class, add the booking
  if (!condition) {
    const newBooking = reactive({
      class: className,
      coach: coach,
      day: clickedDay.value,
      month: clickedMonth.value,
      weekday: clickedWeekday.value,
      from: from,
      to: to,
      timetableID: filteredTimetable.value.id,
      classID: classID
    })
    storeBookings.addBooking(newBooking, storeUserService.userAuth.id)
    storeTimetable.updateTimetableReservedClass(filteredTimetable.value.id, classID, 'reserve')
    filterTimetableDays(clickedWeekday.value)
  }
}

onMounted(() => {
  // Start the interval for checking if the timetable data is loaded
  const intervalId = setInterval(() => {
    if (storeTimetable.days[today.getDay()] === undefined) {
    } else {
      filteredTimetable.value = storeTimetable.days[today.getDay()]
      clearInterval(intervalId) // Stop the interval when the task is completed
    }
  }, 500)
})
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
      <RouterLink
        to="/account"
        v-if="!storeUserService.userAuth.id"
        class="flex justify-center mb-[2rem] text-textNofile italic font-[500] sm:text-[1.125rem] lg:text-[1.25rem]"
      >
        Login to sign up for classes
      </RouterLink>
      <!-- Timetable -->
      <div class="mb-[4rem] flex flex-col gap-[1rem] md:mb-[6rem] lg:gap-[1.5rem]">
        <Timetable
          v-for="(singleClass, index) in filteredTimetable.classes"
          :key="`${filteredTimetable.id}-${index}`"
          :singleClassID="index"
          :timetableID="filteredTimetable.id"
          :singleClass="singleClass"
          :storeUserService="storeUserService"
          :storeBookings="storeBookings"
          @addBooking="addBooking"
        />
      </div>
    </section>
  </main>
</template>

<style scoped></style>
