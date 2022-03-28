<style lang="scss" scoped>
body {
  background: red !important;
}
</style>

<template>
  <div>
    <Header />

    <section>
      <h1 class="reveal-on-visible">Sıkça Sorulanlar...</h1>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Home/Header.vue';
import Footer from '~/components/Footer.vue';
export default {
  components: { Header, Footer },
  mounted() {
    document.body.style.background = 'white';
  },
};
</script>