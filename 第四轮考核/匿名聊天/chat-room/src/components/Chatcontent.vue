<template>
  <div id="Chatcontent" ref="Chatcontent"></div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    props: ["hideSearch"],

    watch: {
        // 搜索栏的出现和隐藏
        hideSearch(newValue) {
            if(!newValue) {
                this.$refs.Chatcontent.style.height = "54rem";
            }
            else {
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
</style>