<style lang="scss" scoped>
.head {
  color: #00244c;

  svg {
    color: #00244c;
    font-size: 2.4em;
    text-shadow: 0px 4px 4px 0px #00244c1a;
  }
}
</style>

<template>
  <div>
    <Header />
    <Breadcrumb
      :links="[
        { to: '/', text: 'Anasayfa' },
        { to: '/blog', text: 'Blog' },
        { to: '/blog/' + $route.params.post, text: $route.params.post },
      ]"
      style="z-index: 1"
    />

    <section class="head d-flex align-items-center justify-content-between">
      <NuxtLink to="/blog" style="color: #2"><fa :icon="['fas', 'arrow-left']" /></NuxtLink>
      <h1>
        {{ $route.params.post }}
      </h1>
      <fa :icon="['fas', 'arrow-left']" style="opacity: 0; pointer-events: none" />
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Home/Header.vue';
import Footer from '~/components/Footer.vue';
import Breadcrumb from '~/components/Breadcrumb.vue';
export default {
  components: { Header, Footer, Breadcrumb },
  data: () => ({
    activeCategory: '',
    categories: ['UI Design', 'UX Design', 'Product Design', 'Articles', 'Tutorials', 'News'],
  }),
};
</script>