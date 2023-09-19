<script setup>
import { ref } from 'vue'
/* ----- Import assets ----- */
import Title from '../../UI/Title.vue'
import Button from '../../UI/Button.vue'
import Review from '../Reviews/Review.vue'
import reviewsDB from '../../../data/reviewsDB.js'

//Prop handling
const { img, imgMobile, isMobile, isDesktopMedium, isDesktopLarge } = defineProps([
  'img',
  'imgMobile',
  'isMobile',
  'isDesktopMedium',
  'isDesktopLarge'
])
const bgImg = `background-image: url('${img}')`
const bgImgMobile = `background-image: url('${imgMobile}')`

/* ---------- Filtering reviews based on column value ---------- */
let reviewsToShowSmall = ref(reviewsDB.length > 5 ? 5 : reviewsDB.length)
let reviewsToShowLarge = ref(reviewsDB.length > 8 ? 8 : reviewsDB.length)
let reviewDefaultState = ref(true)

const seeMoreReviews = () => {
  if (isDesktopLarge) {
    if (reviewsDB.length == reviewsToShowLarge.value) {
      return
    } else if (reviewsDB.length > reviewsToShowLarge.value + 5) {
      reviewsToShowLarge.value += 5
      reviewFilterThree(1)
      reviewFilterThree(2)
      reviewFilterThree(3)
      reviewDefaultState.value = false
    } else {
      reviewsToShowLarge.value += reviewsDB.length - reviewsToShowLarge.value
      reviewFilterThree(1)
      reviewFilterThree(2)
      reviewFilterThree(3)
      reviewDefaultState.value = false
    }
  } else if (isDesktopMedium) {
    if (reviewsDB.length == reviewsToShowSmall.value) {
      return
    } else if (reviewsDB.length > reviewsToShowSmall.value + 5) {
      reviewsToShowSmall.value += 5
      reviewFilterTwo(1)
      reviewFilterTwo(2)
      reviewDefaultState.value = false
    } else {
      reviewsToShowSmall.value += reviewsDB.length - reviewsToShowSmall.value
      reviewFilterTwo(1)
      reviewFilterTwo(2)
      reviewDefaultState.value = false
    }
  } else {
    if (reviewsDB.length == reviewsToShowSmall.value) {
      return
    } else if (reviewsDB.length > reviewsToShowSmall.value + 5) {
      reviewsToShowSmall.value += 5
      reviewFilterOne()
      reviewDefaultState.value = false
    } else {
      reviewsToShowSmall.value += reviewsDB.length - reviewsToShowSmall.value
      reviewFilterOne()
      reviewDefaultState.value = false
    }
  }
}

const hideMoreReviews = () => {
  if (isDesktopLarge) {
    reviewsToShowLarge.value = 8
    reviewFilterThree(1)
    reviewFilterThree(2)
    reviewFilterThree(3)
  } else if (isDesktopMedium) {
    reviewsToShowSmall.value = 5
    reviewFilterTwo(1)
    reviewFilterTwo(2)
  } else {
    reviewsToShowSmall.value = 5
    reviewFilterOne()
  }
  reviewDefaultState.value = true
}

const reviewFilterThree = (colNum) => {
  const tempArray = reviewsDB.slice(0, reviewsToShowLarge.value)
  return tempArray.filter((_, index) => index % 3 === colNum - 1)
}

const reviewFilterTwo = (colNum) => {
  const tempArray = reviewsDB.slice(0, reviewsToShowSmall.value)
  return tempArray.filter((_, index) => index % 2 === colNum - 1)
}

const reviewFilterOne = () => {
  const tempArray = reviewsDB.slice(0, reviewsToShowSmall.value)
  return tempArray
}
</script>

<template>
  <section
    class="relative mt-[4rem] mb-[2rem] py-[4rem] px-[1rem] bg-cover bg-center-bottom-mid bg-no-repeat xs:rounded-[20px] xs:mx-[1rem] md:rounded-[25px] md:mx-[2rem] md:px-[2rem] xxl:py-[6rem] xxxxl:px-[4rem] xxxxl:mt-[6rem]"
    :style="!isMobile ? bgImg : bgImgMobile"
  >
    <div
      class="absolute left-0 top-0 right-0 bottom-0 brightness-[90%] backdrop-blur-[6px] z-[0] xs:rounded-[20px] sm:backdrop-blur-[8px] md:rounded-[25px] lg:backdrop-blur-[10px]"
    ></div>
    <Title content="testimonials" />
    <!-- SETUP - Column 2 -->
    <div
      v-if="isDesktopMedium"
      class="flex flex-row justify-center items-start gap-[1.5rem] my-[4rem]"
    >
      <!-- Column 1 -->
      <div class="flex flex-col gap-[1.5rem]">
        <Review
          v-for="review in reviewFilterTwo(1)"
          :key="review.id"
          :text="review.text"
          :username="review.username"
        />
      </div>
      <!-- Column 2 -->
      <div class="flex flex-col gap-[1.5rem]">
        <Review
          v-for="review in reviewFilterTwo(2)"
          :key="review.id"
          :text="review.text"
          :username="review.username"
        />
      </div>
    </div>
    <!-- SETUP - Column 3 -->
    <div
      v-else-if="isDesktopLarge"
      class="flex justify-center gap-[1.5rem] my-[4rem] xxxxl:gap-[1.75rem]"
    >
      <!-- Column 1 -->
      <div class="flex flex-col gap-[1.5rem] xxxxl:gap-[1.75rem]">
        <Review
          v-for="review in reviewFilterThree(1)"
          :key="review.id"
          :text="review.text"
          :username="review.username"
        />
      </div>
      <!-- Column 2 -->
      <div class="flex flex-col gap-[1.5rem] xxxxl:gap-[1.75rem]">
        <Review
          v-for="review in reviewFilterThree(2)"
          :key="review.id"
          :text="review.text"
          :username="review.username"
        />
      </div>
      <!-- Column 3 -->
      <div class="flex flex-col gap-[1.5rem] xxxxl:gap-[1.75rem]">
        <Review
          v-for="review in reviewFilterThree(3)"
          :key="review.id"
          :text="review.text"
          :username="review.username"
        />
      </div>
    </div>
    <!-- SETUP - Column 1 -->
    <div v-else class="flex justify-center items-center my-[4rem]">
      <div class="flex flex-col gap-[1.5rem]">
        <Review
          v-for="review in reviewFilterOne()"
          :key="review.id"
          :text="review.text"
          :username="review.username"
        />
      </div>
    </div>
    <div class="flex flex-wrap justify-center gap-[1.5rem] xs:gap-[2rem]">
      <Button content="Show More" @click="seeMoreReviews" />
      <Button v-if="!reviewDefaultState" content="Hide" @click="hideMoreReviews" />
    </div>
  </section>
</template>

<style scoped></style>
