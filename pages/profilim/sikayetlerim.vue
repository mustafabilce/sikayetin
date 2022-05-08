<template>
  <div class="profile">
    <div class="row no-gutters">
      <div class="col-3">
        <Sidebar />
      </div>
      <div class="col-9">
          <MyComplaints />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Profile/Sidebar.vue';
import MyComplaints from '~/components/Profile/MyComplaints.vue';

export default {
  components: { Sidebar, MyComplaints },
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
