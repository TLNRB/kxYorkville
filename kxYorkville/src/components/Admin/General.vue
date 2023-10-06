<script setup></script>

<template>
  <section class="mt-[3rem] pb-[2rem] lg:mt-[4rem] xxxxl:mt-[6rem]">
    <!-- Opening -->
    <div class="max-w-[750px] md:mx-auto">
      <h2 class="mb-[1rem] text-[1.25rem] text-textGray font-[600]">Opening Hours</h2>
      <div
        class="flex flex-col mb-[1.5rem] gap-[1.5rem] p-[1.25rem] bg-bgNormal border-[1px] border-primaryColor sm:gap-[2rem]"
      >
        <!-- Monday-Friday -->
        <div
          class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
        >
          <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Monday-Friday</h3>
          <input
            type="text"
            value="07H-22H"
            class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
          />
        </div>
        <!-- Saturday -->
        <div
          class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
        >
          <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Saturday</h3>
          <input
            type="text"
            value="08H-22H"
            class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
          />
        </div>
        <!-- Sunday -->
        <div
          class="flex flex-col gap-[.5rem] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
        >
          <h3 class="text-[.875rem] text-textGray sm:text-[1rem] sm:w-[200px]">Sunday</h3>
          <input
            type="text"
            value="08H-20H"
            class="w-[100%] bg-bgDark py-[.25rem] px-[.75rem] text-[.875rem] outline-none border-[1px] border-bgColorDark sm:py-[.25rem] sm:px-[.875rem] sm:text-[1rem]"
          />
        </div>
      </div>
    </div>
    <button
      type="submit"
      class="font-oswald flex flex-col w-fit text-[1rem] relative group md:mx-auto"
    >
      <span
        class="font-[500] py-[.25rem] px-[1rem] border-[1px] border-bgColorDark z-[1] ease-in duration-[.15s] delay-[.05s] md:py-[.375rem] md:px-[1.125rem] md:text-[1.125rem]"
        >Save</span
      >
      <span
        class="font-[500] w-[0px] py-[.25rem] text-transparent bg-bgColorDark border-y-[1px] border-transparent absolute group-hover:w-[100%] group-hover:px-[1.125rem] ease-in duration-[.2s] md:py-[.375rem] md:group-hover:px-[1.125rem] md:text-[1.125rem]"
        >Save</span
      >
    </button>
  </section>
</template>

<style scoped></style>
