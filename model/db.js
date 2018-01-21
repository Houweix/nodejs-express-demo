// 这个db.js是一个公共的函数，包含每次操作数据库的共同操作
let mysql      = require('mysql');

exports.query = function(sql,callback){
    //每次查询都开启一个新的连接
    let connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'myblog'
    });
    connection.connect();
    connection.query(sql, function(error, results){
        if (error) throw error;
        callback(results);
        connection.end();
    });
};