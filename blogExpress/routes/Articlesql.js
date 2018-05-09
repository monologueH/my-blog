var table = "article";
var Articlesql = {
  insert: "INSERT INTO " + table + "(title,content,publishTime) VALUES(?,?,?)",
  queryAll:
    "SELECT id,title,publishTime,modifyTime,commentNum,category FROM " +
    table +
    "",
  getUserById: "SELECT * FROM " + table + " WHERE title = ? ",
  update: "update " + table + " set name=? where name=?",
  delete: "delete from " + table + " where id=?"
};
module.exports = Articlesql;
