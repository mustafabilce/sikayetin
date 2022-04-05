<template>
  <div class="mt-5">
    <div class="row">
      <div class="col-4" v-for="i in 3" :key="i">
        <div class="card shadow">
          <h6 class="reveal-on-visible">Şikayet Başlığı dolor sit amet, consectetur adipiscing elit.</h6>
          <div class="footer reveal-on-visible delay-3">
            <div class="customer">
              <img src="../static/customer.png" />
              <div>
                <b>Samet</b>
                <br />
                <span style="white-space: nowrap">
                  12.123&nbsp;
                  <fa :icon="['fas', 'eye']" style="display: inline" />
                </span>
              </div>
            </div>

            <img src="../static/arrow.svg" class="arrow" />

            <div class="brand">
              <img src="../static/trendyol.png" />
              <div>
                <b>Trendyol</b>
                <div class="stars">
                  <img src="../static/star.svg" class="star" v-for="i in 5" :key="i" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.customer,
.brand {
  @media (max-width: 1200px) {
    font-size: 0.85rem;
  }

  @media (max-width: 900px) {
    transform: scale(0.9);
  }
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 290px;
  margin: 20px auto 0 auto;

  & > * > img {
    margin-right: 10px;
  }

  .arrow {
    @media (max-width: 1000px) {
      margin: 0;
      margin-right: 5px;
      width: 20px;
    }
  }
}
.card {
  text-align: center;
  padding: 30px 20px;
}
</style>
