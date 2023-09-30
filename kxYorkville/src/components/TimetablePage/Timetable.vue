<script setup>
//Prop handling
const { singleClass } = defineProps(['singleClass'])
console.log(singleClass)
</script>

<template>
  <section>
    <div>
      <p>{{ singleClass.from }}</p>
      <div></div>
      <div></div>
    </div>
    <div></div>
  </section>
</template>

<style scoped></style>
