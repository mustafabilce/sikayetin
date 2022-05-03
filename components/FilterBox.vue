<template>
  <div class="card bg-pink rounded-30 shadow">
    <div class="card-body p-5">
      <div class="first-line">
        <b-input-group class="rounded-30 pl-2">
          <template #append>
            <b-input-group-text><fa :icon="['fas', 'magnifying-glass']" /></b-input-group-text>
          </template>
          <b-form-input placeholder="Şikayetler içinde ara"></b-form-input>
        </b-input-group>
      </div>
      <div class="second-line">
        <div class="mb-3 d-flex align-items-center ">
          <span><fa :icon="['fas', 'filter']" /></span>
          <h4>Filtrele</h4>
        </div>
        <div class="inputs">
          <b-form-checkbox
            id="checkbox-1"
            v-model="isResolved"
            name="checkbox-1"
            value="resolved"
            unchecked-value="not_resolved"
            class="text-light small"
          >
            Çözülen Şikayetler
          </b-form-checkbox>
          <b-form-checkbox
            id="checkbox-2"
            v-model="isVideo"
            name="checkbox-2"
            value="withVideo"
            unchecked-value="has_video"
            class="text-light small"
          >
            Videolu Şikayetler
          </b-form-checkbox>
          <b-form-checkbox
            id="checkbox-3"
            v-model="isPhoto"
            name="checkbox-3"
            value="withPhoto"
            unchecked-value="has_photo"
            class="text-light small"
          >
            Fotoğraflı Şikayetler
          </b-form-checkbox>
        </div>
        <div class="sort mt-3">
          <div class="mb-3">
            <span><fa :icon="['fas', 'arrow-down-short-wide']" /></span>
            <h4>Sırala</h4>
          </div>
          <div class="input-group rounded-30 pl-2">
            <b-form-select v-model="selected" :options="options" size="sm"></b-form-select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isResolved: 'not_resolved',
      isVideo: 'has_video',
      isPhoto: 'has_photo',
      selected: null,
      options: [
        { value: null, text: 'En Yeni' },
        { value: 'a', text: 'En Yeni' },
        { value: 'b', text: 'En Çok Görüntülenen' },
        { value: 'c', text: 'En Çok Destek Alan' },
        { value: 'd', text: 'En Çok Yorum Alan' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.first-line {
    svg {
        max-width: 13px;
        max-height: 13px;
    }
}
.second-line {
  margin-top: 20px;
  h4,
  span {
    display: inline-block;
    color: #00244c;
  }
  h4 {
    font-size: 20px;
    margin-bottom: 0px;
  }
  svg {
      max-width: 16px;
      max-height: 16px;
  }
  span {
    margin-right: 10px;
  }
  .inputs {
    margin-left: 32px;
  }
  .sort {
    width: 100%;
    select {
      display: block;
      width: 100%;
      background-color: #f6fafd;
      box-shadow: none !important;
      border: none;
      font-size: 0.8em;
      height: calc(1.5em + 0.75rem + 2px);
    }
  }
}
</style>
