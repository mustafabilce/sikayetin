<template>
  <div class="sidebar">
    <div class="logo">
      <NuxtLink to="/">
        <img src="../../static/logo-white.png" id="logo" />
      </NuxtLink>
    </div>
    <div class="items">
      <div class="item">
        <NuxtLink to="/profilim">
          <span><fa :icon="['fas', 'user']" /> Hesabım</span>
        </NuxtLink>
        <NuxtLink to="/profilim/profil-bilgileri">
          <span>Hesap Bilgileri</span>
        </NuxtLink>
        <NuxtLink to="/profilim/kisisel-bilgiler">
          <span>Kişisel Bilgiler</span>
        </NuxtLink>
        <NuxtLink to="/profilim/bildirim-tercihleri">
          <span>Bildirim Tercihleri</span>
        </NuxtLink>
        <NuxtLink to="/profilim/hesabimi-sil">
          <span>Hesabımı Sil</span>
        </NuxtLink>
      </div>
      <div class="item">
        <NuxtLink to="/profilim/sikayetlerim">
          <span><fa :icon="['fas', 'pen']" /> Şikayetlerim</span>
        </NuxtLink>
      </div>
      <div class="item">
        <NuxtLink to="/profilim/takip-ettiklerim">
          <span><fa :icon="['fas', 'bookmark']" /> Takip Ettiklerim</span>
        </NuxtLink>
      </div>
      <div class="item">
        <NuxtLink to="/profilim/bildirimlerim">
          <span><fa :icon="['fas', 'bell']" /> Bildirimlerim</span>
        </NuxtLink>
      </div>
      <div class="item">
        <NuxtLink to="/">
          <span><fa :icon="['fas', 'arrow-right-from-bracket']" /> Çıkış Yap</span>
        </NuxtLink>
      </div>
    </div>
    <div class="logout-box">
      <NuxtLink class="btn sikayet-btn rounded-pill" to="/sikayet-yaz" :class="{ active: active == 'sikayet-yaz' }"
        ><fa class="mr-2" :icon="['fas', 'pen-to-square']" /> Şikayet Yaz</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100vh;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .logo {
    img {
      max-width: 181px;
    }
  }
  .sikayet-btn {
    background: #fff;
    color: #00244c !important;
    font-weight: 400;
    padding: 8px 30px;
    margin-left: 20px;
  }
  .items {
    .item {
      margin: 30px 0;
      a.nuxt-link-exact-active {
        color: #fff !important;
        font-weight: 400 !important;
      }
      a {
        display: block;
        font-weight: 300;
        color: #c7c7c7;
        margin-bottom: 15px;
        &:hover {
          color: #fff !important;
        }
        svg {
          margin-right: 5px;
        }
        &:not(:first-child) {
          color: #c7c7c7;
          font-size: 90%;
          font-weight: 300;
          margin: 10px 0 10px 30px;
        }
      }
    }
  }
  .logout-box {
    a {
      display: block;
      font-weight: 400;
      font-size: 80%;
      color: #7c7b85;
    }
    button {
      margin-top: 40px;
      display: block;
    }
  }
}
</style>
