<template>
  <div class="followed-complaints">
    <ProfileHeader />
    <div v-if="myComplaints.length > 0" class="row mt-5 mb-0">
      <div class="col-12">
        <h5 class="pb-3 border-bottom">Takip Ettiklerim <span class="gray-text">3</span></h5>
        <div class="items">
          <div class="item mt-3" v-for="complaint in myLikedComplaints" :key="complaint.id">
            <div class="card">
              <div class="card-body border rounded">
                <div class="row">
                  <div class="col-12">
                    <div class="d-flex justify-content-start align-items-center"> 
                      <b-avatar v-if="complaint.user.name" variant="link" :src="complaint.user.photo" size="2em"></b-avatar>
                      <b-avatar v-else variant="info" :text="complaint.user.name.charAt(0)" size="2em"></b-avatar>
                      <p class="d-inline-block mb-0 mx-2">{{complaint.user.name}}</p>
                      <fa class="mr-2 text-muted" :icon="['fas', 'arrow-trend-down']" />
                      <a href="#">{{complaint.complaint.brand.name}}</a>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="mt-3 border-bottom">
                      <h5>{{complaint.complaint.title}}</h5>
                      <p class="gray-text small">{{complaint.complaint.text}}</p>
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
    this.test()
  },
  methods: {
    getMyLikedComplaints() {
      axios
        .get(`${config.apiURL}/brands/likes/user/${this.$store.state.userInfo.id}/`)
        .then((response) => {
          if(response === "Kullanıcının beğendiği bir gönderi bulunmamaktadır") {
            console.log("YOK!")
          } else {
            this.myLikedComplaints = response.data
          }
        })
        .catch((error) => {
          this.errors.push(error);
        });
    },
    test() {
      axios
        .get(`${config.apiURL}/brands/give-star/e7976f3f-3dec-4be3-ac71-3f6cf65cc017`)
        .then((response) => {
          console.log(response)
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
