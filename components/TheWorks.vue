<template>
  <div class="works container mx-auto relative pb-20 pt-8 z-10">
    <div class="tabs">
      <ul class="works-nav grid grid-cols-3 gap-0">
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: isActive('home') }"
            href="#home"
            @click.prevent="setActive('home')"
          >
            <div class="relative link-content flex justify-between">
              <div class="icon-bg absolute">
                <kitchen-icon />
              </div>

              <p>Nábytkové stolárstvo</p>
              <div class="icon">
                <down-icon />
              </div>
            </div>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: isActive('profile') }"
            href="#profile"
            @click.prevent="setActive('profile')"
          >
            <div class="link-content flex justify-between">
              <div class="icon-bg absolute">
                <kitchen-icon />
              </div>

              <p>Kancelársky nábytok</p>

              <div class="icon">
                <down-icon />
              </div>
            </div>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: isActive('contact') }"
            href="#contact"
            @click.prevent="setActive('contact')"
          >
            <div class="link-content flex justify-between">
              <div class="icon-bg absolute">
                <kitchen-icon />
              </div>

              <p>Stavebné stolárstvo</p>

              <div class="icon">
                <down-icon />
              </div>
            </div>
          </a>
        </li>
      </ul>

      <div id="myTabContent" class="tab-content py-3">
        <div
          id="home"
          class="tab-pane fade"
          :class="{ 'active show': isActive('home') }"
        >
          <work-slider class="relative z-20" />
        </div>
        <div
          id="profile"
          class="tab-pane fade"
          :class="{ 'active show': isActive('profile') }"
        >
          <office-slider class="relative z-20" />
        </div>
        <div
          id="contact"
          class="tab-pane fade"
          :class="{ 'active show': isActive('contact') }"
        >
          <build-slider class="relative z-20" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DownIcon from '../components/UI/DownIcon.vue';
import WorkSlider from '../components/UI/WorkSlider.vue';
import OfficeSlider from '../components/UI/OfficeSlider.vue';
import BuildSlider from '../components/UI/BuildSlider.vue';
import KitchenIcon from '../components/UI/KitchenIcon.vue';

export default {
  components: {
    DownIcon,
    WorkSlider,
    KitchenIcon,
    OfficeSlider,
    BuildSlider,
  },
  data() {
    return {
      activeItem: 'home',
    };
  },

  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
  },
};
</script>

<style lang="scss">
a {
  color: black;
}

.active {
  display: block !important;
}

.nav-link.active {
  display: block !important;
  background: $blacky !important;
  color: white;

  path {
    fill: white !important;
  }
}

.show {
  display: block;
  background: transparent;
}

.fade {
  display: none;
}

.works-nav {
  position: relative;
  top: -5em;

  .nav-link {
    width: 100%;
    padding: 30px;
    display: flex;
    background: white;
    // overflow: hidden;
    box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.3);
    transition: all ease 0.4s;

    &:hover {
      display: block !important;
      background: $blacky !important;
      color: white;
      transition: all ease 0.4s;

      path {
        fill: white !important;
      }
    }

    .icon {
      path {
        fill: $blacky;
      }
    }

    .link-content {
      width: 100%;
      align-items: center;
      display: flex;
      position: relative;

      p {
        font-weight: 800;
        font-size: 1.25em;

        @media (max-width: $bp-tablet) {
          font-size: 1em;
          font-weight: 700;
        }
      }

      &::after {
        content: '';
        position: absolute;
        background-image: url('@/assets/svg/titleObject.svg');
        background-size: 100%;
        background-repeat: no-repeat;
        transform: rotate(90deg);
        width: 91px;
        height: 17px;
        top: 6px;
        left: -44px;

        // RESPONSIVE

        @media (max-width: $bp-smallTablet) {
          top: 18px;
        }
      }
      .icon-bg {
        position: absolute;
        width: 80px;
        height: 80px;
        bottom: -26px;
        right: -20px;
        opacity: 0.2;

        @media (max-width: $bp-tablet) {
          width: 40px;
          height: 40px;
          bottom: -11px;
          right: -10px;

          svg {
            width: 40px;
            height: 40px;
          }
        }
      }
    }

    // RESPO

    @media (max-width: $bp-tablet) {
      padding: 20px;
      overflow: hidden;
    }
  }

  @media (max-width: $bp-smallTablet) {
    position: absolute;
    top: -4em;
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    top: -2em;
    width: 100%;
    z-index: 30;
  }
}

.tab-content {
  @media (max-width: 650px) {
    padding-top: 9rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.works {
  @media (max-width: 600px) {
    padding-bottom: 2rem;
  }
}
</style>
