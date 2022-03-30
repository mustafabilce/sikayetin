<style lang="scss" scoped>
body {
  background: red !important;
}

section.head {
  overflow: visible !important;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 400px;
  background: #ecfafe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  #search,
  h1 {
    transform: translateY(50%);
  }

  h1 {
    font-weight: 600;

    @media (max-width: 1000px) {
      font-size: 5vw;
    }

    @media (max-width: 600px) {
      font-size: 2em;
    }
  }

  #search {
    padding: 28px 32px;
    box-shadow: 0px 4px 10px 0px #dcf7ff;
    width: 800px;
    max-width: 100%;
    border-radius: 40px;
    margin-top: 45px;

    &::placeholder {
      color: #6c6e98;
    }
  }
}

section.content {
  display: flex;
  gap: 50px;
  $sidebar-breakpoint: 900px;

  @media (max-width: $sidebar-breakpoint) {
    flex-direction: column;
  }

  .sidebar.mobile {
    display: none;
    text-align: center;
    color: #50c7e1;
    font-weight: 700;
    font-size: 1.5em;

    @media (max-width: $sidebar-breakpoint) {
      display: block;
    }
  }

  .sidebar.desktop {
    min-width: 160px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: $sidebar-breakpoint) {
      display: none;
    }

    a {
      color: #11182780;
      position: relative;
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        color: #000;
      }

      &.active {
        color: #000;

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -20px;
          width: 8px;
          height: 8px;
          transform: translateY(-50%);
          background: #4ac5e1;
          border-radius: 100%;
        }
      }
    }
  }

  .questions {
    max-width: 100%;

    .question {
      margin-bottom: 50px;
      padding: 40px;
      border-radius: 15px;
      transition: 0.3s ease;

      p {
        margin: 0;
        transition: 0.3s ease;
      }

      .heading {
        font-weight: 500;
        font-size: 1.5em;
      }

      .text {
        margin-top: 30px;
        font-size: 1.1em;
        padding-right: 100px;

        @media (max-width: 1200px) {
          padding-right: 0;
          text-align: justify;
        }
      }

      &:not(.shown) {
        background: #ecfafe;
        cursor: pointer;

        .heading {
          font-size: 1.1em;
        }

        .text {
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          margin-top: 0;
        }
      }
    }
  }
}

#mobile_menu {
  position: fixed;
  left: 0;
  right: 0;
  top: 60px;
  bottom: 0;
  background: white;
  z-index: 99;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;

  a {
    font-size: 1.5em;
    font-weight: 700;
  }
}
</style>

<template>
  <div>
    <Header />
    <Breadcrumb
      :links="[
        { to: '/', text: 'Anasayfa' },
        { to: '/yardim', text: 'Yardım' },
      ]"
      style="z-index: 1"
    />

    <section class="head text-center">
      <h1 class="reveal-on-visible">Size Nasıl Yardımcı Olabiliriz ?</h1>

      <input type="text" id="search" placeholder="Yardım almak istediğiniz konuyu yazın" />
    </section>
    <div class="head-placeholder" style="height: 320px"></div>

    <section class="content">
      <div class="sidebar desktop">
        <a
          v-for="category in categories"
          @click="shownCategory = category"
          :class="{ active: category == shownCategory }"
          :key="category"
        >
          {{ category }}
        </a>
      </div>

      <div class="sidebar mobile" @click="ShowMobileMenu">
        {{ shownCategory }} &nbsp;
        <fa :icon="['fas', 'caret-down']" />
      </div>

      <div class="questions">
        <div
          class="question reveal-on-visible"
          :class="{ shown: shownQuestion == question.id }"
          v-for="question in questions.filter((x) => x.category == shownCategory)"
          :key="question.id"
          @click="shownQuestion = question.id"
        >
          <p class="heading">{{ question.title }}</p>
          <p class="text">{{ question.text }}</p>
        </div>
      </div>
    </section>

    <div id="mobile_menu" @click="ShowMobileMenu(false)">
      <a
        v-for="category in categories"
        @click.stop="
          shownCategory = category;
          ShowMobileMenu(false);
        "
        :class="{ active: category == shownCategory }"
        :key="category"
      >
        {{ category }}
      </a>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Home/Header.vue';
import Footer from '~/components/Footer.vue';
import Breadcrumb from '../components/Pieces/Breadcrumb.vue';
export default {
  components: { Header, Footer, Breadcrumb },
  data: () => ({
    shownQuestion: null,
    shownCategory: 'Üyelik',
    categories: ['Üyelik', 'Çözüm Aşaması'],
    questions: [
      {
        id: 1,
        title: 'Üye olmadan şikayet yazabilir miyim?',
        text: 'Sitemizde şikayet yazabilmek için üye olmanız gerekmektedir. Üye olmadan ve GSM doğrulaması yapılmadan şikayet yazılamamaktadır. Üyelik esnasında vereceğiniz iletişim bilgilerinin doğruluğunun şikayetlerinizin çözülmesi aşamasında çok önemli olduğunu lütfen unutmayınız!',
        category: 'Üyelik',
      },
      {
        id: 2,
        title: 'Neden üye olmam gerekiyor?',
        text: 'Sitemizde şikayet yazabilmek için üye olmanız gerekmektedir. Üye olmadan ve GSM doğrulaması yapılmadan şikayet yazılamamaktadır. Üyelik esnasında vereceğiniz iletişim bilgilerinin doğruluğunun şikayetlerinizin çözülmesi aşamasında çok önemli olduğunu lütfen unutmayınız!',
        category: 'Üyelik',
      },
      {
        id: 3,
        title: 'Üyelik ücretli midir?',
        text: 'Sitemizde şikayet yazabilmek için üye olmanız gerekmektedir. Üye olmadan ve GSM doğrulaması yapılmadan şikayet yazılamamaktadır. Üyelik esnasında vereceğiniz iletişim bilgilerinin doğruluğunun şikayetlerinizin çözülmesi aşamasında çok önemli olduğunu lütfen unutmayınız!',
        category: 'Üyelik',
      },
      {
        id: 4,
        title: 'Nasıl üye olurum?',
        text: 'Sitemizde şikayet yazabilmek için üye olmanız gerekmektedir. Üye olmadan ve GSM doğrulaması yapılmadan şikayet yazılamamaktadır. Üyelik esnasında vereceğiniz iletişim bilgilerinin doğruluğunun şikayetlerinizin çözülmesi aşamasında çok önemli olduğunu lütfen unutmayınız!',
        category: 'Üyelik',
      },
      {
        id: 5,
        title: 'Üye olmadan şikayet yazabilir miyim?',
        text: 'Sitemizde şikayet yazabilmek için üye olmanız gerekmektedir. Üye olmadan ve GSM doğrulaması yapılmadan şikayet yazılamamaktadır. Üyelik esnasında vereceğiniz iletişim bilgilerinin doğruluğunun şikayetlerinizin çözülmesi aşamasında çok önemli olduğunu lütfen unutmayınız!',
        category: 'Üyelik',
      },
      {
        id: 6,
        title: 'Neden üye olmam gerekiyor?',
        text: 'Sitemizde şikayet yazabilmek için üye olmanız gerekmektedir. Üye olmadan ve GSM doğrulaması yapılmadan şikayet yazılamamaktadır. Üyelik esnasında vereceğiniz iletişim bilgilerinin doğruluğunun şikayetlerinizin çözülmesi aşamasında çok önemli olduğunu lütfen unutmayınız!',
        category: 'Üyelik',
      },
      {
        id: 7,
        title: 'Üyelik ücretli midir?',
        text: 'Sitemizde şikayet yazabilmek için üye olmanız gerekmektedir. Üye olmadan ve GSM doğrulaması yapılmadan şikayet yazılamamaktadır. Üyelik esnasında vereceğiniz iletişim bilgilerinin doğruluğunun şikayetlerinizin çözülmesi aşamasında çok önemli olduğunu lütfen unutmayınız!',
        category: 'Üyelik',
      },
      {
        id: 8,
        title: 'Nasıl üye olurum?',
        text: 'Sitemizde şikayet yazabilmek için üye olmanız gerekmektedir. Üye olmadan ve GSM doğrulaması yapılmadan şikayet yazılamamaktadır. Üyelik esnasında vereceğiniz iletişim bilgilerinin doğruluğunun şikayetlerinizin çözülmesi aşamasında çok önemli olduğunu lütfen unutmayınız!',
        category: 'Üyelik',
      },
      {
        id: 9,
        title: 'Üye olurken neden ad soyadı bilgisi isteniyor?',
        text: 'Sitemizde şikayet yazabilmek için üye olmanız gerekmektedir. Üye olmadan ve GSM doğrulaması yapılmadan şikayet yazılamamaktadır. Üyelik esnasında vereceğiniz iletişim bilgilerinin doğruluğunun şikayetlerinizin çözülmesi aşamasında çok önemli olduğunu lütfen unutmayınız!',
        category: 'Çözüm Aşaması',
      },
      {
        id: 10,
        title: 'Telefon bilgim neden isteniyor?',
        text: 'Sitemizde şikayet yazabilmek için üye olmanız gerekmektedir. Üye olmadan ve GSM doğrulaması yapılmadan şikayet yazılamamaktadır. Üyelik esnasında vereceğiniz iletişim bilgilerinin doğruluğunun şikayetlerinizin çözülmesi aşamasında çok önemli olduğunu lütfen unutmayınız!',
        category: 'Çözüm Aşaması',
      },
    ],
  }),
  methods: {
    ShowMobileMenu(show = true) {
      if (show) {
        $('#mobile_menu').show();
      } else {
        $('#mobile_menu').hide();
      }
    },
  },
  mounted() {
    document.body.style.background = 'white';
    $('#mobile_menu').hide();
  },
};
</script>