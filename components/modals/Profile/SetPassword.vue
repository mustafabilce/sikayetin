<template>
  <div>
    <b-modal
      id="set-password-modal"
      centered
      hide-header
      hide-footer
      body-class="set-infos-modal-body"
      modal-class="set-infos-modal"
    >
      <div>
        <h5 class="mb-3">{{title}}</h5>
        <b-form-input placeholder="Mevcut Şifreniz" class="rounded-30 border-0 input mb-3"></b-form-input>
        <b-form-input placeholder="Yeni Şifreniz" class="rounded-30 border-0 input mb-3"></b-form-input>
        <b-form-input placeholder="Yeni Şifreniz (Tekrar)" class="rounded-30 border-0 input"></b-form-input>
        <div class="row mt-4">
          <div class="col-12">
            <button>Tamamla</button>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
    .input {
        padding: 20px 15px;
        font-size: 12px;
    }
</style>
