<template>
  <div class="overflow-hidden">
    <div class="background-black">
      <the-navigation />
      <div class="hero container mx-auto relative z-10 pt-20">
        <div class="grid grid-cols-3">
          <section class="hero-content relative pt-20">
            <div class="relative">
              <span>[ podľa vašich prianí ]</span>
              <h1>Stollman</h1>
              <p>
                výrobu štandardného i atypického<br />
                nábytku podľa vašich prianí
              </p>

              <button class="mt-4" @click="goto('onas')">Viac o nas</button>
            </div>

            <div class="hero-object absolute">
              <hero-object />
            </div>
          </section>

          <section class="col-span-2 flex justify-end">
            <the-slider />
          </section>
        </div>
      </div>
    </div>

    <div class="relative shadow-background">
      <div
        id="servicing"
        class="servicing container mx-auto relative pt-20 pb-8"
      >
        <div class="title text-align-left mb-8">
          <h2>Služby</h2>
        </div>
        <the-servicing />
      </div>

      <div id="about" class="about container mx-auto relative pb-24 z-10 mt-20">
        <the-about />
      </div>
    </div>

    <div id="reference" class="relative black-background z-10 mt-8">
      <div class="absolute tree-object">
        <figure>
          <img src="@/assets/img/strom2.png" alt="" />
        </figure>
      </div>
      <the-works />

      <div class="work-object absolute">
        <hero-object />
      </div>
    </div>

    <div class="materials flex justify-center relative pt-24 z-20">
      <div class="container mx-auto relative">
        <div class="materials-bg absolute"></div>

        <div class="title text-center pb-12">
          <h2>Materialy</h2>
        </div>

        <the-materials />

        <div id="contact-scroll" class="relative z-10 mt-48">
          <the-contact />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavigation from '../components/TheNavigation.vue';
import TheSlider from '../components/TheSlider.vue';
import HeroObject from '../components/UI/HeroObject.vue';
import TheServicing from '../components/TheServicing.vue';
import TheAbout from '../components/TheAbout.vue';
import TheWorks from '../components/TheWorks.vue';
import TheMaterials from '../components/TheMaterials.vue';
import TheContact from '../components/TheContact.vue';

export default {
  components: {
    TheNavigation,
    TheSlider,
    HeroObject,
    TheServicing,
    TheAbout,
    TheWorks,
    TheMaterials,
    TheContact,
  },
};
</script>

<style lang="scss">
// RESPONSIVE

.hero {
  @media (max-width: $bp-smallTablet) {
    width: 100%;

    .grid-cols-3 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
}

@media (max-width: 770px) {
  .hero.container {
    max-width: 100%;
  }
}

// HERO CONTENT

.hero-content {
  h1 {
    color: white;
    font-size: 3.5em; // 56px

    // RESPO

    @media (max-width: $bp-tablet) {
      font-size: 42px;
    }
  }

  p {
    color: white;
    font-size: $big-text;

    // RESPO

    @media (max-width: $bp-tablet) {
      font-size: $normal-text;

      br {
        display: none;
      }
    }
  }
  span {
    color: $yellow;
    font-size: $normal-text;
  }

  button {
    padding: 10px 30px;
    background: white;
    color: $yellow;
    font-weight: 600;

    &:hover {
      background: $yellow;
      color: $blacky;
    }
  }

  .hero-object {
    bottom: 8em;
    left: 35%;
    width: 300px;

    &::after {
      content: '';
      position: absolute;
      background-image: url('@/assets/svg/white-hero-object.svg');
      background-size: 100%;
      background-repeat: no-repeat;
      width: 230px;
      height: 40px;
      bottom: 1em;
      left: 40%;
      z-index: 30;
    }

    @media (min-width: 1280px) {
      bottom: 8em !important;
    }

    @include breakpoint(tablet) {
      bottom: 3rem;
    }

    @media (max-width: $bp-tablet) {
      bottom: 0px;

      svg {
        width: 180px;
      }

      &::after {
        width: 180px;
        height: 30px;
        left: 20%;
      }
    }

    @media (max-width: $bp-smallTablet) {
      bottom: -90px;
      left: 15%;
    }

    @media (max-width: $bp-mobile) {
      bottom: -120px;
      left: -14%;
    }
  }

  // RESPO

  @include breakpoint(laptop) {
    padding-top: 5em;
  }

  @media (max-width: $bp-tablet) {
    padding-top: 2em;
  }

  @media (max-width: $bp-smallTablet) {
    position: absolute;
    width: 100%;
    top: 150px;
    text-align: center;
    z-index: 20;
  }

  @media (max-width: 650px) {
    top: 120px;
  }

  @media (max-width: $bp-mobile) {
    top: 80px;
  }
}

.background-black::before {
  content: '';
  position: absolute;
  background: $blacky;
  width: 80%;
  height: 620px;
  left: 0px;
  top: 0px;
  z-index: 2;

  // RESPO

  @media (min-width: 1280px) {
    height: 620px !important;
    width: 80% !important;
  }

  @include breakpoint(tablet) {
    height: 500px;
    width: 72%;
  }

  @media (max-width: $bp-tablet) {
    width: 74%;
    height: 400px;
  }

  @media (max-width: $bp-smallTablet) {
    width: 100%;
    height: 500px;
  }

  @media (max-width: 650px) {
    height: 100px;
  }
}

// SERVICING AND ABOUT SECTION

.servicing {
  @media (max-width: $bp-smallTablet) {
    .title {
      text-align: center;
      z-index: 20;

      h2 {
        width: max-content;
        margin: 0 auto;
        position: relative;
      }
    }
  }
}

.about {
  @media (max-width: $bp-smallTablet) {
    margin-top: 2em;
  }

  @media (max-width: 650px) {
    padding-bottom: 4rem;
  }

  @media (max-width: 550px) {
    padding-bottom: 14rem;
  }

  @media (max-width: 400px) {
    padding-bottom: 16rem;
  }
}

.shadow-background::before {
  content: '';
  position: absolute;
  background: $grey;
  width: 62%;
  height: 120%;
  right: 0px;
  top: -8em;
  z-index: 1;
}

.shadow-background::after {
  content: '';
  position: absolute;
  background-image: url('@/assets/img/strom.png');
  background-size: 100%;
  background-repeat: no-repeat;
  width: 600px;
  height: 390px;
  bottom: 0px;
  right: 0px;
  z-index: 20;
  opacity: 0.1;

  @media (max-width: $bp-smallTablet) {
    opacity: 0.05;
  }
}

.black-background {
  background: $blacky;

  &::after {
    content: '';
    position: absolute;
    border: solid 100px #daa520;
    width: 570px;
    height: 510px;
    bottom: -16%;
    right: -10%;
    z-index: 2;

    @media (max-width: $bp-tablet) {
      bottom: -18%;
      right: -20%;
    }

    @media (max-width: $bp-smallTablet) {
      opacity: 0.4;
    }

    @media (max-width: 700px) {
      width: 300px;
      height: 300px;
      bottom: -60px;
      right: -20%;
    }

    @media (max-width: $bp-mobile) {
      width: 260px;
      height: 260px;
      bottom: -80px;
      border-width: 50px;
    }
  }
}

.work-object {
  bottom: 9em;
  right: 4em;

  &::after {
    content: '';
    position: absolute;
    background-image: url('@/assets/svg/white-hero-object.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    width: 230px;
    height: 40px;
    top: 2rem;
    right: 4em;
    z-index: 30;

    @media (max-width: 500px) {
      width: 160px;
    }
  }

  @media (max-width: $bp-smallTablet) {
    top: 16rem;
    z-index: 20;
  }

  @media (max-width: 650px) {
    top: 22rem;
  }

  @media (max-width: 500px) {
    top: 14rem;
    right: 11rem;

    svg {
      width: 160px;
    }
  }
}

.tree-object {
  width: 100%;
  top: 0px;
  left: 0px;
  z-index: 2;

  @media (max-width: $bp-tablet) {
    width: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    background: linear-gradient(
      0deg,
      rgba(18, 18, 18, 1) 9%,
      rgba(18, 18, 18, 0.6447712874212185) 50%,
      rgba(18, 18, 18, 0.10135392047443981) 97%
    );
    width: 50%;
    height: 60%;
    top: 0px;
    left: 0px;

    @media (max-width: $bp-tablet) {
      width: 100%;
    }
  }
}

// MATERIALS

.materials {
  background: white;

  .title {
    width: max-content;
    margin: 0 auto;
  }

  .materials-bg {
    background-image: url('@/assets/img/forest.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 280px;
    height: 800px;
    top: 0px;
    right: 0px;

    @media (max-width: $bp-tablet) {
      right: -90px;
    }
  }
}
</style>
