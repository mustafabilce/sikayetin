<style lang="scss" scoped>
#compare {
  position: relative;
  margin-top: 100px;
  // overflow: hidden !important;

  @media (max-width: 600px) {
    margin-top: 0;
    padding: 0;
  }

  .inner {
    background-color: #5379ff;
    color: white;
    border-radius: 500px 0 0 500px;
    text-align: center;
    padding: 80px 250px 80px 250px;
    min-width: 60vw;
    height: 100%;
    margin-right: var(--section-padding-inline-negative);
    position: relative;

    h1,
    p,
    #inputs {
      z-index: 2 !important;
      position: relative;
      @media (max-width: 600px) {
        padding-left: 30px !important;
        padding-right: 30px !important;
      }
    }

    p {
      max-width: 700px;
      text-align: center;
      font-size: 1.4em;
      display: inline-block;
      padding: 0 30px;
    }

    .search {
      margin-top: 50px;

      input {
        padding: 12px 30px;
        width: 250px;
        border-radius: 100px;
        box-shadow: 0 0 8px rgba($color: #000000, $alpha: 0.1);
      }

      button {
        padding: 12px 10px;
        border-radius: 100px;
        background-color: #ff5777;
        color: white;
        width: 100%;
      }
    }

    .abstract {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      img {
        position: absolute;
        z-index: 1;

        @media (max-width: 800px) {
          opacity: 0.5;
        }

        &.square {
          left: 100px;
          top: 200px;

          @media (max-width: 800px) {
            top: 120px;
          }
        }
        &.triangle {
          right: 300px;
          top: 90px;

          @media (max-width: 800px) {
            top: 120px;
            right: 50px;
          }
        }
        &.ellipse {
          right: 500px;
          top: 120px;

          @media (max-width: 800px) {
            top: 240px;
            right: 200px;
          }
        }
        &.rectangle {
          right: 400px;
          top: 200px;

          @media (max-width: 800px) {
            top: 340px;
            right: 100px;
          }
        }
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
        font-size: 1em;
      }

      #inputs {
        flex-direction: column;
        margin-top: 10px;
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
    right: -270px;
    width: 600px;
    height: 600px;
    top: -50px;
    border-width: 40px;

    @media (max-width: 1100px) {
      width: 550px;
      right: -200px;
    }

    img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 50px;
      opacity: 0.1;
      max-width: 200px;
    }
  }

  .circle-small {
    width: 650px;
    height: 650px;
    right: 400px;
    transform: scale(0.75);
    opacity: 0.8;
    border-width: 90px;

    @media (max-width: 1400px) {
      width: 540px;
      height: 540px;
    }
  }
}
</style>

<template>
  <section id="compare">
    <div class="inner">
      <h1>Marka Karşılaştırması</h1>

      <p class="mt-3 mb-4" style="font-weight: 300">
        Bir ürün yada hizmet satın alacağınız zaman markalar arasında seçim yapmakta zorlanıyor musunuz? Simdi iki marka
        seçin ve yarışsınlar. Bakalım rakamlar ne gosterecek, hep birlikte görelim.
      </p>

      <div class="search">
        <div class="row">
          <div class="col-lg-5 col-md-5 col-sm-12 col-12">
            <BrandComparisonInput />
          </div>
          <div class="col-lg-2 col-md-12 col-sm-12 col-12 xs-mt-3 xs-mb-3">
            <button>Yarıştır</button>
          </div>
          <div class="col-lg-5 col-md-5 col-sm-12 col-12">
            <BrandComparisonInput />
          </div>
        </div>
      </div>

      <!-- <div id="inputs">
        <v-select
          :options="this.$store.state.brands.map((brand) => brand.name)"
        >
        </v-select>
        <button class="py-2">Yarıştır</button>
        <v-select
          :options="this.$store.state.brands.map((brand) => brand.name)"
        >
        </v-select>
      </div> -->

      <!-- <div class="abstract">
        <img class="square" src="../../static/abstract/square.png" />
        <img class="triangle" src="../../static/abstract/triangle.png" />
        <img class="ellipse" src="../../static/abstract/yellow-ellipse.png" />
        <img class="rectangle" src="../../static/abstract/rectangle-plus.png" />
      </div> -->
    </div>

    <!-- <div class="circle-big">
      <img src="../../static/abstract/1.png" />
    </div>
    <div class="circle-small"></div> -->
  </section>
</template>

<script>
import BrandComparisonInput from "../BrandComparisonInput.vue"

export default {
  components: { BrandComparisonInput },
};
</script>
