<template>
  <div class="profile-edit">
    <ProfileHeader />
    <div class="row mt-5 mb-0">
      <div class="col-6">
        <div class="profile-info">
          <div class="profile-brief">
            <div class="border rounded-circle p-3 mr-3" style="background-color: #fff">
              <img :src="this.$store.state.userInfo.photo" id="logo" />
            </div>
            <div>
              <h5>{{ this.$store.state.userInfo.name }} {{ this.$store.state.userInfo.surname }}</h5>
              <button class="light-success-button rounded">Yeni Fotoğraf Yükle</button>
              <button class="light-button rounded">Kaldır</button>
            </div>
          </div>
          <div class="static-inputs mt-5">
            <div class="row">
              <div class="col-12 mb-4">
                <div class="d-flex justify-content-between">
                  <label class="gray-text">Ad Soyad</label>
                  <a class="edit-info" href="#" v-b-modal.set-infos-modal>Düzenle</a>
                </div>
                <b-input-group>
                  <b-form-input disabled type="text" :placeholder="this.$store.state.userInfo.name"></b-form-input>
                </b-input-group>
              </div>
              <div class="col-12 mb-4">
                <div class="d-flex justify-content-between">
                  <label class="gray-text">E-Posta</label>
                  <a class="edit-info" href="#" v-b-modal.set-email-modal>Düzenle</a>
                </div>
                <b-input-group>
                  <b-form-input disabled type="email" :placeholder="this.$store.state.userInfo.email"></b-form-input>
                </b-input-group>
              </div>
              <div class="col-12 mb-4">
                <div class="d-flex justify-content-between">
                  <label class="gray-text">Telefon</label>
                  <a class="edit-info" href="#" v-b-modal.set-phone-modal>Düzenle</a>
                </div>
                <b-input-group>
                  <b-form-input disabled type="number" :placeholder="this.$store.state.userInfo.phone_number"></b-form-input>
                </b-input-group>
              </div>
              <div class="col-12 mb-4">
                <div class="d-flex justify-content-between">
                  <label class="gray-text">Şifre</label>
                  <a class="edit-info" href="#" v-b-modal.set-password-modal>Düzenle</a>
                </div>
                <b-input-group>
                  <b-form-input disabled type="password" :placeholder="this.$store.state.userInfo.password"></b-form-input>
                </b-input-group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SetNameSurname title="Ad Soyad Değişikliği" text="Lütfen adınızı ve soyadınızı giriniz." />
    <SetEmail title="Email Değişikliği" text="Mevcut e-postanız:" email="root@root.com" />
    <SetPhone title="Telefon Doğrulama" text="Yazdığınız telefon numarasına doğrulama kodu gönderilecektir." text2="Mevcut telefon numaranız:" phone="+905555555555"  />
    <SetPassword title="Şifre Değişikliği" />
  </div>
</template>

<script>
import ProfileHeader from '~/components/Profile/ProfileHeader.vue';
import SetNameSurname from '~/components/modals/Profile/SetNameSurname.vue';
import SetEmail from '~/components/modals/Profile/SetEmail.vue';
import SetPhone from '~/components/modals/Profile/SetPhone.vue';
import SetPassword from '~/components/modals/Profile/SetPassword.vue';

export default {
  components: { ProfileHeader, SetNameSurname, SetEmail, SetPhone, SetPassword },
};
</script>

<style lang="scss" scoped>
.profile-edit {
  height: 100%;
  padding: 30px 50px;
  background-color: #f4f5f9;
  border-radius: 0;
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
