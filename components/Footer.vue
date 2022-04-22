<style lang="scss" scoped>
footer {
  background-color: #2e3952;
  padding: 50px 100px 20px;
  $mobile-breakpoint-xl: 1400px;
  $mobile-breakpoint: 1200px;
  $mobile-breakpoint-2: 960px;

  .logo {
    display: block;

    img {
      max-width: 200px;
    }

    @media (max-width: $mobile-breakpoint) {
      text-align: center;
    }
  }

  .sections {
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: 60px;
    color: white;
    margin: 30px 0;

    @media (max-width: $mobile-breakpoint-xl) {
      grid-template-columns: 320px 1fr;
      gap: 40px
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

      .social {
        margin-top: 30px;
        cursor: default;

        @media (max-width: $mobile-breakpoint) {
          text-align: center;
        }

        img {
          height: 24px;
          margin-right: 10px;
        }
      }
    }

    .categories {
      display: flex;
      justify-content: space-between;
      gap: 10px;

      @media (max-width: $mobile-breakpoint-2) {
        flex-direction: column;
        gap: 60px;
      }

      .category {
        display: flex;
        flex-direction: column;

        @media (max-width: $mobile-breakpoint) {
          align-items: center;
        }

        .heading {
          font-size: 15px;
          margin-bottom: 20px;
          white-space: nowrap;
        }

        a {
          color: #a8adb7;
          font-size: 13px;
          padding: 5px 0;

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
    </div>

    <div class="sections">
      <div class="about">
        <p>
          Şikayet.in bir ürün ya da hizmet için problem ile karşılaşan tüketicilerin, şikayetlerini dile
          getirebilmelerini ve şikayet.in marka tarafından çözülmesini sağlayan bir platformdur.
        </p>

        <div class="social">
          <a href="#"><img src="../static/social/twitter.png" /></a>
          <a href="#"><img src="../static/social/facebook.png" /></a>
          <a href="#"><img src="../static/social/instagram.png" /></a>
          <a href="#"><img src="../static/social/linkedin.png" /></a>
          <a href="#"><img src="../static/social/youtube.png" /></a>
        </div>
      </div>

      <div class="categories">
        <div class="category">
          <h4 class="heading">Popüler Kategoriler</h4>
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
          <NuxtLink to="yardim">Lorem ipsum</NuxtLink>
          <NuxtLink to="iletisim">Lorem ipsum</NuxtLink>
        </div>

        <div class="category">
          <h4 class="heading">Popüler Markalar</h4>
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
        </div>

        <div class="category">
          <h4 class="heading">Popüler Şikayetler</h4>
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
        </div>

        <div class="category">
          <h4 class="heading">Popüler Yorumlar</h4>
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
        </div>
      </div>
    </div>

    <div class="bottom d-flex align-items-center justify-content-between">
      <div class="links">
        <NuxtLink to="/sikayetler">Şikayetler</NuxtLink>
        <NuxtLink to="/category">Kategoriler</NuxtLink>
        <NuxtLink to="/brands">Markalar</NuxtLink>
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