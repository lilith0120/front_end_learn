<template>
  <div id="Creategroup">
    <div id="title">Create group</div>
    <div id="search_message">
      <el-input
        class="search_input"
        placeholder="Search for messages or users..."
        suffix-icon="el-icon-search"
        v-model="search_input"
        clearable
      ></el-input>
    </div>

    <div id="form">
      <el-form label-position="top">
        <el-form-item class="form_item" label="Photo">
          <el-upload
            class="upload"
            name="photo"
            ref="photo"
            drag
            accept="image/*"
            action
            :on-change="upload_photo"
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
          <el-input class="form_input" placeholder="Group Name" v-model="form_name" clearable></el-input>
        </el-form-item>
        <el-form-item class="form_item" label="Topic(optional)">
          <el-input
            class="form_input"
            placeholder="Group Topic"
            v-model="form_topic"
            maxlength="10"
            show-word-limit
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item class="form_item" label="Description">
          <el-input
            class="form_input"
            placeholder="Group Description"
            v-model="form_description"
            maxlength="30"
            show-word-limit
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item>
          <div id="button">
            <el-button type="primary" @click.native="create_group">Create group</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search_input: "",
      form_photo: [],
      form_name: "",
      form_topic: "",
      form_description: ""
    };
  },

  methods: {
    create_group() {
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

      if (this.form_description == "") {
        this.$notify({
          title: "Warning",
          message: "Please input description!",
          type: "warning",
          duration: 2000,
          showClose: false
        });
        return;
      }

      if (this.form_photo.length == 0) {
        this.$notify({
          title: "Warning",
          message: "Please select photo!",
          type: "warning",
          duration: 2000,
          showClose: false
        });

        return;
      }

      let form_data = new FormData();
      form_data.append("gName", this.form_name);
      form_data.append("gTopic", this.form_topic);
      form_data.append("gDescription", this.form_description);
      form_data.append("photo", this.form_photo);

      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      
      console.log(form_data.photo);
      this.$refs.photo.submit();
      this.$axios.post("/chat/createGroup", form_data, config).then(res => {
        if (res.data.status == "error") {
          this.$notify({
            title: "Warning",
            message: "该房间名已存在!",
            type: "warning",
            duration: 2000,
            showClose: false
          });
        } else {
          let url = `${window.location.origin}/#/roomId/${res.data.roomId}`;
          this.$alert(`创建房间成功，房间链接为${url}`, "提示", {
            confirmButtonText: "确定",
            type: "success",
            callback: () => {
              console.log(res.data.roomId);
              this.$router.push({
                path: `/roomId/${res.data.roomId}`
              });
              this.$router.go(0);
            }
          });
        }
      });
    },

    upload_photo(file) {
      this.form_photo = [];
      this.form_photo.push(file.raw);
    }
  }
};
</script>

<style scoped>
#Creategroup {
  margin-top: 1%;
  width: 78%;
  height: 69rem;
  background-color: #f5f6fa;
  box-sizing: border-box;
}

#title {
  margin-top: 2.5%;
  margin-left: 3.5%;
  font-size: 2rem;
  font-weight: bold;
  color: #303133;
}

#search_message {
  width: 93%;
  margin: 0 auto;
  margin-top: 1.5%;
}

.search_input >>> .el-input__inner,
.form_input >>> .el-input__inner {
  border: 1px #edeef6 solid;
  background-color: #edeef6;
}

.form_input >>> .el-input__count .el-input__count-inner {
  background-color: #edeef6;
}

#form {
  width: 59%;
  margin: 0 auto;
  margin-top: 0.5%;
}

.form_item >>> .el-form-item__label {
  font-size: 1.2rem;
  font-weight: bold;
  color: #9fa0aa;
  height: 4rem;
}

.el-form-item {
  margin-bottom: 1%;
}

.el-button {
  width: 40%;
  height: 4rem;
  margin-top: 4%;
  background-color: #0176ff;
  font-size: 1.2rem;
}

#button {
  text-align: center;
}

.el-icon-picture-outline {
  margin-top: 1%;
  padding: 1.5%;
  color: #fff;
  background-color: #0176ff;
  border-radius: 5rem;
}

.upload >>> .el-upload-dragger {
  border: 1px #edeef6 solid;
  background-color: #edeef6;
  height: 10rem;
  width: 70.7rem;
}

p {
  height: 2rem;
  font-size: 1.2rem;
  color: #9fa0aa;
}
</style>