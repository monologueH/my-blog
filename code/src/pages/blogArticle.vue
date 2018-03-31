<template>
  <div class="blogArticle">
    123
    <sjld :citys="citys" :sheng="sheng" @change="change"></sjld>
  </div>
</template>

<script>
export default {
  name: "blogArticle",
  data() {
    return {
      isCollapse: true,
      citys:[{name:1},{name:2},{name:3}],
      sheng:[{name:1},{name:2},{name:3}]
    };
  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
