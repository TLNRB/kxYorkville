<script setup>
import { ref } from 'vue'
/*----- Importing components -----*/
import AddCoach from '../Admin/AddCoach.vue'
/* import EditCoach from '../Admin/EditCoach.vue'
import DeleteCoach from '../Admin/DeleteCoach.vue' */
import Button from '../UI/Button.vue'

//Prop handling
const { coaches } = defineProps(['coaches'])

/*----- Add Section -----*/
const addCoachActive = ref(false)

// Toggle add section
const toggleAdd = () => {
  addCoachActive.value = !addCoachActive.value
}

// Coach added
const addCoach = () => {
  console.log(`Coach Added`)
  toggleAdd()
}

/*----- Edit Section -----*/
const editCoach = ref(0)

// Toggle edit section
const toggleEdit = (index) => {
  editCoach.value = index
}

// Edit saved
const savedChanges = () => {
  console.log(`Saved changes`)
  toggleEdit()
}

/*----- Delete Section -----*/
const deleteCoach = ref(false)

// Toggle delete modal
const toggleDelete = () => {
  deleteCoach.value = !deleteCoach.value
}

// Delete coach
const saveDelete = () => {
  console.log(`Coach deleted`)
  toggleDelete()
}
</script>

<template>
  <section
    class="mt-[3rem] gap-[3rem] pb-[2rem] lg:gap-[4rem] lg:mt-[4rem] lg:pb-[3rem] xxxxl:gap-[6rem] xxxxl:mt-[6rem]"
  >
    <Button
      content="Add Coach"
      @click="toggleAdd"
      class="mx-auto mb-[3rem] lg:mb-[4rem] xxxxl:mb-[5rem]"
    />
    <!-- Add Coach -->
    <div
      v-if="addCoachActive"
      class="modal h-[100%] w-[100%] z-[15] fixed top-0 left-0 right-0 overflow-auto"
    >
      <AddCoach @savedChanges="addCoach" @canceledChanges="toggleAdd" />
    </div>
    <div>
      <h2
        class="mb-[1rem] text-[1.25rem] text-textGray font-[600] w-[100%] text-center lg:text-[1.5rem]"
      >
        Current Coaches
      </h2>
      <div class="flex flex-wrap justify-center gap-[1.5rem]">
        <div v-for="singleCoach in coaches" :key="singleCoach.id">
          <!-- Coach Display -->
          <div
            v-if="editCoach !== singleCoach.id"
            class="flex flex-col h-[100%] w-[245px] gap-[1.5rem] p-[1.25rem] bg-bgNormal border-[1px] border-primaryColor xs:w-[325px] sm:w-[500px] md:w-[600px] lg:w-[750px]"
          >
            <!-- Name -->
            <div
              class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
            >
              <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Name</h3>
              <p
                class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
              >
                {{ singleCoach.name }}
              </p>
            </div>
            <!-- Image -->
            <div
              class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
            >
              <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Image</h3>
              <p
                class="w-[100%] overflow-hidden bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
              >
                {{ singleCoach.img }}
              </p>
            </div>
            <!-- Motto -->
            <div
              class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
            >
              <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Motto</h3>
              <p
                class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
              >
                {{ singleCoach.motto }}
              </p>
            </div>
            <!-- Profession -->
            <div
              class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
            >
              <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Profession</h3>
              <p
                class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
              >
                {{ singleCoach.profession }}
              </p>
            </div>
            <div class="flex justify-center gap-[1rem] mt-auto md:gap-[1.5rem]">
              <!-- Edit button -->
              <button
                @click="toggleEdit(singleCoach.id)"
                class="font-oswald flex flex-col w-fit text-[1rem] relative group"
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
              <!-- Delete button -->
              <button
                @click="toggleDelete"
                class="font-oswald flex flex-col w-fit text-[1rem] relative group"
              >
                <span
                  class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-bgColorDark z-[1] ease-in duration-[.15s] delay-[.05s] md:py-[.375rem] md:px-[1.125rem] md:text-[1.125rem]"
                  >Delete</span
                >
                <span
                  class="font-[500] w-[0px] py-[.25rem] text-transparent bg-bgColorDark border-y-[1px] border-transparent absolute group-hover:w-[100%] group-hover:px-[1.125rem] ease-in duration-[.2s] md:py-[.375rem] md:group-hover:px-[1.125rem] md:text-[1.125rem]"
                  >Delete</span
                >
              </button>
            </div>
          </div>
          <!-- Edit Coach -->
          <EditCoach
            v-else-if="editCoach === singleCoach.id"
            :singleCoach="singleCoach"
            @savedChanges="savedChanges"
            @canceledChanges="toggleEdit"
          />
          <!-- Delete Coach -->
          <div
            v-if="deleteCoach"
            class="modal h-[100%] w-[100%] z-[15] fixed top-0 left-0 right-0 overflow-auto"
          >
            <DeleteCoach
              :name="singleCoach.name"
              @savedChanges="saveDelete"
              @canceledChanges="toggleDelete"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.modal {
  background-color: #181818bb;
  backdrop-filter: blur(5px);
}
</style>
