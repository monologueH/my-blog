<template>
  <div id="app">
    <el-container class="pageWrap">
      <el-header height='70px' class="pageHeader">
        <div class="blogTitle">monologueH's world!</div>
        <el-menu :default-active="activeIndex" class="blogNav" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">文章列表</el-menu-item>
          <el-menu-item index="2">个人随笔</el-menu-item>
          <!-- <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu> -->
          <el-menu-item index="3">留言</el-menu-item>
          <el-menu-item index="4">关于</el-menu-item>
        </el-menu>
      </el-header>
      <transition name="el-fade-in-linear">
        <router-view class="transition-box"></router-view>
 
      </transition>
      
      
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang='less'>
html,
body {
  height: 100%;
  overflow: hidden;
}
a{
  text-decoration: none;
}
#app {
  height: 100%;
  .pageWrap {
    height: 100%;
    background-color: #eee;
  }
  .pageHeader {
    background-color: #383838;
    .blogTitle {
      font-family: "Indie Flower", cursive;
      width: 400px;
      font-size: 24px;
      line-height: 70px;
      color: #fff;
      float: left;
    }
    .blogNav {
      float: right;
      height: 70px;
      background-color: #333;
      > .el-menu-item,.el-submenu__title {
        text-align: center;
        width: 150px;
        height: 70px;
        line-height: 70px;
        color: #fff;
        border-left: 1px solid #444;
        z-index: 10000;
      }
      > .el-menu-item:hover,> .el-menu-item:focus,.el-submenu__title:hover,.el-submenu__title:focus {
        background-color: #444;
      }
      .el-menu-item.is-active {
          border-bottom: 2px solid #999;
      }
    }
  }
}
</style>
