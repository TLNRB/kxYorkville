<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

/* ----- Store handling ----- */
import { useStoreAuth } from '../stores/storeAuth.js'
import { useStoreUserService } from '../stores/storeUserService.js'
const storeAuth = useStoreAuth()
const storeUserService = useStoreUserService()

//Nav and dropdown click event
const isMenuOpen = ref(false)
const isLoginOpen = ref(false)
const screenWidth = ref(window.innerWidth)

//Watch for route changes
const route = ref('')
const router = useRouter()

watch(router.currentRoute, () => {
  route.value = router.currentRoute.value.name
})

//Handle navbar navigation on clicking
const handleSelectSection = (id) => {
  const section = document.getElementById(id)
  section.scrollIntoView({ behavior: 'smooth' })
  toggleMenu()
}

//Toggle menu dropdown
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  isLoginOpen.value = false
}

//Toggle login dropdown
const toggleLogin = () => {
  isLoginOpen.value = !isLoginOpen.value
  isMenuOpen.value = false
}

//Logout
const logout = () => {
  storeAuth.logOutUser()
  isLoginOpen.value = false
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
  <header class="fixed top-0 right-0 left-0 z-[10]">
    <nav
      class="min-h-[62px] flex justify-between items-center w-[100%] py-[1rem] px-[1rem] backdrop-blur-[14px] md:px-[2rem]"
      :class="{ 'nav-active': isMenuOpen }"
    >
      <div v-if="route === 'home'">
        <div @click="toggleMenu" class="menu-icon">
          <span class="menu-icon__line menu-icon__line-top"></span>
          <span class="menu-icon__line menu-icon__line-middle"></span>
          <span class="menu-icon__line menu-icon__line-bottom"></span>
        </div>
        <div
          class="font-oswald absolute translate-y-0 duration-[.25s] ease-in-out left-0 top-0 right-0 flex gap-[2.5rem] flex-wrap pt-[5.5rem] pb-[1.5rem] px-[2rem] bg-bgNavDark text-[1.5rem] text-textDarker drop-shadow-2xl md:px-[2rem] md:text-[1.75rem] lg:gap-0 xxxl:pt-[7rem] xxxl:pb-[2rem]"
          :class="{ menuClosed: !isMenuOpen }"
        >
          <RouterLink
            to="/"
            @click="toggleMenu"
            class="mx-auto w-[25%] flex flex-col items-center gap-[.5rem] hover:text-textLight ease-out duration-[.2s] cursor-pointer"
          >
            <font-awesome-icon class="text-[2rem] md:text-[2.5rem]" :icon="['fas', 'house']" />
            <p>Home</p>
          </RouterLink>
          <div
            @click="handleSelectSection('classes')"
            class="mx-auto flex w-[25%] flex-col items-center gap-[.5rem] hover:text-textLight ease-out duration-[.2s] cursor-pointer"
          >
            <font-awesome-icon class="text-[2rem] md:text-[2.5rem]" :icon="['fas', 'dumbbell']" />
            <p>Classes</p>
          </div>
          <div
            @click="handleSelectSection('coaches')"
            class="mx-auto flex w-[25%] flex-col items-center gap-[.5rem] hover:text-textLight ease-out duration-[.2s] cursor-pointer"
          >
            <font-awesome-icon
              class="text-[2rem] md:text-[2.5rem]"
              :icon="['fas', 'people-group']"
            />
            <p>Coaches</p>
          </div>
          <RouterLink
            to="/timetable"
            @click="toggleMenu"
            class="mx-auto flex w-[25%] flex-col items-center gap-[.5rem] hover:text-textLight ease-out duration-[.2s] cursor-pointer"
          >
            <font-awesome-icon class="text-[2rem] md:text-[2.5rem]" :icon="['fas', 'calendar']" />
            <p>Timetable</p>
          </RouterLink>
        </div>
      </div>
      <RouterLink
        to="/"
        v-if="screenWidth < 360"
        @click="isMenuOpen = false"
        class="uppercase font-[600] tracking-[1px] text-[1.25rem] drop-shadow-md absolute ml-[50%] translate-x-[-75%]"
      >
        K<span class="ml-[-.1125rem] font-[600] drop-shadow-md">X</span> Y
      </RouterLink>
      <RouterLink
        to="/"
        v-else
        @click="isMenuOpen = false"
        class="uppercase font-[600] tracking-[1px] text-[1.25rem] drop-shadow-md absolute ml-[50%] translate-x-[-55%] md:translate-x-[-75%] lg:text-[1.5rem]"
      >
        K<span class="ml-[-.1125rem] font-[600] drop-shadow-md">X</span> Yorkville
      </RouterLink>
      <!-- Login/Profile -->
      <RouterLink
        to="/account"
        v-if="!storeUserService.userAuth.id"
        @click="isMenuOpen = false"
        class="ml-auto font-oswald tracking-[1px] drop-shadow-md z-[2]"
      >
        login
      </RouterLink>
      <div v-else @click="toggleLogin" class="ml-auto z-[2]">
        <button
          v-if="!storeUserService.userData.img"
          class="w-[30px] h-[30px] rounded-full bg-primaryColor flex justify-center items-center"
        >
          <font-awesome-icon class="text-[1rem]" :icon="['fas', 'user']" />
        </button>
        <button
          v-else
          class="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-cover bg-center-top-mid bg-no-repeat"
          :style="`background-image: url('${storeUserService.userData.img}')`"
        ></button>
      </div>
      <div
        class="w-[250px] absolute top-[3rem] right-[1rem] rounded-[10px] bg-bgNavDark drop-shadow-2xl"
        :class="{ hidden: !isLoginOpen }"
      >
        <div class="p-[1rem] flex items-center gap-[1rem] border-b border-textDarker">
          <div>
            <div
              v-if="!storeUserService.userData.img"
              class="w-[40px] h-[40px] rounded-full bg-primaryColor flex justify-center items-center"
            >
              <font-awesome-icon class="text-[1.25rem]" :icon="['fas', 'user']" />
            </div>
            <div
              v-else
              class="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-cover bg-center-top-mid bg-no-repeat"
              :style="`background-image: url('${storeUserService.userData.img}')`"
            ></div>
          </div>
          <p class="font-oswald text-[1.125rem]">
            {{
              storeUserService.userData.username === undefined
                ? storeAuth.userData.username
                : storeUserService.userData.username
            }}
          </p>
        </div>
        <div class="my-[.5rem]">
          <!-- Admin -->
          <RouterLink
            to="/admin"
            v-if="storeUserService.userAuth.email === 'admin@admin.com'"
            @click="toggleLogin"
            class="flex items-center gap-[1rem] py-[.375rem] px-[1rem] hover:bg-bgHoverDark duration-[.15s] ease-out cursor-pointer"
          >
            <font-awesome-icon
              class="text-[1.125rem] translate-x-[2px]"
              :icon="['fas', 'screwdriver-wrench']"
            />
            <p class="text-[.875rem]">admin</p>
          </RouterLink>
          <RouterLink
            to="/account"
            @click="toggleLogin"
            class="flex items-center gap-[1rem] py-[.375rem] px-[1rem] hover:bg-bgHoverDark duration-[.15s] ease-out cursor-pointer"
          >
            <font-awesome-icon class="text-[1.125rem] translate-x-[2px]" :icon="['fas', 'gear']" />
            <p class="text-[.875rem]">Your Account</p>
          </RouterLink>
          <div
            @click="logout"
            class="flex items-center gap-[1rem] py-[.375rem] px-[1rem] hover:bg-bgHoverDark duration-[.15s] ease-out cursor-pointer"
          >
            <font-awesome-icon class="text-[1.125rem]" :icon="['fas', 'arrow-right-to-bracket']" />
            <p class="text-[.875rem]">Logout</p>
          </div>
        </div>
      </div>
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
