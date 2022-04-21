<template>
  <div class="premium-package">
    <ProfileHeader />
    <div class="row mt-5 mb-0">
        <div class="col-8 mt-3">
            <div class="card">
                <div class="card-body text-center py-5 border rounded">
                    <h5>Mevcut Plan</h5>
                    <p>Ücretsiz</p>
                    <p>Sınırsız Süreli</p>
                </div>
            </div>
            <div class="card mt-3">
                <div class="card-body text-center py-5 border rounded">
                    <h5>Premium Plan Özellikler</h5>
                    <p>* Neque porro quisquam est qui dolorem</p>
                    <p>* Neque porro quisquam est qui dolorem</p>
                    <p>* Neque porro quisquam est qui dolorem</p>
                    <p>* Neque porro quisquam est qui dolorem</p>
                    <p>* Neque porro quisquam est qui dolorem</p>
                    <button class="success-button">Premium Plana Yükselt</button>
                </div>
            </div>
        </div>
        <div class="col-4">
            <AdsDemo />
            <AdsDemo />
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
};
</script>

<style lang="scss" scoped>
.premium-package {
  height: 100%;
  padding: 30px 50px;
  background-color: #f4f5f9;
  border-radius: 37px 0 0 37px;
  h5 {
      margin-bottom: 15px;
  }
  p {
      margin-bottom: 5px;
      font-size: 13px;
  }
  button {
      margin-top: 15px;
  }
}
</style>
