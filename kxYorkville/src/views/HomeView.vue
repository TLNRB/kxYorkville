<script setup></script>

<template>
  <header>
    <nav class="nav-active flex justify-between items-center mt-[1rem]">
      <div>
        <div @click="toggleMenu" class="menu-icon">
          <span class="menu-icon__line menu-icon__line-top"></span>
          <span class="menu-icon__line menu-icon__line-middle"></span>
          <span class="menu-icon__line menu-icon__line-bottom"></span>
        </div>
        <div>
          <div>Home</div>
          <div>Classes</div>
          <div>Coaches</div>
          <div>Timetable</div>
        </div>
      </div>
      <div class="uppercase font-[600] tracking-[1px] text-[1.125rem]">
        K<span class="ml-[-.1125rem] font-[600]">X</span> Yorkville
      </div>
      <div>Login</div>
    </nav>
  </header>
</template>

<style scoped>
/* ----- Menu Icon ----- */
.menu-icon {
  margin-left: auto;
  margin-right: 1.25rem;
  height: 30px;
  width: 50px;
  position: relative;
  z-index: 2;
  cursor: pointer;
  display: block;
}
.menu-icon__line {
  height: 2px;
  width: 50px;
  display: block;
  background-color: #fff;
  margin-bottom: 6px;
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
.menu-icon__line-top {
  -webkit-transition: all 150ms ease;
  -moz-transition: all 150ms ease;
  -o-transition: all 150ms ease;
  -ms-transition: all 150ms ease;
  transition: all 150ms ease;
}
.menu-icon__line-bottom {
  -webkit-transition: all 150ms ease;
  -moz-transition: all 150ms ease;
  -o-transition: all 150ms ease;
  -ms-transition: all 150ms ease;
  transition: all 150ms ease;
}
.menu-icon:hover .menu-icon__line-top {
  transform: translateY(-3px);
}
.menu-icon:hover .menu-icon__line-bottom {
  transform: translateY(3px);
}

/* Menu drowdown onclick */
.nav-active .menu-icon {
  width: 30px;
}
.nav-active .menu-icon__line {
  width: 30px;
  background-color: #fff;
  -webkit-transform: translate(0px, 0px) rotate(-45deg);
  transform: translate(0px, 0px) rotate(-45deg);
}
.nav-active .menu-icon__line-top {
  -webkit-transform: translate(0px, 8.5) rotate(45deg);
  transform: translate(0px, 8.5px) rotate(45deg);
}

.nav-active .menu-icon__line-middle {
  opacity: 0;
}
.nav-active .menu-icon__line-bottom {
  -webkit-transform: translate(0px, -8px) rotate(-45deg);
  transform: translate(0px, -8px) rotate(-45deg);
}
</style>
