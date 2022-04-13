<template>
  <div class="card mt-3 compare-box">
    <div class="card-body border rounded">
      <h6 class="mb-4">Yeni karşılaştırma</h6>
      <div class="input-group">
        <b-form-select v-model="selected" :options="options" size="sm"></b-form-select>
      </div>
      <h6 class="text-muted my-4 text-center">ile</h6>
      <div class="input-group">
        <b-form-select v-model="selected" :options="options" size="sm"></b-form-select>
      </div>
      <button class="light-button mt-4 rounded d-block w-100">Karşılaştır</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Apple' },
        { value: 'a', text: 'Apple' },
        { value: 'b', text: 'Apple' },
        { value: 'c', text: 'Apple' },
        { value: 'd', text: 'Apple' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
 .compare-box {
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
    h6.text-muted {
        font-weight: 400;
        font-size: 14px;
    }
 }
</style>
