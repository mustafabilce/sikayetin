<template>
  <div class="my-ads">
    <BrandHeader />
    <div class="row mt-5 mb-0">
      <div class="col-12">
        <div class="card">
          <div class="card-body border rounded">
            <h6 class="border-bottom pb-3">Marka Kapak Görseli</h6>
            <div class="mt-3">
              <b-form-file
                v-model="file1"
                :state="Boolean(file1)"
                class="small file-input"
                placeholder="Marka Kapak Görseli Seçin"
                drop-placeholder="Buraya sürükleyip bırakın..."
              ></b-form-file>
              <div class="mt-3">
                  <p class="mb-0 small">Seçilin Dosya: {{ file1 ? file1.name : '' }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mt-3">
          <div class="card-body border rounded">
            <h6 class="border-bottom pb-3">Marka Sidebar Görseli</h6>
            <div class="mt-3">
              <b-form-file
                v-model="file2"
                :state="Boolean(file2)"
                class="small file-input"
                placeholder="Marka Sidebar Görseli Seçin"
                drop-placeholder="Buraya sürükleyip bırakın..."
              ></b-form-file>
              <div class="mt-3">
                  <p class="mb-0 small">Seçilin Dosya: {{ file2 ? file2.name : '' }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mt-3">
          <div class="card-body border rounded">
            <h6 class="border-bottom pb-3">Marka Şikayet İçi Görseli</h6>
            <div class="mt-3">
              <b-form-file
                v-model="file3"
                :state="Boolean(file3)"
                class="small file-input"
                placeholder="Marka Şikayet İçi Görseli Seçin"
                drop-placeholder="Buraya sürükleyip bırakın..."
              ></b-form-file>
              <div class="mt-3">
                  <p class="mb-0 small">Seçilin Dosya: {{ file3 ? file3.name : '' }}</p>
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
      file1: null,
      file2: null,
      file3: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.my-ads {
  height: 100%;
  padding: 30px 50px;
  background-color: #f4f5f9;
  border-radius: 0;
}
</style>
