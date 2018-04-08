var UserSQL = {
    insert: 'INSERT INTO user(age,name) VALUES(?,?)',
    queryAll: 'SELECT * FROM user',
    getUserById: 'SELECT * FROM user WHERE age = ? ',
};
module.exports = UserSQL;
