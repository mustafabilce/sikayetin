<style lang="scss">
header {
  background: linear-gradient(#85dced, #4fc8e2);
  height: 80vh;
  min-height: 500px;
  border-radius: 0 0 250px 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    border-radius: 0 0 150px 150px;
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
    padding: 30px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 500px) {
      padding: 30px;
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
  </header>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
