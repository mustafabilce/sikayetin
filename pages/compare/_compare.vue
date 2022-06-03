<template>
  <div>
    <Header />
    <Breadcrumb
      class="breadcrumb-style"
      :links="[
        { to: '/', text: 'Anasayfa' },
        { to: '/sikayetler', text: 'Marka Karşılaştır' },
        { to: '/sikayetler/', text: `${this.$route.params.compare}` },
      ]"
      style="z-index: 1"
    />
    <div class="heading-circles">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
    </div>

    <section class="marka-karsilastirma">
      <div class="row mt-5">
        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12">
          <h5 class="xs-mb-4">Markalar</h5>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12">
          <div class="d-flex">
            <SmallBrandCard :logo="firstBrand.logo" :brandName="firstBrand.name" class="mr-2" />
            <SmallBrandCard :logo="secondBrand.logo" :brandName="secondBrand.name" class="ml-2" />
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-12">
          <div class="card mt-3">
            <div class="card-body border rounded">
              <h5>Genel Bakış</h5>
              <div class="list">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item pl-1" v-for="index in 5" :key="index">
                    <div class="row">
                      <div class="col-lg-4 col-md-4 col-sm-8 col-xs-8 col-8">
                        <p>Şikayet Sayısı</p>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-2 col-xs-2 col-2 text-center">
                        <p>1</p>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-2 col-xs-2 col-2 text-center">
                        <p>5</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="complaints-table mt-5">
                <h5>Şikayetler</h5>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item border-bottom pl-1 py-4" v-for="index in 4" :key="index">
                    <div class="row">
                      <div class="col-4">
                        <p>En Yeni</p>
                        <fa :icon="['fas', 'star']" />
                      </div>
                      <div class="col-4">
                        <h6>7 Mart 19.03</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis bibendum risus, sit ac
                          velit
                        </p>
                        <a href="#">Devamını oku</a>
                      </div>
                      <div class="col-4">
                        <h6>7 Mart 19.03</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis bibendum risus, sit ac
                          velit
                        </p>
                        <a href="#">Devamını oku</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="list mt-5">
                <h5>Müşteri Memnuniyeti</h5>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item pl-1" v-for="index in 5" :key="index">
                    <div class="row">
                      <div class="col-4">
                        <fa color="#FFC247" :icon="['fas', 'star']" />
                        <fa color="#FFC247" :icon="['fas', 'star']" />
                        <fa color="#FFC247" :icon="['fas', 'star']" />
                        <fa color="#FFC247" :icon="['fas', 'star']" />
                        <fa color="#FFC247" :icon="['fas', 'star']" />
                      </div>
                      <div class="col-4 text-center"><p>0(%0)</p></div>
                      <div class="col-4 text-center"><p>-</p></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="list mt-5">
                <h5>Memnun Olma Nedenleri</h5>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item pl-1" v-for="index in 5" :key="index">
                    <div class="row align-items-center">
                      <div class="col-4">
                        <p>İlgili ve sorumlu yaklaştılar</p>
                      </div>
                      <div class="col-4 text-center">
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style="width: 50%; font-size: 10px"
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            50%
                          </div>
                        </div>
                      </div>
                      <div class="col-4 text-center"><p>-</p></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="list mt-5">
                <h5>Memnun Olmama Nedenleri</h5>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item pl-1" v-for="index in 6" :key="index">
                    <div class="row align-items-center">
                      <div class="col-4">
                        <p>İlgili ve sorumlu yaklaştılar</p>
                      </div>
                      <div class="col-4 text-center">
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style="width: 25%; font-size: 10px"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            25%
                          </div>
                        </div>
                      </div>
                      <div class="col-4 text-center"><p>-</p></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card choice mt-3">
            <div class="card-body border rounded">
              <h6 class="mb-3">Sizin seçiminiz hangisi ?</h6>
              <b-button-group size="sm" class="w-100">
                <b-button
                  class="light-button mr-2 rounded"
                >
                  <img :src="firstBrand.logo" alt="" /> {{ firstBrand.name }}
                </b-button>
                <b-button
                  class="light-button mr-2 rounded"
                >
                  <img :src="secondBrand.logo" alt="" /> {{ secondBrand.name }}
                </b-button>
                <b-button class="light-button py-2 mr-2 rounded" block> Oy Ver </b-button>
              </b-button-group>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
          <CompareBox />
          <AdsDemo />
          <AdsDemo />
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
import Footer from '~/components/Footer.vue';
import Breadcrumb from '~/components/Breadcrumb.vue';
import SmallBrandCard from '~/components/SmallBrandCard.vue'

export default {
  data() {
    return {
      firstBrand: [],
      secondBrand: [],
    };
  },
  components: { Header, Footer, Breadcrumb, SmallBrandCard },
  created() {
    this.getFirstBrand();
    this.getSecondBrand();
  },
  methods: {
    getFirstBrand() {
      axios
        .get(`${config.apiURL}/brands/all-brands/5d0e3b85-bf1f-4ce3-8028-8a11f8f4946e/`)
        .then((response) => (this.firstBrand = response.data));
    },
    getSecondBrand() {
      axios
        .get(`${config.apiURL}/brands/all-brands/1bcd2520-829d-4bfc-8ca1-38d3005c8d91/`)
        .then((response) => (this.secondBrand = response.data));
    },
  },
};
</script>

<style lang="scss" scoped>
    .choice {
        button {
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover {
                color: #000;
            }
            img {
                max-width: 24px;
                margin-right: 5px;
            }
        }
    }
    .list-group {
        .list-group-item {
            p {
                margin-bottom: 0;
            }
        }
    }
</style>
