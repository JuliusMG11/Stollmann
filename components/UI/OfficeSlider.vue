<template>
  <div class="">
    <slider
      v-model="sliderIndex"
      animation="fade"
      :autoplay="false"
      :indicators="false"
      :touch="true"
    >
      <slider-item v-for="post in posts" :key="post.id">
        <div class="slider-box grid grid-cols-3">
          <section class="pt-4">
            <div class="content mt-12">
              <h2 class="relative mb-4">{{ post.title }}</h2>
              <p>{{ post.content }}</p>
            </div>
          </section>
          <section class="images-section relative col-span-2 flex justify-end">
            <figure class="image-one relative z-20">
              <img
                :src="require(`~/assets/img/the-works/${post.imageOne}.jpg`)"
                alt=""
              />
            </figure>
            <figure class="image-two absolute">
              <img
                :src="require(`~/assets/img/the-works/${post.imageTwo}.jpg`)"
                alt=""
              />
            </figure>
          </section>
          <!--   <button @click="moveToIndex()">move to page 3</button> -->
        </div>
      </slider-item>
    </slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider';
export default {
  components: {
    Slider,
    SliderItem,
  },
  data() {
    return {
      sliderIndex: 0,
      posts: [
        {
          id: 1,
          title: 'Kancelársky nábytok',
          content:
            'Možnosť výberu materiálov podľa vlastného výberu priamo u dodávateľov. Montáž je samozrejmosťou. ',
          imageOne: 'office1',
          imageTwo: 'office2',
        },
      ],
    };
  },
  methods: {
    moveToIndex(post) {
      this.sliderIndex = post;

      if (this.sliderIndex > this.posts.length) {
        this.slidersIndex++;
      }
    },
  },
};
</script>

<style lang="scss">
.slider {
  height: 400px !important;
  background: transparent !important;
  z-index: 1 !important;

  .slider-box {
    @media (max-width: $bp-smallTablet) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      display: flex;
      flex-direction: column-reverse;
    }
  }

  h2 {
    color: white !important;
  }

  p {
    color: white !important;

    @media (max-width: $bp-mobile) {
      font-size: 1em !important;
    }
  }

  .slider-items {
    height: 400px !important;

    .images-section {
      .image-one {
        width: 360px;
        height: auto;
        object-fit: cover;
        img {
          box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.5);
        }

        @media (max-width: $bp-tablet) {
          width: 310px;
        }

        @media (max-width: $bp-smallTablet) {
          width: 360px;
        }

        @media (max-width: 650px) {
          z-index: 2;
        }

        @media (max-width: 600px) {
          width: 100%;
        }
      }

      .image-two {
        right: 150px;
        top: 160px;
        width: 360px;
        height: auto;
        img {
          box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.5);
        }

        // RESPO

        @media (max-width: $bp-tablet) {
          width: 310px;
          right: 120px;
        }

        @media (max-width: $bp-smallTablet) {
          top: 20px;
          left: 0px;
        }

        @media (max-width: 650px) {
          z-index: 5;
        }

        @media (max-width: 600px) {
          display: none;
        }
      }

      // RESPO

      @media (max-width: 600px) {
        justify-content: start;
      }
    }
  }

  // SLIDER NAVIGATION
  button {
    top: unset !important;
    bottom: 100px !important;
    height: 40px !important;
    width: 150px !important;
    display: flex !important;
    align-content: center !important;
    padding: 10px 30px !important;

    @media (max-width: 1280px) {
      bottom: 80px !important;
    }

    @media (max-width: $bp-tablet) {
      width: 140px !important;
      padding: 10px 20px !important;
      bottom: 40px !important;
    }

    @media (max-width: $bp-smallTablet) {
      bottom: 0px !important;
    }

    @media (max-width: 600px) {
      bottom: 30% !important;
      width: 60px !important;
      padding: 0px !important;
      display: flex !important;
      justify-content: center !important;
    }

    @media (max-width: $bp-mobile) {
      bottom: 35% !important;
    }

    @media (max-width: 400px) {
      bottom: 45% !important;
    }
  }

  .slider-btn-left {
    justify-content: flex-start;
    background: black !important;
    border: solid 2px rgba(255, 255, 255, 0.541) !important;
    align-items: center !important;

    &::after {
      content: 'Predošlí';
      position: absolute;
      font-size: 18px;
      color: white;
      right: 30px;

      @media (max-width: 600px) {
        display: none;
      }
    }

    &:hover {
      background: white !important;

      &::after {
        color: $blacky;
      }

      i {
        border-color: $blacky !important;
      }
    }

    @media (max-width: 600px) {
      right: 70px !important;
      left: unset !important;
    }
  }

  .slider-btn-right {
    left: 160px !important;
    right: unset !important;
    justify-content: flex-end;
    background: white !important;
    align-items: center !important;

    i {
      border-color: $blacky !important;
    }

    &::after {
      content: 'Dalsi';
      position: absolute;
      font-size: 18px;
      color: $blacky;
      left: 30px;

      @media (max-width: 600px) {
        display: none;
      }
    }

    @media (max-width: 600px) {
      right: 0px !important;
      left: unset !important;
    }
  }

  .content {
    h2 {
      font-size: $biger-text;
      font-weight: 500;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        background-image: url('@/assets/svg/titleObject.svg');
        background-repeat: no-repeat;
        width: 160px;
        height: 40px;
        top: -0.3rem;
        left: 0rem;
      }
    }

    p {
      font-size: $big-text;
      font-weight: 300;

      @media (max-width: 600px) {
        font-size: 1rem;
      }
    }

    @media (max-width: $bp-smallTablet) {
      margin-top: 1rem;
      justify-content: center !important;
    }
  }

  // RESPONSIVE

  @media (max-width: $bp-smallTablet) {
    height: 480px !important;
  }

  @media (max-width: 600px) {
    height: 500px !important;
  }

  @media (max-width: $bp-mobile) {
    height: 440px !important;
  }

  @media (max-width: 400px) {
    height: 400px !important;
  }
}
</style>
