let userModel = require('../model/userModel');


exports.login_in = function(req, res){
    res.render('login');
};

exports.reg_in = function (req, res) {
    //跳转到注册界面
    res.render('regist');

};

exports.login_post = function(req, res) {
    //req是（外部）请求的信息（request）

    //post方式接收用body
    let uname = req.body.uname;
    let pwd = req.body.pwd;
    //render跳转页面
    res.render('index', { name:uname });
};

exports.reg_get = function (req,res) {
    //get用query
    let uname = req.query.name;
    let pwd = req.query.pwd;
    let pwd1 = req.query.pwd1;
    if(pwd == pwd1){

        let data = {
            name:uname,
            pwd:pwd
        };

        //将回调函数作为一个参数传给model
        let fn = function(results){
            if(results.affectedRows > 0){
                res.send('success');
            }else{
                res.end('pwd-error');
            }
        };

        //调用userModel
        userModel.reg(data,fn);
    }else{
        res.end('pwd-error');
    }
};

exports.checkLogin = function (req, res) {
    let name = req.body.uname;
    let pwd = req.body.pwd;

    userModel.getUserByNameAndPwd(name,pwd,function (results) {
        if(results.length > 0){
            //将查到的值存入session中，注意session是存在req中
            req.session.loginUser = results[0];
            res.render('index',{
                name:name
            });

        }else{
            //错误重新登录
            res.render('/login');
            res.redirect('/login');

        }
    })
};