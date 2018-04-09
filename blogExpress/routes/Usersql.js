var UserSQL = {
    insert: 'INSERT INTO user(age,name) VALUES(?,?)',
    queryAll: 'SELECT * FROM user',
    getUserById: 'SELECT * FROM user WHERE age = ? ',
    update:'update user set name=? where name=?',
    delete:'delete from user where id=?'
};
module.exports = UserSQL;
