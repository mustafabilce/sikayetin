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
      <h1 class="big-title">Markalar</h1>
      <p class="mt-4">
        Bir markalar arayın veya aşağıdaki popüler kategorilerden birini seçin.
      </p>
      <div class="brands mt-5" v-for="brand of brands" :key="brand.id">
          <div class="row">
              <div class="col-3 text-center">
                  <h1>A</h1>
              </div>
              <div class="col-3" v-for="index in 3" :key="index">
                  <p v-for="index in 7" :key="index"><NuxtLink to="/brands/apple">Apple</NuxtLink> <span class="text-muted small">(20680)</span></p>
              </div>
          </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import Header from '~/components/Home/Header.vue';
import Breadcrumb from '~/components/Breadcrumb.vue';
import Footer from '~/components/Footer.vue';
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
        .get('https://jsonplaceholder.typicode.com/comments?_start=0&_limit=24')
        .then((response) => (this.brands = response.data))
        .catch((error) => {
          this.errors.push(error);
        });
    },
  },
  components: { Header, Footer, Breadcrumb },
};
</script>

<style lang="scss" scoped>
    .brands a {
        color: #343a40;
        &:hover {
            color: #ff5777;
        }
    }
</style>
