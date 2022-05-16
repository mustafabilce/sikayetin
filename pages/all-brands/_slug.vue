<template>
  <div>
    <Header />
    <Breadcrumb
      class="breadcrumb-style"
      :links="[
        { to: '/', text: 'Anasayfa' },
        { to: '/brands', text: 'Markalar' },
        { to: '/brands/', text: `${brand.name}` },
      ]"
      style="z-index: 1"
    />

    <section class="heading">
      <div class="row mt-5">
        <div class="col-12">
          <div class="card">
            <div class="card-body brand-card border rounded">
              <div class="p-4 rounded" style="background-color: #fff">
                <img class="logo" :src="`${brand.logo}`" alt="" />
              </div>
              <div class="ml-4">
                <h5>{{ brand.name }} <fa color="#FF5777" :icon="['fas', 'circle-check']" /></h5>
                <div class="icons">
                  <fa :icon="['fas', 'star']" class="star-icon" />
                  <fa :icon="['fas', 'star']" class="star-icon" />
                  <fa :icon="['fas', 'star']" class="star-icon" />
                  <fa :icon="['fas', 'star']" class="star-icon" />
                  <fa :icon="['fas', 'star']" class="star-icon" />
                  <span class="rate">1.5 </span>
                  <p class="text-muted small my-2">
                    <b-button
                      class="p-0"
                      size="sm"
                      variant="light"
                      v-b-tooltip.hover
                      title="Lorem ipsum dolor sit amet consectetur adipisicing."
                    >
                      <fa :icon="['fas', 'circle-exclamation']" />
                    </b-button>
                    Son bir yılın verileri
                  </p>
                </div>
              </div>
              <div class="card ml-auto">
                <div class="card-body border rounded d-flex align-items-center">
                  <div class="box rounded mr-3">
                    <p>Şikayet Sayısı</p>
                    <h3>{{complaints.length}}</h3>
                  </div>
                  <div class="box-2 ml-3 mr-5">
                    <p>Çözüm Sayısı</p>
                    <h3>0</h3>
                  </div>
                  <div>
                    <button class="btn btn-light light-button px-4 xs-fs-12px">Marka Karnesini Gör</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12 col-12 mt-5">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body border rounded">
                  <div>
                    <button class="complaint-button border rounded">
                      <div>
                        <b-avatar class="avatar"></b-avatar>
                        <p class="text-muted">{{ brand.name }} ile ilgili bir şikayetin mi var?</p>
                      </div>
                      <span class="text rounded small">Şikayet Yaz</span>
                    </button>
                  </div>
                  <div class="mt-4">
                    <h5 class="text-muted border-bottom pb-3" style="font-weight: 400">Şikayet Sayısı {{complaints.length}}</h5>
                  </div>
                  <div class="xs-mt-4">
                    <div v-if="complaints.length > 0">
                      <div v-for="complaint in complaints" :key="complaint.id">
                        <ComplaintCard :title="complaint.title" :text="complaint.text" :image="complaint.logo" :user="{ name: `${complaint.user.name}`, photo: `${complaint.user.photo}`}" />
                      </div>
                    </div>
                    <div v-else>
                      <h1>Şikayet yok</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-12 mt-5">
          <FilterBox />
          <CompareBox />
          <BrandProfileBox />
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Home/Header.vue';
import Footer from '~/components/Footer.vue';
import FilterBox from '~/components/FilterBox.vue';
import CompareBox from '~/components/CompareBox.vue';
import BrandProfileBox from '~/components/BrandProfileBox.vue';
import ComplaintCard from '~/components/ComplaintCard.vue';
import Breadcrumb from '~/components/Breadcrumb.vue';
import axios from 'axios';
import config from '../../config';

export default {
  components: { Header, Footer, Breadcrumb, FilterBox, CompareBox, BrandProfileBox, ComplaintCard },
  data() {
    return {
      brand: [],
      complaints: [],
    };
  },
  created() {
    this.getBrand();
    this.getComplaints();
  },
  methods: {
    getBrand() {
      axios
        .get(`${config.apiURL}/brands/all-brands/${this.$route.params.slug}/`)
        .then((response) => (this.brand = response.data))
        .catch((error) => {
          this.errors.push(error);
        });
    },
    getComplaints() {
      axios
        .get(`${config.apiURL}/brands/complaints/brand/${this.$route.params.slug}/`)
        .then((response) => {
          if ((response === 'Bu markaya ait herhangi bir şikayet bulunmamaktadır.')) {
            console.log('Bu markaya ait herhangi bir şikayet bulunmamaktadır.');
          } else {
            this.complaints = response.data;
          }
        })
        .catch((error) => {
          this.errors.push(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.brand-card {
    display: flex;
    align-items: center;
    @media(max-width: 600px) {
      flex-direction: column;
    }
  .logo {
    max-width: 75px;
    max-height: 75px;
    @media(max-width: 600px) {
      max-width: 40px;
      max-height: 40px;
    }
  }
  .icons {
    .star-icon {
      color: #dbdce0;
    }
    .rate {
      color: #afb0b5;
      font-size: 22px;
      font-weight: 600;
    }
  }
  .card {
    .card-body {
      .box {
        padding: 20px 40px;
        color: #fff;
        background-color: #ff5777;
        p {
          font-size: 15px;
          margin-bottom: 5px;
          @media(max-width: 600px) {
            font-size: 12px;
          }
        }
        h3 {
          font-size: 25px;
        }
        @media(max-width: 600px) {
          padding: 10px 20px;
          text-align: center;
        }
      }
      .box-2 {
        padding: 20px 0;
        color: #00244c;
        p {
          font-size: 14px;
          margin-bottom: 5px;
          @media(max-width: 600px) {
            font-size: 12px;
          }
        }
        h3 {
          font-size: 23px;
        }
        @media(max-width: 600px) {
          padding: 10px 0px;
          margin-right: 1rem !important;
          text-align: center;
        }
      }
    }
  }
}
.complaint-button {
  display: block;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: transparent;
    @media(max-width: 600px) {
      flex-direction: column;
    }
  .avatar {
    margin-right: 10px;
  }
  p {
    display: inline-block;
    margin-bottom: 0;
    @media(max-width: 600px) {
      margin: 10px 0;
    }
  }
  .text {
    padding: 10px 16px;
    background-color: #ff5777;
    color: #fff;
  }
}
</style>
