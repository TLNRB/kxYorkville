<script setup>
import { useRoute } from 'vue-router'
/* ----- Import components ----- */
import Class from '../components/ClassPage/Class.vue'
/* ----- Import Database ----- */
import classesDB from '../data/classesDB'

const route = useRoute()
const singleClass = classesDB.find((classObj) => classObj.route === route.params.route)
</script>

<template>
  <Class :singleClass="singleClass" />
</template>

<style scoped></style>
