<template>
  <div id="Search">
    <div id="search_message">
      <el-input
        class="search_input"
        placeholder="Search this chat"
        suffix-icon="el-icon-search"
        v-model="searchInput"
        clearable
      ></el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: '',
    }
  }
};
</script>

<style scoped>
#Search {
  border-bottom: 1px #f5f6fa solid;
  width: 99.5%;
  height: 5.8rem;
  box-sizing: border-box;
}

#search_message {
  width: 85%;
  margin: 0 auto;
  margin-top: 1.5%;
}

.search_input >>> .el-input__inner{
  border: 1px #edeef6 solid;
  background-color: #edeef6;
}
</style>