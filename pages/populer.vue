<style lang="scss" scoped>
.heading {
  p {
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
      color: #ffc247;
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
      border: 2px solid #c2eef7;
      color: #00244b;
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
.test {
  max-height: 600px;
  overflow-y: scroll;
}
</style>

<template>
  <div>
    <Header active="populer" />
    <Breadcrumb
      class="breadcrumb-style"
      :links="[
        { to: '/', text: 'Anasayfa' },
        { to: '/populer', text: 'Popüler' },
      ]"
      style="z-index: 1"
    />

    <div class="heading-circles">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
    </div>

    <section class="heading">
      <h1 class="big-title">Popüler 20</h1>
      <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non.</p>
      <!-- <div class="row">
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
      </div> -->
      <div class="card">
        <div class="card-body border">
          <div class="row align-items-center">
            <div class="col-3">
              <div class="text-center">
                <p class="mb-0">Marka</p>
              </div>
            </div>
            <div class="col-8">
              <div class="row">
                <div class="col-4 text-center">
                  <p class="mb-0">Şikayet Sayısı</p>
                </div>
                <div class="col-4 text-center">
                  <p class="mb-0">Çözüm Sayısı</p>
                </div>
                <div class="col-4 text-center">
                  <p class="mb-0">Ziyaret Sayısı</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="test">
      <div class="row">
        <div class="col-12" v-for="(brand, i) in this.$store.state.brands" :key="brand.id">
          <div class="collapse-card border my-2">
            <div class="row align-items-center">
              <div class="col-3">
                <div class="d-flex align-items-center">
                  <p class="mb-0">{{ i }}</p>
                  <div class="collapse-mark d-flex">
                    <div>
                      <img class="rounded-circle" :src="brand.logo" />
                    </div>
                    <div>
                      <h6>{{ brand.name }}</h6>
                      <p>Kategori</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-8">
                <div class="row">
                  <div class="col-4 text-center">
                    <p class="mb-0">10421</p>
                  </div>
                  <div class="col-4 text-center">
                    <p class="mb-0">21837</p>
                  </div>
                  <div class="col-4 text-center">
                    <p class="mb-0">51725</p>
                  </div>
                </div>
              </div>
              <div class="col-1 text-right">
                <b-button v-b-toggle.collapse-2 class="collapse-button">
                  <fa :icon="['fas', 'chevron-down']" class="" />
                </b-button>
              </div>
            </div>
          </div>
          <b-collapse id="collapse-2" class="my-3 border">
            <b-card class="rounded">
              <div class="row">
                <div class="col-12">
                  <h4>Son 3 Şikayet</h4>
                  <Card />
                </div>
                <div class="col-12 mt-5">
                  <h4>Son 3 Çözüm</h4>
                  <Card />
                </div>
              </div>
            </b-card>
          </b-collapse>
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
