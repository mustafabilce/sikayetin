<style lang="scss" scoped>
body {
  background: red !important;
}

section.head {
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
    width: 800px;
    max-width: 100%;
    margin-top: 45px;
    position: relative;

    img {
      position: absolute;
      left: 25px;
      top: 50%;
      transform: translateY(-50%);
    }

    input {
      padding: 28px 32px;
      padding-left: 60px !important;
      box-shadow: 0px 4px 10px 0px #dcf7ff;
      border-radius: 40px;
      width: 100%;

      &::placeholder {
        color: #6c6e98;
      }

      @media (max-width: 500px) {
        padding: 15px 30px;
        font-size: 0.9em;
      }
    }
  }
}

section.content {
  display: flex;
  gap: 50px;
  $sidebar-breakpoint: 900px;

  @media (max-width: $sidebar-breakpoint) {
    flex-direction: column;
  }

  .sidebar.mobile {
    display: none;
    text-align: center;
    color: #50c7e1;
    font-weight: 700;
    font-size: 1.5em;

    @media (max-width: $sidebar-breakpoint) {
      display: block;
    }
  }

  .sidebar.desktop {
    min-width: 160px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: $sidebar-breakpoint) {
      display: none;
    }

    a {
      color: #11182780;
      position: relative;
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        color: #000;
      }

      &.active {
        color: #000;

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -20px;
          width: 8px;
          height: 8px;
          transform: translateY(-50%);
          background: #4ac5e1;
          border-radius: 100%;
        }
      }
    }
  }

  .questions {
    max-width: 100%;

    .question {
      margin-bottom: 50px;
      padding: 40px;
      border-radius: 15px;
      transition: 0.3s ease;

      p {
        margin: 0;
        transition: 0.3s ease;
      }

      .heading {
        font-weight: 500;
        font-size: 1.5em;

        display: flex;
        align-items: center;
        justify-content: space-between;

        .arrow {
          transition: 0.2s ease;
          opacity: 0.5;
        }
      }

      &.shown .heading .arrow {
        transform: rotateZ(180deg);
        opacity: 1;
      }

      .text {
        margin-top: 30px;
        font-size: 1.1em;
        padding-right: 100px;

        @media (max-width: 1200px) {
          padding-right: 0;
          text-align: justify;
        }
      }

      &:not(.shown) {
        background: #ecfafe;
        cursor: pointer;

        .heading {
          font-size: 1.1em;
        }

        .text {
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          margin-top: 0;
        }
      }
    }
  }
}

#mobile_menu {
  position: fixed;
  left: 0;
  right: 0;
  top: 60px;
  bottom: 0;
  background: white;
  z-index: 99;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  .close {
    position: absolute;
    top: 40px;
    right: 40px;
  }

  a {
    font-size: 1.5em;
    font-weight: 500;
    color: #ddd;

    &.active {
      font-weight: 700;
      color: #56c9e2;
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
        { to: '/canli-akis', text: 'Şikayet.in Canlı Yayın' },
      ]"
      style="z-index: 1"
    />

    <div class="heading-circles">
      <div class="circle circle-1 reveal-on-visible delay-1"></div>
      <div class="circle circle-2 reveal-on-visible delay-3"></div>
      <div class="circle circle-3 reveal-on-visible delay-5"></div>
    </div>

    <section class="live">
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-12 col-12">
          <h5>Şikayet.in'e <span class="text-danger">her saniye</span> yeni bir şikayet geliyor.</h5>
          <div class="mt-5">
            <b-tabs content-class="mt-3 live-tabs" active-nav-item-class="active-tab">
              <b-tab title="Anlık Şikayetler" title-item-class="my-nav-item" active>
                  <ComplaintCard  v-for="i in 10" :key="i" />
              </b-tab>
              <b-tab title="Çözülen Şikayetler" title-item-class="my-nav-item">
                  <ResolvedComplaintCard v-for="i in 10" :key="i" />
              </b-tab>
            </b-tabs>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-12">
          <div class="card">
            <div class="card-body border rounded">
              <h5 class="border-bottom pb-3">Sayfayı Paylaş</h5>
              <div class="d-flex align-items-center justify-content-between mt-3">
                <button type="button" class="light-button rounded-pill px-4">
                  <fa :icon="['fas', 'user']" />
                </button>
                <button type="button" class="light-button rounded-pill px-4">
                  <fa :icon="['fas', 'user']" />
                </button>
                <button type="button" class="light-button rounded-pill px-4">
                  <fa :icon="['fas', 'user']" />
                </button>
                <button type="button" class="light-button rounded-pill px-4">
                  <fa :icon="['fas', 'user']" />
                </button>
              </div>
            </div>
          </div>
          <AdsDemo />
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Home/Header.vue';
import Footer from '~/components/Footer.vue';
import Breadcrumb from '../components/Breadcrumb.vue';
import AdsDemo from '../components/AdsDemo.vue';
import ComplaintCard from '../components/ComplaintCard.vue';
import ResolvedComplaintCard from '../components/ResolvedComplaintCard.vue';
export default {
  components: { Header, Footer, Breadcrumb, AdsDemo, ComplaintCard, ResolvedComplaintCard },
};
</script>

<style lang="scss" scoped>
    .live {
        
    }
</style>
