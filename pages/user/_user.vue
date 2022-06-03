<template>
  <div>
    <Header />
    <Breadcrumb
      class="breadcrumb-style"
      :links="[
        { to: '/', text: 'Anasayfa' },
        { to: '/sikayetler', text: 'Şikayetler' },
        { to: '/sikayetler/', text: `${user.name}` },
      ]"
      style="z-index: 1"
    />
    <section class="heading">
      <h3>Şikayetler ({{ complaints.length }})</h3>
      <div class="row mt-5">
        <div class="col-8">
          <div class="complaint shadow rounded-30" v-for="complaint in complaints" :key="complaint.id">
            <div class="statistics">
              <div>
                <fa :icon="['fas', 'eye']" />
                <span>18 Görüntülenme</span>
              </div>
              <div>
                <fa :icon="['fas', 'heart']" />
                <span>7 Beğeni</span>
              </div>
              <div>
                <fa :icon="['fas', 'thumbs-up']" />
                <span>3 Takip</span>
              </div>
            </div>
            <div class="customer-and-brand mb-4">
              <div class="customer">
                <!-- <div class="mr-2" v-if="complaint.user.photo">
                  <img :src="complaint.user.photo" />
                </div> -->
                <div>
                  <b-avatar variant="danger" class="mr-2" :text="complaint.user.name.charAt(0)"></b-avatar>
                </div>
                <div>
                  <b>{{ complaint.user.name }}</b>
                </div>
              </div>

              <fa :icon="['fas', 'arrow-right-arrow-left']" class="arrow" />

              <div class="brand">
                <!-- <img class="mr-2" :src="complaint.brand.logo" /> -->
                <div>
                  <b-avatar variant="success" class="mr-2" :text="complaint.brand.name.charAt(0)"></b-avatar>
                </div>
                <div>
                  <b>{{ complaint.brand.name }}</b>
                </div>
              </div>
            </div>
            <h4 class="title">{{ complaint.title }}</h4>
            <p class="text">
              {{ complaint.text }} <NuxtLink :to="`/sikayetler/${complaint.id}`">Devamını Gör</NuxtLink>
            </p>

            <div class="footer justify-content-between align-items-center">
              <div class="actions">
                <div
                  class="input-group rounded like-button"
                  :class="{ active: complaint.liked }"
                  @click="complaint.liked = !complaint.liked"
                >
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <fa color="#fff" :icon="['fas', 'thumbs-up']" />
                    </span>
                  </div>
                  <button class="btn-sm">Beğen</button>
                </div>

                <div class="input-group rounded like-button">
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <fa color="#fff" :icon="['fas', 'comment']" />
                    </span>
                  </div>
                  <button class="btn-sm">Yorum</button>
                </div>

                <div class="input-group rounded like-button">
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <fa color="#fff" :icon="['fas', 'bookmark']" />
                    </span>
                  </div>
                  <button class="btn-sm">Takip</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <div class="card-body shadow rounded-30">
              <div class="d-flex flex-column align-items-center justify-content-center">
                <b-avatar variant="success" class="mb-2"></b-avatar>
                <h3>{{ user.name }}</h3>
              </div>
              <div class="d-flex flex-column align-items-center justify-content-center mt-3">
                  <p class="mb-0 border w-100 rounded-30 py-3 mb-2 text-center">Şikayetleri ({{complaints.length}})</p>
                  <p class="mb-0 border w-100 rounded-30 py-3 mb-2 text-center">Yorum Yazdığı Şikayetler</p>
                  <p class="mb-0 border w-100 rounded-30 py-3 text-center">Desteklediği Şikayetler</p>
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
import axios from 'axios';
import config from '../../config';
import Header from '~/components/Home/Header.vue';
import Footer from '~/components/Footer.vue';
import Breadcrumb from '~/components/Breadcrumb.vue';

export default {
  components: { Header, Footer, Breadcrumb },
  data() {
    return {
      user: [],
      complaints: [],
    };
  },
  created() {
    this.getComplaint();
    this.getUser();
  },
  methods: {
    getComplaint() {
      axios
        .get(`${config.apiURL}/brands/complaints/user/${this.$route.params.user}/`)
        .then((response) => {
          this.complaints = response.data;
        })
        .catch((error) => {
          this.errors.push(error);
        });
    },
    getUser() {
      axios
        .get(`${config.apiURL}/brands/complaints/user/${this.$route.params.user}/`)
        .then((response) => {
          this.user = response.data[0].user;
        })
        .catch((error) => {
          this.errors.push(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.complaint {
  padding: 30px;
  background: white;
  margin-bottom: 50px;
  position: relative;

  .statistics {
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    background-color: #e7e7e7;
    border-radius: 0 30px 0 30px;
    padding: 10px 15px;
    div:not(:first-child :last-child) {
      border-right: 1px solid #6d757d;
    }
    div {
      padding: 0 10px;
    }
    svg {
      height: 13px;
      width: 13px;
      color: #6d757d;
    }
    span {
      font-size: 12px;
      color: #6d757d;
    }
  }

  .title {
    font-weight: 700;
    font-size: 18px;
    color: #00244c;
  }

  .text {
    font-weight: 400;
    font-size: 14px;
    margin: 20px 0;
    color: #555;
  }

  .customer-and-brand {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 300px;
  }

  .arrow {
    width: 36px;
    margin: 0 10px;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;
    flex-wrap: wrap;

    @media (max-width: 1100px) {
      flex-direction: column;
      gap: 30px;
    }

    .customer-and-brand {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 300px;
    }

    .actions {
      display: flex;
      gap: 15px;
      justify-content: center;

      @media (max-width: 800px) {
        gap: 6px;
      }

      .btn-sm {
        font-size: 12px;
      }

      .input-group {
        width: unset;
        padding: 8px 14px;

        @media (max-width: 768px) {
          padding: 8px 15px;
          font-size: 0.8em;

          .input-group-append img {
            width: 16px;
          }
        }

        button {
          display: inline-block;
          width: unset;
          padding: 0;
          margin-left: 10px;
        }

        .input-group-text {
          padding: 0;
        }

        @media (max-width: 800px) {
        }
      }

      .like-button {
        border-radius: 30px;
        border: none !important;
        background-color: #00244c !important;
        color: #fff;
        .input-group-append {
          background: #00244c !important;
          span {
            background: #00244c !important;
          }
        }
        .btn-sm {
          background-color: #00244c !important;
          color: #fff !important;
        }
      }

      .like-button.active {
        --background: #b9e1ff;
      }
    }
  }
}
</style>
