<template>
  <div class="complaint border rounded mt-4">
    <div class="customer-and-brand mb-4">
      <div class="customer">
        <img src="../static/customer.png" />
        <div>
          <b>Samet</b>
          <br />
          <span style="white-space: nowrap">
            12.123&nbsp;
            <fa :icon="['fas', 'eye']" style="display: inline" />
          </span>
        </div>
      </div>

      <img src="../static/arrow.svg" class="arrow" />

      <div class="brand">
        <img src="../static/trendyol.png" />
        <div>
          <b>Trendyol</b>
          <div class="stars">
            <img src="../static/star.svg" class="star" v-for="i in 5" :key="i" />
          </div>
        </div>
      </div>
    </div>
    <h4 class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
    <p class="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus, integer lectus turpis dui. Consectetur dignissim
      ultrices enim eget aliquam, volutpat, diam. Vulputate morbi felis, ornare arcu augue ut purus ut. Nibh enim ut sed
      sit sollicitudin diam elementum. Quis laoreet justo eget sit ut diam orci quisque mattis. Gravida scelerisque
      posuere purus nulla lobortis feugiat cursus nibh. Faucibus dignissim adipiscing amet, est semper mauris tincidunt
      sit lacus. Odio nulla eu et mauris, pharetra elit non commodo. Purus pellentesque eu, non etiam tellus nec eu
      nisl. Hendrerit tellus ut quam mattis tellus tincidunt consectetur. Felis morbi auctor augue aliquam.
    </p>

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
export default {};
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
