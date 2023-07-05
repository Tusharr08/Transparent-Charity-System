var mysql=require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root@Talha",
    database: "signup"
})

module.exports=connection;