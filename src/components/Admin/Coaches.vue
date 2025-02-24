<script setup>
import { ref, reactive } from 'vue'
/*----- Importing components -----*/
import AddCoach from '../Admin/AddCoach.vue'
import EditCoach from '../Admin/EditCoach.vue'
import DeleteCoach from '../Admin/DeleteCoach.vue'
import Button from '../UI/Button.vue'
/* ----- Import stores ----- */
import { useStoreCoaches } from '../../stores/storeCoaches.js'
const storeCoaches = useStoreCoaches()

/* ===== Coaches ===== */
//--V-model for coach inputs
const newCoach = reactive({
  name: '',
  motto: '',
  profession: '',
  img: '',
  imgName: ''
})

//--Temporary values
const image = ref(null)
const tempID = ref()

//--Clear values for class inputs
const valueClear = () => {
  ;(newCoach.name = ''),
    (newCoach.motto = ''),
    (newCoach.profession = ''),
    (newCoach.img = ''),
    (newCoach.imgName = ''),
    (image.value = null)
}

/*----- Add Section -----*/
const addCoachActive = ref(false)

//--Toggle add section
const toggleAdd = () => {
  addCoachActive.value = !addCoachActive.value
}

//--Add coach
const addNewCoach = () => {
  storeCoaches.addCoach(newCoach)
  toggleAdd()
  valueClear()
}

//--Close Add coach
const closeAddCoach = () => {
  storeCoaches.closeAddCoach()
  toggleAdd()
  valueClear()
}

//--Image upload class
const handleImageUpload = (file) => {
  image.value = file
  storeCoaches.getImageUrl(file.value.name, file.value)
}

/*----- Edit Section -----*/
const editCoach = ref(0)

//--Toggle edit section
const toggleEdit = (index) => {
  editCoach.value = index
}

//--Edit coach
const editSingleCoach = (id) => {
  toggleEdit(id)
  for (let i = 0; i < storeCoaches.coaches.length; i++) {
    // Getting the input values by id
    if (storeCoaches.coaches[i].id === id) {
      newCoach.name = storeCoaches.coaches[i].name
      newCoach.motto = storeCoaches.coaches[i].motto
      newCoach.profession = storeCoaches.coaches[i].profession
      newCoach.img = storeCoaches.coaches[i].img
      newCoach.imgName = storeCoaches.coaches[i].imgName
      // Storing the ID temporarily
      tempID.value = storeCoaches.coaches[i].id
    }
  }
}

//--Save coach editing
const saveEditCoach = async () => {
  // Checking if the image changed
  storeCoaches.updateImage(tempID.value)
  storeCoaches.updateCoach(newCoach, tempID.value)
  valueClear()
  tempID.value = ''
  toggleEdit(0)
}

//--Close coach editing
const closeEditCoach = () => {
  storeCoaches.closeEditing(tempID.value)
  valueClear()
  tempID.value = ''
  toggleEdit(0)
}

/*----- Delete Section -----*/
const deleteCoach = ref(0)
const deleteID = ref('')

//--Toggle delete modal
const toggleDelete = (index) => {
  deleteCoach.value = index
}

//--Open Delete Modal
const openDeleteModal = (id) => {
  deleteID.value = id
  toggleDelete(id)
}

//--Close Delete Modal
const closeDeleteModal = () => {
  toggleDelete(0)
  deleteID.value = ''
}

//--Confirm Delete Modal events
const confirmDelete = () => {
  storeCoaches.deleteCoach(deleteID.value)
  closeDeleteModal()
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
      <AddCoach
        :newCoach="newCoach"
        @savedChanges="addNewCoach"
        @canceledChanges="closeAddCoach"
        @imageSelected="handleImageUpload"
      />
    </div>
    <div>
      <h2
        class="mb-[1rem] text-[1.25rem] text-textGray font-[600] w-[100%] text-center lg:text-[1.5rem]"
      >
        Current Coaches
      </h2>
      <div
        v-if="storeCoaches.coaches.length > 0"
        class="flex flex-wrap justify-center gap-[1.5rem]"
      >
        <div v-for="singleCoach in storeCoaches.coaches" :key="singleCoach.id">
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
                {{ singleCoach.imgName }}
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
                @click="editSingleCoach(singleCoach.id)"
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
                @click="openDeleteModal(singleCoach.id)"
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
            :newCoach="newCoach"
            @savedChanges="saveEditCoach"
            @canceledChanges="closeEditCoach"
            @imageSelected="handleImageUpload"
          />
          <!-- Delete Coach -->
          <div
            v-if="deleteCoach === singleCoach.id"
            class="modal h-[100%] w-[100%] z-[15] fixed top-0 left-0 right-0 overflow-auto"
          >
            <DeleteCoach
              :name="singleCoach.name"
              @savedChanges="confirmDelete"
              @canceledChanges="closeDeleteModal"
            />
          </div>
        </div>
      </div>
      <div v-else class="mt-[2.5rem] text-center italic text-textNofile lg:text-[1.25rem]">
        No coaches found
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
