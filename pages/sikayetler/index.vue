<style lang="scss" scoped>
section > h2 {
  font-weight: bold;
  font-size: 2.3em;
}

#trending {
  position: relative;

  .inner {
    padding: 50px 0;
    margin-top: 20px;
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
          flex-wrap: wrap;
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
  }

  .background {
    position: absolute;
    left: 0;
    right: 20px;
    top: 75px;
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

#all {
  overflow: visible !important;

  @media (max-width: 1400px) {
    .heading {
      justify-content: flex-end !important;

      .left {
        width: 100%;
      }
    }
  }

  @media (max-width: 900px) {
    .heading {
      justify-content: center !important;
      align-items: center !important;
      flex-direction: column;

      .left {
        width: unset;
      }

      .right {
        align-items: center !important;
        flex-direction: column;
      }
    }
  }

  .complaint {
    box-shadow: 0px 2px 4px -2px #1118270f, 0px 4px 8px -2px #1118271a;
    padding: 30px;
    background: white;
    border-radius: 8px;
    margin-top: 50px;

    .title {
      font-weight: 700;
    }

    .text {
      font-weight: 400;
      margin: 50px 0;
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      flex-wrap: wrap;

      @media (max-width: 1100px) {
        display: grid;
        grid-template-columns: 104px 1fr 104px;
        grid-template-rows: auto;
        grid-template-areas:
          'customer . brand'
          'actions actions actions';
        gap: 40px;
      }

      .customer {
        grid-area: customer;
      }
      .brand {
        grid-area: brand;
      }
      .actions {
        display: flex;
        gap: 15px;
        grid-area: actions;
        justify-content: center;

        .like-button.active {
          --background: #b9e1ff;
        }

        @media (max-width: 700px) {
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
}
</style>

<template>
  <div>
    <Header active="sikayetler" />

    <section id="trending">
      <div class="background"></div>

      <h2 class="reveal-on-visible">Gündemdeki Şikayetler</h2>

      <div class="inner">
        <button class="slick-button prev-button">
          <fa :icon="['fas', 'angle-left']" />
        </button>

        <div class="slides">
          <div class="slide" v-for="i in 10" :key="i">
            <h4 class="heading reveal-on-visible delay-1">Şikayet Başlığı dolor sit amet, consectetur</h4>
            <div class="footer reveal-on-visible delay-2">
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
                    <img src="../../static/star.png" class="star" v-for="i in 5" :key="i" />
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

    <section id="all" style="margin-top: 150px">
      <div
        class="heading d-flex align-items-center flex-wrap align-items-center justify-content-between"
        style="gap: 20px"
      >
        <div class="left d-flex flex-wrap align-items-center" style="gap: 20px">
          <h2 class="reveal-on-visible">Tüm Şikayetler</h2>
          <span style="opacity: 0.5">12.850 şikayet</span>
        </div>

        <div
          class="right d-flex align-items-center flex-wrap align-items-center justify-content-between"
          style="gap: 10px"
        >
          <div class="input-group" style="width: 300px">
            <input type="text" class="form-control" placeholder="Şikayet içinde ara" />
            <div class="input-group-append">
              <span class="input-group-text">
                <img src="../../static/search.svg" />
              </span>
            </div>
          </div>

          <div class="input-group" style="width: 220px">
            <input type="text" class="form-control" placeholder="Filtrele" />
            <div class="input-group-append">
              <span class="input-group-text">
                <img src="../../static/filter.svg" />
              </span>
            </div>
          </div>

          <div class="input-group" style="width: 180px">
            <input type="text" class="form-control" placeholder="Sırala" />
            <div class="input-group-append">
              <span class="input-group-text">
                <img src="../../static/order.svg" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="complaint reveal-on-visible" v-for="complaint in complaints" :key="complaint.id">
        <h4 class="title">{{ complaint.title }}</h4>
        <p class="text">{{ complaint.text }}</p>

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

          <div class="actions">
            <div
              class="input-group rounded like-button"
              :class="{ active: complaint.liked }"
              style="width: 160px"
              @click="complaint.liked = !complaint.liked"
            >
              <button>Beğen</button>
              <div class="input-group-append">
                <span class="input-group-text">
                  <img src="../../static/like.svg" />
                </span>
              </div>
            </div>

            <div class="input-group rounded" style="width: 200px">
              <button>Yorum Yap</button>
              <div class="input-group-append">
                <span class="input-group-text">
                  <img src="../../static/comment.svg" />
                </span>
              </div>
            </div>

            <div class="input-group rounded" style="width: 160px">
              <button>Takip Et</button>
              <div class="input-group-append">
                <span class="input-group-text">
                  <img src="../../static/follow.svg" />
                </span>
              </div>
            </div>
          </div>

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
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Home/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: { Header, Footer },
  data: () => ({
    complaints: [],
  }),
  created() {
    for (let i = 1; i < 10; i++) {
      this.complaints.push({
        id: i,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus, integer lectus turpis dui. Consectetur dignissim ultrices enim eget aliquam, volutpat, diam. Vulputate morbi felis, ornare arcu augue ut purus ut. Nibh enim ut sed sit sollicitudin diam elementum. Quis laoreet justo eget sit ut diam orci quisque mattis. Gravida scelerisque posuere purus nulla lobortis feugiat cursus nibh. Faucibus dignissim adipiscing amet, est semper mauris tincidunt sit lacus. Odio nulla eu et mauris, pharetra elit non commodo. Purus pellentesque eu, non etiam tellus nec eu nisl. Hendrerit tellus ut quam mattis tellus tincidunt consectetur. Felis morbi auctor augue aliquam.',
        liked: false,
      });
    }
  },
  mounted() {
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