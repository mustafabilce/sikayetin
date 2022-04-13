<template>
  <div class="card mt-3 brand-profile">
      <div class="card-body border rounded">
        <h6 class="mb-4">Marka Profili</h6>
        <div class="text border-bottom pb-3">
            <fa color="#85DCED" :icon="['fas', 'circle-check']" />
            <span class="brand-text ml-1">Apple,</span>
            <span class="brand-other-text"> 10+ yıldır Şikayetvar üye markasıdır. </span>
        </div>
        <div class="text mt-4">
            <span class="p-2 rounded border">
                <img class="img-fluid" src="../static/apple.png" width="26" />
            </span>
            <p class="brand-other-text">Son 1 yılda şikayetleri cevaplama oranı %100</p>
        </div>
        <button class="light-button w-100 d-block mt-3 rounded">Marka Karnesini Gör</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .brand-profile {
        .text {
            .brand-text {
                font-weight: 600;
                font-size: 13px;
            }
            .brand-other-text {
                font-weight: 400;
                font-size: 13px;
                display: inline-block;
            }
        }
    }
</style>