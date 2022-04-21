<style lang="scss" >
#trending {
  margin-top: 200px;

  .inner {
    display: flex;
    flex-direction: column;
    padding: 25px 0;

    width: 100vw;
    box-sizing: border-box;
    overflow-x: hidden;
    margin: 20px 0;
    margin-left: var(--section-padding-inline-negative);

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
      align-items: flex-end;
      max-width: 100vw;
      width: 100vw !important;
      overflow-x: scroll;

      .customer,
      .brand {
        @media (max-width: 1200px) {
          font-size: 0.85rem;
        }

        @media (max-width: 900px) {
          transform: scale(0.9);
        }
      }

      &::-webkit-scrollbar {
        display: none;
      }

      --wide-card-width: 35vw;
      --small-card-width: 26vw;
      --heading-font-size: 1.5em;
      --text-font-size: 1.2em;

      @media (max-width: 1400px) {
        --wide-card-width: 42vw;
        --small-card-width: 34vw;
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
        align-items: flex-start;
      }

      .card {
        background-color: white;
        padding: 30px;
        box-shadow: 0px 2px 4px -2px #1118270f, 0px 4px 8px -2px #1118271a;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 25px;
        position: relative;

        @media (max-width: 1300px) {
          margin: 10px;
        }

        h5 {
          font-weight: 600;
          text-align: center;
          padding: 0 10px;
          font-size: 1.2rem;
        }

        p {
          margin: 0 auto;
          padding: 20px 25px 0 25px;
          font-size: 1rem;

          &::before {
            content: '';
            width: 17px;
            height: 14px;
            background: url(../../static/quotes.png);
            background-position: center;
            background-size: cover;
            display: block;
            position: absolute;
            left: 20px;
          }

          @media (max-width: 1200px) {
            text-align: center;
            padding: 10px 10px 0 10px;
          }
        }

        .footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 290px;
          margin: 20px auto 0 auto;

          & > * > img {
            margin-right: 10px;
          }

          .arrow {
            @media (max-width: 1000px) {
              margin: 0;
              margin-right: 5px;
              width: 20px;
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <section id="trending">
    <h1 class="reveal-on-visible delay-4">Hangi Şikayetler İlgi Çekti?</h1>

    <div class="inner">
      <div class="trending-row row-1">
        <div v-for="i in 10" :key="i" class="card">
          <h5 class="reveal-on-visible">Şikayet Başlığı dolor sit amet, consectetur adipiscing elit.</h5>
          <p class="reveal-on-visible delay-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis bibendum risus, sit ac velit purus lectu
          </p>
          <div class="footer reveal-on-visible delay-3">
            <div class="customer">
              <img src="../../static/customer.png" />
              <div>
                <b>Samet</b>
                <br />
                <span style="white-space: nowrap">
                  12.123&nbsp;
                  <fa :icon="['fas', 'eye']" style="display: inline" />
                </span>
              </div>
            </div>

            <img src="../../static/arrow.svg" class="arrow" />

            <div class="brand">
              <img src="../../static/trendyol.png" />
              <div>
                <b>Trendyol</b>
                <div class="stars">
                  <img src="../../static/star.svg" class="star" v-for="i in 5" :key="i" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="trending-row row-2">
        <div v-for="i in 10" :key="i" class="card">
          <h5 class="reveal-on-visible">Şikayet Başlığı dolor sit amet, consectetur adipiscing elit.</h5>
          <p class="reveal-on-visible delay-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis bibendum risus, sit ac velit purus lectu
          </p>
          <div class="footer reveal-on-visible delay-3">
            <div class="customer">
              <img src="../../static/customer.png" />
              <div>
                <b>Samet</b>
                <br />
                <span style="white-space: nowrap">
                  12.123&nbsp;
                  <fa :icon="['fas', 'eye']" style="display: inline" />
                </span>
              </div>
            </div>

            <img src="../../static/arrow.svg" class="arrow" />

            <div class="brand">
              <img src="../../static/trendyol.png" />
              <div>
                <b>Trendyol</b>
                <div class="stars">
                  <img src="../../static/star.svg" class="star" v-for="i in 5" :key="i" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    Scroll(element, reverse, speed = 0.5) {
      const end = element.scrollWidth - element.clientWidth - 10;

      if (reverse) {
        $(element).scrollLeft(end - 20);
      } else {
        $(element).scrollLeft(0);
      }

      let scrollDirection = 2;
      let velocity = speed;
      const pageScroll = () => {
        element.scrollBy(scrollDirection * velocity, 0);
        setTimeout(() => pageScroll(), 20);

        if (element.scrollLeft <= 10) {
          velocity = speed;
        } else if (element.scrollLeft >= end - 10) {
          velocity = speed * -1;
        }
      };
      pageScroll();
    },
  },
  mounted() {
    this.Scroll(document.querySelector('#trending .inner .row-1'), false);
    this.Scroll(document.querySelector('#trending .inner .row-2'), true);
  },
};
</script>