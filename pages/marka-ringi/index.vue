<style lang="scss" scoped>
.heading-circles {
  position: absolute;
  top: 72px;
  left: 0;
  right: 0;
  height: 100px;

  .circle {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;

    &.circle-1 {
      width: 200px;
      height: 200px;
      background: #cff1f9;
      z-index: -1;

      @media (max-width: 900px) {
        width: 100px;
        height: 100px;
      }
    }
    &.circle-2 {
      width: 400px;
      height: 400px;
      background: #e1f7fc;
      z-index: -2;

      @media (max-width: 900px) {
        width: 250px;
        height: 250px;
      }
    }
    &.circle-3 {
      width: 600px;
      height: 600px;
      background: #ecfafe;
      z-index: -3;

      @media (max-width: 900px) {
        width: 400px;
        height: 400px;
      }
    }
  }
}

#compare {
}
</style>

<template>
  <div>
    <Header active="marka-ringi" />

    <div class="heading-circles">
      <div class="circle circle-1 reveal-on-visible delay-1"></div>
      <div class="circle circle-2 reveal-on-visible delay-2"></div>
      <div class="circle circle-3 reveal-on-visible delay-3"></div>
    </div>

    <section id="compare">
      <h1 class="text-center reveal-on-visible delay-2">Marka Karşılaştırma</h1>
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