<template>
  <div class="notification-pref">
    <ProfileHeader />
    <div class="row mt-5 mb-0">
      <div class="col-12">
        <div class="bg-light w-100 p-4 border rounded d-flex align-items-center justify-content-between">
          <div>
            <fa :icon="['fas', 'tv']" />
            <span class="ml-2">Size tarayıcı üzerinden bilgilendirmek için izin verin</span>
          </div>
          <button class="light-success-button rounded">Bildirimleri Aç</button>
        </div>
      </div>
      <div class="col-12 mt-5">
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1" style="background-color: transparent">
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="link" class="acc-button text-left px-3 py-3 d-flex align-items-center justify-content-between">
                  Şikayet değerlendirmesi hakkında bilgilendirmeler
                  <fa class="float-right" :icon="['fas', 'angle-down']" />
                </b-button
              >
            </b-card-header>
            <b-collapse id="accordion-1" class="mt-2" visible accordion="my-accordion" role="tabpanel">
              <b-card-body class="bg-light rounded border">
                <b-card-text class="border-bottom pb-3">
                  <div class="d-flex align-items-center justify-content-between">
                    <div>
                      <fa :icon="['fas', 'tv']" />
                      <span class="ml-2 small">Tarayıcı</span>
                    </div>
                    <b-form-checkbox v-model="checked" name="check-button" switch>
                        <span class="small" v-if="checked">Açık</span>
                        <span class="small" v-else>Kapalı</span>
                    </b-form-checkbox>
                  </div>
                </b-card-text>
                <b-card-text>
                  <div class="d-flex align-items-center justify-content-between">
                    <div>
                      <fa :icon="['fas', 'tv']" />
                      <span class="ml-2 small">Tarayıcı</span>
                    </div>
                    <b-form-checkbox v-model="checked" name="check-button" switch>
                        <span class="small" v-if="checked">Açık</span>
                        <span class="small" v-else>Kapalı</span>
                    </b-form-checkbox>
                  </div>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1" style="background-color: transparent">
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block v-b-toggle.accordion-2 variant="link" class="acc-button text-left px-3 py-3 d-flex align-items-center justify-content-between">
                  Şikayetinize gelen cevap hakkında bilgilendirmeler
                  <fa class="float-right" :icon="['fas', 'angle-down']" />
                </b-button
              >
            </b-card-header>
            <b-collapse id="accordion-2" class="mt-2" visible accordion="my-accordion" role="tabpanel">
              <b-card-body class="bg-light rounded border">
                <b-card-text class="border-bottom pb-3">
                  <div class="d-flex align-items-center justify-content-between">
                    <div>
                      <fa :icon="['fas', 'tv']" />
                      <span class="ml-2 small">Tarayıcı</span>
                    </div>
                    <b-form-checkbox v-model="checked" name="check-button" switch>
                        <span class="small" v-if="checked">Açık</span>
                        <span class="small" v-else>Kapalı</span>
                    </b-form-checkbox>
                  </div>
                </b-card-text>
                <b-card-text>
                  <div class="d-flex align-items-center justify-content-between">
                    <div>
                      <fa :icon="['fas', 'tv']" />
                      <span class="ml-2 small">Tarayıcı</span>
                    </div>
                    <b-form-checkbox v-model="checked" name="check-button" switch>
                        <span class="small" v-if="checked">Açık</span>
                        <span class="small" v-else>Kapalı</span>
                    </b-form-checkbox>
                  </div>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1" style="background-color: transparent">
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block v-b-toggle.accordion-3 variant="link" class="acc-button text-left px-3 py-3 d-flex align-items-center justify-content-between">
                  Şikayetinize yapılan yorumlar hakkında bilgilendirmeler
                  <fa class="float-right" :icon="['fas', 'angle-down']" />
                </b-button
              >
            </b-card-header>
            <b-collapse id="accordion-3" class="mt-2" visible accordion="my-accordion" role="tabpanel">
              <b-card-body class="bg-light rounded border">
                <b-card-text class="border-bottom pb-3">
                  <div class="d-flex align-items-center justify-content-between">
                    <div>
                      <fa :icon="['fas', 'tv']" />
                      <span class="ml-2 small">Tarayıcı</span>
                    </div>
                    <b-form-checkbox v-model="checked" name="check-button" switch>
                        <span class="small" v-if="checked">Açık</span>
                        <span class="small" v-else>Kapalı</span>
                    </b-form-checkbox>
                  </div>
                </b-card-text>
                <b-card-text>
                  <div class="d-flex align-items-center justify-content-between">
                    <div>
                      <fa :icon="['fas', 'tv']" />
                      <span class="ml-2 small">Tarayıcı</span>
                    </div>
                    <b-form-checkbox v-model="checked" name="check-button" switch>
                        <span class="small" v-if="checked">Açık</span>
                        <span class="small" v-else>Kapalı</span>
                    </b-form-checkbox>
                  </div>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileHeader from '~/components/Profile/ProfileHeader.vue';

export default {
  components: { ProfileHeader },
  data () {
      return {
          checked: false
      }
  }
};
</script>

<style lang="scss" scoped>
.notification-pref {
  height: 100%;
  padding: 30px 50px;
  background-color: #f4f5f9;
  border-radius: 0;
  .accordion {
      .acc-button.not-collapsed {
          svg {
            transform: rotate(180deg); 
            // transition: transform 2s;
          }
      }
      .card-text:not(:last-child) {
          border-bottom: 1px solid #dee2e6;
          padding-bottom: 0rem;
      }
  }
}
</style>
