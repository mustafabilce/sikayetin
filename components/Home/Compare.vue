<style lang="scss" scoped>
#compare {
  position: relative;
  margin-top: 100px;

  .inner {
    background-color: #5379ff;
    color: white;
    float: right;
    border-radius: 500px 0 0 500px;
    text-align: center;
    padding: 100px 300px 150px 100px;
    min-width: 60vw;
    margin-right: var(--section-padding-inline-negative);
    position: relative;

    h1,
    p,
    #inputs {
      z-index: 1 !important;
      position: relative;
    }

    p {
      max-width: 700px;
      text-align: center;
      font-size: 1.4em;
      display: inline-block;
      padding: 0 30px;

      @media (max-width: 500px) {
        text-align: justify;
        text-align-last: center;
      }
    }

    #inputs {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 50px 0;

      input {
        padding: 12px 30px;
        width: 250px;
        border-radius: 100px;
        box-shadow: 0 0 8px rgba($color: #000000, $alpha: 0.1);
      }

      button {
        padding: 12px 30px;
        margin: 0 20px;
        border-radius: 100px;
        background-color: #ff5777;
        color: white;
      }
    }

    @media (max-width: 1100px) {
      width: 100vw;
      min-width: unset;
      padding: 50px 0;
      border-radius: 0;

      > * {
        margin: 0 20px;
      }

      h1 {
        margin-bottom: 50px;
      }

      p {
        margin-top: 50px;
      }

      #inputs {
        gap: 20px;
      }
    }

    @media (max-width: 800px) {
      h1 {
        font-size: 1.6em;
      }

      p {
        font-size: 1.2em;
      }

      #inputs {
        flex-direction: column;
      }
    }
  }

  .circle-big,
  .circle-small {
    position: absolute;
    top: 0;
    bottom: 0;
    background: #6690fd;
    border: 0 solid #5f86fe;
    border-radius: 100%;
  }

  .circle-big {
    right: -300px;
    width: 650px;
    border-width: 60px;

    @media (max-width: 1400px) {
      width: 540px;
      right: -280px;
    }

    img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 50px;
      opacity: 0.1;
    }
  }

  .circle-small {
    width: 650px;
    right: 400px;
    transform: scale(0.75);
    opacity: 0.8;
    border-width: 90px;

    @media (max-width: 1400px) {
      width: 540px;
    }
  }
}
</style>

<template>
  <section id="compare">
    <div class="inner">
      <h1>Marka Karşılaştırması</h1>

      <p class="mt-3 mb-4" style="font-weight: 300">
        Bir ürün yada hizmet satın alacağınız zaman markalar arasında seçim
        yapmakta zorlanıyor musunuz? Simdi iki marka seçin ve yarışsınlar.
        Bakalım rakamlar ne gosterecek, hep birlikte görelim.
      </p>

      <div id="inputs">
        <input type="text" placeholder="1. Marka" />
        <button>Yarıştır</button>
        <input type="text" placeholder="2. Marka" />
      </div>
    </div>

    <div class="circle-big">
      <img src="../../static/abstract-1.png" />
    </div>
    <div class="circle-small"></div>
  </section>
</template>