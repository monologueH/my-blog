var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// 开启mongoose连接
mongoose.connect("mongodb://localhost/test", function (err) {
  if (err) {
    console.log('连接失败');
    

  } else {
    console.log('连接成功');
    var mySchema = new Schema({
      title: String,
      // subTitle: String,
      // timeStamp: Number,
      content: String,
      // comments: [{ body: String, date: Date, hidden: Boolean }],
    })
    var MyModel = mongoose.model('MyModel', mySchema);
    // var article1 = new MyModel({title:'testArticle',content:'我是内容'}).save(function (err,articles) {
    //   console.log(articles)
      
    // })
    MyModel.find(function (err, articles) {
      console.log(articles)
      /* GET home page. */
      router.get('/article/:anything/:anything2', function (req, res, next) {
        console.log(req.query)
        console.log(req.body)
        console.log(req.params)
        res.send('req' + req.query.name)
      });
    })
  }
});





module.exports = router;
