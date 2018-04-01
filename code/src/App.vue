<template>
  <div id="app">
    <el-container class="pageWrap">
      <el-header height='70px' class="pageHeader">
        <div class="blogTitle">monologueH's world!</div>
        <el-menu :default-active="activeIndex" class="blogNav" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
      </el-header>
      
      <router-view></router-view>
      
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
    background-color: #333;
    .blogTitle {
      font-family: "Indie Flower", cursive;
      width: 200px;
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
        height: 70px;
        color: #fff;
      }
      > .el-menu-item:hover,> .el-menu-item:focus,.el-submenu__title:hover,.el-submenu__title:focus {
        background-color: #444;
      }
      .el-menu-item.is-active {
          border-bottom: 2px solid #fff;
      }
    }
  }
}
</style>
