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
    width: 128px;
    max-width: 80vw;
    animation: pulse 1.5s infinite;
    animation-direction: alternate;
  }
}
</style>

<template>
  <div>
    <div id="loader"><img src="../static/loader.gif" /></div>
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
  methods: {
    IsVisible(el) {
      let rect = el.getBoundingClientRect();
      const top = rect.top;
      const height = rect.height;
      let parent = el.parentNode;
      if (rect.bottom < 0) return false;
      if (top > document.documentElement.clientHeight) return false;
      do {
        rect = parent.getBoundingClientRect();
        if (top <= rect.bottom === false) return false;
        if (top + height <= rect.top) return false;
        parent = parent.parentNode;
      } while (parent != document.body);
      return true;
    },
  },
  mounted() {
    $('#loader').animate({ opacity: 0 }, 500);

    for (const element of $('.reveal-on-visible')) {
      if (this.IsVisible(element)) {
        $(element).addClass('revealed');
      }

      window.addEventListener('scroll', () => {
        if (this.IsVisible(element)) {
          $(element).addClass('revealed');
        }
      });
    }
  },
};
</script>
