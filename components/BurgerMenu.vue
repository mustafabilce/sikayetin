<style lang="scss" scoped>
#burger_menu_holder {
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

.menu,
.darken-background {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  transition: 0.3s;

  &.hide {
    pointer-events: none;
    opacity: 0;
  }
}

.menu {
  background: white;
  z-index: 9;
  max-width: 100vw;
  overflow-x: hidden;
  border-radius: 0 0 80px 80px;
  --button-padding-x: 72px;
  $breakpoint: 400px;

  @media (max-width: $breakpoint) {
    --button-padding-x: 48px;
  }

  .top {
    background: #ecf1f8;
    padding: 32px;
    border-radius: 0 0 80px 80px;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo {
        width: 200px;

        @media (max-width: $breakpoint) {
          width: 156px;
        }
      }

      .times {
        width: 26px;

        @media (max-width: $breakpoint) {
          width: 22px;
        }
      }
    }

    .top-menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 42px;

      .button {
        background: #00244c;
        padding: 12px var(--button-padding-x);
        color: white;
        font-weight: 700;
        border-radius: 100px;
        font-size: 1.2rem;
      }

      p {
        margin: 16px 0 0 0;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 1.1em;

        span,
        a {
          color: #00244c;
        }
      }
    }
  }

  .bottom-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-block: 40px;
    gap: 20px;
    font-size: 1.5rem;
    font-weight: 500;

    a {
      color: #00244c;
    }

    .button {
      background-color: #ff5777;
      font-size: 1rem;
      font-weight: 700;
      color: white;
      padding: 12px var(--button-padding-x);
      border-radius: 12px;
      margin-top: 10px;
    }
  }
}

.darken-background {
  bottom: 0;
  background: black;
  opacity: 0.7;
  backdrop-filter: blur(10px);
}
</style>

<template>
  <div id="burger_menu_holder">
    <div class="burger-icon">
      <input class="checkbox" type="checkbox" v-model="expanded" />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
    </div>

    <div class="menu" :class="expanded ? '' : 'hide'">
      <div class="top">
        <div class="header">
          <a href="#">
            <img src="../static/logo-blue.png" class="logo" />
          </a>

          <img src="../static/times.svg" @click="expanded = false" class="times" />
        </div>

        <div class="top-menu">
          <a href="#" class="button">Şikayet Yaz</a>
          <p>
            <a href="#">Giriş Yap</a>
            <span>|</span>
            <a href="#">Üye Ol</a>
          </p>
        </div>
      </div>

      <div class="bottom-menu">
        <NuxtLink to="/sikayetler">Şikayetler</NuxtLink>
        <NuxtLink to="/marka-ringi">Marka Ringi</NuxtLink>
        <NuxtLink to="/populer">Popüler 20</NuxtLink>
        <a href="#" class="button">Canlı Akış</a>
      </div>
    </div>

    <div class="darken-background" :class="expanded ? '' : 'hide'" @click="expanded = false"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    expanded: false,
  }),
};
</script>