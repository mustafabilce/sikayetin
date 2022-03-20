<style lang="scss">
section {
  max-width: 100%;
  overflow-x: hidden;
  padding-inline: var(--section-padding-inline);
  cursor: default;

  h1 {
    font-size: 3em;
    font-weight: 700;
    max-height: 1em;

    @media (max-width: 900px) {
      font-size: 2em;
    }

    @media (max-width: 600px) {
      font-size: 1.5em;
      text-align: center;
    }
  }
}

#loader {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #50c8e2;
  z-index: 99;
  display: grid;
  place-items: center;
  pointer-events: none;

  img {
    width: 256px;
    max-width: 80vw;
    animation: pulse 1.5s infinite;
    animation-direction: alternate;
  }
}
</style>

<template>
  <div>
    <div id="loader"><img src="../static/logo-white.png" /></div>
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
  mounted() {
    $('#loader').animate({ opacity: 0 }, 500);
  },
};
</script>
