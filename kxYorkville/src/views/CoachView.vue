<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
/* ----- Import components ----- */
import Coach from '../components/CoachPage/Coach.vue'
/* ----- Import stores ----- */
import { useStoreCoaches } from '../stores/storeCoaches.js'
const storeCoaches = useStoreCoaches()

const route = useRoute()
const singleCoach = computed(() => {
  return storeCoaches.coaches.find((coachObj) => coachObj.routing === route.params.route)
})
</script>

<template>
  <Coach :singleCoach="singleCoach" />
</template>

<style scoped></style>
