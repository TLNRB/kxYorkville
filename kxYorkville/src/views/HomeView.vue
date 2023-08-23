<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

/* ----- Nav and dropdown click event ----- */
const isMenuOpen = ref(false)
const screenWidth = ref(window.innerWidth)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

//Resize handling
function handleResize() {
  screenWidth.value = window.innerWidth
}

// Add resize event listener when component is mounted
onMounted(() => {
  window.addEventListener('resize', handleResize)
})
// Remove resize event listener when component is mounted
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <header>
    <nav
      class="flex justify-between items-center py-[1rem] px-[1rem] backdrop-blur-[10px]"
      :class="{ 'nav-active': isMenuOpen && screenWidth <= 768 }"
    >
      <div>
        <div @click="toggleMenu" class="menu-icon">
          <span class="menu-icon__line menu-icon__line-top"></span>
          <span class="menu-icon__line menu-icon__line-middle"></span>
          <span class="menu-icon__line menu-icon__line-bottom"></span>
        </div>
        <div class="hidden">
          <div>Home</div>
          <div>Classes</div>
          <div>Coaches</div>
          <div>Timetable</div>
        </div>
      </div>
      <div
        v-if="screenWidth < 360"
        class="uppercase font-[600] tracking-[1px] text-[1.25rem] absolute ml-[50%] translate-x-[-50%]"
      >
        K<span class="ml-[-.1125rem] font-[600]">X</span> Y
      </div>
      <div
        v-else
        class="uppercase font-[600] tracking-[1px] text-[1.25rem] absolute ml-[50%] translate-x-[-50%]"
      >
        K<span class="ml-[-.1125rem] font-[600]">X</span> Yorkville
      </div>
      <div>Login</div>
    </nav>
  </header>
</template>

<style scoped>
/* ----- Menu Icon ----- */
.menu-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;

  height: 30px;
  width: 30px;
  position: relative;
  z-index: 2;
  cursor: pointer;
}
.menu-icon__line {
  height: 2px;
  width: 30px;
  display: block;
  background-color: #fff;
  cursor: pointer;
  -webkit-transition:
    background-color 0.5s ease,
    -webkit-transform 0.2s ease;
  transition:
    background-color 0.5s ease,
    -webkit-transform 0.2s ease;
  transition:
    transform 0.2s ease,
    background-color 0.5s ease;
  transition:
    transform 0.2s ease,
    background-color 0.5s ease,
    -webkit-transform 0.2s ease;
}
.menu-icon__line-top,
.menu-icon__line-bottom {
  -webkit-transition: all 150ms ease;
  -moz-transition: all 150ms ease;
  -o-transition: all 150ms ease;
  -ms-transition: all 150ms ease;
  transition: all 150ms ease;
}
.menu-icon:hover .menu-icon__line-top {
  transform: translateY(-2px);
}
.menu-icon:hover .menu-icon__line-bottom {
  transform: translateY(2px);
}

/* Menu drowdown onclick */
.nav-active .menu-icon__line {
  background-color: #fff;
  -webkit-transform: translate(0px, 0px) rotate(-45deg);
  transform: translate(0px, 0px) rotate(-45deg);
}
.nav-active .menu-icon__line-top {
  width: 15px;
  -webkit-transform: translate(-5.5px, 3px) rotate(45deg);
  transform: translate(-5px, 3px) rotate(45deg);
}
.nav-active .menu-icon__line-bottom {
  width: 15px;
  -webkit-transform: translate(-3px, -3.5px) rotate(45deg);
  transform: translate(5.5px, -2.5px) rotate(45deg);
}
.nav-active .menu-icon:hover .menu-icon__line-top {
  transform: translateY(0);
  -webkit-transform: translate(-5.5px, 3px) rotate(45deg);
  transform: translate(-5px, 3px) rotate(45deg);
}
.nav-active .menu-icon:hover .menu-icon__line-bottom {
  transform: translateY(0);
  -webkit-transform: translate(-3px, -3.5px) rotate(45deg);
  transform: translate(5.5px, -2.5px) rotate(45deg);
}
</style>
