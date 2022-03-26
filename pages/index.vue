<style lang="scss" scoped>
section {
  max-width: 100%;
  overflow-x: hidden;
  cursor: default;
}
</style>

<template>
  <div>
    <div id="loader"><img src="../static/loader.gif" /></div>
    <Header :full="true" />
    <Trending />
    <Compare />
    <MostTalkedAbout />
    <Counter />
    <WorkTogether />
    <Footer :marginTop="0" />
  </div>
</template>

<script>
import Counter from '~/components/Home/Counter.vue';
import Trending from '~/components/Home/Trending.vue';
import MostTalkedAbout from '../components/Home/MostTalkedAbout.vue';
import Compare from '../components/Home/Compare.vue';
import Header from '../components/Home/Header.vue';
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
    WorkTogether,
    Footer,
  },
  mounted() {
    console.log('mounted');
    $('#loader').animate({ opacity: 0 }, 500);
  },
};
</script>
