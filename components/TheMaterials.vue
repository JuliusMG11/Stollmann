<template>
  <div class="relative">
    <div class="material-boxes grid grid-cols-4 gap-4">
      <section class="material-box flex justify-center">
        <div class="circle javor">
          <h3>Javor</h3>
        </div>
      </section>

      <section class="material-box flex justify-center">
        <div class="circle dub"><h3>Dub</h3></div>
      </section>

      <section class="material-box flex justify-center">
        <div class="circle smrek"><h3>Smrek</h3></div>
      </section>

      <section class="material-box flex justify-center">
        <div class="circle borovica"><h3>Borovica</h3></div>
      </section>
    </div>
    <div class="materials-object absolute z-20">
      <figure>
        <dual-object />
      </figure>
    </div>
  </div>
</template>

<script>
import DualObject from '../components/UI/DualObject.vue';
export default {
  components: {
    DualObject,
  },
};
</script>

<style lang="scss">
.material-boxes {
  .circle {
    background: green;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    align-content: center;
    align-items: center;
    position: relative;
    box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.5);

    @media (max-width: $bp-tablet) {
      width: 160px;
      height: 160px;
    }

    h3 {
      color: white;
      font-size: $bigest-text;
      z-index: 3;

      @media (max-width: $bp-tablet) {
        font-size: $big-text;
      }

      @media (max-width: $bp-smallTablet) {
        font-size: 1.25rem; // 20 px
      }
    }

    &::after {
      position: absolute;
      content: '';
      background: linear-gradient(
        0deg,
        #121212 9%,
        rgba(18, 18, 18, 0.5) 50%,
        rgba(18, 18, 18, 0) 97%
      );
      height: 180px;
      z-index: 2;
      opacity: 0.8;
      width: 100%;
      bottom: 0px;
      left: 0px;
    }

    // RESPO

    @media (max-width: $bp-smallTablet) {
      width: 140px;
      height: 140px;
    }
  }

  .javor {
    background-image: url('@/assets/img/dark-wood-wall-jemne.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .dub {
    background-image: url('@/assets/img/dub.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .smrek {
    background-image: url('@/assets/img/smrek.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .borovica {
    background-image: url('@/assets/img/borovica.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .materials-object {
    bottom: -6em;
    left: -2em;
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
