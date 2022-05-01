<style lang="scss" scoped>
section {
  max-width: 100%;
  overflow-x: hidden;
  cursor: default;
}

#holder {
  max-width: 100vw;
  overflow: hidden;
}
</style>

<template>
  <div id="holder">
    <div id="loader"><img src="../static/loader.gif" /></div>
    <Header v-if="isIndividual" :full="true" />
    <KurumsalHeader v-else :full="true" />
    <Trending />
    <Compare />
    <MostTalkedAbout />
    <Counter />
    <WorkTogether />
    <Footer :marginTop="0" />
  </div>
</template>

<script>
import axios from 'axios';
import config from '../config';
import { mapActions } from 'vuex';
import Counter from '~/components/Home/Counter.vue';
import Trending from '~/components/Home/Trending.vue';
import MostTalkedAbout from '../components/Home/MostTalkedAbout.vue';
import Compare from '../components/Home/Compare.vue';
import Header from '../components/Home/Header.vue';
import KurumsalHeader from '../components/Home/KurumsalHeader.vue';
import WorkTogether from '../components/Home/WorkTogether.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'IndexPage',
  components: {
    Counter,
    Trending,
    MostTalkedAbout,
    Compare,
    Header,
    KurumsalHeader,
    WorkTogether,
    Footer,
  },
  created() {
    this.getBrands();
  },
  data: () => ({
    isIndividual: true,
    brands: [],
  }),
  methods: {
    ...mapActions([
      'updateBrands',
    ]),
    getBrands() {
      axios
        .get(`${config.apiURL}/brands/all-brands/?limit=10&offset=0`)
        .then((response) => (this.updateBrands(response.data.results)))
    },
  },
  mounted() {
    console.log('mounted');
    $('#loader').animate({ opacity: 0 }, 500);
  },
};
</script>
