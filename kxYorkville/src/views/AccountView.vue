<script setup>
import { ref, reactive, computed } from 'vue'
/*----- Importing components -----*/
import EditAccount from '../components/Account/EditAccount.vue'
import CancelClass from '../components/Account/CancelClass.vue'
/* ----- Import stores ----- */
import { useStoreAuth } from '../stores/storeAuth.js'
import { useStoreUsernames } from '../stores/storeUsernames.js'
import { useStoreUserService } from '../stores/storeUserService.js'
import { useStoreBookings } from '../stores/storeBookings.js'
import { useStoreTimetable } from '../stores/storeTimetable.js'
const storeAuth = useStoreAuth()
const storeUsernames = useStoreUsernames()
const storeUserService = useStoreUserService()
const storeBookings = useStoreBookings()
const storeTimetable = useStoreTimetable()

// Form display
const loginActive = ref(true)
const registerActive = ref(false)
const settingsActive = ref(true)
const reservedActive = ref(false)
const active = 'text-primaryColor border-primaryColor'
const inactive = 'text-textGray border-textGray'

const toggleLogin = () => {
  loginActive.value = true
  registerActive.value = false
}

const toggleRegister = () => {
  loginActive.value = false
  registerActive.value = true
}

const toggleSettings = () => {
  settingsActive.value = true
  reservedActive.value = false
}

const toggleReserved = () => {
  settingsActive.value = false
  reservedActive.value = true
}

//----- Form handling -----//
// Form credentials
const loginCredentials = reactive({
  email: '',
  password: ''
})

const registerCredentials = reactive({
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: ''
})

// Temporary values
let error = ref('')

// Edit handler
const editUserActive = ref(false)

// Form after submiting the form
const onSubmit = () => {
  //Check if the user logs in or registers
  if (loginActive.value) {
    //Check if the form fields are empty
    if (!loginCredentials.email || !loginCredentials.password) {
      storeAuth.error = 'Please fill in all the fields'
      setInterval(() => {
        storeAuth.error = ''
      }, 5000)
    } else {
      storeAuth.loginUser(loginCredentials)
      loginCredentials.email = ''
      loginCredentials.password = ''
      // Disable the edit section for possible editing from prvious user
      editUserActive.value = false
    }
  } else if (registerActive.value) {
    //Check if the form fields are empty
    if (
      !registerCredentials.firstName ||
      !registerCredentials.lastName ||
      !registerCredentials.username ||
      !registerCredentials.email ||
      !registerCredentials.password
    ) {
      storeAuth.error = 'Please fill in all the fields'
      setInterval(() => {
        storeAuth.error = ''
      }, 5000)
    } else {
      // Check if the username already exists
      if (storeUsernames.checkUsername(registerCredentials.username)) {
        error.value = 'Username already exists'
        setInterval(() => {
          error.value = ''
        }, 5000)
      } else {
        storeAuth.registerUser(registerCredentials)
        registerCredentials.firstName = ''
        registerCredentials.lastName = ''
        registerCredentials.username = ''
        registerCredentials.email = ''
        registerCredentials.password = ''
        // Disable the edit section for possible editing from prvious user
        editUserActive.value = false
      }
    }
  }
}

/* ===== User Settings ===== */
//--V-model for coach inputs
const user = reactive({
  username: '',
  favouriteClass: '',
  img: '',
  imgName: ''
})

//--Temporary values
const image = ref(null)
const tempID = ref()

//--Clear values for class inputs
const valueClear = () => {
  ;(user.username = ''),
    (user.favouriteClass = ''),
    (user.img = ''),
    (user.imgName = ''),
    (image.value = null)
}

/*----- Edit Section -----*/
//--Image upload
const handleImageUpload = (file) => {
  image.value = file
  storeUserService.getImageUrl(file.value.name, file.value)
}

//--Toggle edit section
const toggleEdit = () => {
  editUserActive.value = !editUserActive.value
}

//--Edit coach
const editUserSettings = () => {
  toggleEdit()
  // Set the user data
  user.username = storeUserService.userData.username
  user.favouriteClass = storeUserService.userData.favouriteClass
  user.img = storeUserService.userData.img
  user.imgName = storeUserService.userData.imgName
  // Storing the ID temporarily
  tempID.value = storeUserService.userData.id
}

//--Save user editing
const saveEditUserSettings = async () => {
  // Checking if the image changed
  storeUserService.updateImage(tempID.value)
  // Updating the username
  storeUsernames.updateUsername(user.username, tempID.value)
  storeUserService.updateSettings(user, tempID.value)
  valueClear()
  tempID.value = ''
  toggleEdit()
}

//--Close user editing
const closeEditUserSettings = () => {
  storeUserService.closeEditingSettings()
  valueClear()
  tempID.value = ''
  toggleEdit()
}

/* ===== User Bookings Handling ===== */
// Order the bookings by month, day and time
const orderedBookings = computed(() => {
  // Order the bookings by time
  const orderBookings = storeBookings.userBookings.sort((a, b) => {
    return a.classID - b.classID
  })
  // Order the bookings by day
  orderBookings.sort((a, b) => {
    return a.day - b.day
  })
  // Order the bookings by month
  orderBookings.sort((a, b) => {
    return a.month - b.month
  })
  return orderBookings
})

/*===== Delete Booking =====*/
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const deleteClass = ref(0)

//--Toggle delete modal
const toggleDelete = (index) => {
  deleteClass.value = index
}

//--Open Delete Modal
const openDeleteModal = (id) => {
  toggleDelete(id)
}

//--Close Delete Modal
const closeDeleteModal = () => {
  toggleDelete(0)
}

//--Delete booking
const deleteBooking = (bookingID, bookingWeekday, timetableID, classID) => {
  let dayIndex
  // Get the current day index
  for (let i = 0; i < weekdays.length; i++) {
    if (weekdays[i] === bookingWeekday) {
      dayIndex = i
      break
    }
  }
  storeBookings.deleteBooking(bookingID, dayIndex)
  storeTimetable.updateTimetableReservedClass(timetableID, classID, 'delete')
  closeDeleteModal()
}
</script>

<template>
  <main
    class="flex flex-col-reverse justify-between gap-[4rem] mt-[4rem] py-[4rem] px-[1rem] xs:rounded-[20px] sm:gap-[6rem] md:flex-row md:gap-0 md:rounded-[25px] md:px-[2rem] xxxxl:px-[4rem] xxxxl:mt-[6rem]"
  >
    <section
      class="w-[100%] h-[500px] relative bg-cover bg-center-bottom-mid bg-no-repeat bg-[url('../assets/images/users/cardio.jpg')] brightness-[90%] drop-shadow-xl rounded-[15px] sm:h-[600px] md:h-[750px] md:w-[45%] md:rounded-[20px]"
    ></section>
    <section class="w-[100%] md:w-[45%]">
      <h1
        class="absolute top-[4rem] leading-none tracking-tighter text-[4.5rem] translate-x-[-1.125rem] font-semibold text-textDark xs:text-[5.5rem] xs:top-[4rem] sm:text-[9rem] sm:translate-x-[-1.25rem] sm:top-[3.5rem] md:top-[4rem] md:text-[6.5rem] md:right-0 md:sm:translate-x-0 lg:top-[3rem] lg:text-[9rem] xxl:top-[2rem] xxl:text-[12rem] xxxl:text-[13rem] xxxxl:text-[17rem]"
      >
        account
      </h1>
      <!-- Login/SignUp -->
      <div v-if="!storeUserService.userAuth.id">
        <div
          class="flex items-center gap-[1.5rem] my-[2rem] font-oswald text-textGray xs:my-[4rem] sm:mt-[6rem] lg:text-[1.25rem] xxl:mt-[8rem] xxxl:mt-[10rem] xxxxl:mt-[11rem]"
        >
          <button
            class="pb-[.125rem] border-b-[1px] duration-[.15s] ease-in-out z-[5] cursor-pointer"
            :class="loginActive ? active : inactive"
            @click="toggleLogin"
          >
            Login
          </button>
          <button
            class="pb-[.125rem] border-b-[1px] duration-[.15s] ease-in-out z-[5] cursor-pointer"
            :class="registerActive ? active : inactive"
            @click="toggleRegister"
          >
            Register
          </button>
        </div>
        <div>
          <!-- Login Form -->
          <form
            @submit.prevent="onSubmit"
            v-if="loginActive"
            class="flex flex-col gap-[1.5rem] text-[.875rem] sm:text-[1rem] lg:text-[1.125rem]"
          >
            <input
              v-model="loginCredentials.email"
              type="email"
              placeholder="Email"
              class="py-[.25rem] bg-transparent text-textGray border-b-[1px] border-primaryColor outline-none placeholder:text-textDarker xs:py-[.375rem] md:py-[.5rem]"
              :class="{ 'border-b-red-600': storeAuth.error }"
            />

            <input
              v-model="loginCredentials.password"
              type="password"
              placeholder="Password"
              class="py-[.25rem] bg-transparent text-textGray border-b-[1px] border-primaryColor outline-none placeholder:text-textDarker xs:py-[.375rem] md:py-[.5rem]"
              :class="{ 'border-b-red-600': storeAuth.error }"
            />
            <p v-if="storeAuth.error" class="text-red-600">
              {{ storeAuth.error }}
            </p>
            <button
              type="submit"
              class="mt-[.5rem] font-oswald flex flex-col w-fit text-[.875rem] relative group xs:text-[1rem] md:text-[1.125rem] lg:mt-[1rem]"
            >
              <span
                class="font-[600] py-[.25rem] px-[1rem] border-[1px] bg-primaryColor text-textLight border-primaryColor z-[1] group-hover:bg-transparent group-hover:border-primaryColor ease-in duration-[.15s] delay-[.05s] md:py-[.375rem] md:px-[1.125rem]"
                >Login</span
              >
              <span
                class="font-[600] py-[.25rem] px-[1rem] text-transparent border-[1px] border-textLight absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.375rem] md:px-[1.125rem]"
                >Login</span
              >
            </button>
          </form>
          <!-- Register Form -->
          <form
            @submit.prevent="onSubmit"
            v-else
            class="flex flex-col gap-[1.5rem] text-[.875rem] sm:text-[1rem] lg:text-[1.125rem]"
          >
            <input
              v-model="registerCredentials.firstName"
              type="text"
              placeholder="First name"
              class="py-[.25rem] bg-transparent text-textGray border-b-[1px] border-primaryColor outline-none placeholder:text-textDarker xs:py-[.375rem] md:py-[.5rem]"
              :class="{ 'border-b-red-600': storeAuth.error || error }"
            />
            <input
              v-model="registerCredentials.lastName"
              type="text"
              placeholder="Last name"
              class="py-[.25rem] bg-transparent text-textGray border-b-[1px] border-primaryColor outline-none placeholder:text-textDarker xs:py-[.375rem] md:py-[.5rem]"
              :class="{ 'border-b-red-600': storeAuth.error || error }"
            />
            <input
              v-model="registerCredentials.username"
              type="text"
              placeholder="Username"
              class="py-[.25rem] bg-transparent text-textGray border-b-[1px] border-primaryColor outline-none placeholder:text-textDarker xs:py-[.375rem] md:py-[.5rem]"
              :class="{ 'border-b-red-600': storeAuth.error || error }"
            />
            <input
              v-model="registerCredentials.email"
              type="email"
              placeholder="Email"
              class="py-[.25rem] bg-transparent text-textGray border-b-[1px] border-primaryColor outline-none placeholder:text-textDarker xs:py-[.375rem] md:py-[.5rem]"
              :class="{ 'border-b-red-600': storeAuth.error || error }"
            />

            <input
              v-model="registerCredentials.password"
              type="password"
              placeholder="Password"
              class="py-[.25rem] bg-transparent text-textGray border-b-[1px] border-primaryColor outline-none placeholder:text-textDarker xs:py-[.375rem] md:py-[.5rem]"
              :class="{ 'border-b-red-600': storeAuth.error || error }"
            />
            <p v-if="storeAuth.error" class="text-red-600">
              {{ storeAuth.error }}
            </p>
            <p v-else-if="error" class="text-red-600">
              {{ error }}
            </p>
            <button
              type="submit"
              class="mt-[.5rem] font-oswald flex flex-col w-fit text-[.875rem] relative group xs:text-[1rem] md:text-[1.125rem] lg:mt-[1rem]"
            >
              <span
                class="font-[600] py-[.25rem] px-[1rem] border-[1px] bg-primaryColor text-textLight border-primaryColor z-[1] group-hover:bg-transparent group-hover:border-primaryColor ease-in duration-[.15s] delay-[.05s] md:py-[.375rem] md:px-[1.125rem]"
                >Register</span
              >
              <span
                class="font-[600] py-[.25rem] px-[1rem] text-transparent border-[1px] border-textLight absolute top-[4px] right-[-4px] group-hover:top-[0] group-hover:right-[0] ease-in duration-[.2s] md:py-[.375rem] md:px-[1.125rem]"
                >Register</span
              >
            </button>
          </form>
        </div>
      </div>
      <!-- Account -->
      <div v-else>
        <div
          class="flex items-center gap-[1.5rem] my-[2rem] font-oswald text-textGray xs:my-[4rem] sm:mt-[6rem] lg:text-[1.25rem] xxl:mt-[8rem] xxxl:mt-[10rem] xxxxl:mt-[11rem]"
        >
          <button
            class="pb-[.125rem] border-b-[1px] duration-[.15s] ease-in-out z-[5] cursor-pointer"
            :class="settingsActive ? active : inactive"
            @click="toggleSettings"
          >
            Settings
          </button>
          <button
            class="pb-[.125rem] border-b-[1px] duration-[.15s] ease-in-out z-[5] cursor-pointer"
            :class="reservedActive ? active : inactive"
            @click="toggleReserved"
          >
            Reserved Classes
          </button>
        </div>
        <!-- Settings -->
        <div v-if="settingsActive">
          <div v-if="!editUserActive" class="flex flex-col gap-[3rem]">
            <!-- Profile Picture -->
            <div class="max-w-[750px]">
              <h2 class="mb-[1rem] text-[1.25rem] text-textGray font-[600]">Profile Picture</h2>
              <div
                class="flex flex-col gap-[1.25rem] items-center p-[1.25rem] bg-bgNormal border-[1px] border-primaryColor xs:flex-row lg:gap-[1.5rem]"
              >
                <div>
                  <div
                    v-if="!storeUserService.userData.img"
                    class="flex justify-center items-center min-w-[75px] min-h-[75px] bg-primaryColor rounded-full xs:min-w-[100px] xs:min-h-[100px] sm:min-w-[125px] sm:min-h-[125px] md:min-w-[100px] md:min-h-[100px] lg:min-w-[125px] lg:min-h-[125px]"
                  >
                    <font-awesome-icon
                      class="text-[2.5rem] xs:text-[3.25rem] sm:text-[4rem] md:text-[3.25rem] lg:text-[4rem]"
                      :icon="['fas', 'user']"
                    />
                  </div>
                  <div
                    v-else
                    class="flex justify-center items-center w-[75px] h-[75px] bg-cover bg-center-top-mid bg-no-repeat rounded-full xs:w-[100px] xs:h-[100px] sm:w-[125px] sm:h-[125px] md:w-[100px] md:h-[100px] lg:w-[125px] lg:h-[125px]"
                    :style="`background-image: url('${storeUserService.userData.img}')`"
                  ></div>
                </div>

                <p
                  class="font-oswald text-[.875rem] text-textNofile italic sm:text-[1rem] md:text-[.875rem] lg:text-[1rem]"
                >
                  {{
                    storeUserService.userData.imgName
                      ? storeUserService.userData.imgName
                      : 'No file selected'
                  }}
                </p>
              </div>
            </div>
            <!-- Profile Settings -->
            <div class="max-w-[750px]">
              <h2 class="mb-[1rem] text-[1.25rem] text-textGray font-[600]">Profile Settings</h2>
              <div
                class="flex flex-col gap-[1.5rem] p-[1.25rem] bg-bgNormal border-[1px] border-primaryColor sm:gap-[2rem]"
              >
                <!-- Username -->
                <div
                  class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
                >
                  <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Username</h3>
                  <p
                    class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
                  >
                    {{
                      storeUserService.userData.username === undefined
                        ? storeAuth.userData.username
                        : storeUserService.userData.username
                    }}
                  </p>
                </div>
                <!-- Favourit Class -->
                <div
                  class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
                >
                  <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">
                    Favourite class
                  </h3>
                  <div class="w-[100%] relative">
                    <p
                      class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
                    >
                      {{
                        storeUserService.userData.favouriteClass
                          ? storeUserService.userData.favouriteClass
                          : 'No class selected'
                      }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              @click="editUserSettings"
              class="font-oswald flex flex-col w-fit mt-[-1rem] text-[1rem] relative group sm:mt-0 md:mt-[-1rem]"
            >
              <span
                class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-bgColorDark z-[1] ease-in duration-[.15s] delay-[.05s] md:py-[.375rem] md:px-[1.125rem] md:text-[1.125rem]"
                >Edit</span
              >
              <span
                class="font-[500] w-[0px] py-[.25rem] text-transparent bg-bgColorDark border-y-[1px] border-transparent absolute group-hover:w-[100%] group-hover:px-[1.125rem] ease-in duration-[.2s] md:py-[.375rem] md:group-hover:px-[1.125rem] md:text-[1.125rem]"
                >Edit</span
              >
            </button>
          </div>
          <EditAccount
            v-else
            :user="user"
            @savedChanges="saveEditUserSettings"
            @canceledChanges="closeEditUserSettings"
            @imageSelected="handleImageUpload"
          />
        </div>
        <!-- Reserved Classes -->
        <div v-else>
          <div
            v-if="storeBookings.userBookings.length > 0"
            class="bg-bgNormal border-[1px] border-primaryColor xs:flex-row"
          >
            <div
              v-for="booking in orderedBookings"
              :key="booking.id"
              class="flex flex-col gap-[2rem] p-[1.5rem] border-b-[1px] border-bgColorDark sm:gap-[1.5rem] md:gap-[2rem] lg:gap-[1.5rem] xxxl:flex-row xxxl:items-center xxxl:justify-between xxxxl:p-[2rem]"
            >
              <div class="flex flex-wrap items-center gap-[1.5rem] xxl:gap-[2rem]">
                <div class="min-w-[120px]">
                  <h4 class="pb-[.125rem] font-oswald text-textNofile xxl:text-[1.125rem]">
                    Class
                  </h4>
                  <p class="text-textGray xxl:text-[1.125rem]">{{ booking.class }}</p>
                </div>
                <div class="min-w-[150px]">
                  <h4 class="pb-[.125rem] font-oswald text-textNofile xxl:text-[1.125rem]">
                    Coach
                  </h4>
                  <p class="text-textGray xxl:text-[1.125rem]">{{ booking.coach }}</p>
                </div>
                <div class="min-w-[120px]">
                  <h4 class="pb-[.125rem] font-oswald text-textNofile xxl:text-[1.125rem]">Date</h4>
                  <p class="text-textGray xxl:text-[1.125rem]">
                    {{ booking.day }}. {{ booking.month }}
                  </p>
                </div>
                <div class="min-w-[120px]">
                  <h4 class="pb-[.125rem] font-oswald text-textNofile xxl:text-[1.125rem]">
                    From-To
                  </h4>
                  <p class="text-textGray xxl:text-[1.125rem]">
                    {{ booking.from }}-{{ booking.to }}
                  </p>
                </div>
              </div>
              <button
                @click="openDeleteModal(booking.id)"
                class="font-oswald flex flex-col w-fit text-[1rem] relative group sm:mt-0"
              >
                <span
                  class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-bgColorDark z-[1] ease-in duration-[.15s] delay-[.05s] md:py-[.375rem] md:px-[1.125rem] md:text-[1.125rem]"
                  >Cancel</span
                >
                <span
                  class="font-[600] w-[0px] py-[.25rem] text-transparent bg-bgColorDark border-y-[1px] border-transparent absolute group-hover:w-[100%] group-hover:px-[1.125rem] ease-in duration-[.2s] md:py-[.375rem] md:group-hover:px-[1.125rem] md:text-[1.125rem]"
                  >Cancel</span
                >
              </button>
              <!-- Delete Coach -->
              <div
                v-if="deleteClass === booking.id"
                class="modal h-[100%] w-[100%] z-[15] fixed top-0 left-0 right-0 overflow-auto"
              >
                <CancelClass
                  :booking="booking"
                  @savedChanges="
                    deleteBooking(booking.id, booking.weekday, booking.timetableID, booking.classID)
                  "
                  @canceledChanges="closeDeleteModal"
                />
              </div>
            </div>
          </div>
          <div v-else class="text-textNofile italic xl:text-[1.125rem] xxxxl:text-[1.25rem]">
            No reserved classes
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-text-fill-color: #e1e1e1;
  transition: background-color 10000s ease-in-out 0s;
}

::placeholder {
  color: #606060;
}

.modal {
  background-color: #1818183a;
  backdrop-filter: blur(5px);
}
</style>
