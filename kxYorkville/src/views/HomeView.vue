<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import twd from '../assets/images/twd.jpg'

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
  <header :style="{ backgroundImage: 'url(' + twd + ')' }">
    <nav
      class="flex justify-between items-center w-[100%] py-[1rem] px-[1rem] backdrop-blur-[12px] md:px-[2rem]"
      :class="{ 'nav-active': isMenuOpen }"
    >
      <div>
        <div @click="toggleMenu" class="menu-icon">
          <span class="menu-icon__line menu-icon__line-top"></span>
          <span class="menu-icon__line menu-icon__line-middle"></span>
          <span class="menu-icon__line menu-icon__line-bottom"></span>
        </div>
        <div
          class="font-oswald absolute translate-y-0 duration-[.25s] ease-in-out left-0 top-0 right-0 flex gap-[2.5rem] flex-wrap justify-between pt-[5.5rem] pb-[1.5rem] px-[2rem] bg-bgMenuBlack text-[1.5rem] text-textDarker md:px-[2rem] md:text-[1.75rem] xxxl:pt-[7rem] xxxl:pb-[2rem]"
          :class="{ menuClosed: !isMenuOpen }"
        >
          <div
            class="mx-auto flex flex-col gap-[.5rem] hover:text-textLight ease-out duration-[.2s] cursor-pointer"
          >
            <font-awesome-icon class="text-[2rem] md:text-[2.5rem]" :icon="['fas', 'house']" />
            <p>Home</p>
          </div>
          <div
            class="mx-auto flex flex-col gap-[.5rem] hover:text-textLight ease-out duration-[.2s] cursor-pointer"
          >
            <font-awesome-icon class="text-[2rem] md:text-[2.5rem]" :icon="['fas', 'dumbbell']" />
            <p>Classes</p>
          </div>
          <div
            class="mx-auto flex flex-col gap-[.5rem] hover:text-textLight ease-out duration-[.2s] cursor-pointer"
          >
            <font-awesome-icon
              class="text-[2rem] md:text-[2.5rem]"
              :icon="['fas', 'people-group']"
            />
            <p>Coaches</p>
          </div>
          <div
            class="mx-auto flex flex-col gap-[.5rem] hover:text-textLight ease-out duration-[.2s] cursor-pointer"
          >
            <font-awesome-icon class="text-[2rem] md:text-[2.5rem]" :icon="['fas', 'calendar']" />
            <p>Timetable</p>
          </div>
        </div>
      </div>
      <div
        v-if="screenWidth < 360"
        class="uppercase font-[600] tracking-[1px] text-[1.25rem] absolute ml-[50%] translate-x-[-75%]"
      >
        K<span class="ml-[-.1125rem] font-[600]">X</span> Y
      </div>
      <div
        v-else
        class="uppercase font-[600] tracking-[1px] text-[1.25rem] absolute ml-[50%] translate-x-[-50%] md:translate-x-[-75%] lg:text-[1.5rem]"
      >
        K<span class="ml-[-.1125rem] font-[600]">X</span> Yorkville
      </div>
      <div class="z-[2]">Login</div>
      <hr
        class="absolute border-textDarker top-[4rem] left-[1rem] right-[1rem] md:left-[2rem] md:right-[2rem] xxxl:top-[4.5rem]"
        :class="{ hidden: !isMenuOpen }"
      />
    </nav>
  </header>
</template>

<style scoped>
/* ----- Menu ----- */
.menuClosed {
  transform: translateY(-100%);
  transition: all 0.25s ease-in-out;
}

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

@media screen and (min-width: 1400px) {
  .menu-icon {
    width: 50px;
  }
  .menu-icon__line {
    width: 50px;
  }

  .nav-active .menu-icon__line {
    width: 30px;
  }

  .nav-active .menu-icon__line-top,
  .nav-active .menu-icon__line-bottom {
    width: 15px;
  }
}
</style>
