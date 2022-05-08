<template>
  <div class="my-complaints">
    <ProfileHeader />
    <div class="row mt-5 mb-0">
      <div class="col-12">
        <h5 class="pb-3 border-bottom">Şikayetlerim <span class="gray-text">4</span></h5>
        <div class="item py-4 border-bottom">
          <div class="item-header d-flex justify-content-between">
            <div class="d-flex align-items-center">
              <img class="mr-3" src="../../static/customer-2.png" alt="" />
              <div>
                <h6 class="mb-1">
                  Hepsiburada
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.84846 6.87999C5.19104 6.51984 5.76071 6.5056 6.12085 6.84818L9.04942 9.63389C9.40957 9.97647 9.42381 10.5461 9.08123 10.9063C8.73865 11.2664 8.16898 11.2807 7.80884 10.9381L4.88027 8.15238C4.52012 7.8098 4.50588 7.24013 4.84846 6.87999Z"
                      fill="#3826F1"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.3328 1.9174C16.6942 2.25869 16.7104 2.82831 16.3692 3.18967L9.08344 10.904C8.74215 11.2653 8.17253 11.2816 7.81117 10.9403C7.4498 10.599 7.43353 10.0294 7.77482 9.66804L15.0605 1.95375C15.4018 1.59238 15.9714 1.57611 16.3328 1.9174Z"
                      fill="#3826F1"
                    />
                    <path
                      d="M16.106 7.81267C16.2724 9.49545 15.8812 11.1863 14.9927 12.625C14.1042 14.0638 12.7676 15.1708 11.1885 15.7756C9.60937 16.3805 7.87526 16.4497 6.25295 15.9727C4.63064 15.4957 3.21 14.4988 2.20962 13.1355C1.20923 11.7721 0.684516 10.1179 0.716199 8.42718C0.747881 6.73648 1.33421 5.10303 2.38497 3.77814C3.43573 2.45325 4.89271 1.51031 6.53176 1.0944C8.1708 0.678492 9.9011 0.812655 11.4564 1.47625L10.917 2.74051C9.63883 2.19516 8.21683 2.0849 6.86983 2.4267C5.52283 2.7685 4.32545 3.54343 3.46191 4.63226C2.59838 5.72108 2.11652 7.06348 2.09048 8.45293C2.06445 9.84237 2.49567 11.2019 3.31781 12.3223C4.13994 13.4427 5.30745 14.262 6.6407 14.654C7.97395 15.046 9.39907 14.9891 10.6968 14.492C11.9946 13.9949 13.093 13.0852 13.8232 11.9028C14.5534 10.7204 14.8749 9.33086 14.7381 7.94791L16.106 7.81267Z"
                      fill="#3826F1"
                    />
                  </svg>
                </h6>
                <p class="mb-0 font-weight-lighter small gray-text">14 Şubat 2020 15:16 gönderildi.</p>
              </div>
            </div>
            <div class="d-flex">
              <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none light-button py-2 px-3" no-caret>
                <template #button-content> <fa :icon="['fas', 'gear']" /> </template>
                <b-dropdown-item href="#" class="text-gray small"
                  ><fa class="mr-2 gray-text" :icon="['fas', 'pen']" /><span class="gray-text"
                    >Değerlendirmeyi Güncelle</span
                  ></b-dropdown-item
                >
                <b-dropdown-item href="#" class="text-gray small"
                  ><fa class="mr-2 gray-text" :icon="['fas', 'trash-can']" /><span class="gray-text"
                    >Şikayeti Sil</span
                  ></b-dropdown-item
                >
              </b-dropdown>
              <button class="light-button rounded d-flex align-items-center justify-content-between px-2 py-2 ml-3">
                <span class="px-2 py-1 rounded small mr-4" style="background-color: #3ad08f">
                  <fa color="#fff" :icon="['fas', 'check']" />
                </span>
                <span class="gray-text small">Şikayet Yayına Girdi</span>
                <fa class="float-right ml-4" :icon="['fas', 'arrow-right']" />
              </button>
            </div>
          </div>
          <div class="item-body mt-4">
            <h6>Hepsiburada Verdiğim Sipariş Hala Kargoya Bile Verilmedi</h6>
            <div class="mt-3">
              <b-button
                v-b-toggle.collapse-1
                variant="none"
                class="light-button small d-flex justify-content-between align-items-center px-2"
              >
                <span class="small">Şikayet Geçmişi</span>
                <fa class="ml-4" :icon="['fas', 'angle-down']" />
              </b-button>
              <b-collapse id="collapse-1" class="mt-2">
                <div class="card">
                  <div class="card-body border rounded">
                    <b-list-group>
                      <b-list-group-item variant="success">
                          <div class="row">
                              <div class="col-3">
                                  <p class="mb-0 small">Şikayet Cevaplandı</p>
                              </div>
                              <div class="col-5">
                                  <p class="mb-0 small">-</p>
                              </div>
                              <div class="col-4 text-right">
                                  <p class="mb-0 small">20 Şubat 2019 16:34</p>
                              </div>
                          </div>
                      </b-list-group-item>
                      <b-list-group-item>
                          <div class="row">
                              <div class="col-3">
                                  <p class="mb-0 small gray-text">Şikayet Yayımlandı</p>
                              </div>
                              <div class="col-5">
                                  <p class="mb-0 small gray-text">-</p>
                              </div>
                              <div class="col-4 text-right">
                                  <p class="mb-0 small gray-text">16 Şubat 2019 16:34</p>
                              </div>
                          </div>
                      </b-list-group-item>
                      <b-list-group-item>
                          <div class="row">
                              <div class="col-3">
                                  <p class="mb-0 small gray-text">Şikayet Yayımlandı</p>
                              </div>
                              <div class="col-5">
                                  <p class="mb-0 small gray-text">-</p>
                              </div>
                              <div class="col-4 text-right">
                                  <p class="mb-0 small gray-text">16 Şubat 2019 16:34</p>
                              </div>
                          </div>
                      </b-list-group-item>
                      <b-list-group-item>
                          <div class="row">
                              <div class="col-3">
                                  <p class="mb-0 small gray-text">Markaya İletildi</p>
                              </div>
                              <div class="col-5">
                                  <p class="mb-0 small gray-text">Şikayet Superonline markasına iletildi. </p>
                              </div>
                              <div class="col-4 text-right">
                                  <p class="mb-0 small gray-text">16 Şubat 2019 16:34</p>
                              </div>
                          </div>
                      </b-list-group-item>
                      <b-list-group-item>
                          <div class="row">
                              <div class="col-3">
                                  <p class="mb-0 small gray-text">Şikayet Alındı</p>
                              </div>
                              <div class="col-5">
                                  <p class="mb-0 small gray-text"> Şikayet - ortamında oluşturuldu </p>
                              </div>
                              <div class="col-4 text-right">
                                  <p class="mb-0 small gray-text">16 Şubat 2019 16:34</p>
                              </div>
                          </div>
                      </b-list-group-item>
                    </b-list-group>
                  </div>
                </div>
              </b-collapse>
            </div>
          </div>
        </div>
        <div class="item py-4 border-bottom">
          <div class="item-header d-flex justify-content-between">
            <div class="d-flex align-items-center">
              <img class="mr-3" src="../../static/customer-2.png" alt="" />
              <div>
                <h6 class="mb-1">
                  Superonline
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.84846 6.87999C5.19104 6.51984 5.76071 6.5056 6.12085 6.84818L9.04942 9.63389C9.40957 9.97647 9.42381 10.5461 9.08123 10.9063C8.73865 11.2664 8.16898 11.2807 7.80884 10.9381L4.88027 8.15238C4.52012 7.8098 4.50588 7.24013 4.84846 6.87999Z"
                      fill="#3826F1"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.3328 1.9174C16.6942 2.25869 16.7104 2.82831 16.3692 3.18967L9.08344 10.904C8.74215 11.2653 8.17253 11.2816 7.81117 10.9403C7.4498 10.599 7.43353 10.0294 7.77482 9.66804L15.0605 1.95375C15.4018 1.59238 15.9714 1.57611 16.3328 1.9174Z"
                      fill="#3826F1"
                    />
                    <path
                      d="M16.106 7.81267C16.2724 9.49545 15.8812 11.1863 14.9927 12.625C14.1042 14.0638 12.7676 15.1708 11.1885 15.7756C9.60937 16.3805 7.87526 16.4497 6.25295 15.9727C4.63064 15.4957 3.21 14.4988 2.20962 13.1355C1.20923 11.7721 0.684516 10.1179 0.716199 8.42718C0.747881 6.73648 1.33421 5.10303 2.38497 3.77814C3.43573 2.45325 4.89271 1.51031 6.53176 1.0944C8.1708 0.678492 9.9011 0.812655 11.4564 1.47625L10.917 2.74051C9.63883 2.19516 8.21683 2.0849 6.86983 2.4267C5.52283 2.7685 4.32545 3.54343 3.46191 4.63226C2.59838 5.72108 2.11652 7.06348 2.09048 8.45293C2.06445 9.84237 2.49567 11.2019 3.31781 12.3223C4.13994 13.4427 5.30745 14.262 6.6407 14.654C7.97395 15.046 9.39907 14.9891 10.6968 14.492C11.9946 13.9949 13.093 13.0852 13.8232 11.9028C14.5534 10.7204 14.8749 9.33086 14.7381 7.94791L16.106 7.81267Z"
                      fill="#3826F1"
                    />
                  </svg>
                </h6>
                <p class="mb-0 font-weight-lighter small gray-text">14 Şubat 2020 15:16 gönderildi.</p>
              </div>
            </div>
            <div class="d-flex">
              <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none light-button py-2 px-3" no-caret>
                <template #button-content> <fa :icon="['fas', 'gear']" /> </template>
                <b-dropdown-item href="#" class="text-gray small"
                  ><fa class="mr-2 gray-text" :icon="['fas', 'pen']" /><span class="gray-text"
                    >Değerlendirmeyi Güncelle</span
                  ></b-dropdown-item
                >
                <b-dropdown-item href="#" class="text-gray small"
                  ><fa class="mr-2 gray-text" :icon="['fas', 'trash-can']" /><span class="gray-text"
                    >Şikayeti Sil</span
                  ></b-dropdown-item
                >
              </b-dropdown>
              <button class="light-button rounded d-flex align-items-center justify-content-between px-2 py-2 ml-3">
                <span class="px-2 py-1 rounded small mr-4" style="background-color: #3ad08f">
                  <fa color="#fff" :icon="['fas', 'check']" />
                </span>
                <span class="gray-text small">Şikayet Yayına Girdi</span>
                <fa class="float-right ml-4" :icon="['fas', 'arrow-right']" />
              </button>
            </div>
          </div>
          <div class="item-body mt-4">
            <h6>Superonline Verdiğim Sipariş Hala Kargoya Bile Verilmedi</h6>
            <div class="mt-3">
              <b-button
                v-b-toggle.collapse-2
                variant="none"
                class="light-button small d-flex justify-content-between align-items-center px-2"
              >
                <span class="small">Şikayet Geçmişi</span>
                <fa class="ml-4" :icon="['fas', 'angle-down']" />
              </b-button>
              <b-collapse id="collapse-2" class="mt-2">
                <div class="card">
                  <div class="card-body border rounded">
                    <b-list-group>
                      <b-list-group-item variant="success">
                          <div class="row">
                              <div class="col-3">
                                  <p class="mb-0 small">Şikayet Cevaplandı</p>
                              </div>
                              <div class="col-5">
                                  <p class="mb-0 small">-</p>
                              </div>
                              <div class="col-4 text-right">
                                  <p class="mb-0 small">20 Şubat 2019 16:34</p>
                              </div>
                          </div>
                      </b-list-group-item>
                      <b-list-group-item>
                          <div class="row">
                              <div class="col-3">
                                  <p class="mb-0 small gray-text">Şikayet Yayımlandı</p>
                              </div>
                              <div class="col-5">
                                  <p class="mb-0 small gray-text">-</p>
                              </div>
                              <div class="col-4 text-right">
                                  <p class="mb-0 small gray-text">16 Şubat 2019 16:34</p>
                              </div>
                          </div>
                      </b-list-group-item>
                      <b-list-group-item>
                          <div class="row">
                              <div class="col-3">
                                  <p class="mb-0 small gray-text">Şikayet Yayımlandı</p>
                              </div>
                              <div class="col-5">
                                  <p class="mb-0 small gray-text">-</p>
                              </div>
                              <div class="col-4 text-right">
                                  <p class="mb-0 small gray-text">16 Şubat 2019 16:34</p>
                              </div>
                          </div>
                      </b-list-group-item>
                      <b-list-group-item>
                          <div class="row">
                              <div class="col-3">
                                  <p class="mb-0 small gray-text">Markaya İletildi</p>
                              </div>
                              <div class="col-5">
                                  <p class="mb-0 small gray-text">Şikayet Superonline markasına iletildi. </p>
                              </div>
                              <div class="col-4 text-right">
                                  <p class="mb-0 small gray-text">16 Şubat 2019 16:34</p>
                              </div>
                          </div>
                      </b-list-group-item>
                      <b-list-group-item>
                          <div class="row">
                              <div class="col-3">
                                  <p class="mb-0 small gray-text">Şikayet Alındı</p>
                              </div>
                              <div class="col-5">
                                  <p class="mb-0 small gray-text"> Şikayet - ortamında oluşturuldu </p>
                              </div>
                              <div class="col-4 text-right">
                                  <p class="mb-0 small gray-text">16 Şubat 2019 16:34</p>
                              </div>
                          </div>
                      </b-list-group-item>
                    </b-list-group>
                  </div>
                </div>
              </b-collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.my-complaints {
  height: 100%;
  padding: 30px 50px;
  background-color: #f4f5f9;
  border-radius: 0;
  .item {
    .item-header {
      img {
        max-width: 50px;
        max-height: 50px;
      }
    }
  }
}
</style>
