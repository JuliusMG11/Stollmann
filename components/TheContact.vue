<template>
  <div class="container">
    <div class="flex justify-center">
      <section class="contact-form col-start-2 col-span-4 col-end-2 z-10">
        <h3 class="mb-6">Nevahajte nás kontaktovať</h3>

        <form action="">
          <div class="form-respo grid grid-cols-2 gap-4">
            <section>
              <input
                v-model="name"
                type="text"
                placeholder="Meno"
                name="name"
              />
            </section>
            <section>
              <input
                v-model="email"
                type="email"
                placeholder="Email"
                name="email"
              />
            </section>

            <section class="col-span-2">
              <textarea
                v-model="message"
                type="textarea"
                placeholder="Sprava"
                name="message"
              />
            </section>
            <section class="col-span-2">
              <button type="submit" value="Send" class="form">Odoslat</button>
            </section>
          </div>
        </form>

        <div class="contact-info grid grid-cols-2 gap-4">
          <section class="phone flex items-center">
            <div class="icon">
              <phone-icon />
            </div>
            <a href="tel:+421911911911">+421 911 911 911</a>
          </section>

          <section class="email flex items-center">
            <div class="icon">
              <email-icon />
            </div>
            <a href="mailto:info@stollman.sk">info@stollman.sk</a>
          </section>
        </div>
      </section>
    </div>

    <div class="copyright relative text-center pt-8 pb-8">
      <h3>Copyright Julius Petrik</h3>
    </div>

    <div class="footer-object absolute">
      <figure>
        <img src="@/assets/img/strom-footer.png" alt="" />
      </figure>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

import PhoneIcon from '../components/UI/PhoneIcon.vue';
import EmailIcon from '../components/UI/EmailIcon.vue';

export default {
  components: {
    PhoneIcon,
    EmailIcon,
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },

  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          'service_ui9vucy',
          'template_l8m4slz',
          e.target,
          'user_tGRoMSpdiGqE6H5bsAiwj',
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = '';
      this.email = '';
      this.message = '';

      console.log('udialo sa');
    },
  },
};
</script>

<style lang="scss">
.contact-form {
  padding: 80px 100px;
  background: $blacky;
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.4);

  h3 {
    color: white;
    font-size: $biger-text;
    font-weight: 500;
  }

  input {
    width: 260px;
    height: 40px;
    padding: 10px;
    background: transparent;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    box-shadow: 1px 1px 6px 0px rgba(255, 255, 255, 0.5);
    color: white !important;

    &::-webkit-input-placeholder {
      /* Edge */
      color: white;
      font-size: $normal-text;
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: white;
      font-size: $normal-text;
    }

    &::placeholder {
      color: white;
      font-size: $normal-text;
    }

    &:focus,
    &:active {
      border: solid 2px $yellow;
    }

    // RESPO

    @media (max-width: $bp-smallTablet) {
      width: 100%;
    }
  }
  textarea {
    width: 100%;
    margin-top: 0.2em;
    height: 120px;
    padding: 10px;
    background: transparent;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    box-shadow: 1px 1px 6px 0px rgba(255, 255, 255, 0.5);
    color: white !important;

    &::placeholder {
      color: white;
      font-size: $normal-text;
    }

    &:focus,
    &:active {
      border: solid 2px $yellow;
    }
  }

  button {
    color: $blacky;
    text-align: center;
    background: $yellow;
    padding: 5px 10px;
    width: 100%;
    font-size: $big-text;
    margin-bottom: 2em;

    &:hover {
      background: white;
      color: $yellow;
    }
  }

  .contact-info {
    a {
      color: $yellow;
      font-size: $bigest-text;

      &:hover {
        color: white;
      }

      // RESPO
      @media (max-width: $bp-smallTablet) {
        font-size: 1.25rem; // 20px
      }
    }

    .icon {
      padding-right: 10px;
    }

    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
    }
  }

  // RESPO

  @media (max-width: $bp-smallTablet) {
    padding: 80px 60px;
  }

  @media (max-width: $bp-mobile) {
    padding: 80px 30px;
  }
}

.footer-object {
  width: 410px;
  height: 590px;
  bottom: 0px;
  left: -5rem;
  z-index: 2;
}

// RESPO

.form-respo {
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    display: flex;
    flex-direction: column;
  }
}
</style>
