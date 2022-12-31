const express = require('express');
const mysql = require('mysql2');
const connect = require('./conexao.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/clientes', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("select * from atividade", res);
})

app.get('/clientes/:email&:senha', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("select * from atividade where email='"+req.params.email+"' and senha='"+req.params.senha+"'", res);
})

app.get('/clientes/:email', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("select * from atividade where email='"+req.params.email+"'", res);
})

app.post('/clientes/post', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("insert into atividade (email, senha) value('"+req.body.email+"','"+req.body.senha+"')", res);

})

const PORT = process.env.PORT ||5000;

app.listen(PORT,console.log(`Server started on port ${PORT}`));