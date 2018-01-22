let express = require('express');
let user = require('../controller/user');

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { name: '游客' });
});


//跳转login
router.get('/login', user.login_in);

//跳转reg
router.get('/reg',user.reg_in);

//登录post请求
router.post('/login', user.login_post);

//注册get请求
router.get('/regist',user.reg_get);

//登录请求
router.post('/login', user.checkLogin);


module.exports = router;
