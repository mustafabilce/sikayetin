<style lang="scss" scoped>
#trending {
  position: relative;

  .inner {
    padding: 50px 0;
    margin-top: 40px;
    position: relative;

    .slides {
      padding: 0 80px;

      @media (max-width: 900px) {
        padding: 0;
        margin-right: 50px;
      }

      .slide {
        border: 1px solid #f5fdff;
        border-radius: 8px;
        color: white;
        padding: 20px;
        margin: 0 10px;
        box-shadow: 0px 2px 4px -2px #1118270f, 0px 4px 8px -2px #1118271a;

        .heading {
          text-align: center;
          font-weight: bold;
        }

        .footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 300px;
          margin: 30px auto 0 auto;

          .customer,
          .brand {
            display: flex;
            align-items: center;
            position: relative;

            &::after {
              content: '';
              display: block;
              position: absolute;
              bottom: 2px;
              left: 34px;
              width: 13px;
              height: 13px;
              background-image: url(../../static/verified.png);
              outline: 2px solid white;
              border-radius: 100%;
            }

            b {
              font-size: 0.9em;
            }

            span {
              font-size: 0.9em;
              opacity: 0.7;
            }

            img {
              width: 42px;
              border-radius: 100%;
              margin-right: 10px;
            }
          }

          .brand {
            & > div {
              display: flex;
              flex-direction: column;
            }

            .star {
              margin-right: 3px;
              width: 12px;

              @media (max-width: 1200px) {
                margin-right: 2px;
                width: 9px;
              }
            }
          }

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
  }

  .background {
    position: absolute;
    left: 0;
    right: 20px;
    top: 100px;
    bottom: 0;
    background: #5379ff;
    border-radius: 0 1000px 1000px 0;

    @media (max-width: 900px) {
      top: 80px;
      bottom: 20px;
      right: 10px;
      border-radius: 0 100px 100px 0;
    }
  }

  .slick-button {
    background: transparent;
    border: 2px solid #c2eef7;
    border-radius: 8px;
    width: 55px;
    height: 55px;
    display: inline-grid;
    place-items: center;
    color: white;
    font-size: 1.5em;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: 900px) {
      display: none !important;
    }

    &.prev-button {
      left: 0;
    }
    &.next-button {
      right: 0;
    }
  }
}
</style>

<template>
  <div>
    <Header active="sikayetler" />

    <section id="trending">
      <div class="background"></div>

      <h1>Gündemdeki Şikayetler</h1>

      <div class="inner">
        <button class="slick-button prev-button">
          <fa :icon="['fas', 'angle-left']" />
        </button>

        <div class="slides">
          <div class="slide" v-for="i in 10" :key="i">
            <h3 class="heading">Şikayet Başlığı dolor sit amet, consectetur</h3>
            <div class="footer">
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

              <div class="brand">
                <img src="../../static/trendyol.png" />
                <div>
                  <b>Trendyol</b>
                  <span style="white-space: nowrap; display: flex">
                    <img
                      src="../../static/star.png"
                      class="star"
                      v-for="i in 5"
                      :key="i"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="slick-button next-button">
          <fa :icon="['fas', 'angle-right']" />
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '~/components/Home/Header.vue';
export default {
  components: { Header },
  async mounted() {
    $('#trending .inner .slides').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: $('.prev-button'),
      nextArrow: $('.next-button'),
      responsive: [
        {
          breakpoint: 1200,
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
            dots: true,
          },
        },
      ],
    });
  },
};
</script>