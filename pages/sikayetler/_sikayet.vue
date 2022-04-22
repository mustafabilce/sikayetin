<template>
  <div>
    <Header />
    <Breadcrumb
      class="breadcrumb-style"
      :links="[
        { to: '/', text: 'Anasayfa' },
        { to: '/sikayetler', text: 'Şikayetler' },
        { to: '/sikayetler/', text: 'Sikayet No: 1' },
      ]"
      style="z-index: 1"
    />

    <section class="heading">
      <div class="row mt-5">
        <div class="col-lg-8 col-md-8 col-sm-12 col-12">
          <h4 class="title">Samsung Telefon Galaxy A71 Android 12 Güncellemesi!</h4>
          <p class="text-muted">18 Görüntülenme</p>

          <b-card class="media-card">
            <b-media>
              <template #aside>
                <b-avatar text="CA" variant="primary"></b-avatar>
              </template>

              <h5 class="mt-0 d-inline-block">Coşkun</h5>
              <span class="small gray-text font-weight-lighter ml-2">12 Dakika önce</span>
              <p class="small">
                Samsung Galaxy A71 kullanıcısıyım. Samsung ® güncelleme konusunda çok ağır Türkiye gibi büyük pazarda
                büyük olumsuzluk bu vadettikleri tarih geçmesine rağmen Android 12 güncellemesi gelmiyor hala. Bir daha
                Samsung kullanmayacağımı belirtmek istiyorum.
              </p>
              <p class="small">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia laborum voluptas natus beatae quos
                labore impedit cum illo alias nihil.
              </p>

              <b-media class="mt-4">
                <template #aside>
                  <b-avatar text="S" variant="info"></b-avatar>
                </template>

                <h5 class="mt-0 d-inline-block">Samsung</h5>
                <span class="small gray-text font-weight-lighter ml-2">15 Dakika önce</span>
                <div class="card-body mt-3 p-3 border rounded" style="background-color: #f6fafd">
                  <p class="mb-0 small">
                    Değerli Müşterimiz, <br /><br />
                    Öncelikle firmamızı tercih etmiş olduğunuz için teşekkür ederiz. Başvurunuz ile ilgili, şikayet
                    çözüm merkezimiz sizinle irtibata geçecektir. <br /><br />
                    Ürün ve hizmetlerimiz ile ilgili her türlü bilgi, öneri, görüş ve çözüm taleplerinizi
                    www.samsung.com adresinin bize ulaşın bölümünden iletebilirsiniz. <br /><br />
                    Saygılarımızla Samsung Electronics Türkiye www.samsung.com
                  </p>
                </div>
              </b-media>
            </b-media>
            <div class="comment-box position-relative mt-5">
              <b-avatar class="comment-avatar" text="MB" variant="success"></b-avatar>
              <b-form-textarea id="textarea" placeholder="Yorum Yaz" rows="5" max-rows="8"></b-form-textarea>
              <div class="row no-gutters py-2" style="background-color: #f6fafd;">
                <div class="col-6">
                  <div class="input-group comment-file">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroupFileAddon01"
                        ><fa :icon="['fas', 'file-circle-plus']"
                      /></span>
                    </div>
                    <div class="custom-file">
                      <input
                        type="file"
                        class="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                      />
                      <label class="custom-file-label text-muted small" for="inputGroupFile01"
                        >Fatura/Fotoğraf/Video/Belge Ekle</label
                      >
                    </div>
                  </div>
                </div>
                <div class="col-6 text-right">
                  <button class="light-success-button border-0" style="background-color: transparent;">
                    <fa class="mr-2" :icon="['fas', 'comment']" />Yorum Yap
                  </button>
                </div>
              </div>
            </div>
          </b-card>

            <div class="card mt-3">
                <div class="card-body border rounded">
                    <h4>Benzer Şikayetler</h4>
                    <ComplaintCard class="border-0" />
                    <div class="border-bottom"></div>
                    <ComplaintCard class="border-0" />
                    <div class="border-bottom"></div>
                    <ComplaintCard class="border-0" />
                </div>
            </div>

        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-12">
          <ComplaintStatus />
          <AdsDemo />
          <CompareBox />
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
import ComplaintStatus from '~/components/ComplaintStatus.vue';
import CompareBox from '~/components/CompareBox.vue';
import AdsDemo from '~/components/AdsDemo.vue';
import ComplaintCard from '~/components/ComplaintCard.vue';
export default {
  components: { Header, Footer, Breadcrumb, CompareBox, ComplaintStatus, AdsDemo, ComplaintCard },
  data() {
    return {
      file1: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.media-card {
    .card-body {
        border: 1px solid #dee2e6;
        border-radius: .25rem;
    }
  h5 {
    color: #3a3a3a;
  }
  p {
    color: #636363;
  }
  .comment-box {
    .form-control {
      padding-left: 60px !important;
      padding-top: 20px !important;
      border-radius: 0.25rem 0.25rem 0 0;
    }
    .comment-avatar {
      position: absolute;
      left: 10px;
      top: 10px;
    }
    .comment-file {
      border: none !important;
      border-radius: 0 0 0.25rem 0.25rem;
      .custom-file {
        border: none;
        background-color: transparent;
      }
      .custom-file-label::after {
        display: none;
      }
      .input-group-text {
        background-color: transparent;
        border: none;
      }
      .custom-file-label {
        border: none;
        background-color: transparent;
        margin-bottom: 0;
        line-height: 1.7rem;
      }
    }
  }
}
</style>
