<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
/* ----- Import components ----- */
import Class from '../components/ClassPage/Class.vue'
/* ----- Import stores ----- */
import { useStoreClasses } from '../stores/storeClasses.js'
const storeClasses = useStoreClasses()

const route = useRoute()
const singleClass = computed(() => {
  return storeClasses.classes.find((classObj) => classObj.routing === route.params.route)
})
</script>

<template>
  <Class :singleClass="singleClass" />
</template>

<style scoped></style>
