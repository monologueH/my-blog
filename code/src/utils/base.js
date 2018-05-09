exports.install = function (Vue, options) {
    Vue.prototype.verifyUrl = function () {
        //域名判断，是否是线上环境
        var href = window.location.host;
        var index = href.lastIndexOf(".");
        href = href.slice(index + 1);
        if (href == "com") {
            var baseUrl = "blog.zhouhannan.com";
        }
        else {
            var baseUrl = "http://localhost:3003";
        }
        console.log(baseUrl)
        
        return baseUrl
    }
}
