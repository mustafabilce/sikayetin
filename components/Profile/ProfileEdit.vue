<template>
  <div class="profile-edit">
    <ProfileHeader />
    <div class="row mt-5 mb-0">
      <div class="col-8 mx-auto">
        <div class="profile-info">
          <div class="profile-brief justify-content-center">
            <div class="border rounded-circle p-4 mr-3" style="background-color: #fff">
              <img :src="this.$store.state.userInfo.photo" id="logo" />
            </div>
            <div>
              <h4>{{ this.$store.state.userInfo.name }} {{ this.$store.state.userInfo.surname }}</h4>
              <p>{{ this.$store.state.userInfo.email }}</p>
            </div>
          </div>
          <div class="mt-5">
            <div class="row">
              <div class="col-3 text-center">
                <p class="small gray-text mb-2">Şikayetlerin</p>
                <h5 class="gray-text">{{userStatistics.complaint_num}}</h5>
              </div>
              <div class="col-3 text-center border-left">
                <p class="small gray-text mb-2">Beğenilerin</p>
                <h5 class="gray-text">{{userStatistics.like_num}}</h5>
              </div>
              <div class="col-3 text-center border-right border-left">
                <p class="small gray-text mb-2">Yorumların</p>
                <h5 class="gray-text">{{userStatistics.comment_num}}</h5>
              </div>
              <div class="col-3 text-center">
                <p class="small gray-text mb-2">Takip Ettiklerin</p>
                <h5 class="gray-text">0</h5>
              </div>
            </div>
          </div>
        </div>
        <ProfileStr class="mt-5" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import config from "../../config"
import ProfileHeader from '~/components/Profile/ProfileHeader.vue';
import ProfileStr from '~/components/Profile/ProfileStr.vue';
export default {
  components: { ProfileHeader, ProfileStr },
  data() {
    return {
      userStatistics: [],
    };
  },
  created () {
    this.getUserStatistics()
  },
  methods: {
    getUserStatistics() {
      axios
        .get(`${config.apiURL}/users/statistics/user/${this.$store.state.userInfo.id}/`)
        .then((response) => {
          this.userStatistics = response.data
        })
        .catch((error) => {
          this.errors.push(error);
        });
    },
  }
};
</script>

<style lang="scss" scoped>
.profile-edit {
  height: 100%;
  padding: 30px 50px;
  background-color: #f4f5f9;
  border-radius: 0;
  .profile-info {
    .profile-brief {
      display: flex;
      align-items: center;
      img {
        max-width: 75px;
        max-height: 75px;
      }
    }
    .static-inputs {
      label {
        font-size: 14px;
        margin-bottom: 5px;
        margin-left: 5px;
      }
      .edit-info {
        color: #3ad08f;
        font-size: 11px;
        margin-right: 5px;
      }
    }
  }
}
</style>
