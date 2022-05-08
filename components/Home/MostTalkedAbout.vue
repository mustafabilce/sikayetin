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
      margin-top: 50px;
      height: 300px;
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
        font-size: .8rem;

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
      <h1 class="reveal-on-visible">En Çok Hangi Şikayetlere Yorum Yapıldı?</h1>
    </section>
    <section id="most_talked_about">
      <div class="inner">
        <div class="card" v-for="complaint in this.$store.state.allComplaints" :key="complaint.id">
          <h4 class="heading reveal-on-visible">
            {{complaint.title}}
          </h4>
          <p class="reveal-on-visible delay-2">
            {{complaint.text}}
          </p>
          <a href="#" class="comment reveal-on-visible delay-3">
            <img src="../../static/yorum.png" /> &nbsp; 12 Yorum
          </a>
          <div class="footer reveal-on-visible delay-4">
            <div class="customer">
              <img :src="complaint.user.photo" />
              <div>
                <b>{{ complaint.user.name }}</b>
                <br />
                <span style="white-space: nowrap">
                  12.123&nbsp;
                  <fa :icon="['fas', 'eye']" style="display: inline" />
                </span>
              </div>
            </div>

            <img src="../../static/arrow.svg" class="arrow" />

            <div class="brand">
              <img :src="complaint.brand.logo" />
              <div>
                <b>{{ complaint.brand.name }}</b>
                <div class="stars">
                  <img src="../../static/star.svg" class="star" v-for="i in 5" :key="i" />
                </div>
              </div>
            </div>
          </div>
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