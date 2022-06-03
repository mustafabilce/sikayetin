<template>
  <div>
    <b-modal
      id="set-email-modal"
      centered
      hide-header
      hide-footer
      body-class="set-infos-modal-body"
      modal-class="set-infos-modal"
    >
      <div>
        <h5 class="mb-3">{{title}}</h5>
        <p class="text-muted small mb-1">{{text}}</p>
        <p class="small"><b>{{email}}</b></p>
        <b-form-input placeholder="Yeni E-Posta" class="rounded-30 border-0 input"></b-form-input>
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
    text: String,
    email: String
  },
};
</script>

<style lang="scss" scoped>
    .input {
        padding: 20px 15px;
        font-size: 12px;
    }
</style>
