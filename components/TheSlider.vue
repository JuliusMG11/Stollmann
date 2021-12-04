<template>
  <div class="hero-slider">
    <img :src="images[currentNumber % images.length]" />

    <div class="arrows-group absolute flex justify-end p-2">
      <div
        class="prev-arrow relative flex justify-between items-center"
        @click="prev"
      >
        <div class="icon relative z-10 pr-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26.3"
            height="48.697"
            viewBox="0 0 26.3 48.697"
          >
            <g
              id="Group_68"
              data-name="Group 68"
              transform="translate(26.3 48.697) rotate(180)"
            >
              <path
                id="Path_21"
                data-name="Path 21"
                d="M143.487,23.012,120.963.551A1.888,1.888,0,1,0,118.3,3.224l21.183,21.125L118.3,45.474a1.888,1.888,0,0,0,2.666,2.673l22.524-22.461a1.887,1.887,0,0,0,0-2.673Z"
                transform="translate(-117.742 0)"
                fill="#fff"
              />
            </g>
          </svg>
        </div>

        <div class="content">
          <p>Predošlí</p>
        </div>
      </div>

      <div
        class="next-arrow relative flex justify-between items-center"
        @click="next"
      >
        <div class="content">
          <p>Ďalší</p>
        </div>
        <div class="icon relative z-10 pl-8">
          <next-icon />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NextIcon from '../components/UI/NextIcon.vue';

export default {
  components: {
    NextIcon,
  },
  data() {
    return {
      images: [
        'https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg',
        'https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg',
      ],

      currentNumber: 0,
      timer: null,
    };
  },
  mounted() {
    this.startRotation();
  },
  methods: {
    startRotation() {
      this.timer = setInterval(this.next, 6000);
    },

    next() {
      this.currentNumber += 1;
    },
    prev() {
      this.currentNumber -= 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.hero-slider {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 10px;
  img {
    box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);
  }

  .arrows-group {
    right: 1rem;

    .next-arrow,
    .prev-arrow {
      background: white;
      padding: 20px 20px 20px 20px;
      cursor: pointer;
      width: 180px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

      p {
        color: $blacky;
        font-weight: 800;
        font-size: 18px;
      }
      &:hover {
        background: $yellow;
        color: white;
      }

      &::after {
        content: '';
        position: absolute;
        background-size: 100%;
        background-repeat: no-repeat;
        width: 60px;
        height: 60px;
        opacity: 0.2;
        z-index: 2;
      }
      .icon {
        svg {
          width: 30px;
          height: 30px;
        }

        path {
          fill: $blacky;
        }
      }

      // RESPO
      @media (max-width: $bp-tablet) {
        width: max-content;
        justify-content: center;
        padding-right: 20px;
      }

      @media (max-width: $bp-smallTablet) {
        z-index: 20;
      }
    }

    .prev-arrow {
      &::after {
        background-image: url('@/assets/svg/satnikBlack.svg');
        left: 10px;
        bottom: 2px;
      }

      .icon {
        @media (max-width: $bp-tablet) {
          padding-right: 0px;
        }
      }
    }

    .next-arrow {
      &::after {
        background-image: url('@/assets/svg/kupelna.svg');
        right: 10px;
        bottom: 2px;
      }

      p {
        font-weight: 800;
        font-size: 18px;
      }

      @media (max-width: $bp-tablet) {
        .icon {
          padding-left: 0px;
        }
      }
    }
    // REPONSIVE

    @include breakpoint(tablet) {
      bottom: -1em;
    }

    @media (max-width: $bp-tablet) {
      bottom: -5px;

      .content,
      .next-arrow::after,
      .prev-arrow::after {
        display: none;
      }
    }

    @media (max-width: $bp-smallTablet) {
      bottom: -26px;
    }
  }
  // REPONSIVE

  @include breakpoint(tablet) {
    overflow: unset;
  }

  @media (max-width: $bp-mobile) {
    padding: 0px;
    height: 350px;

    img {
      height: 350px;
      object-fit: cover;
    }
  }

  @media (max-width: $bp-smallTablet) {
    padding: 0px;

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      left: 0px;
      bottom: 0px;
      z-index: 10;
      opacity: 0.5;
      background: linear-gradient(
        0deg,
        rgba(18, 18, 18, 1) 9%,
        rgba(18, 18, 18, 0.6447712874212185) 50%,
        rgba(18, 18, 18, 0.10135392047443981) 97%
      );
    }
  }
}
</style>
