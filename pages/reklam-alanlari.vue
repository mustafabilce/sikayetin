<template>
  <div>
    <KurumsalHeader />
    <Breadcrumb
    class="breadcrumb-style"
      :links="[
        { to: '/', text: 'Anasayfa' },
        { to: '/reklam', text: 'Reklam' },
      ]"
      style="z-index: 1"
    />

    <div class="heading-circles">
      <div class="circle circle-1  "></div>
      <div class="circle circle-2  "></div>
      <div class="circle circle-3  "></div>
    </div>

    <section>
        <h1>Reklam</h1>
    </section>

    <Footer />
  </div>
</template>

<script>
import KurumsalHeader from '~/components/Home/KurumsalHeader.vue';
import Footer from '~/components/Footer.vue';
import Breadcrumb from '../components/Breadcrumb.vue';
export default {
  components: { KurumsalHeader, Footer, Breadcrumb },
};
</script>