<script setup>
import { ref } from 'vue'
/*----- Importing components -----*/
import EditClass from '../Admin/EditClass.vue'
import DeleteClass from '../Admin/DeleteClass.vue'

//Prop handling
const { classes } = defineProps(['classes'])

/*----- Edit Section -----*/
const editClass = ref(0)

// Toggle edit section
const toggleEdit = (index) => {
  editClass.value = index
}

// Edit saved
const savedChanges = () => {
  console.log(`Saved changes`)
  toggleEdit()
}

/*----- Edit Section -----*/
const deleteClass = ref(false)

// Toggle delete modal
const toggleDelete = () => {
  deleteClass.value = !deleteClass.value
}

// Delete class
const saveDelete = () => {
  console.log(`class deleted`)
  toggleDelete()
}
</script>

<template>
  <section
    class="mt-[3rem] gap-[3rem] pb-[2rem] lg:gap-[4rem] lg:mt-[4rem] lg:pb-[3rem] xxxxl:gap-[6rem] xxxxl:mt-[6rem]"
  >
    <div>
      <h2
        class="mb-[1rem] text-[1.25rem] text-textGray font-[600] w-[100%] sm:text-center lg:text-[1.5rem]"
      >
        Current Classes
      </h2>
      <div class="flex flex-wrap justify-center gap-[1.5rem]">
        <div v-for="singleClass in classes" :key="singleClass.id">
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
                {{ singleClass.img }}
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
                {{ singleClass.class }}
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
                @click="toggleEdit(singleClass.id)"
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
          <!-- Edit Class -->
          <EditClass
            v-else-if="editClass === singleClass.id"
            :singleClass="singleClass"
            @savedChanges="savedChanges"
            @canceledChanges="toggleEdit"
          />
          <!-- Delete Class -->
          <div
            v-if="deleteClass"
            @click.self="toggleDelete"
            class="modal h-[100%] w-[100%] z-[15] fixed top-0 left-0 right-0 overflow-auto"
          >
            <DeleteClass
              :name="singleClass.name"
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
  background-color: #18181860;
  backdrop-filter: blur(4px);
}
</style>
