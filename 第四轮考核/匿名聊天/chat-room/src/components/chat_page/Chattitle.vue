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
          <template v-if="group_topic !== ''">· {{group_topic}}</template>
        </p>
      </div>
    </div>

    <div id="operation">
      <el-button-group>
        <el-button icon="el-icon-search" @click.native="search_toggle" plain></el-button>
        <el-button icon="el-icon-share" @click.native="show_share" plain></el-button>
        <el-dropdown trigger="click">
          <el-button icon="el-icon-more" plain :disabled='isOwner'></el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="show_mute">
              Mute
              <i class="el-icon-s-operation"></i>
            </el-dropdown-item>
            <el-dropdown-item @click.native="delete_room">
              Delete
              <i class="el-icon-delete"></i>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-button-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chattitle',
  data() {
    return {
      isMute: false,
      isShare: false,
      isSearch: false,
      isOwner: false,  // 判断是不是房主
      photo_url:
        "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png",
      group_name: "NULL",
      group_num: 0,
      group_topic: "",
      room_id: this.$route.params.id
    };
  },

  props: ["changeName", "changeTopic"],

  created() {
    this.$axios({
      method: 'get',
      url: `/chat/getRoom/${this.room_id}`,  // 从这里得到后端传来的房间信息
    })
    .then((res) => {
      console.log(res.status);
      let start = 7;
      let userId = document.cookie.substr(start);
      // console.log(userId);
      // console.log(res.data.userId);
      // console.log(userId == res.data.userId);
      if(userId == res.data.userId) {
        this.isOwner = false;
      }
      else {
        this.isOwner = true;
      }

      this.group_name = res.data.gName;
      this.group_topic = res.data.gTopic;
      this.photo_url = `${this.publicPath}image/${res.data.photoName}`;
      // 从这里得到后端传来的房间信息
    })
  },

  watch: {
    changeName(newValue) {
      this.group_name = newValue;
    },
    
    changeTopic(newValue) {
      this.group_topic = newValue;
    }
  },

  sockets: {
    // 监听在线人数
    user(data) {
      console.log('在线人数', data);
      this.group_num = data;
    },
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
    },

    // 删除房间
    delete_room() {
      this.$confirm("是否永久删除该房间?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            method: "delete",
            url: `/chat/deleteRoom/${this.room_id}`  // 删除房间
          }).then(res => {
            console.log(res.status);
            this.$router.push("/");
            this.$router.go(0);
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
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

#message {
  display: flex;
  align-items: center;
  margin-left: 5.5%;
  width: 30%;
}

#group_message {
  margin-left: 3.5%;
}

#name {
  font-weight: bold;
}

#tips {
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
  margin-left: 35%;
}

.el-icon-delete {
  margin-left: 26%;
}

.el-dropdown-menu {
  border-radius: 1.5rem;
  width: 8.5%;
}
</style>