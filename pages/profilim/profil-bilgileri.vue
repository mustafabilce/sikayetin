<template>
  <div class="profile">
    <div class="row no-gutters">
      <div class="col-3">
        <Sidebar />
      </div>
      <div class="col-9">
          <ProfileInfo />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Profile/Sidebar.vue';
import ProfileInfo from '~/components/Profile/ProfileInfo.vue';

export default {
  components: { Sidebar, ProfileInfo },
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
