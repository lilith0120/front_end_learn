<template>
  <div id="Mute">
    <div id="title">
      <el-button icon="el-icon-arrow-left" @click.native="hide_mute" plain></el-button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isMute: true,
        }
    },

    methods: {
        hide_mute() {
            this.isMute = false;
            this.$emit('hide_mute', this.isMute);
        }
    }
};
</script>

<style scoped>
#Mute {
  border: 1px green solid;
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
</style>