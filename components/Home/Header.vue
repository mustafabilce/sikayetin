<style lang="scss" scoped>
#landing,
header {
  --gradient-1: #002446;
  --gradient-2: #002446;
  background: linear-gradient(var(--gradient-1), var(--gradient-2));
  padding-inline: var(--header-padding-inline);
  border-radius: 0 0 var(--border-radius) var(--border-radius);

  &,
  a,
  .btn {
    color: white;

    &:hover {
      color: white;
    }
  }
}

header {
  --border-radius: 0;

  padding-block: 30px;
  transition: 0.3s;
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  /*
  &.isScrolled {
    --border-radius: 0;
    padding-block: 20px;

    @media (max-width: 800px) {
      padding-block: 10px;
    }
  }
  */

  &.full:not(.isScrolled) {
    background: none !important;
    position: absolute;
  }

  @media (max-width: 1150px) {
    --border-radius: 60px;
    padding-block: 15px;
  }
  @media (max-width: 800px) {
    --border-radius: 20px;
  }

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
      #burger_menu_holder {
      display: none;
    }
    }

    #logo {
      max-width: 180px;

      @media (max-width: 1400px) {
        width: 192px;
      }
    }

    #primary_nav {
      @media (max-width: 1150px) {
        display: none;
      }

      a {
        margin: 0 3px;
        padding: 6px;
        font-size: 15px;

        @media (max-width: 1400px) {
          margin: 0 2px;
          padding: 4px;
        }

        &:not(.btn):not(.active):hover {
          color: #fff;
        }

        &#live_feed_button {
          animation: live_button_pulse 1.6s alternate infinite;

          &:hover {
            $live-button-pulse-to: #be2340;
            animation-duration: 0.8s;
          }
        }

        &.btn {
          background: #ff5777;
          padding: 6px 20px;
          margin-left: 8px;

          @media (max-width: 1400px) {
            padding: 6px 16px;
            margin-left: 5px;
          }
        }
      }
    }

    #secondary_nav {
      cursor: default;
      display: flex;
      align-items: center;

      @media (max-width: 850px) {
        display: none;
      }

      a {
        font-size: 15px;
        padding: 4px;

        &:not(.btn):not(.active):hover {
          color: #fff;
        }

        &.btn {
          background: #fff;
          color: #00244c;
          font-weight: 400;
          padding: 8px 30px;
          margin-left: 20px;

          @media (max-width: 1400px) {
            padding: 8px 20px;
            margin-left: 10px;
          }
        }
      }
    }

    a {
      color: rgba($color: #fff, $alpha: 1);

      &.active {
        cursor: default;
        position: relative;
        color: #85DCED;
      }
    }

    .fa-bars {
      display: none;

      @media (max-width: 1150px) {
        display: unset;
      }
    }
  }
}

#landing {
  margin-top: -50px;
  padding-top: 120px;
  height: 620px;
  position: relative;
  --border-radius: 120px;

  #call_to_action {
    margin: 100px 0;
    cursor: default;
    margin-left: calc(var(--call-to-action-padding-inline) - var(--header-padding-inline));

    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    h1 {
      font-size: 4em;
      z-index: 1;
      position: relative;

      @media (max-width: 1000px) {
        text-align: center;
      }

      @media (max-width: 600px) {
        font-size: 9vw;
      }
    }

    #search {
      margin: 60px 0 30px;
      width: 450px;
      max-width: 100%;
      z-index: 1;
      position: relative;
      
      .dropdown {
        width: 100%;
      }

      @media (max-width: 700px) {
        max-width: min(375px, 100%);
      }

      @media (max-width: 500px) {
        max-width: min(260px, 100%);
      }

      input {
        width: 100%;
        border-radius: 100px;
        padding: 20px 30px;
        box-shadow: 0 0 4px rgba($color: #000000, $alpha: 0.2);
        font-size: 15px;

        @media (max-width: 600px) {
          padding: 10px 15px;
          font-size: 12px;
        }

        &:hover {
          box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.4);
        }

        &:focus {
          box-shadow: 0 0 8px rgba($color: #000000, $alpha: 0.8);
        }
      }

      button {
        background: rgb(255, 87, 119);
        background: linear-gradient(0, rgba(255, 87, 119, 1) 0%, rgba(255, 194, 71, 1) 100%);
        border-radius: 100px;
        position: absolute;
        top: 15px;
        right: 24px;
        width: 125px;
        height: 48px;
        font-size: 1em;

        @media (max-width: 600px) {
          padding: 10px 15px;
          width: unset;
          height: unset;
          font-size: 12px;
          top: 8px;
          right: 16px;
        }
      }
    }

    #banner {
      $size: 600px;

      position: absolute;
      top: 200px;
      right: var(--call-to-action-padding-inline);
      width: $size;
      height: $size;

      img.banner-img {
        width: $size;
        height: $size;
        box-shadow: 20px 25px 60px rgba($color: #000000, $alpha: 0.2);
        border-radius: 100%;
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 48px;
        height: 48px;
        background: linear-gradient(90deg, transparent, white);
        box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.1);
        border-radius: 100%;
        opacity: 0.5;
      }

      .abstract {
        position: absolute;
        right: -50px;
        bottom: -110px;
        width: 320px;

        @media (max-width: 600px) {
          width: 280px;
          right: 0;
          bottom: -80px;
        }

        @media (max-width: 500px) {
          width: 260px;
          right: 80px;
          top: 200px;
          bottom: unset;
        }
      }

      @media (max-width: 1400px) {
        $size: 500px;
        top: 140px;
        right: 60px;
      }

      @media (max-width: 1150px) {
        left: 50%;
        transform: translateX(-50%);

        .banner-img {
          opacity: 0.6;
        }
      }

      @media (max-width: 1000px) and (min-width: 800px) {
        right: 60px;
        left: unset;
        transform: unset;
        top: 160px;
      }
    }

    #star_of_week {
      max-width: 184px;
      position: absolute;
      top: 520px;
      right: 600px;
      background: url(../../static/star-of-week-background.png);
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 30px;
      padding: 20px;
      padding-top: 50px;
      box-shadow: 15px 20px 75px rgba($color: #000000, $alpha: 0.7);
      text-align: center;
      color: black;

      @media (max-width: 1400px) {
        top: 420px;
        right: 400px;
      }

      @media (max-width: 1150px) {
        top: 240px;
        right: 110px;
        transform: scale(1.3);
      }

      @media (max-width: 1000px) {
        top: 20px;
        left: unset;
        right: unset;
        transform: unset;
        position: relative;
      }

      @media (max-width: 600px) {
        transform: scale(0.9);
        top: 20px;
      }

      @media (max-width: 500px) {
        transform: scale(0.6);
        top: -30px;
        left: -30px;
        right: unset;
      }

      img {
        border-radius: 100%;
        display: block;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80px;
        position: absolute;
      }

      small {
        display: block;
        opacity: 0.6;
      }

      h4 {
        margin-top: 10px;
      }

      p {
        margin: 0 !important;
        font-size: 0.8em;

        span {
          opacity: 0.5;
        }
      }

      .btn {
        color: #00abd3;
        border: 1px solid rgba(0, 0, 0, 0.05);
        width: 100%;
        margin-top: 20px;
        border-radius: 100px;
      }
    }
  }

  #abstract {
    position: absolute;
    bottom: -130px;
    left: -50px;
    overflow: visible;
    display: flex;
    gap: 30px;
    z-index: -1;
    width: 100vw;
    max-width: 100vw !important;
    overflow-x: hidden;

    --width: 521px;
    --height: 86px;

    @media (max-width: 1000px) {
      bottom: -100px;
      --width: 400px;
      --height: 50px;
    }
    @media (max-width: 500px) {
      z-index: 1;
    }

    .abstract-1,
    .abstract-2 {
      height: var(--height);
    }

    .abstract-1 {
      background: #ef476f;
      width: var(--width);
      border-radius: 200px;
    }

    .abstract-2 {
      background: #ffd166;
      width: var(--height);
      min-width: var(--height);
      border-radius: 100%;
    }

    .abstract-3 {
      background: #00abd3;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      left: 191px;
      bottom: 10px;
      position: relative;
    }
  }
}
.dropdown-profile {
  display: flex;
  align-items: center;
  img {
    max-width: 60px;
    max-height: 60px;
    margin-right: 7px;
  }
  .text {
    p {
      font-weight: 300;
    }
  }
}
.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem !important;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  &:hover {
    svg,
    span {
      background-color: transparent;
      color: #00244c;
    }
  }
  span,
  svg {
    color: #7c7b85;
  }
}
</style>

<template>
  <div>
    <div style="height: 150px" v-if="!full"></div>

    <header :class="{ full, isScrolled }">
      <nav>
        <NuxtLink to="/">
          <img src="../../static/logo-white.png" id="logo" />
        </NuxtLink>

        <div id="primary_nav">
          <NuxtLink to="/sikayetler" :class="{ active: active == 'sikayetler' }">Şikayetler</NuxtLink>
          <NuxtLink to="/marka-ringi" :class="{ active: active == 'marka-ringi' }">Marka Ringi</NuxtLink>
          <NuxtLink to="/populer" :class="{ active: active == 'populer' }">Popüler 20</NuxtLink>
          <NuxtLink
            to="/canli-akis"
            :class="{ active: active == 'canli-akis' }"
            class="btn rounded-pill"
            id="live_feed_button"
            >Canlı Akış</NuxtLink
          >
        </div>

        <div id="secondary_nav">
          <div v-if="this.$store.state.isAuthenticated" class="d-flex align-items-center">
            <b-navbar-nav class="notification-dd">
              <b-nav-item-dropdown text="Lang" right class="mx-3" menu-class="shadow border-0 rounded-30">
                <template #button-content><fa class="text-light" :icon="['fas', 'bell']" /> </template>
                <div class="dropdown-item small p-4">
                  <div class="dropdown-profile">
                    <div>
                      <img class="mr-3" src="../../static/google.png" alt="" />
                    </div>
                    <div class="text">
                      <h6 class="mb-1">Şikayet Değerlendirmesi</h6>
                      <p class="mb-0 text-muted">
                        Hepsiburada ile ilgili şikayet süreci hakkında değerlendirmenizi merak ediyoruz.
                      </p>
                      <span>17 Şubat 2020 15:23 </span>
                    </div>
                  </div>
                </div>
                <b-dropdown-divider></b-dropdown-divider>
                <div class="dropdown-item small p-4">
                  <div class="dropdown-profile">
                    <div>
                      <img class="mr-3" src="../../static/google.png" alt="" />
                    </div>
                    <div class="text">
                      <h6 class="mb-1">Şikayet Değerlendirmesi</h6>
                      <p class="mb-0 text-muted">
                        Hepsiburada ile ilgili şikayet süreci hakkında değerlendirmenizi merak ediyoruz.
                      </p>
                      <span>17 Şubat 2020 15:23 </span>
                    </div>
                  </div>
                </div>
                <b-dropdown-divider></b-dropdown-divider>
                <div class="dropdown-item small p-4">
                  <div class="dropdown-profile">
                    <div>
                      <img class="mr-3" src="../../static/google.png" alt="" />
                    </div>
                    <div class="text">
                      <h6 class="mb-1">Şikayet Değerlendirmesi</h6>
                      <p class="mb-0 text-muted">
                        Hepsiburada ile ilgili şikayet süreci hakkında değerlendirmenizi merak ediyoruz.
                      </p>
                      <span>17 Şubat 2020 15:23 </span>
                    </div>
                  </div>
                </div>
              </b-nav-item-dropdown>
            </b-navbar-nav>
            <b-dropdown
              right
              variant="link"
              toggle-class="text-decoration-none text-dark d-flex align-items-center"
              menu-class="shadow border-0 rounded-30"
              no-caret
            >
              <template #button-content>
                <b-avatar
                  class="bg-light"
                  style="max-height: 48px; max-width: 48px"
                  variant="info"
                  src="https://placekitten.com/300/300"
                ></b-avatar>
                <span class="ml-2 mr-2 font-weight-bolder text-light">Mustafa</span>
                <fa class="text-light" :icon="['fas', 'angle-down']" />
              </template>
              <div class="dropdown-item small">
                <div class="dropdown-profile">
                  <div>
                    <img src="../../static/customer-2.png" alt="" />
                  </div>
                  <div class="text">
                    <h6 class="mb-1">Mustafa Bilce <img height="18" width="18" src="../../static/verified.svg" /></h6>

                    <p class="mb-0 text-muted">mustafabilce12@gmail.com</p>
                  </div>
                </div>
              </div>
              <b-dropdown-divider></b-dropdown-divider>
              <NuxtLink class="dropdown-item small" to="/profilim">
                <div class="dropdown-item small">
                  <fa class="mr-2" :icon="['fas', 'user']" /><span>Profilimi Düzenle</span>
                </div>
              </NuxtLink>
              <NuxtLink class="dropdown-item small" to="/profilim">
                <div class="dropdown-item small">
                  <fa class="mr-2" :icon="['fas', 'pen']" /><span>Şikayetlerim</span>
                </div>
              </NuxtLink>
              <NuxtLink class="dropdown-item small" to="/profilim">
                <div class="dropdown-item small">
                  <fa class="mr-2" :icon="['fas', 'bookmark']" /><span>Kaydedilenler</span>
                </div>
              </NuxtLink>
              <b-dropdown-divider></b-dropdown-divider>
              <div class="dropdown-item small">
                <div class="dropdown-item small">
                  <div class="d-flex justify-content-between">
                    <div>
                      <fa class="mr-2" :icon="['fas', 'arrow-right-from-bracket']" />
                      <span>Çıkış Yap</span>
                    </div>
                    <div>
                      <fa class="mr-2" :icon="['fas', 'globe']" />
                      <span>Yardım</span>
                    </div>
                  </div>
                </div>
              </div>
            </b-dropdown>
          </div>
          <div v-else>
            <fa :icon="['fas', 'arrow-right-to-bracket']" />
            <a  href="#" v-b-modal.login-modal><b>Giriş Yap</b></a>
            <fa :icon="['fas', 'user']" />
            <a class="" href="#" v-b-modal.register-modal><b>Üye Ol</b></a>
          </div>
          <NuxtLink class="btn rounded-pill" to="/sikayet-yaz" :class="{ active: active == 'sikayet-yaz' }"
            ><fa class="mr-2" :icon="['fas', 'pen-to-square']" /> Şikayet Yaz</NuxtLink
          >
        </div>

        <BurgerMenu />
        <Login />
        <Register />
        <Verification />
      </nav>
    </header>

    <div v-if="full" id="landing">
      <div id="call_to_action">
        <h1>
          <span  style="font-weight: 400"> Şikayet.in varsa </span>
          <br />
          <span class="" style="font-weight: 600"> Çözüm de var! </span>
        </h1>

        <div id="search">
          <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret menu-class="w-100 p-2 search-dropdown">
            <template #button-content>
              <input class="" type="text" placeholder="Marka, model, ürün ara"  />
              <button class="btn">
                Ara
              </button>
            </template>
            <b-dropdown-item class="small py-1" href="#" v-for="brand in this.$store.state.brands" :key="brand.id">
              <b-avatar size="2rem" rounded class="p-1 mr-2 border" variant="link" :src="brand.logo"></b-avatar>
              {{brand.name}}
            </b-dropdown-item>
          </b-dropdown>
        </div>

        <div id="banner" class="">
          <img class="banner-img" src="../../static/banner1.png" v-show="bannerIndex == 0" />
          <img class="banner-img" src="../../static/banner2.png" v-show="bannerIndex == 1" />
          <img class="banner-img" src="../../static/banner3.png" v-show="bannerIndex == 2" />

          <img src="../../static/abstract/header-abstract.png" class="abstract" />
        </div>

        <div id="star_of_week">
          <img src="../../static/trendyol.png" />

          <small>Haftanın Yıldızı</small>
          <h4>TRENDYOL</h4>
          <p><b>1200</b> <span>Çözülmüş Şikayet</span></p>
          <a class="btn" href="#">İncele</a>
        </div>
      </div>

      <div id="abstract">
        <div class="abstract-1"></div>
        <div class="abstract-2"></div>
        <div class="abstract-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import config from '../../config';
import BurgerMenu from '../BurgerMenu.vue';
import Login from '~/components/modals/Login.vue';
import Register from '~/components/modals/Register.vue';
import Verification from '~/components/modals/Verification.vue';
export default {
  props: {
    full: { type: Boolean, default: false },
    active: { type: String, default: '' },
  },
  data: () => ({
    searchQuery: null,
    bannerIndex: 0,
    bannerCount: 3,
    bannerColors: [
      ['#85dced', '#4ec6e0'],
      ['#F5AEB6', '#F5AEB6'],
      ['#f8bf3e', '#e19302'],
    ],
    isScrolled: false,
    scrollEndTimeout: null,
  }),
  components: { BurgerMenu, Login, Register, Verification },
  methods: {
    async getUserInfo() {
      await axios
        .get(`${config.apiURL}/users/users/${this.$store.state.userID}`)
        .then((response) => {
          console.log(response)
        });
    },
    OnScroll(checkForScrollEnd = true) {
      const breakpoint = this.full ? 600 : 100;

      if (window.scrollY <= breakpoint) {
        this.isScrolled = false;
      } else {
        this.isScrolled = true;
      }

      if (checkForScrollEnd) {
        this.scrollEndTimeout = setTimeout(() => {
          this.OnScroll(false);
        }, 100);
      }
    },
  },
  computed: {
        resultQuery(){
      if(this.searchQuery){
      return this.$store.state.brands.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
      })
      }else{
        return this.$store.state.brands;
      }
    }
  },
  created() {
    this.bannerIndex = Math.round(Math.random() * (this.bannerCount - 1));
  },
  mounted() {
    if (this.full) {
      const [gradient1, gradient2] = this.bannerColors[this.bannerIndex];
      const header = document.querySelector('header');
      const landing = document.querySelector('#landing');
      header.style.setProperty('--gradient-1', gradient1);
      header.style.setProperty('--gradient-2', gradient2);
      landing.style.setProperty('--gradient-1', gradient1);
      landing.style.setProperty('--gradient-2', gradient2);
    }

    setTimeout(() => {
      window.removeEventListener('scroll', () => this.OnScroll());
      window.removeEventListener('touchend', () => this.OnScroll());
      window.removeEventListener('mouseup', () => this.OnScroll());
      window.addEventListener('scroll', () => this.OnScroll());
      window.addEventListener('touchend', () => this.OnScroll());
      window.addEventListener('mouseup', () => this.OnScroll());
    }, 100);
  },
};
</script>
