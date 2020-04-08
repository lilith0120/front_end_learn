<template>
  <div id="Chattitle">
    <div id="operation">
      <el-button-group>
        <el-button icon="el-icon-search" plain></el-button>
        <el-button icon="el-icon-share" plain></el-button>
        <el-dropdown trigger="click">
          <el-button icon="el-icon-more" plain></el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="show_mute">Mute<i class="el-icon-s-operation"></i></el-dropdown-item>
            <el-dropdown-item>Delete<i class="el-icon-delete"></i></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-button-group>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isMute: false,
        }
    },

    methods: {
        show_mute() {
            this.isMute = true;
            this.$emit("show_mute", this.isMute);
        }
    }
};
</script>

<style scoped>
#Chattitle {
  border-bottom: 1px #f5f6fa solid;
  display: flex;
  justify-content: flex-end;
  width: 99.5%;
  height: 7rem;
  box-sizing: border-box;
}

#operation {
  display: flex;
  align-items: center;
  margin-right: 3.5%;
}

.el-button {
  border: none;
}

.el-icon-s-operation{
    margin-left: 37%;
}

.el-icon-delete{
    margin-left: 28%;
}

.el-dropdown-menu{
    border-radius: 1.5rem;
    width: 8.5%;
}
</style>