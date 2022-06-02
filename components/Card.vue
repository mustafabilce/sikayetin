<template>
  <div class="mt-3">
    <div class="row">
      <div class="col-4" v-for="i in 3" :key="i">
        <div class="card">
          <h6>Şikayet Başlığı dolor sit amet, consectetur adipiscing elit.</h6>
          <div class="footer">
            <div class="customer">
              <img src="../static/customer.png" />
              <div>
                <b>Samet</b>
              </div>
            </div>

            <img src="../static/arrow.svg" class="arrow" />

            <div class="brand">
              <img src="../static/trendyol.png" />
              <div>
                <b>Trendyol</b>
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
  border: 1px solid #dee2e6 !important;
}
</style>
