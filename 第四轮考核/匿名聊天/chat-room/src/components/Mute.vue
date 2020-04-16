<template>
  <div id="Mute">
    <div id="title">
      <el-button icon="el-icon-arrow-left" @click.native="hide_mute" plain></el-button>
    </div>

    <div id="message">
      <div id="photo">
        <el-avatar :size="75" :src="photo_url"></el-avatar>
      </div>

      <div id="group_message">
        <p id="name">{{group_name}}</p>
        <p id="description">{{group_description}}</p>
      </div>
    </div>

    <div id="main">
      <div id="form">
        <el-form label-position="top">
          <el-form-item class="form_item" label="Photo">
            <el-upload
              class="upload"
              name="photo"
              drag
              action="#"
              accept="image/*"
              :auto-upload="false"
              :limit="1"
            >
              <i class="el-icon-picture-outline"></i>
            </el-upload>
          </el-form-item>
          <el-form-item class="form_item" label="Name">
            <el-input class="form_input" placeholder="Group Name" v-model="form_name"></el-input>
          </el-form-item>
          <el-form-item class="form_item" label="Topic(optional)">
            <el-input
              class="form_input"
              placeholder="Group Topic"
              v-model="form_topic"
              maxlength="10"
              show-word-limit
            ></el-input>
          </el-form-item>
          <el-form-item class="form_item" label="Description">
            <el-input
              class="form_input"
              placeholder="Group Description"
              v-model="form_description"
              maxlength="30"
              show-word-limit
            ></el-input>
          </el-form-item>
          <el-form-item>
            <div id="button">
              <el-button type="primary"></el-button>
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
      isMute: true,
      photo_url:
        "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png",
      group_name: "NULL",
      group_description: "NULL",
      form_name: '',
      form_topic: '',
      form_description: '',
    };
  },

  methods: {
    hide_mute() {
      this.isMute = false;
      this.$emit("hide_mute", this.isMute);
    }
  }
};
</script>

<style scoped>
#Mute {
  border-left: 1px #f5f6fa solid;
  margin-top: 1%;
  width: 18%;
  height: 69rem;
  box-sizing: border-box;
}

#title {
  border-bottom: 1px #f5f6fa solid;
  display: flex;
  height: 7rem;
  box-sizing: border-box;
}

.el-button {
  display: flex;
  align-items: center;
  border: none;
}

#message {
  box-sizing: border-box;
  height: 19rem;
  text-align: center;
}

#photo {
  margin-top: 11%;
}

#group_message {
  margin-top: 4%;
}

#name {
  font-size: 1.4rem;
  font-weight: bold;
}

#description {
  width: 61%;
  margin: 0 auto;
  margin-top: 3%;
  font-size: 1.2rem;
  color: #9fa0aa;
  word-wrap: break-word;
  word-break: normal;
}

.form_input >>> .el-input__inner {
  border: 1px #edeef6 solid;
  background-color: #edeef6;
  height: 3rem;
  font-size: 1rem;
}

.form_input >>> .el-input__count .el-input__count-inner {
  background-color: #edeef6;
}

#main{
  background-color: #f5f6fa;
  height: 40rem;
}

#form {
  width: 90%;
  margin: 0 auto;
}

.form_item >>> .el-form-item__label {
  font-size: 1rem;
  font-weight: bold;
  color: #9fa0aa;
  height: 3rem;
}

.el-form-item {
  margin-bottom: 0.5%;
}

.el-button--primary {
  width: 100%; 
  margin-top: 2%;
  height: 3rem;
  background-color: #0176ff;
  font-size: 1.2rem;
}

.el-icon-picture-outline {
  padding: 3%;
  margin-top: 8%;
  color: #fff;
  background-color: #0176ff;
  border-radius: 5rem;
}

.upload >>> .el-upload-dragger {
  border: 1px #edeef6 solid;
  background-color: #edeef6;
  height: 7rem;
  width: 24.2rem;
}

.upload >>> .el-upload-list__item{
  font-size: 1rem;
}
</style>