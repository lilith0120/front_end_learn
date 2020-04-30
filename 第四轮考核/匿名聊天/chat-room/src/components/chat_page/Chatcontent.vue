<template>
  <div id="Chatcontent" ref="Chatcontent">
    <div id="content" ref="content" ><!--v-infinite-scroll="load"-->
      <div v-for="(item, index) in items" :key="index">
        <template v-if="item.isOwn">
          <div class="my">
            <div class="my_message">{{item.message}}</div>
            <div class="avatar">
              <el-avatar :size="35" :src="item.avatar_url"></el-avatar>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="not_my">
            <div class="avatar">
              <el-avatar :size="35" :src="item.avatar_url"></el-avatar>
            </div>
            <div class="not_my_message">{{item.message}}</div>
          </div>
        </template>
      </div>
    </div>

    <chatinput @input_message='input_message'></chatinput>
  </div>
</template>

<script>

import chatinput from "./Chatinput";

export default {
  name: 'Chatcontent',
  components: {
    chatinput,
  },

  data() {
    return {
      publicPath: process.env.BASE_URL,
      items: [] || JSON.parse(localStorage.group_items),
      avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    };
  },

  props: ["hideSearch"],

  sockets: {
    connect() {
      console.log('连接成功！');
      // this.$socket.send('User has connected!');
    },

    // 接受其他人的信息
    message(data) {
      this.items.push(data);
    },

    respond(data) {
      console.log(data);
      console.log('在线人数', data.num);
    }
  },

  updated() {
    this.$refs.content.scrollTop = this.$refs.content.scrollHeight;
  },

  created() {
    this.$axios({
      method: 'get',
      url: '/chat/getUser',  // 获取用户的头像信息
    })
    .then((res) => {
      console.log(res.status);
      this.avatar = `${this.publicPath}image/${res.data.avatarName}`;
    })
  },

  mounted() {
    this.$socket.emit('connect');
  },

  watch: {
    // 搜索栏的出现和隐藏
    hideSearch(newValue) {
      if (!newValue) {
        this.$refs.Chatcontent.style.height = "54rem";
        this.$refs.content.style.height = "54rem";
      } else {
        this.$refs.Chatcontent.style.height = "46.45rem";
        this.$refs.content.style.height = "46.45rem";
      }
    },

    // 将聊天记录存入localstorage
    items(newValue) {
      localStorage.group_items = JSON.stringify(newValue);
    }
  },

  methods: {
    // load() {
    //   for (let i = 0; i < 10; i++) {
    //     let my = true;
    //     if(i % 2 == 0){
    //       my = !my;
    //     }
    //     this.items.push({
    //       message: '大猫猫~',
    //       avatar_url:
    //         "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    //       isOwn: my
    //     });
    //   }
    // },

    input_message(message) {
      this.$socket.send({
        message: message,
        avatar_url: this.avatar,
      });
      this.items.push({
        message: message,
        avatar_url: this.avatar,
        isOwn: true,
      })
    },
  }
};
</script>

<style scoped>
#Chatcontent {
  width: 99.5%;
  height: 54rem;
}

#content {
  height: 54rem;
  overflow-y: scroll;
}

#content > div {
  display: flex;
}

.my {
  display: flex;
  justify-content: flex-end;
  width: 40%;
  margin: 1% 3% 1% auto;
}

.not_my {
  display: flex;
  width: 40%;
  margin: 1% 0 1% 5.4%;
}

.my_message {
  box-sizing: border-box;
  margin-right: 3%;
  padding: 1.5rem 1rem;
  background-color: #0176ff;
  color: #e4f1ff;
  font-size: 1.2rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  width: 90%;
  word-wrap: break-word;
}

.not_my_message {
  box-sizing: border-box;
  margin-left: 3%;
  padding: 1.5rem 1rem;
  background-color: #f5f6fa;
  color: #5c5d66;
  font-size: 1.2rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  width: 90%;
  word-wrap: break-word;
}

.avatar {
  display: flex;
  align-items: flex-end;
}

#content::-webkit-scrollbar {
  width: 1rem;
}

#content::-webkit-scrollbar-thumb {
  border-radius: 1rem;
}

#content:hover::-webkit-scrollbar-thumb {
  background: hsla(0, 0%, 53%, 0.4);
}

#content:hover::-webkit-scrollbar-track {
  background: hsla(0, 0%, 53%, 0.1);
}
</style>