<template>
  <div id="Chattitle">
    <div id="message">
      <div id="photo">
        <el-avatar :size="40" :src="photo_url"></el-avatar>
      </div>

      <div id="group_message">
        <p id="name">{{group_name}}</p>
        <p id="tips">
          {{group_num}} members
          <template v-if="group_topic !== ''">
             · {{group_topic}}
          </template>
        </p>
      </div>
    </div>

    <div id="operation">
      <el-button-group>
        <el-button icon="el-icon-search" @click.native="search_toggle" plain></el-button>
        <el-button icon="el-icon-share" @click.native="show_share" plain></el-button>
        <el-dropdown trigger="click">
          <el-button icon="el-icon-more" plain></el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="show_mute">
              Mute<i class="el-icon-s-operation"></i>
            </el-dropdown-item>
            <el-dropdown-item>
              Delete<i class="el-icon-delete"></i>
            </el-dropdown-item>
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
      isShare: false,
      isSearch: false,
      photo_url: 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png',
      group_name: 'NULL',
      group_num: 0,
      group_topic: '',
    };
  },

  methods: {
    // 显示群信息修改页面
    show_mute() {
      this.isMute = true;
      this.$emit("show_mute", this.isMute);
    },

    // 显示分享页面
    show_share() {
      this.isShare = true;
      this.$emit("show_share", this.isShare);
    },

    // 切换查询的显示状态
    search_toggle() {
      this.isSearch = !this.isSearch;
      this.$emit("search_toggle", this.isSearch);
    }
  }
};
</script>

<style scoped>
#Chattitle {
  border-bottom: 1px #f5f6fa solid;
  display: flex;
  justify-content: space-between;
  width: 99.5%;
  height: 7rem;
  box-sizing: border-box;
}

#message{
  display: flex;
  align-items: center;
  margin-left: 5.5%;
  width: 30%;
}

#group_message{
  margin-left: 3.5%;
}

#name{
  font-weight: bold;
}

#tips{
  margin-top: 2%;
  color: #9fa0aa;
}

#operation {
  display: flex;
  align-items: center;
  margin-right: 3.5%;
}

.el-button {
  border: none;
}

.el-icon-s-operation {
  margin-left: 37%;
}

.el-icon-delete {
  margin-left: 28%;
}

.el-dropdown-menu {
  border-radius: 1.5rem;
  width: 8.5%;
}
</style>