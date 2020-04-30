<template>
  <div id="Share">
    <div id="title">
      <el-button icon="el-icon-arrow-left" @click.native="hide_share" plain></el-button>
    </div>

    <div id="message">
      <div id="photo">
        <el-avatar :size="35" :src="photo_url"></el-avatar>
      </div>

      <div id="group_message">
        <p id="name">{{group_name}}</p>
        <p id="url">
          {{group_url}}
          <i class="el-icon-link"></i>
        </p>
      </div>
    </div>

    <div id="description">{{group_description}}</div>

    <div id="sharing">
      <el-card class="share_to" shadow="never">
        <div id="app_part">
          <div class="app">QQ</div>
          <el-divider></el-divider>
          <div class="app">微信</div>
          <el-divider></el-divider>
          <div class="app">微博</div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShare: true,
      photo_url:
        "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png",
      group_name: "NULL",
      group_url: "NULL",
      group_description: "NULL",
      room_id: this.$route.params.id
    };
  },

  created() {
    this.$axios({
      method: 'get',
      url: `/chat/getRoom/${this.room_id}`,  // 从后端得到房间的信息(给后端房间号)
    })
    .then((res) => {
      console.log(res.status);
      this.group_name = res.data.gName;
      this.group_url = window.location.href;
      this.group_description = res.data.gDescription;
      this.photo_url = `${this.publicPath}image/${res.data.photoName}`;
    })
  },

  methods: {
    hide_share() {
      this.isShare = false;
      this.$emit("hide_share", this.isShare);
    }
  }
};
</script>

<style scoped>
#Share {
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
  display: flex;
  height: 14rem;
}

#photo {
  margin-top: 19%;
  margin-left: 7%;
}

#group_message {
  margin-top: 18%;
  margin-left: 6%;
  width: 100%;
}

#name {
  font-size: 1.2rem;
  font-weight: bold;
}

#url {
  margin-top: 4%;
  color: #9fa0aa;
  word-wrap: break-word;
}

.el-icon-link {
  margin-left: 2%;
}

#description {
  height: 8rem;
  text-align: center;
  font-size: 1.4rem;
  word-break: normal;
  word-wrap: break-word;
}

#sharing {
  border: 1px #f5f6fa solid;
  box-sizing: border-box;
  background-color: #f5f6fa;
  height: 40rem;
}

.share_to {
  width: 93%;
  height: 16rem;
  margin: 0 auto;
  margin-top: 3%;
}

.app {
  color: #9fa0aa;
}

.el-divider--horizontal {
  margin: 7% 0;
}

#app_part{
  margin-top: 4%;
}
</style>