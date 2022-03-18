<style lang="scss">
header,
section {
  padding-inline: var(--section-padding-inline);
}

section {
  max-width: 100%;
  overflow-x: hidden;

  h1 {
    font-size: 3em;

    @media (max-width: 900px) {
      font-size: 2em;
    }

    @media (max-width: 600px) {
      font-size: 1.5em;
      text-align: center;
    }
  }
}

header {
  background: linear-gradient(#85dced, #4fc8e2);
  border-radius: 0 0 180px 180px;
  padding-block: 30px;

  @media (max-width: 1150px) {
    border-radius: 0 0 120px 120px;
  }
  @media (max-width: 800px) {
    border-radius: 0 0 40px 40px;
  }

  &,
  a,
  .btn {
    color: white;

    &:hover {
      color: white;
    }
  }

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    #logo {
      width: 220px;

      @media (max-width: 1400px) {
        width: 180px;
      }

      @media (max-width: 500px) {
        width: 150px;
      }
    }

    #primary_nav {
      @media (max-width: 1150px) {
        display: none;
      }

      a {
        margin: 0 3px;
        padding: 9px;

        @media (max-width: 1400px) {
          margin: 0 2px;
          padding: 6px;
        }

        &:not(.btn):hover {
          color: #ff5777;
        }

        &.btn {
          background: #ff5777;
          border-radius: 100px;
          padding: 8px 24px;
          margin-left: 10px;

          @media (max-width: 1400px) {
            padding: 6px 16px;
            margin-left: 5px;
          }
        }
      }
    }

    #secondary_nav {
      cursor: default;

      @media (max-width: 850px) {
        display: none;
      }

      a {
        padding: 4px;

        &:not(.btn):hover {
          color: #00244c;
        }

        &.btn {
          background: #00244c;
          font-weight: bold;
          padding: 12px 36px;
          border-radius: 100px;
          margin-left: 20px;

          @media (max-width: 1400px) {
            padding: 10px 22px;
            margin-left: 10px;
          }
        }
      }
    }

    .fa-bars {
      display: none;

      @media (max-width: 1150px) {
        display: unset;
      }
    }
  }

  #call_to_action {
    margin: 100px 0;

    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      font-size: 4em;
      z-index: 1;

      @media (max-width: 1000px) {
        text-align: center;
      }

      @media (max-width: 600px) {
        font-size: 9vw;
      }
    }

    #search {
      margin: 60px 0 30px;
      width: 450px;
      max-width: 100%;
      z-index: 1;

      input {
        width: 100%;
        border-radius: 100px;
        padding: 20px 30px;
        border: none;
        outline: none;
        box-shadow: 0 0 4px rgba($color: #000000, $alpha: 0.2);

        @media (max-width: 600px) {
          padding: 10px 15px;
        }

        &:hover {
          box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.4);
        }

        &:focus {
          box-shadow: 0 0 8px rgba($color: #000000, $alpha: 0.8);
        }
      }
    }

    #banner {
      position: absolute;
      top: 150px;
      right: 100px;
      border-radius: 100%;
      box-shadow: 20px 25px 60px rgba($color: #000000, $alpha: 0.2);
      width: 600px;
      height: 600px;

      img {
        width: 100%;
        height: 100%;
      }

      @media (max-width: 1400px) {
        width: 500px;
        height: 500px;
        top: 140px;
        right: 60px;
      }

      @media (max-width: 1150px) {
        display: none;
      }

      /*
      @media (max-width: 1000px) {
        display: unset;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0.3;
      }
      */
    }

    #star_of_week {
      position: absolute;
      top: 520px;
      right: 520px;
      background: white;
      border-radius: 30px;
      padding: 20px;
      padding-top: 50px;
      box-shadow: 15px 20px 75px rgba($color: #000000, $alpha: 0.7);
      text-align: center;
      color: black;

      @media (max-width: 1400px) {
        top: 450px;
        right: 350px;
      }

      @media (max-width: 1150px) {
        top: 240px;
        right: 110px;
        transform: scale(1.3);
      }

      @media (max-width: 1000px) {
        top: 50px;
        left: unset;
        right: unset;
        transform: unset;
        position: relative;
      }

      img {
        border-radius: 100%;
        display: block;
        top: -40px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        position: absolute;
        border: 6px solid #50c8e2;
      }

      small {
        display: block;
        opacity: 0.6;
      }

      h4 {
        margin-top: 10px;
      }

      p {
        margin: 0 !important;
        font-size: 0.8em;

        span {
          opacity: 0.5;
        }
      }

      .btn {
        color: #00abd3;
        border: 1px solid rgba(0, 0, 0, 0.05);
        width: 100%;
        margin-top: 20px;
        border-radius: 100px;
      }
    }
  }
}

#trending {
  margin-top: 200px;

  @media (max-width: 1150px) {
    margin-top: 100px;
  }

  @media (max-width: 600px) {
    margin-top: 50px;
  }

  .inner {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 25px;

    max-width: 100vw;
    width: 100vw !important;
    box-sizing: border-box;
    overflow-x: scroll;
    margin: 20px 0;
    margin-left: var(--section-padding-inline-negative);

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 900px) {
      h5 {
        font-size: 1.1em;
      }
      p {
        font-size: 0.9em;
      }
    }

    .trending-row {
      display: flex;
      gap: 20px;
      align-items: flex-end;

      .card {
        background-color: white;
        padding: 30px;
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h5 {
          font-weight: 700;
          text-align: center;
          font-size: 1.4em;

          @media (max-width: 1200px) {
            font-size: 1.1em;
          }
        }

        p {
          margin: 0 auto;
          font-size: 1.2em;
          padding: 20px 20px 0 20px;

          @media (max-width: 1200px) {
            font-size: 1em;
            text-align: center;
            padding: 5px 5px 0 5px;
          }
        }

        .footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 300px;
          margin: 20px auto 0 auto;

          @media (max-width: 900px) {
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

    .row-1 .card:nth-child(odd),
    .row-2 .card:nth-child(even) {
      min-width: 33vw;

      @media (max-width: 1200px) {
        min-width: 500px;
      }

      @media (max-width: 900px) {
        min-width: 280px;
      }
    }
    .row-1 .card:nth-child(even),
    .row-2 .card:nth-child(odd) {
      min-width: 25vw;

      @media (max-width: 1200px) {
        min-width: 350px;
      }

      @media (max-width: 900px) {
        min-width: 280px;
      }
    }

    .row-2 {
      padding-left: 80px;
      align-items: flex-start;

      @media (max-width: 900px) {
        padding-left: 0;
      }
    }
  }
}

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
      gap: 40px;
      margin: 50px 0;

      input {
        padding: 12px 30px;
        width: 250px;
        border-radius: 100px;
        border: none;
        box-shadow: 0 0 8px rgba($color: #000000, $alpha: 0.1);
      }

      button {
        padding: 12px 30px;
        border-radius: 100px;
        background-color: #ff5777;
        color: white;
        border: none;
      }
    }

    @media (max-width: 1400px) {
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
    border: 60px solid #5f86fe;
    border-radius: 100%;
  }

  .circle-big {
    right: -300px;
    width: 650px;

    @media (max-width: 1400px) {
      width: 540px;
      right: -280px;
    }
  }

  .circle-small {
    width: 650px;
    right: 400px;
    transform: scale(0.75);
    opacity: 0.8;

    @media (max-width: 1400px) {
      width: 540px;
    }
  }
}

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
        padding: 25px 50px;
        margin-top: 25px;

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
    top: 100px;
    bottom: 0;
    z-index: -1;
  }

  .abstract-left {
    left: 0;
    width: 50vw;
    background: #ef476f;
    border-radius: 0 100% 100% 0;
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
  <div>
    <header>
      <nav>
        <a href="#">
          <img src="../static/logo-white-1.png" id="logo" />
        </a>

        <div id="primary_nav">
          <a href="#">Şikayetler</a>
          <a href="#">Marka Rengi</a>
          <a href="#">Popüler 20</a>
          <a href="#" class="btn">Canlı Akış</a>
        </div>

        <div id="secondary_nav">
          <a href="#">Giriş Yap</a>
          <span>|</span>
          <a href="#">Üye Ol</a>
          <a href="#" class="btn">Şikayet Yaz</a>
        </div>

        <fa
          :icon="['fas', 'bars']"
          style="font-size: 2em; cursor: pointer"
        ></fa>
      </nav>

      <div id="call_to_action">
        <h1>
          <span style="font-weight: 400">Şikayet.in varsa</span>
          <br />
          <span style="font-weight: 600">Çözüm de var!</span>
        </h1>

        <div id="search">
          <input type="text" placeholder="Marka, model, ürün ara" />
        </div>

        <div id="banner">
          <img src="../static/banner1.png" />
        </div>

        <div id="star_of_week">
          <img src="../static/trendyol.png" />

          <small>Haftanın Yıldızı</small>
          <h4>TRENDYOL</h4>
          <p><b>1200</b> <span>Çözülmüş Şikayet</span></p>
          <a class="btn" href="#">İncele</a>
        </div>
      </div>
    </header>

    <section id="trending">
      <h1>Gündemdeki Şikayetler</h1>

      <div class="inner">
        <div class="trending-row row-1">
          <div v-for="i in 10" :key="i" class="card">
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              bibendum risus, sit ac velit purus lectu
            </p>
            <div class="footer">
              <div class="customer">
                <img src="../static/customer.png" />
                <div>
                  <b>Samet</b>
                  <br />
                  <span>12.123 <i class="fas fa-eye"></i></span>
                </div>
              </div>
              <div class="brand">
                <img src="../static/trendyol.png" />
                <div>
                  <b>Trendyol</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="trending-row row-2">
          <div v-for="i in 10" :key="i" class="card">
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              bibendum risus, sit ac velit purus lectu
            </p>
            <div class="footer">
              <div class="customer">
                <img src="../static/customer.png" />
                <div>
                  <b>Samet</b>
                  <br />
                  <span>12.123 <i class="fas fa-eye"></i></span>
                </div>
              </div>
              <div class="brand">
                <img src="../static/trendyol.png" />
                <div>
                  <b>Trendyol</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="compare">
      <div class="inner">
        <h1>Marka Karşılaştırması</h1>

        <p class="mt-3 mb-4" style="font-weight: 300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          tenetur, nisi voluptate debitis dignissimos molestias repellat,
          reprehenderit saepe libero qui expedita deleniti.
        </p>

        <div id="inputs">
          <input type="text" placeholder="1. Marka" />
          <button>Karşılaştır</button>
          <input type="text" placeholder="2. Marka" />
        </div>
      </div>

      <div class="circle-big"></div>
      <div class="circle-small"></div>
    </section>

    <section id="most_talked_about">
      <h1>Çok Konuşulanlar</h1>

      <div class="inner">
        <div class="card" v-for="i in 10" :key="i">
          <h4 class="heading">
            Şikayet Başlığı dolor sit amet, consectetur adipiscing elit. Duis
            dui.
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

    <div style="height: 300px"></div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({}),
  mounted() {
    console.log($('#most_talked_about .inner').slick)
    $('#most_talked_about .inner').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
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
    })
  },
}
</script>
