<template>
  <div class="comparison border">
    <div class="brands">
      <div class="brand">
        <img src="../static/apple.png" />
        <b class="brand-name">Apple</b>
        <div class="stars">
          <img src="../static/star.svg" />
          <img src="../static/star.svg" />
          <img src="../static/star.svg" />
          <img src="../static/star.svg" />
          <img src="../static/star.svg" />
          <span class="d-inline-block pl-2">4.2</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.comparison {
  background: white;
  // box-shadow: 0px 2px 4px -2px #1118270f, 0px 4px 8px -2px #1118271a;
  padding: 50px 30px;
  border-radius: .25rem;
  text-align: center;
  max-width: 175px;

  .brands {
    display: flex;
    align-items: center;
    justify-content: space-around;

    .brand {
      display: flex;
      flex-direction: column;
      align-items: center;

      &::after {
        left: 50px;
      }

      .brand-name {
        margin-top: 12px;
      }

      img {
        border-radius: 100%;

        @media (max-width: 900px) {
          width: 42px;
        }
      }

      .stars {
        display: flex;
        flex-direction: row !important;
        align-items: center;

        img {
          margin-right: 2px;
          width: 9px;
        }
      }
    }
  }
}
</style>
