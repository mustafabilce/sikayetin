<style lang="scss" scoped>
section {
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    margin: 0;
  }
}

.left {
  & > .heading {
    font-weight: 600;
    font-size: 4em;
    color: #111827;

    @media (max-width: 525px) {
      font-size: 12vw;
    }
  }

  & > p {
    color: #111827b2;
    font-size: 1.1em;
    line-height: 1.7em;
    margin: 32px 0 64px 0;
  }

  .contact-card {
    display: flex;
    gap: 20px;
    min-width: 300px;

    &:not(:first-of-type) {
      margin-top: 40px;
    }

    img {
      width: 63px;
    }

    .heading {
      color: #111827;
      font-weight: 600;
    }

    a {
      color: #111827b2;
      font-weight: 600;

      &:hover {
        color: #111827;
      }
    }
  }
}

.right {
  form {
    background: #59cae480;
    padding: 48px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 12px;

    @media (max-width: 992px) {
      width: 100%;
    }

    input,
    textarea,
    button {
      border-radius: 6px;
      border: 1px solid rgba($color: #fff, $alpha: 0.5);
    }

    input,
    textarea {
      color: #00000033;
      padding: 26px 30px;

      &::placeholder {
        color: #00000033;
        font-weight: 600;
      }
    }

    button {
      background: #43c3e0;
      color: white;
      font-weight: 600;
      padding: 15px;
    }
  }
}
</style>

<template>
  <div>
    <Header />
    <Breadcrumb
    class="breadcrumb-style"
      :links="[
        { to: '/', text: 'Anasayfa' },
        { to: '/iletisim', text: 'İletişim' },
      ]"
    />

    <div class="heading-circles">
      <div class="circle circle-1  "></div>
      <div class="circle circle-2  "></div>
      <div class="circle circle-3  "></div>
    </div>

    <section class="row">
      <div class="col-lg-6 left d-flex flex-column align-items-center align-items-lg-start">
        <h1 class=" big-title">Contact us</h1>

        <p class="  text-justify text-lg-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis bibendum risus, sit ac velit purus
          lectuLorem ipsum dolor sit amet, consectetur
        </p>

        <div class="contact-card mt-lg-3  ">
          <img src="../static/contact-mail.svg" />
          <div class="d-flex flex-column justify-content-between">
            <h4 class="heading m-0">E-Posta</h4>
            <a href="mailto:destek@sikayetvar.com">destek@sikayetvar.com</a>
          </div>
        </div>
        <div class="contact-card  ">
          <img src="../static/contact-phone.svg" />
          <div class="d-flex flex-column justify-content-between">
            <h4 class="heading m-0">Telefon</h4>
            <a href="tel:03122194004">0 (312) 219 40 04</a>
          </div>
        </div>
        <div class="contact-card  ">
          <img src="../static/contact-time.svg" />
          <div class="d-flex flex-column justify-content-between">
            <h4 class="heading m-0">Çalışma Saatleri</h4>
            <a>08:30-18:00</a>
          </div>
        </div>
      </div>
      <div class="col-lg-6 right p-0 pl-lg-5">
        <form class="m-lg-0 mt-5">
          <input type="text" class="  form-control" placeholder="İsim" />
          <input type="text" class="  form-control" placeholder="Soyisim" />
          <input type="text" class="  form-control" placeholder="Konu Başlığı" />
          <textarea class="  form-control" placeholder="Mesaj..."></textarea>
          <button class="  btn btn-block">Gönder</button>
        </form>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Home/Header.vue';
import Breadcrumb from '~/components/Breadcrumb.vue';
import Footer from '~/components/Footer.vue';
export default {
  components: { Header, Footer, Breadcrumb },
};
</script>