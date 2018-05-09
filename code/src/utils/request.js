// request.js
import axios from "axios";
axios.defaults.baseURL = verifyUrl();
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
// 获取店铺分类(ok)
const request = {
    
    // 创建活动（ok）
    // addActivity(param) {
    //     return axios
    //         .post('/activity/addActivity.do', param)
    //         .then(response => response.data)
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // },
    //新增文章
    addNewArticle(params) {
        return axios
          .get("/article/addArticle", { params })
          .then(response => response.data)
            .catch(err => alert("修改失败"));
    },
    queryTitleList(params) {
        return axios
          .get("/article/queryTitlelist", { params })
          .then(response => response.data)
          .catch(err => alert("获取标题列表失败"));
    },
};

export { request };
//域名判断，是否是线上环境
function verifyUrl() {
    var href = window.location.host;
    var index = href.lastIndexOf(".");
    href = href.slice(index + 1);
    if (href == "com") {
        var baseUrl = "blog.zhouhannan.com";
    }
    else {
        var baseUrl = "http://localhost:3003";
    }

    return baseUrl
}