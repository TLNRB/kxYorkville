<script setup>
import { ref, reactive } from 'vue'
/*----- Importing components -----*/
import General from '../components/Admin/General.vue'
import EditGeneral from '../components/Admin/EditGeneral.vue'
import Classes from '../components/Admin/Classes.vue'
import EditClasses from '../components/Admin/EditClasses.vue'
import DeleteClasses from '../components/Admin/DeleteClasses.vue'

/*----- Admin section display -----*/
const generalActive = ref(true)
const classesActive = ref(false)
const coachesActive = ref(false)
const active = 'text-primaryColor border-primaryColor'
const inactive = 'text-textGray border-textGray'

// Toggle general section
const toggleGeneral = () => {
  generalActive.value = true
  classesActive.value = false
  coachesActive.value = false
}

// Toggle classes section
const toggleClasses = () => {
  generalActive.value = false
  classesActive.value = true
  coachesActive.value = false
}

// Toggle coaches section
const toggleCoaches = () => {
  generalActive.value = false
  classesActive.value = false
  coachesActive.value = true
}

//Edit general testing
const inputs1 = reactive({
  phone: { title: 'Phone', value: '+1 596-322-7824' },
  email: { title: 'Email', value: 'INFO@KXYORKVILLE.COM' },
  address: { title: 'Address', value: '123 Yorkville Ave, Toronto, ON M5R 1C4' },
  version: { title: 'Version', value: '2023 © KX Yorkville' }
})

const inputs2 = reactive({
  mondayFriday: { title: 'Monday - Friday', value: '08H-22H' },
  saturday: { title: 'Saturday', value: '08H-22H' },
  sunday: { title: 'Sunday', value: '08H-20H' }
})
</script>

<template>
  <main
    class="mt-[4rem] pt-[4rem] pb-[2rem] px-[1rem] xs:pt-[5rem] sm:pt-[9rem] md:px-[2rem] lg:pt-[11rem] xxl:pt-[13rem] xxxl:pt-[15rem] xxxxl:px-[4rem] xxxxl:pt-[16rem] xxxxl:mt-[6rem]"
  >
    <h1
      class="absolute top-[4rem] leading-none tracking-tighter text-[4.5rem] translate-x-[-1.125rem] font-semibold text-textDark xs:text-[5.5rem] xs:top-[4rem] sm:text-[9rem] sm:translate-x-[-1.25rem] sm:top-[5rem] md:left-0 md:sm:translate-x-0 lg:text-[12rem] xxl:text-[14rem] xxxl:text-[16rem] xxxxl:text-[20rem]"
    >
      admin
    </h1>
    <section
      class="flex items-center justify-center gap-[1.5rem] mt-[2rem] font-oswald xs:justify-start lg:mt-[3rem] lg:text-[1.25rem]"
    >
      <button
        class="pb-[.125rem] border-b-[1px] duration-[.15s] ease-in-out z-[5] cursor-pointer"
        :class="generalActive ? active : inactive"
        @click="toggleGeneral"
      >
        General
      </button>
      <button
        class="pb-[.125rem] border-b-[1px] duration-[.15s] ease-in-out z-[5] cursor-pointer"
        :class="classesActive ? active : inactive"
        @click="toggleClasses"
      >
        Classes
      </button>
      <button
        class="pb-[.125rem] border-b-[1px] duration-[.15s] ease-in-out z-[5] cursor-pointer"
        :class="coachesActive ? active : inactive"
        @click="toggleCoaches"
      >
        Coaches
      </button>
    </section>
    <!---- Sections ----->
    <General v-if="generalActive" />
    <Classes v-else-if="classesActive" />
    <!-- Edit General -->
    <div class="hidden modal h-[100%] w-[100%] z-[15] fixed top-0 left-0 right-0 overflow-auto">
      <EditGeneral :inputs="inputs1" title="Opening Hours" />
    </div>
    <!-- Edit Classes -->
    <!-- Delete Classes -->
    <!-- Edit Coaches -->
    <!-- Delete Coaches -->
  </main>
</template>

<style scoped>
.modal {
  background-color: #181818bb;
  backdrop-filter: blur(6px);
}
</style>
