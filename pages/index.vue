<style lang="scss">
section {
  max-width: 100%;
  overflow-x: hidden;
  padding-inline: var(--section-padding-inline);
  cursor: default;

  h1 {
    font-size: 3em;
    font-weight: 700;

    @media (max-width: 900px) {
      font-size: 2em;
    }

    @media (max-width: 600px) {
      font-size: 1.5em;
      text-align: center;
    }
  }
}
</style>

<template>
  <div>
    <Header />
    <Trending />
    <Compare />
    <MostTalkedAbout />
    <Counter />
    <WorkTogether />
    <Footer />
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
};
</script>
