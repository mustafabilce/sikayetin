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
    font-size: 2.5em;

    @media (max-width: 900px) {
      font-size: 1.5em;
    }
  }

  p {
    max-width: 800px;
    font-size: 1.4em;
    margin: 40px auto;
    line-height: 1.6em;

    @media (max-width: 900px) {
      font-size: 1.2em;
      text-align: justify;
    }
  }

  button {
    font-weight: 600;
    color: #00244b;
    background: white;
    border-radius: 50px;
    padding: 20px 40px;
  }
}
</style>

<template>
  <section id="work_together">
    <h2 class="heading">Lorem ipsum dolor sit amet</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus id et
      volutpat malesuada viverra viverra sagittis, dolor vel. Vel proin ac massa
      duis.
    </p>

    <button class="btn">Birlikte Çalışalım</button>
  </section>
</template>