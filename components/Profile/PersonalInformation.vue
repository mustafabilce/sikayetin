<template>
  <div class="personal-info">
    <ProfileHeader />
    <div class="row mt-5 mb-0">
      <div class="col-8">
        <div class="mt-0 item">
          <label>Cinsiyet</label>
          <div class="input-group">
            <b-form-select v-model="selected" :options="options" size="sm"></b-form-select>
          </div>
        </div>
        <div class="mt-4 item">
          <label>Öğrenim Durumunuz</label>
          <div class="input-group">
            <b-form-select v-model="selected" :options="options" size="sm"></b-form-select>
          </div>
        </div>
        <div class="mt-4 item">
          <label>Medeni Durum</label>
          <div class="input-group">
            <b-form-select v-model="selected" :options="options" size="sm"></b-form-select>
          </div>
        </div>
        <div class="mt-4 item">
          <label>Aylık Hane Geliri</label>
          <div class="input-group">
            <b-form-select v-model="selected" :options="options" size="sm"></b-form-select>
          </div>
        </div>
        <div class="mt-4 item">
          <label>Yaşadığınız Şehir</label>
          <div class="input-group">
            <b-form-select v-model="selected" :options="options" size="sm"></b-form-select>
          </div>
        </div>
        <div class="mt-4 item">
          <label>Çalışma Durumu</label>
          <div class="input-group">
            <b-form-select v-model="selected" :options="options" size="sm"></b-form-select>
          </div>
        </div>
        <div class="mt-4 item">
          <label>Doğum Yılınız</label>
          <div class="input-group">
            <b-form-select v-model="selected" :options="options" size="sm"></b-form-select>
          </div>
        </div>
        <div class="mt-4 item">
            <button class="light-success-button rounded d-block w-100">Değişiklikleri Kaydet</button>
        </div>
      </div>
      <div class="col-4">
          <AdsDemo />
          <AdsDemo />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileHeader from '~/components/Profile/ProfileHeader.vue';
import AdsDemo from '~/components/AdsDemo.vue';

export default {
  components: { ProfileHeader, AdsDemo },
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Seçiniz' },
        { value: 'a', text: 'Seçenek 1' },
        { value: 'b', text: 'Seçenek 2' },
        { value: 'c', text: 'Seçenek 3' },
        { value: 'd', text: 'Seçenek 4' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.personal-info {
  height: 100%;
  padding: 30px 50px;
  background-color: #f4f5f9;
  border-radius: 37px 0 0 37px;
  label {
      margin-left: 5px;
  }
  .input-group {
    width: 100%;
    select {
      display: block;
      width: 100%;
      background-color: #f6fafd;
      box-shadow: none !important;
      border: none;
      font-size: 0.8em;
      height: calc(1.5em + 0.75rem + 2px);
    }
  }
}
</style>
