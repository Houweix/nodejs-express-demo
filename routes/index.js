let express = require('express');
let user = require('../controller/user');

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: '游客' });
});

//网页url是get方法
router.get('/login', function(req, res, next) {
    res.render('form');
});

//接收来自form.ejs的请求
router.post('/login', function(req, res, next) {
    //req是（外部）请求的信息（request）
    //res是回应的信息（response）
    //post方式接收用body
    let uname = req.body.uname;
    let pwd = req.body.pwd;
    //render跳转页面
    res.render('index', { name:uname });
});

//-------------------------------------------------
//注册

router.get('/regist',function (req, res) {
    //get方式接收用query,从user模块调用方法
    user.reg(req, res);
});

router.get('/reg',function (req, res, next) {
    //跳转到注册界面
    res.render('regist');

});



module.exports = router;
