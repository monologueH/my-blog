var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var dbConfig = require("./DBconfig");
var Articlesql = require("./Articlesql");
var pageId = 0

// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);
// 响应一个JSON数据
var responseJSON = function(res, ret) {
  if (typeof ret === "undefined") {
    res.json({
      code: "-200",
      msg: "操作失败"
    });
  } else {
    res.json(ret);
  }
};

// 添加文章
router.get("/addArticle", function(req, res, next) {
  // 从连接池获取连接
  pool.getConnection(function(err, connection) {
    // 获取前台页面传过来的参数
    var param = req.query || req.params;
    // 建立连接 增加一个用户信息
    console.log(param);
    console.log(err);
    var currentTime = new Date().getTime();
    console.log(currentTime);
    connection.query(
      Articlesql.insert,
      [param.title, param.content, currentTime],
      function(err, result) {
        if (result) {
          result = {
            code: 0,
            msg: "新增文章成功",
            id: result.insertId
          };
        }
        // console.log(res)

        // 以json形式，把操作结果返回给前台页面
        responseJSON(res, result);

        // 释放连接
        connection.release();
      }
    );
  });
});
// 查询文章标题列表
router.get("/queryTitlelist", function(req, res, next) {
  pool.getConnection((err, connection) => {
    var param = req.query || req.params;
    connection.query(Articlesql.queryAll, function(err, result) {
      console.log(result);
      if (result) {
        result = { code: 0, msg: "获取文章列表成功", data: pageId++ };
      }
      // console.log(res)

      // 以json形式，把操作结果返回给前台页面
      responseJSON(res, result);

      // 释放连接
      connection.release();
    });
  });
});

module.exports = router;
