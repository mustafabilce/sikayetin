<style lang="scss" scoped>
#holder {
  @media (max-width: 500px) {
    margin-right: 15px !important;
  }
}

.hamburger-lines {
  display: block;
  height: 26px;
  width: 32px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: white;
  }

  .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }
}

.burger-icon {
  display: none;
  position: relative;
  width: 32px;
  height: 60px;

  @media (max-width: 1150px) {
    display: block;
  }

  .hamburger-lines {
    position: absolute;
    top: 17px;
    left: 20px;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #0e2431;
    font-weight: 500;
    font-size: 1.2rem;
    padding: 0.7rem;
  }

  a:hover {
    font-weight: bolder;
  }

  .checkbox {
    position: absolute;
    display: block;
    height: 32px;
    width: 32px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  input[type='checkbox']:checked ~ .hamburger-lines .line1 {
    transform: rotate(45deg);
  }

  input[type='checkbox']:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
  }

  input[type='checkbox']:checked ~ .hamburger-lines .line3 {
    transform: rotate(-45deg);
  }
}

.menu {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  min-height: 100vh;
  background: white;
  z-index: 9;
  transition: 0.3s;

  display: flex;
  flex-direction: column;
  text-align: center;

  &.hide {
    pointer-events: none;
    opacity: 0;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 50px 0;

    #logo {
      width: 156px;
    }

    .hamburger-lines {
      cursor: pointer;

      .line {
        background: black;
      }
      .line1 {
        transform: rotate(45deg);
      }
      .line2 {
        transform: scaleY(0);
      }
      .line3 {
        transform: rotate(-45deg);
      }
    }
  }

  main,
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;

    a {
      padding: 12px 24px;
      margin: 8px 0;
      font-size: 1.5em;
      color: #0c2e4f;
      width: min(220px, 80vw);

      &.button {
        color: white;
        border-radius: 15px;
      }
    }
  }

  main a.button {
    background-color: #ff5777;
  }

  footer {
    display: none;
    a.button {
      background-color: #0c2e4f;
    }

    @media (max-width: 850px) {
      display: flex;
    }
  }
}
</style>

<template>
  <div id="holder">
    <div class="burger-icon">
      <input class="checkbox" type="checkbox" v-model="expanded" />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
    </div>

    <div class="menu" :class="expanded ? '' : 'hide'">
      <header>
        <a href="#">
          <img src="../../static/logo-blue.png" id="logo" />
        </a>

        <div class="hamburger-lines" @click="expanded = false">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
      </header>

      <main>
        <a href="#">Şikayetler</a>
        <a href="#">Marka Ringi</a>
        <a href="#">Popüler 20</a>
        <a href="#" class="button">Canlı Akış</a>
      </main>

      <footer>
        <a href="#">Giriş Yap</a>
        <a href="#">Üye Ol</a>
        <a href="#" class="button">Şikayet Yaz</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    expanded: false,
  }),
};
</script>