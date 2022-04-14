<template>
  <div>
    <Header active="marka-ringi" />
    <Breadcrumb
      class="breadcrumb-style"
      :links="[
        { to: '/', text: 'Anasayfa' },
        { to: '/marka-ringi', text: 'Marka Ringi' },
        { to: '/marka-karsilastirma', text: 'Marka Karşılaştırma' },
      ]"
      style="z-index: 1"
    />

    <div class="heading-circles">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
    </div>

    <section class="marka-karsilastirma">
      <!-- <div class="row">
        <div class="col-12 text-center border-bottom pb-3">
          <div class="brand-1">
            <img src="../static/apple.png" alt="" />
            <h4>Marka 1</h4>
          </div>
          <h4 class="mx-5">vs</h4>
          <div class="brand-2">
            <img src="../static/apple.png" alt="" />
            <h4>Marka 1</h4>
          </div>
        </div>
      </div> -->
      <div class="row mt-5">
        <div class="col-2">
          <h5>Markalar</h5>
        </div>
        <div class="col-10">
          <div class="d-flex">
            <SmallBrandCard class="mr-2" />
            <SmallBrandCard class="ml-2" />
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-8">
          <div class="card mt-3">
            <div class="card-body border rounded">
              <h5>Genel Bakış</h5>
              <div class="list">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item pl-1" v-for="index in 5" :key="index">
                    <div class="row">
                      <div class="col-4">
                        <p>Şikayet Sayısı</p>
                      </div>
                      <div class="col-4 text-center">
                        <p>1</p>
                      </div>
                      <div class="col-4 text-center">
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
                  v-for="(btn, idx) in buttons"
                  :key="idx"
                  :pressed.sync="btn.state"
                >
                  <img src="../static/apple.png" alt="" /> {{ btn.caption }}
                </b-button>
                <b-button class="light-button py-2 mr-2 rounded" block> Oy Ver </b-button>
              </b-button-group>
            </div>
          </div>
        </div>
        <div class="col-4">
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
import Header from '~/components/Home/Header.vue';
import Footer from '~/components/Footer.vue';
import SmallBrandCard from '~/components/SmallBrandCard.vue';
import CompareBox from '~/components/CompareBox.vue';
import AdsDemo from '~/components/AdsDemo.vue';

export default {
  components: { Header, Footer, SmallBrandCard, CompareBox, AdsDemo },
  data() {
    return {
      buttons: [
        { caption: 'Apple', state: false },
        { caption: 'Trendyol', state: false },
      ],
    };
  },

  computed: {
    btnStates() {
      return this.buttons.map((btn) => btn.state);
    },
  },
};
</script>

<style lang="scss" scoped>
.marka-karsilastirma {
  .brand-1, .brand-2 {
    flex-direction: column;
    display: inline-flex;
    align-items: center;
    img {
      max-height: 32px;
      max-width: 32px;
      margin-bottom: 7px;
    }
  }
  h4 {
    display: inline-block;
  }
  .list {
    .list-group {
      .list-group-item {
        p {
          color: #11182780;
          margin-bottom: 0;
          font-size: 14px;
        }
      }
    }
    .progress {
      height: 10px;
      .progress-bar {
        background-color: #00244c;
      }
    }
  }
  .complaints-table {
    .list-group {
      .list-group-item {
        p {
          color: #11182780;
          margin-bottom: 5px;
          font-size: 14px;
        }
        h6 {
          font-size: 18px;
        }
        a {
          font-size: 14px;
          color: #2ebbdb;
          text-decoration: underline;
        }
      }
    }
  }
  .choice {
    img {
      max-width: 24px;
      max-height: 24px;
      margin-right: 7px;
    }
    .light-button {
      box-shadow: none;
      padding: 10px 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        box-shadow: none !important;
        background-color: #f6fafd !important;
        color: #00244c;
        border-color: #00244c;
      }
    }
    .light-button.active {
      background-color: #f6fafd;
      color: #00244c;
      box-shadow: none;
      border-color: #ced4da;
      &:focus {
        background-color: rgba(40, 167, 69, 0.7);
        color: #fff;
        box-shadow: none;
      }
    }
  }
}
</style>
