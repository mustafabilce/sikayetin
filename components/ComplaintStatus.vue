<template>
  <div class="card complaint-status">
    <div class="card-body border rounded">
      <div class="top-box border-bottom pb-2">
        <div class="small d-block">
          <NuxtLink to="brands/samsung" class="link">Samsung Telefon <fa :icon="['fas', 'check-double']" /></NuxtLink>
          <span>ile ilgili</span>
        </div>
        <div class="d-block mt-3">
          <h4>Şikayetin Durumu</h4>
        </div>
        <div class="d-block mt-3">
          <b-progress :max="max" class="my-3 progress-bars">
            <b-progress-bar class="first-step rounded" :value="values[0]"
              ><p class="small mb-0">Yayında</p></b-progress-bar
            >
            <b-progress-bar class="second-step rounded" :value="values[1]"
              ><p class="small mb-0">Cevaplandı</p></b-progress-bar
            >
            <b-progress-bar class="last-step rounded" :value="values[2]"
              ><p class="small mb-0">Çözüldü</p></b-progress-bar
            >
          </b-progress>
        </div>
      </div>
      <div class="bottom-box pt-3">
        <div class="item">
          <div class="btn btn-link btn-sm"><fa class="mr-1" :icon="['fas', 'thumbs-up']" /> Destekle</div>
        </div>
        <div class="item">
          <div class="btn btn-link btn-sm"><fa class="mr-1" :icon="['fas', 'comment']" /> Yorum Yap</div>
        </div>
        <div class="item">
          <div class="btn btn-link btn-sm"><fa class="mr-1" :icon="['fas', 'share-nodes']" /></div>
        </div>
        <div class="item">
          <div class="btn btn-link btn-sm"><fa class="mr-1" :icon="['fas', 'bookmark']" /></div>
        </div>
      </div>
      <button class="light-button mt-3 rounded d-block w-100">Benzer Şikayet Yaz</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      values: [33.3, 33.3, 33.3],
      max: 100,
    };
  },
};
</script>

<style lang="scss" scoped>
.complaint-status {
  width: 100%;
  .top-box {
    .link {
      color: #78e483;
      font-weight: 500;
      margin-right: 8px;
    }
    .progress-bars {
      background-color: transparent;
      height: 2rem;
      .first-step {
        background-color: #78e483;
      }
      .second-step {
        background-color: transparent;
        border: 1px solid #afb0b6;
        color: #000;
        margin: 0 5px;
      }
      .last-step {
        background-color: #f6fafd;
        border: 1px solid #afb0b6;
        color: #afb0b6;
      }
    }
  }
  .bottom-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .btn-link {
          color: #afb0b6;
          display: flex;
          align-items: center;
          &:hover {
              text-decoration: none;
              border: none;
              box-shadow: none;
          }
      }
  }
}
</style>
