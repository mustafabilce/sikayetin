<style lang="scss" scoped>
footer {
  background-color: #2e3952;
  padding: var(--section-padding-inline);

  .logo {
    display: block;

    img {
      width: 256px;
      max-width: 100%;
    }

    @media (max-width: 1360px) {
      text-align: center;
    }
  }

  .sections {
    display: grid;
    grid-template-columns: 4fr 2fr 2fr 2fr 2fr;
    gap: 50px;
    color: white;
    margin: 80px 0;

    @media (max-width: 1360px) {
      grid-template-columns: 1fr;
    }

    .about {
      margin-right: 50px;

      @media (max-width: 1360px) {
        margin-right: 0;
      }

      p {
        opacity: 0.5;
        font-weight: 300;
        font-size: 1.1em;

        @media (max-width: 1360px) {
          text-align: center;
        }
      }

      .social {
        margin-top: 50px;
        cursor: default;

        @media (max-width: 1360px) {
          text-align: center;
        }

        img {
          height: 34px;
          margin-right: 10px;
        }
      }
    }

    .category {
      display: flex;
      flex-direction: column;

      @media (max-width: 1360px) {
        align-items: center;
      }

      .heading {
        font-size: 1.2em;
        margin-bottom: 20px;
        white-space: nowrap;
      }

      a {
        color: #a8adb7;
        padding: 12px 0;

        &:hover {
          color: white;
        }
      }
    }
  }

  .bottom {
    @media (max-width: 1360px) {
      flex-direction: column;
      gap: 50px;
    }

    .links {
      display: flex;
      gap: 20px;

      @media (max-width: 1100px) {
        flex-direction: column;
        gap: 10px;
        text-align: center;
      }

      a {
        color: white;
        font-size: 1.1em;
        font-weight: 700;
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
    <div class="logo reveal-on-visible">
      <img src="../static/logo-white.png" />
    </div>

    <div class="sections">
      <div class="about reveal-on-visible">
        <p>
          Şikayet.in bir ürün ya da hizmet için problem ile karşılaşan tüketicilerin, şikayetlerini dile
          getirebilmelerini ve şikayet.in marka tarafından çözülmesini sağlayan bir platformdur.
        </p>

        <div class="social">
          <a class="reveal-on-visible delay-1" href="#"><img src="../static/social/twitter.png" /></a>
          <a class="reveal-on-visible delay-2" href="#"><img src="../static/social/facebook.png" /></a>
          <a class="reveal-on-visible delay-3" href="#"><img src="../static/social/instagram.png" /></a>
          <a class="reveal-on-visible delay-4" href="#"><img src="../static/social/linkedin.png" /></a>
          <a class="reveal-on-visible delay-5" href="#"><img src="../static/social/youtube.png" /></a>
        </div>
      </div>

      <div class="category">
        <h4 class="heading reveal-on-visible">Popüler Kategoriler</h4>
        <a class="reveal-on-visible delay-1" href="#">Lorem ipsum</a>
        <a class="reveal-on-visible delay-2" href="#">Lorem ipsum</a>
        <NuxtLink class="reveal-on-visible delay-3" to="yardim">Lorem ipsum</NuxtLink>
        <NuxtLink class="reveal-on-visible delay-4" to="iletisim">Lorem ipsum</NuxtLink>
      </div>

      <div class="category">
        <h4 class="heading reveal-on-visible">Popüler Yorumlar</h4>
        <a class="reveal-on-visible delay-1" href="#">Lorem ipsum</a>
        <a class="reveal-on-visible delay-2" href="#">Lorem ipsum</a>
        <a class="reveal-on-visible delay-3" href="#">Lorem ipsum</a>
        <a class="reveal-on-visible delay-4" href="#">Lorem ipsum</a>
        <a class="reveal-on-visible delay-5" href="#">Lorem ipsum</a>
      </div>

      <div class="category">
        <h4 class="heading reveal-on-visible">Popüler Şikayetler</h4>
        <a class="reveal-on-visible delay-1" href="#">Lorem ipsum</a>
        <a class="reveal-on-visible delay-2" href="#">Lorem ipsum</a>
        <a class="reveal-on-visible delay-3" href="#">Lorem ipsum</a>
        <a class="reveal-on-visible delay-4" href="#">Lorem ipsum</a>
        <a class="reveal-on-visible delay-5" href="#">Lorem ipsum</a>
      </div>

      <div class="category">
        <h4 class="heading reveal-on-visible">Popüler Markalar</h4>
        <a class="reveal-on-visible delay-1" href="#">Lorem ipsum</a>
        <a class="reveal-on-visible delay-2" href="#">Lorem ipsum</a>
        <a class="reveal-on-visible delay-3" href="#">Lorem ipsum</a>
        <a class="reveal-on-visible delay-4" href="#">Lorem ipsum</a>
        <a class="reveal-on-visible delay-5" href="#">Lorem ipsum</a>
      </div>
    </div>

    <div class="bottom mt-5 d-flex align-items-center justify-content-between">
      <div class="links">
        <a href="#">Şikayetler</a>
        <a href="#">Kategoriler</a>
        <a href="#">Markalar</a>
        <a href="#">Bloglar</a>
        <a href="#">Sık Sorulanlar</a>
        <a href="#">Kullanım Şartları</a>
        <a href="#">KVKK</a>
        <a href="#">İletişim</a>
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