<template>
  <div id="Creategroup">
    <div id="title">Create group</div>
    <div id="search_message">
      <el-input
        class="search_input"
        placeholder="Search for messages or users..."
        suffix-icon="el-icon-search"
        v-model="search_input"
      ></el-input>
    </div>

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
            <div class="upload_text">
              <p>You can upload jpg, gif or png files.</p>
              <p>Max file size 3mb.</p>
            </div>
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
            <el-button type="primary">Create group</el-button>
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
      form_name: "",
      form_topic: "",
      form_description: ""
    };
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