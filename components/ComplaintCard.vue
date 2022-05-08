<template>
  <div class="complaint border rounded mt-4">
    <div class="customer-and-brand mb-4">
      <div class="customer">
        <img class="mr-2" v-if="user" :src="user" />
        <b-avatar class="mr-2" v-else></b-avatar>
        <div>
          <b v-if="user">{{user}}</b>
          <b v-else>Unkown</b>
          <br />
          <span style="white-space: nowrap">
            12.123&nbsp;
            <fa :icon="['fas', 'eye']" style="display: inline" />
          </span>
        </div>
      </div>
    </div>
    <h4 class="title">{{ title }}</h4>
    <p class="text">{{ text }}</p>
    <div class="row mb-3" v-if="image">
      <div class="col-6">
        <img class="img-fluid" :src="image" alt="" />
      </div>
    </div>

    <div class="footer">
      <div class="actions">
        <div class="input-group rounded like-button">
          <div class="input-group-append">
            <span class="input-group-text">
              <img src="../static/like.svg" />
            </span>
          </div>
          <button class="btn-sm">Beğen</button>
        </div>

        <div class="input-group rounded like-button">
          <div class="input-group-append">
            <span class="input-group-text">
              <img src="../static/comment.svg" />
            </span>
          </div>
          <button class="btn-sm">Yorum</button>
        </div>

        <div class="input-group rounded like-button">
          <div class="input-group-append">
            <span class="input-group-text">
              <img src="../static/follow.svg" />
            </span>
          </div>
          <button class="btn-sm">Takip</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import config from '../config'
export default {
  props: {
    title: String,
    text: String,
    image: String,
    value: Boolean,
    user: String,
    brand: String,
  },
  data() {
    return {
      
    };
  },
  // created() {
  //   this.getUser();
  // },
  // methods: {
  //   getUser() {
  //     axios
  //       .get(`${config.apiURL}/users/users/${this.user}/`)
  //       .then((response) => ((this.user = response.data)))
  //       .catch((error) => {
  //         console.log(error)
  //       });
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.complaint {
  padding: 30px;
  border-radius: 8px;

  .title {
    font-weight: 700;
    font-size: 18px;
  }

  .text {
    font-weight: 400;
    font-size: 14px;
    margin: 20px 0;
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
    justify-content: space-between;
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
          padding: 6px 10px;
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
        border-radius: 0.25rem !important;
      }

      .like-button.active {
        --background: #b9e1ff;
      }
    }
  }
}
</style>
