<style lang="scss" scoped>
#compare {
  background-color: #5379ff;
  padding-top: 30px;
  padding-bottom: 10px;
  border-radius: 30px;
  margin-left: 100px;
  margin-right: 100px;
  .inputs {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 50px 0;

    @media (max-width: 800px) {
      flex-direction: column;
      gap: 20px;
    }

    input {
      padding: 12px 30px;
      width: 250px;
      border-radius: 100px;
      box-shadow: 0px 4px 20px 0px #0000001a;
    }

    button {
      padding: 12px 30px;
      margin: 0 20px;
      border-radius: 100px;
      background-color: #ff5777;
      color: white;
    }
  }
}

#popular_comparisons {
  overflow: visible !important;

  .heading {
    font-weight: 700;
    margin-bottom: 30px;
  }

  .inner {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
    gap: 50px;

    .comparison {
      background: white;
      padding: 35px;
      text-align: center;

      .brands {
        display: flex;
        align-items: center;
        justify-content: space-around;

        .brand {
          display: flex;
          flex-direction: column;
          align-items: center;

          &::after {
            left: 50px;
          }

          .brand-name {
            margin-top: 12px;
          }

          img {
            border-radius: 100%;

            @media (max-width: 900px) {
              width: 42px;
            }
          }

          .stars {
            display: flex;
            flex-direction: row !important;
            align-items: center;

            img {
              margin-right: 2px;
              width: 9px;
            }
          }
        }
      }

      .compare-button {
        margin-top: 30px;
        color: #070853;
        border: 1px solid #000000;
        padding: 8px 23px;
        font-weight: 400;
        display: block;
        width: 100%;
          &:hover {
            background-color: #070853;
            color: #fff;
            border-color: #070853;
          }
      }
    }
  }
}
</style>

<template>
  <div>
    <Header active="marka-ringi" />
    <Breadcrumb
    class="breadcrumb-style"
      :links="[
        { to: '/', text: 'Anasayfa' },
        { to: '/marka-ringi', text: 'Marka Ringi' },
      ]"
      style="z-index: 1"
    />

    <div class="heading-circles">
      <div class="circle circle-1 "></div>
      <div class="circle circle-2 "></div>
      <div class="circle circle-3 "></div>
    </div>

    <section id="compare">
      <h1 class="big-title text-white">Marka Karşılaştırma</h1>

      <div class="inputs ">
        <input type="text" placeholder="1. Marka" />
        <button>Karşılaştır</button>
        <input type="text" placeholder="2. Marka" />
      </div>
    </section>

    <section id="popular_comparisons" class="mt-5">
      <div class="background"></div>
      <h4 class="heading ">Popüler Karşılaştırmalar</h4>

      <div class="inner">
        <div class="comparison border rounded reveal-on-visible" v-for="i in 9" :key="i">
          <div class="brands">
            <div class="brand">
              <img src="../static/trendyol.png" />
              <b class="brand-name">Trendyol</b>
              <div class="stars">
                <img src="../static/star.svg" v-for="i in 5" :key="i" />
                <span class="d-inline-block pl-2">4.2</span>
              </div>
            </div>

            <img src="../static/comparison-arrow.svg" />

            <div class="brand">
              <img src="../static/trendyol.png" />
              <b class="brand-name">Trendyol</b>
              <div class="stars">
                <img src="../static/star.svg" v-for="i in 5" :key="i" />
                <span class="d-inline-block pl-2">4.2</span>
              </div>
            </div>
          </div>

          <NuxtLink to="/marka-karsilastirma">
            <button class="btn compare-button rounded">Karşılaştır</button>
          </NuxtLink>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import axios from "axios"
import config from "../config"
import Header from '~/components/Home/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: { Header, Footer },
  // created() {
  //   this.getUserInfo();
  // },
  // methods: {
  //   getUserInfo() {
  //     axios
  //       .get(`${config.apiURL}/users/users/${this.$store.state.userID}`)
  //       .then((response) => console.log(response.data))
  //       .catch((error) => {
  //         this.errors.push(error);
  //       });
  //   },
  // },
  async mounted() {
    $('#trending .inner .slides').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: $('.prev-button'),
      nextArrow: $('.next-button'),
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    });
  },
};
</script>