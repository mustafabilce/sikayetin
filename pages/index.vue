<style lang="scss">
header {
  background: linear-gradient(#85dced, #4fc8e2);
  height: 80vh;
  border-radius: 0 0 250px 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  nav {
    width: 1400px;
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: white;
    }

    #primary_nav {
      a {
        margin: 0 6px;
        padding: 12px;

        &:not(.btn):hover {
          color: #ff5777;
        }

        &.btn {
          background: #ff5777;
          color: white;
          border-radius: 100px;
          padding: 8px 24px;
          margin-left: 10px;
        }
      }
    }

    #secondary_nav {
      color: white;
      cursor: default;

      a {
        padding: 4px;

        &:not(.btn):hover {
          color: #00244c;
        }

        &.btn {
          background: #00244c;
          color: white;
          font-weight: bold;
          padding: 12px 36px;
          border-radius: 100px;
          margin-left: 40px;
        }
      }
    }
  }
}
</style>

<template>
  <header>
    <nav>
      <a href="#">
        <img src="../static/logo-white-1.png" />
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
    </nav>
  </header>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
