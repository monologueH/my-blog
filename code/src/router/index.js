import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import blogArticle from '@/pages/blogArticle'
import marked from "@/pages/marked"
import articleList from "@/pages/articleList";



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/blogArticle",
      name: "blogArticle",
      component: blogArticle
    },
    {
      path: "/articleList",
      name: "articleList",
      component: articleList
    },
    {
      path: "/marked",
      name: "marked",
      component: marked
    }
  ]
});
