<script setup>
// Prop handling
const { name } = defineProps(['name'])

// Emit handling
const emit = defineEmits(['savedChanges', 'canceledChanges'])

const saveChanges = () => {
  emit('savedChanges')
}

const cancelChanges = () => {
  emit('canceledChanges')
}
</script>

<template>
  <section class="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
    <div
      class="flex flex-col h-[100%] w-[100%] gap-[1.5rem] p-[1.25rem] bg-bgNormal border-[1px] border-primaryColor sm:w-[500px] md:w-[600px] lg:w-[750px]"
    >
      <h3 class="text-center xs:text-[1.125rem] sm:text-[1.25rem]">
        Are you sure you want to delete this class?
      </h3>
      <p
        class="mt-[-.5rem] text-center text-primaryColor text-[.875rem] xs:text-[1rem] sm:text-[1.125rem]"
      >
        {{ name }}
      </p>
      <div class="flex justify-center gap-[1rem] md:gap-[1.5rem]">
        <!-- Yes button -->
        <button
          @click="saveChanges"
          class="font-oswald flex flex-col w-fit text-[1rem] relative group"
        >
          <span
            class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-bgColorDark z-[1] ease-in duration-[.15s] delay-[.05s] md:py-[.375rem] md:px-[1.125rem] md:text-[1.125rem]"
            >Yes</span
          >
          <span
            class="font-[500] w-[0px] py-[.25rem] text-transparent bg-bgColorDark border-y-[1px] border-transparent absolute group-hover:w-[100%] group-hover:px-[1.125rem] ease-in duration-[.2s] md:py-[.375rem] md:group-hover:px-[1.125rem] md:text-[1.125rem]"
            >Yes</span
          >
        </button>
        <!-- Cancel button -->
        <button
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
    </div>
  </section>
</template>

<style scoped></style>
