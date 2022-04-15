<template>
  <div class="profile-edit">
    <ProfileHeader />
    <div class="row mt-5 mb-0">
      <div class="col-6">
        <div class="profile-info">
          <div class="profile-brief">
            <div class="border rounded-circle p-3 mr-3" style="background-color: #fff">
              <img src="../../static/profile.png" id="logo" />
            </div>
            <div>
              <h5>Mustafa Bilce</h5>
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
                    <label class="gray-text">Ad Soyad</label>
                <a class="edit-info" href="#">Düzenle</a>
                </div>
                <b-input-group>
                  <b-form-input type="text" placeholder="Mustafa Bilce"></b-form-input>
                </b-input-group>
              </div>
              <div class="col-12 mb-4">
                <div class="d-flex justify-content-between">
                    <label class="gray-text">E-Posta</label>
                <a class="edit-info" href="#">Düzenle</a>
                </div>
                <b-input-group>
                  <b-form-input type="email" placeholder="loremipsum@gmail.com"></b-form-input>
                </b-input-group>
              </div>
              <div class="col-12 mb-4">
                <div class="d-flex justify-content-between">
                    <label class="gray-text">Telefon</label>
                <a class="edit-info" href="#">Düzenle</a>
                </div>
                <b-input-group>
                  <b-form-input type="number" placeholder="+05530000000"></b-form-input>
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
        <ProfileStr />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileHeader from '~/components/Profile/ProfileHeader.vue';
import ProfileStr from '~/components/Profile/ProfileStr.vue';
export default {
  components: { ProfileHeader, ProfileStr },
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
