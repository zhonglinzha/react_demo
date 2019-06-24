/* eslint-disable*/

var Sequelize = require('sequelize');

// 初始化链接（支持连接池）
var sequelize = new Sequelize('mysqlzzl', 'mysqlzzl', 'mysqlzzl123',  {
  host: 'db4free.net',
  dialect: 'mysql',
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

//定义数据模型
var User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

console.log(sequelize.getQueryInterface())
//初始化数据
// sequelize.sync().then(function() {
//   return User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   });
// }).then(function(jane) {
//   //获取数据
//   console.log(jane.get({
//     plain: true
//   }));
// }).catch(function (err) {
//   //异常捕获
//   console.log('Unable to connect to the database:', err);
// });
