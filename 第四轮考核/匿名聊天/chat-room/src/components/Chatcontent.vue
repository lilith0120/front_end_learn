<template>
  <div id="Chatcontent" ref="Chatcontent">
    <div id="content">
      <div v-for="(item, index) in items" :key="index">
        <template v-if="item.isOwn">
          <div class="my">
            <div class="my_message">{{item.message}}</div>
            <el-avatar :size="35" :src="item.avatar_url"></el-avatar>
          </div>
        </template>
        <template v-else>
          <div class="not_my">
            <el-avatar :size="35" :src="item.avatar_url"></el-avatar>
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
      items: [
        {
          message: 'lajffafsalfjkasjflsjfjasklfasdffffffffffffffffffff',
          avatar_url:
            "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          isOwn: false
        },
        {
          message: '123',
          avatar_url:
            "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          isOwn: true
        },
        {
          message: '789',
          avatar_url:
            "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          isOwn: false
        }
      ]
    };
  },

  props: ["hideSearch"],

  watch: {
    // 搜索栏的出现和隐藏
    hideSearch(newValue) {
      if (!newValue) {
        this.$refs.Chatcontent.style.height = "54rem";
      } else {
        this.$refs.Chatcontent.style.height = "46.45rem";
      }
    }
  }
};
</script>

<style scoped>
#Chatcontent {
  border: 1px blue solid;
  width: 99.5%;
  height: 54rem;
  box-sizing: border-box;
}

#content > div {
  display: flex;
}

.my {
  border: 1px black solid;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: 4%;
}

.not_my {
  border: 1px red solid;
  box-sizing: border-box;
  display: flex;
  margin-left: 5.4%;
}

.my_message{
    padding: 1.5rem 1rem;
    background-color: #0176ff;
    color: #e4f1ff;
    font-size: 1.2rem;
    text-align: center;
}

.not_my_message{
    padding: 1.5rem 1rem;
    background-color: #f5f6fa;
    color: #8f909c;
    font-size: 1.2rem;
    text-align: center;
}

.el-avatar{
    vertical-align: text-bottom;
}
</style>