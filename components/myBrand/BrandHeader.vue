<template>
  <div>
    <b-navbar toggleable="lg" type="light" class="p-0">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Şikayetler</b-nav-item>
          <b-nav-item href="#">Marka Karşılaştır</b-nav-item>
          <b-nav-item href="#">Popüler 20</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-input-group>
              <template #append>
                <b-input-group-text><fa :icon="['fas', 'magnifying-glass']" /></b-input-group-text>
              </template>
              <b-form-input placeholder="Marka, model, ürün ara"></b-form-input>
            </b-input-group>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right class="mx-3">
            <template #button-content><fa :icon="['fas', 'bell']" /> </template>
            <div class="dropdown-item small p-4">
              <div class="dropdown-profile">
                <div>
                  <img class="mr-3" src="../../static/google.png" alt="" />
                </div>
                <div class="text">
                  <h6 class="mb-1">Şikayet Değerlendirmesi</h6>
                  <p class="mb-0 text-muted">
                    Hepsiburada ile ilgili şikayet süreci hakkında değerlendirmenizi merak ediyoruz.
                  </p>
                  <span>17 Şubat 2020 15:23 </span>
                </div>
              </div>
            </div>
            <b-dropdown-divider></b-dropdown-divider>
            <div class="dropdown-item small p-4">
              <div class="dropdown-profile">
                <div>
                  <img class="mr-3" src="../../static/google.png" alt="" />
                </div>
                <div class="text">
                  <h6 class="mb-1">Şikayet Değerlendirmesi</h6>
                  <p class="mb-0 text-muted">
                    Hepsiburada ile ilgili şikayet süreci hakkında değerlendirmenizi merak ediyoruz.
                  </p>
                  <span>17 Şubat 2020 15:23 </span>
                </div>
              </div>
            </div>
            <b-dropdown-divider></b-dropdown-divider>
            <div class="dropdown-item small p-4">
              <div class="dropdown-profile">
                <div>
                  <img class="mr-3" src="../../static/google.png" alt="" />
                </div>
                <div class="text">
                  <h6 class="mb-1">Şikayet Değerlendirmesi</h6>
                  <p class="mb-0 text-muted">
                    Hepsiburada ile ilgili şikayet süreci hakkında değerlendirmenizi merak ediyoruz.
                  </p>
                  <span>17 Şubat 2020 15:23 </span>
                </div>
              </div>
            </div>
          </b-nav-item-dropdown>

          <b-dropdown
            right
            size="sm"
            variant="light"
            toggle-class="text-decoration-none text-dark d-flex align-items-center"
            no-caret
          >
            <template #button-content>
              <b-avatar
                class="bg-light"
                style="max-height: 32px; max-width: 32px"
                variant="info"
                src="../../static/customer-2.png"
              ></b-avatar>
              <span class="ml-2 mr-3 small">Mustafa</span>
              <fa :icon="['fas', 'angle-down']" />
            </template>
            <div class="dropdown-item small">
              <div class="dropdown-profile">
                <div>
                  <img src="../../static/customer-2.png" alt="" />
                </div>
                <div class="text">
                  <h6 class="mb-1">Mustafa Bilce</h6>
                  <p class="mb-0 text-muted">mustafabilce12@gmail.com</p>
                </div>
              </div>
            </div>
            <b-dropdown-divider></b-dropdown-divider>
            <NuxtLink class="dropdown-item small" to="/profilim">
              <div class="dropdown-item small">
                <fa class="mr-2" :icon="['fas', 'user']" /><span>Profilimi Düzenle</span>
              </div>
            </NuxtLink>
            <NuxtLink class="dropdown-item small" to="/profilim">
              <div class="dropdown-item small"><fa class="mr-2" :icon="['fas', 'pen']" /><span>Şikayetlerim</span></div>
            </NuxtLink>
            <NuxtLink class="dropdown-item small" to="/profilim">
              <div class="dropdown-item small">
                <fa class="mr-2" :icon="['fas', 'bookmark']" /><span>Kaydedilenler</span>
              </div>
            </NuxtLink>
            <b-dropdown-divider></b-dropdown-divider>
            <div class="dropdown-item small">
              <div class="dropdown-item small">
                <div class="d-flex justify-content-between">
                  <div>
                    <fa class="mr-2" :icon="['fas', 'arrow-right-from-bracket']" />
                    <span>Çıkış Yap</span>
                  </div>
                  <div>
                    <fa class="mr-2" :icon="['fas', 'globe']" />
                    <span>Yardım</span>
                  </div>
                </div>
              </div>
            </div>
          </b-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.dropdown-profile {
  display: flex;
  align-items: center;
  img {
    max-width: 60px;
    max-height: 60px;
    margin-right: 7px;
  }
  .text {
    h6 {
      font-size: 14px;
    }
    p {
      font-size: 12px;
      font-weight: 300;
    }
    span {
      font-size: 10px;
      font-weight: 300;
    }
  }
}
  .nav-item {
      a {
          font-size: 80%;
    font-weight: 400;
      }
  }
</style>
