<style lang="scss" scoped>
#trending {
  position: relative;

  .inner {
    padding: 50px;
    margin-top: 20px;
    position: relative;

    @media (max-width: 768px) {
      padding: 40px 20px;
    }

    .slides {
      padding: 0 80px;

      @media (max-width: 900px) {
        padding: 0;
        margin-top: 50px;
        margin-bottom: 0;
      }

      .slide {
        border: 1px solid #f5fdff;
        border-radius: 8px;
        color: white;
        padding: 20px;
        margin: 0 10px;
        box-shadow: 0px 2px 4px -2px #1118270f, 0px 4px 8px -2px #1118271a;

        .heading {
          text-align: center;
          font-weight: 500;
          font-size: 1.2rem;
        }

        .footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-wrap: wrap;
          width: 100%;
          max-width: 300px;
          margin: 30px auto 0 auto;
          @media (max-width: 768px) {
            justify-content: flex-start;
          }
        }
      }
    }
  }

  .background {
    position: absolute;
    left: 0;
    right: 0;
    top: 75px;
    bottom: 0;
    background: #5379ff;
    border-radius: 0;
    max-width: 100%;

    @media (max-width: 900px) {
      top: 0px;
      bottom: 0px;
      right: 0px;
      left: 0;
      border-radius: 0;
    }

    @media (max-width: 525px) {
      top: 110px;
    }
  }

  .slick-button {
    background: transparent;
    border: 2px solid #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: inline-grid;
    place-items: center;
    color: #fff;
    font-size: 1.3em;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: 900px) {
      display: none !important;
    }

    &.prev-button {
      left: 30px;
    }
    &.next-button {
      right: 30px;
    }
  }
}

#all {
  overflow: visible !important;

  @media (max-width: 1400px) {
    .heading {
      justify-content: flex-end !important;

      .left {
        width: 100%;
      }
    }
  }

  @media (max-width: 900px) {
    margin-top: 50px !important;
    .heading {
      justify-content: center !important;
      align-items: center !important;
      flex-direction: column;

      .left {
        width: unset;
      }

      .right {
        align-items: center !important;
        flex-direction: column;
      }
    }
  }

  @media (max-width: 600px) {
    margin-top: 20px !important;
  }

  .complaint {
    padding: 30px;
    background: white;
    margin-bottom: 50px;

    .title {
      font-weight: 700;
      font-size: 18px;
      color: #00244c;
    }

    .text {
      font-weight: 400;
      font-size: 14px;
      margin: 20px 0;
      color: #555;
    }

    .customer-and-brand {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 300px;
    }

    .arrow {
      width: 36px;
      margin: 0 10px;
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 15px;
      flex-wrap: wrap;

      @media (max-width: 1100px) {
        flex-direction: column;
        gap: 30px;
      }

      .customer-and-brand {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 300px;
      }

      .actions {
        display: flex;
        gap: 15px;
        justify-content: center;

        @media (max-width: 800px) {
          gap: 6px;
        }

        .btn-sm {
          font-size: 12px;
        }

        .input-group {
          width: unset;
          padding: 8px 14px;

          @media (max-width: 768px) {
            padding: 8px 15px;
            font-size: 0.8em;

            .input-group-append img {
              width: 16px;
            }
          }

          button {
            display: inline-block;
            width: unset;
            padding: 0;
            margin-left: 10px;
          }

          .input-group-text {
            padding: 0;
          }

          @media (max-width: 800px) {
          }
        }

        .like-button {
          border-radius: 30px;
          border: none !important;
          background-color: #00244c !important;
          color: #fff;
          .input-group-append {
            background: #00244c !important;
            span {
              background: #00244c !important;
            }
          }
          .btn-sm {
            background-color: #00244c !important;
            color: #fff !important;
          }
        }

        .like-button.active {
          --background: #b9e1ff;
        }
      }
    }
  }
}
.sort-by {
  input {
    cursor: pointer;
  }
}
.dropdown-item {
  font-size: 12px;
  text-align: left;
  padding: 0.25rem 0rem;
  .form-check-input {
    margin-top: 0.2rem;
  }
}
</style>

<template>
  <div>
    <Header active="sikayetler" />
    <Breadcrumb
      class="breadcrumb-style"
      :links="[
        { to: '/', text: 'Anasayfa' },
        { to: '/sikayetler', text: 'Şikayetler' },
      ]"
      style="z-index: 1"
    />

    <div class="heading-circles">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
    </div>

    <section id="trending" class="mt-0">
      <div class="background"></div>
    </section>

    <section id="all">
      <div class="row">
        <div class="col-12 mb-5">
          <div class="left d-flex flex-wrap align-items-center" style="gap: 20px">
            <h2 class="text-dark-blue">Şikayetler</h2>
            <span class="text-gray-2">{{this.$store.state.allComplaints.length}} şikayet</span>
          </div>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12 col-12">
          <div
            class="heading d-flex align-items-center flex-wrap align-items-center justify-content-between"
            style="gap: 20px"
          ></div>

          <div
            class="complaint shadow rounded-30"
            v-for="complaint in this.$store.state.allComplaints"
            :key="complaint.id"
          >
            <div class="customer-and-brand mb-4">
              <div class="customer">
              <div v-if="complaint.user.photo">
                <img :src="complaint.user.photo" />
              </div>
              <div v-else-if="complaint.user.photo === null">
                <b-avatar class="mr-2" src="https://placekitten.com/300/300"></b-avatar>
              </div>
                <div>
                  <b>{{complaint.user.name}}</b>
                  <br />
                  <span style="white-space: nowrap">
                    12.123&nbsp;
                    <fa :icon="['fas', 'eye']" style="display: inline" />
                  </span>
                </div>
              </div>

                  <fa :icon="['fas', 'arrow-right-arrow-left']" class="arrow" />

              <div class="brand">
                <img :src="complaint.brand.logo" />
                <div>
                  <b>{{complaint.brand.name}}</b>
                  <div class="stars">
                    <img src="../../static/star.svg" class="star" v-for="i in 5" :key="i" />
                  </div>
                </div>
              </div>
            </div>
            <h4 class="title">{{ complaint.title }}</h4>
            <p class="text">{{ complaint.text }} <NuxtLink :to="`/sikayetler/${complaint.id}`">Devamını Gör</NuxtLink></p>

            <div class="footer justify-content-between align-items-center">
              <div class="actions">
                <div
                  class="input-group rounded like-button"
                  :class="{ active: complaint.liked }"
                  @click="complaint.liked = !complaint.liked"
                >
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <fa color="#fff" :icon="['fas', 'thumbs-up']" />
                    </span>
                  </div>
                  <button class="btn-sm">Beğen</button>
                </div>

                <div class="input-group rounded like-button">
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <fa color="#fff" :icon="['fas', 'comment']" />
                    </span>
                  </div>
                  <button class="btn-sm">Yorum</button>
                </div>

                <div class="input-group rounded like-button">
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <fa color="#fff" :icon="['fas', 'bookmark']" />
                    </span>
                  </div>
                  <button class="btn-sm">Takip</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-12">
          <FilterBox />
          <AdsDemo />
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import config from '../../config';
import Header from '~/components/Home/Header.vue';
import Footer from '~/components/Footer.vue';
import FilterBox from '~/components/FilterBox.vue';
import AdsDemo from '~/components/AdsDemo.vue';

export default {
  components: { Header, Footer, FilterBox, AdsDemo },
  data: () => ({
    complaints: [],
    user: [],
    brand: [],
  }),
  mounted() {
    $('#trending .inner .slides').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: $('.prev-button'),
      nextArrow: $('.next-button'),
      responsive: [
        {
          breakpoint: 1200,
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
            dots: false,
          },
        },
      ],
    });
  },
};
</script>
