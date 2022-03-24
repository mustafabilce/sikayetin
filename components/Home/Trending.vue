<style lang="scss" scoped>
#trending {
  margin-top: 200px;

  .inner {
    display: flex;
    flex-direction: column;
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
      align-items: flex-end;

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
        padding-left: 80px;
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
          font-weight: 700;
          text-align: center;
          padding: 0 10px;
          font-size: var(--heading-font-size);
        }

        p {
          margin: 0 auto;
          padding: 20px 25px 0 25px;
          font-size: var(--text-font-size);

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

          .customer,
          .brand {
            display: flex;
            align-items: center;
            position: relative;

            @media (max-width: 1200px) {
              font-size: 0.85rem;
            }

            @media (max-width: 900px) {
              transform: scale(0.9);
            }

            &::after {
              content: '';
              display: block;
              position: absolute;
              bottom: 2px;
              left: 34px;
              width: 13px;
              height: 13px;
              background-image: url(../../static/verified.png);
              outline: 2px solid white;
              border-radius: 100%;

              @media (max-width: 900px) {
                left: 22px;
              }
            }

            b {
              font-size: 0.9em;
            }

            span {
              font-size: 0.9em;
              opacity: 0.7;
            }

            img {
              width: 42px;
              border-radius: 100%;

              @media (max-width: 900px) {
                width: 30px;
              }
            }
          }

          .brand {
            & > div {
              display: flex;
              flex-direction: column;
            }

            .star {
              margin-right: 3px;
              width: 12px;

              @media (max-width: 1200px) {
                margin-right: 2px;
                width: 9px;
              }
            }
          }

          .arrow {
            width: 36px;
            margin: 0 10px;

            @media (max-width: 1000px) {
              width: 24px;
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
    <h1>Hangi Şikayetler İlgi Çekti?</h1>

    <div class="inner">
      <div class="trending-row row-1">
        <div v-for="i in 10" :key="i" class="card">
          <h5>Şikayet Başlığı dolor sit amet, consectetur adipiscing elit.</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            bibendum risus, sit ac velit purus lectu
          </p>
          <div class="footer">
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
                <span style="white-space: nowrap">
                  <img
                    src="../../static/star.png"
                    class="star"
                    v-for="i in 5"
                    :key="i"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="trending-row row-2">
        <div v-for="i in 10" :key="i" class="card">
          <h5>Şikayet Başlığı dolor sit amet, consectetur adipiscing elit.</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            bibendum risus, sit ac velit purus lectu
          </p>
          <div class="footer">
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
                <span style="white-space: nowrap">
                  <img
                    src="../../static/star.png"
                    class="star"
                    v-for="i in 5"
                    :key="i"
                  />
                </span>
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
  data: () => ({
    hoveringTrendingCard: false,
  }),
  mounted() {
    const trendingSection = document.querySelector('#trending .inner');
    const end = trendingSection.scrollWidth - trendingSection.clientWidth - 10;
    let scrollDirection = 4;
    const pageScroll = () => {
      const speed = this.hoveringTrendingCard ? 0.25 : 1;
      trendingSection.scrollBy(scrollDirection * speed, 0);
      setTimeout(() => pageScroll(), 18);

      if (trendingSection.scrollLeft <= 1) {
        scrollDirection = 1;
      } else if (end <= trendingSection.scrollLeft) {
        scrollDirection = -1;
      }
    };
    pageScroll();
    const holder = document.querySelector('#trending .inner');
    holder.addEventListener('mouseenter', () => {
      this.hoveringTrendingCard = true;
    });
    holder.addEventListener('mouseleave', () => {
      this.hoveringTrendingCard = false;
    });
  },
};
</script>