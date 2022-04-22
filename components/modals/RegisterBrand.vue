<template>
  <b-modal class="register-modal" id="register-modal" centered hide-footer hide-header size="lg">
        <button type="button" class="modal-close" data-dismiss="register-modal" aria-label="Close" @click="$bvModal.hide('register-modal')">
          <span aria-hidden="true">&times;</span>
        </button>
    <div class="row register-box">
      <div class="col-4 modal-left-banner">
        <img class="img-fluid banner-logo" src="../../static/logo-white.png" id="logo" />
        <div class="pink-left"></div>
        <div class="yellow-left"></div>
        <img class="img-fluid banner-img" src="../../static/banner1.png" id="logo" />
        <div class="blue-left"></div>
      </div>
      <div class="col-8 modal-right">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h4 class="title">Üye Ol</h4>
            </div>
            <div class="col-12 modal-form mt-5">
              <form class="mx-5">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control rounded-pill px-4 border-0 shadow-sm"
                    id="ad-soyad"
                    placeholder="Ad Soyad"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control rounded-pill px-4 border-0 shadow-sm"
                    id="sirket"
                    placeholder="Şirket"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="phone"
                    class="form-control rounded-pill px-4 border-0 shadow-sm"
                    id="telefon"
                    placeholder="Telefon"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control rounded-pill px-4 border-0 shadow-sm"
                    id="e-posta"
                    placeholder="E-posta"
                  />
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1"><a href="#">Kullanıcı Sözleşmesi</a> ’ni okudum, kabul ediyorum</label>
                </div>
                <button type="submit" class="btn btn-primary btn-block rounded-pill">Üye Ol</button>
                <div class="text-center">
                  <p class="register-text">Hesabınız var mı?  <a href="#">Giriş Yap</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {

};
</script>

<style lang="scss">
#register-modal {
  border-radius: 30px;
  .modal-close {
      position: absolute;
      right: 20px;
      top: 20px;
      z-index: 999;
      color: #8B929A;
      background-color: transparent;
      border: 1px solid #8B929A;
      border-radius: 6px;
  }
  .register-box {
    border-radius: 30px;
    border: 6px solid #fff;
    margin: 0;
  }
  .modal-content {
    border-radius: 30px;
    border: none;
  }
  .modal-body {
    padding: 0;
    border-radius: 30px;
    background-color: #35cced;
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
  .register-with {
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
