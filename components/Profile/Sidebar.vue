<template>
  <div class="sidebar">
    <div class="logo">
      <NuxtLink to="/">
          <img src="../../static/logo-blue.png" id="logo" />
      </NuxtLink>
    </div>
    <div class="items">
      <div class="item">
        <NuxtLink to="/" class="text-dark">
          <span><fa :icon="['fas', 'user']" /> Profilimi Düzenle</span>
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
        <NuxtLink to="/">
          <span><fa :icon="['fas', 'pen']" /> Şikayetlerim</span>
        </NuxtLink>
      </div>
      <div class="item">
        <NuxtLink to="/">
          <span><fa :icon="['fas', 'bell']" /> Bildirimlerim</span>
        </NuxtLink>
      </div>
      <div class="item">
        <NuxtLink to="/">
          <span><fa :icon="['fas', 'bookmark']" /> Kaydedilenler</span>
        </NuxtLink>
      </div>
    </div>
    <div class="logout-box">
      <NuxtLink to="/">
        <span><fa :icon="['fas', 'arrow-right-from-bracket']" /> Çıkış Yap</span>
      </NuxtLink>
      <button class="light-button"><fa class="mr-2" :icon="['fas', 'pen-to-square']" />Şikayet Yaz</button>
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
  .items {
    .item {
      margin: 30px 0;
      a {
        display: block;
        font-weight: 300;
        color: #7c7b85;
        margin-bottom: 15px;
        &:hover {
            color: #000 !important;
        }
        svg {
          margin-right: 5px;
        }
        &:not(:first-child) {
          color: #7c7b85;
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
