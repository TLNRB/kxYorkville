<script setup>
import { ref, reactive } from 'vue'
/*----- Importing components -----*/
import AddClass from '../Admin/AddClass.vue'
import EditClass from '../Admin/EditClass.vue'
import DeleteClass from '../Admin/DeleteClass.vue'
import Button from '../UI/Button.vue'
/* ----- Import stores ----- */
import { useStoreClasses } from '../../stores/storeClasses.js'
const storeClasses = useStoreClasses()

/* ===== Classes ===== */
//--V-model for class inputs
const newClass = reactive({
  name: '',
  description: '',
  intensity: '',
  duration: '',
  classType: '',
  coaches: [],
  img: '',
  imgName: ''
})

//--Temporary values
const image = ref(null)
const tempID = ref()

//--Clear values for class inputs
const valueClear = () => {
  ;(newClass.name = ''),
    (newClass.description = ''),
    (newClass.intensity = ''),
    (newClass.duration = ''),
    (newClass.classType = ''),
    (newClass.coaches = []),
    (newClass.img = ''),
    (newClass.imgName = ''),
    (image.value = null)
}

/*----- Add Section -----*/
const addClassActive = ref(false)

//--Toggle add section
const toggleAdd = () => {
  addClassActive.value = !addClassActive.value
}

//--Add class
const addNewClass = () => {
  storeClasses.addClass(newClass)
  toggleAdd()
  valueClear()
}

//--Close Add class
const closeAddClass = () => {
  storeClasses.closeAddClass()
  toggleAdd()
  valueClear()
}

//--Image upload class
const handleImageUpload = (file) => {
  image.value = file
  storeClasses.getImageUrl(file.value.name, file.value)
}

/*----- Edit Section -----*/
const editClass = ref(0)

//--Toggle edit section
const toggleEdit = (index) => {
  editClass.value = index
}

//--Edit class
const editSingleClass = (id) => {
  toggleEdit(id)
  for (let i = 0; i < storeClasses.classes.length; i++) {
    // Getting the input values by id
    if (storeClasses.classes[i].id === id) {
      newClass.name = storeClasses.classes[i].name
      newClass.description = storeClasses.classes[i].description
      newClass.intensity = storeClasses.classes[i].intensity
      newClass.duration = storeClasses.classes[i].duration
      newClass.classType = storeClasses.classes[i].classType
      newClass.coaches = storeClasses.classes[i].coaches
      newClass.img = storeClasses.classes[i].img
      newClass.imgName = storeClasses.classes[i].imgName
      // Storing the ID temporarily
      tempID.value = storeClasses.classes[i].id
    }
  }
}

//--Save class editing
const saveEditClass = async () => {
  // Checking if the image changed
  storeClasses.updateImage(tempID.value)
  storeClasses.updateClass(newClass, tempID.value)
  valueClear()
  tempID.value = ''
  toggleEdit(0)
}

//--Close class editing
const closeEditClass = () => {
  storeClasses.closeEditing(tempID.value)
  valueClear()
  tempID.value = ''
  toggleEdit(0)
}

/*----- Delete Section -----*/
const deleteClass = ref(0)
const deleteID = ref('')

//--Toggle delete modal
const toggleDelete = (index) => {
  deleteClass.value = index
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
  storeClasses.deleteClass(deleteID.value)
  closeDeleteModal()
}
</script>

<template>
  <section
    class="mt-[3rem] gap-[3rem] pb-[2rem] lg:gap-[4rem] lg:mt-[4rem] lg:pb-[3rem] xxxxl:gap-[6rem] xxxxl:mt-[6rem]"
  >
    <Button
      content="Add Class"
      @click="toggleAdd"
      class="mx-auto mb-[3rem] lg:mb-[4rem] xxxxl:mb-[5rem]"
    />
    <!-- Add Class -->
    <div
      v-if="addClassActive"
      class="modal h-[100%] w-[100%] z-[15] fixed top-0 left-0 right-0 overflow-auto"
    >
      <AddClass
        :newClass="newClass"
        @savedChanges="addNewClass"
        @canceledChanges="closeAddClass"
        @imageSelected="handleImageUpload"
      />
    </div>
    <div>
      <h2
        class="mb-[1rem] text-[1.25rem] text-textGray font-[600] w-[100%] text-center lg:text-[1.5rem]"
      >
        Current Classes
      </h2>
      <div v-if="storeClasses.classes" class="flex flex-wrap justify-center gap-[1.5rem]">
        <div v-for="singleClass in storeClasses.classes" :key="singleClass.id">
          <!-- Class Display -->
          <div
            v-if="editClass !== singleClass.id"
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
                {{ singleClass.name }}
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
                {{ singleClass.imgName }}
              </p>
            </div>
            <!-- Description -->
            <div
              class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
            >
              <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Description</h3>
              <p
                class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
              >
                {{ singleClass.description }}
              </p>
            </div>
            <!-- Intensity -->
            <div
              class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
            >
              <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Intensity</h3>
              <p
                class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
              >
                {{ singleClass.intensity }}
              </p>
            </div>

            <!-- Duration -->
            <div
              class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
            >
              <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Duration</h3>
              <p
                class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
              >
                {{ singleClass.duration }}
              </p>
            </div>
            <!-- Class Type -->
            <div
              class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
            >
              <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Class Type</h3>
              <p
                class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
              >
                {{ singleClass.classType }}
              </p>
            </div>
            <!-- Coaches -->
            <div
              class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
            >
              <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Coaches</h3>
              <div
                class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
              >
                <span v-for="(coach, index) in singleClass.coaches" :key="coach"
                  >{{ coach }}{{ index !== singleClass.coaches.length - 1 ? ', ' : '' }}
                </span>
              </div>
            </div>
            <div class="flex justify-center gap-[1rem] mt-auto md:gap-[1.5rem]">
              <!-- Edit button -->
              <button
                @click="editSingleClass(singleClass.id)"
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
                @click="openDeleteModal(singleClass.id)"
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
          <!-- Edit Class -->
          <EditClass
            v-else-if="editClass === singleClass.id"
            :newClass="newClass"
            @savedChanges="saveEditClass"
            @canceledChanges="closeEditClass"
            @imageSelected="handleImageUpload"
          />
          <!-- Delete Class -->
          <div
            v-if="deleteClass === singleClass.id"
            class="modal h-[100%] w-[100%] z-[15] fixed top-0 left-0 right-0 overflow-auto"
          >
            <DeleteClass
              :name="singleClass.name"
              @savedChanges="confirmDelete"
              @canceledChanges="closeDeleteModal"
            />
          </div>
        </div>
      </div>
      <div
        v-else="!storeClasses.classes"
        class="mt-[2.5rem] text-center italic text-textNofile lg:text-[1.25rem]"
      >
        No classes found
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
