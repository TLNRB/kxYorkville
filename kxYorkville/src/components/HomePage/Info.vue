<script setup>
/* ----- Import assets ----- */
import mosaicBallImage from '../../assets/images/mosaic/mosaic-ball.jpg'
import mosaicBoxImage from '../../assets/images/mosaic/mosaic-box.jpg'
import mosaicCardioImage from '../../assets/images/mosaic/mosaic-cardio.jpg'

/* const gridClassNameArray = [
  `grid-one bg-[url('${mosaicBallImage}')]`,
  'grid-two',
  `grid-three bg-[url('${mosaicBoxImage}')]`,
  'grid-four',
  'grid-five',
  `grid-six bg-[url('${mosaicCardioImage}')]`,
  'grid-seven'
] */

const gridClassNameArray = [
  {
    id: 1,
    class: 'grid-one bg-cover bg-center-top-mid bg-no-repeat',
    style: `background-image: url('${mosaicBallImage}')`
  },
  { id: 2, class: 'grid-two' },
  {
    id: 3,
    class: 'grid-three bg-cover bg-center-top-mid bg-no-repeat',
    style: `background-image: url('${mosaicBoxImage}')`
  },
  { id: 4, class: 'grid-four' },
  { id: 5, class: 'grid-five' },
  {
    id: 6,
    class: 'grid-six bg-cover bg-center-top-mid bg-no-repeat',
    style: `background-image: url('${mosaicCardioImage}')`
  },
  { id: 7, class: 'grid-seven' }
]
</script>

<template>
  <section class="grid-container py-[4rem] xxxxl:py-[6rem]">
    <div
      v-for="gridClassName in gridClassNameArray"
      :key="gridClassName.id"
      class="bg-primaryColor border-[1px] border-black"
      :class="gridClassName.class"
      :style="gridClassName.style"
    ></div>
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

  .grid-one {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .grid-two {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .grid-three {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  .grid-four {
    grid-column: 2 / 3;
    grid-row: 2 / 4;
  }

  .grid-five {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }

  .grid-six {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }

  .grid-seven {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
  }
}
/*----- Medium screen -----*/
@media screen and (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }
  .grid-one {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .grid-two {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .grid-three {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  .grid-four {
    grid-column: 3 / 4;
    grid-row: 1 / 4;
  }

  .grid-five {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  .grid-six {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }

  .grid-seven {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
}
/*----- Large screen -----*/
@media screen and (min-width: 1060px) {
  .grid-container {
    grid-template-columns: repeat(4, minmax(250px, 1fr));
  }

  .grid-three {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }

  .grid-four {
    grid-column: 4 / 5;
    grid-row: 1 / 3;
  }

  .grid-five {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  .grid-six {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  .grid-seven {
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
