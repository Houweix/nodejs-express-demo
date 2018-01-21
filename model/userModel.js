//注意路径前加./
let db = require('./db');


exports.reg = function (data,callback) {

    //模版字符串
    let sql = `insert into t_user(username,password) values('${data.name}','${data.pwd}')`;
    //将公共的操作封装模块，每次只需传入sql语句和callback函数
    db.query(sql,callback);
};
