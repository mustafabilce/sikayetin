<template>
  <div class="profile-delete">
    <ProfileHeader />
    <div class="row mt-5 mb-0">
      <div class="col-6">
        <h5 class="pb-3 border-bottom">Hesabımı Sil</h5>
        <p class="mt-4 small text-muted">
          Hesabınızı silmek istediğinize üzüldük. Neden silmek istediğinizi açıklar mısınız?
        </p>
        <div>
          <label class="gray-text small">Açıklama</label>
          <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Enter something..."
            rows="5"
            max-rows="8"
          ></b-form-textarea>
        </div>

        <div class="d-flex justify-content-between mt-3">
          <label class="gray-text small">Şifre</label>
        </div>
        <b-input-group>
          <b-form-input type="password" placeholder="************"></b-form-input>
        </b-input-group>
        <button class="light-danger-button d-block w-100 mt-4 rounded">Hesabımı Sil</button>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileHeader from '~/components/Profile/ProfileHeader.vue';
export default {
  components: { ProfileHeader },
};
</script>

<style lang="scss" scoped>
.profile-delete {
  height: 100%;
  padding: 30px 50px;
  background-color: #f4f5f9;
  border-radius: 37px 0 0 37px;
}
</style>
