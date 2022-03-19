<style lang="scss" scoped>
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
</style>

<template>
  <section id="trending">
    <h1>Gündemdeki Şikayetler</h1>

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
                <span>12.123 <i class="fas fa-eye"></i></span>
              </div>
            </div>
            <div class="brand">
              <img src="../../static/trendyol.png" />
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
              <img src="../../static/customer.png" />
              <div>
                <b>Samet</b>
                <br />
                <span>12.123 <i class="fas fa-eye"></i></span>
              </div>
            </div>
            <div class="brand">
              <img src="../../static/trendyol.png" />
              <div>
                <b>Trendyol</b>
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
    const end = trendingSection.scrollWidth - trendingSection.clientWidth;
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