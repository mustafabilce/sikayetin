<template>
  <div id="searchBrandForm">
    <div class="search-wrapper">
      <input class="rounded-30" type="text" v-model="search" placeholder="Ara..." />
    </div>
    <div class="wrapper">
      <NuxtLink :to="`/all-brands/${brand.id}`" class="card" v-for="brand in filteredList" :key="brand.id">
        <b-avatar size="2rem" rounded class="p-1 mr-2 border" variant="link" :src="brand.logo"></b-avatar>
        <span>{{ brand.name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    search: '',
  }),
  computed: {
    filteredList() {
      return this.$store.state.brands.filter((brand) => {
        return brand.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style lang="scss" scoped>
div#searchBrandForm {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .search-wrapper {
    position: relative;
      width: 100%;
    input {
      padding: 4px 12px;
      color: rgba(0, 0, 0, 0.7);
      border: 1px solid rgba(0, 0, 0, 0.12);
      transition: 0.15s all ease-in-out;
      background: white;
      width: 100%;
      &::-webkit-input-placeholder {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 100;
      }
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding-top: 12px;
  }

  .card {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 5px 0;
    transition: 0.15s all ease-in-out;
    width: 100%;
    color: #444;
  }

  .hotpink {
    background: hotpink;
  }

  .green {
    background: green;
  }

  .box {
    width: 100px;
    height: 100px;
    border: 1px solid rgba(0, 0, 0, 0.12);
  }
}
</style>
