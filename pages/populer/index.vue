<style lang="scss" scoped>
.heading {
  p {
    font-size: 1.1em;
    font-weight: 500;
  }
}
</style>

<template>
  <div>
    <Header active="populer" />

    <section class="heading">
      <h1 class="reveal-on-visible delay-1">Popüler 20</h1>
      <p class="reveal-on-visible delay-2 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non.
      </p>
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