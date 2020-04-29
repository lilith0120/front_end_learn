<template>
  <div id="person">
    <div id="Profile">
      <div id="title">Profile</div>

      <div id="search_message">
        <el-input
          class="search_input"
          placeholder="Search for messages or users..."
          suffix-icon="el-icon-search"
          v-model="search_input"
          clearable
        ></el-input>
      </div>

      <div id="profile_name">
        <el-card class="card_name" shadow="never">
          <div id="avatar">
            <el-avatar :size="90" fit="contain" :src="avatar_url" :key="avatar_url"></el-avatar>
          </div>

          <div id="name">{{user_name}}</div>
        </el-card>
      </div>

      <div id="profile_detail">
        <el-card class="card_detail" shadow="never">
          <el-form label-position="top">
            <el-form-item class="form_item" label="Phone">
              <el-input
                class="form_input"
                v-model="form_phone"
                suffix-icon="el-icon-microphone"
                disabled
              ></el-input>
            </el-form-item>
            <el-divider></el-divider>
            <el-form-item class="form_item" label="Email">
              <el-input
                class="form_input"
                v-model="form_email"
                suffix-icon="el-icon-message"
                disabled
              ></el-input>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </div>

    <settings
      @change_name="change_name"
      @change_phone="change_phone"
      @change_email="change_email"
      @change_avatar="change_avatar"
      :show_name="user_name"
      :show_phone="form_phone"
      :show_email="form_email"
    ></settings>
  </div>
</template>

<script>
import settings from "./Settings";

export default {
  components: {
    settings
  },

  data() {
    return {
      search_input: "",
      avatar_url: "",
      user_name: "",
      form_phone: "",
      form_email: ""
    };
  },

  created() {
        this.$axios({
          method: "get",
          url: "/chat/getUser",
        })
        .then((res) => {
          console.log(res.status);
          this.user_name = res.uName;
          this.form_phone = res.uPhone;
          this.form_email = res.uEmail;
          // this.avatar_url = res.uAvatar;
        })
  },

  methods: {
    change_name(name) {
      this.user_name = name;
    },

    change_phone(phone) {
      this.form_phone = phone;
    },

    change_email(email) {
      this.form_email = email;
    },

    change_avatar(avatar) {
      this.avatar_url = avatar;
    }
  },
};
</script>

<style scoped>
#person {
  display: flex;
  margin-top: 1%;
  width: 78%;
  height: 69rem;
}

#Profile {
  width: 30%;
  background-color: #f5f6fa;
  box-sizing: border-box;
}

#title {
  margin-top: 5.5%;
  margin-left: 5%;
  font-size: 2rem;
  font-weight: bold;
  color: #303133;
}

#search_message {
  width: 90%;
  margin: 0 auto;
  margin-top: 5%;
}

.search_input >>> .el-input__inner {
  border: 1px #edeef6 solid;
  background-color: #edeef6;
}

#profile_name,
#profile_detail {
  width: 90%;
  margin: 0 auto;
  margin-top: 5%;
}

.el-card {
  border: 1px #fff solid;
  box-sizing: border-box;
}

.card_name {
  height: 22rem;
}

.card_detail {
  height: 30rem;
}

#avatar {
  margin-top: 4%;
  text-align: center;
}

#name {
  margin-top: 9%;
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
}

.el-form {
  margin-top: 5%;
}

.form_item >>> .el-form-item__label {
  font-size: 1.2rem;
  font-weight: bold;
  color: #9fa0aa;
  height: 4rem;
}

.el-form-item {
  margin-bottom: 10%;
}

.form_item >>> .el-input__inner[disabled] {
  border: 1px #fff solid;
  background-color: #fff;
  color: #303133;
  cursor: default;
}

.form_item >>> .el-input.is-disabled .el-input__icon {
  cursor: default;
}
</style>