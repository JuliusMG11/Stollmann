<template>
  <div class="relative" :class="updateScroll()">
    <div
      id="header"
      :class="{ bgWhite: activeBackground }"
      class="header fixed grid grid-cols-4 gap-4 z-50 pl-12 pr-12 pt-4"
    >
      <section>
        <figure class="logo">
          <nuxt-link to="/">
            <the-logo />
          </nuxt-link>
        </figure>
      </section>

      <section class="nav col-span-2">
        <ul class="flex justify-center">
          <li>
            <a @click="scrollToAbout()">O nás</a>
          </li>

          <li>
            <a @click="scrollToServicing()">Služby</a>
          </li>
          <li>
            <a @click="scrollToReference()">Reference</a>
          </li>

          <li>
            <a @click="scrollToContact()">Kontakt</a>
          </li>
        </ul>
      </section>
      <section class="nav-contact flex items-center justify-end">
        <div class="icon pr-4">
          <phone-icon />
        </div>

        <a class="color-black" href="tel:+421911911911">+421 911 911 911</a>

        <div class="hamburger" @click="openMobile()">
          <hamburger-icon />
        </div>
      </section>
    </div>
    <div
      class="mobile-navigation"
      :class="{
        activeMobile: activeMobileMenu,
      }"
      @click="closeMobile()"
    >
      <div class="hamburger-close pb-8 flex justify-end" @click="openMobile()">
        <hamburger-icon />
      </div>

      <transition name="fade">
        <ul class="flex justify-center">
          <li>
            <a @click="scrollToAbout()">O nás</a>
          </li>

          <li>
            <a @click="scrollToServicing()">Služby</a>
          </li>
          <li>
            <a @click="scrollToReference()">Reference</a>
          </li>

          <li>
            <a @click="scrollToContact()">Kontakt</a>
          </li>
        </ul>
      </transition>
      <section
        class="mobile-contact relative flex items-center justify-end pt-8"
      >
        <div class="icon pr-4">
          <phone-icon />
        </div>
        <a class="" href="tel:+421911911911">+421 911 911 911</a>
      </section>
    </div>
  </div>
</template>

<script>
import TheLogo from '../components/TheLogo.vue';
import PhoneIcon from '../components/UI/PhoneIcon.vue';
import HamburgerIcon from '../components/UI/HamburgerIcon.vue';

export default {
  components: {
    TheLogo,
    PhoneIcon,
    HamburgerIcon,
  },

  data() {
    return {
      about: true,
      serivicing: true,
      scrollPosition: null,
      activeBackground: false,
      activeMobileMenu: false,
    };
  },
  // beforeMount() {
  //  window.addEventListener('click', this.closeMobile);
  // },
  methods: {
    scrollToAbout() {
      const aboutScroll = document.getElementById('about');
      aboutScroll.scrollIntoView({
        behavior: 'smooth',
      });

      // HEIGHT OF TOP ABOUT EL
      // const aboutTop = element.offsetTop;
      //  console.log(aboutTop);
    },
    scrollToServicing() {
      const servicingScroll = document.getElementById('servicing');
      servicingScroll.scrollIntoView({
        behavior: 'smooth',
      });
    },

    scrollToReference() {
      const referenceScroll = document.getElementById('reference');
      referenceScroll.scrollIntoView({
        behavior: 'smooth',
      });
    },

    scrollToContact() {
      const contactScroll = document.getElementById('contact-scroll');
      console.log(contactScroll);
      contactScroll.scrollIntoView({
        behavior: 'smooth',
      });
    },

    scrollTop() {
      const header = document.getElementById('header');
      console.log(header);
    },

    updateScroll() {
      window.addEventListener('scroll', this.updateScroll);
      this.scrollPosition = window.scrollY;

      if (this.scrollPosition > 60) {
        this.activeBackground = true;
      } else {
        this.activeBackground = false;
      }
      // console.log(this.scrollPosition);
    },

    openMobile() {
      if (this.activeMobileMenu === false) {
        this.activeMobileMenu = true;
      } else if (this.activeMobileMenu) {
        this.activeMobileMenu = false;
      }
    },

    closeMobile() {
      this.activeMobileMenu = false;

      // this.activeMobileMenu = false;
    },
  },
};
</script>

<style lang="scss">
// STICKY HEADER

.bgWhite {
  background: #ffffffe8;
  padding-top: 1em;
  padding-bottom: 1em;
  position: fixed;
  transition: all ease 0.4s;

  .nav a {
    color: $blacky;
  }

  svg {
    text {
      fill: $blacky;
    }

    g {
      fill: $blacky;
    }
  }
}

// MOBILE HEADER

.activeMobile {
  display: flex !important;
  transition: all ease 0.4s;

  .hamburger-close {
    z-index: 50;
    svg {
      width: 40px;
      height: 40px;
      fill: white;

      g {
        path:nth-child(1) {
          display: none;
        }
        path:nth-child(2) {
          transform: rotate(-42deg) translateX(-15px) translateY(-2px);
          transition: all ease 0.4s;
        }
        path:nth-child(3) {
          transform: rotate(42deg) translateX(8px) translateY(-15px);
          transition: all ease 0.4s;
        }
      }
    }

    &:hover,
    &:focus {
      cursor: pointer;
      svg {
        g {
          fill: $yellow;
        }
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.mobile-navigation {
  background: #000000e6;
  position: fixed;
  z-index: 300;
  color: white;
  width: 280px;
  height: 100%;
  display: none;
  font-size: $biger-text;
  font-weight: 800;
  right: 0px;
  padding-right: 30px;
  padding-top: 20px;
  animation: open 0.4s ease;
  flex-direction: column;

  @keyframes open {
    0% {
      width: 0px;
      right: -30px;
    }

    100% {
      width: 280px;
      right: 0px;
    }
  }

  ul {
    flex-direction: column;
    width: 100%;
    height: auto;
    text-align: right;
    justify-content: start;
  }

  li {
    padding-bottom: 20px;

    &:last-child {
      padding-bottom: 0px;
    }
  }

  a {
    color: white;

    &:hover {
      color: $yellow;
      cursor: pointer;
    }
  }

  .mobile-contact {
    a {
      color: $yellow;
      font-size: 18px;

      &:hover {
        text-decoration: underline;
      }
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
}

.hamburger {
  z-index: 50;
  svg {
    width: 40px;
    height: 40px;
    fill: white;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    svg {
      g {
        fill: $yellow;
      }
    }
  }

  @media (min-width: $bp-smallTablet) {
    display: none;
  }

  @media (max-width: $bp-smallTablet) {
    display: block;
  }
}

// HEADER

.header {
  width: 100%;

  .logo {
    width: 200px;
  }

  .nav-contact {
    a {
      font-weight: 800;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 0%;
        height: 2px;
        bottom: -4px;
        left: 0px;
        background: $yellow;
        transition: ease all 0.4s;
      }

      &:hover {
        color: $yellow;
        &::after {
          width: 100%;
          transition: ease all 0.4s;
        }
      }

      // RESPO

      @include breakpoint(tablet) {
        font-size: $normal-text;
      }

      @media (max-width: $bp-tablet) {
        font-size: 1em;
      }

      @media (max-width: $bp-smallTablet) {
        display: none;
      }
    }

    .icon {
      svg {
        width: 20px;
        height: 20px;
      }

      // RESPO

      @include breakpoint(tablet) {
        padding-right: 1em;
      }

      @media (max-width: $bp-tablet) {
        padding-right: 0.5em;
      }

      @media (max-width: $bp-smallTablet) {
        display: none;
      }
    }
  }

  // RESPO

  @include breakpoint(tablet) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media (max-width: $bp-tablet) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (max-width: $bp-smallTablet) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.nav {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  li {
    @include breakpoint(tablet) {
      padding-right: 4em;
    }

    @media (max-width: $bp-tablet) {
      padding-right: 2em;
    }
  }

  a {
    color: white;
    font-size: $normal-text;
    font-weight: 500;
    position: relative;

    &:hover {
      color: $yellow;
      cursor: pointer;

      &::after {
        width: 100%;
        transition: ease all 0.4s;
      }
    }

    &::after {
      content: '';
      position: absolute;
      width: 0%;
      height: 2px;
      bottom: -8px;
      left: 0px;
      background: $yellow;
      transition: ease all 0.4s;
    }
  }

  // RESPO

  @media (max-width: $bp-smallTablet) {
    display: none;
  }
}

@media (max-width: $bp-smallTablet) {
  .header.grid-cols-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
