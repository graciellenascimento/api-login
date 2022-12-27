const express = require('express');
const mysql = require('mysql2');
const connect = require('./conexao.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Para acessar todos os dados, vá em /clientes; para visualizar separadamente vá em clientes/:id; para editar, siga para /clientes/put/:id; inserir, /clientes/post/:id e deletar, /clientes/delete/:id')
    res.end()
})


app.get('/clientes', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery('select * from atividade', res);
})

app.post('/clientes/post/', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("insert into atividade (email) value('"+req.body.email+"')", res);

})

const PORT = process.env.PORT ||5000;

app.listen(PORT,console.log(`Server started on port ${PORT}`));