<template>
  <b-modal v-model="modalShow" class="login-modal" id="login-modal" centered hide-footer hide-header size="lg">
    <button
      type="button"
      class="modal-close"
      data-dismiss="login-modal"
      aria-label="Close"
      @click="$bvModal.hide('login-modal')"
    >
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="row login-box">
      <div class="col-lg-4 col-md-4 col-sm-12 col-12 modal-left-banner">
        <img class="img-fluid banner-logo" src="../../static/logo-white.png" id="logo" />
        <div class="pink-left"></div>
        <div class="yellow-left"></div>
        <img class="img-fluid banner-img" src="../../static/banner1.png" id="logo" />
        <div class="blue-left"></div>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-12 col-12 modal-right">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h4 class="title">Giriş Yap</h4>
            </div>
            <div class="col-12 login-with">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                  <button class="btn-block">
                    <p><img src="../../static/google.png" id="logo" />Google ile giriş yap</p>
                  </button>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 xs-mt-3">
                  <button class="btn-block">
                    <p><img src="../../static/google.png" id="logo" />Google ile giriş yap</p>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-12 text-center">
              <p class="sep-text">- yada -</p>
            </div>
            <div class="col-12 modal-form">
              <form class="mx-5 xs-mx-0">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control rounded-pill px-4 border-0 shadow-sm"
                    id="exampleInputEmail1"
                    placeholder="E-posta"
                    v-model="email"
                  />
                </div>
                <div class="form-group password-input">
                  <input
                    :type="passwordFieldType"
                    class="form-control rounded-pill px-4 border-0 shadow-sm"
                    id="exampleInputPassword1"
                    placeholder="Şifre"
                    v-model="password"
                  />
                  <fa class="show-password" :icon="['fas', 'eye']" @click="switchVisibility" />
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1">Beni Hatırla</label>
                  <a href="#" class="forgot-password">Şifremi Unuttum</a>
                </div>
                <button type="button" class="btn btn-primary btn-block rounded-pill" @click="login">Giriş Yap</button>
                <div class="text-center">
                  <p class="register-text">Hesabınız yok mu? <a href="#">Üye Ol</a></p>
                </div>
              </form>
              <div v-if="this.$store.state.isAuthenticated == false" class="alert alert-danger mt-3 small" role="alert">
                Kullanıcı adı veya şifrenizi kontrol edin!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
import axios from 'axios';
import config from '../../config';
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      email: '',
      password: '',
      passwordFieldType: 'password',
      modalShow: null,
    };
  },
  methods: {
    ...mapActions([
      'updateUserInfo',
    ]),
    async login() {
      await axios
        .post(`${config.apiURL}/users/login/`, { email: this.email, password: this.password })
        .then((response) => {
          if (response.data.active === true) {
            this.$store.commit('auth');
            this.modalShow = false;
            this.updateUserInfo(response.data);
          } else {
            this.$store.commit('notAuth');
            console.log('HATALI');
          }
        });
    },
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    },
  },
};
</script>

<style lang="scss">
#login-modal {
  .form-control {
    font-size: 14px;
  }
  .modal-close {
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 999;
    color: #8b929a;
    background-color: transparent;
    border: 1px solid #8b929a;
    border-radius: 6px;
  }
  .login-box {
    border-radius: 30px;
    border: 6px solid #fff;
    margin: 0;
    @media (max-width: 600px) {
      border: 3px solid transparent !important;
    }
  }
  .modal-content {
    border-radius: 30px;
    border: none;
  }
  .modal-body {
    padding: 0;
    border-radius: 30px;
    background-color: #35cced;
    @media (max-width: 600px) {
      background-color: transparent !important;
    }
  }
}
.modal-left-banner {
  height: auto;
  width: 100%;
  background-color: transparent;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px 0 0 30px;
  .banner-logo {
    max-width: 175px;
  }
  .banner-img {
    margin-top: 100px;
  }
  .pink-left {
    position: absolute;
    left: 0;
    top: 110px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    background-color: #ef476f;
    height: 60px;
    width: 75px;
  }
  .yellow-left {
    position: absolute;
    left: 90px;
    top: 110px;
    height: 60px;
    width: 60px;
    background-color: #ffd166;
    border-radius: 50%;
  }
  .blue-left {
    position: absolute;
    right: -15px;
    bottom: 10px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    background-color: #5379ff;
    height: 60px;
    width: 100px;
  }
  @media (max-width: 600px) {
    display: none !important;
  }
}
.modal-right {
  border-radius: 30px 20px 20px 30px;
  background-color: #f5fdff;
  padding: 50px 30px;
  h4.title {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  .login-with {
    button {
      background-color: #fff;
      border: 1px solid #35cced;
      border-radius: 10px;
      padding: 8px 20px;
      img {
        max-width: 24px;
        max-height: 24px;
        margin-right: 15px;
      }
      p {
        margin-bottom: 0;
        font-size: 12px;
        line-height: 20px;
        font-weight: 300;
      }
    }
  }
  .sep-text {
    font-size: 14px;
    color: #c1c1c1;
    margin: 30px 0;
  }
  .modal-form {
    .password-input {
      position: relative;
    }
    ::placeholder {
      font-size: 12px;
    }
    .show-password {
      position: absolute;
      top: 10px;
      right: 20px;
    }
    .form-check {
      label {
        font-size: 12px;
        color: #9a9797;
      }
      .form-check-input {
        margin-top: 0.4rem;
        border-radius: 10px;
      }
      .forgot-password {
        font-size: 12px;
        color: #9a9797;
        text-decoration: underline;
        float: right;
      }
    }
    button {
      background-color: #35cced;
      padding: 10px 0;
    }
    .register-text {
      margin: 20px 0 0 0;
      font-size: 12px;
      color: #c1c1c1;
      a {
        color: #35cced;
      }
    }
  }
}
</style>
