const mysql = require('mysql');
function execSQLQuery(sqlQry, res){
const connection = mysql.createConnection({
host : 'sql.freedb.tech',
port : '3306',
user : 'freedb_gracielle',
password : 'nFRH?rrNF?TP77%',
database : 'freedb_apilogin'
});

connection.query(sqlQry, function(error, results, fields){
    if(error)
        res.json(error);
    else
        res.json(results);
    connection.end();
    console.log('executou!');
});
}

exports.execSQLQuery = execSQLQuery;