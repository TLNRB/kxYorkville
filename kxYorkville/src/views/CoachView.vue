<script setup>
import { useRoute } from 'vue-router'
/* ----- Import components ----- */
import Coach from '../components/CoachPage/Coach.vue'
/* ----- Import Database ----- */
import coachesDB from '../data/coachesDB'

const route = useRoute()
const singleCoach = coachesDB.find((coachObj) => coachObj.route === route.params.route)
</script>

<template>
  <Coach :singleCoach="singleCoach" />
</template>

<style scoped></style>
