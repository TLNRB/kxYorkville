<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import videoDesktop from '../assets/images/weights.mp4'
import videoMobile from '../assets/images/weightsVertical.mp4'

/* ----- Checking if the screen size is mobile ----- */
const isMobile = ref(false)

//Resize handling
function handleResize() {
  isMobile.value = window.innerWidth < 768
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
  <section class="">
    <video
      class="object-cover w-[100%] h-[100vh]"
      :src="!isMobile ? videoDesktop : videoMobile"
      autoplay
      loop
      muted
    ></video>
  </section>
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
