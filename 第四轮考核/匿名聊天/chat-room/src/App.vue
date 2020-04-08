<template>
  <div id="app">
    <sidebar @show_id='show_id'></sidebar>
    <template v-if="state === 1">
      <creategroup></creategroup>
    </template>

    <template v-else-if="state === 2">
      <chatpage @show_mute='show_mute' :hideMute='isMute'></chatpage>
      <template v-if="isMute === true">
        <mute @hide_mute='hide_mute'></mute>
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
import profile from "./components/Profile";
import settings from "./components/Settings";

export default {
  name: "App",
  components: {
    sidebar,
    creategroup,
    chatpage,
    mute,
    profile,
    settings,
  },

  data() {
    return {
      state: 3,
      isMute: false,
    };
  },

  methods: {
    show_id(state) {
      this.state = state;
      if(state != 2) {
        this.isMute = false;
      }
    },

    show_mute(isMute) {
      this.isMute = isMute;
    },

    hide_mute(isMute) {
      this.isMute = isMute;
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

#app{
  display: flex;
}
</style>
