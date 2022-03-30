<style lang="scss" scoped>
section.top {
  position: relative;
  overflow: visible !important;

  h1 {
    margin-top: 50px;

    b {
      color: #ff5777;
      font-weight: 700;
      display: block;
      margin-bottom: 15px;
    }

    span {
      color: #00244c;
      font-weight: 500;
    }
  }

  p {
    color: #111827;
    width: 600px;
    max-width: 100%;
    margin-top: 70px;
    font-size: 1.05em;
    line-height: 1.6em;
  }

  .author {
    width: 280px;
    padding: 15px 25px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
  }

  img.abstract {
    position: absolute;
    right: 0;
    top: 0;
    width: 402px;
    z-index: -1;
    transform: translate(-50%, -50px);
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
      ]"
      style="z-index: 1"
    />

    <section class="top">
      <h1>
        <b>Blog Post</b>
        <span>Lorem Ipsum</span>
      </h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis bibendum risus, sit ac velit purus lectu
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis bibendum risus, sit ac velit purus
      </p>

      <div class="author">
        <img src="../static/customer-2.png" width="64" />
        <div class="d-flex flex-column align-items-end mt-2" style="gap: 6px">
          <b>Dasteen Camber</b>
          <small>Jan 10, 2022</small>
        </div>
      </div>

      <img src="../static/blog-abstract.svg" class="abstract" />
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Home/Header.vue';
import Footer from '~/components/Footer.vue';
import Breadcrumb from '~/components/Pieces/Breadcrumb.vue';
export default {
  components: { Header, Footer, Breadcrumb },
};
</script>