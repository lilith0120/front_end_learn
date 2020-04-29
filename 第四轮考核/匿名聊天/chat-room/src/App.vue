<template>
  <div id="app">
    <sidebar @show_id="show_id"></sidebar>

    <template v-if="state === 1">
      <router-view name="creategroup"></router-view>
    </template>

    <template v-else-if="state === 2">
      <router-view
        name="chatpage"
        @show_mute="show_mute"
        @show_share="show_share"
        :hideMute="isMute"
        :hideShare="isShare"
      ></router-view>
      <template v-if="isMute === true">
        <mute @hide_mute="hide_mute"></mute>
      </template>
      <template v-else-if="isShare === true">
        <share @hide_share="hide_share"></share>
      </template>
    </template>

    <template v-else>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import sidebar from "./components/Sidebar";
import mute from "./components/chat_page/Mute";
import share from "./components/chat_page/Share";

export default {
  name: "App",
  components: {
    sidebar,
    mute,
    share
  },

  data() {
    return {
      state: 3,
      isMute: false,
      isShare: false
    };
  },

  created() {
    if(document.cookie == "") {
      this.$axios({
        method: 'post',
        url: '/chat/addUser',  // 如果是第一次访问，就让后端建立一个用户
      })
      .then((res) => {
        console.log(res);
      })
    }
  },

  methods: {
    show_id(state) {
      this.state = state;
      if (state != 2) {
        this.isMute = false;
        this.isShare = false;
      }
    },

    show_mute(isMute) {
      this.isMute = isMute;
    },

    hide_mute(isMute) {
      this.isMute = isMute;
    },

    show_share(isShare) {
      this.isShare = isShare;
    },

    hide_share(isShare) {
      this.isShare = isShare;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  position: relative;
}

html {
  height: 100%;
  font-size: 62.5%;
}

#app {
  display: flex;
}
</style>
