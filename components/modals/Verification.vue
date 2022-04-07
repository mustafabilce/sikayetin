<template>
  <b-modal class="verification-modal" id="verification-modal" centered hide-footer hide-header size="lg">
    <button
      type="button"
      class="modal-close"
      data-dismiss="verification-modal"
      aria-label="Close"
      @click="$bvModal.hide('verification-modal')"
    >
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
      <div class="col-8 modal-verification">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h4 class="title">Güvenlik Doğrulaması</h4>
              <p class="mb-0">Hesabınızı güvence altına almak için lütfen aşağıdaki doğrulamayı tamamlayınız.</p>
            </div>
            <div class="col-12 modal-form mt-5">
              <div class="form-row justify-content-center">
                <div class="col-2">
                  <input type="number" class="form-control" placeholder="0" />
                </div>
                <div class="col-2">
                  <input type="number" class="form-control" placeholder="0" />
                </div>
                <div class="col-2">
                  <input type="number" class="form-control" placeholder="0" />
                </div>
                <div class="col-2">
                  <input type="number" class="form-control" placeholder="0" />
                </div>
              </div>
              <button type="submit" class="btn btn-primary btn-block rounded-pill mt-5">Gönder</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {};
</script>

<style lang="scss">
#verification-modal {
  border-radius: 30px;
  p {
    font-size: 14px;
    font-weight: 300;
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
.modal-verification {
  border-radius: 30px 20px 20px 30px;
  background-color: #f5fdff;
  padding: 50px;
  text-align: center;
  display: flex;
  align-items: center;
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
      input {
          text-align: center;
          font-size: 18px;
          border-radius: 30px;
          padding: 30px 10px;
      }
    .password-input {
      position: relative;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    ::placeholder {
      font-size: 18px;
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
