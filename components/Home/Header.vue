<style lang="scss" scoped>
header {
  background: linear-gradient(var(--gradient-1), var(--gradient-2));
  border-radius: 0 0 180px 180px;
  padding-block: 30px;
  padding-inline: var(--header-padding-inline);
  position: relative;

  @media (max-width: 1150px) {
    border-radius: 0 0 120px 120px;
  }
  @media (max-width: 800px) {
    border-radius: 0 0 40px 40px;
  }

  &,
  a,
  .btn {
    color: white;

    &:hover {
      color: white;
    }
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

        &:not(.btn):hover {
          color: #00244c;
        }

        &#live_feed_button:hover {
          animation: pulse_color 0.5s alternate infinite;
        }

        @keyframes pulse_color {
          0% {
            background: #ff5777;
          }
          100% {
            background: #c2344e;
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

        &:not(.btn):hover {
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

    .fa-bars {
      display: none;

      @media (max-width: 1150px) {
        display: unset;
      }
    }
  }

  #call_to_action {
    margin: 100px 0;
    cursor: default;
    margin-left: calc(
      var(--call-to-action-padding-inline) - var(--header-padding-inline)
    );

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
        background: linear-gradient(
          0,
          rgba(255, 87, 119, 1) 0%,
          rgba(255, 194, 71, 1) 100%
        );
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
      top: 150px;
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
      top: 480px;
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
  <header>
    <nav>
      <a href="#">
        <img src="../../static/logo-white.png" id="logo" />
      </a>

      <div id="primary_nav">
        <a href="#">Şikayetler</a>
        <a href="#">Marka Ringi</a>
        <a href="#">Popüler 20</a>
        <a href="#" class="btn" id="live_feed_button">Canlı Akış</a>
      </div>

      <div id="secondary_nav">
        <a href="#"><b>Giriş Yap</b></a>
        <span>|</span>
        <a href="#"><b>Üye Ol</b></a>
        <a href="#" class="btn">Şikayet Yaz</a>
      </div>

      <BurgerIcon />
    </nav>

    <div id="call_to_action">
      <h1>
        <span style="font-weight: 400">Şikayet.in varsa</span>
        <br />
        <span style="font-weight: 600">Çözüm de var!</span>
      </h1>

      <div id="search">
        <input type="text" placeholder="Marka, model, ürün ara" />
        <button class="btn">
          <fa :icon="['fas', 'magnifying-glass']" />
        </button>
      </div>

      <div id="banner">
        <img
          class="banner-img"
          src="../../static/banner1.png"
          v-show="bannerIndex == 0"
        />
        <img
          class="banner-img"
          src="../../static/banner2.png"
          v-show="bannerIndex == 1"
        />
        <img
          class="banner-img"
          src="../../static/banner3.png"
          v-show="bannerIndex == 2"
        />

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
  </header>
</template>

<script>
import BurgerIcon from '../Pieces/BurgerIcon.vue';
export default {
  data: () => ({
    bannerIndex: 0,
    bannerCount: 3,
    bannerColors: [
      ['#85dced', '#4ec6e0'],
      ['#cdbfd9', '#9682a7'],
      ['#f8bf3e', '#e19302'],
    ],
  }),
  components: { BurgerIcon },
  created() {
    this.bannerIndex = Math.round(Math.random() * (this.bannerCount - 1));
  },
  mounted() {
    const [gradient1, gradient2] = this.bannerColors[this.bannerIndex];
    console.log(gradient1, gradient2);
    const header = document.querySelector('header');
    header.style.setProperty('--gradient-1', gradient1);
    header.style.setProperty('--gradient-2', gradient2);
  },
};
</script>