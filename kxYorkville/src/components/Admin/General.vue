<script setup>
import { ref, reactive } from 'vue'
/*----- Importing components -----*/
import EditGeneral from '../Admin/EditGeneral.vue'
/* ----- Import stores ----- */
import { useStoreGeneral } from '../../stores/storeGeneral.js'
const storeGeneral = useStoreGeneral()

/* ===== General ===== */
//--V-model for general inputs
const newGeneral = reactive({
  phone: '',
  email: '',
  address: '',
  version: '',
  mondayFriday: '',
  saturday: '',
  sunday: ''
})

//--Clear values for inputs
const valueClear = () => {
  ;(newGeneral.phone = ''),
    (newGeneral.email = ''),
    (newGeneral.address = ''),
    (newGeneral.version = ''),
    (newGeneral.mondayFriday = ''),
    (newGeneral.saturday = ''),
    (newGeneral.sunday = '')
}

/*----- Edit Section -----*/
const editGeneralActive = ref(false)

//--Toggle edit section
const toggleEditGeneral = () => {
  editGeneralActive.value = !editGeneralActive.value
}

//--Edit general
const editGeneral = () => {
  toggleEditGeneral()
  newGeneral.phone = storeGeneral.phone
  newGeneral.email = storeGeneral.email
  newGeneral.address = storeGeneral.address
  newGeneral.version = storeGeneral.version
  newGeneral.mondayFriday = storeGeneral.mondayFriday
  newGeneral.saturday = storeGeneral.saturday
  newGeneral.sunday = storeGeneral.sunday
}

//--Save general editing
const saveEditGeneral = async () => {
  storeGeneral.updateGeneral(newGeneral)
  valueClear()
  toggleEditGeneral()
}

//--Close general editing
const closeEditGeneral = () => {
  valueClear()
  toggleEditGeneral()
}

//Edit general testing
const inputs1 = reactive({
  phone: { title: 'Phone', value: '+1 596-322-7824', type: 'text' },
  email: { title: 'Email', value: 'INFO@KXYORKVILLE.COM', type: 'email' },
  address: {
    title: 'Address',
    value: '263 DAVENPORT RD, TORONTO, ON M5R 1J9, CANADA',
    type: 'text'
  },
  version: { title: 'Version', value: '2023 © KX Yorkville', type: 'text' }
})

const inputs2 = reactive({
  mondayFriday: { title: 'Monday-Friday', value: '07H-22H', type: 'text' },
  saturday: { title: 'Saturday', value: '08H-22H', type: 'text' },
  sunday: { title: 'Sunday', value: '08H-20H', type: 'text' }
})
</script>

<template>
  <section
    class="flex flex-wrap justify-center mt-[3rem] gap-[3rem] pb-[2rem] lg:gap-[4rem] lg:mt-[4rem] lg:pb-[3rem] xxxxl:gap-[6rem] xxxxl:mt-[6rem]"
  >
    <!-- General -->
    <div v-if="!editGeneralActive">
      <div class="flex flex-wrap justify-center gap-[1rem] lg:gap-[2rem] xxxl:gap-[4rem]">
        <div class="w-[100%] sm:w-[450px] md:w-[600px] lg:w-[750px]">
          <h2 class="mb-[1rem] text-[1.25rem] text-center text-textGray font-[600] xxxl:text-left">
            Contact & Version
          </h2>
          <div
            class="flex flex-col mb-[1.5rem] gap-[1.5rem] p-[1.25rem] bg-bgNormal border-[1px] border-primaryColor sm:gap-[2rem]"
          >
            <!-- Phone -->
            <div
              class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
            >
              <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Phone</h3>
              <p
                class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
              >
                {{ storeGeneral.phone }}
              </p>
            </div>
            <!-- Email -->
            <div
              class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
            >
              <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Email</h3>
              <p
                class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
              >
                {{ storeGeneral.email }}
              </p>
            </div>
            <!-- Address -->
            <div
              class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
            >
              <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Address</h3>
              <p
                class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
              >
                {{ storeGeneral.address }}
              </p>
            </div>
            <!-- Version -->
            <div
              class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
            >
              <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Version</h3>
              <p
                class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
              >
                {{ storeGeneral.version }}
              </p>
            </div>
          </div>
        </div>
        <!-- Opening -->
        <div class="w-[100%] sm:w-[450px] md:w-[600px] lg:w-[750px]">
          <h2 class="mb-[1rem] text-[1.25rem] text-center text-textGray font-[600] xxxl:text-left">
            Opening Hours
          </h2>
          <div
            class="flex flex-col mb-[1.5rem] gap-[1.5rem] p-[1.25rem] bg-bgNormal border-[1px] border-primaryColor sm:gap-[2rem]"
          >
            <!-- Monday-Friday -->
            <div
              class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
            >
              <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">
                Monday-Friday
              </h3>
              <p
                class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
              >
                {{ storeGeneral.mondayFriday }}
              </p>
            </div>
            <!-- Saturday -->
            <div
              class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
            >
              <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Saturday</h3>
              <p
                class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
              >
                {{ storeGeneral.saturday }}
              </p>
            </div>
            <!-- Sunday -->
            <div
              class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
            >
              <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Sunday</h3>
              <p
                class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
              >
                {{ storeGeneral.sunday }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Edit button -->
      <button
        :disabled="!storeGeneral.id"
        @click="editGeneral"
        class="font-oswald mx-auto flex flex-col w-fit text-[1rem] relative group"
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
    <!-- Edit General -->
    <EditGeneral
      v-else
      :newGeneral="newGeneral"
      @savedChanges="saveEditGeneral"
      @canceledChanges="closeEditGeneral"
    />
  </section>
</template>

<style scoped></style>
