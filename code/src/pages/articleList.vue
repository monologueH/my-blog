<template>
  <el-container>
    <el-main class="articleList">
        123
        <el-button @click="getTitlelist">默认按钮</el-button>
    </el-main>
    <el-footer>
        123
    </el-footer>
  </el-container>
</template>

<script>
import {request} from "../utils/request";
export default {
  name: "articleList",
  data() {
    return {
      
    };
  },
  methods: {
    getTitlelist(){
      console.log(123)
      request.queryTitleList().then((res)=>{
        console.log(res.data)
      })
    }
  }
};
</script>

<style scoped lang='less'>

  .articles{
      background-color: #ccc;
      height: 100%;
  }
</style>
