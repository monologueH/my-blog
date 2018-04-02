<template>
  <el-container class="homePage"> 
    <el-aside width="200px" :class="[{'sideNavPackup':isPackup},'sideNav']">
      <div class="packUpButton" @click="hideNav"></div>
      侧边栏
    </el-aside>
    <el-main class="homeContent">

    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      isPackup:false
    };
  },
  methods: {
    hideNav(){
      
      this.isPackup = !this.isPackup
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .homePage{
    .sideNav{
      position: relative;
      background-color: #dc6068;
      transition: all 0.5s;
      overflow: hidden;
      box-shadow: 5px 0px 5px #ccc;
      margin-top: 1px;
      
      .packUpButton{
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        transform: translateX(60%);
        width:36px;  
        height:36px;  
        background-color: rgba(55, 55, 55, 0.9);
        // border-right: 16px solid rgba(55, 55, 55, 0.9);  
        // border-top: 8px solid transparent;  
        // border-bottom:8px solid transparent;  
        border-radius: 50%;
      }
    }
    .sideNavPackup{
      margin-left: -180px;
    }
    .homeContent{
      
    }

  }
</style>
