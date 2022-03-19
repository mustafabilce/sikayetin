<style lang="scss" scoped>
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
</template>

<script>
export default {
  data: () => ({
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
    ScrollEvent() {
      console.log('scroll');

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
              counter.number = parseFloat(
                (interval * i).toString().slice(0, 5)
              );
              await new Promise((x) => setTimeout(() => x(), intervalDelay));
            }

            counter.number = parseInt(count);
          }, 100);
        }
      }
    },
  },
  mounted() {
    // Counters
    window.addEventListener('scroll', this.ScrollEvent);
  },
};
</script>