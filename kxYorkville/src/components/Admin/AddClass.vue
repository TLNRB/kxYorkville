<script setup>
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
  <form
    @submit.prevent="saveChanges"
    class="flex flex-col h-[100%] w-[245px] gap-[1.5rem] p-[1.25rem] bg-bgNormal border-[1px] border-textNofile xs:w-[325px] sm:w-[500px] md:w-[600px] lg:w-[750px]"
  ></form>
</template>

<style scoped>
textarea {
  resize: none;
}

input[type='file'] {
  display: none;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

select {
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
}

::placeholder {
  color: #606060;
}
</style>
