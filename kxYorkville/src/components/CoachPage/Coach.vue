<script setup>
/* ----- Import assets ----- */
import Title from '../UI/Title.vue'
import Button from '../UI/Button.vue'
//Prop handling
const { singleCoach } = defineProps(['singleCoach'])
</script>

<template>
  <main
    class="flex flex-col pt-[6rem] px-[1rem] md:pt-[8rem] sm:px-[1.5rem] md:px-[2rem] lg:flex-row lg:justify-between lg:px-[4rem] xxl:pt-[8rem] xxxxl:pt-[10rem]"
  >
    <section class="w-[100%] mb-[4rem] lg:w-[48%] sm:mb-[6rem] lg:mb-0">
      <h1
        class="mx-auto leading-none tracking-tighter text-center translate-y-[-1rem] text-[4.5rem] font-semibold text-textDark xs:text-[5rem] sm:text-[9rem] md:text-[13rem] md:translate-y-[-3rem] lg:text-[11rem] lg:translate-y-[-1rem] lg:ml-0 lg:text-left lg:translate-x-[-4rem] xl:text-[12rem] xl:translate-y-[-1.5rem] xxl:text-[14rem] xxxl:text-[16rem] xxxxl:text-[20rem] xxxxl:translate-y-[-2rem]"
      >
        coach
      </h1>
      <p
        class="mt-[1rem] font-oswald text-[1.5rem] text-textGray leading-tight sm:text-[2rem] md:mt-0 md:text-[2.5rem] lg:mt-[2rem] xxl:text-[3rem] xxxxl:text-[4rem]"
      >
        "{{ singleCoach.motto }}"
      </p>
      <div
        class="mt-[2rem] flex flex-col gap-[2rem] sm:mt-[3rem] sm:flex-row sm:items-center sm:gap-[3rem] md:mt-[4rem] xxl:mt-[4rem] xxl:gap-[4rem] xxxxl:mt-[5rem]"
      >
        <p
          class="text-primaryColor font-[500] sm:text-[1.125rem] md:text-[1.25rem] xxl:text-[1.5rem] xxxxl:text-[1.75rem]"
        >
          {{ singleCoach.profession }}
        </p>
        <form v-if="singleCoach.profession === 'Body Building'"></form>
        <button
          v-else="singleCoach.profession !== 'Body Building'"
          class="font-oswald flex flex-col w-fit text-[1rem] relative group overflow-hidden"
        >
          <span
            class="font-[500] py-[.375rem] px-[1.125rem] border-[1px] border-bgColorDark z-[1] ease-in duration-[.15s] delay-[.05s] xs:text-[1.125rem] md:py-[.5rem] md:px-[1.25rem] md:text-[1.25rem] xxl:text-[1.5rem] xxxxl:text-[1.75rem]"
            >Schedule class</span
          >
          <span
            class="font-[500] w-[0px] py-[.375rem] text-transparent bg-bgColorDark border-y-[1px] border-transparent absolute group-hover:w-[100%] group-hover:px-[1.125rem] ease-in duration-[.2s] xs:text-[1.125rem] md:py-[.5rem] md:group-hover:px-[1.25rem] md:text-[1.25rem] xxl:text-[1.5rem] xxxxl:text-[1.75rem]"
            >Schedule class</span
          >
        </button>
      </div>
    </section>
    <section class="w-[100%] mb-[2rem] sm:mb-[3.5rem] lg:w-[48%]">
      <div
        class="w-[100%] h-[300px] bg-cover bg-no-repeat bg-center-top-mid brightness-[90%] rounded-[15px] drop-shadow-2xl xs:h-[350px] sm:h-[400px] md:h-[600px] md:rounded-l-[20px] md:rounded-br-[20px] lg:rounded-tl-0 lg:h-[750px] xxxxl:h-[880px]"
        :style="`background-image: url('${singleCoach.img}')`"
      >
        <h2
          class="absolute top-0 right-[50%] translate-x-[50%] text-center leading-tight py-[.5rem] px-[1.25rem] bg-bgDark font-[600] text-textGray rounded-b-[15px] brightness-[110%] sm:py-[.75rem] sm:px-[1.5rem] sm:text-[1.5rem] md:text-[2rem] md:rounded-b-[17px] lg:text-left lg:rounded-br-[0px] lg:right-0 lg:translate-x-0 xxxl:text-[2.5rem] xxxxl:text-[3rem]"
        >
          {{ singleCoach.name }}
        </h2>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
