<template>
  <div id="Chatinput">
    <div id="chat_message">
      <VueEmoji v-if="isReload" class="emoji" ref="emoji" @input="chat_input" width="200px" />
    </div>
    <div id="chat_button">
      <el-button type="primary" icon="el-icon-s-promotion" @click.native="input_message" circle></el-button>
    </div>
  </div>
</template>

<script>
import VueEmoji from "emoji-vue";

export default {
  components: {
    VueEmoji
  },

  data() {
    return {
      chat_content: "",
      isReload: true,
    };
  },

  methods: {
    chat_input(event) {
      this.chat_content = event.data;
    },

    input_message() {
      this.$emit('input_message', this.chat_content);
      this.isReload = false;
      setTimeout(() => {
        this.isReload = true;
      }, 1);
      // this.$axios({})  // 将聊天内容传给后端
    }
  }
};
</script>

<style scoped>
#Chatinput {
  border-top: 1px #f5f6fa solid;
  display: flex;
  justify-content: space-between;
  width: 99.5%;
  height: 8rem;
  box-sizing: border-box;
}

#chat_message {
  height: 8rem;
  width: 91%;
}

#chat_button {
  margin-top: 1%;
  margin-right: 4%;
}

.el-button {
  height: 4rem;
}

.emoji {
  margin-top: 0.5%;
  font-size: 1.4rem;
}

.emoji >>> .emoji-wysiwyg-editor {
  border: none;
  height: 6rem !important;
}

.emoji >>> i.emoji-picker-icon.emoji-picker {
  margin-top: 1%;
}
</style>