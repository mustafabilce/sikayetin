<template>
  <div class="profile">
    <div class="row no-gutters">
      <div class="col-3">
        <Sidebar />
      </div>
      <div class="col-9">
          <SupportTicket />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/myBrand/Sidebar.vue';
import SupportTicket from '~/components/myBrand/SupportTicket.vue';

export default {
  components: { Sidebar, SupportTicket },
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
