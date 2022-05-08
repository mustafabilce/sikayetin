<template>
  <div class="my-brand">
    <BrandHeader />
    <div class="layout-box text-center">
      <div class="row mt-5 mb-0 w-100">
        <div class="col-12">
          <div class="brand-info">
            <div class="card">
              <div class="card-body border rounded">
                <img src="../../static/trendyol.png" alt="" />
              </div>
            </div>
            <h5>Trendyol</h5>
            <div class="brand-point d-flex align-items-center justify-content-center">
              <fa color="#FFC247" :icon="['fas', 'star']" />
              <fa color="#FFC247" :icon="['fas', 'star']" />
              <fa color="#FFC247" :icon="['fas', 'star']" />
              <fa color="#FFC247" :icon="['fas', 'star']" />
              <fa color="#FFC247" :icon="['fas', 'star']" />
              <h5 class="d-inline-block ml-2 mb-0 text-muted">5.0</h5>
            </div>
          </div>
        </div>
        <div class="col-12 mt-4">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
              <div class="card">
                <div class="card-body border rounded">
                  <h6 class="border-bottom pb-2">Cevaplanan Şikayetler</h6>
                  <p class="mb-0 small gray-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et harum doloremque placeat. Alias aliquam sed atque maxime odit voluptate quas impedit deserunt, ex ad ipsa deleniti architecto aliquid. Amet.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
              <div class="card">
                <div class="card-body border rounded">
                  <h6 class="border-bottom pb-2">Bekleyen Şikayetler</h6>
                  <p class="mb-0 small gray-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et harum doloremque placeat. Alias aliquam sed atque maxime odit voluptate quas impedit deserunt, ex ad ipsa deleniti architecto aliquid. Amet.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
              <div class="card">
                <div class="card-body border rounded">
                  <h6 class="border-bottom pb-2">Bildirimler</h6>
                  <p class="mb-0 small gray-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et harum doloremque placeat. Alias aliquam sed atque maxime odit voluptate quas impedit deserunt, ex ad ipsa deleniti architecto aliquid. Amet.
                  </p>
                </div>
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
};
</script>

<style lang="scss" scoped>
.my-brand {
  height: 100%;
  padding: 30px 50px;
  background-color: #f4f5f9;
  border-radius: 0;
  .layout-box {
    height: 100%;
    width: 100%;
    padding-top: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    .brand-info {
      .card {
        max-width: 120px;
        max-height: 120px;
        margin: 0 auto 15px;
        justify-content: center;
        img {
          max-width: 75px;
          max-height: 75px;
          border-radius: 50%;
        }
      }
    }
    h5 {
      font-size: 20px;
    }
    .brand-point {
      margin-bottom: 15px;
    }
  }
}
</style>
