<template>
  <div>
    <Header />
    <Breadcrumb
    class="breadcrumb-style"
      :links="[
        { to: '/', text: 'Anasayfa' },
        { to: '/kurumsal-uyelik', text: 'Kurumsal Üyelik' },
      ]"
      style="z-index: 1"
    />

    <div class="heading-circles">
      <div class="circle circle-1 reveal-on-visible delay-1"></div>
      <div class="circle circle-2 reveal-on-visible delay-3"></div>
      <div class="circle circle-3 reveal-on-visible delay-5"></div>
    </div>

    <section>
        <h1>Kurumsal Üyelik</h1>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Home/Header.vue';
import Footer from '~/components/Footer.vue';
import Breadcrumb from '../components/Breadcrumb.vue';
export default {
  components: { Header, Footer, Breadcrumb },
};
</script>