<style lang="scss" scoped>
.heading {
  p {
    font-size: 1.1em;
    font-weight: 500;
  }
  .firm-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      max-width: 150px;
      max-height: 150px;
    }
    .verified {
      max-width: 40px;
      max-height: 40px;
      position: absolute;
      right: 0;
      bottom: 0;
    }
    h4.title {
      font-size: 20px;
      margin-top: 20px;
      font-weight: 600;
    }
    .star-icon {
      color: #FFC247;
    }
  }
  .collapse-card {
    background-color: #fff;
    padding: 20px 25px;
    .collapse-mark {
      img {
        max-width: 50px;
        margin: 0 20px;
      }
      h6 {
        font-size: 14px;
      }
      p {
        font-size: 12px;
        margin-bottom: 0;
      }
    }
    .collapse-button {
      background-color: transparent;
      border: 2px solid #C2EEF7;
      color: #00244B;
      &:focus {
        box-shadow: none;
      }
    }
    .ratio-box {
      align-items: center;
      img {
        max-height: 50px;
      }
      p {
        margin-bottom: 0;
      }
    }
  }
}
</style>

<template>
  <div>
    <Header active="populer" />

    <section class="heading">
      <h1 class="reveal-on-visible delay-1">Popüler 20</h1>
      <p class="reveal-on-visible delay-2 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non.
      </p>
      <div class="row">
        <div class="col-12">
          <div class="firm-box">
            <div style="max-width: 150px; position: relative;">
              <img class="img-fluid" src="../static/apple.png" />
              <img class="verified" src="../static/verified.svg" />
            </div>
            <h4 class="title">Apple</h4>
            <div class="stars">
              <fa :icon="['fas', 'star']" class="star-icon" />
              <fa :icon="['fas', 'star']" class="star-icon" />
              <fa :icon="['fas', 'star']" class="star-icon" />
              <fa :icon="['fas', 'star']" class="star-icon" />
              <fa :icon="['fas', 'star']" class="star-icon" />
              <span>4.2</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12" v-for="i in 4" :key="i">
          <div class="collapse-card mb-4">
            <div class="row align-items-center">
              <div class="col-4">
                <div class="d-flex align-items-center">
                  <p class="mb-0">1.</p>
                <div class="collapse-mark d-flex">
                  <div>
                    <img class="rounded-circle" src="../static/trendyol.png" />
                  </div>
                  <div>
                    <h6>Trendyol</h6>
                    <p>Alışveriş</p>
                  </div>
                </div>
                </div>
              </div>
              <div class="col-5">
                <div class="ratio-box d-flex justify-content-between">
                  <div>
                    <img class="" src="../static/ratio-test.png" />
                  </div>
                  <div>
                    <p>%1553</p>
                  </div>
                  <div>
                    <p>2 <fa :icon="['fas', 'caret-up']" class="text-success" /></p>
                  </div>
                </div>
              </div>
              <div class="col-3 text-right">
                <b-button v-b-toggle.collapse-2 class="collapse-button">
                  <fa :icon="['fas', 'chevron-down']" class="" />
                </b-button>
              </div>
            </div>
          </div>
          <b-collapse id="collapse-2">
            <b-card class="pt-5 rounded">
              <div class="row">
                <div class="col-12">
                  <h4>Marka Ziyaret Trendi</h4>
                  <p class="my-5 py-5">TEST</p>
                </div>
                <div class="col-12">
                  <h4>Son 7 Günlük Şikayetler</h4>
                  <Card />
                </div>
              </div>
            </b-card>
          </b-collapse>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Home/Header.vue';
import Footer from '~/components/Footer.vue';
import Card from '~/components/Card.vue';

export default {
  components: { Header, Footer, Card },
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