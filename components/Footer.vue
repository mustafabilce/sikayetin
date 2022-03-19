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

    @media (max-width: 800px) {
      text-align: center;
    }
  }

  .sections {
    display: grid;
    grid-template-columns: 3fr 2fr 2fr 2fr;
    gap: 50px;
    color: white;
    margin-top: 80px;

    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }

    .about {
      margin-right: 50px;

      @media (max-width: 1200px) and (min-width: 800px) {
        grid-column: 1 / 4;
      }

      @media (max-width: 800px) {
        margin-right: 0;
      }

      p {
        opacity: 0.5;
        font-weight: 300;
        font-size: 1.1em;

        @media (max-width: 800px) {
          text-align: center;
        }
      }

      .social {
        margin-top: 50px;
        cursor: default;

        @media (max-width: 800px) {
          text-align: center;
        }

        img {
          height: 34px;
          margin-right: 10px;
        }

        a {
          opacity: 0.7;

          &:hover {
            opacity: 1;
          }
        }
      }
    }

    .category {
      display: flex;
      flex-direction: column;

      @media (max-width: 800px) {
        align-items: center;
      }

      h3 {
        font-size: 1.5em;
        margin-bottom: 20px;
        white-space: nowrap;
      }

      a {
        color: white;
        opacity: 0.5;
        padding: 12px 0;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>

<template>
  <footer>
    <div class="logo">
      <img src="../static/logo-white.png" />
    </div>

    <div class="sections">
      <div class="about">
        <p>
          "Senin sikayet.in burada yayınlanır. Markan çözüme ulaştırır.
          Üyeleriyle markaları buluşturan sikayet.in platformu her zaman adil ve
          çözüm odaklıdır. Derdini söylemeyen derman bulamaz. Senin için sonsuza
          kadar buradayız.
        </p>

        <div class="social">
          <a href="#"><img src="../static/social/twitter.png" /></a>
          <a href="#"><img src="../static/social/facebook.png" /></a>
          <a href="#"><img src="../static/social/instagram.png" /></a>
          <a href="#"><img src="../static/social/linkedin.png" /></a>
          <a href="#"><img src="../static/social/youtube.png" /></a>
        </div>
      </div>

      <div class="category">
        <h3>Sayfalar</h3>
        <a href="#">Hakkımızda</a>
        <a href="#">Blog</a>
        <a href="#">Sıkça Sorulanlar</a>
        <a href="#">İletişim</a>
      </div>

      <div class="category">
        <h3>Son 5 Şikayet</h3>
        <a href="#">Şikayet Başlığı</a>
        <a href="#">Şikayet Başlığı</a>
        <a href="#">Şikayet Başlığı</a>
        <a href="#">Şikayet Başlığı</a>
        <a href="#">Şikayet Başlığı</a>
      </div>

      <div class="category">
        <h3>Çok Konuşulanlar</h3>
        <a href="#">Marka Adı</a>
        <a href="#">Marka Adı</a>
        <a href="#">Marka Adı</a>
        <a href="#">Marka Adı</a>
        <a href="#">Marka Adı</a>
      </div>
    </div>
  </footer>
</template>