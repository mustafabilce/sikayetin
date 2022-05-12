<template>
  <div id="searchBrandForm">
    <div class="search-wrapper">
      <input class="rounded-30" type="text" v-model="search" placeholder="Marka, Model veya Ürün ara..." />
      <span class="search-icon">
        <fa class="text-light" :icon="['fas', 'magnifying-glass']" />
      </span>
    </div>
    <div class="wrapper d-none" :class="{ 'd-block': search.length > 0 }">
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
  width: 400px;
  position: relative;

    @media (max-width: 600px) {
      width: 250px;
    }

  .search-wrapper {
    position: relative;
    width: 100%;

    .search-icon {
      position: absolute;
      right: 5px;
      top: 5px;
      color: #fff;
      background-color: #ff5777;
      padding: 8px 12px;
      border-radius: 30px;
    }

    input {
      padding: 15px 20px;
      color: rgba(0, 0, 0, 0.7);
      border: 1px solid rgba(0, 0, 0, 0.12);
      transition: 0.15s all ease-in-out;
      background: white;
      width: 100%;
      font-size: 12px;
      &::-webkit-input-placeholder {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.9);
        font-weight: 100;
      }
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 12px;
    padding: 10px 20px;
    background-color: #fff;
    border-radius: 30px;
    position: absolute;
    top: 50px;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
    border: 1px solid rgba(0,0,0,.15);
    max-height: 150px;
    overflow-y: scroll;
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
}
</style>
