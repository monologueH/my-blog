var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/test", function (err) {
  if (err) {
    console.log('连接失败');
  } else {
    console.log('连接成功');
  }
});
setTimeout(function () {
  mongoose.disconnect(function () {
    console.log("断开连接");
  })
}, 2000);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ user: 'tobi' })
});

module.exports = router;
