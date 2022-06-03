<template>
  <div>
    <b-modal
      id="complaint-share-modal"
      centered
      hide-header
      hide-footer
      body-class="email-modal-body"
      modal-class="email-modal"
    >
      <div>
        <h5 class="mb-4">Paylaş</h5>
        <div class="row mt-4">
          <div class="col">
              <button class="btn btn-secondary button-icon"><fa class="mr-1" :icon="['fas', 'envelope']" /></button>
          </div>
          <div class="col">
              <button class="btn btn-secondary button-icon"><fa class="mr-1" :icon="['fas', 'envelope']" /></button>
          </div>
          <div class="col">
              <button class="btn btn-secondary button-icon"><fa class="mr-1" :icon="['fas', 'envelope']" /></button>
          </div>
          <div class="col">
              <button class="btn btn-secondary button-icon"><fa class="mr-1" :icon="['fas', 'envelope']" /></button>
          </div>
          <div class="col">
              <button class="btn btn-secondary button-icon"><fa class="mr-1" :icon="['fas', 'envelope']" /></button>
          </div>
          <div class="col-12 mt-4 link">
              <fa :icon="['fas', 'link']" />
              <b-form-input placeholder="www.sikayetvar.com/akbank/akbankli-olun-pisman-olun" class="rounded-30 border-0 input"></b-form-input>
            <button>Kopyala</button>
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
    .button-icon {
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
        border-radius: .5rem;
    }
    .link {
        position: relative;
        input {
            font-size: 12px;
            padding: 19px 15px 19px 40px;
        }
        button {
            background-color: #3ad08f;
            color: #fff;
            border-radius: 30px;
            position: absolute;
            top: 0;
            right: 15px;
            width: auto;
            padding: 10px 15px;
            font-size: 12px;
        }
        svg {
            position: absolute;
            left: 25px;
            top: 10px;
            color: #6c757d;
        }
    }
</style>
