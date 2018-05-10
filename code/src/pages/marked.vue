<template>
  <el-container>
    <el-main class="markedBody" height='700'>
      <div class="articleTitle">
        <input type="text" @keydown="pressEnter" @focus="titleFocus" @blur="titleBlur" class="titleInput" :placeholder="titlePlaceholder" v-model="articleTitle">
      </div>
      <markdown-editor v-model="content" ref="markdownEditor" :configs="configs"></markdown-editor>

    </el-main>
    <el-footer height="80px" class="footerOperate">
      <el-autocomplete
        v-model="articleClass"
        :fetch-suggestions="queryClassAsync"
        placeholder="请输入文章类目"
        @select="handleSelect"
      ></el-autocomplete>
      <el-button class="saveBtn" type="primary" @click="saveArticle">保存</el-button>
      <el-button class="cancelBtn">取消</el-button>

    </el-footer>
  </el-container>
  
</template>

<script>
import _ from "lodash";
import marked from "marked";
const rendererMD = new marked.Renderer();
import {request} from "../utils/request";
export default {
  name: "markDown",
  data() {
    return {
      input: "# hello",
      parsedMD: '',
      articleTitle: "",
      titlePlaceholder: "enter your md title!",
      articleClass:'',
      content: '',
      configs: {
        status: false, // 禁用底部状态栏
        spellChecker: false // 禁用拼写检查
      }
      
    };
  },
  mounted() {
    this.simplemde.codemirror.on('change', (instance, changeObj) => {
        // do some things
    var html = this.simplemde.markdown(this.content)
    console.log(html)
        
    })
    
  },
  computed: {
    simplemde () {
      return this.$refs.markdownEditor.simplemde
    }
  },
  methods: {
    
    titleFocus(e) {
      this.titlePlaceholder = "";
    },
    titleBlur(e) {
      // this.articleTitle = e.target.value
      if (this.articleTitle == "") {
        this.titlePlaceholder = "enter your md title!";
      }
    },
    saveArticle(){
      let params = {
        title:this.articleTitle,
        content:this.parsedMD
      }
      console.log(params.content)
      request.addNewArticle(params).then((data)=>{
        console.log(data)
        if(data.code == 0) alert("修改成功")
      })
    },
    pressEnter(e){
      if(e.key == 'Enter'){
        e.target.blur()
      }
    },
    queryClassAsync(){

    },
    handleSelect(){

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
.CodeMirror {
  flex: 1;
}
:focus {
  outline: none;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
  tr:nth-of-type(2n) td {
    background-color: rgb(242, 242, 243);
  }
  tr:nth-of-type(2n + 1) td {
    background-color: rgb(248, 248, 248);
  }

  td:last-of-type {
    margin-right: 0;
    border: 1px solid rgb(221, 221, 221);
  }
}

}
.footerOperate{
  background-color: #fff;
  box-sizing: border-box;
  padding: 10px 0 0 0;
  margin-top: 5px;
  line-height: 50px;
  box-shadow: 3px -3px 3px #ccc ;
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
