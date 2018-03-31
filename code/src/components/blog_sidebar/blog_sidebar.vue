<template id="blog_sidebar">
    <label >
        <el-menu default-active="1-4-1" class="homeSideNav_element" router = 'true'>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">技术文章</span>
            </template>
            <el-menu-item-group>
              <span slot="title">2018年</span>
              <el-menu-item index="home">分类1</el-menu-item>
              <el-menu-item index="article">分类2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">随笔</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">友情链接</span>
          </el-menu-item>
        </el-menu>
    </label>
</template>
<script>
    export default {
        data:function(){
            return {
                
            }
        },
        props:{
            citys:Array,
            sheng:Array,
        },
        watch:{
            
        },
        methods:{
            
            tijiao(){
                const self=this;
                let data={
                    sheng:self.selected,
                    shi:self.selecteds,
                    xian:self.selectedss,
                }
                self.$emit('change', data);
                //console.log(data)
            },
        },
        mounted(){
            //this.getcitys();
        },
        computed: {

        }
    }
</script>