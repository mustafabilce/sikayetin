<style lang="scss" scoped>
header {
  background: linear-gradient(var(--gradient-1), var(--gradient-2));
  border-radius: 0 0 180px 180px;
  padding-block: 30px;
  padding-inline: var(--header-padding-inline);

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

      @media (max-width: 500px) {
        width: 150px;
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
          letter-spacing: 0.1em;
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

    @media (max-width: 700px) {
      align-items: center;
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
        opacity: 0.3;
      }

      @media (max-width: 1000px) and (min-width: 600px) {
        right: 60px;
        left: unset;
        transform: unset;
        top: 250px;
      }
    }

    #star_of_week {
      position: absolute;
      top: 520px;
      right: 520px;
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
        top: 450px;
        right: 350px;
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
        <a href="#">Giriş Yap</a>
        <span>|</span>
        <a href="#">Üye Ol</a>
        <a href="#" class="btn">Şikayet Yaz</a>
      </div>

      <fa :icon="['fas', 'bars']" style="font-size: 2em; cursor: pointer" />
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

        <img src="../../static/header-abstract.png" class="abstract" />
      </div>

      <div id="star_of_week">
        <img src="../../static/trendyol.png" />

        <small>Haftanın Yıldızı</small>
        <h4>TRENDYOL</h4>
        <p><b>1200</b> <span>Çözülmüş Şikayet</span></p>
        <a class="btn" href="#">İncele</a>
      </div>
    </div>
  </header>
</template>

<script>
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
  created() {
    this.bannerIndex = Math.round(Math.random() * (this.bannerCount - 1));
  },
  mounted() {
    const [gradient1, gradient2] = this.bannerColors[this.bannerIndex];
    console.log(gradient1, gradient2);

    const header = document.querySelector('header');
    header.style.setProperty('--gradient-1', gradient1);
    header.style.setProperty('--gradient-2', gradient2);
    console.log(header);
  },
};
</script>