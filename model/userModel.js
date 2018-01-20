
exports.reg = function (connection,res,data) {
    //模版字符串
    let sql = `insert into t_user(username,password) values('${data.name}','${data.pwd}')`;
    connection.query(sql, function (error, results) {
        if (error) throw error;
        connection.end();        //关闭连接

        if(results.affectedRows > 0){
            return 'ok';
        }else{
            return 'error';
        }

        // return results;
    });
};
