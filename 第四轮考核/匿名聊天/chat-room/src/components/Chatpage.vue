<template>
  <div id="Chatpage" ref="Chatpage">
    <chattitle @show_mute="show_mute"></chattitle>
  </div>
</template>

<script>
import chattitle from "./Chattitle";

export default {
  components: {
    chattitle
  },

  data() {
    return {
      isMute: false
    };
  },

  props: ["hideMute"],

  watch: {
    hideMute(newValue) {
      if (!newValue) {
        this.$refs.Chatpage.style.width = "78%";
      } 
      else {
        this.$refs.Chatpage.style.width = "60%";
      }
    }
  },

  methods: {
    show_mute(isMute) {
      this.isMute = isMute;
      this.$emit("show_mute", this.isMute);
    }
  }
};
</script>

<style scoped>
#Chatpage {
  border-left: 4px #f5f6fa solid;
  display: flex;
  margin-top: 1%;
  width: 78%;
  height: 69rem;
  box-sizing: border-box;
}
</style>