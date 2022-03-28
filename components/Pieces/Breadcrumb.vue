<style lang="scss" scoped>
#breadcrumb {
  padding-inline: var(--section-padding-inline);
  margin-bottom: 50px;

  a {
    font-weight: 600;
    color: #00244b80;

    &:hover {
      color: #00244b;
    }

    &:not(:last-child)::after {
      content: '>';
    }
  }
}
</style>

<template>
  <div id="breadcrumb">
    <NuxtLink href="#" v-for="(link, i) in links" :key="i" :to="link.to">
      {{ link.text }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: { links: { default: [], type: Array } },
};
</script>