<style lang="scss" scoped>
#counters {
  margin-block: 200px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;

  @media (max-width: 1200px) {
    flex-direction: column;
    margin-block: 100px;
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
  <section id="counters">
    <div class="left">
      <h2 class="heading reveal-on-visible">Sayılarla <a href="/">sikayet.in</a></h2>
      <p class="text reveal-on-visible delay-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas</p>
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
</template>

<script>
const icon1 = require('../../static/counter-icons/1.png');
const icon2 = require('../../static/counter-icons/2.png');
const icon3 = require('../../static/counter-icons/3.png');
const icon4 = require('../../static/counter-icons/4.png');

export default {
  data: () => ({
    counters: [
      {
        id: 1,
        icon: icon1,
        number: 10000,
        text: 'Massa enim mauris nunc.',
        append: '+',
      },
      {
        id: 2,
        icon: icon2,
        number: 2,
        text: 'Mi vel proin a et.',
        append: ' Million',
      },
      {
        id: 3,
        icon: icon3,
        number: 500,
        text: 'Phasellus magna feugiat.',
        append: '+',
      },
      {
        id: 4,
        icon: icon4,
        number: 140,
        text: 'Mattis libero tortor arcu.',
        append: '',
      },
    ],
  }),
  methods: {
    IsVisible(elementSelector) {
      const el = document.querySelector(elementSelector);
      let { top, bottom } = el.getBoundingClientRect();
      return bottom >= 0 && top <= document.documentElement.clientHeight;
    },
    ScrollEvent() {
      const visible = this.IsVisible('#counters');
      if (visible) {
        window.removeEventListener('scroll', this.ScrollEvent);

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
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.ScrollEvent);
  },
};
</script>