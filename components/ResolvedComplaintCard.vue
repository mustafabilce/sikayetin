<template>
  <div class="resolved-card mt-5">
    <div class="row align-items-center">
      <div class="col-lg-3 col-md-3 col-3">
        <div class="card">
          <div class="card-body border rounded text-center">
            <img src="../static/apple.png" class="card-img-top brand-logo" alt="..." />
          </div>
          <div class="card-footer">
            <p class="mb-0 small">Markanın 5402. Çözümü</p>
          </div>
        </div>
      </div>
      <div class="col-lg-9 col-md-9 col-9">
        <div class="d-flex align-items-center border-bottom pb-3">
          <div class="d-flex align-items-center mr-4 pr-4 border-right">
            <b-avatar variant="danger" text="MB"></b-avatar>
            <div class="ml-2">
                <h6 class="small font-weight-normal mb-0">Mustafa</h6>
                <p class="small font-weight-light text-muted mb-0">birkaç saniye önce</p>
            </div>
          </div>
          <div class="point">
              <p class="small mb-0 font-weight-light">Şikayetin sonucundan memnuniyet puanı</p>
              <fa class="mr-1" :icon="['fas', 'star']" v-for="i in 5" :key="i"  />
          </div>
        </div>
        <div class="mt-3">
            <p class="text-muted">İstanbul Büyükşehir Belediyesi (İBB) Kaybedilip Silinen İstanbul Kartı Bulmak</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.resolved-card {
  .brand-logo {
    max-width: 55px;
  }
  .card-footer {
    border: none;
    background-color: #3ad08f;
    color: #fff;
    text-align: center;
  }
  .point {
      svg {
          width: 14px;
          height: 14px;
          color: #f5bc2c;
      }
  }
}
</style>
