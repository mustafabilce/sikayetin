<template>
  <div>
    <Header />
    <Breadcrumb
      class="breadcrumb-style"
      :links="[
        { to: '/', text: 'Anasayfa' },
        { to: '/sikayet-yaz', text: 'Canlı Şikayetler' },
      ]"
      style="z-index: 1"
    />
    <section>
      <stepper :options="stepperOptions" class="sikayet-stepper">
        <div slot="step-1">
          <h3>Marka Arayın</h3>
          <div>
            <b-form-select v-model="brand" :options="this.$store.state.brands.map(brand => brand.name)"></b-form-select>
            <div class="mt-4">
              <p class="small mb-0">
                Seçilen Marka:
                <span class="bg-light border rounded px-2 py-1 mx-2" v-if="brand">{{ brand }}</span>
                <span class="bg-light border rounded px-4 py-1 mx-2" v-else></span> için Şikayet Oluşturuyorsunuz.
              </p>
            </div>
          </div>
        </div>

        <div slot="step-2">
          <h3>Şikayet Konusu Nedir?</h3>
          <div>
            <b-form-input v-model="title" placeholder="Şikayet Konusu Nedir?"></b-form-input>
            <p class="float-right mt-4 mb-0 small">(minimum 20 karakter olmalıdır)</p>
          </div>
        </div>

        <div slot="step-3">
          <h3>Şikayet Detayları</h3>
          <div>
            <b-form-textarea
              id="textarea-rows"
              placeholder="Ürün veya hizmetle ilgili nasıl bir sorun  yaşadınız?"
              rows="8"
              v-model="text"
            ></b-form-textarea>
            <p class="float-right mt-4 mb-0 small">(minimum 200 karakter olmalıdır)</p>
          </div>
        </div>

        <div slot="custom-step-name">
          <h3>Belge Ekle</h3>
          <div>
            <b-form-file
              v-model="image"
              :state="Boolean(image)"
              placeholder="Fotoğraf veya Video Ekleyin (mp4, mov, wav, jpg, jpeg, gif, png, pdf, doc, xls, txt"
              drop-placeholder="Dosyayı buraya sürükleyin."
            ></b-form-file>
            <div>
              <b-card style="max-width: 100%" class="mt-4">
                <b-card-text>
                  <span class="font-weight-bold mr-1 small">Seçilen Dosya:</span>
                  <span class="small">{{ image ? image.name : 'Henüz Seçilmedi' }}</span>
                </b-card-text>
              </b-card>
            </div>
          </div>
          <b-button @click="sendComplaint()" block variant="primary" class="finish-button mt-4 py-3" v-b-modal.modal-success1
            ><fa class="mr-2" color="#ced4da" :icon="['fas', 'thumbs-up']" />Tamamla</b-button
          >
          <b-modal id="modal-success1" centered title="BootstrapVue" hide-header hide-footer>
            <div class="text-center p-5">
              <fa size="6x" color="#28a745" :icon="['fas', 'circle-check']" />
              <p class="my-4">Şikayetiniz başarıyla oluşturulmuştur.</p>
              <NuxtLink to="/">Ana sayfaya dön</NuxtLink>
            </div>
          </b-modal>
        </div>
      </stepper>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import config from "../config";
import Stepper from 'vuejs-stepper';
import Header from '~/components/Home/Header.vue';
export default {
  components: { Stepper, Header },
  data() {
    return {
      brand: "",
      title: "",
      text: "",
      image: null,
      stepperOptions: {
        headers: [
          { title: 'Marka' },
          { title: 'Başlık' },
          { title: 'Şikayet Detayları' },
          { title: 'Belge', stepName: 'custom-step-name' },
        ],
        prevText: 'Geri Dön',
        nextText: 'Devam Et',
      },
    };
  },
  methods: {
    sendComplaint() {
      axios
        .post(`${config.apiURL}/brands/complaints/brand/11b290ed-dddd-4f63-a574-1f745911627b/`, this.$store.state.userInfo.id, this.brand, this.title, this.text, this.image)
        .then((response) => {
          console.log(response)
        });
    },
  }
};
</script>

<style lang="scss">
.sikayet-stepper {
  padding: 0 !important;
  justify-content: flex-start;
  .top {
    justify-content: flex-start;
    border-bottom: 1px solid #dee2e6;
    padding-bottom: 20px;
    .step-header {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      &.active {
        .header-indicator {
          .step-header-content {
            color: #fff;
            background-color: #2e3952;
            border: none;
          }
        }
      }
      .header-indicator {
        .step-header-content {
          width: 30px;
          height: 30px;
          border-radius: 0.35rem;
          background-color: #f9f9fb;
          border: 1px solid #ced4da;
          font-size: 14px;
          color: #2e3952;
        }
        .step-header-line {
          display: none;
        }
      }
      .title {
        font-size: 14px;
        right: 0;
        margin-left: 10px;
        align-self: center;
        justify-content: flex-start;
        width: 100%;
        margin-top: 0px;
        text-align: center;
      }
    }
  }
  .steps-item h3 {
    margin: 20px 0 30px;
  }
  .foot {
    margin-top: 30px;
  }
  select,
  option,
  label {
    font-size: 12px;
  }
  ::placeholder {
    font-size: 12px;
    padding: 10px;
  }
  .custom-file-label::after {
    content: 'Seçin' !important;
  }
  .next-button,
  .prev-button {
    border: 1px solid #ced4da;
    background-color: #fff;
    font-size: 14px;
    color: #2e3952;
    padding: 7px 40px;
  }
  .finish-button {
    border: 1px solid #ced4da;
    background-color: #fff;
    font-size: 14px;
    color: #2e3952;
  }
  .modal-success-button {
    color: red;
  }
}
#modal-success1 .nuxt-link-active {
    border: 1px solid #ced4da;
    background-color: #fff;
    font-size: 14px;
    color: #2e3952;
    padding: 7px 40px;
}
</style>
