<script setup></script>

<template>
  <footer
    class="flex flex-col-reverse justify-between items-start py-[2.5rem] px-[1rem] text-[.875rem] sm:text-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:flex-row lg:px-[4rem]"
  >
    <div class="w-[100%] pt-[1.5rem] sm:pt-[2rem] lg:py-0 lg:w-fit">
      <p
        class="mb-[.375rem] text-[.75rem] font-[600] uppercase text-bgColorLightest sm:text-[.875rem]"
      >
        Version
      </p>
      <p class="font-oswald text-textGray">2023 &copy; KX Yorkville</p>
    </div>
    <div
      class="w-[100%] py-[1.5rem] border-b-[1px] border-y-bgColorLightest sm:py-[2rem] lg:py-0 lg:border-none lg:w-fit"
    >
      <p
        class="mb-[.375rem] text-[.75rem] font-[600] uppercase text-bgColorLightest sm:text-[.875rem]"
      >
        Opening
      </p>
      <div class="flex gap-[1rem] font-oswald uppercase">
        <div class="flex flex-col text-textGray">
          <p class="font-[500]">Monday to Friday</p>
          <p class="font-[500]">Saturday</p>
          <p class="font-[500]">Sunday/Holiday</p>
        </div>
        <div class="flex flex-col text-primaryColor">
          <p class="font-[500]">07H-22H</p>
          <p class="font-[500]">08H-22H</p>
          <p class="font-[500]">08H-20H</p>
        </div>
      </div>
    </div>
    <div
      class="w-[100%] pb-[1.5rem] border-b-[1px] border-y-bgColorLightest sm:pb-[2rem] lg:py-0 lg:border-none lg:w-fit"
    >
      <p
        class="mb-[.375rem] text-[.75rem] font-[600] uppercase text-bgColorLightest sm:text-[.875rem]"
      >
        Contact
      </p>
      <div class="flex gap-[1rem] font-oswald uppercase">
        <div class="flex flex-col text-textGray">
          <p class="font-[500]">Phone</p>
          <p class="font-[500]">Email</p>
          <p class="font-[500]">Address</p>
        </div>
        <div class="flex flex-col text-primaryColor">
          <p class="font-[500]">+1 596-322-7824</p>
          <p class="font-[500]">info@kxyorkville.com</p>
          <p class="font-[500]">263 Davenport Rd, Toronto, ON M5R 1J9, Canada</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
