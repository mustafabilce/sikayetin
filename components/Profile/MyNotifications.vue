<template>
  <div class="my-notifications">
    <ProfileHeader />
    <div class="row mt-5 mb-0">
      <div class="col-12">
        <div class="notification-card">
          <div class="card">
            <div class="card-body border rounded">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <span class="bg-light-green py-1 px-2 rounded mr-2">
                    <fa color="#fff" :icon="['fas', 'star']" />
                  </span>
                  <p class="mb-0 d-inline-block">Şikayet Değerlendirmesi</p>
                </div>
                <p class="mb-0 small text-muted font-weight-lighter">17 Şubat 2020 15:23</p>
              </div>
              <p class="small gray-text mt-3 mb-0 ml-5">
                Hepsiburada ile ilgili şikayet süreci hakkında değerlendirmenizi merak ediyoruz.
              </p>
            </div>
          </div>
        </div>
        <div class="notification-card mt-3">
          <div class="card">
            <div class="card-body border rounded">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <span class="bg-purple py-1 px-2 rounded mr-2">
                    <fa color="#fff" :icon="['fas', 'arrow-trend-up']" />
                  </span>
                  <p class="mb-0 d-inline-block">Şikayetiniz Cevaplandı</p>
                </div>
                <p class="mb-0 small text-muted font-weight-lighter">17 Şubat 2020 15:23</p>
              </div>
              <p class="small gray-text mt-3 mb-0 ml-5">
                Hepsiburada ile ilgili şikayet süreci hakkında değerlendirmenizi merak ediyoruz.
              </p>
            </div>
          </div>
        </div>
        <div class="notification-card mt-3">
          <div class="card">
            <div class="card-body border rounded">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <span class="bg-yellow py-1 px-2 rounded mr-2">
                    <fa color="#fff" :icon="['fas', 'check']" />
                  </span>
                  <p class="mb-0 d-inline-block">Şikayetiniz Yayımlandı</p>
                </div>
                <p class="mb-0 small text-muted font-weight-lighter">17 Şubat 2020 15:23</p>
              </div>
              <p class="small gray-text mt-3 mb-0 ml-5">
                Hepsiburada ile ilgili şikayet süreci hakkında değerlendirmenizi merak ediyoruz.
              </p>
            </div>
          </div>
        </div>
        <div class="notification-card mt-3">
          <div class="card">
            <div class="card-body border rounded">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <span class="bg-purple-light py-1 px-2 rounded mr-2">
                    <fa color="#fff" :icon="['fas', 'paper-plane']" />
                  </span>
                  <p class="mb-0 d-inline-block">Şikayetiniz Markaya İletildi</p>
                </div>
                <p class="mb-0 small text-muted font-weight-lighter">17 Şubat 2020 15:23</p>
              </div>
              <p class="small gray-text mt-3 mb-0 ml-5">
                Hepsiburada ile ilgili şikayet süreci hakkında değerlendirmenizi merak ediyoruz.
              </p>
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
.my-notifications {
  height: 100%;
  padding: 30px 50px;
  background-color: #f4f5f9;
  border-radius: 37px 0 0 37px;
}
</style>
