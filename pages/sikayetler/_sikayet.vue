<template>
  <div>
    <Header />
    <Breadcrumb
      class="breadcrumb-style"
      :links="[
        { to: '/', text: 'Anasayfa' },
        { to: '/sikayetler', text: 'Şikayetler' },
        { to: '/sikayetler/', text: `${complaint.title}` },
      ]"
      style="z-index: 1"
    />

    <section class="heading">
      <div class="row mt-5">
        <div class="col-lg-8 col-md-8 col-sm-12 col-12">
          <h4 class="title xs-fs-18px">{{ complaint.title }}</h4>
          <p class="text-muted d-inline-block mb-1 xs-fs-15px"><fa class="mr-2" :icon="['fas', 'eye']" />18 Görüntülenme</p>
          <p class="text-muted d-inline-block ml-4 xs-fs-15px"><fa class="mr-2" :icon="['fas', 'heart']" />{{likes.length}} Beğeni</p>
          <b-card class="media-card">
            <b-media>
              <template #aside>
                <b-avatar v-if="complaintUser.photo" :src="complaintUser.photo" variant="link"></b-avatar>
                <b-avatar v-else text="K" variant="primary"></b-avatar>
              </template>

              <h5 class="mt-0 d-inline-block xs-fs-15px" v-if="complaintUser.name">{{ complaintUser.name }}</h5>
              <h5 class="mt-0 d-inline-block xs-fs-15px" v-else>{{ complaintUser.email }}</h5>
              <span class="small gray-text font-weight-lighter ml-2 xs-fs-12px">{{ complaint.created }}</span>
              <p class="small">{{ complaint.text }}</p>

              <b-media class="mt-4" v-for="comment in comments" :key="comment.id">
                <template #aside>
                  <b-avatar :src="complaintBrand.logo" variant="light"></b-avatar>
                </template>

                <h5 class="mt-0 d-inline-block xs-fs-15px">{{ complaintBrand.name }}</h5>
                <span class="small gray-text font-weight-lighter ml-2 xs-fs-12px">15 Dakika önce</span>
                <div class="card-body mt-3 p-3 border rounded" style="background-color: #f6fafd">
                  <p class="mb-0 small">
                    {{comment.text}}
                  </p>
                </div>
              </b-media>
            </b-media>
            <div class="comment-box position-relative mt-5">
              <b-avatar class="comment-avatar" text="MB" variant="success"></b-avatar>
              <b-form-textarea id="textarea" placeholder="Yorum Yaz" rows="5" max-rows="8"></b-form-textarea>
              <div class="row no-gutters py-2" style="background-color: #f6fafd">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
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
                      <label class="custom-file-label text-muted small xs-fs-12px" for="inputGroupFile01"
                        >Fatura/Fotoğraf/Video/Belge Ekle</label
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 text-right xs-text-left">
                  <button class="light-success-button border-0 xs-fs-12px" style="background-color: transparent">
                    <fa class="mr-2" :icon="['fas', 'comment']" />Yorum Yap
                  </button>
                </div>
              </div>
            </div>
          </b-card>

          <div class="card mt-3">
            <div class="card-body border rounded">
              <h4>Benzer Şikayetler</h4>
                <!-- <ComplaintCard class="border-0" />
                <div class="border-bottom"></div> -->
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
import axios from 'axios';
import config from '../../config';
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
      complaint: [],
      complaintUser: [],
      complaintBrand: [],
      comments: [],
      likes: [],
    };
  },
  created() {
    this.getComplaint();
    this.getComments();
  },
  methods: {
    getComplaint() {
      axios
        .get(`${config.apiURL}/brands/complaints/${this.$route.params.sikayet}/`)
        .then((response) => {
          this.complaint = response.data;
          this.complaintUser = response.data.user;
          this.complaintBrand = response.data.brand;
        })
        .catch((error) => {
          this.errors.push(error);
        });
    },
    getComments() { 
      axios
        .get(`${config.apiURL}/brands/complaints/${this.$route.params.sikayet}/comments/`)
        .then((response) => {
          if (response.data === "Şikayet ile ilgili yorum bulunamadı!") {
            console.log("Şikayet ile ilgili yorum bulunamadı!")
          } else {
            this.comments = response.data
          }
        })
        .catch((error) => {
          this.errors.push(error);
        });
    },
    getLikes() { 
      axios
        .get(`${config.apiURL}/brands/likes/complaint/${this.$route.params.sikayet}/`)
        .then((response) => {
          if (response.data.length > 0) {
            this.likes = response.data;
          } else {
            console.log("Beğeni bulunamadı.")
          }
        })
        .catch((error) => {
          this.errors.push(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.media-card {
  .card-body {
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
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
