<style lang="scss" scoped>
#breadcrumb {
  padding-inline: var(--section-padding-inline);
  margin-bottom: 50px;
  position: relative;
  z-index: 9;

  a {
    font-weight: 600;
    color: #00244b80;
    font-size: 12px;

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
    <NuxtLink
      href="#"
      v-for="(link, i) in links"
      :key="i"
      :to="link.to"
    >
      {{ link.text }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: { links: { default: [], type: Array } },
};
</script>