<style lang="scss" scoped>
body {
  background: red !important;
}

section.main {
  overflow: visible !important;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 400px;
  background: #ecfafe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  #search,
  h1 {
    transform: translateY(50%);
  }

  h1 {
    font-weight: 600;

    @media (max-width: 1000px) {
      font-size: 5vw;
    }

    @media (max-width: 600px) {
      font-size: 2em;
    }
  }

  #search {
    padding: 28px 32px;
    box-shadow: 0px 4px 10px 0px #dcf7ff;
    width: 800px;
    max-width: 100%;
    border-radius: 40px;
    margin-top: 45px;

    &::placeholder {
      color: #6c6e98;
    }
  }
}
</style>

<template>
  <div>
    <Header />
    <Breadcrumb
      :links="[
        { to: '/', text: 'Anasayfa' },
        { to: '/yardim', text: 'Yardım' },
      ]"
      style="z-index: 1"
    />

    <section class="text-center main">
      <h1 class="reveal-on-visible">Size Nasıl Yardımcı Olabiliriz ?</h1>

      <input type="text" id="search" placeholder="Yardım almak istediğiniz konuyu yazın" />
    </section>
    <section class="placeholder" style="height: 400px"></section>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Home/Header.vue';
import Footer from '~/components/Footer.vue';
import Breadcrumb from '../components/Pieces/Breadcrumb.vue';
export default {
  components: { Header, Footer, Breadcrumb },
  mounted() {
    document.body.style.background = 'white';
  },
};
</script>