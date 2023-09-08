<script setup></script>

<template>
  <section class="grid-container py-[4rem] xxxxl:py-[6rem]">
    <div class="one bg-primaryColor border-[1px] border-black"></div>
    <div class="two bg-primaryColor border-[1px] border-black"></div>
    <div class="three bg-primaryColor border-[1px] border-black"></div>
    <div class="four bg-primaryColor border-[1px] border-black"></div>
    <div class="five bg-primaryColor border-[1px] border-black"></div>
    <div class="six bg-primaryColor border-[1px] border-black"></div>
    <div class="seven bg-primaryColor border-[1px] border-black"></div>
  </section>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(250px, auto);
}

/*----- Small screen -----*/
@media screen and (min-width: 560px) {
  .grid-container {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }

  .one {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .two {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .three {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  .four {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }

  .five {
    grid-column: 2 / 3;
    grid-row: 2 / 4;
  }

  .six {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }

  .seven {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
  }
}
/*----- Medium screen -----*/
@media screen and (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }

  .one {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .two {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .three {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  .four {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  .five {
    grid-column: 3 / 4;
    grid-row: 1 / 4;
  }

  .six {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }

  .seven {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
}
/*----- Large screen -----*/
@media screen and (min-width: 1060px) {
  .grid-container {
    grid-template-columns: repeat(4, minmax(250px, 1fr));
  }

  .one {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .two {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .three {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }

  .four {
    grid-column: 4 / 5;
    grid-row: 1 / 3;
  }

  .five {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  .six {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  .seven {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }
}

/*----- XXL screen -----*/
@media screen and (min-width: 1440px) {
  .grid-container {
    grid-auto-rows: minmax(300px, auto);
  }
}

/*----- XXXL screen -----*/
@media screen and (min-width: 1600px) {
  .grid-container {
    grid-auto-rows: minmax(350px, auto);
  }
}

/*----- XXXXL screen -----*/
@media screen and (min-width: 2000px) {
  .grid-container {
    grid-auto-rows: minmax(400px, auto);
  }
}
</style>
