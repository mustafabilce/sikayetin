<template>
  <div class="support-ticket">
    <BrandHeader />
    <div class="row mt-5 mb-0">
      <div class="col-12">
          <div class="card">
              <div class="card-body border rounded">
                  <b-table class="table border rounded" striped hover :items="items"></b-table>
              </div>
          </div>
      </div>
      <div class="col-12">
        <AdsDemo />
      </div>
    </div>
  </div>
</template>

<script>
import BrandHeader from '~/components/myBrand/BrandHeader.vue';
import AdsDemo from '~/components/AdsDemo.vue';
export default {
  components: { BrandHeader, AdsDemo },
      data() {
      return {
        items: [
          { bilet_no: 1, bilet_konusu: 'Reklam Resmi Yuklenmiyor', durumu: 'Açık', işlemler: 'Marka Cevap Verdi' },
          { bilet_no: 2, bilet_konusu: 'Cevaplarım onaylanmıyor', durumu: 'Kapalı', işlemler: 'Yönetim Cevap Verdi' },
        ],
      }
    }
};
</script>

<style lang="scss" scoped>
.support-ticket {
  height: 100%;
  padding: 30px 50px;
  background-color: #f4f5f9;
  border-radius: 37px 0 0 37px;
}
</style>
