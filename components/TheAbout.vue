<template>
  <div class="about-section grid grid-cols-2 gap-4 items-center">
    <section class="image flex">
      <figure class="relative shadow-lg">
        <img src="@/assets/img/slide1.jpg" alt="" />
      </figure>
    </section>

    <section>
      <div class="about-content pr-12 pl-12 pt-2">
        <div class="title pb-2">
          <h2>O nás</h2>
        </div>

        <div class="min-title pb-4">
          <span>
            [ Možnošt výberu materiálov podľa vlastného výberu priamo u
            dodávateľov ]
          </span>
        </div>

        <div class="content">
          <p>
            Ponúkam výrobu štandardného i atypického nábytku podľa vašich prianí
            z dyhovaných materiálov, masívu, lamino-drevotrieskové dosky s ABS
            hranami rôznych vzorov a odtieňov. Moje dlhoročné skúsenosti a
            aplikácia nových trendov v odbore sú zárukou kvalitného remeselného
            spracovania a celkového vzhľadu výrobkov.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.image {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &::after {
    content: '';
    position: absolute;
    background-image: url('@/assets/img/wood.jpg');
    background-size: 100%;
    background-repeat: no-repeat;
    width: 62px;
    height: 132px;
    top: -2.5em;
    left: 2em;

    @media (max-width: $bp-tablet) {
      width: 52px;
      top: -0.5em;
    }

    @media (max-width: 550px) {
      display: none;
    }
  }

  @media (max-width: $bp-smallTablet) {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0.7979924391631652) 36%,
        rgba(255, 255, 255, 0) 100%
      );
      height: 100%;
      width: 100%;
      bottom: 0px;
      left: 0px;
      z-index: 2;

      @media (max-width: 550px) {
        height: 60%;
      }
    }
  }
}
.about-content {
  .content {
    p {
      font-size: $normal-text;

      @media (max-width: $bp-tablet) {
        font-size: 1em;
      }
    }
  }

  .min-title {
    color: $gold;
    font-size: $big-text;

    @media (max-width: $bp-tablet) {
      font-size: $normal-text;
    }

    @media (max-width: 550px) {
      padding-bottom: 2rem;
    }
  }

  // RESPO

  @media (max-width: $bp-tablet) {
    padding-right: 0px;
  }

  @media (max-width: $bp-smallTablet) {
    position: absolute;
    z-index: 20;
    bottom: 112px;
    padding: 40px;
  }

  @media (max-width: 550px) {
    padding-bottom: 0px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 0px;
    bottom: 5rem;
  }

  @media (max-width: 470px) {
    bottom: 3rem;
  }

  @media (max-width: 400px) {
    bottom: 4rem;
  }

  @media (max-width: 360px) {
    bottom: 2rem;
  }
}

.about-section {
  @media (max-width: $bp-smallTablet) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
