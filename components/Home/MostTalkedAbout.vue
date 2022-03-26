<style lang="scss" scoped>
#most_talked_about {
  margin-top: 150px;
  position: relative;

  @media (max-width: 1400px) {
    margin-top: 100px;
  }

  @media (max-width: 900px) {
    margin-top: 70px;
    padding: 0 10px;
  }

  .inner {
    margin: 50px 0;

    .card {
      box-shadow: 0px 2px 4px -2px #1118270f, 0px 4px 8px -2px #1118271a;

      background: white;
      transform: scale(0.9);
      padding: 50px 30px;
      border-radius: 10px;

      .heading {
        font-weight: 700;
        text-align: center;
      }

      p {
        font-size: 1.2em;
        padding: 30px 10px 10px 10px;
        max-width: 300px;
        margin: 0 auto;
        position: relative;

        &::before {
          content: '';
          width: 17px;
          height: 14px;
          background: url(../../static/quotes.png);
          background-position: center;
          background-size: cover;
          display: block;
          position: absolute;
          left: -25px;
        }

        @media (max-width: 500px) {
          padding: 25px 0;
          text-align: justify;
        }
      }

      a.comment {
        color: #3fc2e0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 8px 0;
        opacity: 0.8;
        transition: 0.2s;

        &:hover {
          opacity: 1;
        }

        img {
          width: 20px;
          display: inline-block;
        }
      }

      .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 300px;
        margin: 30px auto 0 auto;

        .arrow {
          width: 36px;
          margin: 0 10px;

          @media (max-width: 1000px) {
            width: 24px;
          }
        }
      }
    }
  }

  .abstract-circle,
  .abstract-left {
    position: absolute;
    top: 80px;
    bottom: 20px;
    z-index: -1;
  }

  .abstract-left {
    left: 0;
    width: min(50vw, 800px);
    background: #ef476f;
    border-radius: 0 500px 500px 0;
  }

  .abstract-circle {
    left: calc(50vw + 180px);
    border-radius: 100%;
    width: 520px;
    background: #ffd166;
  }

  @media (max-width: 1400px) {
    .abstract-left {
      width: 60vw;
    }
  }
  @media (max-width: 900px) {
    .abstract-left {
      width: 90vw;
    }

    .abstract-circle {
      display: none;
    }
  }
}
</style>

<template>
  <section id="most_talked_about">
    <h1 class="reveal-on-visible">En Çok Hangi Şikayetlere Yorum Yapıldı?</h1>

    <div class="inner">
      <div class="card" v-for="i in 10" :key="i">
        <h4 class="heading reveal-on-visible">
          Şikayet Başlığı dolor sit amet, consectetur adipiscing elit. Duis dui.
        </h4>
        <p class="reveal-on-visible delay-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis bibendum risus, sit ac velit purus lectus
          lobortis
        </p>
        <a href="#" class="comment reveal-on-visible delay-3"> <img src="../../static/yorum.png" /> &nbsp; 12 Yorum </a>
        <div class="footer reveal-on-visible delay-4">
          <div class="customer">
            <img src="../../static/customer.png" />
            <div>
              <b>Samet</b>
              <br />
              <span style="white-space: nowrap">
                12.123&nbsp;
                <fa :icon="['fas', 'eye']" style="display: inline" />
              </span>
            </div>
          </div>

          <img src="../../static/arrow.svg" class="arrow" />

          <div class="brand">
            <img src="../../static/trendyol.png" />
            <div>
              <b>Trendyol</b>
              <span style="white-space: nowrap; display: flex">
                <img src="../../static/star.png" class="star" v-for="i in 5" :key="i" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="abstract-left"></div>
    <div class="abstract-circle"></div>
  </section>
</template>

<script>
export default {
  async mounted() {
    $('#most_talked_about .inner').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  },
};
</script>