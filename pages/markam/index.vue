<template>
  <div class="profile">
    <div class="row no-gutters">
      <div class="col-lg-3 col-md-3 col-sm-12 col-12">
        <Sidebar />
      </div>
      <div class="col-lg-9 col-md-9 col-sm-12 col-12">
          <BrandInfo />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/myBrand/Sidebar.vue';
import BrandInfo from '~/components/myBrand/BrandInfo.vue';

export default {
  components: { Sidebar, BrandInfo },
};
</script>

<style lang="scss" scoped>
  .profile {
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  background-color: #00244C;
}
</style>
