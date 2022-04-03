<style lang="scss" scoped>
#landing,
header {
  --gradient-1: #85dced;
  --gradient-2: #4ec6e0;
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
  --border-radius: 60px;

  padding-block: 30px;
  transition: 0.3s;
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  &.isScrolled {
    --border-radius: 0;
    padding-block: 20px;

    @media (max-width: 800px) {
      padding-block: 10px;
    }
  }

  &.full:not(.isScrolled) {
    background: none !important;
    position: absolute;
  }

  @media (max-width: 1150px) {
    --border-radius: 60px;
    padding-block: 8px;
  }
  @media (max-width: 800px) {
    --border-radius: 20px;
    padding-block: 2px;
  }

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    #logo {
      width: 220px;

      @media (max-width: 1400px) {
        width: 180px;
      }
    }

    #primary_nav {
      @media (max-width: 1150px) {
        display: none;
      }

      a {
        margin: 0 3px;
        padding: 6px;

        @media (max-width: 1400px) {
          margin: 0 2px;
          padding: 4px;
        }

        &:not(.btn):not(.active):hover {
          color: #00244c;
        }

        --pulse-from:#ff5777;
        --pulse-to:#d13d58;

        &#live_feed_button {
          animation: pulse_color 1.6s alternate infinite;

          &:hover {
            --pulse-to: #be2340;
            animation-duration: 0.8s;
          }
        }

        @keyframes pulse_color {
          0% {
            background: var(--pulse-from);
          }
          100% {
            background: var(--pulse-to);
          }
        }

        &.btn {
          background: #ff5777;
          border-radius: 100px;
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

      @media (max-width: 850px) {
        display: none;
      }

      a {
        padding: 4px;

        &:not(.btn):not(.active):hover {
          color: #00244c;
        }

        &.btn {
          background: #00244c;
          font-weight: bold;
          padding: 12px 36px;
          border-radius: 100px;
          margin-left: 20px;

          @media (max-width: 1400px) {
            padding: 10px 22px;
            margin-left: 10px;
          }
        }
      }
    }

    a {
      color: rgba($color: #fff, $alpha: 0.7);

      &.active {
        cursor: default;
        position: relative;
        color: #fff;

        &::after {
          content: '';
          display: block;
          width: 50px;
          height: 2px;
          background: rgba($color: #fff, $alpha: 0.7);
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
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

        @media (max-width: 600px) {
          padding: 10px 15px;
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
        border-radius: 100%;
        position: absolute;
        top: -1px;
        right: 0;
        width: 65px;
        height: 65px;
        font-size: 1.2em;
        transform: scale(1.01);

        &:hover {
          font-size: 1.4em;
          transform: scale(1.1);
        }

        @media (max-width: 600px) {
          padding: 10px 15px;
          width: unset;
          height: unset;
        }
      }
    }

    #banner {
      position: absolute;
      top: 200px;
      right: var(--call-to-action-padding-inline);
      border-radius: 100%;
      box-shadow: 20px 25px 60px rgba($color: #000000, $alpha: 0.2);
      width: 600px;
      height: 600px;

      img.banner-img {
        width: 100%;
        height: 100%;
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
          bottom: -140px;
        }

        @media (max-width: 500px) {
          width: 260px;
          right: 40px;
          top: 180px;
          bottom: unset;
        }
      }

      @media (max-width: 1400px) {
        width: 500px;
        height: 500px;
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

      @media (max-width: 1000px) and (min-width: 600px) {
        right: 60px;
        left: unset;
        transform: unset;
        top: 250px;
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
        top: 50px;
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

    --width: 521px;
    --height: 86px;

    @media (max-width: 1000px) {
      bottom: -100px;
      --width: 400px;
      --height: 50px;
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
          <NuxtLink class="reveal-on-visible" to="/sikayetler" :class="{ active: active == 'sikayetler' }"
            >Şikayetler</NuxtLink
          >
          <NuxtLink class="reveal-on-visible delay-1" to="/marka-ringi" :class="{ active: active == 'marka-ringi' }"
            >Marka Ringi</NuxtLink
          >
          <NuxtLink class="reveal-on-visible delay-2" to="/populer" :class="{ active: active == 'populer' }"
            >Popüler 20</NuxtLink
          >
          <a href="#" class="reveal-on-visible delay-3 btn" id="live_feed_button">Canlı Akış</a>
        </div>

        <div id="secondary_nav">
          <a class="reveal-on-visible" href="#"><b>Giriş Yap</b></a>
          <span>|</span>
          <a class="reveal-on-visible delay-1" href="#"><b>Üye Ol</b></a>
          <a class="reveal-on-visible delay-2 btn" href="#">Şikayet Yaz</a>
        </div>

        <BurgerMenu />
      </nav>
    </header>

    <div v-if="full" id="landing">
      <div id="call_to_action">
        <h1>
          <span class="reveal-on-visible" style="font-weight: 400"> Şikayet.in varsa </span>
          <br />
          <span class="reveal-on-visible delay-1" style="font-weight: 600"> Çözüm de var! </span>
        </h1>

        <div id="search">
          <input class="reveal-on-visible delay-2" type="text" placeholder="Marka, model, ürün ara" />
          <button class="btn reveal-on-visible delay-3">
            <fa :icon="['fas', 'magnifying-glass']" />
          </button>
        </div>

        <div id="banner" class="reveal-on-visible delay-1">
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
import BurgerMenu from '../BurgerMenu.vue';
export default {
  props: {
    full: { type: Boolean, default: false },
    active: { type: String, default: '' },
  },
  data: () => ({
    bannerIndex: 0,
    bannerCount: 3,
    bannerColors: [
      ['#85dced', '#4ec6e0'],
      ['#cdbfd9', '#9682a7'],
      ['#f8bf3e', '#e19302'],
    ],
    isScrolled: false,
    scrollEndTimeout: null,
  }),
  components: { BurgerMenu },
  methods: {
    OnScroll(checkForScrollEnd = true) {
      const breakpoint = this.full ? 600 : 100;

      if (window.scrollY <= breakpoint) {
        this.isScrolled = false;
      } else {
        this.isScrolled = true;
      }

      $('.reveal-on-visible').addClass('revealed reveal-finished');

      if (checkForScrollEnd) {
        this.scrollEndTimeout = setTimeout(() => {
          this.OnScroll(false);
        }, 100);
      }
    },
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