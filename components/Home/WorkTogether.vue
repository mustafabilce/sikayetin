<style lang="scss" scoped>
#work_together {
  background: linear-gradient(#85dced, #00abd3d4);
  color: white;
  text-align: center;
  border-radius: 180px 180px 0 0;
  padding: var(--section-padding-inline);

  @media (max-width: 700px) {
    border-radius: 50px 50px 0 0;
    padding-block: 50px;
  }

  .heading {
    font-weight: 700;
    font-size: 2em;

    @media (max-width: 900px) {
      font-size: 1.5em;
    }
  }

  p {
    max-width: 800px;
    font-size: 1em;
    margin: 40px auto;
    line-height: 1.3em;

    @media (max-width: 900px) {
      font-size: 1.2em;
    }
  }

  button {
    font-weight: 400;
    font-size: 1em;
    color: #00244b;
    background: white;
    border-radius: 50px;
    padding: 15px 30px;
  }
}
</style>

<template>
  <section id="work_together">
    <h2 class="heading ">Şikayetlere Cevap Verin, Markanızı Güçlendirin</h2>

    <p class=" ">
      Kurumsal üyelik ile müşterilerinizden geri dönüşler alın. Şikayetleri anlık takip edip, çözümler üretin. Markanızı
      bir adım daha ileriye taşıyın.
    </p>

    <button class="btn  ">
      <NuxtLink to="/marka-uyelik" class="text-dark">Birlikte Çalışalım</NuxtLink>
    </button>
  </section>
</template>

<script>
export default {
};
</script>
