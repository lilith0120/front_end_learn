<template>
  <div id="Chatpage" ref="Chatpage">
    <chattitle 
      @show_mute="show_mute" 
      @show_share="show_share" 
      @search_toggle="search_toggle"
    ></chattitle>
    <template v-if="isSearch === true">
      <search></search>
    </template>

    <chatcontent :hideSearch="isSearch"></chatcontent>
    <chatinput></chatinput>
  </div>
</template>

<script>
import chattitle from "./Chattitle";
import search from "./Search";
import chatcontent from "./Chatcontent";
import chatinput from "./Chatinput";

export default {
  components: {
    chattitle,
    search,
    chatcontent,
    chatinput,
  },

  data() {
    return {
      isMute: false,
      isShare: false,
      isSearch: false,
    };
  },

  props: ["hideMute", "hideShare"],

  watch: {
    // 群信息修改页面的出现和隐藏
    hideMute(newValue) {
      if (!newValue) {
        this.$refs.Chatpage.style.width = "78%";
        this.isMute = false;
      } else {
        this.$refs.Chatpage.style.width = "60%";
        this.isMute = true;
      }
    },

    // 分享页面的出现和隐藏
    hideShare(newValue) {
      if (!newValue) {
        this.$refs.Chatpage.style.width = "78%";
        this.isShare = false;
      } else {
        this.$refs.Chatpage.style.width = "60%";
        this.isShare = true;
      }
    }
  },

  methods: {
    show_mute(isMute) {
      if(!this.isShare) {
        this.isMute = isMute;
        this.$emit("show_mute", this.isMute);
      }
    },

    show_share(isShare) {
      if(!this.isMute) {
        this.isShare = isShare;
        this.$emit("show_share", this.isShare);
      }
    },

    // 切换查询的显示状态
    search_toggle(isSearch) {
      this.isSearch = isSearch;
    }
  }
};
</script>

<style scoped>
#Chatpage {
  border-left: 4px #f5f6fa solid;
  margin-top: 1%;
  width: 78%;
  height: 69rem;
  box-sizing: border-box;
}
</style>