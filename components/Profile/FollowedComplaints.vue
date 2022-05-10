<template>
  <div class="followed-complaints">
    <ProfileHeader />
    <div class="row mt-5 mb-0">
      <div class="col-12">
        <h5 class="pb-3 border-bottom">Takip Ettiklerim <span class="gray-text">3</span></h5>
        <div class="items">
          <div class="item mt-3" v-for="complaint in myLikedComplaints" :key="complaint.id">
            <div class="card">
              <div class="card-body border rounded">
                <div class="row">
                  <div class="col-12">
                    <div class="d-flex justify-content-start align-items-center">
                      <b-avatar variant="danger" text="M" size="2em"></b-avatar>
                      <p class="d-inline-block mb-0 mx-2">Mustafa</p>
                      <fa class="mr-2 text-muted" :icon="['fas', 'arrow-trend-down']" />
                      <a href="#">Hepsiburada.com(TR)</a>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="mt-3 border-bottom">
                      <h5>Hepsiburada Verdiğim Sipariş Hala Kargoya Bile Verilmedi</h5>
                      <p class="gray-text small">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum rem voluptate vero error magni
                        pariatur ea, possimus repellat cupiditate atque, inventore ad minima quia quisquam tempora earum
                        labore. Ratione, repellendus.
                      </p>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="unf">
                      <fa class="mr-1" :icon="['fas', 'bookmark']" />
                      <span>Takipten Çıkar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import config from "../../config"

export default {
  data() {
    return {
      myLikedComplaints: [],
    };
  },
  created () {
    this.getMyLikedComplaints()
  },
  methods: {
    getMyLikedComplaints() {
      axios
        .get(`${config.apiURL}/brands/likes/user/${this.$store.state.userInfo.id}/`)
        .then((response) => {
          this.myLikedComplaints = response.data
        })
        .catch((error) => {
          this.errors.push(error);
        });
    },
  }
};
</script>

<style lang="scss" scoped>
.followed-complaints {
  height: 100%;
  padding: 30px 50px;
  background-color: #f4f5f9;
  border-radius: 0;
  .item {
    .card {
      .card-body {
        a {
          font-size: 12px;
          color: #ff5777;
        }
        h5 {
          font-size: 18px;
          margin-bottom: 8px;
        }
        .unf {
            margin-top: 12px;
            font-size: 12px;
        }
      }
    }
  }
}
</style>
