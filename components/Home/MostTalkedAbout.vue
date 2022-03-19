<style lang="scss" scoped>
#most_talked_about {
  margin-top: 150px;
  position: relative;

  @media (max-width: 1400px) {
    margin-top: 100px;
  }

  @media (max-width: 900px) {
    margin-top: 70px;
    padding: 0 10px;
  }

  .inner {
    margin: 50px 0;

    .card {
      box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.15);
      background: white;
      transform: scale(0.9);
      padding: 50px 30px;
      border-radius: 10px;

      .heading {
        font-weight: 700;
        text-align: center;
      }

      p {
        font-size: 1.2em;
        padding: 30px 10px;
        max-width: 300px;
        margin: 0 auto;

        @media (max-width: 500px) {
          padding: 25px 0;
          text-align: justify;
        }
      }

      .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 300px;
        margin: 20px auto 0 auto;

        @media (max-width: 400px) {
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        .customer,
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;

          b {
            font-size: 0.9em;
          }

          img {
            width: 42px;
            border-radius: 100%;

            @media (max-width: 900px) {
              width: 36px;
            }
          }
        }
      }
    }
  }

  .abstract-circle,
  .abstract-left {
    position: absolute;
    top: 80px;
    bottom: 20px;
    z-index: -1;
  }

  .abstract-left {
    left: 0;
    width: min(50vw, 800px);
    background: #ef476f;
    border-radius: 0 500px 500px 0;
  }

  .abstract-circle {
    left: calc(50vw + 180px);
    border-radius: 100%;
    width: 520px;
    background: #ffd166;
  }

  @media (max-width: 1400px) {
    .abstract-left {
      width: 60vw;
    }
    .abstract-circle {
      display: none;
    }
  }
  @media (max-width: 900px) {
    .abstract-left {
      width: 90vw;
    }
  }
}
</style>

<template>
  <section id="most_talked_about">
    <h1>Çok Konuşulanlar</h1>

    <div class="inner">
      <div class="card" v-for="i in 10" :key="i">
        <h4 class="heading">
          Şikayet Başlığı dolor sit amet, consectetur adipiscing elit. Duis dui.
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          bibendum risus, sit ac velit purus lectus lobortis
        </p>
        <div class="footer">
          <div class="customer">
            <img src="/_nuxt/static/customer.png" />
            <div>
              <b>Samet</b> <br />
              <span>12.123 <i class="fas fa-eye"></i></span>
            </div>
          </div>
          <div class="brand">
            <img src="/_nuxt/static/trendyol.png" />
            <div><b>Trendyol</b></div>
          </div>
        </div>
      </div>
    </div>

    <div class="abstract-left"></div>
    <div class="abstract-circle"></div>
  </section>
</template>

<script>
export default {
  async mounted() {
    $('#most_talked_about .inner').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1100,
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
          },
        },
      ],
    });
  },
};
</script>