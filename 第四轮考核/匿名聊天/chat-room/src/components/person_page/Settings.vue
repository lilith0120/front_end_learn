<template>
  <div id="Settings">
    <div id="title">
      <p id="header">Settings</p>
      <p id="sec_header">Update your profile details</p>
    </div>

    <div id="account">
      <div id="sec_title">
        <div id="title_left">
          <p id="ac_header">Account</p>
          <p id="sec_ac_header">Update your profile details</p>
        </div>
        <div id="title_right">
          <i class="el-icon-user"></i>
        </div>
      </div>

      <div id="form">
        <el-form label-position="top">
          <el-form-item class="form_item" label="Avatar">
            <el-upload
              class="upload"
              name="avatar"
              ref="avatar"
              drag
              action="action_url"
              accept="image/*"
              :on-change="upload_avatar"
              :auto-upload="false"
              :limit="1"
            >
              <i class="el-icon-picture-outline"></i>
              <div class="upload_text">
                <p>You can upload jpg, gif or png files.</p>
                <p>Max file size 3mb.</p>
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item class="form_item" label="Name">
            <el-input class="form_input" placeholder="Type your name" v-model="form_name" clearable></el-input>
          </el-form-item>
          <el-form-item class="form_item" label="Phone">
            <el-input class="form_input" placeholder="(123)456-7890" v-model="form_phone" clearable></el-input>
          </el-form-item>
          <el-form-item class="form_item" label="Email">
            <el-input
              class="form_input"
              placeholder="you@yoursite.com"
              v-model="form_email"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <div id="button">
              <el-button type="primary" @click.native="save_preferences">Save Preferences</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      action_url: "/chat/changeUser/", // 等后端的接口
      form_avatar: [],
      form_name: "",
      form_phone: "",
      form_email: ""
    };
  },

  props: ["show_name", "show_phone", "show_email"],

  watch: {
    show_name(newValue) {
      this.form_name = newValue;
    },

    show_phone(newValue) {
      this.form_phone = newValue;
    },

    show_email(newValue) {
      this.form_email = newValue;
    }
  },

  methods: {
    save_preferences() {
      if (this.form_name == "") {
        this.$notify({
          title: "Warning",
          message: "Please input name!",
          type: "warning",
          duration: 2000,
          showClose: false
        });
        return;
      }

      this.$refs.avatar.submit();

      let data = {
        uName: this.form_name,
        uPhone: this.form_phone,
        uEmail: this.form_email
      };

      this.$axios({
        method: "post",
        url: "/chat/changeUser/", // 等后端的接口,修改用户信息
        data: data
      }).then(res => {
        console.log(res.status);
        this.$notify({
          title: "Success",
          message: "Succeed to save preferences",
          type: "success",
          duration: 2000,
          showClose: false
        });
        this.$emit("change_name", this.form_name);
        this.$emit("change_phone", this.form_phone);
        this.$emit("change_email", this.form_email);
        this.$emit("change_avatar", this.form_avatar);
      });
    },

    upload_avatar(file) {
      this.form_avatar = [];
      this.form_avatar.push(file.raw);
    }
  }
};
</script>

<style scoped>
#Settings {
  width: 70%;
}

#title {
  border-bottom: 1px #f5f6fa solid;
  height: 5.5rem;
  box-sizing: border-box;
}

#header {
  margin-top: 1.7%;
  margin-left: 4%;
  font-size: 1.4rem;
  font-weight: bold;
  color: #303133;
}

#sec_header {
  margin-top: 0.3%;
  margin-left: 4%;
  font-size: 1.2rem;
  color: #9fa0aa;
}

#account {
  border-top: 1px #f5f6fa solid;
  border-left: 1px #f5f6fa solid;
  border-right: 1px #f5f6fa solid;
  width: 45%;
  height: 60rem;
  margin: 0 auto;
  margin-top: 2%;
  box-sizing: border-box;
}

#sec_title {
  border-bottom: 1px #f5f6fa solid;
  box-sizing: border-box;
  display: flex;
  height: 7rem;
}

#title_left {
  width: 70%;
}

#ac_header {
  margin-top: 5%;
  margin-left: 5%;
  font-size: 1.4rem;
  font-weight: bold;
}

#sec_ac_header {
  margin-top: 2%;
  margin-left: 5%;
  font-size: 1.2rem;
  color: #9fa0aa;
}

#title_right {
  width: 30%;
  text-align: right;
  font-size: 1.5rem;
  color: #9fa0aa;
}

.el-icon-user {
  margin-top: 25%;
  margin-right: 15%;
}

#form {
  width: 92%;
  margin: 0 auto;
  margin-top: 0.5%;
}

.form_input >>> .el-input__inner {
  border: 1px #edeef6 solid;
  background-color: #edeef6;
}

.form_item >>> .el-form-item__label {
  font-size: 1rem;
  font-weight: bold;
  color: #9fa0aa;
  height: 4rem;
}

.el-form-item {
  margin-bottom: 2%;
}

.el-button {
  width: 85%;
  height: 4rem;
  margin-top: 5%;
  background-color: #0176ff;
  font-size: 1rem;
}

#button {
  text-align: center;
}

.el-icon-picture-outline {
  margin-top: 2%;
  padding: 3%;
  color: #fff;
  background-color: #0176ff;
  border-radius: 5rem;
}

.upload >>> .el-upload-dragger {
  border: 1px #edeef6 solid;
  background-color: #edeef6;
  height: 10rem;
  width: 34.8rem;
}

.upload_text p {
  height: 2rem;
  font-size: 1.2rem;
  color: #9fa0aa;
}
</style>