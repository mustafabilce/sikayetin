<template>
  <div class="profile">
    <div class="row no-gutters">
      <div class="col-3">
        <Sidebar />
      </div>
      <div class="col-9">
          <PersonalInformation />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Profile/Sidebar.vue';
import PersonalInformation from '~/components/Profile/PersonalInformation.vue';

export default {
  components: { Sidebar, PersonalInformation },
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
