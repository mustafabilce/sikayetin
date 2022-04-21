<template>
  <div class="profile">
    <div class="row no-gutters">
      <div class="col-3">
        <Sidebar />
      </div>
      <div class="col-9">
          <MyAds />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/myBrand/Sidebar.vue';
import MyAds from '~/components/myBrand/MyAds.vue';

export default {
  components: { Sidebar, MyAds },
};
</script>

<style lang="scss" scoped>
  .profile {
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  background-color: #fff;
}
</style>
