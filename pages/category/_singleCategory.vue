<template>
  <div>
    <Header />
    <Breadcrumb
      class="breadcrumb-style"
      :links="[
        { to: '/', text: 'Anasayfa' },
        { to: '/category', text: 'Kategoriler' },
        { to: `/category/${category.id}` , text: `${category.name}` },
      ]"
      style="z-index: 1"
    />

    <section class="heading">
      <h1 class="big-title">{{category.name}}</h1>
      <p class="mt-4">
        Başlıca Kripto Para Borsaları markaları hakkındaki kullanıcı yorumları ve şikayetlerine göz atın, kullanıcı
        deneyimlerinden yararlanın.
      </p>
      <div class="row mt-5">
        <div class="col-lg-4 col-md-4 col-sm-12 col-12 xs-mb-3">
          <div class="card shadow left-card">
            <div class="card-body border rounded">
              <NuxtLink to="/" v-for="category in this.$store.state.categories" :key="category.id">
                <p class="text-muted">{{category.name}}</p>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12 col-12">
          <div class="card shadow right-card mb-3" v-for="index in 10" :key="index">
            <div class="card-body border rounded d-flex align-items-center">
              <img src="../../static/apple.png" alt="" />
              <div class="ml-4">
                <h6>{{category.name}}</h6>
                <div class="icons">
                  <fa :icon="['fas', 'face-meh']" />
                  <span class="text-muted">|</span>
                  <fa :icon="['fas', 'star']" class="star-icon" />
                  <fa :icon="['fas', 'star']" class="star-icon" />
                  <fa :icon="['fas', 'star']" class="star-icon" />
                  <fa :icon="['fas', 'star']" class="star-icon" />
                  <fa :icon="['fas', 'star']" class="star-icon" />
                </div>
                <p class="mb-0 small">Yorumlar (168)</p>
              </div>
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
import Breadcrumb from '~/components/Breadcrumb.vue';
import axios from 'axios';
import config from '../../config'
export default {
  components: { Header, Footer, Breadcrumb },
  data() {
    return {
      category: [],
    };
  },
  created() {
    this.getCategory();
  },
  methods: {
    getCategory() {
      axios
        .get(`${config.apiURL}/brands/categories/${this.$route.params.singleCategory}/`)
        .then((response) => (this.category = response.data))
        .catch((error) => {
          this.errors.push(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.left-card {
  p {
    font-weight: 300;
    transition: 0.5s;
    margin: 0;
    padding: 5px 10px;
    border-radius: 0.25rem;
    border: none;
    background-color: transparent;
    &:hover {
      background-color: #f8f9fa;
      border: 1px solid #dee2e6;
    }
  }
}
.right-card {
  .card-body {
    img {
      max-width: 75px;
      max-height: 75px;
    }
    .icons svg {
        color: #e0e0e0;
    }
    .icons, h6 {
        margin-bottom: 5px;
    }
  }
}
</style>
