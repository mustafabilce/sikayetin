<template>
  <div class="profile-delete">
    <BrandHeader />
    <div class="row mt-5 mb-0">
      <div class="col-12 mb-4">
        <h5>Kripto Para Borsaları</h5>
      </div>
      <div class="col-4">
        <div class="card">
          <div class="card-body border rounded">
            <h6 class="card-title border-bottom pb-3">Bugün</h6>
            <div class="card-body p-3 border rounded">
              <p>Kategorideki Şikayet</p>
              <p class="mb-0 font-weight-bolder">30</p>
            </div>
            <div class="card-body p-3 border rounded mt-2">
              <p>Kategorideki Şikayet Beğeni</p>
              <p class="mb-0 font-weight-bolder">23</p>
            </div>
            <div class="card-body p-3 border rounded mt-2">
              <p>Kategori Marka Sayısı</p>
              <p class="mb-0 font-weight-bolder">23</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card">
          <div class="card-body border rounded">
            <h6 class="card-title border-bottom pb-3">Bu Hafta</h6>
            <div class="card-body p-3 border rounded">
              <p>Kategorideki Çözülen Şikayet</p>
              <p class="mb-0 font-weight-bolder">30</p>
            </div>
            <div class="card-body p-3 border rounded mt-2">
              <p>Kategorideki Şikayet Yorum</p>
              <p class="mb-0 font-weight-bolder">23</p>
            </div>
            <div class="card-body p-3 border rounded mt-2">
              <p>Kategori Onaylı Marka</p>
              <p class="mb-0 font-weight-bolder">23</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card">
          <div class="card-body border rounded">
            <h6 class="card-title border-bottom pb-3">Bu Ay</h6>
            <div class="card-body p-3 border rounded">
              <p>Kategorideki Açık Şikayet</p>
              <p class="mb-0 font-weight-bolder">30</p>
            </div>
            <div class="card-body p-3 border rounded mt-2">
              <p>Kategorideki Şikayet Takip</p>
              <p class="mb-0 font-weight-bolder">23</p>
            </div>
            <div class="card-body p-3 border rounded mt-2">
              <p>Kategori Marka Karşılaştırma</p>
              <p class="mb-0 font-weight-bolder">23</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 mt-3" v-for="i in 2" :key="i">
        <div class="card">
          <div class="card-body border rounded">
            <h6 class="card-title">Kategori Memnuniyet Değerlendirmeleri</h6>
            <div class="row align-items-center mt-3" v-for="i in 6" :key="i">
              <div class="col-4">
                <p>İlgili bir yaklaşımları var</p>
              </div>
              <div class="col-8">
                <b-progress :value="value" :max="max" show-progress animated></b-progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BrandHeader from '~/components/myBrand/BrandHeader.vue';
export default {
  components: { BrandHeader },
  data() {
    return {
      value: 35,
      max: 100,
    };
  },
};
</script>

<style lang="scss" scoped>
.profile-delete {
  height: 100%;
  padding: 30px 50px;
  background-color: #f4f5f9;
  border-radius: 0;
  .card {
    .card-body {
      p {
        font-size: 12px;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
