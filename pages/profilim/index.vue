<template>
  <div class="profile">
    <div class="row no-gutters">
      <div class="col-3">
        <Sidebar />
      </div>
      <div class="col-9">
          <ProfileEdit />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Profile/Sidebar.vue';
import ProfileEdit from '~/components/Profile/ProfileEdit.vue';

export default {
  components: { Sidebar, ProfileEdit },
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
