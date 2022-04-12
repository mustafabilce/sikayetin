<template>
  <div>
    <Header />
    <Breadcrumb
      class="breadcrumb-style"
      :links="[
        { to: '/', text: 'Anasayfa' },
        { to: '/brands', text: 'Markalar' },
        { to: '/brands/', text: 'Apple' },
      ]"
      style="z-index: 1"
    />

    <section class="heading">
      <!-- <h1 class="big-title">Kripto Para Borsaları</h1>
      <p class="mt-4">
        Başlıca Kripto Para Borsaları markaları hakkındaki kullanıcı yorumları ve şikayetlerine göz atın, kullanıcı
        deneyimlerinden yararlanın.
      </p> -->
      <div class="row mt-5">
        <div class="col-12">
          <div class="card">
            <div
              class="card-body brand-card border rounded d-flex align-items-center"
              style="background-color: #f4f5f9"
            >
              <div class="p-4 rounded" style="background-color: #fff">
                <img class="logo" src="../../static/apple.png" alt="" />
              </div>
              <div class="ml-4">
                <h5>Apple <fa color="#FF5777" :icon="['fas', 'circle-check']" /></h5>
                <div class="icons">
                  <fa :icon="['fas', 'star']" class="star-icon" />
                  <fa :icon="['fas', 'star']" class="star-icon" />
                  <fa :icon="['fas', 'star']" class="star-icon" />
                  <fa :icon="['fas', 'star']" class="star-icon" />
                  <fa :icon="['fas', 'star']" class="star-icon" />
                  <span class="rate">1.5</span>
                  <p class="text-muted small my-2">
                    <b-button
                      class="p-0"
                      size="sm"
                      variant="light"
                      v-b-tooltip.hover
                      title="Lorem ipsum dolor sit amet consectetur adipisicing."
                    >
                      <fa :icon="['fas', 'circle-exclamation']" />
                    </b-button>
                    Son bir yılın verileri
                  </p>
                </div>
              </div>
              <div class="card ml-auto">
                <div class="card-body border rounded d-flex align-items-center">
                  <div class="box rounded mr-3">
                    <p>Şikayet Sayısı</p>
                    <h3>20.861</h3>
                  </div>
                  <div class="box-2 ml-3 mr-5">
                    <p>Çözüm Sayısı</p>
                    <h3>966</h3>
                  </div>
                  <div>
                    <button class="btn btn-light light-button px-4">Marka Karnesini Gör</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.brand-card {
  .logo {
    max-width: 75px;
    max-height: 75px;
  }
  .icons {
    .star-icon {
      color: #dbdce0;
    }
    .rate {
       color: #AFB0B5;
       font-size: 22px; 
       font-weight: 600;
    }
  }
  .card {
    .card-body {
      .box {
        padding: 20px 40px;
        color: #fff;
        background-color: #ff5777;
        p {
          font-size: 15px;
          margin-bottom: 5px;
        }
        h3 {
          font-size: 25px;
        }
      }
      .box-2 {
        padding: 20px 0;
        color: #00244c;
        p {
          font-size: 14px;
          margin-bottom: 5px;
        }
        h3 {
          font-size: 23px;
        }
      }
    }
  }
}
</style>
