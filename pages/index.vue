<style lang="scss">
header {
  background: linear-gradient(#85dced, #4fc8e2);
  border-radius: 0 0 220px 220px;
  padding: 30px 150px;

  @media (max-width: 1500px) {
    padding-inline: 120px;
  }
  @media (max-width: 1200px) {
    border-radius: 0 0 140px 140px;
  }
  @media (max-width: 800px) {
    border-radius: 0 0 50px 50px;
  }
  @media (max-width: 500px) {
    padding: 30px;
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

    @media (max-width: 500px) {
      #logo {
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
      @media (max-width: 900px) {
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

    h1 {
      font-size: 4em;
    }

    input {
      margin: 50px 0;
      width: 450px;
      border-radius: 100px;
      padding: 20px 30px;
      border: none;
      outline: none;
      box-shadow: 0 0 4px rgba($color: #000000, $alpha: 0.2);

      &:hover {
        box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.4);
      }

      &:focus {
        box-shadow: 0 0 8px rgba($color: #000000, $alpha: 0.8);
      }
    }

    #banner {
      position: absolute;
      top: 150px;
      right: 100px;
      border-radius: 100%;
      box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.1);
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
  }
}
</style>

<template>
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
        <span style="font-weight: 300">Şikayet.in varsa</span>
        <br />
        <span>Çözümde var</span>
      </h1>

      <input type="text" placeholder="Marka, model, ürün ara" />

      <div id="banner">
        <img src="../static/banner1.png" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
