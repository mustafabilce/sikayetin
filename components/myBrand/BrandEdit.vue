<template>
  <div class="profile-edit">
    <BrandHeader />
    <div class="row mt-5 mb-0">
      <div class="col-6">
        <div class="profile-info">
          <div class="profile-brief">
            <div class="border rounded-circle p-3 mr-3" style="background-color: #fff">
              <img class="rounded-circle" src="../../static/trendyol.png" id="logo" />
            </div>
            <div>
              <h5>Trendyol</h5>
              <button class="light-success-button rounded">Yeni Fotoğraf Yükle</button>
              <button class="light-button rounded">Kaldır</button>
            </div>
          </div>
          <div class="mt-5">
            <div class="row">
              <div class="col-4">
                <p class="small gray-text mb-2">Şikayetlerin</p>
                <h5 class="gray-text">4</h5>
              </div>
              <div class="col-4 border-right border-left">
                <p class="small gray-text mb-2">Desteklerin</p>
                <h5 class="gray-text">0</h5>
              </div>
              <div class="col-4">
                <p class="small gray-text mb-2">Yaptığın Yorumlar</p>
                <h5 class="gray-text">0</h5>
              </div>
            </div>
          </div>
          <div class="static-inputs mt-5">
            <div class="row">
              <div class="col-12 mb-4">
                <div class="d-flex justify-content-between">
                    <label class="gray-text">Sorumlu Adı</label>
                <a class="edit-info" href="#">Düzenle</a>
                </div>
                <b-input-group>
                  <b-form-input type="text" placeholder="Ela MAVİTÜRK"></b-form-input>
                </b-input-group>
              </div>
              <div class="col-12 mb-4">
                <div class="d-flex justify-content-between">
                    <label class="gray-text">Giriş Maili</label>
                <a class="edit-info" href="#">Düzenle</a>
                </div>
                <b-input-group>
                  <b-form-input type="email" placeholder="info@trendyol.com"></b-form-input>
                </b-input-group>
              </div>
              <div class="col-12 mb-4">
                <div class="d-flex justify-content-between">
                    <label class="gray-text">Şifre</label>
                <a class="edit-info" href="#">Düzenle</a>
                </div>
                <b-input-group>
                  <b-form-input type="password" placeholder="************"></b-form-input>
                </b-input-group>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <BrandStr />
      </div>
    </div>
  </div>
</template>

<script>
import BrandHeader from '~/components/myBrand/BrandHeader.vue';
import BrandStr from '~/components/myBrand/BrandStr.vue';
export default {
  components: { BrandHeader, BrandStr },
};
</script>

<style lang="scss" scoped>
.profile-edit {
  height: 100%;
  padding: 30px 50px;
  background-color: #f4f5f9;
  border-radius: 37px 0 0 37px;
  .profile-info {
    .profile-brief {
      display: flex;
      align-items: center;
      img {
        max-width: 75px;
        max-height: 75px;
      }
    }
    .static-inputs {
        label {
            font-size: 14px;
            margin-bottom: 5px;
            margin-left: 5px;
        }
        .edit-info {
            color: #3ad08f;
            font-size: 11px;
            margin-right: 5px;
        }
    }
  }
}
</style>
