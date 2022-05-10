<style lang="scss" scoped>
footer {
  background-color: #2e3952;
  padding: 50px 100px 20px;
  $mobile-breakpoint-xl: 1400px;
  $mobile-breakpoint: 1200px;
  $mobile-breakpoint-2: 960px;

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(209, 210, 215, 0.2);

    .social {
      cursor: default;

      @media (max-width: $mobile-breakpoint) {
        text-align: center;
      }

      img {
        height: 24px;
        margin-right: 10px;
      }
    }

    img {
      max-width: 200px;
    }

    @media (max-width: $mobile-breakpoint) {
      text-align: center;
    }
  }

  .sections {
    margin-top: 30px;
    color: white;

    @media (max-width: $mobile-breakpoint-xl) {
      grid-template-columns: 320px 1fr;
      gap: 40px;
    }

    @media (max-width: $mobile-breakpoint) {
      grid-template-columns: 1fr;
    }

    .about {
      @media (max-width: $mobile-breakpoint) {
        margin-right: 0;
      }

      p {
        opacity: 0.5;
        font-weight: 300;
        font-size: 15px;

        @media (max-width: $mobile-breakpoint) {
          text-align: center;
        }
      }
    }

    .categories {

      @media (max-width: $mobile-breakpoint-2) {
        flex-direction: column;
        gap: 60px;
      }

      .category {

        .heading {
          font-size: 15px;
          margin-bottom: 20px;
          white-space: nowrap;
        }

        a {
          color: #a8adb7;
          font-size: 13px;
          padding: 5px 0;
          display: block;

          &:hover {
            color: white;
          }
        }
      }
    }
  }

  .bottom {
    margin-top: 50px;

    @media (max-width: $mobile-breakpoint) {
      flex-direction: column;
      gap: 50px;
    }

    @media (max-width: $mobile-breakpoint-2) {
      margin-top: 0;
    }

    .links {
      display: flex;
      gap: 20px;

      @media (max-width: $mobile-breakpoint-2) {
        flex-direction: column;
        text-align: center;
      }

      a {
        color: white;
        font-size: 13px;
        font-weight: 400;
      }
    }

    .copyright {
      color: rgba($color: #fff, $alpha: 0.8);
    }
  }
}
</style>

<template>
  <footer :style="'margin-top:' + marginTop + 'px'">
    <div class="logo">
      <img src="../static/logo-white.png" />

      <div class="social">
        <a href="#"><img src="../static/social/twitter.png" /></a>
        <a href="#"><img src="../static/social/facebook.png" /></a>
        <a href="#"><img src="../static/social/instagram.png" /></a>
        <a href="#"><img src="../static/social/linkedin.png" /></a>
        <a href="#"><img src="../static/social/youtube.png" /></a>
      </div>
    </div>

    <div class="sections">
      <!-- <div class="about">
        <p>
          Şikayet.in bir ürün ya da hizmet için problem ile karşılaşan tüketicilerin, şikayetlerini dile
          getirebilmelerini ve şikayet.in marka tarafından çözülmesini sağlayan bir platformdur.
        </p>
      </div> -->

      <div class="categories row">
        <div class="category col-2">
          <h4 class="heading">Popüler Kategoriler</h4>
          <NuxtLink :to="`/category/${popularCategory.id}`" v-for="popularCategory in $store.state.popularCategories" :key="popularCategory.id">{{
            popularCategory.name
          }}</NuxtLink>
        </div>

        <div class="category col-2">
          <h4 class="heading">Popüler Markalar</h4>
          <NuxtLink :to="`/all-brands/${popularBrand.id}`" v-for="popularBrand in $store.state.popularBrands" :key="popularBrand.id">{{
            popularBrand.name
          }}</NuxtLink>
        </div>

        <div class="category col-4">
          <h4 class="heading">Popüler Şikayetler</h4>
          <NuxtLink to="yardim" v-for="popularComplaint in $store.state.popularComplaints" :key="popularComplaint.id">{{
            popularComplaint.title
          }}</NuxtLink>
        </div>

        <div class="category col-4">
          <h4 class="heading">Popüler Yorumlar</h4>
          <!-- <NuxtLink :to="`sikayetler/${popularComment.complaint}`" v-for="popularComment in $store.state.popularComments" :key="popularComment.id">{{
            popularComment.text
          }}</NuxtLink> -->
          <NuxtLink to="`sikayetler">Lorem ipsum dolor sit consectetur adipisicing elit.</NuxtLink>
          <NuxtLink to="`sikayetler">Lorem ipsum dolor sit consectetur adipisicing elit.</NuxtLink>
          <NuxtLink to="`sikayetler">Lorem ipsum dolor sit consectetur adipisicing elit.</NuxtLink>
          <NuxtLink to="`sikayetler">Lorem ipsum dolor sit consectetur adipisicing elit.</NuxtLink>
          <NuxtLink to="`sikayetler">Lorem ipsum dolor sit consectetur adipisicing elit.</NuxtLink>
        </div>
      </div>
    </div>

    <div class="bottom d-flex align-items-center justify-content-between">
      <div class="links">
        <NuxtLink to="/sikayetler">Şikayetler</NuxtLink>
        <NuxtLink to="/category">Kategoriler</NuxtLink>
        <NuxtLink to="/brands">Markalar</NuxtLink>
        <NuxtLink to="/all-brands">Tüm Markalar</NuxtLink>
        <NuxtLink to="/blog">Bloglar</NuxtLink>
        <NuxtLink to="/yardim">Yardım</NuxtLink>
        <NuxtLink to="/kullanim-sartlari">Kullanım Şartları</NuxtLink>
        <NuxtLink to="/kvkk">KVKK</NuxtLink>
        <NuxtLink to="/iletisim">İletişim</NuxtLink>
      </div>

      <small class="copyright"> 2022 © Tüm Hakları saklıdır. </small>
    </div>
  </footer>
</template>

<script>
export default {
  props: { marginTop: { default: 100, type: Number } },
};
</script>
