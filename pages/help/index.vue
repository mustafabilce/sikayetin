<style lang="scss" scoped>
body {
  background: red !important;
}
</style>

<template>
  <div>
    <Header />
  </div>
</template>

<script>
import Header from '~/components/Home/Header.vue';
export default {
  components: { Header },
  mounted() {
    document.body.style.background = 'white';
  },
};
</script>