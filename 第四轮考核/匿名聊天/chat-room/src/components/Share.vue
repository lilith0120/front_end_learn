<template>
  <div id="Share">
      <div id="title">
      <el-button icon="el-icon-arrow-left" @click.native="hide_share" plain></el-button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isShare: true,
        }
    },

    methods: {
        hide_share() {
            this.isShare = false;
            this.$emit('hide_share', this.isShare);
        }
    }
};
</script>

<style scoped>
#Share {
  border: 1px red solid;
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