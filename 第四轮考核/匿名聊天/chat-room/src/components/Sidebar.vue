<template>
  <div id="Sidebar">
    <el-row>
      <el-col>
        <el-menu default-active="3">
          <img src="../assets/logo.png" />
          <el-menu-item index="1" @click="show_id(1)">
            <i class="el-icon-edit-outline"></i>
          </el-menu-item>
          <el-menu-item index="2" @click="show_id(2)">
            <i class="el-icon-chat-square"></i>
          </el-menu-item>
          <el-menu-item index="3" @click="show_id(3)">
            <i class="el-icon-user"></i>
          </el-menu-item>
          <el-menu-item index="4" id="setting" disabled>
            <i class="el-icon-setting"></i>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 3
    };
  },

  methods: {
    show_id(id) {
      this.id = id;
      this.$emit("show_id", this.id);
    }
  }
};
</script>

<style scoped>
#Sidebar {
  margin-top: 1%;
  margin-left: 8.5%;
  height: 69rem;
  width: 5%;
  box-sizing: border-box;
  text-align: center;
}

#setting {
  margin-top: 240%;
}

img {
  width: 66%;
  margin-top: 20%;
  margin-bottom: 285%;
}
</style>