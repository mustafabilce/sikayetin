<style lang="scss" scoped>
section.top {
  position: relative;

  @media (min-width: 1600px) {
    --section-padding-inline: 16vw;
  }

  @media (max-width: 700px) {
    text-align: center;
  }

  h1 {
    margin-top: 50px;

    b {
      color: #ff5777;
      font-weight: 700;
      display: block;
      margin-bottom: 15px;
    }

    span {
      color: #00244c;
      font-weight: 500;
    }
  }

  p {
    color: #111827;
    width: 600px;
    max-width: 100%;
    margin-top: 70px;
    font-size: 1.05em;
    line-height: 1.6em;
  }

  img.abstract {
    position: absolute;
    right: var(--section-padding-inline);
    top: 0;
    width: 402px;
    z-index: -1;
    transform: translateY(-50px);
    max-width: 80%;

    @media (max-width: 1150px) {
      opacity: 0.5;
    }

    @media (max-width: 900px) {
      left: 50%;
      transform: translate(-50%, -50px);
      opacity: 0.2;
      display: none;
    }
  }
}

section.content {
  margin-top: 150px;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-bottom: 50px;

    .category {
      color: #424242;
      font-weight: 700;
      position: relative;
      text-align: center;

      &.active {
        color: #ff5777;
        font-size: 1.1em;

        &::after {
          content: '';
          width: calc(100% + 20px);
          display: block;
          background: red;
          height: 1px;
          margin-top: 4px;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }

  .article {
    background: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    color: #2b2c34;

    &:hover {
      transform: scale(1.04);
    }

    &,
    & > img {
      border-radius: 12px;
    }

    & > img {
      max-width: 100%;
    }

    & > b {
      font-size: 1.3em;
      margin-top: 20px;
    }

    & > p {
      margin-top: 8px;
      font-size: 0.85em;
    }

    .author {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-top: 20px;

      img {
        width: 52px;
        height: 52px;
      }
    }
  }

  main {
    display: grid;
    grid-template-areas:
      'a b'
      'a c';
    height: 400px;
    gap: 20px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      grid-template-areas: unset;
      height: unset;
    }

    .article {
      width: 100%;
      height: 100%;

      @media (max-width: 900px) {
        grid-area: unset !important;
        height: 200px;
      }

      &:nth-child(1) {
        grid-area: a;
      }
      &:nth-child(2) {
        grid-area: b;
      }
      &:nth-child(3) {
        grid-area: c;
      }
    }
  }

  .article-group {
    margin-top: 80px;

    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 600px) {
        flex-direction: column;
      }

      .heading {
        font-weight: 700;
        font-size: 1.4em;
        position: relative;

        &::after {
          content: '';
          display: inline-block;
          width: 35px;
          height: 1px;
          position: absolute;
          top: 50%;
          transform: translate(20px, -50%);
          background: black;

          @media (max-width: 600px) {
            display: none;
          }
        }
      }

      a {
        font-weight: 500;
        color: black;
        font-size: 1.2em;
      }
    }

    .articles {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin-top: 20px;
      align-items: center;

      @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 600px) {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>

<template>
  <div>
    <Header />
    <Breadcrumb
      :links="[
        { to: '/', text: 'Anasayfa' },
        { to: '/blog', text: 'Blog' },
      ]"
      style="z-index: 1"
    />

    <section class="top">
      <h1>
        <b>Blog Post</b>
        <span>Lorem Ipsum</span>
      </h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis bibendum risus, sit ac velit purus lectu
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis bibendum risus, sit ac velit purus
      </p>

      <Author />

      <img src="../../static/blog-abstract.svg" class="abstract" />
    </section>

    <section class="content">
      <nav>
        <span class="category" :class="{ active: activeCategory == '' }" @click="activeCategory = ''">All</span>
        <span
          class="category"
          :class="{ active: activeCategory == category }"
          v-for="category in categories"
          :key="category"
          @click="activeCategory = category"
        >
          {{ category }}
        </span>
      </nav>

      <main>
        <NuxtLink to="/blog/Makale%20Başlığı" class="article reveal-on-visible"></NuxtLink>
        <NuxtLink to="/blog/Makale%20Başlığı" class="article reveal-on-visible"></NuxtLink>
        <NuxtLink to="/blog/Makale%20Başlığı" class="article reveal-on-visible"></NuxtLink>
      </main>

      <div class="article-group featured" v-for="_ in 3" :key="_">
        <div class="head">
          <h4 class="heading">Featured Article</h4>

          <a href="#">See All Articles &nbsp; <fa :icon="['fas', 'angle-right']" /></a>
        </div>

        <NuxtLink to="/blog/Makale%20Başlığı" class="articles">
          <div class="article reveal-on-visible" v-for="_ in 4" :key="_">
            <img src="../../static/blog-placeholder.png" />
            <b>Lorem Ipsum</b>
            <p>Facilisis bibendum risus, sit ac velit purus lectu</p>
            <div class="author">
              <img src="../../static/customer-2.png" width="52" />
              <div class="d-flex flex-column">
                <b>Dasteen</b>
                <small>Jan 10, 2022</small>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Home/Header.vue';
import Footer from '~/components/Footer.vue';
import Breadcrumb from '~/components/Breadcrumb.vue';
import Author from '~/components/Author.vue';
export default {
  components: { Header, Footer, Breadcrumb, Author },
  data: () => ({
    activeCategory: '',
    categories: ['UI Design', 'UX Design', 'Product Design', 'Articles', 'Tutorials', 'News'],
  }),
};
</script>