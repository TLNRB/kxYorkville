<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { RouterLink } from 'vue-router'
/* ----- Import assets ----- */
import Title from '../../UI/Title.vue'
import Button from '../../UI/Button.vue'
import Review from '../Reviews/Review.vue'
/* ----- Import store ----- */
import { useStoreUserService } from '../../../stores/storeUserService.js'
import { useStoreReviews } from '../../../stores/storeReviews.js'
const storeUserService = useStoreUserService()
const storeReviews = useStoreReviews()

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

/*===== Filtering reviews based on column value =====*/
let reviewsToShowSmall = ref('')
let reviewsToShowLarge = ref('')
let reviewDefaultState = ref(true)

const seeMoreReviews = () => {
  if (isDesktopLarge) {
    if (storeReviews.reviews.length == reviewsToShowLarge.value) {
      return
    } else if (storeReviews.reviews.length > reviewsToShowLarge.value + 5) {
      reviewsToShowLarge.value += 5
      reviewFilterThree(1)
      reviewFilterThree(2)
      reviewFilterThree(3)
      reviewDefaultState.value = false
    } else {
      reviewsToShowLarge.value += storeReviews.reviews.length - reviewsToShowLarge.value
      reviewFilterThree(1)
      reviewFilterThree(2)
      reviewFilterThree(3)
      reviewDefaultState.value = false
    }
  } else if (isDesktopMedium) {
    if (storeReviews.reviews.length == reviewsToShowSmall.value) {
      return
    } else if (storeReviews.reviews.length > reviewsToShowSmall.value + 5) {
      reviewsToShowSmall.value += 5
      reviewFilterTwo(1)
      reviewFilterTwo(2)
      reviewDefaultState.value = false
    } else {
      reviewsToShowSmall.value += storeReviews.reviews.length - reviewsToShowSmall.value
      reviewFilterTwo(1)
      reviewFilterTwo(2)
      reviewDefaultState.value = false
    }
  } else {
    if (storeReviews.reviews.length == reviewsToShowSmall.value) {
      return
    } else if (storeReviews.reviews.length > reviewsToShowSmall.value + 5) {
      reviewsToShowSmall.value += 5
      reviewFilterOne()
      reviewDefaultState.value = false
    } else {
      reviewsToShowSmall.value += storeReviews.reviews.length - reviewsToShowSmall.value
      reviewFilterOne()
      reviewDefaultState.value = false
    }
  }
}

// Hide reviews
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
  const tempArray = storeReviews?.reviews.slice(0, reviewsToShowLarge.value)
  return tempArray.filter((_, index) => index % 3 === colNum - 1)
}

const reviewFilterTwo = (colNum) => {
  const tempArray = storeReviews?.reviews.slice(0, reviewsToShowSmall.value)
  return tempArray.filter((_, index) => index % 2 === colNum - 1)
}

const reviewFilterOne = () => {
  const tempArray = storeReviews?.reviews.slice(0, reviewsToShowSmall.value)
  return tempArray
}

// Textarea resizing
const autoResize = (event) => {
  const textarea = event.target
  textarea.style.height = 'auto' // Reset the height to auto
  textarea.style.height = textarea.scrollHeight + 'px' // Set the height to match the content
}

/*===== Reviews handling =====*/
//--V-model for review inputs
const newReview = reactive({
  userID: '',
  username: '',
  review: '',
  date: ''
})

//--Clear values for class inputs
const valueClear = () => {
  newReview.userID = ''
  newReview.username = ''
  newReview.userImg = ''
  newReview.review = ''
  newReview.date = ''
}

//--Add review
const addReview = () => {
  const currentDate = new Date().getTime()
  newReview.userID = storeUserService.userAuth.id
  newReview.username = storeUserService.userData.username
  newReview.userImg = storeUserService.userData.img
  newReview.date = currentDate.toString()
  storeReviews.addReview(newReview)
  valueClear()
}

/*----- Delete Section -----*/
const deleteReview = ref(0)
const deleteID = ref('')

//--Toggle delete modal
const toggleDelete = (index) => {
  deleteReview.value = index
}

//--Open Delete Modal
const openDeleteModal = (id) => {
  deleteID.value = id
  toggleDelete(id)
}

//--Close Delete Modal
const closeDeleteModal = () => {
  toggleDelete(0)
  deleteID.value = ''
}

//--Confirm Delete Modal review
const confirmDelete = () => {
  storeReviews.deleteReview(deleteID.value)
  closeDeleteModal()
}

onMounted(() => {
  const reviewFetchCheck = computed(() => storeReviews.reviews)
  watch(reviewFetchCheck, () => {
    reviewsToShowSmall.value = storeReviews.reviews.length > 5 ? 5 : storeReviews.reviews.length
    reviewsToShowLarge.value = storeReviews.reviews.length > 8 ? 8 : storeReviews.reviews.length
  })
})
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
    <form
      @submit.prevent="addReview"
      class="w-[230px] flex flex-col gap-[2rem] mt-[3rem] mx-auto items-center p-[1.5rem] bg-bgNormal border-[1px] border-textDarker rounded-[15px] drop-shadow-xl xs:w-[250px] sm:w-[350px] sm:p-[2rem] md:rounded-[20px] md:w-[400px] lg:w-[824px] xxl:w-[1248px] xxxxl:w-[1548px]"
    >
      <textarea
        :disabled="!storeUserService.userAuth.id"
        v-model="newReview.review"
        placeholder="Leave a review..."
        class="w-[100%] min-h-[2rem] max-h-[50rem] py-[.25rem] bg-transparent text-textGray border-b-[1px] border-primaryColor text-[.875rem] outline-none placeholder:text-textDarker xs:py-[.375rem] sm:text-[1rem] md:py-[.5rem]"
        @input="autoResize"
      ></textarea>
      <div
        v-if="storeUserService.userAuth.id"
        class="flex justify-center gap-[1rem] mt-auto md:gap-[1.5rem]"
      >
        <!-- Review button -->
        <button type="submit" class="font-oswald flex flex-col w-fit text-[1rem] relative group">
          <span
            class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-bgColorDark z-[1] ease-in duration-[.15s] delay-[.05s] md:py-[.375rem] md:px-[1.125rem] md:text-[1.125rem]"
            >Review</span
          >
          <span
            class="font-[500] w-[0px] py-[.25rem] text-transparent bg-bgColorDark border-y-[1px] border-transparent absolute group-hover:w-[100%] group-hover:px-[1.125rem] ease-in duration-[.2s] md:py-[.375rem] md:group-hover:px-[1.125rem] md:text-[1.125rem]"
            >Review</span
          >
        </button>
        <!-- Cancel button -->
        <button
          type="button"
          @click="valueClear"
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
      <RouterLink
        to="/account"
        v-else
        class="text-bgColorLightest italic text-[.875rem] sm:text-[1rem] xl:text-[1.125rem]"
      >
        Login to leave a review
      </RouterLink>
    </form>
    <div v-if="storeReviews?.reviews">
      <!-- SETUP - Column 2 -->
      <div
        v-if="isDesktopMedium"
        class="flex flex-row justify-center items-start gap-[1.5rem] my-[4rem]"
      >
        <!-- Column 1 -->
        <div class="flex flex-col gap-[1.5rem]">
          <Review v-for="review in reviewFilterTwo(1)" :key="review.id" :review="review" />
        </div>
        <!-- Column 2 -->
        <div class="flex flex-col gap-[1.5rem]">
          <Review v-for="review in reviewFilterTwo(2)" :key="review.id" :review="review" />
        </div>
      </div>
      <!-- SETUP - Column 3 -->
      <div
        v-else-if="isDesktopLarge"
        class="flex justify-center gap-[1.5rem] my-[4rem] xxxxl:gap-[1.75rem]"
      >
        <!-- Column 1 -->
        <div class="flex flex-col gap-[1.5rem] xxxxl:gap-[1.75rem]">
          <Review v-for="review in reviewFilterThree(1)" :key="review.id" :review="review" />
        </div>
        <!-- Column 2 -->
        <div class="flex flex-col gap-[1.5rem] xxxxl:gap-[1.75rem]">
          <Review v-for="review in reviewFilterThree(2)" :key="review.id" :review="review" />
        </div>
        <!-- Column 3 -->
        <div class="flex flex-col gap-[1.5rem] xxxxl:gap-[1.75rem]">
          <Review v-for="review in reviewFilterThree(3)" :key="review.id" :review="review" />
        </div>
      </div>
      <!-- SETUP - Column 1 -->
      <div v-else class="flex justify-center items-center my-[4rem]">
        <div class="flex flex-col gap-[1.5rem]">
          <Review v-for="review in reviewFilterOne()" :key="review.id" :review="review" />
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center gap-[1.5rem] xs:gap-[2rem]">
      <Button content="Show More" @click="seeMoreReviews" />
      <Button v-if="!reviewDefaultState" content="Hide" @click="hideMoreReviews" />
    </div>
  </section>
</template>

<style scoped>
textarea {
  resize: none;
  overflow: hidden;
}
</style>
