<template>
  <div id="app">
    <el-container>
      <el-header>monologueH's world</el-header>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <!-- 侧边栏 -->
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      isCollapse: true
    }
  },
  methods: {

  }
}
</script>

<style>
.homeSideNav_element:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
.el-header{
  font-family: 'Indie Flower', cursive;
  font-size: 48px;
  text-align: center;
  height: 75px!important;
}
.homeSideNav{
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 201px;
  overflow: auto;
}
.el-main{
  margin-left: 201px;
}
</style>
