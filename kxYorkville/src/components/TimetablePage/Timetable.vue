<script setup>
//Prop handling
const { singleClass } = defineProps(['singleClass'])
</script>

<template>
  <section>
    <div>
      <p>{{ singleClass.from }}</p>
      <div>
        <p>{{ singleClass.name }}</p>
        <p>with {{ singleClass.coach }}</p>
      </div>
      <div>
        <p>{{ singleClass.from }}-{{ singleClass.to }}</p>
        <p>{{ singleClass.size }} left</p>
      </div>
    </div>
    <div></div>
  </section>
</template>

<style scoped></style>
