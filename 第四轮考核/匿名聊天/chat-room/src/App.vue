<template>
  <div id="app">
    <sidebar @show_id="show_id"></sidebar>
    <template v-if="state === 1">
      <creategroup></creategroup>
    </template>

    <template v-else-if="state === 2">
      <chatpage
        @show_mute="show_mute"
        @show_share="show_share"
        :hideMute="isMute"
        :hideShare="isShare"
      ></chatpage>
      <template v-if="isMute === true">
        <mute @hide_mute="hide_mute"></mute>
      </template>
      <template v-else-if="isShare === true">
        <share @hide_share="hide_share"></share>
      </template>
    </template>

    <template v-else>
      <profile></profile>
      <settings></settings>
    </template>
  </div>
</template>

<script>
import sidebar from "./components/Sidebar";
import creategroup from "./components/Creategroup";
import chatpage from "./components/Chatpage";
import mute from "./components/Mute";
import share from "./components/Share";
import profile from "./components/Profile";
import settings from "./components/Settings";

export default {
  name: "App",
  components: {
    sidebar,
    creategroup,
    chatpage,
    mute,
    share,
    profile,
    settings
  },

  data() {
    return {
      state: 3,
      isMute: false,
      isShare: false
    };
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
