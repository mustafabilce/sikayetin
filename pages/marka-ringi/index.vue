<style lang="scss" scoped>
</style>

<template>
  <div>
    <Header active="marka-ringi" />

    <section id="compare">
      <div class="circle-1"></div>
      <div class="circle-2"></div>
      <div class="circle-3"></div>

      <h1 class="text-center">Marka Karşılaştırma</h1>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Home/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: { Header, Footer },
  async mounted() {
    $('#trending .inner .slides').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: $('.prev-button'),
      nextArrow: $('.next-button'),
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    });
  },
};
</script>