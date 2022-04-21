<template>
  <div class="sidebar">
    <div class="logo">
      <NuxtLink to="/">
        <img src="../../static/logo-blue.png" id="logo" />
      </NuxtLink>
    </div>
    <div class="items">
      <div class="item">
        <NuxtLink to="/markam">
          <span><fa :icon="['fas', 'copyright']" /> Markam</span>
        </NuxtLink>
        <NuxtLink to="/markam/bilgileri-guncelle">
          <span>Marka Profili Düzenle</span>
        </NuxtLink>
        <NuxtLink to="/markam/marka-bilgileri">
          <span>Marka Bilgileri</span>
        </NuxtLink>
        <NuxtLink to="/markam/bildirim-tercihleri">
          <span>Bildirim Tercihleri</span>
        </NuxtLink>
        <NuxtLink to="/markam/hesabimi-sil">
          <span>Markayı Askıya Al</span>
        </NuxtLink>
      </div>
      <div class="item">
        <NuxtLink to="/markam/sikayetler">
          <span><fa :icon="['fas', 'list']" /> Şikayetler</span>
        </NuxtLink>
        <NuxtLink to="/markam/cevaplanan-sikayetler">
          <span>Cevaplanan Şikayetler</span>
        </NuxtLink>
        <NuxtLink to="/markam/bekleyen-sikayetler">
          <span>Bekleyen Şikayetler</span>
        </NuxtLink>
      </div>
      <div class="item">
        <NuxtLink to="/markam/bildirimler">
          <span><fa :icon="['fas', 'bell']" /> Bildirimler</span>
        </NuxtLink>
      </div>
      <div class="item">
        <NuxtLink to="/markam/premium">
          <span><fa :icon="['fas', 'arrow-up']" /> Premium</span>
        </NuxtLink>
      </div>
      <div class="item">
        <NuxtLink to="/markam/degerlendirmelerim">
          <span><fa :icon="['fas', 'elevator']" /> Markam</span>
        </NuxtLink>
      </div>
      <div class="item">
        <NuxtLink to="/markam/kategorim">
          <span><fa :icon="['fas', 'rectangle-list']" /> Kategorim</span>
        </NuxtLink>
      </div>
      <div class="item">
        <NuxtLink to="/markam/reklamlarim">
          <span><fa :icon="['fas', 'receipt']" /> Reklamlarım</span>
        </NuxtLink>
      </div>
      <div class="item">
        <NuxtLink to="/markam/destek-bileti">
          <span><fa :icon="['fas', 'ticket']" /> Destek Bileti</span>
        </NuxtLink>
      </div>
    </div>
    <div class="logout-box">
      <NuxtLink to="/">
        <span><fa :icon="['fas', 'arrow-right-from-bracket']" /> Çıkış Yap</span>
      </NuxtLink>
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
      margin: 10px 0;
      a.nuxt-link-exact-active {
        color: #00244C !important;
        font-weight: 400 !important;
        font-size: 15px !important;
      }
      a {
        display: block;
        font-weight: 300;
        color: #7c7b85;
        margin-bottom: 15px;
        font-size: 13px;
        &:hover {
          color: #000 !important;
        }
        svg {
          margin-right: 5px;
        }
        &:not(:first-child) {
          color: #7c7b85;
          font-size: 13px;
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
