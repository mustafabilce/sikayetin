<style lang="scss">
header,
section {
  padding-inline: 150px;

  @media (max-width: 1500px) {
    padding-inline: 120px;
  }
  @media (max-width: 800px) {
    padding-inline: 80px;
  }
  @media (max-width: 650px) {
    padding-inline: 50px;
  }
  @media (max-width: 500px) {
    padding-inline: 30px;
  }
}

header {
  background: linear-gradient(#85dced, #4fc8e2);
  border-radius: 0 0 220px 220px;
  padding-block: 30px;

  @media (max-width: 1200px) {
    border-radius: 0 0 140px 140px;
  }
  @media (max-width: 800px) {
    border-radius: 0 0 50px 50px;
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

      @media (max-width: 500px) {
        width: 180px;
      }
    }

    #primary_nav {
      @media (max-width: 1400px) {
        display: none;
      }

      a {
        margin: 0 6px;
        padding: 12px;

        &:not(.btn):hover {
          color: #ff5777;
        }

        &.btn {
          background: #ff5777;
          border-radius: 100px;
          padding: 8px 24px;
          margin-left: 10px;
        }
      }
    }

    #secondary_nav {
      @media (max-width: 1000px) {
        display: none;
      }

      cursor: default;

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
          margin-left: 40px;
        }
      }
    }

    .fa-bars {
      display: none;

      @media (max-width: 1400px) {
        display: unset;
      }
    }
  }

  #call_to_action {
    margin: 100px 0;

    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      font-size: 4em;

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

      input {
        width: 100%;
        border-radius: 100px;
        padding: 20px 30px;
        border: none;
        outline: none;
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
    }

    #banner {
      position: absolute;
      top: 150px;
      right: 100px;
      border-radius: 100%;
      box-shadow: 20px 25px 60px rgba($color: #000000, $alpha: 0.2);
      width: 600px;
      height: 600px;

      img {
        width: 100%;
        height: 100%;
      }

      @media (max-width: 1400px) {
        width: 500px;
        height: 500px;
        top: 200px;
        right: 60px;
      }

      @media (max-width: 1200px) {
        display: none;
      }
    }

    #star_of_week {
      position: absolute;
      top: 600px;
      right: 500px;
      background: white;
      border-radius: 30px;
      padding: 20px;
      padding-top: 50px;
      box-shadow: 15px 20px 75px rgba($color: #000000, $alpha: 0.7);
      text-align: center;
      color: black;

      @media (max-width: 1400px) {
        top: 560px;
        right: 350px;
      }

      @media (max-width: 1200px) {
        top: 240px;
        right: 110px;
        transform: scale(1.3);
      }

      @media (max-width: 1000px) {
        display: none;
      }

      img {
        border-radius: 100%;
        display: block;
        top: -40px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        position: absolute;
        border: 6px solid #50c8e2;
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

section h1 {
  font-size: 3em;

  @media (max-width: 900px) {
    font-size: 2em;
  }

  @media (max-width: 600px) {
    font-size: 1.5em;
  }
}

#trending {
  margin-top: 300px;

  @media (max-width: 1200px) {
    margin-top: 150px;
  }

  @media (max-width: 900px) {
    margin-top: 100px;
  }

  @media (max-width: 600px) {
    margin-top: 70px;
  }
}
</style>

<template>
  <div>
    <header>
      <nav>
        <a href="#">
          <img src="../static/logo-white-1.png" id="logo" />
        </a>

        <div id="primary_nav">
          <a href="#">Şikayetler</a>
          <a href="#">Marka Rengi</a>
          <a href="#">Popüler 20</a>
          <a href="#" class="btn">Canlı Akış</a>
        </div>

        <div id="secondary_nav">
          <a href="#">Giriş Yap</a>
          <span>|</span>
          <a href="#">Üye Ol</a>
          <a href="#" class="btn">Şikayet Yaz</a>
        </div>

        <i class="fas fa-bars" style="font-size: 2em" />
      </nav>

      <div id="call_to_action">
        <h1>
          <span style="font-weight: 400">Şikayet.in varsa</span>
          <br />
          <span style="font-weight: 600">Çözüm de var</span>
        </h1>

        <div id="search">
          <input type="text" placeholder="Marka, model, ürün ara" />
        </div>

        <div id="banner">
          <img src="../static/banner1.png" />
        </div>

        <div id="star_of_week">
          <img src="../static/trendyol.png" />

          <small>Haftanın Yıldızı</small>
          <h4>TRENDYOL</h4>
          <p><b>1200</b> <span>Çözülmüş Şikayet</span></p>
          <a class="btn" href="#">İncele</a>
        </div>
      </div>
    </header>

    <section id="trending">
      <h1>Gündemdeki Şikayetler</h1>

      ...
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
