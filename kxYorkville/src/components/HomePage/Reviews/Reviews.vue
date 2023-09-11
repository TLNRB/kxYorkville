<script setup>
/* ----- Import assets ----- */
import Title from '../../UI/Title.vue'
import Review from '../Reviews/Review.vue'
import reviewsDB from '../../../data/reviewsDB.js'

//Prop handling
const { img, imgMobile, isMobile, isDesktopLarge } = defineProps([
  'img',
  'imgMobile',
  'isMobile',
  'isDesktopLarge'
])
const bgImg = `background-image: url('${img}')`
const bgImgMobile = `background-image: url('${imgMobile}')`

/* ---------- Filtering reviews based on column value ---------- */
const reviewFilterThree = (colNum) => {
  return reviewsDB.filter((_, index) => index % 3 === colNum - 1)
}
const reviewFilterTwo = (colNum) => {
  return reviewsDB.filter((_, index) => index % 2 === colNum - 1)
}
</script>

<template>
  <section
    class="my-[4rem] py-[4rem] px-[1rem] bg-cover bg-center-bottom-mid bg-no-repeat brightness-[85%] drop-shadow-2xl md:px-[2rem] xxl:py-[6rem] xxxxl:px-[4rem] xxxxl:my-[6rem]"
    :style="!isMobile ? bgImg : bgImgMobile"
  >
    <div
      class="absolute left-0 top-0 right-0 bottom-0 backdrop-blur-[6px] z-[-1] sm:backdrop-blur-[8px] lg:backdrop-blur-[10px]"
    ></div>
    <Title content="testimonials" />
    <div
      v-if="!isDesktopLarge"
      class="flex flex-col justify-center items-center gap-[1.5rem] my-[4rem] lg:items-start lg:flex-row"
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
    <div v-else class="flex justify-center gap-[1.5rem] my-[4rem] xxxxl:gap-[1.75rem]">
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
  </section>
</template>

<style scoped></style>
