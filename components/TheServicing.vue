<template>
  <div class="servicing-boxes relative grid grid-cols-5 gap-4 z-10">
    <section class="servicing-box">
      <figure class="icon">
        <img src="@/assets/svg/satnikBlack.svg" alt="" />
      </figure>

      <div class="">
        <h3>Šatníky</h3>
      </div>
    </section>

    <section class="servicing-box">
      <figure class="icon">
        <img src="@/assets/svg/kupelna.svg" alt="" />
      </figure>

      <div class="">
        <h3>Kupelne</h3>
      </div>
    </section>

    <section class="servicing-box">
      <figure class="icon">
        <img src="@/assets/svg/kuchyne.svg" alt="" />
      </figure>

      <div class="">
        <h3>Kuchyne</h3>
      </div>
    </section>

    <section class="servicing-box">
      <figure class="icon">
        <img src="@/assets/svg/ObyvaciPokoje.svg" alt="" />
      </figure>

      <div class="">
        <h3>Obyvaci pokoje</h3>
      </div>
    </section>

    <section class="servicing-box">
      <figure class="icon">
        <img src="@/assets/svg/Predajne.svg" alt="" />
      </figure>

      <div class="">
        <h3>Predajne</h3>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.servicing-box {
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon {
    width: 80px;
    height: 80px;
    position: relative;
  }

  h3 {
    margin-top: 1em;
    font-size: $big-text;
    font-weight: 800;
  }

  @media (max-width: $bp-smallTablet) {
    margin-bottom: 20px;
  }
}

.servicing-boxes {
  @media (max-width: $bp-smallTablet) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
