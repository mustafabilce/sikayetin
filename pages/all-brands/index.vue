<template>
  <div>
    <Header />
    <Breadcrumb
      class="breadcrumb-style"
      :links="[
        { to: '/', text: 'Anasayfa' },
        { to: '/markalar', text: 'Markalar' },
      ]"
    />

    <div class="heading-circles">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
    </div>

    <section class="heading">
      <h1 class="big-title">Tüm Markalar</h1>
      <p class="mt-4">Bir markalar arayın veya aşağıdaki popüler kategorilerden birini seçin.</p>
      <div class="brands mt-5">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-12 col-12">
            <div class="card mt-3" v-for="brand of brands" :key="brand.id">
              <div class="card-body border">
                <div class="row justify-content-between align-items-center">
                  <div class="col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center">
                    <div class="card-img-bg">
                      <NuxtLink :to="`/brands/all-brands/${brand.id}`"><img :src="`${brand.logo}`" /></NuxtLink>
                    </div>
                    <div class="info">
                      <h6>
                        <NuxtLink :to="`/all-brands/${brand.id}`">{{ brand.name }}</NuxtLink>
                        <img v-if="brand.verified == true" class="verified-icon" src="../../static/verified.svg" />
                      </h6>
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <fa :icon="['fas', 'star']" />
                      <span class="text-muted font-weight-bold ml-2">1.5</span>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 col-12 xs-mt-3">
                    <div class="comp-count-box">
                      <div class="icon-box bg-purple-light d-inline-block">
                        <fa :icon="['fas', 'comment-dots']" />
                      </div>
                      <div>
                        <p class="small mb-0">Şikayet Sayısı</p>
                        <h6 class="mb-0">67.282</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-12">
            <AdsDemo />
            <AdsDemo />
            <AdsDemo />
            <AdsDemo />
            <AdsDemo />
            <AdsDemo />
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import config from '../../config';
import Header from '~/components/Home/Header.vue';
import Breadcrumb from '~/components/Breadcrumb.vue';
import Footer from '~/components/Footer.vue';
import AdsDemo from '~/components/AdsDemo.vue';
export default {
  created() {
    this.getBrands();
  },
  data() {
    return {
      brands: [],
      errors: [],
    };
  },
  methods: {
    getBrands() {
      axios
        .get(`${config.apiURL}/brands/all-brands/?limit=20&offset=0`)
        .then((response) => (this.brands = response.data.results))
        .catch((error) => {
          this.errors.push(error);
        });
    },
  },
  components: { Header, Footer, Breadcrumb, AdsDemo },
};
</script>

<style lang="scss" scoped>
.brands a {
  color: #343a40;
  @media (max-width: 600px) {
    font-size: 14px;
  }
  &:hover {
    color: #ff5777;
  }
}
.brands {
  .card-body {
    border-radius: 20px;
    background-color: #f4f5f9;
    .card-img-bg {
      background-color: #fff;
      padding: 1.3rem;
      margin-right: 20px;
      border-radius: 20px;
      img {
        max-width: 75px;
        max-height: 50px;
        height: auto;

        @media (max-width: 600px) {
          max-width: 50px;
          max-height: 30px;
        }
      }
    }
    .info {
      h6 {
        margin-bottom: 5px;
        font-size: 1.2rem;
        color: #444;
        font-weight: 500;
      }
      svg {
        width: 16px;
        height: 16px;
        color: #fc9f14;
      }
      .verified-icon {
        max-width: 16px;
        max-height: 16px;
      }
    }
  }
  .comp-count-box {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 1rem;
    border-radius: 10px;
    .icon-box {
      padding: 0.4rem 0.5rem;
      border-radius: 10px;
      margin-right: 10px;
      svg {
        color: #fff;
      }
    }
  }
}
</style>
