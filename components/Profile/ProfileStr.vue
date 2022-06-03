<template>
  <div class="profile-str">
    <div class="card rounded-30">
      <div class="card-body shadow rounded-30">
        <div class="text-center">
          <h6>Hesabınızın Doğrulama Seviyesi:</h6>
          <span>%66.6</span>
        </div>
        <div>
          <b-progress :max="max" class="my-3 mx-7">
            <b-progress-bar class="first-step" :value="values[0]"></b-progress-bar>
            <b-progress-bar class="second-step" :value="values[1]"></b-progress-bar>
            <b-progress-bar class="third-step" :value="values[2]"></b-progress-bar>
            <b-progress-bar class="last-step" :value="values[3]"></b-progress-bar>
          </b-progress>
        </div>
        <div class="verifie">
          <div class="item mx-auto justify-content-center">
            <div class="icon-circle">
              <fa color="#6d95f0" :icon="['fas', 'plus']" />
            </div>
            <b-link href="#" class="small" v-b-modal.email-verification-modal>E-Postanı Doğrula</b-link>
          </div>
          <div class="item mx-auto justify-content-center">
            <div class="icon-circle">
              <fa color="#78e483" :icon="['fas', 'check']" />
            </div>
            <b-link href="#" class="small" disabled>Profil Fotoğrafı Yükle</b-link>
          </div>
          <div class="item mx-auto justify-content-center">
            <div class="icon-circle">
              <fa color="#78e483" :icon="['fas', 'check']" />
            </div>
            <b-link href="#" class="small" disabled>Kişisel Bilgilerini Doldur</b-link>
          </div>
          <div class="item mx-auto justify-content-center mb-0">
            <div class="icon-circle">
              <fa color="#78e483" :icon="['fas', 'check']" />
            </div>
            <b-link href="#" class="small" disabled>Telefonunu Doğrula</b-link>
          </div>
        </div>
      </div>
    </div>
    <Email />
  </div>
</template>

<script>
import Email from '../modals/Profile/Email.vue'

export default {
  components: { Email, },
  data() {
    return {
      values: [25, 25, 25, 25],
      max: 100,
    };
  },
};
</script>

<style lang="scss" scoped>
.profile-str {
  .card {
    .card-body {
      h6 {
        display: inline-block;
        color: #7c7b85;
        font-weight: 400;
        margin-right: 7px;
      }
      span {
        color: #000;
        font-weight: 500;
      }
      .first-step {
        background-color: #78e483;
        border-radius: 0.1rem;
      }
      .second-step {
        background-color: #78e483;
        margin: 0 5px;
        border-radius: 0.1rem;
      }
      .third-step {
        background-color: #78e483;
        margin: 0 5px 0 0;
        border-radius: 0.1rem;
      }
      .last-step {
        background-color: #78e483;
        border-radius: 0.1rem;
      }
    }
    .verifie {
      .item {
        display: flex;
        align-items: center;
        margin: 14px 0;
        a {
          color: #6d95f0;
          &.disabled {
            color: #d1d2d7;
            cursor: text;
          }
        }
        .icon-circle {
          border: 1px solid #d1d2d7;
          line-height: 7px;
          padding: 3px;
          border-radius: 50%;
          display: inline-block;
          margin-right: 5px;
          svg {
            max-width: 10px;
            max-height: 10px;
          }
        }
      }
    }
  }
}
</style>
