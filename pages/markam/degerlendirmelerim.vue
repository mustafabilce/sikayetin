<template>
  <div class="profile">
    <div class="row no-gutters">
      <div class="col-3">
        <Sidebar />
      </div>
      <div class="col-9">
          <MyRating />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/myBrand/Sidebar.vue';
import MyRating from '~/components/myBrand/MyRating.vue';

export default {
  components: { Sidebar, MyRating },
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
