let mysql = require('mysql');
let userModel = require('../model/userModel');

exports.reg = function (req,res) {
    let uname = req.query.name;
    let pwd = req.query.pwd;
    let pwd1 = req.query.pwd1;

    if(pwd == pwd1){

        //数据库操作
        let connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'newblog'
        });
        //连接数据库
        connection.connect();

       let data = {
           name:uname,
           pwd:pwd
        };

       let reslut =  userModel.reg(connection,res,data);

       if(reslut == 'ok'){
           res.send('success');
       }else{
           res.end('pwd-error');
       }

    }else{
        res.end('pwd-error');
    }
};

