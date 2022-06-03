<template>
  <div>
    <KurumsalHeader />
    <Breadcrumb
    class="breadcrumb-style"
      :links="[
        { to: '/', text: 'Anasayfa' },
        { to: '/kvkk', text: 'Kvkk' },
      ]"
      style="z-index: 1"
    />

    <div class="heading-circles">
      <div class="circle circle-1  "></div>
      <div class="circle circle-2  "></div>
      <div class="circle circle-3  "></div>
    </div>

    <section>
        <h1>Kvkk</h1>
        <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur distinctio, quasi temporibus velit labore iste molestiae excepturi totam odio nam aut, natus amet maxime magni facere doloremque numquam tenetur?</p>
        <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur distinctio, quasi temporibus velit labore iste molestiae excepturi totam odio nam aut, natus amet maxime magni facere doloremque numquam tenetur?</p>
        <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur distinctio, quasi temporibus velit labore iste molestiae excepturi totam odio nam aut, natus amet maxime magni facere doloremque numquam tenetur?</p>
        <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur distinctio, quasi temporibus velit labore iste molestiae excepturi totam odio nam aut, natus amet maxime magni facere doloremque numquam tenetur?</p>
        <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur distinctio, quasi temporibus velit labore iste molestiae excepturi totam odio nam aut, natus amet maxime magni facere doloremque numquam tenetur?</p>
        <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur distinctio, quasi temporibus velit labore iste molestiae excepturi totam odio nam aut, natus amet maxime magni facere doloremque numquam tenetur?</p>
        <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur distinctio, quasi temporibus velit labore iste molestiae excepturi totam odio nam aut, natus amet maxime magni facere doloremque numquam tenetur?</p>
        <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur distinctio, quasi temporibus velit labore iste molestiae excepturi totam odio nam aut, natus amet maxime magni facere doloremque numquam tenetur?</p>
        <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur distinctio, quasi temporibus velit labore iste molestiae excepturi totam odio nam aut, natus amet maxime magni facere doloremque numquam tenetur?</p>
        <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur distinctio, quasi temporibus velit labore iste molestiae excepturi totam odio nam aut, natus amet maxime magni facere doloremque numquam tenetur?</p>
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