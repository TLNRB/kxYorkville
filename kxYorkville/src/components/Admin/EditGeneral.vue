<script setup>
// Prop handling
const { inputs, title } = defineProps(['inputs', 'title'])

// Emit handling
const emit = defineEmits(['savedChanges', 'canceledChanges'])

const saveChanges = (type) => {
  emit('savedChanges', type)
}

const cancelChanges = () => {
  emit('canceledChanges')
}
</script>

<template>
  <section class="w-[100%] sm:w-[450px] md:w-[600px] lg:w-[750px]">
    <div>
      <h2 class="mb-[1rem] text-[1.25rem] text-textNofile font-[600]">{{ title }}</h2>
      <!-- Form -->
      <form
        class="flex flex-col mb-[1.5rem] gap-[1.5rem] p-[1.25rem] bg-bgNormal border-[1px] border-textNofile sm:gap-[2rem]"
      >
        <!-- Inputs -->
        <div
          v-for="input in inputs"
          :key="input"
          class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
        >
          <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">
            {{ input.title }}
          </h3>
          <input
            :type="input.type"
            :value="input.value"
            class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
          />
        </div>
      </form>
    </div>
    <div class="flex justify-center gap-[1rem] md:gap-[1.5rem]">
      <!-- Save button -->
      <button
        type="submit"
        @click="saveChanges(title)"
        class="font-oswald flex flex-col w-fit text-[1rem] relative group"
      >
        <span
          class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-bgColorDark z-[1] ease-in duration-[.15s] delay-[.05s] md:py-[.375rem] md:px-[1.125rem] md:text-[1.125rem]"
          >Save</span
        >
        <span
          class="font-[500] w-[0px] py-[.25rem] text-transparent bg-bgColorDark border-y-[1px] border-transparent absolute group-hover:w-[100%] group-hover:px-[1.125rem] ease-in duration-[.2s] md:py-[.375rem] md:group-hover:px-[1.125rem] md:text-[1.125rem]"
          >Save</span
        >
      </button>
      <!-- Cancel button -->
      <button
        type="button"
        @click="cancelChanges"
        class="font-oswald flex flex-col w-fit text-[1rem] relative group"
      >
        <span
          class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-bgColorDark z-[1] ease-in duration-[.15s] delay-[.05s] md:py-[.375rem] md:px-[1.125rem] md:text-[1.125rem]"
          >Cancel</span
        >
        <span
          class="font-[500] w-[0px] py-[.25rem] text-transparent bg-bgColorDark border-y-[1px] border-transparent absolute group-hover:w-[100%] group-hover:px-[1.125rem] ease-in duration-[.2s] md:py-[.375rem] md:group-hover:px-[1.125rem] md:text-[1.125rem]"
          >Cancel</span
        >
      </button>
    </div>
  </section>
</template>

<style scoped></style>
