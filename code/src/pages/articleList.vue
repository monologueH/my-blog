<template>
  <el-container>
    <el-main class="articleList">
        <el-button @click="getTitlelist">拉取列表</el-button>
        <el-button @click="getArticle">拉取文章</el-button>
        <div v-html="articleContent"></div>
    </el-main>
    <el-footer>
        123
    </el-footer>
  </el-container>
</template>

<script>
import { request } from "../utils/request";
import 'simplemde/dist/simplemde.min.css'
export default {
  name: "articleList",
  data() {
    return {
      articleContent: ""
    };
    
  },
  methods: {
    getTitlelist() {
      request.queryTitleList().then(res => {});
    },
    getArticle() {
      request.queryArticle({ id: "22" }).then(res => {
        this.articleContent = res.data[0].content;
      });
    }
  }
};
</script>

<style lang='less'>
.articles {
  background-color: #ccc;
  height: 100%;
}


// .editor-toolbar.fullscreen{
//   position: static;
//   float: left;
// }
// .CodeMirror-fullscreen{
//   position: static!important;
//   float: left;
// }
// .editor-preview-side{
//   position: static!important;
//   float: right;

// }
</style>
