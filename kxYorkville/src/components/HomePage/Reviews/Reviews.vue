<script setup>
import Title from '../../UI/Title.vue'

//Prop handling
const { img, imgMobile, isMobile } = defineProps(['img', 'imgMobile', 'isMobile'])
const bgImg = `background-image: url('${img}')`
const bgImgMobile = `background-image: url('${imgMobile}')`
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
    <div class="flex flex-wrap justify-center gap-[2rem] items-center my-[4rem]">
      <!-- Column 1 -->
      <div
        class="w-[230px] flex flex-col gap-[2rem] items-center p-[2rem] bg-bgNormal border-[1px] border-textDarker drop-shadow-xl xs:w-[250px] sm:w-[350px] sm:p-[2.25rem] md:w-[400px] xxxxl:w-[500px]"
      >
        <p class="text-[.875rem] sm:text-[1rem]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus beatae est officiis
          dolore, blanditiis autem mollitia, debitis omnis, veniam suscipit nesciunt! Quos illo
          fugit aspernatur odio? Amet veniam quod eaque!
        </p>
        <div class="flex items-center gap-[.75rem] mr-auto">
          <div
            class="w-[30px] h-[30px] rounded-full bg-primaryColor flex justify-center items-center sm:w-[40px] sm:h-[40px]"
          >
            <font-awesome-icon class="text-[1rem] sm:text-[1.25rem]" :icon="['fas', 'user']" />
          </div>
          <p>username</p>
        </div>
      </div>
      <!-- Column 2 -->
      <div
        class="w-[230px] flex flex-col gap-[2rem] items-center p-[2rem] bg-bgNormal border-[1px] border-textDarker drop-shadow-xl xs:w-[250px] sm:w-[350px] sm:p-[2.25rem] md:w-[400px] xxxxl:w-[500px]"
      >
        <p class="text-[.875rem] sm:text-[1rem]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus beatae est officiis
          dolore, blanditiis autem mollitia, debitis omnis, veniam suscipit nesciunt! Quos illo
          fugit aspernatur odio? Amet veniam quod eaque!
        </p>
        <div class="flex items-center gap-[.75rem] mr-auto">
          <div
            class="w-[30px] h-[30px] rounded-full bg-primaryColor flex justify-center items-center sm:w-[40px] sm:h-[40px]"
          >
            <font-awesome-icon class="text-[1rem] sm:text-[1.25rem]" :icon="['fas', 'user']" />
          </div>
          <p>username</p>
        </div>
      </div>
      <!-- Column 3 -->
      <div
        class="w-[230px] flex flex-col gap-[2rem] items-center p-[2rem] bg-bgNormal border-[1px] border-textDarker drop-shadow-xl xs:w-[250px] sm:w-[350px] sm:p-[2.25rem] md:w-[400px] xxxxl:w-[500px]"
      >
        <p class="text-[.875rem] sm:text-[1rem]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus beatae est officiis
          dolore, blanditiis autem mollitia, debitis omnis, veniam suscipit nesciunt! Quos illo
          fugit aspernatur odio? Amet veniam quod eaque!
        </p>
        <div class="flex items-center gap-[.75rem] mr-auto">
          <div
            class="w-[30px] h-[30px] rounded-full bg-primaryColor flex justify-center items-center sm:w-[40px] sm:h-[40px]"
          >
            <font-awesome-icon class="text-[1rem] sm:text-[1.25rem]" :icon="['fas', 'user']" />
          </div>
          <p>username</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
