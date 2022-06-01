<template>
  <div>
    <Header />
    <Breadcrumb
      class="breadcrumb-style"
      :links="[
        { to: '/', text: 'Anasayfa' },
        { to: '/kategoriler', text: 'Kategoriler' },
      ]"
    />

    <div class="heading-circles">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
    </div>

    <section class="heading">
      <h1 class="big-title">Tüm Kategoriler</h1>
      <p class="mt-4">
        Bir kategori arayın veya aşağıdaki popüler kategorilerden birini seçin.
      </p>
      <div class="categories mt-5">
          <div class="row justify-content-center">
              <div class="col-lg-4 col-md-4 col-sm-6 col-6 text-center" v-for="category of this.$store.state.categories" :key="category.id">
                  <NuxtLink :to="`/category/${category.id}`">
                    <p class="text-dark border rounded-30 shadow-sm p-3 mb-4">{{ category.name }}</p>
                  </NuxtLink>
              </div>
          </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import config from '../../config'
import { mapActions } from 'vuex';
import Header from '~/components/Home/Header.vue';
import Breadcrumb from '~/components/Breadcrumb.vue';
import Footer from '~/components/Footer.vue';
export default {
  created() {
    this.getCategories();
  },
  data() {
    return {
      categories: [],
      errors: [],
    };
  },
  methods: {
    ...mapActions([
      'updateCategories',
    ]),
    getCategories() {
      axios
        .get(`${config.apiURL}/brands/categories/`)
        .then((response) => (this.updateCategories(response.data)))
        .catch((error) => {
          this.errors.push(error);
        });
    },
  },
  components: { Header, Footer, Breadcrumb },
};
</script>

<style lang="scss" scoped></style>
