<template>
  <div id="Chatcontent" ref="Chatcontent">
    <div id="content" ref="content" v-infinite-scroll="load">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      counts: 1,
      items: [],
    };
  },

  props: ["hideSearch"],

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
    }
  },

  methods: {
    load() {
      for (let i = 0; i < 10; i++) {
        let my = true;
        if(i % 2 == 0){
          my = !my;
        }
        this.items.push({
          message: '大猫猫~',
          avatar_url:
            "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          isOwn: my
        });
      }
    }
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