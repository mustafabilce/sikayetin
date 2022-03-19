<style lang="scss">
section {
  max-width: 100%;
  overflow-x: hidden;
  padding-inline: var(--section-padding-inline);
  cursor: default;

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
  padding-inline: var(--header-padding-inline);

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
        padding: 6px;

        @media (max-width: 1400px) {
          margin: 0 2px;
          padding: 4px;
        }

        &:not(.btn):hover {
          color: #00244c;
        }

        &#live_feed_button {
          outline: 3px solid rgba(255, 255, 255, 0.3);

          &:hover {
            outline-width: 9px;
          }
        }

        &.btn {
          background: #ff5777;
          border-radius: 100px;
          padding: 6px 20px;
          margin-left: 8px;

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
    cursor: default;

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
      position: relative;

      input {
        width: 100%;
        border-radius: 100px;
        padding: 20px 30px;
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

      button {
        background: rgb(255, 87, 119);
        background: linear-gradient(
          0,
          rgba(255, 87, 119, 1) 0%,
          rgba(255, 194, 71, 1) 100%
        );
        border-radius: 100%;
        position: absolute;
        top: -1px;
        right: 0;
        width: 65px;
        height: 65px;

        &:hover {
          font-size: 1.3em;
          transform: scale(1.1);
        }

        @media (max-width: 600px) {
          padding: 10px 15px;
          width: unset;
          height: unset;
        }
      }
    }

    #banner {
      position: absolute;
      top: 150px;
      right: var(--header-padding-inline);
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

      --wide-card-width: 30vw;
      --small-card-width: 22vw;
      --heading-font-size: 1.5em;
      --text-font-size: 1.2em;

      @media (max-width: 1300px) {
        --wide-card-width: 40vw;
        --small-card-width: 30vw;
        --heading-font-size: 1.2em;
        --text-font-size: 1.1em;
      }

      @media (max-width: 900px) {
        --wide-card-width: 280px;
        --small-card-width: 280px;
        --heading-font-size: 1.1em;
        --text-font-size: 1em;
      }

      &.row-1 .card:nth-child(odd),
      &.row-2 .card:nth-child(even) {
        min-width: var(--wide-card-width);
      }
      &.row-1 .card:nth-child(even),
      &.row-2 .card:nth-child(odd) {
        min-width: var(--small-card-width);
      }

      &.row-2 {
        padding-left: 80px;
        align-items: flex-start;
      }

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
          padding: 0 10px;
          font-size: var(--heading-font-size);
        }

        p {
          margin: 0 auto;
          padding: 20px 20px 0 20px;
          font-size: var(--text-font-size);

          @media (max-width: 1200px) {
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
        box-shadow: 0 0 8px rgba($color: #000000, $alpha: 0.1);
      }

      button {
        padding: 12px 30px;
        border-radius: 100px;
        background-color: #ff5777;
        color: white;
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

#counters {
  margin-block: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  .left {
    .heading {
      font-size: 2.5em;
      font-weight: 700;

      &,
      a {
        color: #111827;
      }
    }

    .text {
      font-size: 1.1em;
    }
  }

  .counts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .count {
      display: flex;
      align-items: center;
      gap: 20px;

      .icon {
        width: 36px;
      }

      .heading {
        font-weight: 700;
        font-size: 2em;
      }

      p {
        margin-bottom: 0 !important;
      }
    }
  }
}
</style>

<template>
  <div>
    <header>
      <nav>
        <a href="#">
          <img src="../static/logo-blue.png" id="logo" />
        </a>

        <div id="primary_nav">
          <a href="#">Şikayetler</a>
          <a href="#">Marka Rengi</a>
          <a href="#">Popüler 20</a>
          <a href="#" class="btn" id="live_feed_button">Canlı Akış</a>
        </div>

        <div id="secondary_nav">
          <a href="#">Giriş Yap</a>
          <span>|</span>
          <a href="#">Üye Ol</a>
          <a href="#" class="btn">Şikayet Yaz</a>
        </div>

        <fa :icon="['fas', 'bars']" style="font-size: 2em; cursor: pointer" />
      </nav>

      <div id="call_to_action">
        <h1>
          <span style="font-weight: 400">Şikayet.in varsa</span>
          <br />
          <span style="font-weight: 600">Çözüm de var!</span>
        </h1>

        <div id="search">
          <input type="text" placeholder="Marka, model, ürün ara" />
          <button class="btn">
            <fa :icon="['fas', 'magnifying-glass']" />
          </button>
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
            <h5>
              Şikayet Başlığı dolor sit amet, consectetur adipiscing elit.
            </h5>
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

      <div class="circle-big">
        <img src="../static/abstract-1.png" />
      </div>
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

    <section id="counters">
      <div class="left">
        <h2 class="heading">Sayılarla <a href="/">sikayet.in</a></h2>
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        </p>
      </div>
      <div class="counts">
        <div class="count" v-for="counter in counters" :key="counter.id">
          <img :src="counter.icon" class="icon" />
          <div class="content">
            <h4 class="heading">{{ counter.number }}{{ counter.append }}</h4>
            <p>{{ counter.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    initializedCounters: false,
    counters: [
      {
        id: 1,
        icon: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png',
        number: 10000,
        text: 'Massa enim mauris nunc.',
        append: '+',
      },
      {
        id: 2,
        icon: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png',
        number: 2,
        text: 'Mi vel proin a et.',
        append: ' Million',
      },
      {
        id: 3,
        icon: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png',
        number: 500,
        text: 'Phasellus magna feugiat.',
        append: '+',
      },
      {
        id: 4,
        icon: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png',
        number: 140,
        text: 'Mattis libero tortor arcu.',
        append: '',
      },
    ],
  }),
  methods: {
    InitializeSlick() {
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
    InitializeCounters() {
      for (const counter of this.counters) {
        const count = counter.number;
        const intervalCount = 100;
        const intervalDelay = 30;
        const interval = counter.number / intervalCount;
        counter.number = 0;

        setTimeout(async () => {
          for (let i = 0; i < intervalCount; i++) {
            counter.number = parseFloat((interval * i).toString().slice(0, 5));
            await new Promise((x) => setTimeout(() => x(), intervalDelay));
          }

          counter.number = parseInt(count);
        }, 100);
      }
    },
    IsVisible(elementSelector) {
      const el = document.querySelector(elementSelector);
      let rect = el.getBoundingClientRect();
      const top = rect.top;
      const height = rect.height;
      let parent = el.parentNode;
      if (rect.bottom < 0) return false;
      if (top > document.documentElement.clientHeight) return false;
      do {
        rect = parent.getBoundingClientRect();
        if (top <= rect.bottom === false) return false;
        if (top + height <= rect.top) return false;
        parent = parent.parentNode;
      } while (parent != document.body);
      return true;
    },
  },
  async mounted() {
    this.InitializeSlick();

    window.onscroll = () => {
      const visible = this.IsVisible('#counters');
      if (visible && !this.initializedCounters) {
        this.initializedCounters = true;
        this.InitializeCounters();
      }
    };
  },
};
</script>
