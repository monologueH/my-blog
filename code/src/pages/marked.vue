<template>
  <el-container>
    <el-main class="markedBody" height='700'>
      <div class="articleTitle">
        <input type="text" @focus="titleFocus" @blur="titleBlur" class="titleInput" :placeholder="titlePlaceholder" :value="articleTitle">
      </div>
      <div id="editor">
        <textarea :value="input" @input="update"></textarea>
        <div v-html="compiledMarkdown"></div>
      </div>
    </el-main>
    <el-footer height="80px" class="footerOperate">
      <el-button class="saveBtn" type="primary">保存</el-button>
      <el-button class="cancelBtn">取消</el-button>

    </el-footer>
  </el-container>
  
</template>

<script>
import _ from "lodash";
import marked from "marked";
export default {
  name: "markDown",
  data() {
    return {
      input: "# hello",
      parsedMD: "",
      articleTitle: "",
      titlePlaceholder: "enter your md title!"
    };
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, { sanitize: true });
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.input = e.target.value;
      var options = {};
      var tokens = marked.lexer(this.input, options);
      this.parsedMD = marked.parser(tokens);
      console.log(this.parsedMD);
    }, 300),
    titleFocus(e) {
      this.titlePlaceholder = "";
    },
    titleBlur(e) {
      this.articleTitle = e.target.value
      if (this.articleTitle == "") {
        this.articleTitle = "enter your md title!";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
html,
body {
  background-color: #ccc;
}
html,
body,
#editor {
  margin: 0;
  height: 100%;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}
input {
  margin: 0;
  padding: 0;
  border: 0;
}
.markedBody {
  width: 100%;
  padding: 0;  
  display: flex;
  flex-direction: column;
  .articleTitle {
    height: 50px;
    box-sizing: border-box;
    margin: 10px 10px;
    position: relative;

    background: #f66;
    .titleInput {
      width: 100%;
      height: 50px;
      font-family: 微软雅黑;
      background-color: #fff;
      position: absolute;
      left: 0;
      top: 0;
      text-align: center;
      line-height: 50px;
      font-size: 28px;
      color: #333;
    }
  }
  #editor {
    margin: 0px 10px;
    display: flex;
    height: 100%;

    textarea,
    div {
      flex: 1;
      height: 100%;
      vertical-align: top;
      box-sizing: border-box;
      padding: 5px;
    }

    textarea {
      border: none;
      border-right: 1px solid #ccc;
      resize: none;
      outline: none;
      background-color: #f6f6f6;
      font-size: 14px;
      font-family: "Monaco", courier, monospace;
    }
    div {
      background-color: #999;
      overflow: auto;
    }
  }
}
.footerOperate{
  background-color: #fff;
  box-sizing: border-box;
  padding: 10px 0 0 0;
  margin-top: 10px;
  line-height: 50px;
  .saveBtn{
    float: right;
    margin-right: 70px;
  }
  .cancelBtn{
    float: right;
    margin-right: 30px;
  }
}

code {
  color: #f66;
}
</style>
