<style lang="scss" scoped>
section.heading {
  margin-top: 150px;

  @media (max-width: 1400px) {
    margin-top: 100px;
  }

  @media (max-width: 900px) {
    margin-top: 70px;
    padding: 0 10px;
  }
}

#most_talked_about {
  position: relative;

  .inner {
    margin: 50px 0;

    .card {
      box-shadow: 0px 2px 4px -2px #1118270f, 0px 4px 8px -2px #1118271a;
      overflow-x: hidden;
      background: white;
      transform: scale(0.9);
      padding: 30px;
      border-radius: 30px;
      margin-top: 75px;
      height: 220px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .heading {
        font-weight: 700;
        font-size: 1rem;
        text-align: center;
      }

      .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        a {
          color: #000;
        }
      }

      p {
        font-size: .8em;
        padding: 30px 10px 10px 10px;
        max-width: 300px;
        margin: 0 auto;
        position: relative;
        text-indent: 20px;
        
        white-space: nowrap; 
        width: 100%; 
        overflow: hidden;
        text-overflow: ellipsis; 

        @media (max-width: 800px) {
          padding: 25px 0;
          text-align: center;
        }

        &::before {
          content: '';
          width: 17px;
          height: 14px;
          background: url(../../static/quotes.png);
          background-position: center;
          background-size: cover;
          display: block;
          position: absolute;
          left: 0;
        }
      }

      a.comment {
        color: #3fc2e0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 8px 0;
        opacity: 0.8;
        transition: 0.2s;
        font-size: 1.2rem;

        &:hover {
          opacity: 1;
        }

        img {
          width: 16px;
          display: inline-block;
        }
      }
    }
  }

  .abstract-circle,
  .abstract-left {
    position: absolute;
    top: 0px;
    bottom: 0;
    z-index: -1;
  }

  .abstract-left {
    left: 0;
    width: min(50vw, 800px);
    background: #ef476f;
    width: 900px;
    height: 400px;
    border-radius: 0 500px 500px 0;
  }

  .abstract-circle {
    left: calc(55vw + 180px);
    border-radius: 100%;
    width: 400px;
    height: 400px;
    background: #ffd166;
  }

  @media (max-width: 1400px) {
    .abstract-left {
      width: 60vw;
    }
  }
  @media (max-width: 900px) {
    .abstract-left {
      width: 100vw;
      border-radius: 0;
    }

    .abstract-circle {
      display: none;
    }
  }
}
</style>

<template>
  <div>
    <section class="heading">
      <h1 class="">En Çok Hangi Şikayetlere Yorum Yapıldı?</h1>
    </section>
    <section id="most_talked_about">
      <div class="inner">
        <div class="card" v-for="complaint in this.$store.state.allComplaints" :key="complaint.id">

          <NuxtLink to="/" class="comment">
            <img src="../../static/yorum.png" /> &nbsp; 12 Yorum
          </NuxtLink>
          <div class="footer mb-3">
            <div class="customer">
              <img class="mr-2" :src="complaint.user.photo" />
              <div>
                <NuxtLink to="/"><b>{{ complaint.user.name }}</b></NuxtLink>
              </div>
            </div>

            <fa :icon="['fas', 'arrow-right-arrow-left']" class="arrow" />

            <div class="brand">
              <img class="mr-2" :src="complaint.brand.logo" />
              <div>
                <NuxtLink :to="`/all-brands/${complaint.brand.id}`"><b>{{ complaint.brand.name }}</b></NuxtLink>
              </div>
            </div>
          </div>
          <h4 class="heading">
            <NuxtLink class="text-dark" :to="`/sikayetler/${complaint.id}`">{{complaint.title}}</NuxtLink>
          </h4>
          <!-- <p>
            {{complaint.text}}
          </p> -->
        </div>
      </div>

      <div class="abstract-left"></div>
      <div class="abstract-circle"></div>
    </section>
  </div>
</template>

<script>
export default {
  updated() {
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