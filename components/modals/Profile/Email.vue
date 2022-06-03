<template>
  <div>
    <b-modal
      id="email-verification-modal"
      centered
      hide-header
      hide-footer
      body-class="email-modal-body"
      modal-class="email-modal"
    >
      <div>
        <h5 class="mb-4">E-Postanı Doğrula</h5>
        <p class="small mb-2">root@root.com</p>
        <p class="text-muted small">
          Yukarıdaki e-posta adresine gönderdiğimiz doğrulama kodunu aşağıdaki kutuya yazarak veya maildeki linke
          tıklayarak e-posta adresini doğrulayablirsiniz.
        </p>
        <div class="row number-inputs mt-4">
          <div class="col">
            <b-form-input class="py-4" type="number"></b-form-input>
          </div>
          <div class="col">
            <b-form-input class="py-4" type="number"></b-form-input>
          </div>
          <div class="col">
            <b-form-input class="py-4" type="number"></b-form-input>
          </div>
          <div class="col">
            <b-form-input class="py-4" type="number"></b-form-input>
          </div>
          <div class="col">
            <b-form-input class="py-4" type="number"></b-form-input>
          </div>
        </div>
        <div class="row mt-4">
            <div class="col-12">
                <p class="mb-3 text-muted small">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>Tamamla</button>
            </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.number-inputs {
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
